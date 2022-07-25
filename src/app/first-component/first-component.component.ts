import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { IHero, IStarWars } from './hero';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  constructor(private dService: DataService) { }
  heroName: string = "";
  heroAge: string = '';
  imgUrl: string = "";
  search: string = "";
  message  = '';
  randomClicked: boolean = false;
  searched: Array<IHero> = [];
  display = false;
  ngOnInit(): void {
    this.searched = this.dService.getDataService();
  }

  createHero() {
    if (this.heroName  && this.heroAge  && this.imgUrl ) {
      this.dService.addDataService(this.heroName, this.heroAge, this.imgUrl);
      this.heroName = '';
      this.heroAge = '';
      this.imgUrl = '';
      this.message = 'A hero has been created!'
      this.display = true;
      setTimeout( () => {
        this.display = false;
      }, 3000);
    } else {
      this.message = 'There are empty fields'
      this.display = true;
      setTimeout( () => {
        this.display = false;
      }, 3000);
    }

  }
  searchHero() {
    this.searched = this.dService.searchHeroService(this.search);
  }
  removeItem(removeName: string) {
    return this.dService.removeItemService(removeName);
  }
}


