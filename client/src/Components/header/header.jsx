import { Link, useLocation,useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/icons/online-course.svg"
import { FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import "./header.css"

export default function Header() {
    const room = 101;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    const path = useLocation().pathname.split("/")[1];
    function isActive(pathName) {
        return path === pathName ? "active" : ""
    }
    return (
        <header className="header">
            <nav>
                <ul className="ul">
                    <li className={isActive("") + " dashboard"}>
                        <Link to="/">
                            <Logo height="2rem" />
                        </Link>
                    </li>
                    <div className="right">
                        {user ? (
                            <>
                                <li className={isActive("learning")}>
                                    <Link to="/learning" >Start Learning</Link>
                                </li>
                                <li>
                                    <button onClick={onLogout} ><FaSignOutAlt /> Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={isActive("login")}>
                                    <Link to="/login" >Login</Link>
                                </li>
                                <li className={isActive("register")}>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    )
}
