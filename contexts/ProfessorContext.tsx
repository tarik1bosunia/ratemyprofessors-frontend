import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

// Define the types for the context
interface ProfessorContextType {
  selectedProfessor: any; // You can replace `any` with your specific professor type
  setSelectedProfessor: Dispatch<SetStateAction<any>>;
}

// Initialize the context with `undefined` so you can enforce the correct type later
const ProfessorContext = createContext<ProfessorContextType | undefined>(undefined);

// Custom hook to use ProfessorContext
export const useProfessor = () => {
  const context = useContext(ProfessorContext);
  if (!context) {
    throw new Error("useProfessor must be used within a ProfessorProvider");
  }
  return context;
};

// Provider component
export const ProfessorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProfessor, setSelectedProfessor] = useState<any>(null); // Replace `any` with your professor type

  return (
    <ProfessorContext.Provider value={{ selectedProfessor, setSelectedProfessor }}>
      {children}
    </ProfessorContext.Provider>
  );
};
