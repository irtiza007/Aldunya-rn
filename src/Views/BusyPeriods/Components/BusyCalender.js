import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ActivityIndicator
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import { addBusyDay, getBusyDays } from '../../../Api/Api';
let today = moment();

function BusyCalender({ size = 400, user }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        getIntialData();
    }, [])

    const getIntialData = () => {
        setLoading(true)
        getBusyDays(user.userId)
            .then(res => {
                setLoading(false)
                setData(res.data)
                let array = [];
                res.data.map(value => {
                    array.push({ date: value.date, containerStyle: [], style: { backgroundColor: '#5f8cda' }, textStyle: { color: 'white' } })
                })
                setData(array);
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    // const [startDate, setStartDate] = useState(new Date())
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {

        } else {
            // setStartDate(date)
            setLoading(true)
            console.log(moment.utc(date).format('YYYY-MM-DD'));
            setLoading(true);
            addBusyDay({ date: moment.utc(date, 'MM-DD-YYYY').local().format("YYYY-MM-DD"), userId: user.userId })
                .then(res => {
                    // setLoading(false);
                    getIntialData()
                    // setData(data => [...data, { date: date, containerStyle: [], style: { backgroundColor: '#5f8cda' }, textStyle: { color: 'white' } }]);
                })
                .catch(err => {
                    Alert.alert('Something went wrong please try again later')
                    console.log(err)
                    setLoading(false)
                })
        }
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={user.color} />
                </View>
            ) : (
                    <CalendarPicker
                        todayTextStyle={{ fontWeight: 'bold', }}
                        todayBackgroundColor={'white'}
                        customDatesStyles={data}
                        minDate={today}
                        onDateChange={onDateChange}
                        enableSwipe={true}
                        startFromMonday={true}
                        // selectedStartDate={startDate}
                        selectedDayColor='#5f8cda'
                        selectedDayTextColor="#FFFFFF"
                        scaleFactor={size}

                    // selectedDayColor={"blue"}

                    />
                )}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {

        backgroundColor: '#FFFFFF',
    },
});

const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};

// function mapDispatchToProps(dispatch) {
//     return {
//         setAuthData: data => dispatch(setAuthInfo(data)),
//     };
// }

export default connect(mapStateToProps)(BusyCalender);