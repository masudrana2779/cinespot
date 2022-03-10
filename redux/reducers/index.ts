import { combineReducers } from "redux";
import { doctorDashboardReducer } from "../../components/doctor/redux/reducer";
import { callerInfoReducer, callReducer } from "../../xmpp/redux/reducer";

export default combineReducers({
  callReducer,
  callerInfoReducer,
  doctorDashboardReducer,
});
