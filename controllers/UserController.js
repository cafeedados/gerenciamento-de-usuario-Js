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

                let btn = this.formEL.querySelector('[type=submit]');
                btn.disabled = true; //evitar que o usuario clique varias vezes ate a fianlizacao do carregamento apra nao duplicar dados

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

                            this.formEL.reset();

                            //posterior adicionar a linhda ai ativa o botao
                            btn.disabled = false;

                        
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
    
            /**
             * se tiver o arquivo manda pro data se nao
             * ele ira continuar mesmo sem o arquivo excluindo a 
             * obrigatoriedade de se ter o arquivo, caso nao inclua
             * imagem teremos uma imagem padrao.
             */
            if (file){
                fileReader.readAsDataURL(file); 
            } else {
                resolve('dist/img/boxed-bg.jpg');
            }

        });

       


    };//end getPhoto

    getValues(){

        let user = {};
        let isValid = true;
        
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


            /**
             * para validar os campos de nome, email e senha
             */
            if(['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value){
                field.parentElement.classList.add('has-error')
                isValid = false;

            };

            if(field.name == 'gender'){
                user[field.name] = field.value;
                
                

            }else if(field.name == 'admin'){

                user[field.name] = field.checked;

            } else{
                user[field.name] = field.value;

            }

        // console.log(field);

        });

        if (!isValid){
            return false;

        };

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

        let tr = document.createElement('tr')
        

       tr.innerHTML = `        
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${(dataUser.admin) ? 'Sim' : 'Nao'}</td>
        <td>${Utils.dateFormat(dataUser.register)}</td>
        <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
        `;

        //criar o elemento como elemento filho do atual
        this.tableEL.appendChild(tr);


    };//end addLine


};