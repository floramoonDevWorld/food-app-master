import { put, takeEvery, all } from 'redux-saga/effects';
function* fetchMenuItems() {
  const data = yield fetch('http://127.0.0.1:5500/mock/mockData.json')
        .then(response => response.json(), );    
  yield put({ type: "MENU_ITEMS_RECEIVED", json: data });
}
function* actionWatcher() {
     yield takeEvery('GET_MENU_ITEMS', fetchMenuItems);
}
export default function* rootSaga() {
  console.log("in saga>>");
   yield all([
   actionWatcher(),
   ]);
}