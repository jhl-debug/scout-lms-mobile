// src/navigation/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import { Colors, Typography } from '../constants/Colors';
import { MainTabParamList } from '../types';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Placeholder screens for now
function CourseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Course Screen - Coming Soon</Text>
    </View>
  );
}

function ProgressScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Progress Screen - Coming Soon</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen - Coming Soon</Text>
    </View>
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: Typography.sizes.small,
          fontWeight: Typography.weights.medium,
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'AI Coach',
          tabBarIcon: ({ focused }) => (
            <Text Style={{ fontSize: 20 }}>
              {focused ? '🤖' : '🤖'}
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Course" 
        component={CourseScreen}
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              {focused ? '📚' : '📖'}
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Progress" 
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              {focused ? '📊' : '📈'}
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: 20 }}>
              {focused ? '👤' : '👥'}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}