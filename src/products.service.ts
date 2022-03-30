
import { Injectable} from "@angular/core";
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { BuildItemModel } from "./app/homepage/build card/build-item-model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private db: AngularFireDatabase){

    }

     getHomeBuilds() {
         return this.db.list<BuildItemModel[]>("https://pc-part-picker-dc160-default-rtdb.firebaseio.com/builds.json");
     }
    getHomeBuild() {
        return this.db.list<BuildItemModel>("builds").valueChanges();
    }
    public addProduct(product:BuildItemModel){
       this.db.list<BuildItemModel>("builds").push(product);
    }
    
}


