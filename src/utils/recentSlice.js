import {createSlice} from '@reduxjs/toolkit';

export const recentSlice = createSlice({
	name: 'recent',
	initialState: {
		value: [],
		ids: [],
	},
	reducers: {
		addRecent: (state, action) => {
			if (state.value.length === 7) {
				state.value.shift();
				state.ids.shift();
			}

			if (state.ids.includes(action.payload.idDrink)) {
				return;
			}
			state.ids.push(action.payload.idDrink);
			state.value.push(action.payload);
		},
		resetRecent: (state) => {
			state.value = [];
		},
	},
});

export const {addRecent, resetRecent} = recentSlice.actions;

export default recentSlice.reducer;
