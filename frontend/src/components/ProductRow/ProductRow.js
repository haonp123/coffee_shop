import classNames from 'classnames/bind';
import styles from './ProductRow.module.scss';

import ProductCol from '../ProductCol';

const cx = classNames.bind(styles);

function ProductRow({ typeRow, list }) {
    const typeCol = typeRow === 'row-4' ? 'col-4' : 'col-5';

    return (
        <div className={cx('wrapper')}>
            {list.map((product, index) => {
                return (
                    <div className={cx(`${typeCol}-element`)} key={index}>
                        <ProductCol typeCol={typeCol} data={product} />
                    </div>
                );
            })}
        </div>
    );
}

export default ProductRow;
