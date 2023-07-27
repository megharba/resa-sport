//src/app/data.services.ts

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const users =[
        {id:1,name:"Bruno", pwd: "AZERTY"},
        {id:2,name:"Marc", pwd: "AZERTY"},
        {id:3,name:"Auriane", pwd: "AZERTY"}
    ]

    const products =[
        {id:1,name:"COURS DE 100% ABDOS À SAINT-PRIEST", price:45, desc:"Un cours de yoga pour se détendre et se recentrer. Cette séance vous propose un voyage vers une harmonie intérieure en combinant des postures fluides et gracieuses avec des techniques de respiration apaisantes. Laissez-vous emporter par une exploration méditative du corps et de l'esprit, favorisant l'équilibre, la flexibilité et la sérénité. Que vous soyez débutant ou pratiquant chevronné, ce cours est conçu pour vous permettre de libérer les tensions, de calmer votre esprit agité et de renforcer votre connexion avec vous-même. Rejoignez-nous pour un moment de détente profonde et d'apaisement, qui vous laissera revitalisé(e) et ressourcé(e). Venez profiter de ce moment privilégié pour cultiver la paix intérieure et la conscience du moment présent."},
        {id:2,name:"COURS DE BOXING À SAINT-PRIEST", price:45, desc:"Un cours de yoga pour se détendre et se recentrer. Cette séance vous propose un voyage vers une harmonie intérieure en combinant des postures fluides et gracieuses avec des techniques de respiration apaisantes. Laissez-vous emporter par une exploration méditative du corps et de l'esprit, favorisant l'équilibre, la flexibilité et la sérénité. Que vous soyez débutant ou pratiquant chevronné, ce cours est conçu pour vous permettre de libérer les tensions, de calmer votre esprit agité et de renforcer votre connexion avec vous-même. Rejoignez-nous pour un moment de détente profonde et d'apaisement, qui vous laissera revitalisé(e) et ressourcé(e). Venez profiter de ce moment privilégié pour cultiver la paix intérieure et la conscience du moment présent."},
        {id:3,name:"YOGA À SAINT-PRIEST",price:15,desc:"Un cours de yoga pour se détendre et se recentrer. Cette séance vous propose un voyage vers une harmonie intérieure en combinant des postures fluides et gracieuses avec des techniques de respiration apaisantes. Laissez-vous emporter par une exploration méditative du corps et de l'esprit, favorisant l'équilibre, la flexibilité et la sérénité. Que vous soyez débutant ou pratiquant chevronné, ce cours est conçu pour vous permettre de libérer les tensions, de calmer votre esprit agité et de renforcer votre connexion avec vous-même. Rejoignez-nous pour un moment de détente profonde et d'apaisement, qui vous laissera revitalisé(e) et ressourcé(e). Venez profiter de ce moment privilégié pour cultiver la paix intérieure et la conscience du moment présent."}
    ]

    const reservations =[
        {id:1,userid:1, productid:2,reservationDate:"23-08-2023",reservationTime:"14:34"},
        {id:2,userid:2, productid:1,reservationDate:"01-08-2023",reservationTime:"14:34"},
        {id:3,userid:3, productid:3,reservationDate:"07-08-2023",reservationTime:"14:34"}
    ]

    return {users,products,reservations};
  }
}
