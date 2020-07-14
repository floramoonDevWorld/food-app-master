const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'MENU_ITEMS_RECEIVED':
           console.log("reducerrr>>>>>>>>>>");
           return { ...state, menuList: action.json };
      case 'ITEM_ADDED':
           return { ...state, news: action.json[0] }
      default: 
           return state;
    }
   };
   export default reducer;