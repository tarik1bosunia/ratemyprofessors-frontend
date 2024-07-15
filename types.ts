// types.ts

export interface School {
    id?: number;
    name_of_school: string;
    school_website: string;
    location: string;
    state: number; // Assuming state and country are referenced by their ID
    country: number;
    termsPrivacy: boolean;
  }

export interface Professor {
    id?: number;
    name_of_school: string;
    first_name: string,
    middle_name: string,
    last_name: string,
    department: Number,
    directory_listing_of_professor: string,
    termsPrivacy: boolean;
  }


  export interface Country {
    id: number;
    name: string;
  }
  
  export interface State {
    id: number;
    name: string;
    country: number; // Assuming each state is referenced by its country ID
  }

  export interface Department {
    id: number;
    name: string;
  }

  export interface ProfessorsTag {
    id: number;
    tag: string;
  }

  