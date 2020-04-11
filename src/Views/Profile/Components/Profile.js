import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Form, Item, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { updateProfile } from '../../../Api/Api';

// import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ user }) => {
    const [preferred, setPreferred] = useState(user.contactMethod);
    const [loading, setLoading] = useState(false)

    const updatePhoneNumber = () => {
        setLoading(true)
        let body = {
            "id": user.userId,
            "name": user.name,
            "lastname": user.lastName,
            "age": user.age,
            "height": user.height,
            "phoneNumber": user.phoneNumber,
            "weight": user.weight,
            "contactmethod": preferred,
            "problem": user.problem,
            "exercise": "",
            "email": user.email,
            "file": user.imageUrl
        }

        updateProfile(user.userId, body)
            .then(res => {
                setLoading(false)

                Alert.alert("Preferred Contact Updated")
            })
            .catch(err => {
                setLoading(false)
                Alert.alert("Something went wrong please try again later")
                console.log(err)
            })
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: user.imageUrl }} />
                </View>
                <View style={styles.videoDescription}>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.rowText}>
                                Name
                                </Text>
                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.rowText2}>
                                {user.name}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.rowText}>
                                Last Name
                                </Text>
                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.rowText2}>
                                {user.lastName}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.rowText}>
                                Age
                                </Text>
                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.rowText2}>
                                {user.age}
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.preferredText}>
                        Preferred contact number
                                </Text>
                    <View style={styles.picker}>


                        <Item picker>
                            <Picker
                                mode="dialog"
                                iosIcon={<Icon name="ios-arrow-down" />}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={preferred}
                                onValueChange={(value) => setPreferred(value)}
                            >
                                <Picker.Item label="Whatsapp" value="key0" />
                                <Picker.Item label="Number" value="key1" />
                            </Picker>
                        </Item>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.rowText}>
                                Height
                                </Text>
                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.rowText2}>
                                {user.height}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.item}>
                            <Text style={styles.rowText}>
                                Weight
                                </Text>
                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.rowText2}>
                                {user.weight} lbs
                     </Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => updatePhoneNumber()} disabled={loading}>
                            <View style={[{ backgroundColor: user.color }, styles.switchButton]}>
                                {loading ? <ActivityIndicator size="small" color="white" /> : (
                                    <Text style={{ color: 'white', fontSize: 18 }}>
                                        Save
                                    </Text>
                                )}




                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#004368',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 75
    },
    image: {
        width: 149,
        height: 149,
        borderRadius: 75
    },
    videoDescription: {
        width: '90%',
        marginVertical: 15,
        // alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    item: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 10
    },
    item2: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    rowText: {
        fontWeight: '500',
        fontSize: 20,
        color: '#808080'
    },
    rowText2: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black'
    },
    picker: {
        borderWidth: StyleSheet.hairlineWidth,
        zIndex: 9
    },
    preferredText: {
        marginVertical: 20,
        fontWeight: '500',
        fontSize: 20,
        color: '#808080'
    },
    switchButton: {
        flexDirection: 'row',
        width: 200,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    }
})

export default Profile
