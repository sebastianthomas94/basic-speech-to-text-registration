import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Voice from "@react-native-voice/voice";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons"; // Import the microphone icons
import { checkAndPost } from "./utils/checkAndPost";
import { questianSelect } from "./utils/questianSelect";

export default function App(): JSX.Element {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [questianNumber, setQuestianNumber] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [correction, setCorrection] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(() => Voice.removeAllListeners());
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start("en-US");
      setListening(true);
    } catch (error) {
      console.error("Error starting speech recognition:", error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setListening(false);
    } catch (error) {
      console.error("Error stopping speech recognition:", error);
    }
  };

  const onSpeechResults = (event: any) => {
    console.log(event);
    setTranscript(event.value[0]);
  };

  const handlePressIn = () => {
    setTranscript("");
    if (!listening) {
      startListening();
    }
  };

  const handlePressOut = async () => {
    if (listening) {
      stopListening();
    }

    if (transcript) {
      try {
        let res = await checkAndPost(questianNumber, transcript, setFirstName);
        if (!res.success) {
          setCorrection(true);
          return;
        }
        else {
          setCorrection(false);
        }
      } catch (error) {
        console.log("error at fetching:", error)
      }

      setQuestianNumber((prev) => prev + 1);
    }
    setTimeout(() => {
      setTranscript("");
    }, 900)
  };


  return (
    <LinearGradient colors={["#f6ea41", "#f048c6"]} style={styles.container}>
      <View style={styles.card}>
        {questianSelect(questianNumber, firstName, correction)}
      </View>
      {transcript && (
        <View style={styles.card}>
          <Text style={styles.text}>{transcript}</Text>
        </View>
      )}

      {questianNumber <= 4 && <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          {listening ? "Listening.." : "Press and hold to speak"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <FontAwesomeIcon
            icon={listening ? faMicrophone : faMicrophone}
            size={50}
            color={listening ? "purple" : "white"}
          />
        </TouchableOpacity>
      </View>}
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Adjust as needed
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70, // Adjust as needed
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 50, // Make it round
    backgroundColor: "transparent", // Transparent background
    padding: 10,
  },
  text: {
    color: "white",
  },
  buttonText: {
    color: "yellow",
    fontSize: 20,
  },
});
