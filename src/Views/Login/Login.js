import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, TextInput, ImageBackground, Dimensions, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import { setAuthInfo } from '../../Action/Auth';
import { connect } from 'react-redux';
import {
    signIn,
    getClientForFacebook
} from '../../Api/Api';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager
} from 'react-native-fbsdk';
function Login({ navigation, user, setAuthData }) {
    const [passcode, setPasscode] = useState('');
    const [loading, setLoading] = useState(false);
    const [intialLoading, setIntialLoading] = useState(true);
    useEffect(() => {
        if (user.login === true) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            });
            setIntialLoading(false)
        }
        else setIntialLoading(false)
    }, [user.login])
    const get_Response_Info = (error, result) => {
        if (error) {
            Alert.alert('Error fetching data: ' + error.toString());
        } else {

            setLoading(true)
            getClientForFacebook(
                {
                    "id": result.id, "name": result.name, "email": result.email,
                    "file": result.picture.data.url
                }
            )
                .then(res => {

                    setAuthData({
                        name: res.data.user.name,
                        lastName: res.data.user.lastName,
                        userId: res.data.user._id,
                        contactMethod: res.data.contactmethod,
                        email: res.data.user.email,
                        weight: res.data.user.weight,
                        phoneNumber: res.data.user.phoneNumber,
                        imageUrl: res.data.user.file,
                        color: user.color,
                        blindMode: user.blindMode,
                        login: true,
                        height: res.data.user.height,
                        problem: res.data.user.problem
                    })
                    setLoading(false);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Root' }],
                    });



                })
                .catch(err => {
                    console.log(err)
                })
            console.log(result)
            // navigation.navigate("PhoneNumberForm");
        }
    };

    function handleFacebookLogin() {
        LoginManager.setLoginBehavior('web_only');
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            (result) => {
                if (result.isCancelled) {
                    alert('login is cancelled.');
                } else {
                    console.log({ result })
                    AccessToken.getCurrentAccessToken().then(data => {
                        const processRequest = new GraphRequest(
                            '/me?fields=name,email,picture.type(large)',
                            null,
                            get_Response_Info
                        );
                        // Start the graph request.
                        new GraphRequestManager().addRequest(processRequest).start();
                    })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }
        )

    }


    const login = () => {
        if (passcode.length < 2) {
            Alert.alert('Please enter atleast 3 words to continue')
        }
        else {
            setLoading(true);
            signIn({ "passcode": passcode })
                .then(res => {
                    console.log(res.data)
                    if (res.data == "Client doesnot exist") {
                        Alert.alert('Please Enter Correct passcode')
                        setLoading(false)
                    }
                    else {

                        setAuthData({
                            name: res.data.name,
                            lastName: res.data.lastname,
                            userId: res.data._id,
                            contactMethod: res.data.contactmethod,
                            email: res.data.email,
                            weight: res.data.weight,
                            phoneNumber: res.data.phoneNumber,
                            imageUrl: res.data.file,
                            color: user.color,
                            blindMode: user.blindMode,
                            login: true,
                            height: res.data.height,
                            problem: res.data.problem,
                            age: res.data.age

                        })
                        setLoading(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Root' }],
                        });
                    }


                })
                .catch(err => {
                    setLoading(false)
                    Alert.alert("Something went wrong please try again later")
                })

        }

    }




    return (
        <ImageBackground
            source={require('../../Assets/ui-theme-image.png')}
            style={styles.imageBackground}
        >
            <SafeAreaView style={styles.container}
            >
                <View style={styles.container}>
                    <View style={styles.logoImage}>
                        <Image
                            style={styles.logo}
                            source={require('../../Assets/Man-Icon.png')}
                        />
                    </View>
                    {intialLoading ? (<View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 0.3 }}>
                        <ActivityIndicator size="large" color={user.color} />
                    </View>) : (
                            <>

                                <View style={styles.textInput}>
                                    <View style={styles.icon} ><IconLine name={"lock"} size={18} /></View>

                                    <TextInput placeholder="Code"
                                        value={passcode}
                                        onChangeText={(val) => setPasscode(val)}
                                        secureTextEntry={true} />
                                </View>
                                <View style={styles.button}>
                                    <TouchableOpacity onPress={() => login()} disabled={loading}>
                                        <View style={styles.row}>
                                            {loading ? <ActivityIndicator size="small" color="white" /> : (
                                                <Text style={styles.white}>
                                                    Login
                                                </Text>
                                            )}

                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={styles.rowIcons}>
                                    <TouchableOpacity>
                                        <View style={styles.google}>
                                            <Ionicons name={"google"} size={22} color={"white"} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleFacebookLogin} disabled={loading}>
                                        <View style={styles.facebook}>
                                            <Ionicons name={"facebook-f"} size={22} color={"white"} />
                                        </View>
                                    </TouchableOpacity>
                                </View> */}
                            </>
                        )}
                </View>

            </SafeAreaView >
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: '#ffff'
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    paragraph: {
        paddingBottom: 10,
        textAlign: 'center',
        width: '60%',
        color: '#AEAEAE',
        fontSize: 13
    },
    button: {
        width: '60%',
        backgroundColor: '#004368',
        paddingVertical: 13,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
    },
    white: {
        color: 'white'
    },
    bottom: {
        flex: 0.1
    },
    logo: {
        width: 150,
        height: 150
    },
    facebook: {
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "#4b69af",
    },
    google: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "#e73f3a",
    },
    logoImage: {
        backgroundColor: '#004368',
        borderRadius: 100
    },
    textInput: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        marginVertical: 30

    },
    icon: {
        marginRight: 5
    },
    rowIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        width: '35%',
    },
    imageBackground: {
        width: screenWidth,
        height: screenHeight,
        resizeMode: 'cover'
    }
});
const mapStateToProps = state => {
    return {
        user: state.rootReducer.Auth,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setAuthData: data => dispatch(setAuthInfo(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
