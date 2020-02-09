class UserController{
    //
    constructor(formId, tableId){
        this.formEL = document.getElementById(formId);
        this.tableEL = document.getElementById(tableId);

        this.onSubmit();

    };

    onSubmit(){

         

            /**
             * 
             * Aqui recupera o ID e escuta o evento do tipo submit do id forumlario
             * onde tratamos esse evento
             */


            this.formEL.addEventListener('submit',(event) => {
                //Para parar o comportamento padrao do envio de forumario
                event.preventDefault();

             

             this.addLine(this.getValues());

            
                
            });

    };//end onSubmit

    getValues(){

        let user = {};
        
        /**
         * o forEach que percorre o forumulario pelo id e entrega o Json 
         * gracas a declaracao da variavel user la em cima recebendo o json 
         * para tratativa do envio de dados
         */

      //percorrer o filhos deles

      /***
       * estou dizendo que o formEL ele e um array, ja que e
       * ele da entrada como um objeto e usamos o spred que sao
       * os tres pontos para nao precisar dizer quantos indices sao
       * 
       * 
       */
    [...this.formEL.elements].forEach(function(field, index){

            if(field.name == 'gender'){
                user[field.name] = field.value;
                
                

            }else{
                user[field.name] = field.value;
            }

        // console.log(field);

        });

            return new User(
                user.name, 
                user.gender, 
                user.birth, 
                user.country, 
                user.email, 
                user.password, 
                user.photo, 
                user.admin
            );
        
        
    };//end getValues


    //colocando os dados na tabela
    addLine(dataUser){

        console.log(dataUser)
        

        this.tableEL.innerHTML = `
        <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>

        `;


    };//end addLine


};