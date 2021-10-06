import React from 'react';
import { View, Image , Text} from 'react-native';
import {styles } from './styles';
import { Foundation } from '@expo/vector-icons';
import { themes } from '../../global/styles/themes';


const Header = () : JSX.Element => {
 
    return (
        <View style={styles.headerContainer}>         

            <Image
                style={styles.imageContainer}
                source={(require('../../../src/assets/logo.png'))}/>
      
            
            <Foundation
                name="list"
                size={30}
                color={themes.colors.strongLimeGreen}
                />
        </View>
    );
}

export default Header; 