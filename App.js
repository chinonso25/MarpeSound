import React, {Component} from 'react';
import {View} from 'react-native';

import Header from './src/components/Header';
import AlbumArt from './src/components/AlbumArt';
import TrackDetails from './src/components/TrackDetails';
import SeekBar from './src/components/SeekBar';
import Controls from './src/components/Controls';
import Player from './src/components/Player';
import SwitchNavigator from "./src/navigator/SwitchNavigator";

export const TRACKS = [
  {
    title: 'Grace and Peace',
    artist: 'A. B. Prince',
    albumArtUrl: "https://img.youtube.com/vi/fikHznLnZF0/hqdefault.jpg",
    audioUrl: "https://drive.google.com/uc?export=download&id=1N5YXc2zdmpnwBcGiiVgfRuFfsvGpdHQm",
  },
  {
    title: 'Virtue and Glory',
    artist: 'A.B. Prince',
    albumArtUrl: "https://img.youtube.com/vi/MCAdXqykfEk/hqdefault.jpg",
    audioUrl: 'https://drive.google.com/uc?export=download&id=1jzWDvCeQV3RZ5awrskemo5yhht2G94Qy',
  },
  {
    title: 'The Christisn & Suffering Pt.1',
    artist: 'A. B. Prince',
    albumArtUrl: 'https://img.youtube.com/vi/8sKxnXPE8yU/hqdefault.jpg',
    audioUrl: 'https://drive.google.com/uc?export=download&id=1ORQYOWTOjSM9jwG9EewI_-udcj6bj2xp',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      activeQuoteIndex: 0,
      result: "",
      gestureName: "none",
      previousQuote: 0
    };
}
  
  /*componentWillMount() {
    console.disableYellowBox = true;
    return fetch('https://gist.githubusercontent.com/chinonso25/853de17c3004ccd21d96553b0429a813/raw/8fb1be3f27418fa171b597a3126de62036720532/tracks.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responsejson.TRACKS
        });
      })
      .catch(error => {
        console.log(error);
      });
}
*/



  render() {
  
    return <SwitchNavigator />
  }
}


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#5c007a',
  },
}
