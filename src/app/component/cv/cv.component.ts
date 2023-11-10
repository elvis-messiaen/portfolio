import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit{

  haut() {
    window.scrollTo(0,0);
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}
