import home from "../../../assets/home/home2.png"

export default function Home() {
    return (
        <section className="home">
            <div className="left">
                <h2>Welcome to</h2>
                <h2>Online Coaching</h2>
                <h3>learn shona language from our top instructors</h3>
                <button className="button-71">Sign Up</button>
            </div>
            <div className="right">
                <img src={home} className="home-img" alt="home-img" />
            </div>
        </section>
    )
}