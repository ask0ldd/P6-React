import '../styles/Slideshow.css'

const Slideshow = (props) => {

    const imageUrl = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"]

    return (
    <section>
        <img src={imageUrl[0]} alt="temp"/>
    </section>
    )
}

export default Slideshow