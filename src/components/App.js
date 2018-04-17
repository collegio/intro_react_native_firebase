import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';
import PlayerList from './PlayerList';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header>Free Agent Tracker</Header>
                <PlayerList />
            </View>
        );
    }
};

export default App;