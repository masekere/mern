import "./login.css"
import {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from "../../features/auth/authSlice"
import { RiLoginBoxLine } from "react-icons/ri"
import { useRef } from "react"

export default function Login() {
    return (
        <div className="login" >
            <div className="container">
                <Info />
                <Form />
            </div>
        </div>
    )
}

function Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isSuccess } = useSelector(
      (state) => state.auth
    )
  
    useEffect(() => {
  
      if (isSuccess) {
        navigate('/learning')
      }
  
      dispatch(reset())
    }, [user, isSuccess, navigate, dispatch])
    const usernameRef = useRef()
    const passwordRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }
    
        dispatch(login(userData))
      }
    return (
        <form onSubmit={onSubmit} className="right">
            <LoginLabel />
            <Input label="Username" innerRef={usernameRef} />
            <Input label="Password" innerRef={passwordRef} />
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}

const LoginLabel = () => (
    <div className="msg">
        <RiLoginBoxLine className="icon" />
        <h2>Login</h2>
    </div>
)

const Input = ({ label, type = "text", innerRef }) => (
    <div className="col-3">
        <input className="effect-17" ref={innerRef} type={type} placeholder="" />
        <label>{label}</label>
        <span className="focus-border"></span>
    </div>
)

const Info = () => (
    <div className="left">
        <h2>Learn Shona </h2>
        <p>with our deciated instructors you can become fluent with shona</p>
    </div>
)