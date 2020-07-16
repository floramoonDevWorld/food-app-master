 const getMenuItems = () => ({
    type: 'GET_MENU_ITEMS',
});
const addItem = (itemList) => ({
    type: 'ADD_ITEM',
    payload: itemList
});
const updateTotCost = (totCost) => ({
    type: 'UPDTE_TOT_COST',
    payload: totCost
});
export {getMenuItems, addItem, updateTotCost};