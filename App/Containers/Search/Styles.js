import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {

    },
    lesson: {
        height: 120,
        flexDirection: 'row',
        padding: 16,
    },
    image: {
        width: 66,
        height: 66
    },
    info:{
        marginLeft:10
    },
    title:{
        fontSize:18,

    },
    author:{
        fontSize:16,
        color:'#757575'

    },
    rating:{
        flexDirection:'row',
        alignItems:'center'
    },
    ratingStar:{
    },
    ratingScore:{
        fontWeight:'bold',
        fontSize:16,
        marginHorizontal:6
    },
    ratingNumber:{
        fontSize:16,
        color:'#757575'
    },
    price:{
        fontSize:18,
        fontWeight:'bold'
    },
    divider:{
        marginHorizontal:10,
        height:1,
        backgroundColor:'#616161'
    }
})
