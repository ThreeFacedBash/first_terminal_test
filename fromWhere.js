export default function (plateNo){
	if (plateNo.startsWith("CY")){
		return "Bellville"}
 	else if (plateNo.startsWith("CJ")){
		return "Paarl"}
  	else if (plateNo.startsWith("CA")){
		return "Cape Town"}
    else {return "Some other place!"}
} 