import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: false,

  /*   {
    "alpha_two_code": "US",
    "web_pages": [
    "http://www.marywood.edu"
    ],
    "state-province": null,
    "name": "Marywood University",
    "domains": [
    "marywood.edu"
    ],
    "country": "United States"
    }, */
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  if (!JSON.parse(localStorage.getItem("s10g4"))) return [];
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return {
        ...state,
        favs: [...state.favs, state.current],
      };

    case FAV_REMOVE:
      const newArr = state.favs.filter((e) => e.id !== action.payload);
      return {
        ...state,
        favs: [...newArr],
      };

    case FETCH_SUCCESS:
      toast.success("Yükleme başarılı");
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
