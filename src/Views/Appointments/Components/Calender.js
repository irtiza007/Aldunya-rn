// @flow

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
    Alert,
    ActivityIndicator,
    Text
} from 'react-native';
import faker from 'faker';
import moment from 'moment';
import Calendar from './calendar/Calendar';
import Events from './events/Events';
import { connect } from 'react-redux';
import { getAssignExcercise } from '../../../Api/Api';
import Icons from 'react-native-vector-icons/FontAwesome'



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
function CalendarView({ navigation, user }) {
    // const [events, setEvents] = useState(filterEvents(moment()))
    const [events, setEvents] = useState(filterEvents(moment()));
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getExcercise(moment.utc().format('YYYY-MM-DD'))
    }, [])

    const getExcercise = (date) => {
        // Alert.alert(date.toString())
        setLoading(true)
        getAssignExcercise(user.userId, { startDate: date })
            .then(res => {
                console.log(res)
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }


    const onSelectDate = (date) => {
        // Alert.alert(date.toString())
        getExcercise(moment.utc(date).format('YYYY-MM-DD'))
        setEvents(filterEvents(date))
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <Calendar onSelectDate={onSelectDate}
                // currentDate={"Tue Jan 22 2020 14:03:30 GMT+0500 (Pakistan Standard Time)"}
                showDaysAfterCurrent={30}
                showDaysBeforeCurrent={30}
                color={user.color}
            />
            {loading ? (
                <ActivityIndicator size="large" color="red" />
            ) : (
                    <>
                        {data === "Assign Exercise doesnot exist" || data.length < 1 ? (
                            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                <Icons name="inbox" color={user.color} size={40} />
                                <Text style={{ color: user.color, fontSize: 20 }}>
                                    Opps..! No Excercises Found
                        </Text>
                            </View>
                        ) : (
                                <>
                                    <Events
                                        data={data}
                                        navigation={navigation}
                                    />
                                </>
                            )}

                    </>
                )}

        </View>
    );
}
const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};


export default connect(mapStateToProps)(CalendarView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#3F53B1',
        paddingTop: 20,
    },
});
