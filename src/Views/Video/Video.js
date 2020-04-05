import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ProgressBarAndroid, Dimensions, ActivityIndicator } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import Video from './Components/Video';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Rating from '../../Components/Rating';
import { postRating } from '../../Api/Api';
import { connect } from 'react-redux';
const barWidth = 200;

const Videos = ({ navigation, route, user }) => {
    const [ShowRatings, setShowRatings] = useState(false);
    const [loading, setLoading] = useState(false)

    const { value } = route.params;

    const postRatings = (value) => {
        setLoading(true)
        postRating({ rating: value, userId: user.userId })
            .then(res => {

                setShowRatings(false);
                setLoading(false);
                navigation.goBack();
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })

        // setShowRatings(false)
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                    exercise={true}
                />
                {ShowRatings ? (
                    <Rating
                        setShowRatings={postRatings}
                        navigation={navigation}
                    />
                ) : (
                        <>

                            <View>
                                <Video
                                    setShowRatings={setShowRatings}
                                    url={value.file}
                                    title={value.exercise}
                                />
                            </View>
                            <View style={styles.scrollArea}>
                                <ScrollView>
                                    <View>
                                        <Text style={[styles.heading, { marginVertical: 10, color: user.color }]}>
                                            Description
                        </Text>
                                        <Text style={[{ color: user.color }, styles.description]}>
                                            {value.description}
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
                                                    Reps
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    {value.reps}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Sets
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    {value.sets}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.item}>
                                                <Text style={styles.rowText}>
                                                    Tracking Device
                                </Text>
                                            </View>
                                            <View style={styles.item2}>
                                                <Text style={styles.rowText}>
                                                    FitBit
                                     </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.buttons}>
                                        <TouchableOpacity onPress={() => setShowRatings(true)}>
                                            <View style={[{ backgroundColor: user.color }, styles.switchButton]}>
                                                {loading ? <ActivityIndicator size="small" color={user.color} /> : (
                                                    <Text style={{ color: 'white', fontSize: 18 }}>
                                                        Completed
                                                    </Text>
                                                )}


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
                                                backgroundColor={user.color}
                                                backgroundColorOnComplete={user.color}
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </>
                    )}

            </View>
            <View style={[{ backgroundColor: user.color }, styles.Bottom]}>
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


export default connect(mapStateToProps)(Videos);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    Bottom: { flex: 0.1, width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 10 },
    heading: {
        fontSize: 24,

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

        borderRadius: 30,

    }
});


