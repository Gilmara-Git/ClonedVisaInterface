import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';



export const styles = StyleSheet.create({
    titleContainer:{    
        width: '60%'
    },
    title:{
        textAlign: 'center',
        color: themes.colors.strongLimeGreen,
        fontSize: 23,
        letterSpacing: 1,
        fontFamily: themes.fonts.PoppinsRegular,
        lineHeight: 35,
           

    }
});

