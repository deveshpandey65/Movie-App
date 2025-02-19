import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchBlocks, UpcomingBlocks } from '../Blocks'
const {width,height}=Dimensions.get('window')
const Search = ({navigation}) => {
    const [text,setText]=useState('')
    const [show, setshow] = useState('')
    const handleSearch=()=>{
        setshow(text)
    }
  return (
    <View style={styles.container_o}>
        <SearchBlocks navigation={navigation}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container_o: {
        backgroundColor: '#2C3930',
        height:height
        },
    container: {
        flexDirection: 'col',
        justifyContent: 'center',
        alignItems: 'center',

        },
        textSearch: {
            top:0,
            marginTop:20,
            width: width*.9,
            height: 60,
            backgroundColor:'#3F4F44',
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            color:'#DCD7C9',
            fontSize: 25,
            borderRadius:40,
            textAlign:'left',
            marginBottom:20
            },
        imgw:{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                flexWrap:'wrap'
            },
            imgm:{
                width: width*.9,
                height: height*.6,
                resizeMode: 'cover',
                margin: 10,
                },
        cast:{
                width: width*.4,
                height: height*.2,
                margin: 10,
                },

})