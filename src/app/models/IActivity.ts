import { IRegister } from '../models/IRegister';

export interface IActivity{
    id : number
    name : string
    description : string
    startDate : string
    endDate : string
    maxGuest : number
    isCancel : boolean
    creatorId : number
    creator : IRegister
}