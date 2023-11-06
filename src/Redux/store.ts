import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"

import {reducer as productReducer} from "./UserPage/reducer"
import {reducer as authReducer} from "./Auth/reducer";
import {reducer as adminReducer} from "./AdminPage/reducer";
export type RootState = {
    productReducer: {
      products: any[];
      isLoading: boolean;
      isError: boolean;
    }

  };
  

const rootReducer=combineReducers({
    productReducer,adminReducer,authReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))