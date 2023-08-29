import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { useState, useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import MainButton from '../../components/MainButton';
import * as controller from '../../controller';
import * as icons from '../../icons';
import GlobalContext from '../../context/GlobalContext';

const cx = classNames.bind(styles);

function Detail() {
    const { currentUser, currentCart, setCurrentCart } = useContext(GlobalContext);
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [rateOpen, setRateOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState();

    const getFullName = () => {
        if (!currentUser) return '';
        return currentUser.firstName + ' ' + currentUser.lastName;
    };
    const getEmail = () => {
        if (!currentUser) return '';
        return currentUser.email;
    };
    const [email, setEmail] = useState(getEmail());
    const [fullName, setFullName] = useState(getFullName());

    //Get data from server:
    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then((response) => response.json())
            .then((value) => setCurrentProduct(value))
            .catch((error) => console.log(error));
    }, []);

    const addToCart = async () => {
        const data = {
            cart_id: currentCart._id,
            product_id: id,
            quantity: count,
        };
        const response = await fetch('/api/carts/add_product', {
            method: 'PUT',
            body: JSON.stringify(data),
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
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {' '}
                {currentProduct && (
                    <>
                        <div className={cx('image-container')}>
                            <img src={currentProduct.imageLink} alt="product" />
                        </div>{' '}
                        <div className={cx('product-info')}>
                            <h1 className={cx('name')}> {currentProduct.name} </h1>{' '}
                            <div className={cx('more-info')}>
                                <p className={cx('brand')}> Thương hiệu: Highland Coffee </p>{' '}
                                <p className={cx('id')}> Mã sản phẩm: haonp123 </p>{' '}
                            </div>{' '}
                            <div className={cx('price-container')}>
                                <h3 className={cx('current-price')}>
                                    {' '}
                                    {controller.convertPriceToString(currentProduct.price)}đ{' '}
                                </h3>{' '}
                                {currentProduct.oldPrice && (
                                    <div className={cx('sale-info')}>
                                        <div className={cx('sale-price')}>
                                            Giá thị trường:
                                            <p className={cx('line-price')}>
                                                {' '}
                                                {controller.convertPriceToString(currentProduct.oldPrice)}đ{' '}
                                            </p>{' '}
                                        </div>{' '}
                                        <p className={cx('save-price')}>
                                            Tiết kiệm:{' '}
                                            {controller.convertPriceToString(
                                                currentProduct.oldPrice - currentProduct.price,
                                            )}
                                            đ{' '}
                                        </p>{' '}
                                    </div>
                                )}{' '}
                            </div>{' '}
                            <div className={cx('actions')}>
                                <div className={cx('count-action')}>
                                    <div
                                        onClick={() => {
                                            if (count > 1) {
                                                setCount(count - 1);
                                            }
                                        }}
                                        className={cx('change')}
                                    >
                                        -
                                    </div>{' '}
                                    <div className={cx('count')}> {count} </div>{' '}
                                    <div onClick={() => setCount((prev) => prev + 1)} className={cx('change')}>
                                        +
                                    </div>{' '}
                                </div>{' '}
                                <div className={cx('more-action')}>
                                    <MainButton
                                        onClick={() => {
                                            if (!currentUser) {
                                                alert('Bạn phải đăng nhập đã!!!');
                                            } else {
                                                addToCart();
                                            }
                                        }}
                                    >
                                        THÊM VÀO GIỎ HÀNG{' '}
                                    </MainButton>{' '}
                                    <MainButton onClick={() => setRateOpen(true)}> ĐÁNH GIÁ </MainButton>{' '}
                                </div>{' '}
                            </div>{' '}
                            <h1 className={cx('detail-header')}> Mô tả sản phẩm: </h1>{' '}
                            <p className={cx('detail-content')}> {currentProduct.description} </p>{' '}
                            <h1 className={cx('title')}> Giao hàng toàn quốc </h1>{' '}
                            <h1 className={cx('title')}> Hướng dẫn bảo quản </h1>{' '}
                        </div>{' '}
                    </>
                )}{' '}
            </div>{' '}
            {rateOpen && (
                <div className={cx('rate-container')}>
                    <div className={cx('rate-modal')}>
                        <icons.CloseIcon
                            onClick={() => setRateOpen(false)}
                            width="3.5rem"
                            height="3.5rem"
                            className={cx('closeRate-btn')}
                        />{' '}
                        <h3 className={cx('rate-heading')}> Đánh giá sản phẩm </h3>{' '}
                        <h1 className={cx('rate-productName')}> {currentProduct.name} </h1>{' '}
                        {currentUser && (
                            <>
                                <div className={cx('rate-action')}>
                                    <p> Đánh giá của bạn về sản phẩm: </p>{' '}
                                    <div className={cx('star-list')}>
                                        <icons.StarIcon className={cx('star-icon')} />{' '}
                                        <icons.StarIcon className={cx('star-icon')} />{' '}
                                        <icons.StarIcon className={cx('star-icon')} />{' '}
                                        <icons.StarIcon className={cx('star-icon')} />{' '}
                                        <icons.StarIcon className={cx('star-icon')} />{' '}
                                    </div>{' '}
                                </div>{' '}
                                <form className={cx('rate-form')} action="">
                                    <input
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        type="text"
                                        required
                                    />
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        required
                                    />
                                    <textarea
                                        placeholder="Nhập nội dung đánh giá của bạn về sản phẩm này"
                                        className={cx('rate-content')}
                                        required
                                        cols="30"
                                        rows="10"
                                    ></textarea>{' '}
                                    <button className={cx('send-btn')}> Gửi đánh giá </button>{' '}
                                </form>{' '}
                            </>
                        )}{' '}
                        {!currentUser && (
                            <NavLink
                                to="/login"
                                onClick={() => {
                                    setRateOpen(false);
                                }}
                                className={cx('login')}
                            >
                                Bạn phải đăng nhập đã!!!
                            </NavLink>
                        )}{' '}
                    </div>{' '}
                </div>
            )}{' '}
        </div>
    );
}

export default Detail;
