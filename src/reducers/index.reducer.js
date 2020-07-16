const reducer1 = (state = {}, action) => {
    switch (action.type) {
      case 'MENU_ITEMS_RECEIVED':
           console.log("reducerrr>>>>>>>>>>");
           return { ...state, menuList: action.json, orderedList:[], totalCost: 0 };
      case 'ADD_ITEM':
               let orderedListTemp =  state.orderedList;
               let selectedItem = action.payload;
               let tot = state.totalCost;
               tot  = tot + selectedItem.cost;   
               if(orderedListTemp.length === 0){
                    selectedItem.count++;
                    //quantity cost
                    selectedItem.itemAmntCost = selectedItem.count * selectedItem.cost;
                    orderedListTemp.push(selectedItem);
               }
               else{
                    let tempIte = Array.isArray(orderedListTemp) && orderedListTemp.find(el => { if(el.id ==selectedItem.id){
                    el && el.count && el.count++;
                    el.itemAmntCost = el.count * el.cost;
                    return true;
                    }});

                    if(!tempIte){
                    selectedItem.count++;
                    selectedItem.itemAmntCost = selectedItem.count * selectedItem.cost;
                    orderedListTemp.push(selectedItem);
                    }
               }
           return { ...state, orderedList: orderedListTemp, totalCost: tot};

      default: 
           return state;
    }
   };
   export default reducer1;