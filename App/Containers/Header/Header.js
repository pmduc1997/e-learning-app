import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/AntDesign';
export default class CustomHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>

                </View>
                <View style={styles.center}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.right}>
                </View>

            </View>

        )
    }
}
