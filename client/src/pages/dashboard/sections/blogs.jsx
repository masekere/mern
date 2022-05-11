import image from "../../../assets/about us/about-us.jpg"
import authorImg from "../../../assets/instructors/christina-morillo.png"

export default function Blogs() {
    return (
        <section className="blogs">
            <h2 className="sub">Our Blog</h2>
            <h2>Latest Blog {"&"} Latest News</h2>
            <div className="grid">
                <Blog
                    src={image}
                    title="title"
                    authorImg={authorImg}
                    authorName="christina morillo"
                    createAt="time"
                />
                <Blog
                    src={image}
                    title="title"
                    authorImg={authorImg}
                    authorName="christina morillo"
                    createAt="time"
                />
                <Blog
                    src={image}
                    title="title"
                    authorImg={authorImg}
                    authorName="christina morillo"
                    createAt="time"
                />
            </div>
        </section>
    )
}

const Blog = ({src,title,authorImg,authorName,createAt}) => (
    <div className="container">
        <img src={src} alt={"blog"}  />
        <h2 className="title">{title}</h2>
        <div className="author">
            <img src={authorImg}  alt="author" />
            <div className="info"> 
                <div className="name">{authorName}</div>
                <div className="time">{createAt}</div>
            </div>
        </div>
    </div>
)