import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Form, Item, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = () => {
    const [preferred, setPreferred] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/profile_images/914555270235291648/o_oK5POE_400x400.jpg' }} />
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
                            Sam
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
                            Dar
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
                            18 years
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
                            5'11
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
                            182 lbs
                     </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
                    <TouchableOpacity>
                        <View style={styles.switchButton}>
                            <Text style={{ color: 'white', fontSize: 18 }}>
                                Save
                                    </Text>



                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
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
        backgroundColor: '#004368',
        borderRadius: 30,

    }
})

export default Profile
