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

## Diferenca de Sincrono e Assincrono

**Sincrono:** O processamento sincrono ele ocorre em sincronia do sistema, toda acao entre o site e o usuario

**Assincrono:** Assincrono nao dependem do usuario, sao atividades e recursos da aplicacao. 

## Pomise

E uma intencao ou promeca que executa uma acao assincrona, ou seja ele se prepara para a execucao do assincrono e se der algo certo faz alguma acao e se nao der executa outra acao


## OBJECT.ASSING

Copia o valor de atributos de um objeto e cria um objeto destino, retornando esse objeto

todos os objetos a diretia ele sobre escreve o a esqueda.

## EXPRESS GENERATOR

Serve para interligar o front com o backend criando as principais pastas do express


```Bash

$ npm install express-generator -g

```

apos instalar movemos os arquivos do front para pasta public 

e movemos o index para views e depois renomeamos ele como .ejs

## Usando um Framework Restify

ele e um framewoek escrito em node, ele e um web serverser que permite tanto ter o servidor restful quanto o servidor cliente
ajudando a consumir a api

para instalar

```JavaScript

$ npm install restify-clients --save

```

Basta olhar na documentacao do resfy que tem os exemplos de cliet

http://restify.com/docs/client-guide/

isso no users criado pelo express no client server


## ajax 

Ele serve para requisicoes asincronas
