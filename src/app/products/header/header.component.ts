import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private ShareSv: ServiceService) {

  }

  lang = '';
  subscription: Subscription;
  
  @Input() product = '';
  @Output() id = new EventEmitter<string>();

  current_url = '';
  open_menu = false;
  display_products_bool = false;

  async ngOnInit() {
    this.current_url = this.router.url;
    this.current_url = this.current_url.split('#')[0];

    this.subscription = await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer
    })
  }

  sendId(id:any) {
    this.id.emit(id);
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
