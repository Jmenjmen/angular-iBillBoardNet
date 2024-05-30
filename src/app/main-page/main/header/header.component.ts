import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  current_width = document.documentElement.clientWidth;
  @Output() id = new EventEmitter<string>();

  open_menu = false;

  constructor(private elem: ElementRef, private activeroute: ActivatedRoute) {

  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  lang = this.activeroute.snapshot.paramMap.get('lang');

  ngOnInit() {
    this.videoCheck();
    this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }

  async videoCheck() {
    let video = this.elem.nativeElement.querySelector('video');
    if(!(!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2))) {
      video.play();
      console.log('video must be played')
      await this.sleep(1000);
      this.videoCheck();
    }
    return 0;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
  }

  sendId(id:any) {
    this.id.emit(id);
  }


  open() {
    this.open_menu = !this.open_menu;
  }

}
