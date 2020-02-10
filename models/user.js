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
                    this[name] = json[name]
            }
            
        };

    };


    static getUsersStorage(){
        let users = [];

        if (localStorage.getItem('users')){
            users = JSON.parse(localStorage.getItem('users'));
        };

        return users;
    };//end getUserStorage

    getNewID(){

       if (!window.id) window.id = 0;

       id++;

       return id;

    }; //end get new ID
    save(){

        let users = User.getUsersStorage();

        if(this.id > 0){

            users.map(u=>{

                if(u._id == this.id){

                    Object.assign(u, this);
                }
                return u;
            });

           
        } else {
            this._id = this.getNewID();

            users.push(this);

        };       
       
        localStorage.setItem('users', JSON.stringify(users));
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

