
var random_param = 2
function recursive_circle(x,y,size,org_size){
	
	if (size<=0.1*org_size){
	}
	else {

		color = "#3370d4"
		size = size*0.7
		alpha = draw_circle_with_alpha(x,y,size,color)
		recursive_circle(x,y,size,org_size)

	}	

return alpha

}

