
import { Injectable} from "@angular/core";
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { HomeBuilds } from "./app/homepage/build card/build-list";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private db: AngularFireDatabase){

    }

    getHomeBuilds() {
        return this.db.list<HomeBuilds[]>("https://pc-part-picker-dc160-default-rtdb.firebaseio.com/builds.json");
    }
    getHomeBuild() {
        return this.db.list<HomeBuilds>("builds").valueChanges();
    }
    
}


