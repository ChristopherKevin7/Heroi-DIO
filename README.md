# Classificador de Herói

Este repositório contém o código desenvolvido como parte do desafio do **Bootcamp GFT Start #6 - Lógica de Programação** oferecido pela [DIO](https://dio.me). O objetivo deste projeto é criar um sistema de classificação para um herói com base nos resultados de suas partidas (vitórias, derrotas e empates). O herói acumula pontos de experiência (XP) ao longo das partidas, que determinam seu nível de rank.

## Descrição do Projeto

O código foi escrito em **JavaScript** e utiliza um array de objetos para armazenar os resultados das partidas e seus respectivos pontos. Ao final de cada partida, o herói ganha ou perde XP, e seu rank é atualizado com base na quantidade total de XP acumulado.

### Estrutura de Pontuação e Ranking

- Cada partida possui uma pontuação, dependendo do resultado:
  - **Vitória**: Pontos positivos
  - **Empate**: Pontos menores
  - **Derrota**: Pontos negativos

- Os ranks são definidos de acordo com o XP acumulado:
  - Menor que 1.000: **Ferro**
  - Entre 1.001 e 2.000: **Bronze**
  - Entre 2.001 e 5.000: **Prata**
  - Entre 6.001 e 7.000: **Ouro**
  - Entre 7.001 e 8.000: **Platina**
  - Entre 8.001 e 9.000: **Ascendente**
  - Entre 9.001 e 10.000: **Imortal**
  - Acima de 10.001: **Radiante**

## Como Executar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
3. Navegue até o diretório do projeto:
   ```bash
    cd nome-do-repositorio
4. Execute o script com o comando:
    ```bash
    node nome-do-arquivo.js

## Tecnologias Utilizadas
- JavaScript
- Node.js (para execução do código)