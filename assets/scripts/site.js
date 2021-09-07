
function setRandomQuote(quoteDivId) {
    if (quoteDivId == undefined) {
        quoteDivId = 'quotes-div';
    }
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    let quoteDiv = createQuoteDiv(quote);
    document.getElementById(quoteDivId).innerHTML = quoteDiv.outerHTML;
}

function createQuoteDiv(quote) {
    let div = document.createElement('div');
    div.className  = "quote";
    div.innerHTML = '<section class="quote-text">' + quote.text;
    div.innerHTML += "<span> - <strong>" + quote.author + "</strong>, " + quote.year + "</span>"
    div.innerHTML += "</section>";

    return div;
}

