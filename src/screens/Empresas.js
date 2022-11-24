import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import CarritoDefecto from '../components/carritoDefecto'
const DATA = [
  {
    id: 'Empresa 1',
    title: '15 de Agosto SA',
    image: require('../assets/logo.png'),
  },
  {
    id: 'Empresa 2',
    title: '24 De Diciembre S.R.L.',
    image: require('../assets/logo.png'),
  },
  {
    id: 'Empresa 3',
    title: '3 de Octubre S.A.',
    image: require('../assets/logo.png'),
  },
  {
    id: 'Empresa 4',
    title: '6 de Diciembre S.A.',
    image: require('../assets/logo.png'),
  },
  {
    id: 'Empresa 5',
    title: 'Alborada Transasil S.A.',
    image: require('../assets/logo.png'),
  },
  {
    id: 'Empresa 6',
    title: 'Alto la Luna S.A',
    image: require('../assets/arrow_back.png'),
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.contenedorCarro}>
      <CarritoDefecto />
    </View>
    
    
  </View>
);

const Headerprueba = () =>{
  return <Text style={styles.tituloheader}>Empresas</Text>
}

const itemSeparador = () =>{
  return <View style={styles.separador}/>
}

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={Headerprueba}
        data={DATA}
        ItemSeparatorComponent = { itemSeparador }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tituloheader:{
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },
  listHeader:{
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separador:{
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  contenedorCarro:{
    width: 50,
    height: 85,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  perfil:{
    height: 20,
    width: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 16,
    marginLeft: 200,
    
    
  },
});

export default App;