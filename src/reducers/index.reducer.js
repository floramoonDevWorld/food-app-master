const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_ITEMS_LIST':
           return { ...state, loading: true };
      case 'ITEM_ADDED':
           return { ...state, news: action.json[0], loading: false }
      default: 
           return state;
    }
   };
   export default reducer;