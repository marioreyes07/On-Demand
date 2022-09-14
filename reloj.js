(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMes.textContent = meses [mes];
        
        pYear.textContent = year;

        pHoras.textContent = horas;

        if (minutos < 10) { minutos = "0" + minutos };
        if (segundos < 10) { segundos = "0" + segundos };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;



    };



    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())

/*regresive time
var minutes = 120;

function actualizarTiempo() {
    document.getElementById('tiempo'),innerHTML = minutes + " minutes";
    if(minutes==0){
        alert('No Show');

    }else{
        minutes--;
        setTimeout("actualizarTiempo()",1000);
    }
}*/