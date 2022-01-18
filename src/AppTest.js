// this is a new component

// a component can only have one parent element (normally a div)
// div could also be an empty tag <></>

// in jsx, you use className instead of class

// there are other rules (instead of for (html) use htmlFor)

function App() {
    const title = 'Blog Post'
    const body = 'My blog post'
    const comments = [
        {id:1,text:'Comment One'},
        {id:2,text:'Comment One'},
        {id:3,text:'Comment One'},
    ]
    // you can put conditions to jsx
    const loading = false
    const showComments = false
    const commentBlock = (
        <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {/* when li use key (another restriction of jsx) */}
                    {comments.map((comment,index)=> (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
    )

    if(loading) return <h1>loading ...</h1>
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments && commentBlock
            // avoid false case on ternaty operation            
            }
        </div>
    )
    
}
export default App