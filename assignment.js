
/**===========================================================================
 code site:
 https://github.com/Oalidabdulla/Assignment-3
=============================================================================*/



/**-------- Assignment 3-1 (kilometerToMeter) --------*/

// 01 kilometer is equal to 1,000 meters.

function kilometerToMeter(kilometer){
    const meter = kilometer * 1000;  
    return meter;
}
var meter = kilometerToMeter(5);
console.log(meter);


/**-------- Assignment 3-2 (budgetCalculator) -------- */

function budgetCalculator(clock, phone, laptop){
    const price = clock * 50;
    const price1 = phone * 100;
    const price2 = laptop * 500;
    const total = price + price1 + price2;
    return total; 
}
const price = budgetCalculator(6, 6, 6);
console.log(price);


/**-------- Assignment 3-3 (hotelCost) -------- */

function hotelCost(cost) {
    var days = 0;
    if(cost <= 10) {
        days = cost * 100;
    }
    else if (cost <= 20) {
        var days10 = 10 * 100;
        var update = cost - 10;
        var days20 = update * 80;
        var days = days10 + days20;  
    }
    else {
        var days10 = 10 * 100;
        var days20 = 10 * 80;
        var update = cost - 20;
        var daysUnlimited = update * 50; 
        var days = days10 + days20 + daysUnlimited;
    }
    return days;
}
var total = hotelCost(26);
console.log(total);


/**-------- Assignment 3-4 (megaFriend) -------- */

function megaFriend(str) {
    const strArray = str;
    const sortedStrArray = strArray.sort(
        (strA, strB) => {
            return strB.length - strA.length;
        }
    );
    return sortedStrArray[0];
}
const str = ['oalid', 'mothin', 'alu', 'abdulla'];
const megaName = megaFriend(str);
console.log(megaName);