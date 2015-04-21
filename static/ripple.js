function recursive_circle(x,y,size,multiplier){
	
	if (multiplier*Math.pow(size,2) - 1 <= 0){
	}

	else {

		color = "#3370d4"
		size = Math.pow(size,2 - (multiplier/2000))

		alpha = draw_circle_with_alpha(x,y,size,color,multiplier)
		recursive_circle(x,y,size,multiplier)

	}	

	return alpha

}




