export default function (items, threshold){

    let itemsOverThreshold = [];
    for (let i = 0; i<items.length; i++){
        var loopedItems = items[i];
          if(loopedItems.qty>threshold){
          itemsOverThreshold.push(loopedItems)
                                        }
        }
      return itemsOverThreshold
    }