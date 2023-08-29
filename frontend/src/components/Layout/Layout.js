import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
