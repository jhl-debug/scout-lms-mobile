// src/screens/auth/WelcomeScreen.tsx
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';

const { width, height } = Dimensions.get('window');

interface WelcomeScreenProps {
    navigation: any; // We'll type this properly later
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primary, Colors.primaryDark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.content}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <Text style={styles.logo}>Scout Learning</Text>
                        <Text style={styles.tagline}>
                            Empowering Parents, One Module at a Time
                        </Text>
                    </View>

                    {/* Main Content */}
                    <View style={styles.main}>
                        <Text style={styles.title}>
                            Help Your Child Thrive in School!
                        </Text>
                        <Text style={styles.description}>
                            Get the clarity, confidence, and tools you need to support your child's learning journey.
                        </Text>

                        {/* Voice Feature Highlight */}
                        <View style={styles.featureBox}>
                            <Text style={styles.featureIcon}>👩🏼‍🏫✨</Text>
                            <Text style={styles.featureText}>
                                "Talk to me... what's going on?"
                            </Text>
                            <Text style={styles.featureSubtext}>
                                No typing.{'\n'}No judgement.{'\n'}Just listening.
                            </Text>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => navigation.navigate('SignUp')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.primaryButtonText}>Get Started</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.secondaryButton}
                            onPress={() => navigation.navigate('SignIn')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.secondaryButtonText}>Sign In</Text>
                        </TouchableOpacity>
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
        paddingTop: Spacing.xl,
    },
    logo: {
        fontSize: Typography.sizes.xxlarge,
        fontWeight: Typography.weights.bold,
        color: Colors.surface,
        marginBottom: Spacing.sm,
    },
    tagline: {
        fontSize: Typography.sizes.medium,
        color: Colors.surface,
        opacity: 0.9,
        textAlign: 'center',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Spacing.xl,
    },
    title: {
        fontSize: Typography.sizes.xlarge,
        fontWeight: Typography.weights.bold,
        color: Colors.surface,
        textAlign: 'center',
        marginBottom: Spacing.md,
        lineHeight: 32,
    },
    description: {
        fontSize: Typography.sizes.large,
        color: Colors.surface,
        textAlign: 'center',
        opacity: 0.9,
        lineHeight: 24,
        marginBottom: Spacing.xl,
        paddingHorizontal: Spacing.md,
    },
    featureBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 16,
        padding: Spacing.lg,
        alignItems: 'center',
        marginTop: Spacing.lg,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    featureIcon: {
        fontSize: 32,
        marginBottom: Spacing.sm,
    },
    featureText: {
        fontSize: Typography.sizes.large,
        fontWeight: Typography.weights.semibold,
        color: Colors.surface,
        textAlign: 'center',
        marginBottom: Spacing.xs,
    },
    featureSubtext: {
        fontSize: Typography.sizes.medium,
        color: Colors.surface,
        opacity: 0.8,
        textAlign: 'center',
    },
    actions: {
        gap: Spacing.md,
    },
    primaryButton: {
        backgroundColor: Colors.surface,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    primaryButtonText: {
        color: Colors.primary,
        fontSize: Typography.sizes.large,
        fontWeight: Typography.weights.semibold,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xl,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.surface,
    },
    secondaryButtonText: {
        color: Colors.surface,
        fontSize: Typography.sizes.large,
        fontWeight: Typography.weights.medium,
    },
});