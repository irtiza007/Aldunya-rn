import React from 'react'
import { View } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import Profile from './Components/Profile';
import { connect } from 'react-redux';
const ProfileScreen = ({ navigation, user }) => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 2 }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                    hideProfile={true}
                />
                <Profile
                    user={user}
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

// function mapDispatchToProps(dispatch) {
//     return {
//         setAuthData: data => dispatch(setAuthInfo(data)),
//     };
// }

export default connect(mapStateToProps)(ProfileScreen);

// export default ProfileScreen
