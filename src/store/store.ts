import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import classesReducer from '../reducers/classesReducer';
import modulesReducer from '@/reducers/modulesReducer';
import coursesReducer from '@/reducers/coursesReducer';
import usersReducer from '@/reducers/usersReducer';
import authReducer from '@/reducers/authReducer';

export const store = configureStore({
  reducer: {
    classes: classesReducer,
    modules: modulesReducer,
    courses: coursesReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
