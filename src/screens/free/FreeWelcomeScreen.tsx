import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';

interface FreeWelcomeScreenProps {
  navigation: any;
}

export default function FreeWelcomeScreen({ navigation }: FreeWelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primary, Colors.primaryDark]}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.content}>
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.title}>Scout Learning</Text>
            <Text style={styles.subtitle}>
              Discover why your child is struggling academically and what you can do about it
            </Text>
            
            {/* Hero Video */}
            <TouchableOpacity style={styles.videoContainer}>
              <View style={styles.videoPlaceholder}>
                <Text style={styles.playIcon}>▶️</Text>
                <Text style={styles.videoText}>Watch Jane's 2-minute introduction</Text>
                <Text style={styles.videoSubtext}>See how this course helps parents like you</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Immediate Value CTA */}
          <View style={styles.ctaSection}>
            <Text style={styles.ctaTitle}>Start Learning Right Now</Text>
            <Text style={styles.ctaSubtitle}>
              No signup required • Module 1 is completely free
            </Text>
            
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => navigation.navigate('Module1Free')}
            >
              <Text style={styles.startButtonText}>
                Begin Module 1: "Why They're Struggling"
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social Proof */}
          <View style={styles.socialProof}>
            <Text style={styles.proofTitle}>Join 2,000+ parents who've found answers</Text>
            <View style={styles.testimonials}>
              <Text style={styles.testimonial}>
                "Finally understood what was really going on with my son" - Sarah M.
              </Text>
              <Text style={styles.testimonial}>
                "This changed everything for our family" - Mike D.
              </Text>
            </View>
          </View>

          {/* Course Preview */}
          <View style={styles.coursePreview}>
            <Text style={styles.previewTitle}>Complete Course Includes:</Text>
            <Text style={styles.previewItem}>✅ Module 1: Why They're Struggling (FREE NOW)</Text>
            <Text style={styles.previewItem}>• Module 2: What Schools Don't Tell You</Text>
            <Text style={styles.previewItem}>• Module 3: Creating Structure at Home</Text>
            <Text style={styles.previewItem}>• Module 4: Rebuilding Motivation</Text>
            <Text style={styles.previewItem}>• Module 5: Next Steps That Work</Text>
            <Text style={styles.previewItem}>• AI Learning Companion</Text>
          </View>

          {/* Already have account option */}
          <TouchableOpacity
            style={styles.loginOption}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.loginText}>Already have an account? Sign in</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  content: { padding: Spacing.large },
  heroSection: { alignItems: 'center', marginBottom: Spacing.xlarge },
  title: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  subtitle: {
    fontSize: Typography.sizes.medium,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.large,
    lineHeight: 24,
  },
  videoContainer: { width: '100%', marginBottom: Spacing.large },
  videoPlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: Spacing.large,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  playIcon: { fontSize: 48, marginBottom: Spacing.small },
  videoText: {
    fontSize: Typography.sizes.medium,
    color: Colors.surface,
    fontWeight: Typography.weights.bold,
    textAlign: 'center',
    marginBottom: Spacing.xsmall,
  },
  videoSubtext: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    textAlign: 'center',
    opacity: 0.9,
  },
  ctaSection: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.large,
    marginBottom: Spacing.large,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: Typography.sizes.large,
    fontWeight: Typography.weights.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  ctaSubtitle: {
    fontSize: Typography.sizes.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.large,
  },
  startButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    width: '100%',
  },
  startButtonText: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
  },
  socialProof: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  proofTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.medium,
  },
  testimonials: { alignItems: 'center' },
  testimonial: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.small,
    fontStyle: 'italic',
  },
  coursePreview: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  previewTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    marginBottom: Spacing.medium,
    textAlign: 'center',
  },
  previewItem: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    marginBottom: Spacing.xsmall,
    lineHeight: 20,
  },
  loginOption: { marginTop: Spacing.medium },
  loginText: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    textAlign: 'center',
    textDecorationLine: 'underline',
    opacity: 0.8,
  },
});