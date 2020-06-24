function submitStock() {
    const stockURL = document.querySelector('.stock-input').value;
    fetch('http://localhost:3000/stocks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            stockURL
        })
    })
}

function newEl(type, attrs = {}) {
    const el = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        if (attr == 'innerText') el.innerText = value;
        else el.setAttribute(attr, value);
    }
    return el;
}

async function loadStocks() {
    const res = await fetch('http://localhost:3000/stocks');
    const stocks = await res.json();

    const ctr = document.querySelector('.container');

    stocks.forEach(stock => {
        const card = newEl('div', {
            class: 'card'
        });
        const title = newEl('h1', {
            innerText: stock.name
        });
        const price = newEl('h4', {
            innerText: stock.price
        });
        const ratio = newEl('h4', {
            innerText: stock.ratio
        });
        const opinion = newEl('h4', {
            innerText: stock.opinion
        });
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(ratio);
        card.appendChild(opinion);
        ctr.appendChild(card);
    })
}

loadStocks();