import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import * as icons from '../../icons';
import config from '../../config';
import GlobalContext from '../../context/GlobalContext';
import MainButton from '../../components/MainButton';

const cx = classNames.bind(styles);

function Login() {
    const { setCurrentUser } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = { email, password };
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
        });

        const json = await response.json();
        if (response.ok) {
            alert('Đăng nhập thành công!!!');
            localStorage.setItem('currentUser', json);
            setCurrentUser(json);
        } else {
            setErrorLogin(json.error);
        }
    };

    const renderLoginForm = () => {
        return (
            <form className={cx('log-form')} onSubmit={handleLogin}>
                <div className={cx('input-item')}>
                    <label className={cx('log-label')} htmlFor="email-login">
                        EMAIL <p> * </p>
                    </label>
                    <div className={cx('log-input')}>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email-login"
                            placeholder="Nhập địa chỉ email"
                            required
                        />
                    </div>
                </div>
                <div className={cx('input-item')}>
                    <label className={cx('log-label')} htmlFor="password-login">
                        Mật khẩu <p> * </p>
                    </label>
                    <div className={cx('log-input')}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            id="password-login"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        {showPassword ? (
                            <icons.EyeIcon onClick={(prev) => setShowPassword(!prev)} className={cx('eye-icon')} />
                        ) : (
                            <icons.SlashEyeIcon
                                onClick={() => setShowPassword((prev) => !prev)}
                                className={cx('eye-icon')}
                            />
                        )}
                    </div>
                </div>
                <p className={cx('forget-password')}> Quên mật khẩu ? </p>
                {errorLogin && <div className={cx('login-fail')}> {errorLogin} </div>}
                <button type="submit" className={cx('log-btn')}>
                    <MainButton> Đăng nhập </MainButton>
                </button>
                <p className={cx('commit')}>
                    Cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.
                </p>
            </form>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('log-container')}>
                <img className={cx('image-log')} src={require('../../assets/images/imageLog.png')} alt="log" />
                <div className={cx('log-content')}>
                    <div className={cx('log-heading')}>
                        <NavLink
                            to="/login"
                            style={{ color: '#fff', backgroundColor: '#905131' }}
                            className={cx('log-name')}
                        >
                            Đăng nhập
                        </NavLink>
                        <NavLink to="/sign-up" className={cx('log-name')}>
                            Đăng ký
                        </NavLink>
                    </div>
                    {renderLoginForm()}
                </div>
            </div>
        </div>
    );
}

export default Login;
