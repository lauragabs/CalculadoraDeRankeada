# Calculadora de Partidas Rankeadas

## Descrição

Este projeto tem como objetivo calcular o nível de um jogador em um sistema de partidas ranqueadas com base em seu saldo de vitórias e derrotas.

A lógica do cálculo é simples:
- Se o número de vitórias for menor que 10, o jogador está no nível "Ferro".
- Se o número de vitórias for entre 11 e 20, o jogador está no nível "Bronze".
- Se o número de vitórias for entre 21 e 50, o jogador está no nível "Prata".
- Se o número de vitórias for entre 51 e 80, o jogador está no nível "Ouro".
- Se o número de vitórias for entre 81 e 90, o jogador está no nível "Diamante".
- Se o número de vitórias for entre 91 e 100, o jogador está no nível "Lendário".
- Se o número de vitórias for maior ou igual a 101, o jogador está no nível "Imortal".

## Funcionalidades

- Cálculo do saldo de partidas: `saldo = vitórias - derrotas`
- Determinação do nível com base no saldo de vitórias
- Exibição de uma mensagem com o saldo e o nível do jogador

## Tecnologias Utilizadas

- **JavaScript**: Utilizado para implementar as funções de cálculo de saldo e exibição da mensagem com o resultado.

## Estrutura do Código

O código contém:
- **Variáveis** para armazenar o número de vitórias, derrotas e o saldo
- **Função** que recebe as vitórias e derrotas e retorna o saldo
- **Estruturas de decisão (if/else)** para determinar o nível do jogador com base no saldo

## Conclusão

Este projeto mostra como utilizar variáveis, operadores, estruturas de decisão e funções em JavaScript para criar uma simples calculadora de partidas ranqueadas. É um excelente exemplo para praticar a lógica de programação e o uso dessas estruturas fundamentais.

## Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais informações.
