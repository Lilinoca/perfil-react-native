import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

function App(){
return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 45, marginBottom: 30, fontSize: 25, color: 'blue'}}>Meu Perfil Profissional</Text>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/101848072?v=4'}}
          style={{ width: 100, height: 100}}
        />
        <Text style ={{color: 'blue', fontSize: 15, margin: 15}}>Dados Pessoais</Text>
        <Text>Lina Maria Teixeira, 40 anos, Estudante de Sistemas para Internet na FIAP - graduação em Dezembro de 2023</Text>
        <Text style ={{color: 'blue', fontSize: 15, margin: 15}}>Formação</Text>
        <Text>E-commerce e Modelo de Negócios Digitais - FGV - 2019</Text>
        <Text>Master em International Relations Management - ASERI, Milano - 2009</Text>
        <Text>Bacharel em Relações Internacionais pela FAAP, 2003 a 2007</Text>
        <Text>2o grau no Colégio Mackenzie e na Kimberly High School nos EUA - 1999</Text>      
        <Text style ={{color: 'blue', fontSize: 15, margin: 15}}>Experiência</Text>
        <Text>2020 - 2021: Coordenadora de Customer Success na Cultural Care Au Pair Brasil</Text>
        <Text>2019 - 2020: Supervisora de E-commerce para a Acquamarine Eyewear Brasil</Text>
        <Text>2013 - 2018: Proprietária do Espaço 946 Hostel - Bar em São Paulo, @espaco946</Text>
        <Text>2011: Sales Coordinator at GDS International - Sidney, Australia</Text>
        <Text style ={{color: 'blue', fontSize: 15, margin: 15}}>Projetos / Reconhecimentos Acadêmicos</Text>
        <Text>NEXT - FIAP 2022: projeto IoT voltado para o mercado pet que foi ganhador da competição</Text>
        <Text>Primeiras 3 posições entre os alunos de Sistemas para a Internet da FIAP pelo segundo ano</Text>
      </View>
    </View>
    )
  }


export default App;
