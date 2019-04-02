import React from 'react';
import {
    FlatList,
    View,
    Text,
} from 'react-native';

const ejercicio =(props) =>{
    const {datos}= props;
    return(
        <View>
            <Text style={{fontSize: 20, flexDirection: 'row',alignItems: 'center'}}>Lista de Datos</Text>
            <FlatList
            data={datos}
            renderItem={
                ({item})=>{
                    return (
                        <View style={{padding: 10, backgroundColor:'blue'}}>
                            <Text  style={{fontSize: 20 ,backgroundColor:'yellow', fontWeight:"bold"}}>Album de productos</Text>
                            <Text  style={{fontSize: 18,backgroundColor:'white'}}>Accesorios </Text>
                            <Text  style={{fontSize: 18,backgroundColor:'red'}}>Calsados </Text>
                        </View>
                        )  
                    }
                }
           />
        </View>
    )
}
export default ejercicio

       