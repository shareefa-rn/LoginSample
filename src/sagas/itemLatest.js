import {call, put, takeLatest} from 'redux-saga/effects';
import {ApiHelper} from '../helpers';
import itemSlice from '../features/item/itemSlice';

const {requestLatest, success, failure} = itemSlice;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;
    response = yield call(callGetRequest, payload.uri, {});
    yield put(success(response));
  } catch (ex) {
    yield put(failure(err?.message));
  }
}

export default function* root() {
  yield takeEvery(requestLatest, watchRequest);
}
