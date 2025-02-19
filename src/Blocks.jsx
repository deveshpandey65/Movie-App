import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput, Dimensions, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getlatestMovies, getTopRatedMovies, getUpcomingMovies, getSearchMovie, getMovieCredit, getSimilarMovie } from './api/movie_api';


const{height,width}=Dimensions.get('window')
const UpcomingBlocks = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const data = await getUpcomingMovies();
                setMovies(data.results || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUpcomingMovies();
    }, []);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                 
            {movies.map((item) => (
                <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('MovieScreen', { movie: item })}>
                    <View style={styles.out_container}>
                        <View style={styles.container}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                        </View>
                        <Text style={styles.text} numberOfLines={1}>
                            {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    );
};

const TopRatedBlocks = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const data = await getTopRatedMovies();
                setMovies(data.results || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTopRatedMovies();
    }, []);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies.map((item) => (
                <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('MovieScreen', { movie: item })}>
                    <View style={styles.out_container}>
                        <View style={styles.container}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                        </View>
                        <Text style={styles.text} numberOfLines={1}>
                            {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    );
};

const LatestBlocks = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchLatestMovies = async () => {
            try {
                const data = await getlatestMovies();
                setMovies(data.results || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLatestMovies();
    }, []);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
            movies.map((item) => (
                <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('MovieScreen', { movie: item })}>
                    <View style={styles.out_container}>
                        <View style={styles.container}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                        </View>
                        <Text style={styles.text} numberOfLines={1}>
                            {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    );
};

const SearchBlocks = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchSearchMovies = async () => {
            if (query.length > 2) {  
                try {
                    const data = await getSearchMovie(query);
                    setMovies(data.results || []);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setMovies([]); // Reset results if search query is cleared
            }
        };
        fetchSearchMovies();
    }, [query]);

    return (
        <View>
            <TextInput
                style={styles.textSearch}
                placeholder="Search for movies"
                value={query}
                keyboardType='default'
                onChangeText={setQuery} 
            />
            {query.length<3?
            <View>
                 <Image source={{ uri:'https://static.vecteezy.com/system/resources/thumbnails/021/480/570/small/bored-man-leaning-on-progress-line-loading-waiting-to-download-movie-from-internet-png.png'}} style={styles.imgm} />
                        
            </View>
            :
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    
                    {movies.map((item) => (
                        <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('MovieScreen', { movie: item })}>
                            <View style={styles.out_container}>
                                <View style={styles.container}>
                                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                                </View>
                                <Text style={styles.text} numberOfLines={1}>
                                    {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
}

        </View>
    );
};








const CastBlocks = ({ navigation, cast }) => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchLatestMovies = async () => {
            try {
                const data = await getMovieCredit(cast);
                setMovies(data.cast);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLatestMovies();
    }, []);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies && movies.map((actor) => (
                <TouchableWithoutFeedback key={actor.id} onPress={() => navigation.navigate('PersonScreen', { actorId: actor.id })}>

                    <View key={actor.id} style={styles.out_Containerc}>
                        {actor.profile_path ? (
                            <View style={styles.containerc}>
                                <Image
                                    source={{ uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}` }}
                                    style={styles.imagec}
                                />
                            </View>
                        ) : (
                            <Text style={styles.placeholderText}>No Image</Text>
                        )}

                        <Text style={styles.text1}>

                            {actor.name.length > 15 ? actor.name.slice(0, 15) + '...' : actor.name}
                        </Text>
                        <Text style={styles.text1}>

                            {actor.character.length > 15 ? actor.character.slice(0, 15) + '...' : actor.character||'Unkown Role'}
                            </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>

    );
    
};




const SimilarBlocks = ({navigation,MovieId}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchLatestMovies = async () => {
            try {
                const data = await getSimilarMovie(MovieId);
                setMovies(data.results || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLatestMovies();
    }, []);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                movies.map((item) => (
                    <TouchableWithoutFeedback key={item.id} onPress={() => navigation.replace('MovieScreen', { movie: item })}>
                        <View style={styles.out_container}>
                            <View style={styles.container}>
                                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                            </View>
                            <Text style={styles.text} numberOfLines={1}>
                                {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
        </ScrollView>
    );
};

export { LatestBlocks, TopRatedBlocks, UpcomingBlocks, SearchBlocks ,CastBlocks,SimilarBlocks};

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 120,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        margin: 10,
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: 30,
        elevation: 7, // Shadow for Android
    },
    containerc: {
        height: 120,
        width: 120,
        borderRadius: 50,
        margin: 10,
        elevation: 1, // Shadow for Android
    },
    

    textSearch: {
        marginTop: 20,
        marginHorizontal:width*.1/2,
        width: width *.9,
        height: 60,
        backgroundColor: '#3F4F44',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        color: '#DCD7C9',
        fontSize: 25,
        borderRadius: 40,
        textAlign: 'left',
        marginBottom: 20
    },
    text: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#DCD7C9',
    },
    text1: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#DCD7C9',
        margin: 5
    },
    image: {
        height: 170,
        width: 120,
        borderRadius: 20,
    },
    imagec: {
        height: 120,
        width: 120,
        borderRadius: 50,
    },
    out_container: {
        flexDirection: 'column',
        margin: 5,
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    out_containerc: {
        flexDirection: 'column',
        margin: 5,
        height: 250,
    },
    imgm:{
        height: height*.6,
        width: width,

    }
});
