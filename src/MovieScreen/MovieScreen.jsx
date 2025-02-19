import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { CastBlocks, SimilarBlocks } from '../Blocks';
import { getMovieCredit } from '../api/movie_api';

const { width, height } = Dimensions.get('window');

const MovieScreen = ({ navigation, route }) => {
    const { movie } = route.params;
    

    return (
        <ScrollView>
        <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.title_n}>Release_On . {movie.release_date} || Rating . {movie.vote_average} </Text>
                <Text style={styles.title_n}>Action . Thrill . Comedy</Text>
            </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
                <Text style={styles.overview}>{movie.overview}</Text>
                <Text style={styles.title}>Top Cast</Text>
                <CastBlocks  navigation={navigation} cast={movie.id}/>

                <Text style={styles.title }>Similar Movie</Text>
                <View style={{marginBottom:20}}></View>
                <SimilarBlocks navigation={navigation}   MovieId={movie.id} />
        </View>
        </ScrollView>
    );
};

export default MovieScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height*.6,
        justifyContent: 'flex-end', // Adjust text position
    },
    bottomContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        backgroundColor: 'rgba(13, 13, 13, 0.96)',
    },
    overlay: {
        backgroundColor: 'rgba(13, 13, 13, 0.82)', // Dark overlay for readability
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DCD7C9',
        textAlign: 'center',
    },
    title_n: {
        fontSize: 16,
        color: '#DCD7C9',
        textAlign: 'center',
        marginTop:10
    },
    overview: {
        width:width*.9,
        fontSize: 16,
        color: '#DCD7C9',
        textAlign: 'left',
        margin: 10,
        marginBottom:20
    },
    cast: {
        width: width*.3,
        height: height,
        borderRadius:50,
        margin:10,
        marginTop:20

    }
});
