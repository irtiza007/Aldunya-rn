import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ProgressBarAndroid, Dimensions, ActivityIndicator } from 'react-native'
import Header from '../Appointments/Components/Header';
import Bottom from '../Appointments/Components/calendar/Bottom';
import Video from './Components/Video';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Rating from '../../Components/Rating';
import { postRating } from '../../Api/Api';
import { connect } from 'react-redux';
const barWidth = 200;

const switchVideos = [{
    description: "Cervical spondylosis is a general term for the wear and tear of the spinal discs in the neck as we age. As the discs degenerate, signs of osteoarthritis develop. This can cause achiness and soreness as well as decreased motion in the neck. See Doctor Jo’s blog post about this at: http://www.askdoctorjo.com/cervical-s...↵↵First start off with some gentle neck stretches by turning your head from side to side like you are looking over your shoulder. This is neck rotation. Hold it for about 10-15 seconds, and go back and forth about 5 times. Next you are going to take your ear to your shoulder on each side. Make sure you are not shrugging your shoulders up. This is side bending. Hold it for about 10-15 seconds, and go back and forth about 5 times. Now bring your chin to your chest and then looking up towards the ceiling. This is neck flexion and extension. Hold it for about 10-15 seconds, and go back and forth about 5 times. ↵↵Then you are going to do isometric exercises in each direction. Basically this is when you activate the muscle, but you are not moving it. You can do this by gently pressing into your hand in each direction. Hold each one of these for 3-5 seconds.↵↵Now place your hand under your thigh to keep your shoulder down, then side bend your head to the opposite side and gently put pressure with your other hand to get a stretch through your trapezius muscles. Hold these for 30 seconds and perform 3 times on each side.↵↵The final stretch is going to be for your levator scapulae muscle. This is the muscle that is used when you shrug your shoulders, and they can get overworked when you are stressed out. Take your arm on the side of the pain and place it above and behind your shoulder. Then take your opposite arm and place on top and slightly behind your head. Look down towards the opposite knee of the pain and apply gentle pressure for a good stretch. Hold these for 30 seconds and perform 3 times on each side.↵"
    , endDate: "2020-04-28T00:00:00.000Z",
    exercise: "Cervical Spondylosis",
    file: "https://al-dunia.s3.us-east-2.amazonaws.com/al-dunia/uploads/image/1584888336257-Cervical-Spondylosis.mp4"
    , reps: "10"
    , sets: "12"
    , startDate: "2020-04-28T00:00:00.000Z"
    , type: "exercise"
    , userId: "5e7dc05a930e040017190c95"
    , __v: 0
    , _id: "5e842bcccc9ad900174759fb"
},
{
    description: "A sciatic nerve glide can help relieve the pain and pressure caused by a compressed sciatic nerve. Watch more Ask Doctor Jo videos featuring full routines for common injuries and syndromes at http://www.askdoctorjo.com↵↵To perform a sciatic nerve glide:↵↵1. Lie on your back with your knees bent up. Grab the back of your thigh bringing your leg up to about a 90 degree angle.↵2. Pull your toes towards you, and straighten out your leg until you feel a stretch, then bend the knee again.↵↵Watch a longer video about sciatic nerve pain: https://youtu.be/8oPHrX_oALk?list=PLP...↵↵===========================================↵↵Prescribe this video, and others like it, to your patients as part of their Home Exercise Program with a FREE HEP Builder account: http://www.hepbuilder.com↵↵===========================================↵"
    , endDate: "2021-04-04T00:00:00.000Z"
    , exercise: "Nerve Glide - Sciatic"
    , file: "https://al-dunia.s3.us-east-2.amazonaws.com/al-dunia/uploads/image/1584888919388-Nerve-Glide-Sciatic.mp4"
    , reps: "456"
    , sets: "355"
    , startDate: "2020-04-04T00:00:00.000Z"
    , type: "exercise"
    , userId: "5e7dc05a930e040017190c95"
    , __v: 0
    , _id: "5e89e9ef63225c001795aa85"
}, {
    description: "Back Pain1 c"
    , endDate: "2020-04-23T00:00:00.000Z"
    , exercise: "Spine Injury"
    , file: "https://al-dunia.s3.us-east-2.amazonaws.com/al-dunia/uploads/image/1585299971286-severe-spine-pain-spine-surgery-Arkansas.-Arkansas-Surgical-Hospital.jpg"
    , reps: "15"
    , sets: "10"
    , startDate: "2020-04-11T00:00:00.000Z"
    , type: "exercise"
    , userId: "5e7dc05a930e040017190c95"
    , __v: 0
    , _id: "5e91a1bf51692c00172e257b"

},
{
    description: "Test"
    , endDate: "2020-04-29T00:00:00.000Z"
    , exercise: "Patella Mobs"
    , file: "https://al-dunia.s3.us-east-2.amazonaws.com/al-dunia/uploads/image/1585026358994-Patella-Mobs.mp4"
    , reps: "40"
    , sets: "10"
    , startDate: "2020-04-11T00:00:00.000Z"
    , type: "exercise"
    , userId: "5e7dc05a930e040017190c95"
    , __v: 0
    , _id: "5e91a1f451692c00172e257d"
}

]


