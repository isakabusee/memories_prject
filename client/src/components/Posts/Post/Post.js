import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'


import useStyles from './styles';

function Post({ post }) {
 const classes = useStyles();
  return (
        <Card className='{classes.card'>
          <CardMedia className={classes.media} image={Post.selectedFile} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>

        </Card>
   
  )
}

export default Post
