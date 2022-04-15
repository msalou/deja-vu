import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, from} from 'rxjs';
import { Card } from '../models/card';
import { catchError, map } from 'rxjs/operators';
import { Cloudinary } from '@cloudinary/angular-5.x';
import CloudinaryConfiguration from '../cloudinary.config'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiTag: string = CloudinaryConfiguration.api_tag;

  constructor(private http: HttpClient, private cloudinary: Cloudinary) { }
  
  getCards(): Observable<Card[]> {

    let _urlCardsLocal: string = "../assets/data/cards.json";

    let _urlCards = this.cloudinary.url(this.apiTag, {
      format: 'json',
      type: 'list'
    })

    return this.http.get(_urlCards).pipe(catchError(this.handleError)).pipe(map((data: any) => data.resources));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}