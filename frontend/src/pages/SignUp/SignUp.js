import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import * as icons from '../../icons';
import GlobalContext from '../../context/GlobalContext';
import MainButton from '../../components/MainButton';

const cx = classNames.bind(styles);

function SignUp() {
    const { setCurrentUser } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password_1, setPassword_1] = useState('');
    const [password_2, setPassword_2] = useState('');
    const [showPassword_1, setShowPassword_1] = useState(false);
    const [showPassword_2, setShowPassword_2] = useState(false);

    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        const newUser = { email, password_1, password_2 };

        const response = await fetch('/api/users/sign-up', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' },
        });

        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        } else {
            alert('Đăng ký thành công. Chào mừng bạn đến với Coffee-Shop!!!');
            localStorage.setItem('currentUser', json);
            setCurrentUser(json);
        }
    };

    const renderSignUpForm = () => {
        return (
            <form className={cx('log-form')} onSubmit={handleSignUp}>
                <div className={cx('input-item')}>
                    <label className={cx('log-label')} htmlFor="email-signUp">
                        EMAIL <p> * </p>
                    </label>
                    <div className={cx('log-input')}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email-signUp"
                            placeholder="Nhập địa chỉ email"
                            required
                        />
                    </div>
                </div>
                <div className={cx('input-item')}>
                    <label className={cx('log-label')} htmlFor="password-signUp_1">
                        Mật khẩu <p> * </p>
                    </label>
                    <div className={cx('log-input', { errPass: error })}>
                        <input
                            value={password_1}
                            onChange={(e) => setPassword_1(e.target.value)}
                            type={showPassword_1 ? 'text' : 'password'}
                            id="password-signUp_1"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        {showPassword_1 ? (
                            <icons.EyeIcon
                                onClick={() => setShowPassword_1((prev) => !prev)}
                                className={cx('eye-icon')}
                            />
                        ) : (
                            <icons.SlashEyeIcon
                                onClick={() => setShowPassword_1((prev) => !prev)}
                                className={cx('eye-icon')}
                            />
                        )}
                    </div>
                </div>
                <div className={cx('input-item')}>
                    <label className={cx('log-label')} htmlFor="password-signUp_2">
                        Xác nhận mật khẩu <p> * </p>
                    </label>
                    <div className={cx('log-input', { errPass: error })}>
                        <input
                            value={password_2}
                            onChange={(e) => setPassword_2(e.target.value)}
                            type={showPassword_2 ? 'text' : 'password'}
                            id="password-signUp_2"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        {showPassword_2 ? (
                            <icons.EyeIcon
                                onClick={() => setShowPassword_2((prev) => !prev)}
                                className={cx('eye-icon')}
                            />
                        ) : (
                            <icons.SlashEyeIcon
                                onClick={() => setShowPassword_2((prev) => !prev)}
                                className={cx('eye-icon')}
                            />
                        )}
                    </div>
                </div>
                {error && <div className={cx('error')}> {error} </div>}
                <button className={cx('log-btn')}>
                    <MainButton> Đăng ký </MainButton>
                </button>
            </form>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('log-container')}>
                <img className={cx('image-log')} src={require('../../assets/images/imageLog.png')} alt="log" />
                <div className={cx('log-content')}>
                    <div className={cx('log-heading')}>
                        <NavLink to="/login" className={cx('log-name')}>
                            Đăng nhập
                        </NavLink>
                        <NavLink
                            to="/sign-up"
                            style={{ color: '#fff', backgroundColor: '#905131' }}
                            className={cx('log-name')}
                        >
                            Đăng ký
                        </NavLink>
                    </div>
                    {renderSignUpForm()}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
