function recursive_circle(ripple){

	// console.log(ripple.multiplier)
	// console.log(ripple.size)
	

	// if (ripple.multiplier*Math.pow(ripple.size,2) - 1 <= 0){
	if (ripple.multiplier*Math.pow(ripple.size,2) - 1 <= 0.1*ripple.multiplier*ripple.size0){
	}

	else {


		

		ripple.size = Math.pow(ripple.size,ripple.exp)
		
		// ripple.size = Math.log(ripple.size)
		// ripple.size = Math.log(ripple.size + 1)
		// ripple.size = -Math.pow(ripple.size - 1,2) + 1
		// console.log(ripple.size,2 - ripple.size)

		alpha = draw_circle_with_alpha(ripple)
		recursive_circle(ripple)

	}	

	return alpha


}




