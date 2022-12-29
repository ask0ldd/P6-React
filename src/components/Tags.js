import '../styles/Tags.css'

const Tag = (props) => {
    return (
    <div className="tag">
        {props.tagContent}
    </div>
    )
}

const Tags = () => {
    const TagsList = [{"key" : "1", "tagContent" : "Cozy"}, {"key" : "2", "tagContent" : "Canal"}, {"key" : "3", "tagContent" : "Paris 10"}]
    return (
    <div className="tagsContainer">
        {TagsList.map((tg)=>(<Tag key={tg.key} tagContent={tg.tagContent} />))}
    </div>
    )
}
 
export default Tags

/*<Tag tagContent={TagsList[0].tagContent} /><Tag tagContent={TagsList[1].tagContent}/><Tag tagContent={TagsList[2].tagContent}/>*/