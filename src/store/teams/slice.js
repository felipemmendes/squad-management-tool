import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  myTeams: [],
  picked: {},
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam(state, { payload }) {
      const newTeam = {
        id: nanoid(),
        ...payload,
      };
      const updatedTeams = [...state.myTeams, newTeam];
      return {
        ...state,
        myTeams: updatedTeams,
      };
    },
    removeTeam(state, { payload }) {
      const updatedTeams = [...state.myTeams].filter(
        (team) => team.id !== payload
      );
      return {
        ...state,
        myTeams: updatedTeams,
      };
    },
    editTeam(state, { payload }) {
      const teamIdx = state.myTeams.findIndex((t) => t.id === payload.id);
      const updatedTeams = [...state.myTeams];
      updatedTeams.splice(teamIdx, 1, payload);
      return {
        ...state,
        myTeams: updatedTeams,
      };
    },
  },
});

export const { addTeam, removeTeam, editTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
