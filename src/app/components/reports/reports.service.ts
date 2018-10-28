import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ReportsService {
    constructor(private http: HttpClient){}
    
    configUrl = './sample.json';

    getSampleData() {
        return this.http.get('./assets/data/sample.json');
    }
}