import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  value: number = 0
  height: string = "4em"

  valChanger() {
    this.value += 1
  }
  
  heightChanger() {
    this.height = this.height == "4em" ? "10em" : "4em" 
  }
}
