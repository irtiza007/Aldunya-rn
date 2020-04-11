import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
const Header = ({ navigation, back = "", exercise = false, hideProfile = false, heading, user }) => {
    return (
        <View style={styles.header}>
            {back !== "" ? (
                <TouchableOpacity onPress={back} style={{ width: 50, height: 35 }}>
                    <Icon name="ios-arrow-back" size={35} color={user.color} />
                </TouchableOpacity>
            ) : (
                    <View>
                    </View>
                )}

            {!hideProfile && (
                <View style={exercise ? styles.exercise : styles.imageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Profile' })} disabled={exercise ? true : false}>
                        <Image style={styles.image} source={exercise ? require('../../../Assets/Dumble-Icon.png') : ({ uri: user.imageUrl })} />
                    </TouchableOpacity>
                    {exercise && (
                        <Text style={{ fontSize: 15, color: user.color, fontWeight: 'bold' }}>
                            Exercise
                        </Text>
                    )}

                </View>
            )}
            {heading === "Progress" && (
                <Text style={{ fontSize: 19, color: user.color, fontWeight: '500' }}>
                    {heading}
                </Text>
            )}

            <TouchableOpacity onPress={() => {
                navigation.toggleDrawer();
            }}>
                <Icon name="md-menu" size={35} color={user.color} />
            </TouchableOpacity>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};


export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        alignSelf: 'center',
        width: '90%',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        // borderColor: { user.color },
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 45
    },
    exercise: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 49,
        height: 49,
        borderRadius: 25
    },
})
