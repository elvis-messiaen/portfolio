import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  haut() {
      window.scrollTo(0,0);
  }
}
