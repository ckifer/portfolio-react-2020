import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { FirebaseReducer, firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { IAbout } from '../features/about/About';


interface Schema {
  about: IAbout
}

// export interface RootState {
//   firebase: FirebaseReducer.Reducer<{}, Schema>
//   // firestore: F
// }

// const reducers: Reducer<RootState> = {
//   firebase: firebaseReducer,
//   firestore: firestoreReducer as Reducer<RootState>,
//   router: routerReducer
// };

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
