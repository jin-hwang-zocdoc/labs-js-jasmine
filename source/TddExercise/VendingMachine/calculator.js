VendingMachine = function() {
    this.currentAmount = 0.0;
    this.coinUnit = [ 25, 10, 5, 1 ];
    this.coinCounts = [ 10, 10, 10, 10 ];
    this.products = {
        "SevenUp" : 1,
        "Monster" : 2.75,
        "Gatorade": 2.5,
    }
}

VendingMachine.prototype = {
    insertCoin: function(coinType) {

    },

    displayAmount: function() {
        return this.currentAmount;
    },

    selectProduct: function(productName) {
    },


    processCommand: function(ui) {
        switch (ui.parameter("command")) {
            case "insertCoin":
                var coinType = ui.parameter("value");
                // Insert Coin
                ui.writeLine("Coin " + coinType + " is inserted");
                break;
            case "selectProduct":
                var productName = ui.parameter("value");
                // Select product
                break;
            case "purchaseProduct":
                var productName = ui.parameter("value");
                ui.writeLine("Purchased " + productName);
                break;
            case "returnChange":
                ui.writeLine("Return Change");

        }
    },
};