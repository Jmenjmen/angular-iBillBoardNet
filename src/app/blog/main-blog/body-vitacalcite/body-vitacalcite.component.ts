import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-vitacalcite',
  templateUrl: './body-vitacalcite.component.html',
  styleUrl: './body-vitacalcite.component.css'
})
export class BodyVitacalciteComponent implements OnInit {

  constructor(private shareSv: ServiceService) {
    
  }

  lang = '';
  subs: Subscription;

  async ngOnInit() {
    this.subs = this.shareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
    })
  }

  current_width = document.documentElement.clientWidth;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe()
    }
  }

}
