import { configureStore, ThunkAction, Action, Reducer } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { FirestoreReducer, firestoreReducer } from 'redux-firestore';
import { IAbout } from '../features/about/About';
import { IEducation } from '../features/education/Education';
import { IExperience } from '../features/experience/Experience';
import { ISkills } from '../features/skills/Skills';
import themeSlice from '../features/theme/themeSlice';
import { NavigationItem } from '../types';

interface Schema {
  about: IAbout;
  experience: IExperience;
  education: IEducation;
  headerItems: NavigationItem;
  skills: ISkills;
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer as Reducer<FirestoreReducer.Reducer<Schema>>,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
