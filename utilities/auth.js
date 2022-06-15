import axios from "axios";

const BACKEND_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const API_KEY = "AIzaSyADZ2a2b7J7At78GJkeT1ShzYvaiBxGc1Y";

export async function createUser(email, password) {
  console.log(BACKEND_URL + API_KEY);
  const response = await axios.post(BACKEND_URL + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
