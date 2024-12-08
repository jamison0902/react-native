import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity }
    from 'react-native';
import { Fornecedor } from './dados/Fornecedor';
import GestorDados from './dados/GestorDados';
import { styles } from './CommonStyles';

export default function FornecedorForm({ navigation }) {
    const gestor = new GestorDados();
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categoria, setCategoria] = useState('');
    const salvar = () => {
        prodAux =
            new Fornecedor(parseInt(codigo), nome, endereco, contato, categoria);
        gestor.adicionar(prodAux).then(
            navigation.navigate('ListaForn'));
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Codigo'
                keyboardType={'numeric'} value={codigo}
                onChangeText={setCodigo} />

            <TextInput style={styles.input} placeholder='Nome'
                value={nome} onChangeText={setNome} />

            <TextInput style={styles.input} placeholder='Endereço'
                value={endereco} onChangeText={setEndereco} />

            <TextInput style={styles.input} placeholder='Contato'
                value={contato} onChangeText={setContato} />

            <TextInput style={styles.input} placeholder='Categoria'
                value={categoria} onChangeText={setCategoria} />

            <TouchableOpacity style={styles.button} onPress={salvar}>
                <Text style={styles.buttonTextBig}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
