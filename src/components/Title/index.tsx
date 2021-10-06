import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface ITitleProps {
    username: string
}

const Title = ({username}:ITitleProps):JSX.Element =>{
    return (
        <View style={styles.titleContainer}>
            <Text
                numberOfLines={2}
                style={styles.title}>{username}'s Personal Credit Line</Text>
        </View>
    )

};

export default Title;