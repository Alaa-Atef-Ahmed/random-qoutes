var arrOfQuotes = [
{
    quote:"“Be yourself; everyone else is already taken.”",
    author:"― Oscar Wilde"
},

{
    quote:"“A room without books is like a body without a soul.”",
    author:"― Marcus Tullius Cicero"
},

{
    quote:"“You only live once, but if you do it right, once is enough.”",
    author:"― Mae West"
},

{
    quote:"“Be the change that you wish to see in the world.”",
    author:"― Mahatma Gandhi"
},

{
    quote:"“A friend is someone who knows all about you and still loves you.”",
    author:"― Elbert Hubbard"
},

{
    quote:"“Always forgive your enemies; nothing annoys them so much.”",
    author:"― Oscar Wilde"
},
];
document.getElementById('btn').onclick = randomQuote;
    var last=null;

function randomQuote()
{
do{
    var randomIndex = Math.floor(Math.random()*arrOfQuotes.length)
}
while( last == randomIndex);
last = randomIndex;

console.log(randomIndex)
    document.getElementById('quote').innerHTML = arrOfQuotes[randomIndex].quote;
    document.getElementById('author').innerHTML = arrOfQuotes[randomIndex].author;
    
}