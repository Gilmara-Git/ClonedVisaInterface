import React from 'react';
import { View , Text } from 'react-native';
import { styles }  from './styles';


interface IAmountBoxProps {
    infoText: string,
    amount: string,
}

const AmountBox = ({infoText, amount}: IAmountBoxProps):JSX.Element =>{
    return (     
            <View style={styles.amountBoxContainer}>
                <Text style={styles.text}>{infoText}</Text>              
                <Text style={styles.amount}><Text style={styles.dollarSign}>$</Text>{amount}</Text>
            </View>
       
)
}

export default AmountBox;