//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote: `“Life begins at the end of your comfort zone.”`,
    person: `Neale Donald Walsch`
}, {
    quote: `“Two things define you: Your patience when you have nothing and your attitude when you have everything.”`,
    person: `Imam Ali`
}, {
    quote: `“The journey of a thousand miles begins with a single step.”`,
    person: `Lao Tzu`
}, {
    quote: `"The greatest pleasure in life is doing what people say you cannot do."`,
    person: `Walter Bagehot`
}, {
    quote: `"“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”`,
    person: `Earl Nightingale`
}, {
    quote: `"You don’t have to be great to start, but you have to start to be great."`,
    person: `Zig Ziglar`
}, {
    quote: `"A river cuts through rock, not because of its power, but because of its persistence.."`,
    person: ` Jim Watkins`
}, {
    quote: `"If it is important to you, you will find a way. If not, you’ll find an excuse."`,
    person: `Ryan Blair`
}, {
    quote: `"If people are not laughing at your goals, your goals are too small"`,
    person: ` Azim Premji`
}, {
    quote: `“Great minds discuss ideas. Average minds discuss events. Small minds discuss people.”`,
    person: `Eleanor Roosevelt`
}, {
    quote: `“An entire sea of water can’t sink a ship unless it gets inside the ship. Similarly, the negativity of the world can’t put you down unless you allow it to get inside you.”`,
    person: `Goi Nasu`
},];
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})