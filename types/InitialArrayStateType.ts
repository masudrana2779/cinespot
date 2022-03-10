import { IDoctorDashboard } from "../interface/IDoctorDashBoard";

export interface InitialStateArrayType{
    loading: boolean,
    data: any[],
    error: any
}

export interface InitialStateObjectType{
    loading: boolean,
    data: IDoctorDashboard,
    error: any
}