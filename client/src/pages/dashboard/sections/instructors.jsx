import author1 from "../../../assets/instructors/christina-morillo.png"
import author2 from "../../../assets/instructors/edmond-dantès.png"
import author3 from "../../../assets/instructors/katerina-holmes.png"
import author4 from "../../../assets/instructors/ono-kosuki.png"

export default function Instructors() {
    return (
        <section className="instructors">
            <h2 className="sub">Best Coach</h2>
            <h2>Our Expert Instructor</h2>
            <div  className="grid">
                <Instructor img={author1}  name="Gift"/>
                <Instructor img={author2}  name="Gift"/>
                <Instructor img={author3}  name="Gift"/>
                <Instructor img={author4}  name="Gift"/>
            </div>
        </section>
    )
}

const Instructor = ({img,name})=>{
    return (
    <>
        <div className="container">
            <img src={img} alt="author" />
            <div>{name}</div>
            <div>instructor</div>
        </div>
    </>
    )
}