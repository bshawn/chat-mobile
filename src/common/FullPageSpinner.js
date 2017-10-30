import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class FullPageSpinner extends React.Component {
    render() {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});