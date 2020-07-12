import { PatientActions } from '../types/Patient'
import { ADD_NEW_PATIENT, EDIT_PATIENT, DELETE_PATIENT } from '../actions/patient';


export default function patient (state = {}, action: PatientActions) {
  switch(action.type) {
    case ADD_NEW_PATIENT:
      console.log('add patient success')
      return {
        ...state,
        patients: action.payload
      };
    case 'GET_PATIENT_LIST':
      console.log('get patient list', action.payload)
      return {
        ...state,
        patients: action.payload
      };
    case EDIT_PATIENT:
      console.log('update patient success')
      return {
        ...state,
        patients: action.payload
      };
    case DELETE_PATIENT:
        console.log('delete patient success')
        return {
          ...state,
          patients: action.payload
        };  
    default:
      return state;
  }
}