import React from 'react'; // Import the Component component from React
import { Text } from 'react-native'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Box, Typography, Paper }  from '@material-ui/core';

import './App.css';
 
export default function Thumbnail(props) {
    const styles = useStyles();
    var thumbClass=styles.media + " click"

    function showThumbDesc(e) {
      e.target.nextElementSibling.style.visibility = 'visible';
      console.log(e.target.children);
      console.log(e.target.nextElementSibling);
      console.log(e);
    }

    function hideThumbDesc(e) {
      e.target.nextElementSibling.style.visibility = 'hidden';
    }

    return (
      <Card className={styles.card}>
        <Link to={props.link} 
              onMouseOver={showThumbDesc}
              onMouseLeave={hideThumbDesc}>
          <CardMedia 
              className={thumbClass}
              image={
              props.image
              }
          />
          <Paper className={styles.overlay} elevation={1} square >
              {props.title}
          </Paper>
        </Link>
      </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        margin: 20,
      },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
      },
    overlay: {
      position: 'absolute',
      height: '50%',
      width: '50%',
      top: '25%',
      left: '25%',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'black',
      zIndex: 5,
      backgroundColor: 'white'
    },
    media: {
        height:"100%",
        width:"100%",
        paddingTop: '100%', // 16:9
      },
    }));
