class HttpRequest {

    static get(url, params = {}){

      return  HttpRequest.request('GET', url, params)
    };

    static delete(url, params = {}){

        return  HttpRequest.request('DELETE', url, params)
    };

    static put(url, params = {}){

        return  HttpRequest.request('PUT', url, params)
    };

    static post(url, params = {}){

        return  HttpRequest.request('POST', url, params)
    };



    static request(method, url, params = {}){
        
        return new Promise((resolve, reject) =>{
            //let users = User.getUsersStorage();
            let ajax = new XMLHttpRequest(); //chamando o ajax

            //precisamos falar onde ele vai chamar e o metodo
            ajax.open(method.toUpperCase(), url)
            
            ajax.onerror = event =>{

                reject(e);
            };

            //apos isso precisamos configurar um evento de resposta 
            //porque nao sabemos quanto tempo vai levar
            ajax.onload = event => {
       
                let obj = { };
       
                try{
       
                    obj = JSON.parse(ajax.responseText);
       
                } catch(e){
                    reject(e);
                    console.error(e);

                };  
                
                resolve(obj);
       
            };
            
            ajax.setRequestHeader('Content-Type', 'application/json');
            ajax.send(JSON.stringify(params));

        })
        
     
    };
};

