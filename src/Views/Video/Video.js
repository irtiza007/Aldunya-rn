import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ProgressBarAndroid, Dimensions } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import Video from './Components/Video';


import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Rating from '../../Components/Rating';
const barWidth = 200;

const Videos = ({ navigation }) => {
    const [ShowRatings, setShowRatings] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                    exercise={true}
                />
                {ShowRatings ? (
                    <Rating
                        setShowRatings={setShowRatings}
                    />
                ) : (
                        <>

                            <View>
                                <Video
                                    setShowRatings={setShowRatings}
                                />
                            </View>
                            <View style={styles.scrollArea}>
                                <ScrollView>
                                    <View>
                                        <Text style={[styles.heading, { marginVertical: 10 }]}>
                                            Description
                        </Text>
                                        <Text style={styles.description}>
                                            Lorem Ipsum is simply dummy
                    of the printing and typesetting
                    industry. Lorem Ipsum has been
                    the industry's standard dummy
                    text ever since the 1500s, when an
                    unknown printer took a galley of
                    type and scrambled it to make a
                    type specim
                        </Text>
                                    </View>
                                    <View style={styles.videoDescription}>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Time
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    8 min
                                     </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Time
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    8 min
                                     </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Time
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    8 min
                                     </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Time
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    8 min
                                     </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.buttons}>
                                        <TouchableOpacity onPress={() => setShowRatings(true)}>
                                            <View style={styles.switchButton}>
                                                <Text style={{ color: 'white', fontSize: 18 }}>
                                                    Switch
                                    </Text>

                                                <Image source={require('../../Assets/Switch-Icon.png')}
                                                    style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }}
                                                />

                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ marginVertical: 10 }}>
                                            <ProgressBarAnimated
                                                height={30}
                                                borderRadius={30}
                                                width={barWidth}
                                                value={20}
                                                backgroundColor='#004368'
                                                backgroundColorOnComplete='#004368'
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </>
                    )}

            </View>
            <View style={styles.Bottom}>
                <Bottom
                    navigation={navigation}
                />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    Bottom: { flex: 0.1, backgroundColor: '#004368', width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 },
    heading: {
        fontSize: 24,
        color: '#004368',
        fontWeight: '500',
        // marginVertical: '10%'
    },
    scrollArea: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '5%',
        marginVertical: 10
    },

    description: {
        color: '#004368',
        fontSize: 19
    },
    videoDescription: {
        marginVertical: 15
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
        fontWeight: 'bold',
        fontSize: 20
    },
    buttons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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
});

export default Videos
