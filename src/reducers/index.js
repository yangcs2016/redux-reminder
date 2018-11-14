import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../constants'
import {bake_cookie,read_cookie} from 'sfcookies'

const reminder=(action)=>{
  return {
    id:Math.random(),
    text:action.text,
    dueDate:action.dueDate    
  }
}
const remiders= (state =read_cookie('reminders')||[], action={}) => {
  let remiders=null
  switch (action.type) {
    case ADD_REMINDER:
    remiders=[
      ...state,
      reminder(action)
    ]
    bake_cookie('reminders',remiders)
    return remiders
    case DELETE_REMINDER:
    remiders=state.filter(reminder=>reminder.id!==action.id)
    bake_cookie('reminders',remiders)
    return remiders
    case CLEAR_REMINDER:
    remiders=[]
    bake_cookie('reminders',remiders)
    return remiders
  default:
    return state
  }
}
export default remiders;

