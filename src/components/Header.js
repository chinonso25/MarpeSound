import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const Header = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <SafeAreaView>
  <View style={styles.container}>
    
    <Text onPress={onMessagePress}
      style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Image style={styles.button}
        source={require('../img/ic_queue_music_white.png')} />
    </TouchableOpacity>
  </View>
  </SafeAreaView>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    opacity: 0.72
  }
});
