//first problem "kilometer to meter"
function kilometerToMeter(kilometer){
    if(kilometer<0){
        console.log("Distance can not be negative. So it'll be converted to positive number.")
        var negativeToPositive = Math.abs(kilometer);
        var meter = negativeToPositive * 1000;
    }
    else{
        var meter = kilometer * 1000;
    }
    return meter;
}
var output = kilometerToMeter(0.5);
console.log(output);

//second roblem Budget Calculator
function budgetCalculator(watch, mobile, laptop){
    if(watch>=0 && mobile>=0 && laptop>=0){
        let sum = 0;
        watch = watch * 50;
        mobile = mobile * 100;
        laptop = laptop * 500;
        sum = watch + mobile + laptop;
        return sum;
    }
    else{
        return "It can not be negative";
    }
}
var output = budgetCalculator(2,5,7);
console.log(output);

// Third problem "Hotel Cost"
function hotelCost(days){
    let price = 0;
    if(days>=0){
        if(days <= 10){
            price = days * 100;
        }
        else if(days<= 20){
            let firstPart = 10*100;
            let remaining = days - 10;
            let secondPart = remaining * 80;
            price = firstPart + secondPart;
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = days - 20;
            var thirdPart = remaining * 50;
            price = firstPart + secondPart + thirdPart;
        }
    }
    else{
        return "Days can not be negative";
    }
    return price;
}
var output = hotelCost(21);
console.log(output);

//Forth problem "mega friend"
function megaFriend(friends){
    var nameMax = friends[0].length;
    for(var i =0; i<friends.length; i++){
        var friendName = friends[i].length;
        if(friendName>nameMax){
            nameMax = friends[i].length;
            var max = friends[i];
        }
    }
    return max;
}
var friends = ['promy', 'mahi','humaira','nilima', 'sanjida khanom', 'bonna'];
var output = megaFriend(friends);
console.log(output);