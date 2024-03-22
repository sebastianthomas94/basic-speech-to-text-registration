import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface Props {
    please: boolean;
}

const QuestianFour: React.FC<Props> = ({ please }): JSX.Element => {

    if (!please)
        return (
            <Text style={styles.questian}>Now, phone number.</Text>
        )
    return (
        <Text style={styles.questian}>Can you repeat your phone number please..</Text>

    )
}

export default QuestianFour;

const styles = StyleSheet.create({
    questian: {
        fontSize: 30,
        color: "white",
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center"
    }
});

