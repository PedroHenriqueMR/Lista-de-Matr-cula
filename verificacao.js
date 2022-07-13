function resultado (dia){

    let data = new Date();
    let diaSemana = data.getDay();
    let resul = dia[diaSemana];
    return resul;

};

export default resultado;