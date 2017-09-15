$(document).ready(function() {


    function dis() {
        var $steel = $('#steel');
        var steelCorner = $steel.offset();
        var steelTop = steelCorner.top;
        var steelLeft = steelCorner.left;

        var $dollar = $('#dol1');
        var dolCorner = $dollar.offset();
        var dolTop = dolCorner.top;
        var dolLeft = dolCorner.left;

        console.log(dolLeft, steelLeft, dolLeft > steelLeft);
        if (dolLeft > steelLeft)
            $dollar.hide(400);
            $dollar.show();


    }
    var interval = setInterval(dis, 100);
});

// $('#dol1')
//     var x = Math.floor(Math.random() * 100);
//     if (x < 99) {
//         $("x").(function(){
//             $("x").load("#dol1");
//         });
//
//     }
// });

//
// var $arrow = $('#arrow');
// var arrowCorner =  $arrow.offset();
// var arrowTop = arrowCorner.top;
// var arrowLeft = arrowCorner.left;