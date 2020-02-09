class User {

    constructor(name, gender, birth, country, email, password, photo, admin){
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

