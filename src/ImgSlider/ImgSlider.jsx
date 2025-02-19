import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/movie_api';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.6;
const ITEM_HEIGHT = height * 0.4;
const SPACING = 10;

const ImgSlider = ({navigation}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const data = await getTrendingMovies();
                console.log("Fetched Data:", data);
                setMovies(data.results || []);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <FlatList
            data={movies}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('MovieScreen',{movie:item})}>
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />

                    </View>
                </TouchableWithoutFeedback>
            )}
        />
    );
};

export default ImgSlider;

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: SPACING,
        alignItems: 'center',
    },
    itemContainer: {
        width: ITEM_WIDTH,
        marginHorizontal: SPACING,
        alignItems: 'center',
    },
    image: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    itemTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
});
