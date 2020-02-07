//pegando os dados do forumulario
let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};//json para enviar dados



/**
 * 
 * Aqui recupera o ID e escuta o evento do tipo submit do id forumlario
 * onde tratamos esse evento
 */


document.getElementById('form-user-create').addEventListener('submit', function(event){
    //Para parar o comportamento padrao do envio de forumario
    event.preventDefault();
/**
 * o forEach que percorre o forumulario pelo id e entrega o Json 
 * gracas a declaracao da variavel user la em cima recebendo o json 
 * para tratativa do envio de dados
 */

fields.forEach(function(field, index){

    if(field.name == 'gender'){
        user[field.name] = field.value;
        
        

    }else{
        user[field.name] = field.value;
    }

   // console.log(field);

});
    console.log(user);
    
});