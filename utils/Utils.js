class Utils {

    /**
     * 
     * Isso e um metodo estatico e serve para funcoes que nao tem 
     * aleracao e podem ser chamadas mais de uma vez e usamos o termo
     * static
     */
    static dateFormat(date){
        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+ ' ' +date.getHours()+':'+date.getMinutes();
    }
}