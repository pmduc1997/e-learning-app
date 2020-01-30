import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './Styles'
import { Avatar } from 'react-native-elements'
import Header from '../Header/Header'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFea from 'react-native-vector-icons/Feather';
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Tài khoản'
        }
    }
    _onLogOut = () => {
        const { goBack } = this.props.navigation
        goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title={this.state.title} />
                <ScrollView style={styles.body}>
                    <View style={styles.avatar}>
                        <Avatar
                            size={110}
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                            showEditButton
                        />
                        <Text style={styles.name}>Đức Phạm</Text>
                    </View>
                    <Text style={styles.type}>Thông tin</Text>
                    <View style={styles.item}>
                        <Text style={styles.label}>Tên</Text>
                        <Text style={styles.info}>Đức Phạm</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.info}>pmduc1997@gmail.com</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.label}>Mật khẩu</Text>
                    </View>
                    <Text style={[styles.type, { marginTop: 14 }]}>Khác</Text>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name='language' size={24} color='black' />
                        <Text style={styles.label}>Ngôn ngữ</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name='info-circle' size={24} color='black' />
                        <Text style={styles.label}>Hỗ trợ</Text>
                    </View>
                    <View style={styles.item}>
                        <IconFea style={styles.icon} name='log-out' size={24} color='black' />
                        <Text style={styles.label}>Đăng xuất</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
