import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };

