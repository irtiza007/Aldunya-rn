import React from 'react'
import { View } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import Profile from './Components/Profile'
const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 2 }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                    hideProfile={true}
                />
                <Profile />
            </View>
            <View style={{ flex: 0.1, backgroundColor: '#004368', width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                <Bottom
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

export default ProfileScreen
