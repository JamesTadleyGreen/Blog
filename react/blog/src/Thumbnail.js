import React from 'react'; // Import the Component component from React
import {ImageBackground, View, Text, StyleSheet} from 'react-native'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import './App.css';
 
export default function Thumbnail(props) {
    const styles = useStyles();

    console.log(props)
    return (
        <Card className={styles.card}>
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
        height: 0,
        height:"100%",
        width:"100%",
        paddingTop: '56.25%', // 16:9
      },
    }));
