import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import moment from 'moment'
import CalendarPicker from 'react-native-calendar-picker';
let today = moment();
let day = today.clone().startOf('month');
const customedates = [{ date: "2020-02-19T10:21:16.821Z", containerStyle: [], style: { backgroundColor: '#5f8cda' }, textStyle: { color: 'white' } },
{ date: "2020-02-20T10:21:16.821Z", containerStyle: [], style: { backgroundColor: '#5f8cda' }, textStyle: { color: 'white' } },
{ date: "2020-02-21T10:21:16.821Z", containerStyle: [], style: { backgroundColor: '#5f8cda' }, textStyle: { color: 'white' } }
]

export default function BusyCalender({ size = 400 }) {


    const [startDate, setStartDate] = useState(new Date())
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {

        } else {
            setStartDate(date)
        }
    }

    return (
        <View style={styles.container}>
            <CalendarPicker
                todayTextStyle={{ fontWeight: 'bold', }}
                todayBackgroundColor={'white'}
                customDatesStyles={customedates}
                minDate={today}
                onDateChange={onDateChange}
                enableSwipe={true}
                startFromMonday={true}
                selectedStartDate={startDate}
                selectedDayColor='#5f8cda'
                selectedDayTextColor="#FFFFFF"
                scaleFactor={size}

            // selectedDayColor={"blue"}

            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {

        backgroundColor: '#FFFFFF',
    },
});