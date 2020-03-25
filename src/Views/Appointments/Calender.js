import React from 'react'
import { View, Text, Button } from 'react-native'
import Header from './Components/Header';
import Calenders from './Components/Calender';
import Bottom from './Components/calendar/Bottom';
import { connect } from 'react-redux';
const Calender = ({ navigation, user }) => {
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
            <View style={{ flex: 0.1, backgroundColor: user.color, width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
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


export default connect(mapStateToProps)(Calender);


