// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    var richness = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var sum = {};

    if(currency > 10000){
        return richness;
    }

    for(var i = 0; i < Object.keys(coins).length; i++) {
        if (Math.floor(currency / coins.H) > 0) {
            sum.H = Math.floor(currency / coins.H);
            currency -= Math.floor(currency / coins.H) * coins.H;
        } else if(Math.floor(currency / coins.Q) > 0){
            sum.Q = Math.floor(currency / coins.Q);
            currency -= Math.floor(currency / coins.Q) * coins.Q;
        } else if(Math.floor(currency / coins.D) > 0){
            sum.D =  Math.floor(currency / coins.D);
            currency -= Math.floor(currency / coins.D) * coins.D;
        }else if(Math.floor(currency / coins.N) > 0){
            sum.N = Math.floor(currency / coins.N);
            currency -= Math.floor(currency / coins.N) * coins.N;
        }else if(Math.floor(currency / coins.P) > 0){
            sum.P = Math.floor(currency / coins.P);
            currency -= Math.floor(currency / coins.P) * coins.P;
        }
    }
    return sum;
}
