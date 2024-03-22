import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface Props {
  please: boolean;
}

const QuestianOne: React.FC<Props> = ({ please }): JSX.Element => {
  if (!please)
    return (
      <Text style={styles.questian}>Hi, Welcome to Giggr.{'\n'}What's your name?</Text>
    )

  return (<Text style={styles.questian}>Please repeat your name!</Text>)
}

export default QuestianOne;

const styles = StyleSheet.create({
  questian: {
    fontSize: 30,
    color: "white",
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center"
  }
});

