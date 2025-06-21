import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const CourseStack = createStackNavigator();

// Placeholder screens - we'll build these properly later
function CourseOverviewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Course Overview - 5 Modules</Text>
    </View>
  );
}

function ModuleDetailScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Module Detail - Video + Jane's Content</Text>
    </View>
  );
}

function ReflectionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reflection Screen - Per Module</Text>
    </View>
  );
}

function CertificateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Certificate Screen - Completion</Text>
    </View>
  );
}

export default function CourseNavigator() {
  return (
    <CourseStack.Navigator screenOptions={{ headerShown: false }}>
      <CourseStack.Screen 
        name="CourseOverview" 
        component={CourseOverviewScreen} 
      />
      <CourseStack.Screen 
        name="ModuleDetail" 
        component={ModuleDetailScreen} 
      />
      <CourseStack.Screen 
        name="Reflection" 
        component={ReflectionScreen} 
      />
      <CourseStack.Screen 
        name="Certificate" 
        component={CertificateScreen} 
      />
    </CourseStack.Navigator>
  );
}