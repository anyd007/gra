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
    var moneySpeed = 8000;
    var lotterySpeed = 1000;
    var WalletDiv = document.createElement('div');
    WalletDiv.className = 'wall1';
    // WalletDiv.animation = $('.wall1').animate({left:'88%', opacity: 'show'}, 5000, function () {
    // });
    var Interval = setInterval(lottery, lotterySpeed);

// level hard
    // setTimeout(function () {
    //     return moneySpeed = 6000;
    // }, 30000);
    // setTimeout(function () {
    //     moneySpeed = 4000;
    //     lotterySpeed = 500;
    // }, 45000);

    // podstawianie nowych div
    function lottery() {
        var dollars = ['dol1', 'dol2', 'dol3', 'dol4'];
        var random = Math.floor(Math.random() * 10);
        console.log(random);

        var dollarDiv1 = document.createElement('div');
        dollarDiv1.className = 'dol1';
        (document.querySelector('.dollars')).appendChild(dollarDiv1);

        var dollarDiv2 = document.createElement('div');
        dollarDiv2.className = 'dol2';
        (document.querySelector('.dollars')).appendChild(dollarDiv2);

        var dollarDiv3 = document.createElement('div');
        dollarDiv3.className = 'dol3';
        (document.querySelector('.dollars')).appendChild(dollarDiv3);

        var dollarDiv4 = document.createElement('div');
        dollarDiv4.className = 'dol4';
        (document.querySelector('.dollars')).appendChild(dollarDiv4);

// losowanie div z usówaniem
        if (random <= 2.5) {
            dol1 = $(".dol1").animate({left: '94%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });
        }
        else if (random <= 5) {
            dol2 = $(".dol2").animate({left: '94%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });
        }
        else if (random <= 7.5) {
            dol3 = $(".dol3").animate({left: '90%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });

        }
        else {
            dol4 = $(".dol4").animate({left: '95%', opacity: "show"}, moneySpeed, function () {
                $(this).remove();
            });

        }
    }

});

