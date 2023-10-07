import {createSlice} from '@reduxjs/toolkit';

export const recentSlice = createSlice({
	name: 'recent',
	initialState: {
		value: [],
	},
	reducers: {
		addRecent: (state, action) => {
			if (state.value.length === 6) {
				state.value.shift();
			}
			state.value.push(action.payload);
		},
		resetRecent: (state) => {
			state.value = [];
		},
	},
});

export const {addRecent, resetRecent} = recentSlice.actions;

export default recentSlice.reducer;
