import React from 'react';
import { View, Text, Image } from 'react-native';




const App = () => {
  return (
    <View>
      
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: 'data:image/png;base64,' +
            'iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFW' +
            'HRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/' +
            'ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgY' +
            'GBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />

      <Image
        style={{
          width: 50,
          height: 200,
          resizeMode: 'stretch',
        }}
        source={require('./assets/react-native-logo.png')}
      />

    </View>
  );
};

export default App;