import React, { useState } from "react";
import "./signup.css";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [redirect, setredirect] = useState(false);

    const url=process.env.REACT_APP_API;
    const HandleClick = () => {
        if (email, password, Confirm) {
                    if (password === Confirm) {
                        fetch(`${url}/register`, {
                            method: "POST",
                            headers: { 'Content-Type': "application/json" },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        }).then((res) => res.json()
                        ).then((data) => {
                            console.log(data);
                            if (data.error) {
                                alert(data.error)
                            } else {
                                setemail("")
                                setpassword("")
                                setConfirm("")
                                alert(data.message)
                                setredirect(true)

                            }
                        })
                    }else {
                        alert("Password and confirm password must be same")
                    }


        } else {
            alert("Please Fill all Fields")
        }

    }
    const performRedirect = () =>{
        if (redirect){
            return <Navigate to="/" />
        }
    }
    return (

        <div className="container">
            {performRedirect()}
            <svg className="containerleft" width="255" height="256" viewBox="0 0 255 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="105" cy="106" r="150" fill="#B2DFFF" />
            </svg>

            <div className="Rectangle1">
                <svg className="right" width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.84615" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                </svg>

                <div className="logo">
                    <h1>Logo</h1>
                    <p>Create New Account</p>
                </div>
                <div className="inputs3">
                    <div>
                        <input type="email" className="email" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="password" placeholder="Confirm Password" onChange={(e) => { setConfirm(e.target.value) }} value={Confirm} />
                    </div>
                </div>
                <div className="buttons">
                    <button className="button1" onClick={HandleClick}>Sign Up</button>
                </div>
                <svg className="left" width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.84615" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                </svg>

            </div>
            <svg className="containerright" width="226" height="279" viewBox="0 0 226 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="151" cy="151" r="150" transform="rotate(100.531 151 151)" fill="#B2DFFF" />
            </svg>

        </div>

    )
}

export default SignUp;