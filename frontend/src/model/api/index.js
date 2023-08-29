import data from '../data';

const BaseAPI = {
    all() {
        return this.querySet;
    },
    getById(id) {
        return this.querySet.find((element) => element.id === id);
    },
    hasProperty(prop) {
        if (this.querySet.length === 0 || !this.querySet[0].hasOwnProperty(prop)) return false;
        return true;
    },
    filter(props) {
        for (let key in props) {
            if (!this.hasProperty(key)) {
                throw new Error(`'${this.name}' object does not have '${key}' property`);
            }
        }

        return this.querySet.filter((element) => {
            for (let key in props) {
                if (element[key] !== props[key]) return false;
            }
            return true;
        });
    },
};

const UserAPI = {
    name: 'User',
    querySet: data.User,
};

Object.setPrototypeOf(UserAPI, BaseAPI);

const CartAPI = {
    name: 'Cart',
    querySet: data.Cart,
};

Object.setPrototypeOf(CartAPI, BaseAPI);

const ProductAPI = {
    name: 'Product',
    querySet: data.Product,
};

Object.setPrototypeOf(ProductAPI, BaseAPI);

const NotificationAPI = {
    name: 'Notification',
    querySet: data.Notification,
};

Object.setPrototypeOf(NotificationAPI, BaseAPI);

const api = {
    User: UserAPI,
    Cart: CartAPI,
    Product: ProductAPI,
    Notification: NotificationAPI,
};

export default api;
