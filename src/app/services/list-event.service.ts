import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from '../models/IActivity';


@Injectable({
  providedIn: 'root'
})
export class ListEventService {
  
  token : string | null = sessionStorage.getItem('token')
  private _url : string = 'https://localhost:7245/api/Activity/';
  constructor(private _httpClient : HttpClient) { }


  getAll() : Observable<IActivity[]> {
    return this._httpClient.get<IActivity[]>(this._url+"NextActivities");
  }

  getAllInscrit() : Observable<IActivity[]> {
    this.token= sessionStorage.getItem('token')
    return this._httpClient.get<IActivity[]>(this._url+"MyActivities", { headers : { 'Authorization' : 'Bearer ' + this.token  }} );
  }

  getEventbyId(id : number) : Observable<IActivity>{
    return this._httpClient.get<IActivity>(this._url+id);
  }

  delete(id : number) : Observable<IActivity>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.delete<IActivity>(this._url+id , { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }

  update(id : number , event : IActivity) : Observable<IActivity>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.put<IActivity>(this._url+id , event  ,{ headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }

  cancel(id : number ) : Observable<IActivity>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.patch<IActivity>(this._url+id+"/Cancel" ,{}, { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }


  create(event : IActivity ) : Observable<IActivity>{
    this.token= sessionStorage.getItem('token')
    return this._httpClient.post<IActivity>('https://localhost:7245/api/Activity' ,event, { headers : { 'Authorization' : 'Bearer ' + this.token  }});
  }

}
