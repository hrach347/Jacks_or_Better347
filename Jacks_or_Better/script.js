class Card {
    constructor(cardname, mast, image, value) {
        this.cardname = cardname;
        this.mast = mast;
        this.image = image;
        this.selected = false
        this.value = value
    }
}

let cards = [card1, card2, card3, card4, card5]
let bets = [bet10, bet20, bet30, bet50, bet100]
let cani = true
let credit = 1000
let moneybet;
restart()
make_bet(10, bet10)
function make_bet(money, id) {
    if (cani == true) {
        if (money <= credit) {
            moneybet = money
            let i = 0
            while (i < bets.length) {
                bets[i].style.background = "black"
                i++
            }
            id.style.background = "red"
        }
        else {
            make_bet(10, bet10)
        }
    }
}

function bet() {
    if (credit > 0 && credit >= moneybet) {
        cani = false
        let i = 0
        while (i < 5) {
            let xCard = Math.floor(Math.random() * deck2.length)
            table.push(deck2[xCard])
            deck2.splice(xCard, 1)
            cards[i].style.backgroundImage = table[i].image
            if(cards[i].style.transform == "" || cards[i].style.transform == "rotateY(0deg)"){
                cards[i].style.transform = "rotateY(360deg)"
            }
            else if(cards[i].style.transform == "rotateY(360deg)"){
                cards[i].style.transform = "rotateY(0deg)"
            }
            i++
        }
        bet_draw.onclick = function () {
            draw()
        }
        bet_draw.innerText = "DRAW"
        credit -= moneybet
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (credit <= 0) {
        get_money.style.display = "block"
    }
}

function hold(index) {
    if (table[index].selected == false) {
        cards[index].style.opacity = "0.7"
        cards[index].innerText = "HOLD"
        table[index].selected = true
    }
    else if (table[index].selected == true) {
        cards[index].style.opacity = 1
        cards[index].innerText = ""
        table[index].selected = false
    }
}

function draw() {
    let i = 0
    while (i < 5) {
        let xCard = Math.floor(Math.random() * deck2.length)
        if (table[i].selected == false) {
            table[i] = deck2[xCard]
            deck2.splice(xCard, 1)
            cards[i].style.backgroundImage = table[i].image
            if(cards[i].style.transform == "rotateY(0deg)"){
                cards[i].style.transform = "rotateY(360deg)"
            }
            else if(cards[i].style.transform == "rotateY(360deg)"){
                cards[i].style.transform = "rotateY(0deg)"
            }
        }
        else {
            table[i].selected = false
            cards[i].style.opacity = 1
            cards[i].innerText = ""
        }
        i++
    }
    check_hands()
}

function restart() {
    deck2 = [
        new Card(2, "hearts", "url('cards/2_of_hearts.png')", 2),
        new Card(2, "diamonds", "url('cards/2_of_diamonds.png')", 2),
        new Card(2, "clubs", "url('cards/2_of_clubs.png')", 2),
        new Card(2, "spades", "url('cards/2_of_spades.png')", 2),

        new Card(3, "hearts", "url('cards/3_of_hearts.png')", 3),
        new Card(3, "diamonds", "url('cards/3_of_diamonds.png')", 3),
        new Card(3, "clubs", "url('cards/3_of_clubs.png')", 3),
        new Card(3, "spades", "url('cards/3_of_spades.png')", 3),

        new Card(4, "hearts", "url('cards/4_of_hearts.png')", 4),
        new Card(4, "diamonds", "url('cards/4_of_diamonds.png')", 4),
        new Card(4, "clubs", "url('cards/4_of_clubs.png')", 4),
        new Card(4, "spades", "url('cards/4_of_spades.png')", 4),

        new Card(5, "hearts", "url('cards/5_of_hearts.png')", 5),
        new Card(5, "diamonds", "url('cards/5_of_diamonds.png')", 5),
        new Card(5, "clubs", "url('cards/5_of_clubs.png')", 5),
        new Card(5, "spades", "url('cards/5_of_spades.png')", 5),

        new Card(6, "hearts", "url('cards/6_of_hearts.png')", 6),
        new Card(6, "diamonds", "url('cards/6_of_diamonds.png')", 6),
        new Card(6, "clubs", "url('cards/6_of_clubs.png')", 6),
        new Card(6, "spades", "url('cards/6_of_spades.png')", 6),

        new Card(7, "hearts", "url('cards/7_of_hearts.png')", 7),
        new Card(7, "diamonds", "url('cards/7_of_diamonds.png')", 7),
        new Card(7, "clubs", "url('cards/7_of_clubs.png')", 7),
        new Card(7, "spades", "url('cards/7_of_spades.png')", 7),

        new Card(8, "hearts", "url('cards/8_of_hearts.png')", 8),
        new Card(8, "diamonds", "url('cards/8_of_diamonds.png')", 8),
        new Card(8, "clubs", "url('cards/8_of_clubs.png')", 8),
        new Card(8, "spades", "url('cards/8_of_spades.png')", 8),

        new Card(9, "hearts", "url('cards/9_of_hearts.png')", 9),
        new Card(9, "diamonds", "url('cards/9_of_diamonds.png')", 9),
        new Card(9, "clubs", "url('cards/9_of_clubs.png')", 9),
        new Card(9, "spades", "url('cards/9_of_spades.png')", 9),

        new Card(10, "hearts", "url('cards/10_of_hearts.png')", 10),
        new Card(10, "diamonds", "url('cards/10_of_diamonds.png')", 10),
        new Card(10, "clubs", "url('cards/10_of_clubs.png')", 10),
        new Card(10, "spades", "url('cards/10_of_spades.png')", 10),

        new Card("jack", "hearts", "url('cards/jack_of_hearts2.png')", 11),
        new Card("jack", "diamonds", "url('cards/jack_of_diamonds2.png')", 11),
        new Card("jack", "clubs", "url('cards/jack_of_clubs2.png')", 11),
        new Card("jack", "spades", "url('cards/jack_of_spades2.png')", 11),

        new Card("queen", "hearts", "url('cards/queen_of_hearts2.png')", 12),
        new Card("queen", "diamonds", "url('cards/queen_of_diamonds2.png')", 12),
        new Card("queen", "clubs", "url('cards/queen_of_clubs2.png')", 12),
        new Card("queen", "spades", "url('cards/queen_of_spades2.png')", 12),

        new Card("king", "hearts", "url('cards/king_of_hearts2.png')", 13),
        new Card("king", "diamonds", "url('cards/king_of_diamonds2.png')", 13),
        new Card("king", "clubs", "url('cards/king_of_clubs2.png')", 13),
        new Card("king", "spades", "url('cards/king_of_spades2.png')", 13),

        new Card("ace", "hearts", "url('cards/ace_of_hearts.png')", 14),
        new Card("ace", "diamonds", "url('cards/ace_of_diamonds.png')", 14),
        new Card("ace", "clubs", "url('cards/ace_of_clubs.png')", 14),
        new Card("ace", "spades", "url('cards/ace_of_spades.png')", 14),
    ]
    table = []
    bet_draw.onclick = function () {
        bet()
    }
    bet_draw.style.display = "block"
    bet_draw.innerText = "BET"
    win_lose.style.display = "none"
    money_table.style.opacity="1"
    let i = 0
    while (i < cards.length) {
        cards[i].style.backgroundImage = "url('cards/cardback.png')"
        if(cards[i].style.transform == "rotateY(0deg)"){
            cards[i].style.transform = "rotateY(360deg)"
        }
        else if(cards[i].style.transform == "rotateY(360deg)"){
            cards[i].style.transform = "rotateY(0deg)"
        }
        i++
    }
    i = 0
    while (i < deck2.length) {
        deck2[i].selected = false;
        i++
    }
    cani = true
}
function getMoney() {
    window.location.reload()
}
function sort_cards() {
    let i = 0
    while (i < 4) {
        let j = 0
        while (j < 4) {
            if (table[j].value > table[j + 1].value) {
                let x = table[j + 1]
                table[j + 1] = table[j]
                table[j] = x
            }
            j++
        }
        i++
    }
}
function check_hands() {
    sort_cards()
    bet_draw.style.display = "none"
    if (flash_royal()) {
        win("FLASH ROYAL", moneybet * 100)
        credit += moneybet * 100
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (straight_flash()) {
        win("STRAIGHT FLASH", moneybet * 50)
        credit += moneybet * 50
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (kare()) {
        win("FOUR OF A KIND", moneybet * 30)
        credit += moneybet * 30
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (full_hause()) {
        win("FULL HOUSE", moneybet * 25)
        credit += moneybet * 25
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (flash()) {
        win("FLASH", moneybet * 15)
        credit += moneybet * 15
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (straight()) {
        win("STRAIGHT", moneybet * 10)
        credit += moneybet * 10
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (set3()) {
        win("THREE OF A KIND", moneybet * 5)
        credit += moneybet * 5
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (two_pairs()) {
        win("TWO PAIRS", moneybet * 2.5)
        credit += moneybet * 2.5
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else if (pair()) {
        win("PAIR", moneybet * 2)
        credit += moneybet * 2
        credits.innerText = "CREDITS: " + credit + "$"
    }
    else {
        lose(moneybet)
    }

    setTimeout(function () {
        restart()
    }, 3000)

}

function flash_royal() {
    if (table[4].cardname == "ace" && table[0].cardname == 10) {
        if (flash() && straight()) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}
function straight_flash() {
    if (flash() && straight()) {
        return true
    }
    else {
        return false
    }
}

function kare() {
    let i = 0
    while (i < 5) {
        let j = 0
        let c = 0
        while (j < 5) {
            if (table[j].cardname == table[i].cardname) {
                c++
            }
            j++
        }
        if (c == 4) {
            return true
        }
        i++
    }
    return false
}

function full_hause() {
    let table2 = []
    let i = 0
    while (i < 5) {
        table2.push(table[i])
        i++
    }
    if (table2[0].cardname == table2[1].cardname && table2[1].cardname == table2[2].cardname) {
        table2.splice(0, 1)
        table2.splice(0, 1)
        table2.splice(0, 1)
        if (table2[0].cardname == table2[1].cardname) {
            return true
        }
    }
    else if (table2[3].cardname == table2[4].cardname && table2[3].cardname == table2[2].cardname) {
        table2.splice(table2.length - 1, 1)
        table2.splice(table2.length - 1, 1)
        table2.splice(table2.length - 1, 1)
        if (table2[0].cardname == table2[1].cardname) {
            return true
        }
    }
    return false
}
function flash() {
    let i = 0
    while (i < 5) {
        if (table[i].mast != table[0].mast) {
            return false
        }
        i++
    }
    return true
}
function straight() {
    let i = 0
    while (i < 4) {
        if ((table[i + 1].value - table[i].value) != 1) {
            if (table[4].value == 14) {
                table[4].value = 1
                sort_cards()
                straight()
            }
            else {
                i = 0
                while (i < 5) {
                    if (table[i].value == 1) {
                        table[i].value = 14
                    }
                    i++
                }
                return false
            }
        }
        i++
    }
    i = 0
    while (i < 5) {
        if (table[i].value == 1) {
            table[i].value = 14
        }
        i++
    }
    return true
}

function set3() {
    let i = 0
    while (i < 5) {
        let j = 0
        let c = 0
        while (j < 5) {
            if (table[j].cardname == table[i].cardname) {
                c++
            }
            j++
        }
        if (c == 3) {
            return true
        }
        i++
    }
    return false
}

function two_pairs() {
    let i = 0
    let c = 0
    while (i < 5) {
        let j = 0
        while (j < 5) {
            if (table[i].cardname == table[j].cardname && i != j) {
                c++
            }
            j++
        }
        i++
    }
    if (c == 4) {
        return true
    }
    else {
        return false
    }
}

function pair() {
    let arr = []
    let i = 0
    while (i < 5) {
        if (table[i].value > 10) {
            if (!arr.includes(table[i].cardname)) {
                arr.push(table[i].cardname)
            }
            else {
                return true
            }
        }
        i++
    }
    return false
}

function win(text, win_price) {
    win_lose.style.display = "block"
    text_wl.innerText = "WIN !"
    win_hand.innerText = text + " " + win_price + " $"
    money_table.style.opacity="0"
}
function lose(lost_money) {
    win_lose.style.display = "block"
    text_wl.innerText = "LOSE !"
    win_hand.innerText = "- " + lost_money + " $"
    money_table.style.opacity="0"
}