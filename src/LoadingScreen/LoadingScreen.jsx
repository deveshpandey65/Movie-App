import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ProgressCircle size={100} progress={0.5} thickness={8} color="red" />
        </View>
    );
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        height,
        width,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds an overlay effect
    }
});
