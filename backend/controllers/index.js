const mongoose = require("mongoose");

const Models = require("../models");

//Create new account
const createNewUser = async (req, res) => {
    const { email, password_1, password_2 } = req.body;

    //Check email:
    const presentEmail = await Models.User.findOne({ email: email });
    if (presentEmail) {
        return res.status(400).json({ error: "Email này đã được sử dụng! Vui lòng sử dụng email khác." });
    }

    //Validate two passwords
    if (password_1 !== password_2) {
        return res.status(400).json({ error: "Mật khẩu không khớp nhau! Vui lòng kiểm tra lại." });
    }

    try {
        const user = await Models.User.create({ email, password: password_1, fullName: null, phoneNumber: null });
        const cart = await Models.Cart.create({ user_id: user._id });
        const notification = await Models.Notification.create({ user_id: user._id });
        res.status(200).json(user._id);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//HandleLogin
const handleLogin = async (req, res) => {
    const { email, password } = req.body;

    //Find by email:
    const user = await Models.User.findOne({ email: email });
    const cart = await Models.Cart.findOne({ user_id: user._id });
    if (user && user.password === password) {
        return res.status(200).json(user._id);
    }
    res.status(400).json({ error: "Email hoặc mật khẩu không chính xác!" });
};

//Get all products
const getProductsAll = async (req, res) => {
    //Current page:
    const currentPage = req.query.page || 1;
    const productsPerPage = 8;

    try {
        const skip = (currentPage - 1) * productsPerPage;
        const count = await Models.Product.estimatedDocumentCount({});
        const products = await Models.Product.find({}).limit(productsPerPage).skip(skip);
        const pageCount = Math.ceil(count / productsPerPage);
        res.status(200).json({
            pagination: { count, pageCount },
            products,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

//Get flash sale products
const getFlashSale = async (req, res) => {
    //Current page:
    const currentPage = req.query.page || 1;
    const productsPerPage = 8;

    try {
        const skip = (currentPage - 1) * productsPerPage;
        const count = (await Models.Product.find({ oldPrice: { $ne: null } })).length;
        const products = await Models.Product.find({ oldPrice: { $ne: null } })
            .limit(productsPerPage)
            .skip(skip);
        const pageCount = Math.ceil(count / productsPerPage);
        res.status(200).json({
            pagination: { count, pageCount },
            products,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

//Get khuyen_mai products
const getKhuyenMai = async (req, res) => {
    //Current page:
    const currentPage = req.query.page || 1;
    const productsPerPage = 8;

    try {
        const skip = (currentPage - 1) * productsPerPage;
        const count = (await Models.Product.find({ offer: true })).length;
        const products = await Models.Product.find({ offer: true }).limit(productsPerPage).skip(skip);
        const pageCount = Math.ceil(count / productsPerPage);
        res.status(200).json({
            pagination: { count, pageCount },
            products,
        });
    } catch (error) {
        res.status(400).json({ error });
    }
};

//Get single product
const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout!!!" });
    }

    const product = await Models.Product.findById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(400).json({ error: "No such product!!!" });
    }
};

//Create new product:
const createNewProduct = async (req, res) => {
    const data = req.body;
    try {
        const newProduct = await Models.Product.create({ ...data });
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(404).json({ error });
    }
};

//Get deal list
const getAtHome = async (req, res) => {
    const dealList = await Models.Product.find({ oldPrice: { $ne: null } }).limit(10);
    const bestSellerList = await Models.Product.find().limit(10);

    if (dealList && bestSellerList) {
        res.status(200).json({ dealList, bestSellerList });
    } else {
        res.status(400).json({ error: "No product!!!" });
    }
};

//Get current cart
const getCurrentCart = async (req, res) => {
    const { user_id } = req.params;

    const cart = await Models.Cart.findOne({ user_id: user_id });
    if (cart) {
        res.status(200).json(cart);
    } else {
        res.status(400).json({ error: "No such cart!!!" });
    }
};

//Add product to cart
const addProductToCart = async (req, res) => {
    const data = req.body;
    const cart = await Models.Cart.findById(data.cart_id);
    if (cart) {
        const productList = cart.product_list;
        const isPresent = productList.filter((product) => product.product_id === data.product_id).length;
        if (isPresent) {
            return res.status(400).json({ error: "Sản phẩm này đã có trong giỏ hàng của bạn." });
        }
        productList.push({ product_id: data.product_id, quantity: data.quantity });
        const newCart = await Models.Cart.findOneAndUpdate(
            { _id: data.cart_id },
            { product_list: productList },
            { new: true }
        );
        if (newCart) {
            res.status(200).json(newCart);
        }
    } else {
        res.status(400).json({ error: "Khong thanh cong!!!" });
    }
};

//Change productList in cart
const changeProductListCart = async (req, res) => {
    const data = req.body;

    const newCart = await Models.Cart.findOneAndUpdate(
        { _id: data.cart_id },
        { product_list: data.newProductList },
        { new: true }
    );

    if (newCart) {
        res.status(200).json(newCart);
    } else {
        res.status(400).json({ error: "Couldn't update!!!'" });
    }
};

//Get current notification:
const getCurrentNotify = async (req, res) => {
    const { user_id } = req.params;

    const notify = await Models.Notification.findOne({ user_id: user_id });
    if (notify) {
        return res.status(200).json(notify);
    }
    res.status(400).json({ error: "No such Notification!!!" });
};

//Get info of current user:
const getUserInfo = async (req, res) => {
    const { user_id } = req.params;

    const userInfo = await Models.User.findById(user_id);
    if (userInfo) {
        return res.status(200).json(userInfo);
    }
    res.status(400).json({ error: "No such User!!!" });
};

//Update info of current user:
const updateUserInfo = async (req, res) => {
    const { user_id, data } = req.body;
    const update = {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
    };

    const newUserInfo = await Models.User.findOneAndUpdate({ _id: user_id }, update, { new: true });
    if (newUserInfo) {
        console.log(newUserInfo);
        return res.status(200).json(newUserInfo);
    }
    res.status(400).json({ error: "Update failed!!!" });
};

const changePassword = async (req, res) => {
    const { user_id, data } = req.body;
    const user = await Models.User.findById(user_id);
    if (data.oldPass !== user.password) {
        return res.status(400).json({ error1: "Mật khẩu cũ không đúng !!!" });
    }
    if (data.newPass_1 !== data.newPass_2) {
        return res.status(400).json({ error2: "2 mật khẩu mới không khớp nhau !!!" });
    }
    const newUser = await Models.User.findOneAndUpdate({ _id: user_id }, { password: data.newPass_1 }, { new: true });
    if (newUser) {
        return res.status(200).json(newUser._id);
    }
    res.status(400).json({ error: "Update password failed !!!" });
};

module.exports = {
    createNewUser,
    handleLogin,
    createNewProduct,
    getProductsAll,
    getSingleProduct,
    getFlashSale,
    getKhuyenMai,
    getAtHome,
    getCurrentCart,
    addProductToCart,
    changeProductListCart,
    getCurrentNotify,
    getUserInfo,
    updateUserInfo,
    changePassword,
};
