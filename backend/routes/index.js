module.exports = app => {
 
    app.get('/', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>RESTful API</h1><p>Projeto Desenvolvido por Pedro como projeto auxilio do curos</p>');

    });
    
};