import classNames from 'classnames/bind';
import styles from './ProductCol.module.scss';

import { NavLink } from 'react-router-dom';

import { useContext } from 'react';

import MainButton from '../MainButton/MainButton';
import * as controller from '../../controller';
import GlobalContext from '../../context/GlobalContext';

const cx = classNames.bind(styles);

function ProductCol({ typeCol, data }) {
    const { currentCart, setCurrentCart } = useContext(GlobalContext);

    const handleBuySelect = async () => {
        const value = {
            cart_id: currentCart._id,
            product_id: data._id,
            quantity: 1,
        };
        const response = await fetch('/api/carts/add_product', {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: { 'Content-type': 'application/json' },
        });

        const json = await response.json();

        if (response.ok) {
            setCurrentCart(json);
            alert('Thêm thành công!!!');
        } else {
            alert(json.error);
        }
    };

    return (
        <div className={cx('wrapper', { 'col-4': typeCol === 'col-4', 'col-5': typeCol === 'col-5' })}>
            <NavLink onClick={controller.goToTop} to={`/detail/${data._id}`} className={cx('link-container')}>
                <div className={cx('product-image')}>
                    <img src={data.imageLink} alt="product" />
                </div>
                <h4 className={cx('product-name')}> {data.name} </h4>
            </NavLink>
            <div className={cx('price-container')}>
                <span> {controller.convertPriceToString(data.price)}đ </span>
                {data.oldPrice && (
                    <span className={cx({ 'line-price': data.oldPrice })}>
                        {controller.convertPriceToString(data.oldPrice)}
                    </span>
                )}
            </div>
            <MainButton onClick={handleBuySelect}>Chọn mua</MainButton>

            {data.oldPrice && (
                <span className={cx('discount')}>-{100 - Math.floor((data.price / data.oldPrice) * 100)}%</span>
            )}
        </div>
    );
}

export default ProductCol;
