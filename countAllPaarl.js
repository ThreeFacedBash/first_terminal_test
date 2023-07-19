export default function (regNumbers) {
    regNumbers = regNumbers.split(', ')
      var paarlQuantity = []
         for (let i = 0; i<regNumbers.length; i++){
               var loopedPlates = regNumbers[i]
            if (loopedPlates.startsWith("CJ")){
                paarlQuantity.push(loopedPlates)}
            }   
        //paarlQuantity = paarlQuantity.length
        return paarlQuantity.length
     }
    