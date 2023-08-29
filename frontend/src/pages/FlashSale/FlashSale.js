import classNames from 'classnames/bind';
import styles from './FlashSale.module.scss';

import { useState, useEffect, useRef } from 'react';
import * as icons from '../../icons';
import * as controller from '../../controller';

const cx = classNames.bind(styles);
const time = 165659; //seconds

function FlashSale() {
    const myRef = useRef();
    const [saleTime, setSaleTime] = useState(time);

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [productList, setProductList] = useState();

    //Handle format time:
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    useEffect(() => {
        myRef.current = setTimeout(() => {
            setSaleTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => {
            if (myRef.current) {
                clearTimeout(myRef.current);
            }
        };
    }, [saleTime]);

    useEffect(() => {
        const handleChangePage = async () => {
            const response = await fetch(`/api/products/flash_sale?page=${page}`);

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

export default FlashSale;
