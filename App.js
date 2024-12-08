import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FornecedorForm from './FornecedorForm';
import FornecedorLista from './FornecedorLista'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaProd'>
        <Stack.Screen name='ListaForn'
          options={{ title: 'Listagem de Fornecedores' }}
          component={FornecedorLista} />
        <Stack.Screen name='NovoForn'
          options={{ title: 'Novo Fornecedor' }}
          component={FornecedorForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
