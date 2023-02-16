import React,{useState} from 'react';


const AuthContext=React.createContext({
  token:'',
  isLoggedIn:false,
  login:(token)=>{},
  logout:()=>{},
})

export const AuthContextProvider=(props)=>{


const initialToken=localStorage.getItem('token');


// setTimeout(()=>{
//   localStorage.clear();
// },5000*60)
// console.log('settime out active')


const [token,setToken]=useState(initialToken);

const userIsLoggedIn =!!token;

const loginHandler=(token)=>{
  setToken(token)
  localStorage.setItem('token',token);
  
};

const logoutHandler=()=>{
  setToken(null)
  localStorage.removeItem('token');
  
};

const contextValue={
  token:token,
  isLoggedIn:userIsLoggedIn,
  login:loginHandler,
  logout:logoutHandler,
}


return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;
