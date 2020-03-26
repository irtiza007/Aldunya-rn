// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Event from './Event';

export default function Events(props) {
  const { events, navigation, data } = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        {data && data.map((value, index) =>
          <Event value={value} key={index}
            navigation={navigation}
          />)}
      </ScrollView>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});