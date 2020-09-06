import React from 'react'
import './Posts.css'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

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


const Posts = (props) => {
const {userId, title, body, id} = props.post;
const history = useHistory();
let imgUrl =  `https://randomuser.me/api/portraits/men/${id}.jpg`

const classes = useStyles();

const handleClick = (id) =>{
    const url = `/about/${id}`
    history.push(url)
}
if(id > 99){
    imgUrl = `https://randomuser.me/api/portraits/men/88.jpg`
  }

    return (
        <Container className="Border" maxWidth="sm">
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={imgUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Post No: {id}
                </Typography> <small>User Id: {userId}: </small><br/>
                {body}
              </React.Fragment>
            }
          />
        </ListItem> <div className="seeMoreBtn"> <Button variant="contained" onClick={() => handleClick(id)}>See More..</Button></div></List>
    </Container>
  );
};



export default Posts;