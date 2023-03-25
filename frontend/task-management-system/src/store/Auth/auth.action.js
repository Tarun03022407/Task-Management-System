import axios from "axios";
import * as types from "./auth.actionTypes";
export const login = ()=>async(dispatch,creds)=>{
  dispatch({type:types.LOGIN_LOADING})

  try {
   let data= fetch("http://localhost:4400/admin/login", {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
    dispatch({type:types.LOGIN_SUCCESSFUL,payload:data})
  } catch (error) {
    dispatch({type:types.LOGIN_ERROR,payload:error.message})
  }
}