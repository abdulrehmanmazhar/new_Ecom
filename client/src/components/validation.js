import * as yup from 'yup'
export const signupSchema = yup.object({
    name: yup.string().min(2).max(25).required('please enter your name'),
    email: yup.string().email().required('please enter email'),
    phone: yup.number().min(5).required('enter your phone number'),
    address: yup.string().min(10).required('enter your address'),
    password: yup.string().min(6).required('please enter password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], 'password must match').required()
})