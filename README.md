# POKEDEX
![logo](https://user-images.githubusercontent.com/102265620/189567216-631babec-166b-4105-90f2-e0f1e9f4b977.png)

Nome dos integrantes: 
- Alessandro Silvino

- Leonardo Koga
- Renato Alexandrini

Link do Surge: berserk-blood.surge.sh


O que funciona:
- Os Pokemons são carregados na HomePage de 20 em 20 e possuem a opção de adicionar eles à Pokedex ou olhar os detalhes.
- Quando adicionados à Pokedex, eles saem da Home Page, não podendo haver pokemons iguais na Pokedex.
- Dentro da Pokedex, existe a opção de soltar o Pokemon, para que ele retorne à HomePage.
- Existe um contador ha HomePage que indica quantos pokemons existem dentro da Pokedex.
- Devido a estilização estar simples, a página se enconta responsiva.

O que não funciona: 
- A Estilização da página de detalhes do pokemons está incompleta.
- A página está lenta pois uma das dependêcias do useEffect dentro do Global State, ela está sendo atualizada o tempo inteiro. Porém essa dependência faz com que a HomePage atualize quando um pokemon é enviado para a pokedex.

