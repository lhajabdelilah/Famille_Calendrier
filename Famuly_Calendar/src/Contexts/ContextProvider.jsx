import { createContext, useState } from "react";

const stateContext = createContext({
  user: null,
  token: null
});
 const [user, setUser] = useState( {
    initialState :null
 });

 const [token,_setToken]= useState(localStorage.getItem('ACCESS_TOKEN'));
 const setToken = (token)=>{
    _setToken(setToken);
    if(token){
        localStorage.setItem('ACCESS_TOKEN',token)
    }else{
        localStorage.removeItem('ACCESS_TOKEN')
    }

 }
export const ContextProvider = ({ children }) => {
  // Your implementation here
  return(
    <stateContext.Provider value={{
user,
token,
setUser,
setToken
    }}>
{children}
    </stateContext.Provider>
  )
};


