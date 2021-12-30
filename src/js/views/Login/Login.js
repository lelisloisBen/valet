import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Login.module.css';
import swal from 'sweetalert';

import valetLogo from '../../../img/logo.png';

const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');

    const {setAuth} = useContext(UserContext);
    const {backen_url} = useContext(UserContext);

    const loginFormHandler = () => {
        let userLoginData = JSON.stringify({
            "password": password
        });
        fetch(backen_url+'/login', {
            method: 'POST',
            body: userLoginData,
            cors: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => {
                let appID = response.appID;
                let userID = response.id;
                let email = response.email;
                let firstname = response.firstname;
                let lastname = response.lastname;
                if (!appID && !email && !firstname && !lastname ) {
                    swal("Sorry we couldn't find an account with that email.", "Try to register first.!", "error", {
                        button: "TRY AGAIN!",
                      })
                    // alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
                } else {
                    // alert('LOGIN SUCCESSFUL');
                    localStorage.setItem('appID', appID);
                    localStorage.setItem('userID', userID);
                    localStorage.setItem('email', email);
                    localStorage.setItem('firstname', firstname);
                    localStorage.setItem('lastname', lastname);
                    setAuth({
                        'appID': appID,
                        'userID': userID,
                        'email': email,
                        'firstname': firstname,
                        'lastname': lastname
                    })
                    swal("LOGIN SUCCESSFUL!", "Welcome To Valet", "success", {
                        button: "Go Park",
                      }).then(() => {
                        navigate('/home');
                          });
                    
                }
            })
            .catch(error => {
                swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
                    button: "OK",
                  })
            });
    }

    return (
        <section className={styles.section} >
                <a href="/"><img className={styles.share} src={valetLogo} alt="valet logo"/></a> 
                <br/>
                <input 
                    className={styles.inputForm} 
                    name="password"
                    type="password" 
                    placeholder="CODE"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={(e) => { if (e.keyCode === 13){loginFormHandler()} }}
                />
                <br/>
                
                <button 
                    className={styles.buttLogin}
                    onClick={loginFormHandler}
                >
                    Login
                </button>

                <br/>
                <br/>
                <Link to="/" className={styles.forgotP}>
                    Forgot password?
                </Link>
           

        </section>
    );
};

export default Login;