import { createContext, useState } from "react";

// Step 1: Create the context
export const FormContext = createContext();

// Step 2: Create the provider component
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
