import { Button, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getPersonInfo } from '../api/movie_api';

const {height,width}=Dimensions.get('window')
const PersonScreen = ({ route }) => {
    const { actorId } = route.params; 
    const [actor, setActor] = React.useState({});
    useEffect(() => {
            const fetchLatestMovies = async () => {
                try {
                    const data = await getPersonInfo(actorId);
                    setActor(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchLatestMovies();
        }, []);

    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={{ uri:`https://image.tmdb.org/t/p/w500${actor.profile_path}`}} style={styles.image}>
                
                <View style={styles.overlay}>
                                <Text style={styles.title}>{actor.name}</Text>
                    <Text style={styles.title_n}> {actor.known_for_department}  ||  {actor.popularity}</Text>
                </View>
            </ImageBackground>
            <Text style={styles.sub_title}>
                {actor.biography}
            </Text>
               </ScrollView>
    );
};


export default PersonScreen

const styles = StyleSheet.create({
    image: {
        justifyContent:'flex-end',
        width: width,
        height: height*.6,
        resizeMode: 'cover',
        },
    container: {
            flex: 1,
            backgroundColor: '#2C3930',
            },

    overlay: {
        
        backgroundColor: 'rgba(13, 13, 13, 0.82)', 
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#DCD7C9',
        textAlign: 'center',
    },
    title_n: {
        fontSize: 20,
        color: '#DCD7C9',
        textAlign: 'center',
        marginTop: 10
    },        
    sub_title:{
        fontSize: 15,
        color: '#DCD7C9',
        textAlign: 'left',
        padding: 10,
    
    }
})