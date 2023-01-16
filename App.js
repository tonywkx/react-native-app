import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Alert, Image, FlatList, ActivityIndicator, RefreshControl,TouchableOpacity } from 'react-native';
import { Post } from './components/Post';
import { HomeScreen } from './screens/Home';
import { Navigation } from './screens/Navigation';





export default function App() {
  

  return (
    <Navigation/>
  );
}

