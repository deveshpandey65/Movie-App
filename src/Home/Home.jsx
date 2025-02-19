import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated, FlatList, Text, ScrollView } from 'react-native';
import ImgSlider from '../ImgSlider/ImgSlider';
import Blocks, { LatestBlocks, TopRatedBlocks, UpcomingBlocks } from '../Blocks';


const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <Image source={require('../../img/sort.png')} style={styles.logo} />
                <Text style={styles.headText}>Movie App</Text>
            </View>
            <View>
                <View>
                    <Text style={styles.Trending}>Trending</Text>
                </View>
                <ImgSlider navigation={navigation} />
            </View>
            <View>
                <View>
                    <Text style={styles.Trending}>Upcoming</Text>
                </View>
                <UpcomingBlocks navigation={navigation}/>

            </View>
            <View>
                <View>
                    <Text style={styles.Trending}>Top Rated</Text>
                </View>
                <TopRatedBlocks navigation={navigation} />

            </View>
            <View>
                <View>
                    <Text style={styles.Trending}>Popular</Text>
                </View>
                <LatestBlocks navigation={navigation} />

            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2C3930'
    },
    head: {
        backgroundColor: '#2C3930',
        borderWidth:1,
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:'#3F4F44',
        minHeight:55,
        maxHeight:'7%',
    },
    headText: {
        color: '#DCD7C9',
        fontSize: 30,
        fontWeight:'bold',
    },
    logo:{
        width:30,
        height:30,
        marginRight:'25%',
        marginLeft:'2%',

    },
    Trending:{
        fontSize:20,
        color:'#DCD7C9',
        margin:5,
        marginLeft:'2%',
        marginTop:10
        
    }
});
