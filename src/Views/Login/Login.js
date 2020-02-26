import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, TextInput, ImageBackground, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import IconLine from 'react-native-vector-icons/SimpleLineIcons';
import { setAuthInfo } from '../../Action/Auth';
import { connect } from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
// import {
//     AccessToken,
//     GraphRequest,
//     GraphRequestManager,
//     LoginManager
// } from 'react-native-fbsdk';
function Login({ navigation, user, setAuthData }) {
    // useEffect(() => {
    //     if (user.login === true && user.phoneNumber !== null) {
    //         navigation.reset({
    //             index: 0,
    //             routes: [{ name: 'Contacts' }],
    //         });
    //     }
    //     else {
    //         if (user.login === true && user.phoneNumber === null) {
    //             navigation.navigate('PhoneNumberForm')
    //         }
    //     }
    // }, [])
    // const get_Response_Info = (error, result) => {
    //     if (error) {
    //         Alert.alert('Error fetching data: ' + error.toString());
    //     } else {
    //         setAuthData({
    //             username: result.name,
    //             login: true,
    //             userUrl: result.picture.data.url
    //         })
    //         navigation.navigate("PhoneNumberForm");
    //     }
    // };

    // function handleFacebookLogin() {
    //     LoginManager.setLoginBehavior('web_only');
    //     LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    //         (result) => {
    //             if (result.isCancelled) {
    //                 alert('login is cancelled.');
    //             } else {
    //                 console.log({ result })
    //                 AccessToken.getCurrentAccessToken().then(data => {
    //                     const processRequest = new GraphRequest(
    //                         '/me?fields=name,picture.type(large)',
    //                         null,
    //                         get_Response_Info
    //                     );
    //                     // Start the graph request.
    //                     new GraphRequestManager().addRequest(processRequest).start();
    //                 })
    //                     .catch(err => {
    //                         console.log(err)
    //                     })
    //             }
    //         }
    //     )

    // }


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

                    <View style={styles.textInput}>
                        <View style={styles.icon} ><IconLine name={"lock"} size={18} /></View>

                        <TextInput placeholder="Code" secureTextEntry={true} />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'calender' })}>
                            <View style={styles.row}>
                                <Text style={styles.white}>
                                    Login
                        </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowIcons}>
                        <TouchableOpacity>
                            <View style={styles.google}>
                                <Ionicons name={"google"} size={22} color={"white"} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.facebook}>
                                <Ionicons name={"facebook-f"} size={22} color={"white"} />
                            </View>
                        </TouchableOpacity>
                    </View>
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
