import { GET_TOKEN } from "../actions/types";
import axios from "axios";

export const getToken = (payload) => {
    return {
        type: GET_TOKEN,
        payload,
    };
};
