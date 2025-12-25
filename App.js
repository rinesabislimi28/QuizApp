import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// 1. DATA SOURCE: Array of objects containing quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "Which hook handles state in React Native?",
    options: ["useEffect", "useState", "useContext", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the default Flexbox direction?",
    options: ["Row", "Column", "Stretch", "Center"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Which component is like a <div> in React Native?",
    options: ["Text", "Image", "View", "Button"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "What prop is used for button clicks?",
    options: ["onClick", "onPress", "onTap", "onChange"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which tool runs Expo apps on phones?",
    options: ["Expo Go", "Android Studio", "VS Code", "Terminal"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "How do you pass data to child components?",
    options: ["State", "Hooks", "Props", "Global"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Who created React Native?",
    options: ["Google", "Meta", "Apple", "Microsoft"],
    correctAnswer: 1,
  },
];

export default function App() {
  // 2. STATE MANAGEMENT
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const quizFinished = currentIndex >= quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex];

  // 3. HANDLE ANSWER LOGIC
  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  // 4. RESULTS SCREEN (Early Return)
  if (quizFinished) {
    const percentage = (score / quizQuestions.length) * 100;
    const passed = percentage >= 70;

    return (
      <View style={styles.container}>
        <View style={styles.glow1} />
        <View style={styles.glow2} />

        <View style={styles.resultContainer}>
          <Text style={styles.emoji}>{passed ? "🏆" : "🎯"}</Text>
          <Text style={styles.resultTitle}>
            {passed ? "QUIZ COMPLETED" : "TRY AGAIN"}
          </Text>

          <View style={styles.statsCard}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>SCORE</Text>
              <Text style={styles.statValue}>
                {score}/{quizQuestions.length}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>PERCENTAGE</Text>
              <Text style={styles.statValue}>
                {percentage.toFixed(0)}%
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => {
              setCurrentIndex(0);
              setScore(0);
            }}
          >
            <Text style={styles.restartText}>RESTART QUIZ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 5. PROGRESS BAR CALCULATION
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  // 6. QUIZ SCREEN
  return (
    <View style={styles.container}>
      <View style={styles.glow1} />
      <View style={styles.glow2} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.logo}>REACT QUIZ</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.questionCount}>
            QUESTION {currentIndex + 1} OF {quizQuestions.length}
          </Text>

          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </View>
  );
}

// 7. STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
  },
  glow1: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#6366F1",
    opacity: 0.5,
  },
  glow2: {
    position: "absolute",
    bottom: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#FF00E5",
    opacity: 0.4,
  },
  safeArea: {
    width: "90%",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 4,
    marginBottom: 15,
  },
  progressTrack: {
    width: "100%",
    height: 6,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6366F1",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 25,
    padding: 25,
  },
  questionCount: {
    color: "#FF00E5",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "center",
  },
  questionText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 25,
  },
  optionButton: {
    backgroundColor: "rgba(255,255,255,0.05)",
    paddingVertical: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  optionText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  resultContainer: {
    width: "85%",
    alignItems: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  resultTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 30,
  },
  statsCard: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  divider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  statLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 6,
  },
  statValue: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "900",
  },
  restartButton: {
    backgroundColor: "#FF00E5",
    paddingVertical: 18,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
  },
  restartText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "900",
  },
});
