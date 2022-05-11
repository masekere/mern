import testimonial from "../../../assets/testimonial/william-fortunato.jpg"
import {MdFormatQuote} from "react-icons/md"

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="left"> 
                <h2 className="sub">Testimonial</h2>
                <h2>What our client says about us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id quae quo sapiente molestias architecto nihil corporis dignissimos corrupti unde assumenda reiciendis placeat, dolorem et praesentium iusto voluptate ex atque.</p>
            </div>
            <div className="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, id temporibus! Ut recusandae minima facilis? Minima veritatis exercitationem ducimus eos cumque. Sed, unde repellendus debitis reiciendis architecto omnis quia aut.</p>
                <div className="flex">
                    <img src={testimonial} alt="testimonial" />
                    <div>
                        <h3>William Fortunato</h3>
                        <h4>customer</h4>
                    </div>
                    <MdFormatQuote className="icon" />
                </div>
            </div>
        </section>
    )
}