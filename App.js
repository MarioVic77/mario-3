import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>
          Biblioteca Virtual
        </Text>

        <CardLivro
          tituloLivro="Dom Casmurro"
          autor="Machado de Assis"
          ano="1899"
          descricao="Dom Casmurro é um romance escrito por Machado de Assis. A obra narra a história de Bentinho e Capitu, abordando temas como ciúmes, traição e o olhar subjetivo da memória."
          capa="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dom_Casmurro.jpg/500px-Dom_Casmurro.jpg"
        />
        
        <CardLivro
          tituloLivro="O Primo Basílio"
          autor="José de Alencar"
          ano="1852"
          descricao="O Primo Basílio é um romance que denuncia a hipocrisia da sociedade carioca do século XIX. A história gira em torno de um adultério e as consequências desse ato para os envolvidos."
          capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/O_Pritmo_Basileu.jpg/800px-O_Pritmo_Basileu.jpg"
        />
        
        <CardLivro
          tituloLivro="A Moreninha"
          autor="Joaquim Manuel de Macedo"
          ano="1844"
          descricao="A Moreninha é uma obra do romantismo brasileiro, que narra a história de amor entre o estudante de medicina Augusto e a jovem morena, Carolina."
          capa="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/A_Moreninha.jpg/800px-A_Moreninha.jpg"
        />

      </ScrollView>
    );
  }
}

class CardLivro extends Component {
  state = {
    showDescricao: false, 
  };

  toggleDescricao = () => {
    this.setState(prevState => ({
      showDescricao: !prevState.showDescricao
    }));
  };

  render() {
    return (
      <TouchableOpacity style={styles.cardLivro} onPress={this.toggleDescricao}>
        <View style={styles.livroInfo}>
          <Image source={{ uri: this.props.capa }} style={styles.capaLivro} />
          <View style={styles.infoLivro}>
            <Text style={styles.tituloLivro}>{this.props.tituloLivro}</Text>
            <Text style={styles.autor}>{this.props.autor}</Text>
            <Text style={styles.ano}>Ano: {this.props.ano}</Text>
            
            {this.state.showDescricao && (
              <Text style={styles.descricao}>{this.props.descricao}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f8e9",
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titulo: {
    fontFamily: 'Inter_700Bold',
    color: '#2e7d32',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardLivro: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  livroInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  capaLivro: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  infoLivro: {
    flex: 1,
  },
  tituloLivro: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  autor: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    color: '#388e3c',
    paddingBottom: 5,
  },
  ano: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#388e3c',
  },
  descricao: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#2e7d32',
    paddingTop: 5,
  },
});

export default App;