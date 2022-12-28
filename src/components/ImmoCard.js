import '../styles/ImmoCard.css'

const ImmoCard = (props) => {
    return (
    <article className="immocard">
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="Appartement cosy"/>
        <div>{props.id} - Appartement cosy <br /> Appartement cosy - {props.description}</div>
    </article>
    )
}

export default ImmoCard