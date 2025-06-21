import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FreeWelcomeScreen from '../screens/free/FreeWelcomeScreen';
import Module1FreeScreen from '../screens/free/Module1FreeScreen';
import UpgradePromptScreen from '../screens/free/UpgradePromptScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SignInScreen from '../screens/auth/SignInScreen';

const FreeStack = createStackNavigator();

export default function Module1FreeNavigator() {
  return (
    <FreeStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Landing page with hero video */}
      <FreeStack.Screen 
        name="FreeWelcome" 
        component={FreeWelcomeScreen} 
      />
      
      {/* Free Module 1 content */}
      <FreeStack.Screen 
        name="Module1Free" 
        component={Module1FreeScreen} 
      />
      
      {/* Upgrade prompt after Module 1 */}
      <FreeStack.Screen 
        name="UpgradePrompt" 
        component={UpgradePromptScreen} 
      />
      
      {/* Auth screens (only when user decides to upgrade) */}
      <FreeStack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
      />
      
      <FreeStack.Screen 
        name="SignIn" 
        component={SignInScreen} 
      />
    </FreeStack.Navigator>
  );
}