import React, { useState } from "react";
import styles from "./styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import authSlice, { setAuth } from "../slices/authSlice";
import { useDispatch } from "react-redux";
function Login() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await axios.post('http://localhost:8080/api/v1/auth/login',{password,email})
      if(res.data.success){
        
        dispatch(setAuth(res.data))
        localStorage.setItem('auth',JSON.stringify(res.data))
        toast.success(res.data.message)
        return navigate('/')
      }else{
        return toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Login Failed')

    }
  };
    return (
        <div className={styles.contain}>
            <div className={styles.design}>
                 {/* <h2 className={styles.text}>
                    Registration
                </h2> */}
            <svg className={styles.svg} viewBox="100 400" width="100" height="400">
    <path d="M 0 0 H 100 Q 0 100, 50 200 T 50 400 H 0 Z"/>
    </svg>
            </div>
          <div className={styles.formContainer}>
            <h2 className={styles.heading}>Log In</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.input}
                />
              </div> */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              {error && <div className={styles.error}>{error}</div>}
              <div className={styles.formGroup}>
                <button type="submit" className={styles.button}>
                  Log In
                </button>
              </div>
            </form>
            <div className={styles.switchForm}>
              <button className={styles.switchButton}>
             Forgot Password
                
              </button>
            </div>
          </div>
          <div className={styles.designGood}>
                 {/* <h2 className={styles.text}>
                    Registration
                </h2> */}
          <svg className={styles.svg} viewBox="0 0 100 400">
    <path d="M 0 0 H 100 Q 0 100, 50 200 T 50 400 H 0 Z"/>
</svg>

            </div>
        </div>
      );
}

export default Login