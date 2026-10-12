import { Component } from '@angular/core';
import { ThrillermoviesService } from 'src/app/services/thrillermovies.service';

@Component({
  selector: 'app-thrillermovies',
  templateUrl: './thrillermovies.component.html',
  styleUrls: ['./thrillermovies.component.css']
})
export class ThrillermoviesComponent {
  thrillermovies: any[] = [];
  constructor(private service: ThrillermoviesService) { }
  ngOnInit(){
    this.service.fetchThrillermovies().subscribe((data) => {
      this.thrillermovies = data;
    });
  }

}
