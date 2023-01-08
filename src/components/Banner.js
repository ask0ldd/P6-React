import '../styles/Banner.css'

const Banner = (props) => {

    const bannerText = props.type === 'standard' ? 'Chez vous, partout et ailleurs' : ''
    const bannerCSSClass = props.type !== 'standard' ? 'banner-'+props.type : 'banner'

    return (
    <section className={bannerCSSClass}>
        {bannerText}
    </section>
    )
}

export default Banner