import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public cards = []; 

  constructor(private _feedService: FeedService) { }

  ngOnInit(): void {
    this._feedService.getCards().subscribe(data => this.cards = data);
  }

}
