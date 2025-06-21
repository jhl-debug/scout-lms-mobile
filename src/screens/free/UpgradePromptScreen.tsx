import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';

interface UpgradePromptScreenProps {
  navigation: any;
}

export default function UpgradePromptScreen({ navigation }: UpgradePromptScreenProps) {
  const handleGetFullAccess = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleContinueBrowsing = () => {
    // Go back to welcome screen for now
    navigation.navigate('FreeWelcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primary, Colors.primaryDark]}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.content}>
          {/* Success Message */}
          <View style={styles.successSection}>
            <Text style={styles.successIcon}>🎉</Text>
            <Text style={styles.successTitle}>Great Job!</Text>
            <Text style={styles.successSubtitle}>
              You've completed Module 1 and taken the first step toward helping your child succeed
            </Text>
          </View>

          {/* Value Recap */}
          <View style={styles.valueSection}>
            <Text style={styles.valueTitle}>What You Just Learned:</Text>
            <Text style={styles.valueItem}>✅ The 4 types of academic struggles</Text>
            <Text style={styles.valueItem}>✅ How to identify your child's specific challenges</Text>
            <Text style={styles.valueItem}>✅ Why traditional approaches fall short</Text>
            <Text style={styles.valueItem}>✅ The foundation for real solutions</Text>
          </View>

          {/* Next Steps Preview */}
          <View style={styles.nextStepsSection}>
            <Text style={styles.nextStepsTitle}>Ready for the Next Steps?</Text>
            <Text style={styles.nextStepsSubtitle}>
              Continue your journey with modules 2-5 and get personalized AI guidance
            </Text>

            <View style={styles.modulesList}>
              <Text style={styles.moduleItem}>📚 Module 2: What Schools Don't Tell You</Text>
              <Text style={styles.moduleItem}>🏠 Module 3: Creating Structure at Home</Text>
              <Text style={styles.moduleItem}>💪 Module 4: Rebuilding Motivation & Confidence</Text>
              <Text style={styles.moduleItem}>🎯 Module 5: Next Steps That Actually Work</Text>
              <Text style={styles.moduleItem}>🤖 AI Learning Companion for personalized guidance</Text>
            </View>
          </View>

          {/* Pricing Options */}
          <View style={styles.pricingSection}>
            <Text style={styles.pricingTitle}>Choose Your Learning Path</Text>
            
            {/* Full Course Option */}
            <View style={styles.priceOption}>
              <View style={styles.priceHeader}>
                <Text style={styles.priceTitle}>Complete Course</Text>
                <Text style={styles.priceAmount}>$197</Text>
              </View>
              <Text style={styles.priceDescription}>
                All 5 modules + lifetime access + course materials
              </Text>
            </View>

            {/* Course + AI Option */}
            <View style={[styles.priceOption, styles.recommendedOption]}>
              <View style={styles.recommendedBadge}>
                <Text style={styles.recommendedText}>RECOMMENDED</Text>
              </View>
              <View style={styles.priceHeader}>
                <Text style={styles.priceTitle}>Course + AI Companion</Text>
                <Text style={styles.priceAmount}>$197 + $7.99/mo</Text>
              </View>
              <Text style={styles.priceDescription}>
                Everything above + personalized AI guidance and reflection tools
              </Text>
            </View>
          </View>

          {/* CTA Buttons */}
          <View style={styles.ctaSection}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleGetFullAccess}
            >
              <Text style={styles.primaryButtonText}>
                Get Full Access Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleSignIn}
            >
              <Text style={styles.secondaryButtonText}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social Proof */}
          <View style={styles.socialProofSection}>
            <Text style={styles.socialProofTitle}>Join 2,000+ Parents Getting Results</Text>
            <Text style={styles.testimonial}>
              "After Module 1, I finally understood what was happening. The complete course gave me the tools I needed to help my daughter thrive." - Jennifer K.
            </Text>
          </View>

          {/* Continue Browsing Option */}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinueBrowsing}
          >
            <Text style={styles.continueButtonText}>
              Continue browsing (you can upgrade anytime)
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
    padding: Spacing.large,
  },
  successSection: {
    alignItems: 'center',
    marginBottom: Spacing.xlarge,
  },
  successIcon: {
    fontSize: 64,
    marginBottom: Spacing.medium,
  },
  successTitle: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  successSubtitle: {
    fontSize: Typography.sizes.medium,
    color: Colors.surface,
    textAlign: 'center',
    lineHeight: 24,
  },
  valueSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  valueTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    marginBottom: Spacing.medium,
    textAlign: 'center',
  },
  valueItem: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    marginBottom: Spacing.small,
    lineHeight: 20,
  },
  nextStepsSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  nextStepsTitle: {
    fontSize: Typography.sizes.large,
    fontWeight: Typography.weights.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.small,
  },
  nextStepsSubtitle: {
    fontSize: Typography.sizes.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.large,
    lineHeight: 22,
  },
  modulesList: {
    marginBottom: Spacing.medium,
  },
  moduleItem: {
    fontSize: Typography.sizes.small,
    color: Colors.text,
    marginBottom: Spacing.small,
    lineHeight: 20,
  },
  pricingSection: {
    marginBottom: Spacing.large,
  },
  pricingTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.large,
  },
  priceOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.medium,
    position: 'relative',
  },
  recommendedOption: {
    borderWidth: 2,
    borderColor: Colors.success,
  },
  recommendedBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: Colors.success,
    paddingHorizontal: Spacing.small,
    paddingVertical: 4,
    borderRadius: 12,
  },
  recommendedText: {
    fontSize: Typography.sizes.xsmall,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.small,
  },
  priceTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
  },
  priceAmount: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
  },
  priceDescription: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    opacity: 0.9,
  },
  ctaSection: {
    marginBottom: Spacing.large,
  },
  primaryButton: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    paddingVertical: Spacing.medium,
    marginBottom: Spacing.medium,
  },
  primaryButtonText: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.primary,
    textAlign: 'center',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: Colors.surface,
    borderRadius: 12,
    paddingVertical: Spacing.medium,
  },
  secondaryButtonText: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
  },
  socialProofSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  socialProofTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
    marginBottom: Spacing.medium,
  },
  testimonial: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  continueButton: {
    paddingVertical: Spacing.small,
  },
  continueButtonText: {
    fontSize: Typography.sizes.small,
    color: Colors.surface,
    textAlign: 'center',
    textDecorationLine: 'underline',
    opacity: 0.7,
  },
});