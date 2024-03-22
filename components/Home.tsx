import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface Props {
    name: string;
}

const Home: React.FC<Props> = ({ name }): JSX.Element => {
    return (
        <Text style={styles.questian}>Welcome Home {name}</Text>
    )
}

export default Home;

const styles = StyleSheet.create({
    questian: {
        fontSize: 30,
        color: "white",
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center"
    }
});

