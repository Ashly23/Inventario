import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GlobalEndPointService {

  constructor(
    private http: HttpClient
  ) { }

  //Consultar al backend
  Delete(id:number, url: string){
    return this.http.delete(`${environment.backend}${url}/${id}`);
  }
  PatchId(){
  }
  PutId(){

  }
  Get(){

  }
  GetId(){

  }
  Post(){

  }
}
