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


TRANSFORMANDO HTML

```HTML
    <tr>
        
                    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                    <td>Fulano</td>
                    <td>fulano@loutech.com.br</td>
                    <td>Sim</td>
                    <td>02/04/2018</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
    </tr>


```


E transformando isso com uma funcao usando innerHTML com tamplate string.


UM OBJETO REPRESENTA A INSTANCIA DE UMA CLASSE


## File Reader

Consigo achar o caminho da imagem dele, porem ainda nao irei colocar no banco de dados


quando usamos o comando new FileReader(), ja invoca o metodo construtor

Funcoes de callback e executado apos a execucao de uma rotina