const Videos = ({ navigation, route, user }) => {
    const [ShowRatings, setShowRatings] = useState(false);
    const [loading, setLoading] = useState(false)

    const { value } = route.params;
    const [excerciseData, setExcerciseData] = useState(value);
    const [key, setKey] = useState(0);

    useEffect(() => {
        setLoading(true)
        if (key !== 0 && key !== 4) {
            setTimeout(() => {
                setLoading(false)
            }, 1500)
            setExcerciseData(switchVideos[key]);
        }
        else {
            setTimeout(() => {
                setLoading(false)
            }, 1500)

            setKey(0);
            setExcerciseData(value);
        }
    }, [key])
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

    const switchExcercise = () => {
        setKey(key + 1)
        // setExcerciseData(switchVideos[key]);
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, }}>
                <Header navigation={navigation}
                    back={() => navigation.goBack()}
                    exercise={true}
                />
                {loading ? (
                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={user.color} />
                        <Text style={{ color: user.color, fontSize: 20 }}>
                            Please Wait ...
</Text>
                    </View>
                ) : (<>

                    {ShowRatings ? (
                        <Rating
                            color={user.color}
                            setShowRatings={postRatings}
                            navigation={navigation}
                        />
                    ) : (
                            <>

                                <View>
                                    <Video
                                        setShowRatings={setShowRatings}
                                        url={excerciseData.file}
                                        title={excerciseData.exercise}
                                    />
                                </View>
                                <View style={styles.scrollArea}>
                                    <ScrollView>
                                        <View>
                                            <Text style={[styles.heading, { marginVertical: 10, color: user.color }]}>
                                                Description
                            </Text>
                                            <Text style={[{ color: user.color }, styles.description]}>
                                                {excerciseData.description}
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
                                                        {excerciseData.reps}
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
                                                        {excerciseData.sets}
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
                                            {key !== 4 && (<TouchableOpacity onPress={() => switchExcercise()}>
                                                <View style={[{ backgroundColor: user.color, marginBottom: 5 }, styles.switchButton]}>
                                                    {loading ? <ActivityIndicator size="small" color={user.color} /> : (
                                                        <Text style={{ color: 'white', fontSize: 18 }}>
                                                            Switch
                                                        </Text>
                                                    )}


                                                    <Image source={require('../../Assets/Switch-Icon.png')}
                                                        style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }}
                                                    />

                                                </View>
                                            </TouchableOpacity>
                                            )}



                                            <TouchableOpacity onPress={() => setShowRatings(true)}>
                                                <View style={[{ backgroundColor: user.color }, styles.switchButton]}>
                                                    {loading ? <ActivityIndicator size="small" color={user.color} /> : (
                                                        <Text style={{ color: 'white', fontSize: 18 }}>
                                                            Completed
                                                        </Text>
                                                    )}
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
                </>)}

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


