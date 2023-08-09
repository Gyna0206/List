import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlApi ='http://localhost:3005/api/task/';

  constructor(private http:HttpClient) { }
  
  public getTasks():Observable<Item>{
    return this.http.get<Item>(this.urlApi)
  }
  guardarItem(item: Item) {
    const urlCREAR = `${this.urlApi}/create`;
    return this.http.post<Item>(urlCREAR, item); // Asumiendo que urlApi apunta a la URL para crear un nuevo item
  }
}
