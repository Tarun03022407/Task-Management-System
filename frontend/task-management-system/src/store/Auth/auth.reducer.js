// import { 
//   LOGIN_LOADING ,
//   LOGIN_SUCCESS,
//   LOGIN_ERROR,
//   LOGOUT
// }from "./auth.types";

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESSFUL, LOGOUT } from "./auth.actionTypes"

const token = localStorage.getItem("token")|| ""
const initialState= {
  loading:false,
  error:false,
  isAuth : token ? true :false, //or !!token 
  token:token
}
export const authReducer = (state=initialState,{type,payload})=>{
  switch(type){
      case LOGIN_LOADING:{
          return {
              ...state,
              loading:true,
              error:false
          }
      } 
      case LOGIN_SUCCESSFUL :{
          localStorage.setItem("token",payload.token)
          return {
              ...state,
              loading:false,
              isAuth:true,
              token:payload.token,
          }
      }
      case LOGIN_ERROR :{
          return {
              ...state,
              loading:false,
              error:true

          }
      }
      case LOGOUT:{
          localStorage.removeItem("token")

          return {
              ...state,
              isAuth:false,
              token:""

          }
      }
  
      default:{
          return state
      }
  }
}