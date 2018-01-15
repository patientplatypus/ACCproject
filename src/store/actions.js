

console.log('inside the actions file');


import axios from 'axios'
import store from './index'


export const userObjnamepass = ({ commit }, {username, password}) => {

  commit('userObjnamepass',{username, password})
}
