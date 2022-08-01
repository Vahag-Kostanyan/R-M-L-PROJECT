import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../actions/users";
import "./user.css"


const SignUp = () => {
    const [nameVal, setNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [backError, setBeckError] = useState("");

    
    const dispatch = useDispatch();
    
    const signupHandler = async (e) => {
        e.preventDefault();
        
        if(!(nameVal.length < 3 || passwordVal.length < 5 || !emailVal.includes("@") || !emailVal.includes(".") || emailVal.length < 3)){
            const datas = {
                name: nameVal,
                email: emailVal,
                password: passwordVal
            }
            const data = await dispatch(registration(datas))
            setBeckError(await data);
        }else{
            alert("try again")
        }
    }

    return(
        <div className="SignUp">
             <h1>SignUp</h1>
            <form action="">
                <input type="text" placeholder="name" value={nameVal} className="form-control auth-input" onChange = {e => setNameVal(e.target.value)} />
                <input type="email" placeholder="email" value={emailVal} className="form-control auth-input" onChange = {e => setEmailVal(e.target.value)}/>
                <input type="password" placeholder="password" value={passwordVal} className="form-control auth-input" onChange = {e => setPasswordVal(e.target.value)} />
                <input type="submit" value="signup" 
                className="btn btn-primary auth-btn"
                disabled = {nameVal.length < 3 || passwordVal.length < 5 || !emailVal.includes("@") || !emailVal.includes(".") || emailVal.length < 3} 
                onClick={signupHandler} />
                <p style={{color: "red"}}>{backError}</p>
            </form>
            <a href="/login"> go to login</a>
        </div>
    )
}

export default SignUp;