import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    backgroundImage:{
        flex: 1
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#FFFFFFAA',
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: '100%'
    },
    body: {
        flex: 2,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    defaultTitle: {
        fontFamily:'OstrichSans',
        fontSize:60,
        color:'#a356a6'
    },
    defaultSubtitle: {
        fontFamily:'OstrichSans',
        fontSize:35,
        color:'#a356a6'        
    },
    screenText: {
        fontFamily:'OstrichSans',
        fontSize:25,
        color:'#a356a6'
    }
});