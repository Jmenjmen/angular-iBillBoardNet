import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrl: './main-blog.component.css'
})
export class MainBlogComponent {

  constructor(private viewportScroller: ViewportScroller, private activeroute: ActivatedRoute, private router: Router, private shareSv: ServiceService) {}

  lang = this.activeroute.snapshot.paramMap.get('lang');
  current_url = this.router.url;


  ngOnInit(): void {
    if(this.lang == null) {
      this.router.navigate(['cz'])
      window.location.reload()
    } else if(this.lang != 'cz' && this.lang != 'en') {
      if(this.current_url.length == 3) {
        this.router.navigate([`cz`, `blog`, `${this.current_url.split('/')[this.current_url.split('/').length - 1]}`])
        window.location.reload()
      } else {
        this.router.navigate([`cz`, `blog`])
        window.location.reload()
      }
    }

    this.shareSv.giveAnswer(this.lang!);
  }

}
