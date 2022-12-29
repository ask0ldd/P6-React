import '../styles/Slideshow.css'
import { useState } from 'react'
import arrow from '../assets/arrow-right.svg'

const Slideshow = (props) => {

    /*const imageUrl = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"]*/
    const imageUrls = props.picslist

    const [indexImg, setIndexImg] = useState(0);

    function nextImg() {
        indexImg < imageUrls.length-1 ? setIndexImg(indexImg + 1) : setIndexImg(0)
    }

    function prevImg() {
        indexImg !== 0 ? setIndexImg(indexImg - 1) : setIndexImg(imageUrls.length-1)
    }

    return ( // pas d'arrow si une seule image
    <section className='slideshow'>
        <img src={imageUrls[indexImg]} alt="temp"/>
        {imageUrls.length > 1 ? <div className="buttons-container"> 
            <div onClick={prevImg}><img id="prevArrow" src={arrow} alt="arrow previous" /></div>
            <div onClick={nextImg}><img src={arrow} alt="arrow next" /></div>
        </div> : ''}
    </section>
    )
}

export default Slideshow