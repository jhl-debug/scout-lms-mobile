// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks/useAuth';
import MainNavigator from './MainNavigator';
import Module1FreeNavigator from './Module1FreeNavigator';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../constants/Colors';

const Stack = createStackNavigator();

// Loading screen component
function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Scout Learning</Text>
      <Text style={styles.loadingSubtext}>Loading...</Text>
    </View>
  );
}

export default function AppNavigator() {
  const { user, loading } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // User is signed in, show main app
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          // User is not signed in, show free Module 1 experience
          <Stack.Screen name="FreeExperience" component={Module1FreeNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  loadingText: {
    fontSize: Typography.sizes.xlarge,
    fontWeight: Typography.weights.bold,
    color: Colors.primary,
    marginBottom: 8,
  },
  loadingSubtext: {
    fontSize: Typography.sizes.medium,
    color: Colors.textSecondary,
  },
});