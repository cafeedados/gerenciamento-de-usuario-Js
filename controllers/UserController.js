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

                /**
                 * adicionar o values numa variavel 
                 * para conseguir extrair e alterar o valor
                 * da foto
                 */
                let values =  this.getValues();
                
                //chamando baseado na promise do getPhoto
                this.getPhoto().then(
                        (content) => { //se der certo executa essa funao
                            values.photo = content;

                            this.addLine(values);
                    }, 
                        (e) => { //se nao executa essa
                            console.error(e);

                    }
                );                   
                             
            });

    };//end onSubmit

    getPhoto(){
        
        /**
         * promisse retorna uma funcao com dois parametros
         * 
         * ou seja quando der certo executa o resolve e quando nao 
         * der executa o reject
         * 
         */
        return new Promise((resolve, reject) => {

            let fileReader = new FileReader();

            let elements = [...this.formEL.elements].filter(item => {
               if (item.name === 'photo'){
                   return item;
    
               }; 
            });
    
            /**
             * colocando o index 0 para pegar apenas ele e esse arquivo 
             * tambem e uma colecao, porque pode ser mais de um arquivo ja 
             * que a pessoa pode acabar selecionando mais, porem iremos pegar 
             * apenas o primeiro arquivo e por isso o files esta no index 0
             */
            let file = elements[0].files[0];
            
            //uma funcao de callback para aguardar o upload
            //pois a imagem pode ser pesada e etc
            fileReader.onload = () => {
    
                
                resolve(fileReader.result);
    
    
            }

            fileReader.onerror = (e) => {
                reject(e);
            }
    
    
            fileReader.readAsDataURL(file);

        });

       


    };//end getPhoto

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
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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