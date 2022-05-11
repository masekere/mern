import {ReactComponent as Studentlife} from "../../../assets/icons/student-boy.svg"
import {ReactComponent as OnlineTraining} from "../../../assets/icons/online-training.svg"
import {ReactComponent as Program} from "../../../assets/icons/software-program.svg"

export default function Missions() {
    return (
        <section className="missions">
            <h2 className="sub">Core Features</h2>
            <h2>See what our core features Are</h2>
            <div className="flex" >
            <div className="grid">
                <Mission 
                    icon={<Studentlife/>}
                    title={"student life"}
                    desc={"Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum."}
                />
                <Mission 
                    icon={< OnlineTraining/>}
                    title={"best online coaching"}
                    desc={"Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum."}
                />
                <Mission 
                    icon={< Program/>}
                    title={"7 hour program"}
                    desc={"Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum."}
                />
            </div>
            </div>
        </section>
    )
}

const Mission = ({ icon, title, desc }) => (
    <div className="item">
        <div className="icon">
            {icon}
        </div>
        <div className="info">
            <div className="title" >{title}</div>
            <div className="desc">{desc}</div>
        </div>
    </div>
)