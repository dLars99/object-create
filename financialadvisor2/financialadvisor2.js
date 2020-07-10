// Black Hat Advanced Challenge: Hiring More Advisors
// Refactor object and use prototypal inheritance to create three more advisors

const financialAdvisor = Object.create(null, {
    company: {
        value: "NSS",
        enumerable: true,
        writable: true
    },
    worth: {
        get: function() {
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
    toString: {
        value: function() {
            const totalWorth = this.worth.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            return `${this.name} is an advisor at ${this.company}. Current portfolio value is US$ ${totalWorth}`
        }
    }
})

// Create array for rendering to the DOM
let advisors = []

const ScroogeMcDuck = Object.create(financialAdvisor, {
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
    }
})

const WarrenBuffett = Object.create(financialAdvisor, {
    specialty: {
        value: "Oracle of Omaha",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Warren Buffett",
        enumerable: true
    },
    portfolio: {
        value: [{
            ticker: "KO",
            qty: 51000,
            price: 44.88,
            buyTransaction: true
        },
        { 
            ticker: "BRK", 
            qty: 150000,
            price: 274000,
            buyTransaction: true
        },
        {
            ticker: "LUV",
            qty: 15000,
            price: 35.67,
            buyTransaction: false
        }],
        writable: true
    }
})

const SvenSvorgen = Object.create(financialAdvisor, {
    specialty: {
        value: "Google",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Sven Svorgen",
        enumerable: true
    },
    portfolio: {
        value: [{
            ticker: "GOOG",
            qty: 100,
            price: 827.45,
            buyTransaction: true
        },
        { 
            ticker: "GOOG", 
            qty: 100,
            price: 946.25,
            buyTransaction: true
        },
        {
            ticker: "GOOG",
            qty: 100,
            price: 1010.10,
            buyTransaction: true
        },
        {
            ticker: "LUV",
            qty: 100,
            price: 35.67,
            buyTransaction: false
        }],
        writable: true
    }
})

const EdnaAdne = Object.create(financialAdvisor, {
    specialty: {
        value: "Penny Stocks",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Edna Adne",
        enumerable: true
    },
    portfolio: {
        value: [{
            ticker: "ZYX",
            qty: 10000,
            price: .45,
            buyTransaction: true
        },
        { 
            ticker: "AOL", 
            qty: 4500,
            price: .82,
            buyTransaction: true
        },
        {
            ticker: "LOL",
            qty: 5670,
            price: 1.15,
            buyTransaction: true
        },
        {
            ticker: "AA",
            qty: 2000,
            price: .52,
            buyTransaction: false
        }],
        writable: true
    }
})

advisors.push(ScroogeMcDuck, WarrenBuffett, SvenSvorgen, EdnaAdne)

advisors.forEach(advisor => {
    
    const displayAdvisor = document.createElement("div")
    displayAdvisor.innerHTML = `<h2>${advisor.name}</h2>
    <p><strong>Company: </strong>${advisor.company}</p>
    <p><strong>Specialty:</strong> ${advisor.specialty}</p>`
    document.body.appendChild(displayAdvisor)
      
    advisor.portfolio.forEach(stock => {
        const stockDiv = document.createElement("div")
        stockDiv.innerHTML = stock.buyTransaction ? `Stock: ${stock.ticker}  Value: ${stock.qty * stock.price}` : null
        displayAdvisor.insertAdjacentElement("beforeend",stockDiv)
    })

    displayAdvisor.innerHTML += advisor.toString()
})