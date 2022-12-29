import '../styles/Slideshow.css'
import { useState } from 'react'

const Slideshow = (props) => {

    /*const imageUrl = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"]*/
    const imageUrl = props.picslist

    const [indexImg, setIndexImg] = useState(0);

    function nextImg() {
        indexImg < imageUrl.length-1 ? setIndexImg(indexImg + 1) : setIndexImg(0)
    }

    function prevImg() {
        indexImg !== 0 ? setIndexImg(indexImg - 1) : setIndexImg(imageUrl.length-1)
    }

    return (
    <section className='slideshow'>
        <img src={imageUrl[indexImg]} alt="temp"/>
        <div className="buttons-container">
            <div onClick={nextImg}></div>
            <div onClick={prevImg}></div>
        </div>
    </section>
    )
}

export default Slideshow