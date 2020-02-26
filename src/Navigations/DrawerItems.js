import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';


const DrawerItems = ({ Navigation }) => {


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    Navigation.navigate('Root', { screen: 'Profile' })
                }}>
                    <View style={[styles.row, styles.marginTop]}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/914555270235291648/o_oK5POE_400x400.jpg' }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.title]}>Sam Williams</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={[styles.rowItems]}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, styles.itemsTitle]}>Color Blind View</Text>
                    </View>
                    <View>
                        <Switch
                            thumbColor="#004368"
                            trackColor="#004368"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => Navigation.navigate('BusyPeriods')}>
                    <View style={[styles.rowItems]}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.itemsTitle]}>Busy Periods</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.zoom}>
                    <View>
                        <Text style={[styles.text, styles.itemsTitle]}>Zoom</Text>
                    </View>
                    <View style={styles.zoomRow}>
                        <Icon size={28} name="minus" color="#004368" />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, styles.itemsTitle]}>90%</Text>
                        </View>
                        <Icon size={28} name="zoom-in" color="#004368" />
                    </View>
                </View>
                <View style={[styles.row, styles.marginTop]}>
                    <View style={styles.imageContainer}>
                        <IconAnt size={28} name="logout" color="#004368" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, styles.title]}>Logout</Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}


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
        borderBottomColor: '#004368',
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
        borderBottomColor: '#004368',
        borderBottomWidth: 2,

    }

});

export default DrawerItems
