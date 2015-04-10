function recursive_circle(x,y,size,org_size){
	
	if (size<=0.1*org_size){
	}
	else {

		color = "#3370d4"
		size = size*0.6
		alpha = draw_circle_with_alpha(x,y,size,color)
		recursive_circle(x,y,size,org_size)

	}	

return alpha

}

