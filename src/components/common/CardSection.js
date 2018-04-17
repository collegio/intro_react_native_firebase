import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#888',
        position: 'relative',   
    }
};

export { CardSection };
