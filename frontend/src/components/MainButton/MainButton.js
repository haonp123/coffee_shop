import classNames from 'classnames/bind';
import styles from './MainButton.module.scss';

const cx = classNames.bind(styles);

function MainButton({ onClick, children }) {
    return (
        <div onClick={onClick} className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default MainButton;
