// src/constants/Colors.ts
export const Colors = {
  // Primary brand colors
  primary: '#4A90E2',      // Trust, stability - your main brand blue
  primaryDark: '#2C5AA0',  // Darker version for pressed states
  primaryLight: '#7BADF5', // Lighter version for backgrounds
  
  // Supportive colors
  success: '#7ED321',      // Growth, hope - for positive feedback
  successLight: '#E8F5E8', // Light success background
  warning: '#F5A623',      // Gentle attention - not alarming
  error: '#D0021B',        // Used sparingly - for real errors only
  
  // Neutral colors
  background: '#FAFAFA',   // Clean, readable main background
  surface: '#FFFFFF',      // Card backgrounds, elevated surfaces
  border: '#E1E1E1',       // Subtle borders and dividers
  
  // Text colors
  text: '#2C2C2E',            // Alias for main text (consistency)
  textPrimary: '#2C2C2E',     // Main text color
  textSecondary: '#8E8E93',   // Secondary text, labels
  textTertiary: '#C7C7CC',    // Placeholder text, disabled states
  
  // Voice feature specific
  voiceActive: '#FF6B6B',     // Recording indicator
  voiceInactive: '#E0E0E0',   // Inactive state
  voiceWave: '#4A90E2',       // Waveform visualization
};

export const Spacing = {
  // New naming convention (used in your screens)
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
  // Original naming (keep for backward compatibility)
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Typography = {
  sizes: {
    xsmall: 12,      // Added missing size
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 24,
    xxlarge: 32,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};