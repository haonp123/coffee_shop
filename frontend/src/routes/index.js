import Home from '../pages/Home';
import Detail from '../pages/Detail';
import About from '../pages/About';
import FlashSale from '../pages/FlashSale';
import KhuyenMai from '../pages/KhuyenMai/KhuyenMai';
import SanPham from '../pages/SanPham';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NewProduct from '../pages/NewProduct';
import Profile from '../pages/Profile';
import Order from '../pages/Order';

import config from '../config';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.createProduct,
        component: NewProduct,
    },
    {
        path: config.routes.detail,
        component: Detail,
    },
    {
        path: config.routes.about,
        component: About,
    },
    {
        path: config.routes.flashSale,
        component: FlashSale,
    },
    {
        path: config.routes.productList,
        component: SanPham,
    },
    {
        path: config.routes.khuyenMai,
        component: KhuyenMai,
    },
];

export const logRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.signUp,
        component: SignUp,
    },
];

export const privateRoutes = [
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.order,
        component: Order,
    },
];
