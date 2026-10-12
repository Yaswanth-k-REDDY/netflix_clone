import { Component } from '@angular/core';
import { KdramasService } from 'src/app/services/kdramas.service';

@Component({
  selector: 'app-kdramas',
  templateUrl: './kdramas.component.html',
  styleUrls: ['./kdramas.component.css']
})
export class KdramasComponent {
  kdramas: any[] = [];
  constructor(private service: KdramasService) { }
  ngOnInit(){
    this.service.fetchKdramas().subscribe((data) => {
      this.kdramas = data;
    });
  }

}