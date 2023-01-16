import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  value: number = 0

  ngOnInit() {
    console.log(this.value)
  }

  valChanger(){
    this.value += 1
    console.log(this.value)
  }
}
