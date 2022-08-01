import { useState } from "react";
import { useDispatch } from "react-redux";
import { authentication } from "../actions/users";
import "./user.css";

const Login = () => {
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [beckError, setBeckError] = useState('');

    const dispatch = useDispatch();

    const sendLoginData = async (e) => {
        e.preventDefault();

        if (!(passwordVal.length < 5 || !emailVal.includes("@") || !emailVal.includes("."))) {

            const datas = {
                email: emailVal,
                password: passwordVal
            }

            const data = await dispatch(authentication(datas))
            setBeckError(await data);
        } else {
            alert("try again")
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form action="">
                <input type="email" placeholder="email" className="form-control auth-input" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                <input type="password" placeholder="password" className="form-control auth-input" value={passwordVal} onChange={e => setPasswordVal(e.target.value)} />
                <input type="submit" value="login"
                    className="btn btn-primary auth-btn"
                    disabled={passwordVal.length < 5 || !emailVal.includes("@") || !emailVal.includes(".")}
                    onClick={sendLoginData} />
                <p style={{color: "red"}}>{beckError}</p>
            </form>
            <a href="/signup"> go to Signup</a>
        </div>
    )
}

export default Login;