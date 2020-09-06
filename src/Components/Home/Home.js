import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [] 
    );
    return (
        <Container>
        
        <div>
            {
                posts.map(post => <Posts post={post} key={post.id}> </Posts>)
            }
            
        </div>
        </Container>
    );
};

export default Home;