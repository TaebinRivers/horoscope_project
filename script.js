var horoscopeSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];



var images = [
    "img/aries.jpg", "img/taurus.jpeg", "img/gemini.jpeg", "img/cancer.jpg", "img/leo.jpg", "img/virgo.jpg", "img/libra.jpeg",
    "img/scorpio.jpg", "img/sagittarius.jpg", "img/capricorn.jpg", "img/Aquarius.jpg", "img/Pisces.jpeg"
];

var horoscopeFuture = [

    /*Aries*/ "Are you ready for a shakeup? The Wheel of Fortune indicates that one is coming. <br>" +
    "But don't be worried. Nothing is permanent. Including life.",
    /*Taurus*/ " watch your friends very closely, as you have a traitor in the mix.",
    /*Gemini*/ " You are bound to have a great year!!",
    /*Cancer*/ " check for tumors, you never know!",
    /*Leo*/ "I am sorry to say, You have an accident in the near future.",
    /*Virgo*/ "Hello, you will have a good day.",
    /*Libra*/ "You MUST show freedom from social conventions and traditional ideas.",
    /*Scorpio*/ "Scorpion are very scary, please be careful in the desert.",
    /*Sagittarius*/ "Sagittarians are born to explore, and it is critical that these archers have the freedom to roam. Don't roam too far though!",
    /*Capricorn*/ "This halloween, you must buy $30 worth of candicorn or else bad things will happen to you.",
    /*Aquarius*/ "Beware of the water, dangerous things lurk in the dark.",
    /*Pisces*/ "You are not Pablo Picasso, don't paint this month!"

];

function start() {

    var userMonth = document.getElementById('month').value;
    var userDay = document.getElementById('day').value;
    var userName = document.getElementById('name').value;
    var userSign = getSign(userDay, userMonth);
    console.log(userDay, userMonth, userName, userSign);
    document.getElementById("sign").innerHTML = horoscopeSigns[userSign];
    console.log(horoscopeFuture[userSign]);
    document.getElementById("img").src = images[userSign];
    var birthday = isBirthday(userMonth,userDay);
    if(userName.length >= 1){
        document.getElementById('future').innerHTML = birthday + " " + userName + ", " + horoscopeFuture[userSign];
    }else{
        document.getElementById('future').innerHTML =  horoscopeFuture[userSign];
    }

}



function getSign(day, month) {

    if(month == 2) {

        if(day <= 20) {

            return 11;

        }else if(day > 20) {

            return 0;

        }
    }
    if(month == 3){

        if(day <= 19) {

            return 0;

        }else if(day > 19) {

            return 2;
        }

    }
    if(month == 4) {

        if(day <= 20) {

            return 1;

        }else if(day > 20) {

            return 2;

        }
    }
    if(month == 5) {

        if(day <= 20) {

            return 2;

        }else if(day >20) {

            return 3;

        }

    }
    if(month == 6) {

        if(day <= 22) {

            return 3;

        }else if(day > 22) {

            return 4;

        }

    }
    if(month == 7){

        if(day <= 22){

            return 4;

        }else if(day > 22) {

            return 5;

        }

    }
    if(month == 8) {

        if(day <= 22) {

            return 5;

        }else if(day > 22) {

            return 6;

        }

    }
    if(month == 9) {

        if(day <=22) {

            return 6;

        }else if(day > 22) {

            return 7;
        }

    }if(month  == 10) {

        if(day <= 21){

            return 7;

        }else if(day > 21){

            return 8;

        }

    }
    if(month == 11) {

        if(day <= 21) {

            return 8;

        }else if(day > 21) {

            return 9;

        }

    }
    if(month == 0) {

        if(day <= 19) {

            return 9;

        }else if(day > 19) {

            return 10;
        }

    }
    if(month == 1) {

        if(day <= 18) {

            return 10;

        }else if(day > 18){

            return 11;

        }

    }


}
function isBirthday(month,day){
    var bday = "";
    var newDate = new Date();
    var actualDay = newDate.getDay();
    var actualMonth = newDate.getMonth();

    if(actualDay == day && month == actualMonth){

        bday = "Happy Birthday!"

    }
    return bday;
}

