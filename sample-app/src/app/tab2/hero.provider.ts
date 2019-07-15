import { Observable } from 'rxjs';
import { Hero } from './hero.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroProvider {
    constructor(public http: HttpClient) {
        
    }
    public getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>("http://localhost:3000/api/heroes");
    }
}