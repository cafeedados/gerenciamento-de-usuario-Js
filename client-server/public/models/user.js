class User {

    constructor(name, gender, birth, country, email, password, photo, admin){
            this._id;
            this._name = name;
            this._gender = gender;
            this._birth = birth;
            this._country = country;
            this._email = email;
            this._password = password;
            this._photo = photo;
            this._admin = admin;
            this._register = new Date(); //data local
        
    };

    get id() {
        return this._id;
    }
    get register(){
        return this._register;
    };

    get name(){
        return this._name;
    };
    
    get gender(){
        return this._gender;
    };

    get birth(){
        return this._birth;
    };

    get country(){
        return this._country;
    };

    get email(){
        return this._email;
    };
    
    get password(){
        return this._password;
    };

    get photo(){
        return this._photo;
    };

    get admin(){
        return this._admin;
    };

    loadFormJson(json){

        for (let name in json){

            switch(name){
                case '_register':
                    this[name] = new Date(json[name]);
                break;

                default:
                  if(name.substring(0, 1)=== '_')  this[name] = json[name]
            }
            
        };

    };


    static getUsersStorage(){
       
      return  HttpRequest.get('/users');
    };//end getUserStorage



    toJSON(){
        /**
         * Usar objetc.keys que ele vai ler exatamente 
         * quais sao as chaves ou seja quais sao as prorpiedades
         * e atributos do meu objeto instanciado entao passo
         * o objeto dentro dele, e ele retorar um array
         * 
         * e como ele retorna um array podemos fazer um forEach
         * onde iremos receber cada um das keys
         * 
         * criado o objeto json onde dentro desse objeto coloco 
         * essa chave, e digo que ela tem o mesmo valor que o this
         * nesse objeto
         * 
         * porem so vamos fazer isso se nao for undefined, para nao 
         * adicionar umdefinided la
         */
        let json = {};

        Object.keys(this).forEach(key =>{

            if(this[key] !== undefined) json[key] = this[key];

        });

        return json;

    };

    save(){

       return new Promise((resolve, reject) => {


        let promise;

        if (this.id){
            
           promise = HttpRequest.put(`/users/${this.id}`, this.toJSON())


        } else {

            promise = HttpRequest.post(`/users`, this.toJSON())

        };

        promise.then(data => {

            this.loadFormJson(data);

            resolve(this);

        }).catch(e => {


            reject(e);
        });


        });


       
    }; // end save

    remove(){

        return HttpRequest.delete(`/users/${this.id}`)

    };

    // -------- 
/*
    set register(){
         this._register;
    };

    set name(){
         this._name;
    };
    
    set gender(){
         this._gender;
    };

    set birth(){
         this._birth;
    };

    set country(){
         this._country;
    };

    set email(){
         this._email;
    };
    
    set password(){
         this._password;
    };
*/
    set photo(value){
         this._photo = value;
    };
/*
    set admin(){
         this._admin;
    };

*/




};

