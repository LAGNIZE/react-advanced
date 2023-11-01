import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from '../../../../../entities/User';

interface LoginByUserNameProps {
    username: string,
    password: string
}

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string}>('login', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', {
      username, password,
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
  }
});
