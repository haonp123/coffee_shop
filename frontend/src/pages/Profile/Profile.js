import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';

import * as icons from '../../icons';

const cx = classNames.bind(styles);

function Profile() {
    const { currentUser, userInfo, setUserInfo } = useContext(GlobalContext);

    const [formName, setFormName] = useState('info');
    const [oldPass, setOldPass] = useState('');
    const [typeOldPass, setTypeOldPass] = useState('password');
    const [newPass_1, setNewPass_1] = useState('');
    const [typeNewPass_1, setTypeNewPass_1] = useState('password');
    const [newPass_2, setNewPass_2] = useState('');
    const [typeNewPass_2, setTypeNewPass_2] = useState('password');
    const [fullName, setFullName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [error_1, setError_1] = useState();
    const [error_2, setError_2] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if (userInfo) {
            setFullName(userInfo.fullName);
            setPhoneNumber(userInfo.phoneNumber);
            setEmail(userInfo.email);
        }
    }, [userInfo]);

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const data = { fullName, phoneNumber };
        fetch('/api/users/info/update_info', {
            method: 'PUT',
            body: JSON.stringify({ user_id: currentUser, data }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((value) => {
                alert('Cập nhật thông tin thành công.');
                setUserInfo(value);
            })
            .catch((error) => console.log(error));
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        const data = { oldPass, newPass_1, newPass_2 };
        fetch('/api/users/change_password', {
            method: 'PUT',
            body: JSON.stringify({ user_id: currentUser, data }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((value) => {
                if (value.error1) {
                    setError(value.error1);
                    setError_1(true);
                } else if (value.error2) {
                    setError(value.error2);
                    setError_1(false);
                    setError_2(true);
                } else {
                    alert('Đổi mật khẩu mới thành công.');
                    setOldPass('');
                    setNewPass_1('');
                    setNewPass_2('');
                    setError(false);
                    setError_1(false);
                    setError_2(false);
                }
            })
            .catch((error) => console.log(error.error));
    };

    const renderInfoForm = () => {
        return (
            <form onSubmit={handleUpdateInfo} className={cx('form-container')}>
                <div className={cx('info-container')}>
                    <div className={cx('input-container')}>
                        <label htmlFor=""> Email </label>
                        <div className={cx('input-field')}>
                            <input value={email} disabled type="text" />
                        </div>
                    </div>
                    <div className={cx('input-container')}>
                        <label htmlFor=""> Họ tên </label>
                        <div className={cx('input-field')}>
                            <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className={cx('input-container')}>
                        <label htmlFor=""> Số điện thoại </label>
                        <div className={cx('input-field')}>
                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" />
                        </div>
                    </div>
                </div>
                <div className={cx('btn-container')}>
                    <button className={cx('btn')}> Cập nhật </button>
                    <NavLink to="/" className={cx('btn')}>
                        Hủy
                    </NavLink>
                </div>
            </form>
        );
    };

    const renderPasswordForm = () => {
        return (
            <form onSubmit={handleChangePassword} className={cx('form-container')}>
                <div className={cx('info-container')}>
                    <div className={cx('input-container')}>
                        <label htmlFor="">
                            Mật khẩu cũ <p className={cx('required')}> * </p>
                        </label>
                        <div className={cx('input-field', { 'input-error': error_1 })}>
                            <input
                                onChange={(e) => setOldPass(e.target.value)}
                                value={oldPass}
                                type={typeOldPass}
                                required
                            />
                            <div
                                onClick={() => {
                                    setTypeOldPass((prev) => (prev === 'text' ? 'password' : 'text'));
                                }}
                                className={cx('eye-icon')}
                            >
                                {typeOldPass === 'text' ? <icons.EyeIcon /> : <icons.SlashEyeIcon />}
                            </div>
                        </div>
                    </div>
                    <div className={cx('input-container')}>
                        <label htmlFor="">
                            Mật khẩu mới <p className={cx('required')}> * </p>
                        </label>
                        <div className={cx('input-field', { 'input-error': error_2 })}>
                            <input
                                onChange={(e) => setNewPass_1(e.target.value)}
                                value={newPass_1}
                                type={typeNewPass_1}
                                required
                            />
                            <div
                                onClick={() => {
                                    setTypeNewPass_1((prev) => (prev === 'text' ? 'password' : 'text'));
                                }}
                                className={cx('eye-icon')}
                            >
                                {typeNewPass_1 === 'text' ? <icons.EyeIcon /> : <icons.SlashEyeIcon />}
                            </div>
                        </div>
                    </div>
                    <div className={cx('input-container')}>
                        <label htmlFor="">
                            Nhập lại mật khẩu <p className={cx('required')}> * </p>
                        </label>
                        <div className={cx('input-field', { 'input-error': error_2 })}>
                            <input
                                onChange={(e) => setNewPass_2(e.target.value)}
                                value={newPass_2}
                                type={typeNewPass_2}
                                required
                            />
                            <div
                                onClick={() => {
                                    setTypeNewPass_2((prev) => (prev === 'text' ? 'password' : 'text'));
                                }}
                                className={cx('eye-icon')}
                            >
                                {typeNewPass_2 === 'text' ? <icons.EyeIcon /> : <icons.SlashEyeIcon />}
                            </div>
                        </div>
                    </div>
                </div>
                {error && (
                    <div className={cx('error-container')}>
                        <div className={cx('error-message')}> {error} </div>
                    </div>
                )}
                <div className={cx('btn-container')}>
                    <button className={cx('btn')}> Xác nhận </button>
                    <NavLink to="/" className={cx('btn')}>
                        Hủy
                    </NavLink>
                </div>
            </form>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('dashboard-container')}>
                    <div
                        onClick={() => {
                            setFormName('info');
                        }}
                        className={cx('dashboard-element', { 'dashboard-active': formName === 'info' })}
                    >
                        Thông tin cá nhân
                    </div>
                    <div
                        onClick={() => {
                            setFormName('password');
                        }}
                        className={cx('dashboard-element', { 'dashboard-active': formName === 'password' })}
                    >
                        Đổi mật khẩu
                    </div>
                </div>
                <div className={cx('content')}> {formName === 'info' ? renderInfoForm() : renderPasswordForm()} </div>
            </div>
        </div>
    );
}

export default Profile;
