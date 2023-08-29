import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import image from '../../assets/images/bocongthuong.png';
import * as icons from '../../icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('col')} style={{ width: '270px' }}>
                    <h3 className={cx('title')}>coffee place cpg</h3>
                    <div className={cx('content')}>
                        Coffee Place CPG thuộc công ty TNHH MTV Thái Kiên tự hào là nhà phân phối hợp lệ và độc quyền
                        cho tất cả các sản phẩm mang thương hiệu Coffee Place.
                    </div>
                    <img src={image} alt="bo_cong_thuong" />
                </div>
                <div className={cx('col')} style={{ width: '400px' }}>
                    <h3 className={cx('title')}>thông tin công ty</h3>
                    <div className={cx('content')}>
                        <p>Trụ sở văn phòng: Tòa AH, Kí túc xá khu A, Đại Học Quốc Gia TP.HCM</p>
                        <p>Điện thoại: 0123456789</p>
                        <p>Email: placecoffee@gmai.com</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <h3 className={cx('title')}>hỗ trợ khách hàng</h3>
                    <div className={cx('content')}>
                        <ul>
                            <li>Tìm kiếm</li>
                            <li>Giới thiệu</li>
                            <li>Chính sách đổi trả</li>
                            <li>Chính sách bảo mật</li>
                            <li>Chính sách giao hàng</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('col')}>
                    <h3 className={cx('title')}>follow us</h3>
                    <div className={cx('content', 'social-list')}>
                        <icons.FacebookIcon />
                        <icons.InstagramIcon />
                        <icons.YoutubeIcon />
                    </div>
                </div>
            </div>
            <p className={cx('license')}>
                Bản quyền thuộc về
                <b>haonp123</b>
            </p>
        </div>
    );
}

export default Footer;
