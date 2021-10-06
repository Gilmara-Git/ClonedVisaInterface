import { StyleSheet } from 'react-native';
import {themes} from '../../global/styles/themes';

export const styles =  StyleSheet.create({
    amountBoxContainer:{
        alignItems:'center',
        justifyContent: 'center'
    },
    text:{
        fontFamily: themes.fonts.PoppinsSemiBold,
        fontSize: 10
    },
    amount:{
        fontFamily: themes.fonts.PoppinsSemiBold,
        fontSize: 14
    },
    dollarSign:{
        fontFamily: themes.fonts.PoppinsSemiBold,
        fontSize: 4
    }
});