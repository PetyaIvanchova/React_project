import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div className="register">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form method="POST" onSubmit={onSubmit}>
                <h3>Register Here</h3>

                <label htmlFor="username">Email</label>
                <input type="text"
                    placeholder="Email or Phone"
                    id="username"
                    name="email"
                    value={values.email}
                    onChange={changeHandler} />

                <label htmlFor="password">Password</label>
                <input type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                />

                <label htmlFor="repeatpassword"> Repeat Password</label>
                <input type="password"
                    placeholder="Password"
                    id="repeatpassword"
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={changeHandler}
                />

                <button class='btnreg'>Register</button>
                <p className="loginp">Do you have an acount? <Link to="/login"><span class='registercolor'>Login<span/></span></Link></p>

            </form>
        </div>);
}