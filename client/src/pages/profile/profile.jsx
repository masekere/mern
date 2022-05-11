import "./profile.css"
import { CgProfile } from "react-icons/cg"

export default function Profile() {
    return (
        <div className="profile">
            <div className="card">
                <CgProfile className="icon" />
                <div className="col-3">
                    <input className="effect-20" type="text" placeholder="" />
                    <label>First Name</label>
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
                <div className="col-3">
                    <input className="effect-20" type="text" placeholder="" />
                    <label>Username</label>
                    <span className="focus-border">
                        <i></i>
                    </span>
                </div>
            </div>
        </div>
    )
}