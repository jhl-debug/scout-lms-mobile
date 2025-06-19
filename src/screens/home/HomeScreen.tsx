// src/screens/home/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';
import { useAuth } from '../../hooks/useAuth';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [pulseAnim] = useState(new Animated.Value(1));
  const { signOut } = useAuth();

  const handleStartRecording = () => {
    setIsRecording(true);
    
    // Start pulsing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Simulate recording for 3 seconds, then stop
    setTimeout(() => {
      handleStopRecording();
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    pulseAnim.stopAnimation();
    pulseAnim.setValue(1);
    
    Alert.alert(
      "Recording Complete", 
      "Thanks for sharing! I'm processing what you told me and will respond shortly.",
      [{ text: "OK" }]
    );
  };

  const handleSignOut = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Sign Out", onPress: () => signOut() }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primary, Colors.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.subtitle}>
              How can I help you today?
            </Text>
            
            <TouchableOpacity 
              style={styles.signOutButton}
              onPress={handleSignOut}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>

          {/* Main Talk to Me Section */}
          <View style={styles.main}>
            <View style={styles.talkToMeContainer}>
              <Text style={styles.mainTitle}>
                Tell me what's going on
              </Text>
              <Text style={styles.mainSubtitle}>
                I'm here to listen and help you support your child
              </Text>

              {/* Big Talk to Me Button */}
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <TouchableOpacity
                  style={[
                    styles.talkButton,
                    isRecording && styles.talkButtonRecording
                  ]}
                  onPress={isRecording ? handleStopRecording : handleStartRecording}
                  activeOpacity={0.8}
                >
                  <Text style={styles.talkButtonIcon}>
                    {isRecording ? '⏹️' : '👩‍🏫✨'}
                  </Text>
                  <Text style={styles.talkButtonText}>
                    {isRecording ? 'I\'m Listening...' : 'Talk to Me'}
                  </Text>
                  <Text style={styles.talkButtonSubtext}>
                    {isRecording ? 'Tap to stop' : 'Tap and speak'}
                  </Text>
                </TouchableOpacity>
              </Animated.View>

              {/* Status Message */}
              {isRecording && (
                <View style={styles.recordingStatus}>
                  <Text style={styles.recordingStatusText}>
                    🎤 Recording... I'm here to listen
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Bottom Navigation Hints */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              No typing. No judgement. Just listening.
            </Text>
            
            <View style={styles.quickActions}>
              <TouchableOpacity style={styles.quickAction}>
                <Text style={styles.quickActionText}>📚 Course</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAction}>
                <Text style={styles.quickActionText}>📊 Progress</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAction}>
                <Text style={styles.quickActionText}>👤 Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: Spacing.lg,
  },
  greeting: {
    fontSize: Typography.sizes.xxlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.sizes.large,
    color: Colors.surface,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  signOutButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: Spacing.sm,
  },
  signOutText: {
    color: Colors.surface,
    fontSize: Typography.sizes.medium,
    opacity: 0.8,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  talkToMeContainer: {
    alignItems: 'center',
    width: '100%',
  },
  mainTitle: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  mainSubtitle: {
    fontSize: Typography.sizes.large,
    color: Colors.surface,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: Spacing.xxl,
    paddingHorizontal: Spacing.md,
  },
  talkButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: Spacing.xxl,
    alignItems: 'center',
    marginBottom: Spacing.lg,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    minWidth: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  talkButtonRecording: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    borderColor: 'rgba(255, 107, 107, 0.5)',
  },
  talkButtonIcon: {
    fontSize: 48,
    marginBottom: Spacing.md,
  },
  talkButtonText: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  talkButtonSubtext: {
    fontSize: Typography.sizes.medium,
    color: Colors.surface,
    opacity: 0.8,
    textAlign: 'center',
  },
  recordingStatus: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    borderRadius: 12,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.3)',
  },
  recordingStatusText: {
    color: Colors.surface,
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.medium,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: Typography.sizes.medium,
    color: Colors.surface,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: Spacing.md,
  },
  quickAction: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.md,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  quickActionText: {
    color: Colors.surface,
    fontSize: Typography.sizes.small,
    fontWeight: Typography.weights.medium,
  },
});