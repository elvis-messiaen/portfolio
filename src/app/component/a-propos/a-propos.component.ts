import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent implements OnInit{

    constructor(private router: Router) {}
  ngOnInit(): void {
  }

  redirect() {
      this.router.navigate(['/contact'])
  }
}
