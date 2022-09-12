# POKEDEX

<img src="https://user-images.githubusercontent.com/102265620/189567216-631babec-166b-4105-90f2-e0f1e9f4b977.png" width="250px"/>

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

<img src="https://user-images.githubusercontent.com/102265620/189567791-dd5239fc-dd40-473e-b493-9e1b00b5d183.png" width="800px"/>
<img src="https://user-images.githubusercontent.com/102265620/189568042-c45c8e5d-6fe2-494b-82d7-9901f69a5e10.png" width="300px"/>
<img src="https://user-images.githubusercontent.com/102265620/189568247-8784447f-6c70-4dc1-b9a0-25e6ea87612b.png" width="800px"/>
<img src="https://user-images.githubusercontent.com/102265620/189568385-db1c0194-fd75-4019-b211-41e7ca35d43b.png" width="300px"/>
<img src="https://user-images.githubusercontent.com/102265620/189568478-3e8fe0a7-7785-45a7-9eed-c7995204d10e.png" width="300px"/>
