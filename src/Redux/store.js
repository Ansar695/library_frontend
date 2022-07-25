import { createStore } from "redux"
import { rootReducer } from "./features"

const store = createStore(rootReducer, {})

export default store