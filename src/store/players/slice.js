import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  results: [],
  loading: false,
  selected: [],
};

export const searchPlayer = createAsyncThunk(
  'players/searchStatus',
  async (q) => {
    try {
      if (q === '') {
        return;
      }
      const { data } = await api.get('players', {
        params: {
          player_name_like: q,
          _limit: 5,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const teamsSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    clearQuery(state) {
      return {
        ...state,
        results: [],
      };
    },
  },
  extraReducers: {
    [searchPlayer.pending]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [searchPlayer.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        results: payload,
      };
    },
    [searchPlayer.rejected]: (state) => {
      return {
        ...state,
        loading: false,
        results: [],
      };
    },
  },
});

export const { clearQuery } = teamsSlice.actions;
export default teamsSlice.reducer;
