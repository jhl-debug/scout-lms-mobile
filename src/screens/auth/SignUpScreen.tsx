// src/screens/auth/SignUpScreen.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';
import { useAuth } from '../../hooks/useAuth';

interface SignUpScreenProps {
    navigation: any;
}

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [childName, setChildName] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();

    const handleSignUp = async () => {
        if (!email || !password || !confirmPassword || !childName) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        const success = await signUp(email, password, childName);
        setLoading(false);

        if (success) {
            Alert.alert('Success!', 'Welcome to Scout Learning!');
        } else {
            Alert.alert('Error', 'Failed to create account. Please try again.');
        }
        // Navigation happens automatically via auth state change
    };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primary, Colors.primaryDark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Header */}
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.backButtonText}>← Back</Text>
                            </TouchableOpacity>

                            <Text style={styles.title}>Join Scout Learning</Text>
                            <Text style={styles.subtitle}>
                                Start your journey to support your child's success
                            </Text>
                        </View>

                        {/* Form */}
                        <View style={styles.form}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Your Email</Text>
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Enter your email"
                                    placeholderTextColor={Colors.textTertiary}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Your Child's Name</Text>
                                <TextInput
                                    style={styles.input}
                                    value={childName}
                                    onChangeText={setChildName}
                                    placeholder="Enter your child's name"
                                    placeholderTextColor={Colors.textTertiary}
                                    autoCapitalize="words"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Create a password (min 6 characters)"
                                    placeholderTextColor={Colors.textTertiary}
                                    secureTextEntry
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                    style={styles.input}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    placeholder="Confirm your password"
                                    placeholderTextColor={Colors.textTertiary}
                                    secureTextEntry
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* Action Buttons */}
                        <View style={styles.actions}>
                            <TouchableOpacity
                                style={[styles.signUpButton, loading && styles.buttonDisabled]}
                                onPress={handleSignUp}
                                disabled={loading}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.signUpButtonText}>
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.signInPrompt}>
                                <Text style={styles.signInPromptText}>Already have an account? </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                    <Text style={styles.signInLink}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.xl,
        minHeight: '100%',
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        paddingTop: Spacing.lg,
        marginBottom: Spacing.xl,
    },
    backButton: {
        alignSelf: 'flex-start',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
    },
    backButtonText: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        fontWeight: Typography.weights.medium,
    },
    title: {
        fontSize: Typography.sizes.xxlarge,
        fontWeight: Typography.weights.bold,
        color: Colors.surface,
        marginBottom: Spacing.sm,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: Typography.sizes.large,
        color: Colors.surface,
        opacity: 0.9,
        textAlign: 'center',
        lineHeight: 24,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: Spacing.lg,
    },
    inputContainer: {
        marginBottom: Spacing.lg,
    },
    label: {
        fontSize: Typography.sizes.medium,
        fontWeight: Typography.weights.medium,
        color: Colors.surface,
        marginBottom: Spacing.sm,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 12,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
        fontSize: Typography.sizes.medium,
        color: Colors.textPrimary,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    actions: {
        gap: Spacing.lg,
        paddingTop: Spacing.xl,
    },
    signUpButton: {
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
    buttonDisabled: {
        opacity: 0.6,
    },
    signUpButtonText: {
        color: Colors.primary,
        fontSize: Typography.sizes.large,
        fontWeight: Typography.weights.semibold,
    },
    signInPrompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInPromptText: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        opacity: 0.9,
    },
    signInLink: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        fontWeight: Typography.weights.semibold,
        textDecorationLine: 'underline',
    },
});