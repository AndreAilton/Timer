## [Link do Projeto Aqui](https://andreailton.github.io/Timer/)
[Clique Aqui](https://andreailton.github.io/Timer/)



# Projeto de Cronômetro

Este é um projeto de cronômetro simples, desenvolvido utilizando HTML, CSS e JavaScript. Ele permite iniciar, pausar e zerar o tempo, com o tempo sendo exibido no formato de horas, minutos e segundos.

## Funcionalidades

- **Iniciar/Pausar o Cronômetro**: Ao clicar no botão de iniciar, o cronômetro começa a contagem de segundos. Se o cronômetro já estiver em execução, o mesmo botão permite pausar a contagem.
- **Pausar o Cronômetro**: O botão de pausar interrompe a contagem do cronômetro sem zerar o tempo.
- **Zerar o Cronômetro**: O botão de zerar reinicia a contagem do cronômetro, mostrando "00:00:00".

## Conceitos Aplicados

1. **Manipulação do DOM**  
   Através do `document.querySelector()`, o JavaScript foi usado para selecionar elementos HTML com as classes `.Exibir`, `.Iniciar`, `.Pausar` e `.Zerar`. Esses elementos representam a área onde o tempo é exibido e os botões de controle.

2. **Intervalos e Contadores**  
   A função `setInterval()` foi utilizada para criar um intervalo que incrementa o tempo a cada segundo. Dentro desse intervalo, o código realiza a contagem de segundos, minutos e horas:

   ```javascript
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

       Exibir.innerHTML = FormatarHora(Hora, Minuto, Contador)
   }, 1000);

3. **Controle de Fluxo**  
O código controla o estado do cronômetro com uma variável booleana `Rodando`. Isso permite garantir que o cronômetro só seja iniciado ou pausado no momento adequado, evitando contagens simultâneas ou erros de lógica.

4. **Formatação de Tempo**  
A função FormatarHora() foi implementada para garantir que o tempo seja exibido no formato adequado de "hh:mm
", preenchendo com zeros à esquerda, quando necessário:  

   ``` javascript
    function FormatarHora(Hora, Minuto, Segundo) {
        let Formatado = '';
        Hora < 10 ? Formatado +=`0${Hora}:` : Formatado +=`${Hora}:`
        Minuto < 10 ? Formatado +=`0${Minuto}:` : Formatado +=`${Minuto}:`
        Segundo < 10 ? Formatado +=`0${Segundo}` : Formatado +=`${Segundo}`
        return Formatado;
    }  
