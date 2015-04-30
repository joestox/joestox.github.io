var canvas
var ctx

function initialize_canvas(){

    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    ctx = canvas.getContext("2d");

}


function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00B2EE"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}





function draw_circle_with_alpha(ripple){


    // alpha = 1-(ripple.multiplier/200)
    alpha = 1

    ctx.save();
    ctx.globalAlpha = alpha;
    draw_circle(ripple)
    ctx.restore();


    return alpha

}







function draw_circle(ripple){


    ctx.fillStyle = ripple.color;
    ctx.beginPath();

    radius_list = get_circle_sizes(ripple.multiplier*ripple.size)

    ctx.arc(ripple.x,ripple.y,radius_list[0],0,2*Math.PI,false);
    ctx.arc(ripple.x,ripple.y,radius_list[1],0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();

}




function get_circle_sizes(s){

    s_small = s - 1
    return [s, s_small]
}








$(document).ready(function(){

    initialize_canvas()
    clear_canvas()


    $("body").click(function(event){  

        ripple_list.push({"x":event.pageX,
                          "y":event.pageY,
                          "size":0.99,
                          "multiplier":100,
                          "color":"#3370d4",
                          "size0":0.99,
                          "exp":2,
                         })
        $(".outer").fadeOut('slow')
        $("#footer").fadeIn(10000)

        sleep_loop()

    })

    function sleep_loop(){

        clear_canvas()

        for(var i in ripple_list){

            ripple = ripple_list[i]
            alpha = recursive_circle(ripple)
            ripple.multiplier = ripple.multiplier + 10
            ripple.size = ripple.size0
            ripple.exp = ripple.exp * 0.95


            if (alpha < 0.015){
                ripple_is_gone = true
                removal_num = removal_num + 1
            }

        }

        if (ripple_is_gone){
            ripple_list = ripple_list.splice(1, removal_num);
            ripple_is_gone = false
        }

        setTimeout(sleep_loop, 300)

    }


    
    var multiplier = 0
    var ripple_list = []
    var removal_num = 0
    var ripple_is_gone = false
    // sleep_loop()





});