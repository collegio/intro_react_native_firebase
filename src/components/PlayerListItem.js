import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';

const PlayerListItem = (props) => {

    return (
        <Card>
            <CardSection style={styles.header}>
                <View style={styles.thumbnailContainer}>
                    <Image 
                        style={styles.thumbnail}
                        source={{ uri: props.player.thumbnail_image }} 
                    />
                </View>
                <View>
                    <Text style={styles.headerTitle}>{props.player.name} - {props.player.sport_type}</Text>
                    <Text>{props.player.skill_level}</Text>
                </View>
            </CardSection>

            <CardSection style={styles.messageSection}>
                <Text style={styles.playerMessage}>{props.player.message}</Text>
            </CardSection>

            <CardSection>
                <Button 
                    onPress={() => {
                        console.log('mailto:'+props.player.email+'?subject=Join my team!&body=I would like you to join our '+props.player.sport_type+' team.');
                        return Linking.openURL('mailto:test@test.com');
                    }}
                >
                Email Player!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    headerTitle: {
        fontSize: 18
    },
    fullImage: {
        height: 300,
        flex: 1,
        width: null
    },
    playerMessage: {
        padding: 50,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700'
    },
    messageSection: {
        backgroundColor: '#090'
    }
};

export default PlayerListItem;

