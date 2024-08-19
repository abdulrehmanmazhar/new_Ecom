import React from "react";
import styles from "./styles/Register.module.css";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import { signupSchema } from "./validation";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate= useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: ""
  };

  const { errors, values, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      let {name,password,email,address,phone} = values
      try {
        const res =await axios.post('http://localhost:8080/api/v1/auth/register',{name,password,email,address,phone})
        if(res.data.success){
          
          toast.success(res.data.message)
          navigate('/login')
        }else{
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error('Registration Failed')

      }
      

    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.design}>
          <svg className={styles.svg} viewBox="0 0 100 400">
            <path d="M 0 0 H 100 Q 0 100, 50 200 T 50 400 H 0 Z"/>
          </svg>
        </div>
        <div className={styles.formContainer}>
          <h2 className={styles.heading}>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.name && <div className={styles.error}>{errors.name}</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.email && <div className={styles.error}>{errors.email}</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.password && <div className={styles.error}>{errors.password}</div>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Phone</label>
              <input
                type="text"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.phone && <div className={styles.error}>{errors.phone}</div>}
            </div> */}
            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.label}>Address</label>
              <input
                type="text"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={styles.input}
              />
              {touched.address && <div className={styles.error}>{errors.address}</div>}
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.button}>Register</button>
            </div>
          </form>
          <div className={styles.switchForm}>
            <button className={styles.switchButton}>
              <Link to={"/login"}>Already have an account? Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
