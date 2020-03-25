import React from 'react'
import { View, Text } from 'react-native'

const Bottom = ({ navigation }) => {
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%', borderRightWidth: 1, borderRightColor: 'white' }}>
                <Text style={{ color: 'white', fontSize: 16 }} onPress={() => navigation.navigate('Root', { screen: 'Calender' })}>
                    Main
                    </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <Text style={{ color: 'white', fontSize: 16 }} onPress={() => navigation.navigate('Root', { screen: 'Progress' })}>
                    Progress
                    </Text>
            </View>
        </>
    )
}



export default Bottom
