import { Dispatch, GetState } from '../reducers/types'

export const GET_QUEUE_LIST = 'GET_QUEUE_LIST';
export const ADD_QUEUE = 'ADD_QUEUE';

export const getQueue = () => {
  return async (dispatch: Dispatch, getState: GetState, { getFirestore }:any) => {
    const firestore = getFirestore();
    let today = new Date();
    const yesterday = new Date(today.setDate(today.getDate()-1));
    let payload = {}
    firestore.collection('queue')
      .where('createdAt', '>', yesterday).get().then((queue: any) => {
      queue.forEach((item: any) => {
        let id = item.id
        let value = item.data()
        value['id'] = id
        payload = Object.assign(payload, {[id]: value})
      })
      dispatch({ type: GET_QUEUE_LIST, payload})
    })
  }
}

export const addQueue = (queueItem: any) => {
  return async (dispatch: Dispatch, getState: GetState, { getFirestore }:any) => {
    const firestore = getFirestore();
    queueItem['status'] = 'Waiting';
    firestore.collection('queue').add({
      ...queueItem,
      createdAt: new Date()
    }).then((data: any) => {
      const newData = Object.assign({}, {'id': data.id}, queueItem)
      dispatch({ type: ADD_QUEUE, payload: newData});
    })
  }
};