import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    container:{
        height:60,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#E1EDFC',
        borderBottomWidth:1
    },
    left:{
        width:30
    },
    center:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    right:{
        width:30
    },
})
