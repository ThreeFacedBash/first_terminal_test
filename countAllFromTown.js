export default function (regNo, locatorId){
    regNo = regNo.split(',')
      var sameTown = []
       for(let i = 0; i<regNo.length; i++){
          var loopedReg = regNo[i].trim()
          console.log(regNo[i])
          if(loopedReg.startsWith(locatorId)){
          sameTown.push(loopedReg)}
      }
      return sameTown.length
      
    }