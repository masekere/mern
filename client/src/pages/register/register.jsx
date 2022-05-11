import "./register.css"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'
import CountryService from "../../app/services/CountriesService";
import { VscSignIn } from "react-icons/vsc"
import { useRef, useState,useEffect } from "react"

export default class Register extends CountryService {
    render(){
        return (
            <div className="register">
                <div className="container">
                    <Info />
                    <Form tz={this.state.countries} />
                </div>
            </div>
        )
    }
}

function Form({tz}) {
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
      }, [isSuccess,navigate, dispatch])
    const [timezones, setTz] = useState()

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const country = useRef()
    const timeZone = useRef()

    //tzleft
    const handleSubmit = e => {
        e.preventDefault()
        if(password.current.value === confirmPassword.current.value){
            const userData = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                country: country.current.value,
                timezone: timeZone.current.value
            }
            dispatch(register(userData))
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setTz(tz.find((tz) => tz.name === value || tz.id === value));
    }

    return (
        <form onSubmit={handleSubmit} className="right">
            <SignUpLabel />
            <InputFlex>
                <Input innerRef={username} label="Username" />
                <Input innerRef={email} label="Email" type="email" />
            </InputFlex>
            <InputFlex>
                <Input innerRef={password} label="Password" type="password" />
                <Input innerRef={confirmPassword} label="Confirm Password" type="password" />
            </InputFlex>
            <Input innerRef={country} label="Country" onChange={handleChange} />
            <Select innerRef={timeZone} input={timezones} />
            <button type="submit" className="btn">Submit</button>
        </form>
    )
}

const Input = ({ label, innerRef, type = "text", onChange, }) => (
    <div className="col-3">
        <input onChange={onChange} type={type} className="effect-20" ref={innerRef} placeholder="" />
        <label>{label}</label>
        <span className="focus-border">
            <i></i>
        </span>
    </div>
)

const Select = ({ innerRef, input }) => {
    return (
        <>
        <label >Timezone</label>
        <select className="effect-20" defaultValue={input && input.timezones[0]} ref={innerRef}>
            {input && input.timezones.map((tz, index) => (
                <option key={index}>
                    {tz}
                </option>
            ))}
        </select>
        </>
    )
}

const InputFlex = ({ children }) => (
    <div className="input-flex">
        {children}
    </div>
)

const SignUpLabel = () => (
    <div className="msg">
        <VscSignIn className="icon" />
        <h2>Sign Up</h2>
    </div>
)

const Info = () => (
    <div className="left">
        <h2>Learn Shona </h2>
        <p>with our deciated instructors you can become fluent with shona</p>
    </div>
)