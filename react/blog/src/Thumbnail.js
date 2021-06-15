import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import {ImageBackground, View, Text, StyleSheet} from 'react-native'
import './App.css';
 
class Thumbnail extends React.Component {
    state = {
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState !== nextProps) {
          return { ...nextProps };
        }
    
        return null;
    } 
    
    render () {
        let className = "project"
        className += " thumbnail"
        console.log(this.state)
        return (
        <div className={className} height={this.state.height}>
            <Link to={this.state.link}>
            <div className="project-image">
                <View style={styles.thumbImage}>
                    <ImageBackground source={this.state.image} alt="Project">
                        <View style={styles.thumbText}>
                            <Text>{this.state.title}</Text>
                            <Text>{this.state.category}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </div>
            </Link>
        </div>
        );
    }
}

const styles = StyleSheet.create({
    thumbImage: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 0,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    thumbText: {
        color: "#fff",
        backgroundColor: "#ffffff90",

    },
});

export default Thumbnail;