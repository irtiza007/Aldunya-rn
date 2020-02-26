import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Views/Login/Login';
import { connect } from 'react-redux';
import Calendar from '../Views/Appointments/Calender';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import DrawerItems from './DrawerItems';
import BusyPeriods from '../Views/BusyPeriods/BusyPeriods';
import Video from '../Views/Video/Video';
import Profile from '../Views/Profile/Profile';
import Progress from '../Views/Progress/Progress';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Navigation({ user, resetAuthInfo }) {
    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <DrawerItems
                    Navigation={props.navigation}
                />
            </DrawerContentScrollView>
        );
    }
    function drawerNavigater() {
        return (
            <Drawer.Navigator
                drawerPosition="right"
                drawerStyle={{ width: '60%' }}
                drawerContent={props => CustomDrawerContent(props)}
            >
                <Drawer.Screen name="Calender" component={Calendar} />
                <Drawer.Screen name="BusyPeriods" component={BusyPeriods} />
                <Stack.Screen name="Video" component={Video} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Progress" component={Progress} />

            </Drawer.Navigator>
        )
    }
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Login'}>

                    <Stack.Screen name="Login" component={Login}
                        options={{
                            title: null,
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name="Root" component={drawerNavigater}
                        options={
                            {
                                headerShown: false,
                            }
                        }

                    />




                </Stack.Navigator>

            </NavigationContainer>
        </>
    );
}





const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};
function mapDispatchToProps(dispatch) {
    return {
        resetAuthInfo: () => dispatch(resetAuthInfo()),
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(Navigation);