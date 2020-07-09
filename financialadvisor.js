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
            qty: 1200,
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
    }
})

console.log(financialAdvisor.worth())