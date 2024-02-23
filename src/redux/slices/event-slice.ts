import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface EventState {
  isOpenLeo: boolean
}

const initialState: EventState = {
  isOpenLeo: false
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setIsOpenLeo: (state: EventState, action: PayloadAction<boolean>) => {
      state.isOpenLeo = action.payload
    }
  }
})

export const { setIsOpenLeo } = eventSlice.actions

export default eventSlice.reducer
