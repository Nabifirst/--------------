import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosApi, todosApi1, todosApi2, todosApi3,  } from '../api/todos'
import todoSlice from '../reducers/todoSlice'
// ...

export const store = configureStore({
  reducer: {
    todos: todoSlice,

    [todosApi.reducerPath]: todosApi.reducer,
    
    [todosApi1.reducerPath]: todosApi1.reducer,

    [todosApi2.reducerPath]: todosApi2.reducer,

    [todosApi3.reducerPath]:todosApi3.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware , todosApi1.middleware , todosApi2.middleware, todosApi3.middleware ),
  
  
  // middleware:(getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(todosApi1.middleware),
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch