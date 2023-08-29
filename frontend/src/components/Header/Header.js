import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import config from '../../config';
import * as icons from '../../icons';
import MainButton from '../MainButton';
import * as controller from '../../controller';
import GlobalContext from '../../context/GlobalContext';

const cx = classNames.bind(styles);

function Header() {
    const { cartOpen, setCartOpen, currentUser, setCurrentUser, currentCart, setCurrentCart, currentNotify } =
        useContext(GlobalContext);

    let moneyTotal = 0;

    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        if (currentCart) {
            if (currentCart.product_list.length > 0) {
                currentCart.product_list.map((product) => {
                    fetch(`/api/products/${product.product_id}`)
                        .then((response) => response.json())
                        .then((value) => setCartList((prev) => [...prev, value]));
                });
            } else {
                setCartList([]);
            }
        }
    }, [currentCart]);

    const changeProductListCart = (newProductList) => {
        fetch('/api/carts/change_productList', {
            method: 'PUT',
            body: JSON.stringify({
                cart_id: currentCart._id,
                newProductList,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((value) => {
                setCurrentCart(value);
            })
            .catch((error) => console.log(error));
    };

    const renderCartInfo = () => {
        return (
            <>
                <div className={cx('cart-header')}>
                    <div className={cx('cart-heading')}>
                        <h1> giỏ hàng </h1>
                        <icons.CloseIcon
                            onClick={() => setCartOpen(false)}
                            className={cx('close-btn')}
                            width="3.2rem"
                            height="3.2rem"
                        />
                    </div>
                    <div className={cx('cart-list')}>
                        {cartList.length === 0 ? (
                            <p className={cx('empty-cartList')}>Không có sản phẩm nào</p>
                        ) : (
                            currentCart.product_list.map((element, index) => {
                                const product = cartList[index];
                                if (product) {
                                    moneyTotal += element.quantity * product.price;
                                }
                                let newQuantity = element.quantity;
                                return (
                                    <div className={cx('cart-item')} key={index}>
                                        {product && (
                                            <>
                                                <div className={cx('image-container')}>
                                                    <img src={product.imageLink} alt="cart_item" />
                                                </div>
                                                <div className={cx('info')}>
                                                    <h3> {product.name} </h3>
                                                    <div className={cx('more-info')}>
                                                        <p> Số lượng </p>
                                                        <p className={cx('price')}>
                                                            {controller.convertPriceToString(product.price)}đ
                                                        </p>
                                                    </div>
                                                    <div className={cx('actions')}>
                                                        <div className={cx('count-action')}>
                                                            <div
                                                                onClick={() => {
                                                                    if (newQuantity > 1) {
                                                                        const newProductList = currentCart.product_list;
                                                                        newProductList[index].quantity =
                                                                            newQuantity - 1;
                                                                        changeProductListCart(newProductList);
                                                                    }
                                                                }}
                                                                className={cx('change')}
                                                            >
                                                                -
                                                            </div>
                                                            <div className={cx('count')}> {element.quantity} </div>
                                                            <div
                                                                onClick={() => {
                                                                    const newProductList = currentCart.product_list;
                                                                    newProductList[index].quantity = newQuantity + 1;
                                                                    changeProductListCart(newProductList);
                                                                }}
                                                                className={cx('change')}
                                                            >
                                                                +
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                const newProductList = currentCart.product_list.filter(
                                                                    (product) =>
                                                                        product.product_id !== element.product_id,
                                                                );
                                                                changeProductListCart(newProductList);
                                                            }}
                                                            className={cx('remove-btn')}
                                                        >
                                                            Bỏ sản phẩm
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
                {cartList.length > 0 && (
                    <div className={cx('cart-footer')}>
                        <div className={cx('total-container')}>
                            <p className={cx('total-title')}> Tổng tiền: </p>
                            <p className={cx('money-total')}> {controller.convertPriceToString(moneyTotal)}đ </p>
                        </div>
                        <MainButton> Thanh toán </MainButton>
                    </div>
                )}
            </>
        );
    };

    const renderNotify = () => {
        if (currentNotify) {
            const notifyList = currentNotify.list;
            if (notifyList.length === 0) {
                return <p className={cx('empty-message')}>Không có thông báo</p>;
            } else {
                return (
                    <>
                        <div className={cx('notify-list')}>
                            {notifyList.map((element, index) => {
                                return (
                                    <div
                                        className={cx('notify-item', {
                                            notifyRead: element.read,
                                        })}
                                        key={index}
                                    >
                                        <img
                                            className={cx('notify-image')}
                                            src="/images/logo.png"
                                            alt="notification_anh"
                                        />
                                        <div className={cx('notify-text')}>
                                            <div className={cx('notify-title')}>{element.title}</div>
                                            <div className={cx('notify-content')}>{element.content}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('view-all')}>Xem tất cả</div>
                    </>
                );
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'center')}>
                <NavLink
                    onClick={controller.goToTop}
                    className={cx('logo-container', 'center')}
                    to={config.routes.home}
                >
                    <img className={cx('logo')} src="/images/logo.png" alt="logo" />
                </NavLink>
                <div className={cx('center-container')}>
                    <div className={cx('search-container', 'center')}>
                        <input className={cx('search-input')} type="text" placeholder="Tìm sản phẩm" />
                        <div className={cx('search-btn', 'center')}>
                            <icons.SearchIcon />
                        </div>
                    </div>
                    <div className={cx('nav_user-container')}>
                        <div className={cx('navbar')}>
                            <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.home}
                            >
                                Trang chủ
                            </NavLink>
                            <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.flashSale}
                            >
                                flash sale
                            </NavLink>
                            <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.khuyenMai}
                            >
                                khuyến mãi
                            </NavLink>
                            <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.productList}
                            >
                                sản phẩm
                            </NavLink>
                            <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.about}
                            >
                                giới thiệu
                            </NavLink>
                            {/* <NavLink
                                onClick={controller.goToTop}
                                className={(nav) => cx('nav-button', { active: nav.isActive })}
                                to={config.routes.createProduct}
                            >
                                Tạo sản phẩm mới
                            </NavLink> */}
                        </div>
                        <div className={cx('user-container')}>
                            <Tippy
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('menu-notify')} tabIndex="-1" {...attrs}>
                                        <h1 className={cx('notify-heading')}>Thông báo mới nhận</h1>
                                        {currentUser ? (
                                            renderNotify()
                                        ) : (
                                            <Link to={config.routes.login} className={cx('notify-log')}>
                                                Bạn phải đăng nhập đã!!!
                                            </Link>
                                        )}
                                    </div>
                                )}
                            >
                                <div className={cx('user-item')}>
                                    <icons.BellIcon className={cx('user_item-icon')} />
                                    <p className={cx('user_item-name')}> Thông báo </p>
                                </div>
                            </Tippy>
                            {currentUser ? (
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('menu-user')} tabIndex="-1" {...attrs}>
                                            <div className={cx('triangle')}> </div>
                                            <NavLink to={config.routes.profile} className={cx('menu-user_item')}>
                                                Tài khoản của tôi
                                            </NavLink>
                                            <NavLink to={config.routes.order} className={cx('menu-user_item')}>
                                                Đơn mua
                                            </NavLink>
                                            <div
                                                onClick={() => {
                                                    setCurrentUser(undefined);
                                                    setCurrentCart(undefined);
                                                    localStorage.removeItem('currentUser');
                                                }}
                                                className={cx('menu-user_item')}
                                            >
                                                Đăng xuất
                                            </div>
                                        </div>
                                    )}
                                >
                                    <div className={cx('user-item')}>
                                        <icons.UserIcon
                                            className={cx('user_item-icon')}
                                            width="2.4rem"
                                            height="2.4rem"
                                        />
                                        <p className={cx('user_item-name')}> Xin chào </p>
                                    </div>
                                </Tippy>
                            ) : (
                                <div className={cx('user-item')}>
                                    <icons.UserIcon className={cx('user_item-icon')} width="2.4rem" height="2.4rem" />
                                    <Link to={config.routes.login} className={cx('user_item-name')}>
                                        Đăng nhập
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('cart_icon-container')}>
                    <icons.CartIcon
                        onClick={() => setCartOpen(true)}
                        width="3rem"
                        height="3rem"
                        className={cx('cart-icon')}
                    />
                    {currentCart && (
                        <span className={cx('quantity')}>
                            {currentCart.product_list.reduce((sum, product) => sum + product.quantity, 0)}
                        </span>
                    )}
                </div>
            </div>
            {/* Cart Info */}
            <div className={cx('cart-modal', { cartModalShow: cartOpen })}>
                <div className={cx('cart-container')}>
                    {currentUser ? (
                        renderCartInfo()
                    ) : (
                        <>
                            <div className={cx('cart-heading')}>
                                <h1> giỏ hàng </h1>
                                <icons.CloseIcon
                                    onClick={() => setCartOpen(false)}
                                    className={cx('close-btn')}
                                    width="3.2rem"
                                    height="3.2rem"
                                />
                            </div>
                            <Link
                                onClick={() => setCartOpen(false)}
                                to={config.routes.login}
                                className={cx('cart-login')}
                            >
                                Bạn phải đăng nhập đã!!!
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
