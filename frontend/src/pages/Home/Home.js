import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import bartender from '../../assets/images/cachpha.png';
import logo from '../../assets/images/logo.png';
import bestSeller from '../../assets/images/bestseller.jpg';
import delivery from '../../assets/images/delivery.jpg';
import phone from '../../assets/images/phone.jpg';

import * as icons from '../../icons';
import config from '../../config';
import * as controller from '../../controller';
import MainButton from '../../components/MainButton';
import ProductCol from '../../components/ProductCol/ProductCol';

const cx = classNames.bind(styles);

const slideList = [
    {
        title: 'Slide_1',
        path: require('../../assets/images/Slide_1.jpg'),
    },
    {
        title: 'Slide_2',
        path: require('../../assets/images/Slide_2.jpg'),
    },
    {
        title: 'Slide_3',
        path: require('../../assets/images/Slide_3.jpg'),
    },
];

const delay = 4500; //seconds
const time = 165659; //seconds

function Home() {
    //Slider
    const myRef = useRef();
    const [slideID, setSlideID] = useState(0);
    const [saleTime, setSaleTime] = useState(time);

    //Product list
    const [dealList, setDealList] = useState();
    const [dealMove, setDealMove] = useState(0);
    const [bestSellerList, setBestSellerList] = useState();
    const [sellerMove, setSellerMove] = useState(0);

    useEffect(() => {
        const setData = async () => {
            const response = await fetch('/api/products');
            const json = await response.json();
            if (response.ok) {
                setDealList(json.dealList);
                setBestSellerList(json.bestSellerList);
            } else {
                console.error(json.error);
            }
        };
        setData();
    }, []);

    //Handle format time:
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    useEffect(() => {
        myRef.current = {
            timeoutSlide: setTimeout(() => {
                setSlideID((prev) => (prev === slideList.length - 1 ? 0 : prev + 1));
            }, delay),
        };

        return () => {
            if (myRef.current) {
                clearTimeout(myRef.current.timeoutSlide);
            }
        };
    }, [slideID]);

    useEffect(() => {
        myRef.current.timeoutSale = setTimeout(() => {
            setSaleTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => {
            if (myRef.current.timeoutSale) {
                clearTimeout(myRef.current.timeoutSale);
            }
        };
    }, [saleTime]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('slider')}>
                    <div
                        className={cx('slide-image-list')}
                        style={{ transform: `translate3d(${-slideID * 100}%, 0, 0)` }}
                    >
                        {slideList.map((slide, index) => {
                            return (
                                <img
                                    key={index}
                                    alt={slide.title}
                                    className={cx('slide-image-item')}
                                    src={slide.path}
                                />
                            );
                        })}
                    </div>
                    <div className={cx('slide-btn-list')}>
                        {slideList.map((slide, index) => {
                            return (
                                <button
                                    onClick={() => setSlideID(index)}
                                    key={index}
                                    className={cx('slide-btn-item', { active: index === slideID })}
                                ></button>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('nav-list')}>
                    <div className={cx('nav-item')}>
                        <img className={cx('nav-image')} src={delivery} alt="nav_item" />
                        <p className={cx('nav-title')}> Giao hàng </p>
                    </div>
                    <div className={cx('nav-item')}>
                        <img className={cx('nav-image')} src={bestSeller} alt="nav_item" />
                        <p className={cx('nav-title')}> Bán chạy </p>
                    </div>
                    <div className={cx('nav-item')}>
                        <img className={cx('nav-image')} src={logo} alt="nav_item" />
                        <p className={cx('nav-title')}> Cửa hàng </p>
                    </div>
                    <div className={cx('nav-item')}>
                        <img className={cx('nav-image')} src={bartender} alt="nav_item" />
                        <p className={cx('nav-title')}> Cách pha </p>
                    </div>
                    <div className={cx('nav-item')}>
                        <img className={cx('nav-image')} src={phone} alt="nav_item" />
                        <p className={cx('nav-title')}> Liên hệ </p>
                    </div>
                </div>
                <div className={cx('endow-container')}>
                    <h3 className={cx('endow-title')}> Ưu đãi của bạn </h3>
                    <div className={cx('endow-list')}>
                        <div className={cx('endow-item')}>
                            <h4 className={cx('endow-heading')}> Voucher </h4>
                            <p className={cx('endow-content')}>
                                Voucher giảm 20 K cho đơn hàng từ 340 K.Lưu / Nhập mã tại mục Thanh Toán nhé.
                            </p>
                            <div className={cx('code-container')}>
                                <div className={cx('code')}> KM20K </div>
                                <MainButton onClick={() => alert('Đã lưu.')}> Lưu </MainButton>
                            </div>
                        </div>
                        <div className={cx('endow-item')}>
                            <h4 className={cx('endow-heading')}> Ưu đãi tại cửa hàng </h4>
                            <p className={cx('endow-content')}>
                                Nhận ưu đãi tại quán khi mua hàng tại website chính hãng Highlands Coffee.
                            </p>
                            <div className={cx('code-container')}>
                                <div className={cx('code')}> xxx </div>
                                <MainButton onClick={() => alert('Đã lưu.')}> Lưu </MainButton>
                            </div>
                        </div>
                        <div className={cx('endow-item')}>
                            <h4 className={cx('endow-heading')}> Giao hàng toàn quốc </h4>
                            <p className={cx('endow-content')}>
                                Đặt hàng online.Giao hàng tận nơi với phí ship chỉ từ 25 k.
                            </p>
                            <div className={cx('code-container')}>
                                <div className={cx('code')}> FREESHIP032 </div>{' '}
                                <MainButton onClick={() => alert('Đã lưu.')}> Lưu </MainButton>
                            </div>
                        </div>
                        <div className={cx('endow-item')}>
                            <h4 className={cx('endow-heading')}> Deal hời </h4>
                            <p className={cx('endow-content')}>
                                Giảm giá lên đến 30 % đối với các sản phẩm đóng lon, uống liền.
                            </p>
                            <div className={cx('code-container')}>
                                <div className={cx('code')}> SALE30 </div>{' '}
                                <MainButton onClick={() => alert('Đã lưu.')}> Lưu </MainButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('section-container')}>
                    <div className={cx('section-title')}>
                        <div className={cx('title-content')}>
                            <icons.BoltIcon width="3rem" height="3rem" />
                            <h1> deal đang diễn ra </h1>
                            <div className={cx('time-container')}>
                                <span className={cx('time')}> {formatTime(Math.floor(saleTime / 86400))} </span>
                                <p>: </p>
                                <span className={cx('time')}>{formatTime(Math.floor((saleTime % 86400) / 3600))}</span>
                                <p>: </p>
                                <span className={cx('time')}>
                                    {formatTime(Math.floor(((saleTime % 86400) % 3600) / 60))}
                                </span>
                                <p>: </p>
                                <span className={cx('time')}>
                                    {formatTime(Math.floor(((saleTime % 86400) % 3600) % 60))}
                                </span>
                            </div>
                        </div>
                        <NavLink
                            onClick={controller.goToTop}
                            style={{ textDecoration: 'none' }}
                            to={config.routes.flashSale}
                        >
                            <MainButton> Xem tất cả </MainButton>
                        </NavLink>
                    </div>
                    {dealList && (
                        <div className={cx('list-container')}>
                            <div className={cx('product-list')}>
                                <div
                                    style={{ transform: `translateX(${dealMove * 250}px)` }}
                                    className={cx('limit-container')}
                                >
                                    {dealList.map((product, index) => {
                                        return (
                                            <div key={index} className={cx('product-element')}>
                                                <ProductCol data={product} typeCol="col-5" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <span
                                onClick={() => {
                                    setDealMove((prev) => (prev === 0 ? prev : prev + 1));
                                }}
                                style={{ left: 0 }}
                                className={cx('left-btn')}
                            >
                                <icons.AngleLeftIcon />
                            </span>
                            <span
                                onClick={() => {
                                    setDealMove((prev) => (-prev === dealList.length - 5 ? prev : prev - 1));
                                }}
                                style={{ right: 0 }}
                                className={cx('right-btn')}
                            >
                                <icons.AngleRightIcon />
                            </span>
                        </div>
                    )}
                </div>
                <div className={cx('section-container')}>
                    <div className={cx('section-title')}>
                        <div className={cx('title-content')}>
                            <icons.HotIcon width="3rem" height="3rem" />
                            <h1> sản phẩm bán chạy </h1>
                        </div>
                        <NavLink
                            onClick={controller.goToTop}
                            style={{ textDecoration: 'none' }}
                            to={config.routes.productList}
                        >
                            <MainButton> Xem tất cả </MainButton>
                        </NavLink>
                    </div>
                    {bestSellerList && (
                        <div className={cx('list-container')}>
                            <div className={cx('product-list')}>
                                <div
                                    style={{ transform: `translateX(${sellerMove * 250}px)` }}
                                    className={cx('limit-container')}
                                >
                                    {bestSellerList.map((product, index) => {
                                        return (
                                            <div key={index} className={cx('product-element')}>
                                                <ProductCol data={product} typeCol="col-5" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <span
                                onClick={() => {
                                    setSellerMove((prev) => (prev === 0 ? prev : prev + 1));
                                }}
                                style={{ left: 0 }}
                                className={cx('left-btn')}
                            >
                                <icons.AngleLeftIcon />
                            </span>
                            <span
                                onClick={() => {
                                    setSellerMove((prev) => (-prev === bestSellerList.length - 5 ? prev : prev - 1));
                                }}
                                style={{ right: 0 }}
                                className={cx('right-btn')}
                            >
                                <icons.AngleRightIcon />
                            </span>
                        </div>
                    )}
                </div>
                <div className={cx('more-container')}>
                    <NavLink
                        onClick={controller.goToTop}
                        style={{ textDecoration: 'none' }}
                        to={config.routes.productList}
                    >
                        <button className={cx('more-btn')}> Xem thêm sản phẩm </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;
