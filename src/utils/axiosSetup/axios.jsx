import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDliZjkzMmE5YjAyNjM2MWM4NTk2NWIxYWNiNGMyMCIsIm5iZiI6MTcyMjg2Mjk0NS4zMTc3OTgsInN1YiI6IjY2YWU1MTY4OWU4OTU2MTI2ZGQ4ZTlkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SnKoVqpSIgsvAWPf2PI_Hh8RSRTlnYBXdTSMcsXoxto",
  },
});
export default axiosInstance;
