import * as React from 'react';
import { Button } from 'react-native-paper';

const Play = ({
  onPress
}) => (
  <Button icon="play-circle-filled" mode="contained" color="white" onPress={onPress} >
    Play
  </Button>
);

export default Play;