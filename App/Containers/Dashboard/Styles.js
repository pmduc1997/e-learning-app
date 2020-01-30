import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    avatar: {
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:6
    },
    name:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:12,
    },
    type: {
        marginLeft: 12,
        color: '#757575',
        fontSize: 18,
        marginBottom:6
    },
    item: {
        height: 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        marginLeft: 12,
        width: 140,
    },
    info:{
        fontSize: 18,
        color:'#757575'
    },
    icon: {
        marginLeft: 12,
        marginRight: 6
    }
})
