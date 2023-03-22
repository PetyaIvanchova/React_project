import { Link } from 'react-router-dom';
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form method="POST" onSubmit={onSubmit}>
                <h3>Login Here</h3>

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                />

                <button class="btnreg">Log In</button>
                <p className="loginp">Don't have an acount? <Link to="/register"><span class='registercolor'>Register<span/></span></Link></p>

            </form>
        </div>);
}