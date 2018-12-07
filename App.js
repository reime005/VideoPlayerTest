/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Video, { TextTrackType } from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Video 
          ref={videoRef => (this.videoRef = videoRef)}
          useTextureView={false}
          source={require('./example.mp4')} // Looks for .mp4 file (background.mp4) in the given expansion version.
          resizeMode="contain"           // Fill the whole screen at aspect ratio.
          style={styles.fullScreen}
          selectedTextTrack={{
            type: 'title',
            value: 'English',
          }}
          textTracks={[
            {
              title: 'English',
              language: 'en',
              type: TextTrackType.VTT, // "text/vtt"
              uri:
                'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt',
            },
            {
              title: 'Spanish',
              language: 'es',
              type: TextTrackType.SRT, // "application/x-subrip"
              uri:
                'https://durian.blender.org/wp-content/content/subtitles/sintel_es.srt',
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
