declare type RootState = ReturnType<typeof import('../store/').getState>;
declare type AppDispatch = typeof import('../store').dispatch;