import React from 'react'; // Import the Component component from React
import { Text } from 'react-native'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import './App.css';
 
export default function Thumbnail(props) {
    const styles = useStyles();

    // function mouseOnThumbnail(e) {
    //   e.target.style.background = 'red';
    // }

    // function mouseOffThumbnail(e) {
    //   e.target.style.background = 'none';
    // }

    console.log(styles.card)
    var thumbClass=styles.card + " click"
    console.log(thumbClass)
    return (
        <Card className={thumbClass}>
        <CardMedia
            className={styles.media}
            image={
            props.image
            }
        />
        <Box py={3} px={2} className={styles.content}>
            <Text className={styles.boxText}>asd</Text>
        </Box>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        margin: 20,
        transitionDuration: '10s',
        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '64%',
          bottom: 0,
          zIndex: 1,
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
      },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
      },
    boxText: {
        color: "#ffffff",
    },
    media: {
        height:"100%",
        width:"100%",
        paddingTop: '56.25%', // 16:9
      },
    }));
