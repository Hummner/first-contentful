import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contentful } from './services/contentful';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('first-contentful');

  contentfulService = inject(Contentful)


  ngOnInit(): void {
    this.contentfulService.getPosts().subscribe({
      next: (res) => console.log("Contentful OK: ", res)
      
    }
      
    )
  }
}
