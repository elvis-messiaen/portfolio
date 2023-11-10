import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss']
})
export class CollaborationsComponent  implements OnInit{

  haut() {
    window.scrollTo(0,0);
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}
