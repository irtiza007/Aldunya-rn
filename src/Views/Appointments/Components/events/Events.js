// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome'
import Event from './Event';
import { connect } from 'react-redux'

function Events(props) {
  const { navigation, data, user } = props;
  console.log("hi i am data", data)
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.type !== "busyDay" ? (
          <>

            {data.appoint.length < 1 ? (null) : (
              <>
                <Text style={{ color: 'black', fontSize: 22, margin: 10, fontWeight: 'bold' }}>
                  Appointments
              </Text>

                {data.appoint.map((value, index) =>
                  <Event value={value} key={index}
                    navigation={navigation}
                  />
                )}
              </>
            )}


            <Text style={{ color: 'black', fontSize: 22, margin: 10, fontWeight: 'bold' }}>
              Excercises
            </Text>
            {data.exercises.length < 1 ? (
              <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                <Icons name="inbox" color={user.color} size={40} />
                <Text style={{ color: user.color, fontSize: 20 }}>
                  Opps..! No Excercises Found
 </Text>
              </View>
            ) : (<>
              {data.exercises.map((value, index) =>
                <Event value={value} key={index}
                  navigation={navigation}
                />
              )}
            </>)}




          </>

        ) : (
            <Event value={data}
              navigation={navigation}
              showBusy={true}
            />
          )}
      </ScrollView>
    </View>
  );


}


const mapStateToProps = state => {
  return {
    user: state.rootReducer.Auth,
  };
};


export default connect(mapStateToProps)(Events);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});