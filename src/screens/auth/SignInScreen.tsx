// src/screens/auth/SignInScreen.tsx
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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, Typography } from '../../constants/Colors';
import { useAuth } from '../../hooks/useAuth';

interface SignInScreenProps {
    navigation: any;
}

export default function SignInScreen({ navigation }: SignInScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        const success = await signIn(email, password);
        setLoading(false);

        if (!success) {
            Alert.alert('Error', 'Invalid email or password');
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
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backButtonText}>← Back</Text>
                        </TouchableOpacity>

                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>
                            Sign in to continue your journey
                        </Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
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
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter your password"
                                placeholderTextColor={Colors.textTertiary}
                                secureTextEntry
                                autoCapitalize="none"
                            />
                        </View>

                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.signInButton, loading && styles.buttonDisabled]}
                            onPress={handleSignIn}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.signInButtonText}>
                                {loading ? 'Signing In...' : 'Sign In'}
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.signUpPrompt}>
                            <Text style={styles.signUpPromptText}>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signUpLink}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.xl,
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        paddingTop: Spacing.lg,
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
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: Spacing.xl,
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
    forgotPassword: {
        alignSelf: 'flex-end',
        paddingVertical: Spacing.sm,
    },
    forgotPasswordText: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        opacity: 0.8,
    },
    actions: {
        gap: Spacing.lg,
    },
    signInButton: {
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
    signInButtonText: {
        color: Colors.primary,
        fontSize: Typography.sizes.large,
        fontWeight: Typography.weights.semibold,
    },
    signUpPrompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpPromptText: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        opacity: 0.9,
    },
    signUpLink: {
        color: Colors.surface,
        fontSize: Typography.sizes.medium,
        fontWeight: Typography.weights.semibold,
        textDecorationLine: 'underline',
    },
});