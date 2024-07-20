import React from 'react';
import MainNavigator from './navigation/AppNavigator';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <MainNavigator />
    </UserProvider>
  );
}
