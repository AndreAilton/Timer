const Exibir = document.querySelector('.Exibir')
const Iniciar = document.querySelector('.Iniciar');
const Pausar = document.querySelector('.Pausar');
const Zerar = document.querySelector('.Zerar');
let Contador = 0;
let Hora = 0;
let Minuto = 0;
let Intervalo;
let Rodando = false;
function FormatarHora(Hora,Minuto,Segundo){
    let Formatado = '';
    Hora < 10 ? Formatado +=`0${Hora}:` : Formatado +=`${Hora}:`
    Minuto < 10 ? Formatado +=`0${Minuto}:` : Formatado +=`${Minuto}:`
    Segundo < 10 ? Formatado +=`0${Segundo}` : Formatado +=`${Segundo}`
    return Formatado
    }

function IniciarContagem(){
    if(!Rodando) {
        Intervalo = setInterval(() => {
            Contador++;

            if(Contador === 60){
                Contador = 0;
                Minuto++
            }

            if(Minuto === 60){
                Minuto = 0;
                Hora++
            }

            Exibir.innerHTML = FormatarHora(Hora,Minuto,Contador)

            if(Hora === 24) {
                Hora = 0;
                Exibir.innerHTML = 'Reinicie o Cronometro'
                clearInterval(Intervalo)
            }
        },1000);
        Rodando = true
    }
}

Iniciar.addEventListener("click",()=> {
    IniciarContagem()
})

Pausar.addEventListener("click",()=> {
    clearInterval(Intervalo)
    Rodando = false
})

Zerar.addEventListener("click",()=> {
    Contador = 0
    Exibir.innerHTML = "00:00:00"
    clearInterval(Intervalo)
    Rodando = false
})


