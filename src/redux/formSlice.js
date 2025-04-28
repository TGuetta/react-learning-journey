import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;

// The above code defines a Redux slice for managing form state in a React application.
// It includes an initial state with three fields: name, email, and message.
// The `updateField` reducer updates the state based on the action payload.
// This slice can be used in a Redux store to manage form data across the application.
// The `updateField` action can be dispatched from components to update the form state.
// This allows for a centralized way to manage form data, making it easier to handle complex forms and maintain state consistency across different components.
// The slice can be integrated with React components using the `useDispatch` and `useSelector` hooks from React Redux.
// This allows components to read the form state and dispatch actions to update it.
// The slice can be further extended with additional reducers or middleware for more complex form handling, such as validation or submission logic.
// The slice can be combined with other slices in a Redux store to create a complete state management solution for the application.
