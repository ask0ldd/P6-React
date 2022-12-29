import '../styles/Tags.css'

const Tag = (props) => {
    return (
    <div className="tag">
        {props.tagContent}
    </div>
    )
}

const Tags = (props) => {
    //const TagsList = [{"key" : "1", "tagContent" : "Cozy"}, {"key" : "2", "tagContent" : "Canal"}, {"key" : "3", "tagContent" : "Paris 10"}]
    //console.log(props.tags)
    return (
    <div className="tagsContainer">
        {props.tags.map((tg, index)=>(<Tag key={index} tagContent={tg} />))}
    </div>
    )
}
 
export default Tags

/*<Tag tagContent={TagsList[0].tagContent} /><Tag tagContent={TagsList[1].tagContent}/><Tag tagContent={TagsList[2].tagContent}/>*/
/* 
{TagsList.map((tg)=>(<Tag key={tg.key} tagContent={tg.tagContent} />))}
*/