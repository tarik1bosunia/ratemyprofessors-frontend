import { jwtDecode } from "jwt-decode";

interface GoogleJwtResponse {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
}

export const decodeJwtResponse = (token: string): GoogleJwtResponse => {
  return jwtDecode(token);
};