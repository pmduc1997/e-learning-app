import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../Header/Header'
import styles from './Styles'
export default class Courses extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'Môn học'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title={this.state.title}/>
                
                <Text> textInComponent </Text>
            </View>
        )
    }
}
