import React from 'react'
import { View, Text, Button } from 'react-native'
import Header from './Components/Header';
import Calenders from './Components/Calender';
import Bottom from './Components/calendar/Bottom';
const Calender = ({ navigation }) => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 2 }}>
                <Header navigation={navigation}
                // back={() => navigation.goBack()}
                />
                <Calenders
                    navigation={navigation}
                />
            </View>
            <View style={{ flex: 0.1, backgroundColor: '#004368', width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                <Bottom
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

export default Calender
