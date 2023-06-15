import '../styles/Banner.css'

const Banner = ({type}) => {

    const bannerText = type === 'standard' ? '<div>Chez vous,&nbsp;</div><div>partout et ailleurs</div>' : ''
    const bannerCSSClass = type !== 'standard' ? 'banner-'+type : 'banner'

    return (
    <section className={bannerCSSClass} dangerouslySetInnerHTML={{__html:bannerText}} >
    </section>
    )
}

export default Banner