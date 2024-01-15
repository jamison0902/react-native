import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';



export default function App() {
  const [text, setText] = useState('');

  return (

    <View style={{
      marginTop: 60,      
      backgroundColor: 'lightblue',
      color: 'black',
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 5
    }}>
      <TextInput
        style={{ height: 40, backgroundColor: 'white',margin:10 }}
        placeholder="Converta palavra em pizza!!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
}


