import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'


const Rating = ({ setShowRatings }) => {

    const [status, setStatus] = useState(1);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../Assets/Flag.png')} style={styles.logo} />
                <Text style={styles.completed}>
                    Completed
            </Text>
            </View>
            <View style={styles.checkBoxesContainer}>

                <View style={styles.checkBoxes}>
                    <Text style={styles.rateText}>

                        Rate Difficulty
                    </Text>
                    <View style={styles.checkBoxesRow}>
                        <TouchableOpacity onPress={() => setStatus(1)}>
                            <View style={{
                                margin: 10,
                                height: 30,
                                width: 30,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderRadius: 15,
                                backgroundColor: status <= 5 ? '#004368' : '#ffff'
                            }}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStatus(2)}>
                            <View style={{
                                margin: 10,
                                height: 30,
                                width: 30,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderRadius: 15,
                                backgroundColor: status >= 2 && status <= 5 ? '#004368' : '#ffff'
                            }}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStatus(3)}>
                            <View style={{
                                margin: 10,
                                height: 30,
                                width: 30,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderRadius: 15,
                                backgroundColor: status >= 3 && status <= 5 ? '#004368' : '#ffff'
                            }}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStatus(4)}>
                            <View style={{
                                margin: 10,
                                height: 30,
                                width: 30,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderRadius: 15,
                                backgroundColor: status >= 4 && status <= 5 ? '#004368' : '#ffff'
                            }}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStatus(5)}>
                            <View style={{
                                margin: 10,
                                height: 30,
                                width: 30,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderRadius: 15,
                                backgroundColor: status === 5 ? '#004368' : '#ffff'
                            }}>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowRatings(false)}>
                    <View style={styles.switchButton}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Submit
                                    </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // marginVertical: 20,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 170,
        height: 170,
    },
    completed: {
        color: '#9c8285',
        fontSize: 28,
        marginVertical: 10
    },

    checkBoxesContainer: {
        flex: 0.8,
        width: '80%',
        justifyContent: 'center',

    },
    checkBoxes: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%'
    },
    rateText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    checkBoxesRow: { justifyContent: 'flex-start', flexDirection: 'row', marginVertical: 10 },
    switchButton: {
        flexDirection: 'row',
        width: 200,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004368',
        borderRadius: 30,

    }
},


);

export default Rating
