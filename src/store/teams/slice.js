import { createSlice, nanoid } from '@reduxjs/toolkit';
import { concatPlayers, concatRemovePlayers } from '../../utils/concatPlayers';

const initialState = {
  myTeams: [],
  pickedPlayers: {},
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam(state, { payload }) {
      const players = Object.values(payload.playersFormation).map((player) => ({
        name: player.name,
        id: player.id,
        age: player.age,
      }));

      const ageAvg = players.length
        ? players.reduce((acc, { age }) => {
            return (acc += age);
          }, 0) / players.length
        : 0;

      const newTeam = {
        id: nanoid(),
        ...payload,
        players,
        ageAvg: (Math.round(ageAvg * 10) / 10).toFixed(1),
      };

      const newPickedPlayers = concatPlayers(state.pickedPlayers, players);

      return {
        ...state,
        myTeams: [...state.myTeams, newTeam],
        pickedPlayers: newPickedPlayers,
      };
    },
    removeTeam(state, { payload }) {
      const { players } = state.myTeams.find((team) => team.id === payload);

      const newPickedPlayers = concatRemovePlayers(
        state.pickedPlayers,
        players
      );

      const updatedTeams = [...state.myTeams].filter(
        (team) => team.id !== payload
      );

      return {
        ...state,
        myTeams: updatedTeams,
        pickedPlayers: newPickedPlayers,
      };
    },
    editTeam(state, { payload }) {
      const teamIdx = state.myTeams.findIndex((t) => t.id === payload.id);

      const players = Object.values(payload.playersFormation).map((player) => ({
        name: player.name,
        id: player.id,
        age: player.age,
      }));

      const ageAvg = players.length
        ? players.reduce((acc, { age }) => {
            return (acc += age);
          }, 0) / players.length
        : 0;

      const updatedTeam = {
        ...payload,
        players,
        ageAvg: (Math.round(ageAvg * 10) / 10).toFixed(1),
      };

      const updatedTeams = [...state.myTeams];
      updatedTeams.splice(teamIdx, 1, updatedTeam);

      const newPickedPlayers = concatPlayers(state.pickedPlayers, players);

      return {
        ...state,
        myTeams: updatedTeams,
        pickedPlayers: newPickedPlayers,
      };
    },
  },
});

export const { addTeam, removeTeam, editTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
