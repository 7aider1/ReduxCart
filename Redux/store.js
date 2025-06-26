import { configureStore } from "@reduxjs/toolkit";
import { data } from "./mainData";

const store = configureStore({
    reducer: { data }
});
export default store;
