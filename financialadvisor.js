/* Instructions: create an object that represents a financial advisor.
The property requirements are specified in the chapter */

const financialAdvisor = Object.create(null, {
    company: {
        value: "NSS",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Wild speculation",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Scrooge McDuck",
        enumerable: true
    },
    portfolio: {
        value: [{
            ticker: "AMZN",
            qty: 1000,
            price: 1047.98,
            buyTransaction: true
        },
        { 
            ticker: "DUCK", 
            qty: 4500,
            price: 1.27,
            buyTransaction: true
        },
        {
            ticker: "MCD",
            qty: 1500,
            price: 87.34,
            buyTransaction: true
        },
        {
            ticker: "LUV",
            qty: 1201,
            price: 35.67,
            buyTransaction: false
        }],
        writable: true
    },
    worth: {
        value: function() {
            return this.portfolio.reduce((acc, cur) => {
                if (cur.buyTransaction) {
                    return acc + (cur.qty * cur.price)
                } else {
                   return acc - (cur.qty * cur.price)
                }
            }, 0)
        }
    },
    purchase: {
        value: function(ticker, qty, price) {
            this.portfolio.push({
                ticker: ticker,
                qty: qty,
                price: price,
                buyTransaction: true
            })
        }
    },
    sell: {
        value: function(ticker, qty, price) {
            this.portfolio.push({
                ticker: ticker,
                qty: qty,
                price: price,
                buyTransaction: false
            })
        }
    },

    // Challenge: Advisor.toString()
    // Add a toString() method that outputs a specified message
    toString: {
        value: function() {
            const totalWorth = this.worth().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            return `${this.name} is an advisor at ${this.company}. Current portfolio value is US$ ${totalWorth}`
        }
    }
})

// Challenge: Fragments and Elements
// 1. Use document.createElement to build and display an HTML element
const displayAdvisor = document.createElement("div")
displayAdvisor.innerHTML = `<h2>${financialAdvisor.name}</h2>
<p><strong>Company: </strong>${financialAdvisor.company}</p>
<p><strong>Specialty:</strong> ${financialAdvisor.specialty}</p>`
document.body.appendChild(displayAdvisor)

// 2. Iterate over the advisor's portfolio and use documents.createDocumentFragment to display some HTML componenets
// let fragment = document.createDocumentFragment()

financialAdvisor.portfolio.forEach(stock => {
    const stockDiv = document.createElement("div")
    stockDiv.innerHTML = stock.buyTransaction ? `Stock: ${stock.ticker}  Value: ${stock.qty * stock.price}` : null
    displayAdvisor.insertAdjacentElement("beforeend",stockDiv)
})

displayAdvisor.innerHTML += financialAdvisor.toString()