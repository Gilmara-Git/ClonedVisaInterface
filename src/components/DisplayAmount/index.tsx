import React from 'react';
import { View } from 'react-native';
import { styles }  from './styles';
import AmountBox from '../AmountBox';



const DisplayAmount = ():JSX.Element =>{
    return(
        <View style={styles.amountsContainer}>
            <AmountBox 
                infoText="Total Current Balance"
                amount="500"/> 
             <AmountBox 
                infoText="Available Credit"
                amount="23,500"/>    
        </View>)
}

export default DisplayAmount;