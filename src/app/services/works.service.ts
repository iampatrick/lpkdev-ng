import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

    constructor(private http: HttpClient) { }

    getAllWorks() {
        return this.http
            .get('/data/works.json');
    }
}
