export function Tweet({id, name, content, like, onDelete}){
    
    const handleLike = () => {
        console.log("LIKE");
    }
    
    return (
        <div className="tweet">
            <button onClick={() => onDelete(id)} className="delete">❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => handleLike()}>{like} 💓</button>
        </div>
    )


}