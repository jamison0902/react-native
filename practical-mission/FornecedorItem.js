import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './CommonStyles';

export default function FornecedorItem(props) {
    return (
        <View style={styles.container} id={props.Fornecedor.codigo.toString()}>

            <Image
                style={{
                    width: 60,
                    height: 60,
                    marginBottom: 15,
                }}
                source={require('./assets/alimento.png')}
            />

            <Text style={styles.textItem}>
               Código: {props.Fornecedor.codigo}</Text>

            <Text style={styles.textItem}>
                Fornecedor: {props.Fornecedor.nome}</Text>

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