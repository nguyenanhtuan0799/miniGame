import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './PopupStyles';
import Images from '../assets/Images';

export default class Pause extends Component {
  render() {
    return (
      <View style={styles.clearScreen}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Ready?</Text>

          <View style={styles.panelButtonsContainer}>
            <TouchableWithoutFeedback onPress={this.props.onReset}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.restartIcon}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.props.onResume}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.playIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}
