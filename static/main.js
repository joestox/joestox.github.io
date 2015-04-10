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





function draw_circle_with_alpha(x,y,radius,color){

    alpha = Math.pow(0.97,0.5*radius)

    ctx.save();
    ctx.globalAlpha = alpha;
    draw_circle(x,y,radius,color)
    ctx.restore();

    return alpha

}


function draw_circle(x,y,radius,color){

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,false);
    ctx.arc(x,y,radius*0.85,0,2*Math.PI, true);
    ctx.closePath();
    ctx.fill();

}




$(document).ready(function(){

    initialize_canvas()
    clear_canvas()


    $("body").click(function(event){  
        ripple_list.push({"x":event.pageX,"y":event.pageY,"multiplier":1})
        $(".outer").fadeOut('slow')
        $("#footer").fadeIn(10000)
    })

    function sleep_loop(){

        clear_canvas()

        for(var i in ripple_list){

            alpha = recursive_circle(ripple_list[i].x, ripple_list[i].y, 1+ripple_list[i].multiplier,1+ripple_list[i].multiplier)
            ripple_list[i].multiplier = ripple_list[i].multiplier + Math.pow(ripple_list[i].multiplier,1/3)

            if (alpha < 0.015){
                ripple_is_gone = true
                removal_num = removal_num + 1
            }

        }

        if (ripple_is_gone){
            ripple_list = ripple_list.splice(1, removal_num);
            ripple_is_gone = false
        }

        console.log(ripple_list.length)

        setTimeout(sleep_loop, 40)

    }


    
    var multiplier = 0
    var ripple_list = []
    var removal_num = 0
    var ripple_is_gone = true
    sleep_loop()


});