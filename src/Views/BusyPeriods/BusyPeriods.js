import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import BusyCalender from './Components/BusyCalender';
import Icons from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';

const BusyPeriods = ({ navigation, user }) => {
    const [calendarSize] = useState(375)
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                />
                <View style={styles.calender}>
                    <Text style={[{ color: user.color }, styles.heading]}>
                        Busy Periods
                    </Text>
                    <BusyCalender
                        size={calendarSize}
                    />
                </View>
                <View style={styles.zoom}>
                    {/* <View>
                        <TouchableOpacity onPress={() => setCalenderSize(calendarSize - 10)}>
                            <Icons name="zoom-in" size={28} color="#004368" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCalenderSize(calendarSize + 10)}>
                            <Icons name="minus" size={28} color="#004368" style={{ marginTop: 20 }} />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
            <View style={[{ backgroundColor: user.color }, styles.Bottom]}>
                <Bottom
                    navigation={navigation}
                />

            </View>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};


export default connect(mapStateToProps)(BusyPeriods);

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#FFFFFF',
    },
    Bottom: { flex: 0.1, width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 },
    calender: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginVertical: '10%'
    },
    zoom: {

        flex: 0.5,
        alignItems: 'flex-end',
        width: '90%'
    }
});


