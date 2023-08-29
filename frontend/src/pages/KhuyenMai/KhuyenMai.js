import classNames from 'classnames/bind';
import styles from './KhuyenMai.module.scss';

import { useState, useEffect } from 'react';

import * as icons from '../../icons';
import * as controller from '../../controller';

const cx = classNames.bind(styles);

function KhuyenMai() {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [productList, setProductList] = useState();

    useEffect(() => {
        const handleChangePage = async () => {
            const response = await fetch(`/api/products/khuyen_mai?page=${page}`);

            const json = await response.json();
            if (response.ok) {
                setPageCount(json.pagination.pageCount);
                setProductList(json.products);
            } else {
                console.log(json.error);
            }
        };
        handleChangePage();
    }, [page, pageCount]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('section-container')}>
                    <div className={cx('section-title')}>
                        <div className={cx('title-content')}>
                            <icons.ListIcon width="2rem" height="2rem" />
                            <h1> Danh sách sản phẩm </h1>
                        </div>
                    </div>
                    <div className={cx('products-list')}>
                        {productList && controller.renderProductList('row-4', productList)}
                    </div>
                </div>
                <div className={cx('pagination-container')}>
                    <button
                        onClick={() => {
                            if (page > 1) {
                                controller.goToTop();
                            }
                            setPage((prev) => (prev === 1 ? 1 : prev - 1));
                        }}
                        className={cx('pagination-btn', { 'disabled-btn': page === 1 })}
                    >
                        <icons.AngleLeftIcon />
                    </button>
                    <button
                        onClick={() => {
                            if (page < pageCount) {
                                controller.goToTop();
                            }
                            setPage((prev) => (prev === pageCount ? prev : prev + 1));
                        }}
                        className={cx('pagination-btn', { 'disabled-btn': page === pageCount })}
                    >
                        <icons.AngleRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default KhuyenMai;
