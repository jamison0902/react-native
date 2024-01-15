import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './CommonStyles';

export default function FornecedorItem(props) {
    return (
        <View style={styles.container} id={props.Fornecedor.codigo.toString()}>
            <Text style={styles.textItem}>
                {props.Fornecedor.codigo} - {props.Fornecedor.nome}</Text>

            <Text style={styles.textItem}>
                Endereço: {props.Fornecedor.endereco}</Text>

            <Text style={styles.textItem}>
                Contato: {props.Fornecedor.contato}</Text>

            <Text style={styles.textItem}>
                Categoria: {props.Fornecedor.categoria}</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton}
                    onPress={props.onDelete}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}