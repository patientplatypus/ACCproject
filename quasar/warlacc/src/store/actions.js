

console.log('inside the actions file');


import axios from 'axios'
import store from './index'


export const userObjnamepass = ({ commit }, {username, password, type}) => {
  console.log('inside userObjnamepass and username, password, type is ', username, " ", password, " ", " ", type);
  commit('userObjnamepass',{username, password, type})
}

// export const sendUser = ({ commit }, {username, password, type}) => {
//
//   commit('sendUser',{username, password, type})
// }
