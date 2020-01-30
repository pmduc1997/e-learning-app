import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import styles from './Styles'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from 'App/Assets/Images/logo.png'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    _doLogin = () => {
        const {navigate} = this.props.navigation
        navigate('MainScreen')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoPic} source={Logo} />
                    <Text style={styles.logoText}>Learning App</Text>
                </View>
                <View style={styles.credentials}>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.inputLeftIcon} name='user' size={24} color='blue' />
                        <TextInput style={styles.email} placeholder='Email' />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon style={styles.inputLeftIcon} name='lock' size={24} color='blue' />
                        <TextInput style={styles.email} placeholder='Password' />
                    </View>
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={{ fontSize: 15 }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._doLogin}>
                        <View style={[styles.inputContainer, styles.login]}>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.more}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.moreLabel}>Or connect using</Text>
                    </View>
                    <View style={styles.socialLogin}>
                        <TouchableOpacity style={[styles.socialLoginButton, styles.facebook]}>
                            <Icon style={styles.socialLoginIcon} name='facebook' size={22} color='white' />
                            <Text style={styles.socialLoginText}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialLoginButton, styles.google]}>
                            <Icon style={styles.socialLoginIcon} name='google' size={22} color='white' />
                            <Text style={styles.socialLoginText}>Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUp}>
                        <Text>Don't have an acount ?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}
