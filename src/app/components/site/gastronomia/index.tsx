'use client';

import React, { useState } from 'react';

const CATEGORIAS = {
  bares: {
    label: 'Bares',
    emoji: '🍺',
    cor: '#0044CA',
    items: [
      { nome: 'Bar da Galinha', endereco: 'Av. Bernardo V. de Melo, 6355 - Candeias', telefone: '81996487176', sites: ['https://www.instagram.com/bardagalinha.oficial'] },
      { nome: 'Bar do Zezinho', endereco: 'Rua Professor Sílvio Rabelo, 852 - Candeias', telefone: '', sites: ['https://www.instagram.com/bardozezinhooficial/'] },
      { nome: 'Bar sem Nome', endereco: 'Av. Pres. Castelo Branco, 1040 - Candeias', telefone: '81995533709', sites: ['https://www.instagram.com/restauranteebarsemnome/'] },
      { nome: "Beto's Bar", endereco: 'Av. Bernardo Vieira de Melo, 4738 - Candeias', telefone: '8134692995', sites: ['https://www.instagram.com/betosbaroficial'] },
      { nome: 'Boteco da Pequena', endereco: 'R. Agrestina, 5318 - Candeias', telefone: '81998245245', sites: ['https://www.instagram.com/_botecodapequena'] },
      { nome: 'Boteco da Praia', endereco: 'Av. Beira Mar, 6058 - Candeias', telefone: '81985325664', sites: ['https://www.instagram.com/botecodapraiacandeias/'] },
      { nome: 'Boteco do Carnaíba', endereco: 'R. Seis, 10 - Barra de Jangada', telefone: '81982328975', sites: ['https://www.instagram.com/botecodocarnaibaoficial/'] },
      { nome: 'Boteco do Jura', endereco: 'Av. Bernardo Vieira de Melo, 690', telefone: '81991603986', sites: [] },
      { nome: 'Butecaria Praia', endereco: 'Av. Bernardo Vieira de Melo, 4893', telefone: '81994380572', sites: ['https://www.instagram.com/butecariapraia'] },
      { nome: 'Caricatura do Chicão', endereco: 'R. Antônio Carlos de Oliveira, 151 - Candeias', telefone: '8132034160', sites: ['https://www.instagram.com/caricaturabar'] },
      { nome: 'Casa de Deia', endereco: 'R. José Nunes da Cunha, 4853 - Candeias', telefone: '81991441811', sites: [] },
      { nome: 'Casa de Mainha Comedoria', endereco: 'R. Comendador Sá Barreto, 5462 - Candeias', telefone: '81998075920', sites: ['https://www.instagram.com/casademainhacomedoria/'] },
      { nome: "D'Bob Bar e Restaurante", endereco: 'Rua Agrestina, 5318 - Candeias', telefone: '8130930059', sites: ['https://www.instagram.com/dbobbar/'] },
      { nome: 'Esquina do Bode', endereco: 'Joaquim Marques de Jesus', telefone: '8133013307', sites: ['https://www.instagram.com/esquinadobode'] },
      { nome: 'Fruta Pão Bar', endereco: 'Av. Bernardo Vieira de Melo, 4855 - Candeias', telefone: '8131293116', sites: ['https://www.instagram.com/frutapaocomedoria'] },
      { nome: 'Meu Bar', endereco: 'Av. Bernardo Vieira de Melo, 4981 - Candeias', telefone: '81996260408', sites: ['https://meubarcandeias.com.br', 'https://www.instagram.com/meubarcandeias'] },
      { nome: 'Paraíso da Orla', endereco: 'R. Vitória-Régia - Barra de Jangada', telefone: '81998598474', sites: ['https://www.instagram.com/paraisodaorla'] },
      { nome: "Pedrito's Bar", endereco: 'Av. Pres. Castelo Branco - Candeias', telefone: '8134697099', sites: ['https://www.instagram.com/barpedritos'] },
      { nome: 'Seu Berna', endereco: 'Av. Bernardo Vieira de Melo, 1350 - Candeias', telefone: '81992355761', sites: ['https://www.instagram.com/seubernacandeias/'] },
      { nome: 'Seu Holanda', endereco: 'Av. Bernardo Vieira de Melo, 6015 - Candeias', telefone: '81999241913', sites: ['https://www.instagram.com/seuholanda/'] },
      { nome: 'Skina 178', endereco: 'R. Santa Lúcia, 178 - Candeias', telefone: '81996384909', sites: ['https://www.instagram.com/skina178'] },
      { nome: 'Supbar', endereco: 'R. Antônio Carlos de Oliveira, 5666 - Candeias', telefone: '81997264932', sites: ['https://www.instagram.com/supbarcandeias'] },
    ]
  },
  restaurantes: {
    label: 'Restaurantes',
    emoji: '🍽️',
    cor: '#00751D',
    items: [
      { nome: 'Armazém Central', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81991226665', sites: ['https://www.instagram.com/armazemcentral'] },
      { nome: 'Bem Natural', endereco: 'Rua Antônio Carlos de Oliveira, 5442', telefone: '8132039687', sites: [] },
      { nome: 'Bode do Nô', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '8134288889', sites: ['https://www.instagram.com/bodedono/'] },
      { nome: 'Café Gastrobar', endereco: 'Rua Santo Amaro, 97 - Vista Alegre', telefone: '81997471275', sites: ['https://www.instagram.com/casarosariocolab/'] },
      { nome: 'Caipira Grill', endereco: 'Av. Armindo Moura, 460', telefone: '81988702198', sites: [] },
      { nome: 'Camarão & Cia', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81987823132', sites: ['https://www.instagram.com/restaurantecamaraoeciaoficial'] },
      { nome: 'Capilé', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: ['https://www.instagram.com/rest_capileguararapes/'] },
      { nome: 'Casa do Pará', endereco: 'R. Maestro Nelson Ferreira, 242 - Piedade', telefone: '8130942838', sites: ['https://casadopara.com.br/casa-do-para/piedade', 'https://www.instagram.com/casadopara'] },
      { nome: 'China Dragon', endereco: 'R. Maestro Nelson Ferreira, 120 - Piedade', telefone: '8134682747', sites: ['https://www.instagram.com/chinadragon'] },
      { nome: 'Cordel do Capi', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81981769033', sites: [] },
      { nome: 'Cozinha da Rose', endereco: 'Av. Bernardo Vieira de Melo, 6098', telefone: '81987953662', sites: ['https://www.instagram.com/cozinhadarose'] },
      { nome: 'Divino Fogão', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81997760562', sites: ['https://www.instagram.com/divino_fogao/'] },
      { nome: 'Dom Spettus Steakhouse', endereco: 'Av. Barão de Lucena, 178 - Centro', telefone: '81993884953', sites: ['http://www.domspettus.com.br/', 'https://www.instagram.com/domspettusbrasil'] },
      { nome: 'Don Phellipe', endereco: 'R. Antônio Ferreira Campos, 5024 - Candeias', telefone: '81989833000', sites: [] },
      { nome: 'Du Maranhão', endereco: 'Av. Bernardo Vieira de Melo, 4993 - Candeias', telefone: '81979035679', sites: ['https://www.instagram.com/dumaranhao'] },
      { nome: 'Empório Prime - Candeias', endereco: 'Av. Bernardo Vieira de Melo, 6350 - Candeias', telefone: '81985021590', sites: ['https://www.instagram.com/emporioprimecandeias'] },
      { nome: 'Empório Prime - Piedade', endereco: 'Av. Ayrton Senna da Silva, 190 - Piedade', telefone: '81991804615', sites: ['https://www.instagram.com/restauranteemporioprime'] },
      { nome: 'Feijoada do Bezerra', endereco: 'Av. Ayrton Senna da Silva, 171A - Piedade', telefone: '8132039383', sites: ['https://www.instagram.com/feijoadadobezerra'] },
      { nome: 'Iang Chao', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: ['https://www.instagram.com/iangchaooficial'] },
      { nome: 'Jolu Sushi', endereco: 'Av. Bernardo Vieira de Melo, 4257 - Candeias', telefone: '', sites: ['https://www.instagram.com/jolusushi/'] },
      { nome: 'Julietto', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81982624037', sites: ['https://www.instagram.com/grupojulietto'] },
      { nome: 'Katana Cozinha Oriental', endereco: 'Av. Bernardo Vieira de Melo, 5293', telefone: '81996897596', sites: ['https://www.instagram.com/katana_sushi'] },
      { nome: 'Lemar Comedoria - The Garden', endereco: 'The Garden Open Mall - Av. Bernardo Vieira de Melo, 209 - Piedade', telefone: '81986142275', sites: ['https://www.instagram.com/lemarcomedoria/'] },
      { nome: 'Marina Porto do Sol', endereco: 'Rua Marmelo, 25 - Barra de Jangada', telefone: '81999711064', sites: ['https://www.instagram.com/marinaportodosoloficial'] },
      { nome: 'Massa de Forno', endereco: 'Av. Pres. Castelo Branco, 1900', telefone: '81995330162', sites: ['https://www.instagram.com/massadefornope'] },
      { nome: 'Mottainai Sushi', endereco: 'Av. Bernardo Vieira de Melo, 5269 - Candeias', telefone: '', sites: ['https://www.instagram.com/mottainai_temakeria/'] },
      { nome: 'No meu Quintal', endereco: 'Rua Miguel Roman Abreu e Lima, 59', telefone: '81995668358', sites: ['https://www.instagram.com/nomeuquintalcb'] },
      { nome: 'Nordestino Grill', endereco: 'Av. Bernardo Vieira de Melo, 4105', telefone: '8132037498', sites: ['https://www.instagram.com/nordestinogrill'] },
      { nome: 'Pacífico Sea Food', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81992689225', sites: ['https://www.instagram.com/pacificoguararapes'] },
      { nome: 'Píer 112', endereco: 'R. Soure, 196a - Paiva', telefone: '81988688877', sites: ['https://www.instagram.com/pier112bar/'] },
      { nome: 'Planetário', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: [] },
      { nome: 'Point do Acarajé', endereco: 'Av. Pres. Castelo Branco, 5738', telefone: '81996546160', sites: ['https://www.instagram.com/pointdoacarajepe'] },
      { nome: 'Quintal Gaúcho Comedoria', endereco: 'R. José Nunes da Cunha, 4592 - Candeias', telefone: '81994419303', sites: ['https://www.instagram.com/quintalgauchocomedoria'] },
      { nome: 'Recanto Prime', endereco: 'PE-007, 03 - Vista Alegre', telefone: '81986251007', sites: ['https://www.instagram.com/recanto.prime'] },
      { nome: 'Red Bake', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: [] },
      { nome: 'Restaurante e Bar Sonho Meu', endereco: 'Estrada da Batalha, 1501', telefone: '8133412047', sites: ['https://www.instagram.com/barerestaurantesonhomeu'] },
      { nome: 'Restaurante Píer 112', endereco: 'Rua Soure, 112', telefone: '', sites: [] },
      { nome: 'Rota do Mar', endereco: 'R. José de Souza Marmelo, 112 - Barra de Jangada', telefone: '81984238337', sites: ['https://www.instagram.com/restauranterotadomar'] },
      { nome: 'Sabor e Afeto', endereco: 'Av. Bernardo Vieira de Melo, 3118 - Piedade', telefone: '', sites: ['https://www.instagram.com/comsaboreafeto_/'] },
      { nome: 'Sakura Cozinha Japonesa', endereco: 'Rua Aurora Diniz Carneiro Leão, 5378', telefone: '81995419103', sites: ['https://www.instagram.com/sakuracozinhajaponesa/'] },
      { nome: 'Sal e Brasa', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '8132039630', sites: [] },
      { nome: 'Seu Gaúcho Praia', endereco: 'Av. Bernardo Vieira de Melo, 4538 - Candeias', telefone: '81998716490', sites: ['https://www.instagram.com/seugauchopraia'] },
      { nome: 'Tay San', endereco: 'Av. Bernardo Vieira de Melo, 1514 - Piedade', telefone: '8132039336', sites: ['http://www.taysan.com.br/'] },
      { nome: 'Villagio', endereco: 'Av. Bernardo Vieira de Melo, 1701 - Piedade', telefone: '8130962249', sites: [] },
      { nome: 'VK Restaurante', endereco: 'Av. Bernardo Vieira de Melo, 1730 - Piedade', telefone: '81998069998', sites: ['https://www.instagram.com/vkrestaurante/'] },
      { nome: 'Yan Ping', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81988588899', sites: ['https://www.instagram.com/yanpingrestaurante'] },
      { nome: 'Zen Comida Japonesa', endereco: 'R. Osório Borba, 167 - Piedade', telefone: '8130945028', sites: ['http://www.zencomidajaponesa.com.br/'] },
    ]
  },
  churrascarias: {
    label: 'Churrascarias',
    emoji: '🥩',
    cor: '#C0392B',
    items: [
      { nome: 'Boi e Brasa', endereco: 'Av. Beira Mar, 630', telefone: '8130800400', sites: ['https://www.boiebrasa.com.br/', 'https://www.instagram.com/boiebrasacandeias/'] },
      { nome: 'Churrascaria Boa Parada Grill', endereco: 'Av. Dr. Júlio Maranhão, 400-462 - Prazeres', telefone: '81986613167', sites: [] },
      { nome: 'Leitão - Cavaleiro', endereco: 'Av. Gen. Manoel Rabelo, 5000 - Sucupira', telefone: '8120118340', sites: ['https://www.instagram.com/leitaocavaleiro'] },
      { nome: 'Leitão - Prazeres', endereco: 'Rodovia BR 101 Sul, Km 82,7 - Prazeres', telefone: '', sites: [] },
      { nome: 'O Churrascão', endereco: 'Av. Gen. Manoel Rabelo, 4602 - Sucupira', telefone: '8132544557', sites: ['https://www.instagram.com/ochurrascao'] },
      { nome: 'Picanha do Márcio', endereco: 'R. Eng. Antônio Jucá, 174 - Piedade', telefone: '8132037940', sites: [] },
      { nome: 'Ponto da Carne Churrascaria', endereco: 'R. Arão Lins de Andrade, 674 - Prazeres', telefone: '8133763783', sites: [] },
      { nome: 'Ponto Gaúcho', endereco: 'Estrada da Batalha, 224', telefone: '8137719532', sites: ['https://www.instagram.com/.pontogaucho'] },
      { nome: 'Recanto Gaúcho', endereco: 'Av. Ulisses Montarroyos, 5755 - Candeias', telefone: '8134692106', sites: [] },
      { nome: 'Seu Gaúcho Churrascaria', endereco: 'R. Arão Lins de Andrade, 690 - Prazeres', telefone: '81981103527', sites: [] },
    ]
  },
  pizzarias: {
    label: 'Pizzarias',
    emoji: '🍕',
    cor: '#E67E22',
    items: [
      { nome: 'Dom Medieval', endereco: 'R. Visc. do Rio Branco, 474 - Centro', telefone: '81993231748', sites: ['https://www.instagram.com/dommedieval'] },
      { nome: 'La Taberna Italiana', endereco: 'Av. Bernardo Vieira de Melo, 1226 - Piedade', telefone: '81981817191', sites: ['https://www.instagram.com/latabernaitaliana'] },
      { nome: 'La Terrazza Forneria', endereco: 'Galeria Shopping Village - Av. Bernardo Vieira de Melo, 3310 - Piedade', telefone: '', sites: [] },
      { nome: 'Massa Demais', endereco: 'Av. Bernardo Vieira de Melo, 1100 - Piedade', telefone: '81981111100', sites: [] },
      { nome: 'Nobres Pizzaria', endereco: 'R. São Paulo, 15 - Massangana', telefone: '81987686650', sites: ['https://www.instagram.com/nobrespizzaria/'] },
      { nome: 'Pede Pizza', endereco: 'Av. Bernardo Vieira de Melo, 5269 - Candeias', telefone: '81986580073', sites: ['https://www.instagram.com/pedepizzas/'] },
      { nome: 'Pizza Hut - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81981500398', sites: ['https://www.instagram.com/pizzahut.pe'] },
      { nome: 'Pizzaria Atlântico', endereco: 'Av. Ayrton Senna da Silva, 777 - Piedade', telefone: '81981953433', sites: ['https://www.pizzariaatlantico.com.br'] },
      { nome: "Pizzaria Nicola's", endereco: 'Av. Ayrton Senna da Silva, 462 - Piedade', telefone: '8133611514', sites: [] },
      { nome: 'Pizzaria Siciliana', endereco: 'Av. Bernardo Vieira de Melo, 1250 - Piedade', telefone: '8133630904', sites: [] },
    ]
  },
  lanchonetes: {
    label: 'Lanchonetes',
    emoji: '🍔',
    cor: '#D4A017',
    items: [
      { nome: "Bob's - Shopping Guararapes", endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81996211011', sites: ['https://www.instagram.com/bobsshoppingguararapes/'] },
      { nome: 'Burguer do Nô - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81981500390', sites: ['https://www.instagram.com/burguerdono/'] },
      { nome: 'Burguer King - Piedade', endereco: 'Av. Ayrton Senna da Silva, 1583', telefone: '81998728437', sites: [] },
      { nome: 'Burguer King - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81992294465', sites: [] },
      { nome: 'Casa do Pastel - Candeias', endereco: 'Av. Manolo Cortizo, 315 - Candeias', telefone: '81984518565', sites: ['https://www.instagram.com/casadopasteldh/'] },
      { nome: 'Faaca - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81992228379', sites: ['https://www.instagram.com/faacaguararapes'] },
      { nome: 'Giraffas - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81997966009', sites: [] },
      { nome: 'Gladiador Hamburgueria', endereco: 'Av. Bernardo Vieira, 5269 - Candeias', telefone: '', sites: ['https://www.instagram.com/gladiadorhamburguergourmet/'] },
      { nome: 'Gostoso Burguer', endereco: 'Av. Gen. Manoel Rabelo, 1600', telefone: '81993003715', sites: ['https://www.instagram.com/gostoso.burguer'] },
      { nome: "Habib's - Piedade", endereco: 'Av. Gen. Barreto de Menezes, 179', telefone: '8130940440', sites: ['https://www.habibs.com.br'] },
      { nome: "Habib's - Shopping Guararapes", endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81973135328', sites: [] },
      { nome: 'KFC - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81991681320', sites: [] },
      { nome: 'Laça Burguer - Piedade', endereco: 'Av. Bernardo Vieira de Melo, 3680 - Piedade', telefone: '8133616561', sites: ['https://www.lacaburguer.com.br/'] },
      { nome: 'Laça Burguer - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81993887577', sites: [] },
      { nome: "McDonald's - Piedade", endereco: 'Av. Bernardo Vieira de Melo, 1372', telefone: '81998119246', sites: ['https://www.mcdonalds.com.br'] },
      { nome: "McDonald's - Shopping Guararapes", endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '8121284515', sites: [] },
      { nome: 'Mini Kalzone - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81982306882', sites: ['https://www.instagram.com/minikalzone'] },
      { nome: "Nancy's", endereco: 'Av. Bernardo Vieira de Melo, 4456', telefone: '81991146543', sites: ['https://www.instagram.com/nancys.br/'] },
      { nome: 'Pasteleto', endereco: 'Reserva Vila Natal, Eng. Velho', telefone: '81985642302', sites: ['https://www.instagram.com/pasteleto_/'] },
      { nome: 'Popeyes - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: [] },
      { nome: 'Quintal Guilherme BBQ', endereco: 'R. Santo Amaro, 52 - Vista Alegre', telefone: '81971122003', sites: ['https://www.instagram.com/quintalguilhermebbq/'] },
      { nome: 'Salgateria Prazeres', endereco: 'Av. Barreto de Menezes, 538', telefone: '81996250941', sites: ['https://www.instagram.com/salgateria_prazeres'] },
      { nome: 'Subway - Piedade', endereco: 'Av. Bernardo Vieira de Melo, 2402', telefone: '8130932233', sites: [] },
      { nome: 'Subway - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: [] },
      { nome: 'Three Guys Burguer', endereco: 'Av. Bernardo Vieira de Melo, 4405 - Candeias', telefone: '', sites: ['https://www.instagram.com/threeguys.burguer/'] },
    ]
  },
  cafes: {
    label: 'Cafeterias',
    emoji: '☕',
    cor: '#8B5E3C',
    items: [
      { nome: 'Annie Cake Shop', endereco: 'R. João Dourado Filho, 1131 - Piedade', telefone: '', sites: ['https://www.instagram.com/anniecakeshop/'] },
      { nome: 'Café com Amor em Pedaços', endereco: 'Galeria Copacabana Center - Av. Ayrton Senna da Silva, 1221 - Piedade', telefone: '81988919808', sites: [] },
      { nome: 'Coffee Shop São Braz', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '8133612103', sites: ['https://www.instagram.com/saobrazcoffeeshop_'] },
      { nome: 'Deli Café - The Garden', endereco: 'The Garden Open Mall - Av. Bernardo Vieira de Melo, 209 - Piedade', telefone: '81913648706', sites: ['https://www.instagram.com/delicafepiedade/'] },
      { nome: 'Fridda Café', endereco: 'R. Antônio Ferreira Campos, 4366 - Candeias', telefone: '81982040237', sites: ['https://www.friddacafe.com.br/', 'https://www.instagram.com/friddacafe'] },
      { nome: 'Granno Café', endereco: 'Av. Bernardo Vieira de Melo, 4257 - Candeias', telefone: '8132039846', sites: [] },
      { nome: 'Rei do Mate - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81987700002', sites: ['https://www.instagram.com/reidomate_shoppingguararapes'] },
    ]
  },
  sorveterias: {
    label: 'Sorveterias',
    emoji: '🍦',
    cor: '#9B59B6',
    items: [
      { nome: 'Açaí Tia Ju', endereco: 'Av. Bernardo Vieira de Melo, 5293 - Candeias', telefone: '81996510514', sites: ['https://www.instagram.com/acaitiaju'] },
      { nome: "Berry's Ice Food", endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: [] },
      { nome: 'Glaçaí - Candeias', endereco: 'Av. Bernardo Vieira de Melo, 5304', telefone: '8141418273', sites: ['https://www.instagram.com/glacaioficial'] },
      { nome: 'Glaçaí - Piedade', endereco: 'Av. Bernardo Vieira de Melo, 3042', telefone: '81995007218', sites: ['https://www.instagram.com/glacaioficial'] },
      { nome: 'Glaçaí - Prazeres', endereco: 'Prazeres, Jaboatão dos Guararapes', telefone: '', sites: [] },
      { nome: "Marujo's Açaí", endereco: 'Av. Bernardo Vieira de Melo, 4235', telefone: '81998242557', sites: ['https://www.instagram.com/marujosacai'] },
      { nome: 'Milky Moo', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '', sites: ['https://www.instagram.com/milkymoo_guararapes/'] },
      { nome: 'San Paolo Gelato Gourmet', endereco: 'Shopping Guararapes - Av. Barreto de Menezes, 800 - Piedade', telefone: '81981114279', sites: ['https://www.instagram.com/sanpaolooficial'] },
      { nome: 'Sorveteria Bacana', endereco: 'R. Comendador Sá Barreto, 4500 - Candeias', telefone: '81992387509', sites: ['https://www.instagram.com/sorveteriabacanacandeias'] },
    ]
  },
  outros: {
    label: 'Outros',
    emoji: '🍜',
    cor: '#546E7A',
    items: [
      { nome: 'Akira Cozinha Japonesa', endereco: 'Av. Bernardo Vieira de Melo, 3310 - Piedade', telefone: '8132034925', sites: ['https://www.instagram.com/akiracozinhajaponesa'] },
      { nome: "Beto's Hamburgueria", endereco: 'Av. Bernardo Vieira de Melo, 4714 - Candeias', telefone: '8132035131', sites: ['https://www.instagram.com/betosbaroficial'] },
      { nome: 'Brooklyn Burguer', endereco: 'Av. Bernardo Vieira de Melo, 3310 - Piedade', telefone: '81996889246', sites: ['https://www.instagram.com/querobrooklyn/'] },
      { nome: 'Cacau Show - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '8140422434', sites: ['https://www.instagram.com/cacaushow'] },
      { nome: 'Chapa do Gaúcho Hamburgueria', endereco: 'Av. Presidente Castelo Branco, 5820', telefone: '81989397033', sites: ['https://www.instagram.com/chapadogauchoxis'] },
      { nome: 'Delícias de Prazeres', endereco: 'Rua Rossini Rosevelt de Albuquerque, 14', telefone: '8130935657', sites: ['https://www.instagram.com/deliciadeprazerespiedade'] },
      { nome: 'Marisia Food Park', endereco: 'Av. Bernardo Vieira de Melo, 5269', telefone: '81999026816', sites: ['https://www.instagram.com/marisia.foodpark'] },
      { nome: 'MarVino - The Garden', endereco: 'The Garden Open Mall - Av. Bernardo Vieira de Melo, 209 - Piedade', telefone: '81996135656', sites: ['https://www.marvino.com.br/', 'https://www.instagram.com/marvinoloja/'] },
      { nome: 'Padaria Globo', endereco: 'Av. Ayrton Senna da Silva, 30 - Piedade', telefone: '81999481132', sites: [] },
      { nome: 'Pastelmania - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81988391712', sites: [] },
      { nome: 'Planeta Bombom - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '81991081262', sites: [] },
      { nome: 'Sweets - Shopping Guararapes', endereco: 'Av. Barreto de Menezes, 800 - Piedade', telefone: '8134684162', sites: ['https://www.sweets.com.br', 'https://www.instagram.com/sweetseuamo/'] },
    ]
  }
};

type Item = { nome: string; endereco: string; telefone: string; sites: string[] };
type CatKey = keyof typeof CATEGORIAS;

const formatPhone = (phone: string) => {
  if (!phone) return null;
  const d = phone.replace(/\D/g, '');
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return phone;
};

const isInsta = (url: string) => url.includes('instagram');

function GastroCard({ item, cor, index }: { item: Item; cor: string; index: number }) {
  const [open, setOpen] = useState(false);
  const phone = formatPhone(item.telefone);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="border-t border-black/5 last:border-b transition-all duration-200"
      style={{ background: open ? `${cor}0D` : 'transparent' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-4 px-1 text-left focus:outline-none group"
      >
        <span
          className="text-2xl font-black italic tabular-nums shrink-0 transition-colors duration-200"
          style={{ color: open ? cor : '#0044CA18', minWidth: '2rem' }}
        >
          {num}
        </span>
        <span className="flex-1 text-sm font-black text-[#0044CA] uppercase tracking-tight leading-snug group-hover:opacity-75 transition-opacity">
          {item.nome}
        </span>
        <span
          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: open ? cor : '#0044CA12' }}
        >
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke={open ? 'white' : '#0044CA'} strokeWidth={3}
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '220px' : '0px' }}
      >
        <div className="pb-4 px-1 pl-11 flex flex-col gap-2">
          <div className="h-px w-8 rounded-full mb-1" style={{ background: cor }} />
          <p className="text-xs text-slate-500 font-medium leading-snug">📍 {item.endereco}</p>
          {phone && (
            <a href={`tel:+55${item.telefone}`} className="text-xs font-bold w-fit hover:opacity-70 transition-opacity" style={{ color: cor }}>
              📞 {phone}
            </a>
          )}
          {item.sites.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {item.sites.map((site, i) => (
                <a
                  key={i}
                  href={site.startsWith('http') ? site : `https://${site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border-2 transition-all duration-150 hover:scale-105"
                  style={{ borderColor: cor, color: cor, background: 'transparent' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = cor; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = cor; }}
                >
                  {isInsta(site) ? '↗ Instagram' : '↗ Site'}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gastronomia() {
  const [aba, setAba] = useState<CatKey>('restaurantes');
  const cat = CATEGORIAS[aba];
  const total = Object.values(CATEGORIAS).reduce((acc, c) => acc + c.items.length, 0);
  const isYellow = cat.cor === '#F9BC00' || cat.cor === '#D4A017';
  const textColor = isYellow ? '#0044CA' : 'white';
  const mutedColor = isYellow ? '#0044CA80' : 'rgba(255,255,255,0.6)';

  return (
    <div className="min-h-screen pt-42 pb-20" style={{ background: '#e8e8e8' }}>

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 mb-10">
        <div className="relative">
          <p className="absolute -top-4 left-0 text-[7rem] font-black uppercase leading-none select-none pointer-events-none" style={{ color: '#0044CA07', letterSpacing: '-0.05em' }}>EAT</p>
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#00751D] mb-3">▸ Guia gastronômico</p>
            <h1 className="font-black uppercase leading-[0.9] mb-3" style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', color: '#0044CA', letterSpacing: '-0.04em' }}>
              GASTRO&shy;NO&shy;MIA
              <br />
              <span style={{ color: '#F9BC00', WebkitTextStroke: '2px #00751D', display: 'inline-block', transform: 'skewX(-3deg)' }}>
                EM JABOATÃO
              </span>
            </h1>
            <p className="text-sm font-semibold text-slate-500">{total} estabelecimentos em {Object.keys(CATEGORIAS).length} categorias</p>
          </div>
        </div>
      </header>

      {/* ABAS */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {(Object.entries(CATEGORIAS) as [CatKey, typeof CATEGORIAS[CatKey]][]).map(([key, c]) => {
            const active = aba === key;
            const iy = c.cor === '#F9BC00' || c.cor === '#D4A017';
            return (
              <button key={key} onClick={() => setAba(key)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black uppercase tracking-tight transition-all duration-200 hover:scale-105 focus:outline-none"
                style={{
                  background: active ? c.cor : 'white',
                  color: active ? (iy ? '#0044CA' : 'white') : '#0044CA',
                  boxShadow: active ? `0 4px 12px ${c.cor}50` : '0 1px 4px rgba(0,0,0,0.08)',
                }}
              >
                <span>{c.emoji}</span>
                <span>{c.label}</span>
                <span className="ml-1 text-[9px] font-black px-1.5 py-0.5 rounded-full"
                  style={{ background: active ? (iy ? '#0044CA20' : 'rgba(255,255,255,0.25)') : `${c.cor}20`, color: active ? (iy ? '#0044CA' : 'white') : c.cor }}>
                  {c.items.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">

          {/* Painel lateral */}
          <div className="rounded-2xl p-6 lg:sticky lg:top-6" style={{ background: cat.cor }}>
            <p className="text-5xl mb-3">{cat.emoji}</p>
            <h2 className="font-black uppercase italic leading-none mb-2" style={{ fontSize: '1.8rem', color: textColor, letterSpacing: '-0.03em' }}>{cat.label}</h2>
            <div className="h-0.5 w-10 rounded-full mb-4" style={{ background: mutedColor }} />
            <p className="text-3xl font-black" style={{ color: textColor }}>{cat.items.length}</p>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: mutedColor }}>estabelecimentos</p>

            <div className="flex flex-col gap-0.5">
              {(Object.entries(CATEGORIAS) as [CatKey, typeof CATEGORIAS[CatKey]][]).map(([key, c]) => (
                <button key={key} onClick={() => setAba(key)}
                  className="flex items-center gap-2 text-left px-2 py-1.5 rounded-lg transition-all duration-150 focus:outline-none"
                  style={{ background: aba === key ? (isYellow ? '#0044CA15' : 'rgba(255,255,255,0.18)') : 'transparent', opacity: aba === key ? 1 : 0.55 }}
                >
                  <span className="text-sm">{c.emoji}</span>
                  <span className="text-xs font-bold uppercase tracking-tight" style={{ color: textColor }}>{c.label}</span>
                  <span className="ml-auto text-[9px] font-black px-1.5 py-0.5 rounded-full" style={{ background: isYellow ? '#0044CA15' : 'rgba(255,255,255,0.15)', color: textColor }}>{c.items.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Lista */}
          <div className="rounded-2xl px-4 py-2" style={{ background: '#f5f5f5' }}>
            {cat.items.map((item, i) => (
              <GastroCard key={i} item={item} cor={cat.cor} index={i} />
            ))}
          </div>

        </div>
      </div>

      {/* RODAPÉ */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: '#0044CA20' }} />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0044CA40]">Jaboatão dos Guararapes</span>
          <div className="h-px flex-1" style={{ background: '#0044CA20' }} />
        </div>
      </div>
    </div>
  );
}