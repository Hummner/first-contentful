import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Contentful {
  private baseUrl =
    `https://cdn.contentful.com/spaces/${environment.contentful.spaceId}7gx9zwim96hh/environments/master`;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any>(
      `${this.baseUrl}/entries`,
      {
        params: {
          content_type: 'post',
          order: '-fields.publishedAt'
        },
        headers: {
          Authorization: `Bearer ${environment.contentful.deliveryToken}`
        }
      }
    );
  }
}
  

