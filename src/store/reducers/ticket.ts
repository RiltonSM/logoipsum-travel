import { createSlice } from "@reduxjs/toolkit";

export const ticket = createSlice({
    name: 'ticket',
    initialState: {
        list: [] as any[],
        filteredList: [] as any[],
        page: 1,
        pageItens: [] as any[],
        localFilter: "",
        priceFilter: {
            max: 0,
            min: 0
        },
        clearFilter: false
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
            state.filteredList = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;

            const initialItem = (action.payload * 10) - 10;
            const finalItem = (action.payload * 10);

            state.pageItens = state.filteredList.slice(initialItem, finalItem);
        },
        setLocalFilter: (state, action) => {
            state.localFilter = action.payload;
        },
        setPriceFilter: (state, action) => {
            state.priceFilter = action.payload;
        },
        getFilteredList: (state) => {
            let newFilteredList: any[] = state.list

            if(state.localFilter.length > 0) {
                newFilteredList = newFilteredList.filter((ticketItem: any) => {
                    return ticketItem.location.toUpperCase() === state.localFilter.toUpperCase()
                });
            }

            if(state.priceFilter.max !== 0) {
                newFilteredList = newFilteredList.filter((ticketItem: any) => {
                    return ticketItem.price >= state.priceFilter.min 
                        && ticketItem.price <= state.priceFilter.max
                })
            }

            state.filteredList = newFilteredList
        },
        setClearFilters: (state, action) => {
            state.clearFilter = action.payload
        }
    }
});

export const { setList, setPage, getFilteredList, setLocalFilter, setPriceFilter, setClearFilters } = ticket.actions;

export default ticket.reducer;