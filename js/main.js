/**
 * txtArea - it is area where user chatting
 * btnSend - it is a button for sending
 * area - it is area where user can see dialog
 * @type {HTMLElement}
 */
let txtArea = document.getElementById('txt-area');
let btnSend = document.getElementById('btn-send');
let area = document.getElementById('area');

/**
 * Its function for bots answer
 * @param max - max number(its random)
 * @param min - min number
 */
function bot (max,min){
    let massiveAnswer = ['Hi','hell magic','Persik is hungry',"it was the worst trick","team work",'Fuck!','persik is exiting'
        ,"follow on codex",'like',"ohh,you make a lot of mistakes",'So important','You are not stupid,you are a bit crazy'
        ,'dont forget about JSDoc','refactoring on ts','JS is my life','persik is angry','dont sleep,do what asked Peter',
        'maybe','yes','no','shit!','ups','TypeScript or JavaScript'];
    let massiveEmoji = ['💣','😅','👏','😍','😛','😜','😈','😇','💥','💢','💩','👻','👽','👅','🙈','🙉','🙏','😚','😶','😮','😯'];

    let answer = Math.round(max+min);
}

/**
 *
 */
btnSend.onclick = function () {
    area.textContent = txtArea.textContent;
    bot();
}