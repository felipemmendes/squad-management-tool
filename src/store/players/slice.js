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
    setPlayers(state, { payload }) {
      const players = Object.values(payload).map((player) => player.id);
      return {
        ...state,
        selected: players,
      };
    },
    selectPlayer(state, { payload }) {
      return {
        ...state,
        selected: [...state.selected, payload],
      };
    },
    clearSelected(state) {
      return {
        ...state,
        selected: [],
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

export const {
  clearQuery,
  setPlayers,
  selectPlayer,
  clearSelected,
} = teamsSlice.actions;
export default teamsSlice.reducer;
