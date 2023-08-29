import classNames from 'classnames/bind';
import styles from './NewProduct.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

function NewProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [offer, setOffer] = useState(false);
    const [imageLink, setImageLink] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/products/create_new_product', {
            method: 'POST',
            body: JSON.stringify({ name, price, oldPrice, offer, imageLink, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        const json = await response.json();
        if (response.ok) {
            alert('Tạo sản phẩm thành công.');
            setName('');
            setPrice('');
            setOldPrice('');
            setDescription('');
            setImageLink('');
            setOffer(false);
        } else {
            console.log(json.error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <form onSubmit={handleCreate} className={cx('form-container')}>
                    <div className={cx('input-container')}>
                        <label className={cx('input-title')} htmlFor="">
                            Tên sản phẩm
                            <p className={cx('required')}>*</p>
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={cx('input-field')}
                            type="text"
                            required
                            placeholder="Nhập tên sản phẩm"
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <label className={cx('input-title')} htmlFor="">
                            Giá sản phẩm (VNĐ)
                            <p className={cx('required')}>*</p>
                        </label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className={cx('input-field')}
                            type="number"
                            required
                            placeholder="Nhập giá sản phẩm"
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <label className={cx('input-title')} htmlFor="">
                            Giá cũ sản phẩm (VNĐ)
                        </label>
                        <input
                            value={oldPrice}
                            onChange={(e) => setOldPrice(e.target.value)}
                            className={cx('input-field')}
                            type="number"
                            placeholder="Nhập giá cũ sản phẩm"
                        />
                    </div>
                    <div className={cx('input-container', 'checkbox')}>
                        <label className={cx('input-title')} htmlFor="">
                            Có khuyến mãi không?
                        </label>
                        <input
                            style={{ marginLeft: '15px', width: '20px' }}
                            checked={offer}
                            onChange={() => setOffer((prev) => !prev)}
                            className={cx('input-field')}
                            type="checkbox"
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <label className={cx('input-title')} htmlFor="">
                            Liên kết ảnh
                            <p className={cx('required')}>*</p>
                        </label>
                        <input
                            value={imageLink}
                            onChange={(e) => setImageLink(e.target.value)}
                            className={cx('input-field')}
                            type="text"
                            required
                            placeholder="Nhập liên kết ảnh"
                        />
                    </div>
                    <div className={cx('input-container')}>
                        <label className={cx('input-title')} htmlFor="">
                            Mô tả sản phẩm
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Something"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <button>Tạo sản phẩm</button>
                </form>
            </div>
        </div>
    );
}

export default NewProduct;
