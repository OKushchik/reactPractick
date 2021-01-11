import React from 'react'

function Content(props) {
    console.log(props)
    if(props.arrPosts.hits){
        return (
            <div className = 'content'>
                {props.arrPosts.hits.map((post) => 
                <img className = 'pic' src={post.largeImageURL}></img>
            )}
            </div>
        )
    } else {
        return <></>
    }
            

}

export default Content
