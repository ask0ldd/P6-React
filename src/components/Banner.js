import '../styles/Banner.css'

const Banner = (props) => {

    const text = props.type === 'standard' ? 'Chez vous, partout et ailleurs' : ''
    const CSSClass = props.type !== 'standard' ? 'banner-'+props.type : 'banner'

    return (
    <section className={CSSClass}>
        {text}
    </section>
    )
}

export default Banner