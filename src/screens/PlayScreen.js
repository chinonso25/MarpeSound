import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import AlbumArt from '../components/AlbumArt';
import TrackDetails from '../components/TrackDetails';
import SeekBar from '../components/SeekBar';
import Controls from '../components/Controls';
import Video from 'react-native-video';


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

export default class PlayScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  

  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < TRACKS.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }



  render() {
    const track = TRACKS[this.state.selectedTrack];
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'track.title');
    const artist = navigation.getParam('artist', 'track.artist');
    const albumArtUrl = navigation.getParam('albumArtUrl', 'track.albumArtUrl');
    const audioUrl = navigation.getParam('audioUrl', 'track.audioUrl');
    const video = this.state.isChanging ? null : (
      <Video source={{uri: audioUrl}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={true}                // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onEnd}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    );

   

   


    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header message="Marpe Podcast" onQueuePress={() => this.props.navigation.navigate("Audiolist")}/>
        <AlbumArt url={albumArtUrl} />
        <TrackDetails title={JSON.stringify(title)} artist={artist} />
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={this.state.totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={this.state.currentPosition} />
        <Controls
          onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
          repeatOn={this.state.repeatOn}
          shuffleOn={this.state.shuffleOn}
          forwardDisabled={this.state.selectedTrack === TRACKS.length - 1}
          onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          onBack={this.onBack.bind(this)}
          onForward={this.onForward.bind(this)}
          paused={this.state.paused}/>
        {video}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7b1fa2',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
