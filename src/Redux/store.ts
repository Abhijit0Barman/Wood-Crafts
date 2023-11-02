import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"

import {reducer as productReducer} from "./UserPage/reducer"

export type RootState = {
    productReducer: {
      products: any[];
      isLoading: boolean;
      isError: boolean;
    };

  };
  

const rootReducer=combineReducers({
    productReducer
})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))