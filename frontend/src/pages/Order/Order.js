import classNames from 'classnames/bind';
import styles from './Order.module.scss';

const cx = classNames.bind(styles);

function Order() {
    return <div className={cx('wrapper')}> Order Page </div>;
}

export default Order;
