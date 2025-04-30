import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-prapplicationoject-details',
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.scss'
})
export class ApplicationDetailsComponent {


  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {  
    

  }
}
