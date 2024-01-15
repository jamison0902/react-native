import AsyncStorage
    from '@react-native-async-storage/async-storage';
import { Fornecedor } from './Fornecedor';

const salvarFornecedor = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) { }
}
const removerFornecedor = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) { }
}
const obterFornecedoresJSON = async () => {
    try {        
        const keys = await AsyncStorage.getAllKeys() as string[];
        return await AsyncStorage.multiGet(keys);
    } catch (e) { return []; }
}
const obterFornecedores = async () => {
    try {
        let objetos = [];
        let objJSON = await obterFornecedoresJSON();
        if (objJSON != null && objJSON.length > 0)
            objJSON.forEach(element => {
                let Fornecedor: Fornecedor = JSON.parse(element[1]);
                objetos.push(Fornecedor);
            });
        return objetos;
    } catch (e) { return []; }
}

class GestorDados {
    public async remover(chave: number) {
        removerFornecedor(chave.toString());
    }
    public async adicionar(Fornecedor: Fornecedor) {
        salvarFornecedor(Fornecedor.codigo.toString(), Fornecedor);
    }
    public async obterTodos(): Promise<Array<Fornecedor>> {
        let lista: Array<Fornecedor> = await obterFornecedores();
        return lista;
    }
}

export default GestorDados;

