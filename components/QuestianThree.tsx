import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface Props {
    please: boolean;
}


const QuestianThree: React.FC<Props> = ({ please }): JSX.Element => {

    if (!please)
        return (
            <Text style={styles.questian}>Give me your Email id.</Text>
        )

    return (
        <Text style={styles.questian}>Can you repeat the Email ID, please speak slower.</Text>

    )


}

export default QuestianThree;

const styles = StyleSheet.create({
    questian: {
        fontSize: 30,
        color: "white",
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center"
    }
});

