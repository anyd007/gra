$(document).ready(function () {

    function Pacman() {
        this.handle;
        var _position = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0
        }
    }


    var dol1 = '.dol1';
    var dol2 = '.dol2';
    var dol3 = '.dol3';
    var dol4 = '.dol4';
    var dol5 = '.dol5';
    var moneySpeed = 8000;
    var lotterySpeed = 1000;
    var WalletDiv = document.createElement('div');
    WalletDiv.className = 'wall1';
    var Interval = setInterval(lottery, lotterySpeed);


// // level hard
// //     setTimeout(function () {
// //
// //         return moneySpeed = 3000;
// //     }, 5000);
//     setTimeout(function () {
//         moneySpeed = 4000;
//         lotterySpeed = 500;
//     }, 45000);


    // podstawianie nowych div
    function lottery() {
        var dollars = ['dol1', 'dol2', 'dol3', 'dol4', 'dol5'];
        var random = Math.floor(Math.random() * 10) +1;
        console.log(random);
// losowanie div z usówaniem
        var dollarDiv;

        if (random <= 3) {
            dollarDiv = document.createElement('div');
            dollarDiv.className = 'dol1 money';
            (document.querySelector('.dollars')).appendChild(dollarDiv);

            dol1 = $(".dol1").animate({left: '94%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });
        }
        else if (random <= 5) {
             dollarDiv = document.createElement('div');
            dollarDiv.className = 'dol2 money';
            (document.querySelector('.dollars')).appendChild(dollarDiv);

            dol2 = $(".dol2").animate({left: '94%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });
        }
        else if (random <= 7) {
            dollarDiv = document.createElement('div');
            dollarDiv.className = 'dol3 money';
            (document.querySelector('.dollars')).appendChild(dollarDiv);

            dol3 = $(".dol3").animate({left: '90%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });

        }
        else if (random <= 9){
             dollarDiv = document.createElement('div');
            dollarDiv.className = 'dol4 money';
            (document.querySelector('.dollars')).appendChild(dollarDiv);

            dol4 = $(".dol4").animate({left: '95%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });

        }
      else {
            dollarDiv = document.createElement('div');
            dollarDiv.className = 'dol5 money';
            (document.querySelector('.dollars')).appendChild(dollarDiv);
            dol5 = $(".dol5").animate({left: '93%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });
        }
    }
});

