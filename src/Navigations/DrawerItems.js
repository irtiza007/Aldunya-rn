import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Switch, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { updateBlindColor, resetAuthInfo } from '../Action/Auth';
import { connect } from 'react-redux';

const DrawerItems = ({ Navigation, user, updateBlindColor, resetAuthInfo }) => {
    console.log(user)
    // const [blindMode, setBlindMode] = useState(user.blindMode);
    const setBlindColor = (value) => {
        // setBlindMode(value);
        value ? updateBlindColor({ color: '#004368', blindMode: value }) : updateBlindColor({ color: '#5f8cda', blindMode: value });
        // console.log(Navigation)
        Navigation.closeDrawer();
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    Navigation.navigate('Root', { screen: 'Profile' })
                }}>
                    <View style={[styles.row, styles.marginTop]}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: user.imageUrl }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[{ color: user.color, width: '70%' }, styles.title]} textBreakStrategy="balanced"
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >{user.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={[styles.rowItems, { borderBottomColor: user.color }]}>
                    <View style={styles.textContainer}>
                        <Text style={[{ color: user.color }, styles.itemsTitle]}>Color Blind View</Text>
                    </View>
                    <View>
                        <Switch
                            thumbColor={user.color}
                            trackColor={user.color}
                            value={user.blindMode}
                            onValueChange={setBlindColor}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => Navigation.navigate('BusyPeriods')}>
                    <View style={[styles.rowItems, { borderBottomColor: user.color }]}>
                        <View style={styles.textContainer}>
                            <Text style={[{ color: user.color }, styles.itemsTitle]}>Busy Periods</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.zoom}>
                    <View>
                        <Text style={[{ color: user.color }, styles.itemsTitle]}>Zoom</Text>
                    </View>
                    <View style={[{ borderBottomColor: user.color, borderBottomColor: user.color }, styles.zoomRow]}>
                        <Icon size={28} name="minus" color={user.color} />
                        <View style={styles.textContainer}>
                            <Text style={[{ color: user.color }, styles.itemsTitle]}>90%</Text>
                        </View>
                        <Icon size={28} name="zoom-in" color={user.color} />
                    </View>
                </View>
                <TouchableOpacity style={[styles.row, styles.marginTop]} onPress={() => {
                    resetAuthInfo()
                    Navigation.navigate('Login');

                }}>
                    <View style={styles.imageContainer}>
                        <IconAnt size={28} name="logout" color={user.color} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[{ color: user.color }, styles.title]}>Logout</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        // setAuthData: data => dispatch(setAuthInfo(data)),
        updateBlindColor: data => dispatch(updateBlindColor(data)),
        resetAuthInfo: () => dispatch(resetAuthInfo())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerItems);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#3F53B1',
        padding: 10,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30
        // justifyContent: 'center'
    },
    rowItems: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30,
        paddingBottom: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
    },
    imageContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#004368',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 45,
        marginRight: 10
    },
    image: {
        width: 49,
        height: 49,
        borderRadius: 25
    },
    text: {
        color: '#004368',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    textContainer: {
        alignSelf: 'center',
    },
    itemsTitle: {
        fontSize: 18
    },
    zoom: {
        width: '100%',
        justifyContent: 'flex-start'
    },
    zoomRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 30,
        paddingBottom: 10,
        // borderBottomColor: '#004368',
        borderBottomWidth: 2,

    }

});

