import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ navigation, back = "", exercise = false, hideProfile = false, heading }) => {
    return (
        <View style={styles.header}>
            {back !== "" ? (
                <TouchableOpacity onPress={back}>
                    <Icon name="ios-arrow-back" size={35} color="#004368" />
                </TouchableOpacity>
            ) : (
                    <View>
                    </View>
                )}

            {!hideProfile && (
                <View style={exercise ? styles.exercise : styles.imageContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Profile' })} disabled={exercise ? true : false}>
                        <Image style={styles.image} source={exercise ? require('../../../Assets/Dumble-Icon.png') : ({ uri: 'https://pbs.twimg.com/profile_images/914555270235291648/o_oK5POE_400x400.jpg' })} />
                    </TouchableOpacity>
                    {exercise && (
                        <Text style={{ fontSize: 15, color: '#004368', fontWeight: 'bold' }}>
                            Exercise
   </Text>
                    )}

                </View>
            )}
            {heading === "Progress" && (
                <Text style={{ fontSize: 19, color: '#004368', fontWeight: '500' }}>
                    {heading}
                </Text>
            )}

            <TouchableOpacity onPress={() => {
                navigation.toggleDrawer();
            }}>
                <Icon name="md-menu" size={35} color="#004368" />
            </TouchableOpacity>
        </View>
    )
}

export default Header

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
        borderColor: '#004368',
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
