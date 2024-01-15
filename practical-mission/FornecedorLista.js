import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList }
    from 'react-native';
import GestorDados from './dados/GestorDados';
import FornecedorItem from './FornecedorItem'
import { styles } from './CommonStyles';
import { useIsFocused } from '@react-navigation/native';

export default function FornecedorLista({ navigation }) {
    const gestor = new GestorDados();
    const [Fornecedors, setFornecedors] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        gestor.obterTodos().then(objs => setFornecedors(objs));
    }, [isFocused]);

    const myKeyExtractor = item => {
        return item.codigo.toString();
    };

    function excluirFornecedor(codigo) {
        gestor.remover(codigo).then(
            gestor.obterTodos().then(objs => setFornecedors(objs))
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('NovoForn')}>
                <Text style={styles.buttonTextBig}>Novo Fornecedor</Text>
            </TouchableOpacity>
            <FlatList style={styles.scrollContainer} data={Fornecedors}
                contentContainerStyle={styles.itemsContainer}
                keyExtractor={myKeyExtractor}
                renderItem={({ item }) =>
                    <FornecedorItem
                        onDelete={() => excluirFornecedor(item.codigo)}
                        Fornecedor={item} />
                }
            />
        </View>
    );
}
