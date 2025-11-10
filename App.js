import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const quizQuestions = [
  {
    id: 1,
    question: "1. What is React Native?",
    options: [
      "a. JavaScript library",
      "b. Javascript framework",
      "c. Programming language",
      "d. Neither of the above"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "2. Components work on: ",
    options: [
      "a. IOS platform",
      "b. Android platform",
      "c. Both IOS & Android",
      "d. Neither of the above"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "3. What are props?",
    options: [
      "a. Dynamic rendering",
      "b. Passing data between components",
      "c. Importing components",
      "d. Neither of the above"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "2. React Native is used for: ",
    options: [
      "a. Web apps",
      "b. Mobile apps",
      "c. Desktop software",
      "d. None of the above"
    ],
    correctAnswer: 1
  }
]

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === question.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  }

  if (currentQuestion >= quizQuestions.length) {
    const percentage = (score * 100) / quizQuestions.length;
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Test Complete 🎉</Text>
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.scoreText}>{score}/{quizQuestions.length}</Text>
          <Text style={styles.percentageText}>{percentage.toFixed(0)}%</Text>
        </View>
        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartText}>Restart</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <Text>Question {(currentQuestion + 1)} of {quizQuestions.length}</Text>

      <Text style={styles.questionText}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efebe9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
    color: '#604402ff',
  },
  questionText: {
    fontSize: 22,
    color: '#6d4c41',
    lineHeight: 30,
    marginVertical: 20,
    textAlign: 'center'
  },
  optionButton: {
    backgroundColor: '#d7ccc8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    width: 260,
    shadowColor: '#8d6e63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4
  },
  optionText: {
    color: '#3e2723',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600'
  },
  optionsContainer: {
    marginBottom: 15
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8d6e63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5
  },
  resultBox: {
    backgroundColor: '#e0d4cb',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#8d6e63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4
  },
  resultLabel: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5d4037',
    marginBottom: 12
  },
  scoreText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#8d6e63',
    marginBottom: 10
  },
  percentageText: {
    fontSize: 20,
    color: '#a1887f',
    fontWeight: '600'
  },
  restartButton: {
    backgroundColor: '#d7ccc8',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#8d6e63',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4
  },
  restartText: {
    color: '#3e2723',
    fontSize: 18,
    fontWeight: '700'
  }
});
