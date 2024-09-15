import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-5">Hello React Native</Text>
      <Icon name="react" size={50} />
    </SafeAreaView>
  );
};

export default App;
