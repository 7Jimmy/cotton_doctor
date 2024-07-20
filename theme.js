// theme.js
export const colors = {
    primary: '#4CAF50', // Greenish color
    secondary: '#388E3C',
    background: '#F1F8E9',
    text: '#FFFFFF',
    inputBackground: '#E8F5E9',
    error: '#F44336',
  };
  
  export const commonStyles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: colors.secondary,
      borderWidth: 1,
      backgroundColor: colors.inputBackground,
      marginBottom: 12,
      padding: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: colors.text,
      textAlign: 'center',
    },
    errorText: {
      color: colors.error,
      marginBottom: 12,
    },
  };
  