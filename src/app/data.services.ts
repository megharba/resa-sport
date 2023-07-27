//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const users =[
        {id:1,name:"Bruno"},
        {id:2,name:"Marc"},
        {id:3,name:"Auriane"}
    ]

    const products =[
        {id:1,name:"Hotel 1", price:45},
        {id:2,name:"Hotel 2", price:15},
        {id:3,name:"Hotel 3",price:15}
    ]

    const reservations =[
        {id:1,userid:1, productid:2},
        {id:2,userid:2, productid:1},
        {id:3,userid:3, productid:3}
    ]
    return {users,products,reservations};
  }
}