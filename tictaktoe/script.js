let turn = "X"
let isgameover = false

const changeturn = () => {
    return turn === "X" ? "0" : "X"
}


const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            let won = document.getElementsByClassName('won')[0]
            won.innerText = `'${boxtexts[e[0]].innerText}' Won`
            if (won.innerText === `'X' Won`) {
                won.style.color = 'red'
            }
            else {
                won.style.color = 'lightgreen'
            }
            isgameover = true
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {

            boxtext.style.color = 'lightgreen'
            if (turn === 'X')
                boxtext.style.color = 'red'

            boxtext.innerText = turn;
            turn = changeturn()
            checkwin()
            if (!isgameover) {
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn
            }
        }
    })
})



document.getElementsByClassName("reset")[0].addEventListener('click', () => {
    let boxes = document.getElementsByClassName("box")
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext')
        boxtext.innerText = ''
        turn = "X"
        let won = document.getElementsByClassName('won')[0]
        won.innerText = ''
    })
    document.getElementsByClassName('turn')[0].innerText = "Turn for " + turn
})