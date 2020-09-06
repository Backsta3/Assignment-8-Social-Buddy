import React, { useState, useEffect } from 'react';

import { Container, Avatar, List, ListItem, ListItemText, ListItemAvatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '50ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const AllComments = (props) => {
    const {name, email, body, postId, id} = props.comments;
    const classes = useStyles();
    const [image, setImage] = useState([]);


    useEffect(()=> {
        const url = `https://api.randomuser.me/?results=5/results`
        fetch(url)
        .then(res => res.json())
        .then(data => { setImage(data.results.find(picture => picture={picture}).picture.large)})
    }, [])

    return (
       <Container className="Border" maxWidth="sm">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Post : {postId} <br />
                                </Typography> <small>Comment No: {id}, Email: {email}</small> <br />
                                {body}
                            </React.Fragment>
                        }
                    />
                </ListItem> </List>
        </Container>


        
    );
};


export default AllComments;