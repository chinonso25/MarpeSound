import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image
} from 'react-native';
import audio from './audio.json';
import Header from '../components/Header';
import Play from '../components/Play';




export default class Audiolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  



  

    render() {
      
    
      return (
        <View style={styles.container}>
        <Header message="Messages" onQueuePress={() => this.props.navigation.navigate("PlayScreen")}/>
           <FlatList
             data={audio}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =>
             <View>
               <View>
                <View style={{flexDirection:'row',flex:1, flexWrap: 'wrap'}} >
                  <Image  style={styles.thumbnailStyle} source={{ uri: item.albumArtUrl }} />
                  <View style={{flexDirection:'row',flex:1, alignItems: 'center',flexWrap: 'wrap'}} >
                 <Text style={styles.title}>{item.title} - {item.artist} </Text>
                 <Text style={styles.title}>{item.title} - {item.artist} </Text>

                 <Play  onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('PlayScreen',{
              title: item.title,
              artist: item.artist,
              albumArtUrl: item.albumArtUrl,
              audioUrl: item.audioUrl
            });
          }} />


                  </View>
                  
                 
                 </View>               

                </View>
                                 <View style={styles.border}/>
                </View>

             }
             keyExtractor={(item, index) => index.toString()}
           />
        </View>
       )
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
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headerTextStyle: {
    fontSize: 24
  },

  thumbnailStyle: {
    height: 100,
    width: 100,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
  },
  

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  border: {
    borderBottomColor: 'white',
    borderBottomWidth: .75,
    padding:10,
    paddingBottom:10,
    margin:10
    
  },

  message: {
    
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 26,
  },
  speaker :{
    fontSize:18,
    color: 'rgba(255, 255, 255, 0.72)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  Desc: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    flexDirection: 'row',

  },

};

