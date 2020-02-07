# gerenciamento-de-usuario-estudo

## Manipulando o DOM

No HTML tudo que se tem dentro de um documento HTML chama-se Elemento. 

Um detalhe importante,o navegador ele e um window, agora quando falamos de site chamamos ele de window.


 Todo elemento pode ter propriedade e metodo.

METODO: sempre com parentese, pois metodo e uma acao

## Variaveis

Exemplo de declaraco baseado no projeto

```JavaScript

let name = document.querySelector('#exampleInputName');

let gender = document.querySelectorAll('#form-user-create [name=gender]:checked'); //vai pegar so o que esta selecionado

let birth = document.querySelector('#exampleInputBirth');

let country = document.querySelector('#exampleInputCountry');

let email = document.querySelector('#exampleInputEmail1');

let password = document.querySelector('#exampleInputPassword1');

let inputPhoto = document.querySelector('#exampleInputFile');

let admin = document.querySelector('#exampleInputAdmin');


```

Podemos usar pseudo seletores para selecionar uma Id que por exemplo seja em formato radio exemplo

```
document.querySelectorAll('#form-user-create [name=gender]: checked') 

```

SPA - Single Page Aplication = aplicacao de uma unica pagina