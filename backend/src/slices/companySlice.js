import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCompanies } from '../../services/api';

export const getCompanies = createAsyncThunk('companies/fetch', async () => {
    const response = await fetchCompanies();
    return response.data;
});

const companySlice = createSlice({
    name: 'companies',
    initialState: { companies: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCompanies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCompanies.fulfilled, (state, action) => {
            state.loading = false;
            state.companies = action.payload;
        });
    },
});

export default companySlice.reducer;
