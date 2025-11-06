import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const quizQuestions = [
  {
    id: 1,
    question: "Pytja 1",
    options: [
      "opsioni 1",
      "opsioni 2",
      "opsioni 3",
      "opsioni 4"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Pytja 2",
    options: [
      "opsioni 1",
      "opsioni 2",
      "opsioni 3",
      "opsioni 4"
    ],
    correctAnswer: 0
  }
]

export default function App() {

  const [currectQuestion, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const question = quizQuestions[currectQuestion];
  console.log(question, question);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Quiz App
      </Text>
      <Text>
        Question {(currectQuestion + 1)} of {quizQuestions.length}
      </Text>

      <Text style={styles.questionText}>
        {question.question}
      </Text>

      <Text>
        {question.options.map((option, index) => {
            return(option)
        })}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#604402ff'
  },
  progress: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f83',
    marginBottom: 20
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  questionText: {
    fontSize: 20,
    color: '#2c3452',
    lineHeight: 28
  }
});
