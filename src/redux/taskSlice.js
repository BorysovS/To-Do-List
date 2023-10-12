import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, title: "Task 1",  message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam enim soluta illo placeat, voluptate ipsam accusantium sequi in perspiciatis ad numquam itaque beatae iste eius omnis! Totam, harum facere", isCompleted: true },
    { id: 1,title: "Task 2",  message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam enim soluta illo placeat, voluptate ipsam accusantium sequi in perspiciatis ad numquam itaque beatae iste eius omnis! Totam, harum facere", isCompleted: true },
    { id: 2,title: "Task 3",  message: "Master React", isCompleted: false },
    { id: 3,title: "Task 4",  message: "Discover Redux", isCompleted: false },
    { id: 4,title: "Task 5",  message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam enim soluta illo placeat, voluptate ipsam accusantium sequi in perspiciatis ad numquam itaque beatae iste eius omnis! Totam, harum facere", isCompleted: false },
  ];


  const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: initialState,
        isLoading: false,
    error: null,
    },
    reducers: {
        addTask: {
            reducer(state, action) {
              state.items.push(action.payload);
            },
          },
      deleteTask(state, action) {
        const index = state.items.findIndex(task => task.id === action.payload);
        state.items.splice(index, 1);
      },
      updateTask(state, action) {
        console.log(action)
        const { id, updatedTask } = action.payload;
        const taskToUpdate = state.items.find((task) => task.id === id);
        
  
        if (taskToUpdate) {
          Object.assign(taskToUpdate, updatedTask);
        }
      },
    },

  });
  
  export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
  export const tasksReducer = tasksSlice.reducer;