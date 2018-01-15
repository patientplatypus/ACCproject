
console.log('inside the mutations file');

export const userObjnamepass = (state, {username, password}) => {
  state.userPass = password;
  state.userName = username;
  if (username===null&&password===null){
    state.userObj = null
  }
}
