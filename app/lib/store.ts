import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from '@/app/lib/redux/commentSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            comments: commentsReducer,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']