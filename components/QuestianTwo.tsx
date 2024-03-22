import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface QuestianTwoProps {
    name: string;
    please: boolean;
}

const QuestianTwo: React.FC<QuestianTwoProps> = ({ name, please }): JSX.Element => {
    if (!please)
        return (
            <Text style={styles.questian}>Hi {name},{'\n'}What is your date of birth?</Text>
        )
    return (
        <Text style={styles.questian}>Sorry, can you repeat date of birth please?</Text>

    )
}

export default QuestianTwo;

const styles = StyleSheet.create({
    questian: {
        fontSize: 30,
        color: "white",
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center"
    }
});

