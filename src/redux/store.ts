import themeReducer from './slices/theme-slice'
import eventReducer from './slices/event-slice'
import profileReducer from './slices/profile-slice'
import screenerReducer from '@/ScreenerModule/screener-slice'
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      event: eventReducer,
      screener: screenerReducer,
      profile: profileReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// export const wrapper = createWrapper<AppStore>(makeStore)
