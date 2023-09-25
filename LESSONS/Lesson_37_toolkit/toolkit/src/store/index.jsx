import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice';  //возможно использование при импорте другого имени переменной, если прописан export default todoSlice.reducer;

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});