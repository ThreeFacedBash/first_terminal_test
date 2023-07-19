export default function (items){

    let over20Items = [];
        for(let i = 0; i<items.length; i++){
          var loopedItems = items[i];
          if(loopedItems.qty>20){
            over20Items.push(loopedItems)
          }
        
        }
     return over20Items
    }