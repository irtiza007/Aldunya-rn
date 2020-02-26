// @flow

import React, { useState } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    Alert,
} from 'react-native';
import faker from 'faker';
import moment from 'moment';
import Calendar from './calendar/Calendar';
import Events from './events/Events';



// Generate fake event data
const FAKE_EVENTS = (() => {
    const startDay = moment().subtract(5, 'days').startOf('day');
    return [...new Array(64)].map(_ => ({
        date: startDay.add(4, 'hours').clone(),
        title: faker.company.companyName(),
        description: faker.lorem.sentence(),
        // use random dimensions to get random urls
        image: faker.image.nightlife(Math.floor(Math.random() * 200) + 100, Math.floor(Math.random() * 200) + 100),
    }));
})();

// Filter events by date
const filterEvents = (date) =>
    FAKE_EVENTS.filter(event => event.date.isSame(date, 'day'));
export default function CalendarView({ navigation }) {
    // const [events, setEvents] = useState(filterEvents(moment()))
    const [events, setEvents] = useState(filterEvents(moment()))

    console.log(moment())


    const onSelectDate = (date) => {
        Alert.alert(date.toString())
        // Alert.alert('i am clicked')
        setEvents(filterEvents(date))
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <Calendar onSelectDate={onSelectDate}
                // currentDate={"Tue Jan 22 2020 14:03:30 GMT+0500 (Pakistan Standard Time)"}
                showDaysAfterCurrent={10}
                showDaysBeforeCurrent={10}
            />
            <Events events={events}
                navigation={navigation}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#3F53B1',
        paddingTop: 20,
    },
});
