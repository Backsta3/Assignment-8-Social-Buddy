import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllComments from '../AllComments/AllComments';


const Comments = () => {
    const {friendId} = useParams();
    const [comments, setComments] = useState([]);

useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setComments(data); console.log(data)})
    }, [])
    return (
        <div>
            <h5 align="right" style={{color:"gray"}}> <small> {comments.length} Comments   </small> </h5>
            {
                comments.map(comments => <AllComments comments={comments} key={comments.id}> </AllComments>)
               
            }

        </div>
    );
};

export default Comments;