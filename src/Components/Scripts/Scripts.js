import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '70ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const Scripts = () => {
   const { friendId } = useParams();
   const [friends, setFriends] = useState({});
   const classes = useStyles();

   useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${friendId}`
    fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
}, [])

    return (
       <Container className="Border" maxWidth="sm">
            <List className={classes.root}>
           <ListItem alignItems="flex-start">
               <ListItemAvatar> <Avatar alt="Remy Sharp" src={friends.imgUrl}></Avatar>  </ListItemAvatar>
               <ListItemText  primary={friends.title}
                                secondary={<React.Fragment>
                                    <Typography 
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"> Post : {friends.id} <br/> <br/> </Typography><small>User ID: {friends.userId}</small> <br/>
                                    {friends.body}
                                </React.Fragment>}/>

              
            
           </ListItem>
           </List> 
           <Button variant="contained"> <Link to="/home"> Back to Timeline </Link> </Button>
            <Container maxWidth="sm"> <Comments friendId={friendId}></Comments></Container>

       </Container>
    );
};

export default Scripts;