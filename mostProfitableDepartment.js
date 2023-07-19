export default function (salesKeyPairs){
    let sumOfDepartments = {};
    
        for(let i = 0; i<salesKeyPairs.length; i++){
        let sales = salesKeyPairs[i].sales
        let dept = salesKeyPairs[i].department
      //  console.log(dept)
       if(sumOfDepartments[dept]){ //if a dept is present in created object
           sumOfDepartments[dept] += sales //then add relative sales to it
        }
       else{ //if it does not exist then the department
       sumOfDepartments[dept] = sales}
        
         }
   //console.log(sumOfDepartments)
     
    let profitableDept = ""
    let sumOfProfit =0
    
    
       for (var dept in sumOfDepartments){
       if (sumOfDepartments[dept] > sumOfProfit){
       sumOfProfit = sumOfDepartments[dept]
        profitableDept = dept}
        }
    return profitableDept
     //
   //console.log(profitableDept + ": " +sumOfProfit)
   }