import React, { Component } from 'react'
import { Text, View, Image,FlatList, TouchableOpacity } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import styles from './Styles'
import Header from '../Header/Header'
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Môn học',
            data:[
                {
                    id:'1',
                    title:'test'
                },
                {
                    id:'2',
                    title:'test 2'
                }
            ]
        }
    }
    render() {
        function Lesson() {
            return (
                <TouchableOpacity>
                    <View style={styles.lesson}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://image.freepik.com/free-vector/learn-english-design_24908-61060.jpg' }}
                        />
                        <View style={styles.info}>
                            <Text style={styles.title}>Tiếng anh cơ bản</Text>
                            <Text style={styles.author}>Pmdu</Text>
                            <View style={styles.rating}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    count={5}
                                    startingValue={2}
                                    style={styles.ratingStar}
                                />
                                <Text style={styles.ratingScore}>4.8</Text>
                                <Text style={styles.ratingNumber}>(2019)</Text>
    
                            </View>
                            <Text style={styles.price}>Free</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.container}>
                <Header title={this.state.title} />
                <View style={styles.body}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => <Lesson />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}
