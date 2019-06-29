fetch('tarotkey.json')
    .then(response => response.json())
    .then(cards => {
        const shuffledCards = _.shuffle(cards);
        const card1 = shuffledCards.pop();
        const card2 = shuffledCards.pop();
        const card3 = shuffledCards.pop();

        $('#card-1').text(card1.text);
        $('#card-2').text(card2.text);
        $('#card-3').text(card3.text);
    })