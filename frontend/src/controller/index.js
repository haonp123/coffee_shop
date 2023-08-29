import api from '../model/api';
import ProductCol from '../components/ProductCol';
import ProductRow from '../components/ProductRow';

export const renderProductList = (typeRow, productList) => {
    let i = 0;
    const arr = [];
    while (i < productList.length) {
        const list = productList.slice(i, i + 4);
        arr.push(<ProductRow key={list[0].name} typeRow={typeRow} list={list} />);
        i = i + 4;
    }
    return arr;
};

export const getCurrentNotification = () => {
    const currentUserId = localStorage.getItem('currentUserId');
    return api.Notification.filter({ user_id: currentUserId })[0];
};

export const formatToString = (number) => {
    if (number < 10) {
        return '00' + number.toString();
    } else if (number < 100) {
        return '0' + number.toString();
    }
    return number.toString();
};

export const convertPriceToString = (price) => {
    let result = '';
    while (price > 0) {
        if (price < 1000) {
            result = price.toString() + result;
        } else {
            result = '.' + formatToString(price % 1000) + result;
        }
        price = Math.floor(price / 1000);
    }
    return result;
};

export const getFirstFiveProduct = () => {
    const arr = [];
    for (let index = 0; index < 5; index++) {
        const component = <ProductCol key={index} typeCol="col-5" data={api.Product.querySet[index]} />;
        arr.push(component);
    }
    return arr;
};

export const getFirstFiveSale = () => {
    const arr = [];
    let count = 0;
    let index = 0;
    while (count < 5 && index < api.Product.querySet.length) {
        const product = api.Product.querySet[index];
        if (product.oldPrice) {
            const component = <ProductCol key={product.id} typeCol="col-5" data={product} />;
            arr.push(component);
            count++;
        }
        index++;
    }
    return arr;
};

export const getFirstFourProduct = () => {
    const arr = [];
    for (let index = 0; index < 4; index++) {
        const component = <ProductCol key={index} typeCol="col-4" data={api.Product.querySet[index]} />;
        arr.push(component);
    }
    return arr;
};

export const getFirstFourSale = () => {
    const arr = [];
    let count = 0;
    let index = 0;
    while (count < 4 && index < api.Product.querySet.length) {
        const product = api.Product.querySet[index];
        if (product.oldPrice) {
            const component = <ProductCol key={product.id} typeCol="col-4" data={product} />;
            arr.push(component);
            count++;
        }
        index++;
    }
    return arr;
};

export const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
