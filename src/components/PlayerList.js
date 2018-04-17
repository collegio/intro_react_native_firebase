import React from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import PlayerListItem from './PlayerListItem';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: []
        }
    }

    renderPlayers() {
        console.log("rendering players");
        return this.state.players.map((player) => {
        
            console.log(player);
            return <PlayerListItem key={player.id} player={player} />;
        });
    }

    componentDidMount() {
        axios.get('http://206.189.20.69')
            .then((response) => {
                this.setState(() => {
                    return {
                        players: response.data.players
                    }
                })
            })
    }

    render() {
        return (
            <ScrollView style={{marginBottom: 70}}>
                {this.renderPlayers()}
            </ScrollView>
        );
    }
};

export default PlayerList;