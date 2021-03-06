// @flow

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconCalender from 'react-native-vector-icons/MaterialCommunityIcons'
// calendar-clock
import moment from 'moment';
// import type { EventType } from '../../App';

function Event(props) {
  const { navigation, user, value, showBusy } = props;

  return (
    <>
      {showBusy ? (
        <View style={styles.row}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              {/* <Icon size={28} color={user.color} name="dumbbell" /> */}
              <IconCalender size={28} color={user.color}
                // name="calendar-clock"
                name="minus"
              />
            </View>

            <View style={[{ borderBottomColor: user.color }, styles.textContainer]}>
              <TouchableOpacity>
                <Text style={[{ color: user.color }, styles.title]}>Busy</Text>
              </TouchableOpacity>
              <Text style={[{ color: user.color }, styles.dateSize]}>{moment.utc(value.busyRecord.date).format('YYYY/MM/DD')}</Text>
            </View>

          </View>
          <View style={[{ backgroundColor: user.color }, styles.circle]}>

          </View>
        </View >
      ) : (
          <View style={styles.row}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                {value.type === "appointement" ? (<IconCalender size={28} color={user.color}
                  name="calendar-clock"
                />) : (<Icon size={28} color={user.color} name="dumbbell" />)}
              </View>

              <View style={[{ borderBottomColor: user.color }, styles.textContainer]}>
                <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Video', params: { value, value }, })}
                  disabled={value.type === "appointement"}
                >
                  <Text style={[{ color: user.color }, styles.title]}>{
                    value.type === "appointement" ? value.notes :
                      value.exercise}</Text>
                </TouchableOpacity>
                <Text style={[{ color: user.color }, styles.dateSize]}>{value.type === "appointement" ? moment.utc(value.startDate).format('YYYY/MM/DD h:mm A') : moment.utc(value.startDate).format('YYYY/MM/DD')}</Text>
              </View>

            </View>
            <View style={[{ backgroundColor: user.color }, styles.circle]}>

            </View>
          </View >
        )}

    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.rootReducer.Auth,
  };
};


export default connect(mapStateToProps)(Event);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignSelf: 'center'
  },
  imageContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#004368',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    width: 50,
    height: 50,
    borderRadius: 45
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
    borderBottomColor: '#004368',
    borderBottomWidth: 3,
  },
  image: {
    width: 49,
    height: 49,
  },
  text: {
    color: '#004368',
  },
  dateSize: {
    fontSize: 10,
    marginBottom: 10
  },
  title: {
    // color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  circle: {
    margin: 5,
    height: 20,
    width: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    // backgroundColor: '#004368'
  }
});