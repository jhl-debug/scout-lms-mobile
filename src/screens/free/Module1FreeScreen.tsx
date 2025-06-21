import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography } from '../../constants/Colors';

interface Module1FreeScreenProps {
  navigation: any;
}

export default function Module1FreeScreen({ navigation }: Module1FreeScreenProps) {
  const handleModuleComplete = () => {
    // Show upgrade prompt after completing free module
    navigation.navigate('UpgradePrompt');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Module 1 - FREE</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Why They're Struggling</Text>
        <Text style={styles.subtitle}>
          Understanding the root causes of academic challenges
        </Text>

        {/* Video Placeholder */}
        <View style={styles.videoContainer}>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.videoIcon}>▶️</Text>
            <Text style={styles.videoLabel}>Jane's Module 1 Video (15 min)</Text>
            <Text style={styles.videoDescription}>
              The 4 types of academic struggles and how to identify them
            </Text>
          </View>
        </View>

        {/* Module Content */}
        <View style={styles.moduleContent}>
          <Text style={styles.contentTitle}>In this module, you'll discover:</Text>
          <Text style={styles.contentItem}>• The 4 main types of academic struggles</Text>
          <Text style={styles.contentItem}>• How to identify which type affects your child</Text>
          <Text style={styles.contentItem}>• Why traditional approaches often fail</Text>
          <Text style={styles.contentItem}>• The first steps toward real solutions</Text>
          <Text style={styles.contentItem}>• Red flags to watch for at school</Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressSection}>
          <Text style={styles.progressTitle}>Your Progress</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>Module 1 of 5 • Free Preview</Text>
        </View>

        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleModuleComplete}
        >
          <Text style={styles.completeButtonText}>
            Complete Module & See Next Steps
          </Text>
        </TouchableOpacity>

        <View style={styles.freeNotice}>
          <Text style={styles.freeNoticeText}>
            🎁 This module is completely free. No credit card required.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  backButton: {
    marginRight: Spacing.medium,
  },
  backButtonText: {
    fontSize: Typography.sizes.medium,
    color: Colors.primary,
  },
  headerTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.success,
  },
  content: {
    flex: 1,
    padding: Spacing.large,
  },
  title: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.text,
    marginBottom: Spacing.small,
  },
  subtitle: {
    fontSize: Typography.sizes.medium,
    color: Colors.textSecondary,
    marginBottom: Spacing.large,
    lineHeight: 24,
  },
  videoContainer: {
    marginBottom: Spacing.large,
  },
  videoPlaceholder: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: Spacing.xlarge,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
  },
  videoIcon: {
    fontSize: 48,
    marginBottom: Spacing.small,
  },
  videoLabel: {
    fontSize: Typography.sizes.medium,
    color: Colors.text,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xsmall,
  },
  videoDescription: {
    fontSize: Typography.sizes.small,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  moduleContent: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
  },
  contentTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.text,
    marginBottom: Spacing.medium,
  },
  contentItem: {
    fontSize: Typography.sizes.medium,
    color: Colors.text,
    marginBottom: Spacing.small,
    lineHeight: 22,
  },
  progressSection: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: Spacing.large,
    marginBottom: Spacing.large,
    alignItems: 'center',
  },
  progressTitle: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.text,
    marginBottom: Spacing.medium,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: Colors.border,
    borderRadius: 4,
    marginBottom: Spacing.small,
  },
  progressFill: {
    width: '20%', // 1 of 5 modules
    height: '100%',
    backgroundColor: Colors.success,
    borderRadius: 4,
  },
  progressText: {
    fontSize: Typography.sizes.small,
    color: Colors.textSecondary,
  },
  completeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: Spacing.medium,
    marginBottom: Spacing.large,
  },
  completeButtonText: {
    fontSize: Typography.sizes.medium,
    fontWeight: Typography.weights.bold,
    color: Colors.surface,
    textAlign: 'center',
  },
  freeNotice: {
    backgroundColor: Colors.successLight,
    borderRadius: 12,
    padding: Spacing.medium,
    marginBottom: Spacing.large,
  },
  freeNoticeText: {
    fontSize: Typography.sizes.small,
    color: Colors.success,
    textAlign: 'center',
    fontWeight: Typography.weights.medium,
  },
});