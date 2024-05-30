import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren, viewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  current_width = document.documentElement.clientWidth;

  constructor(private elem: ElementRef, private router: Router, private ShareSv: ServiceService) {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  lang = '';
  current_url = '';

  @ViewChildren('descImg') descImgs: QueryList<ElementRef>;
  @ViewChildren('valueImg') valueImgs: QueryList<ElementRef>;
  @ViewChildren('valueText') valueTexts: QueryList<ElementRef>;
  @ViewChildren('history_titleDesctop') hs_title_desc: QueryList<ElementRef>;
  @ViewChildren('history_titleMobile') hs_title_mob: QueryList<ElementRef>;
  @ViewChildren('blogContainer') blogContainer: QueryList<ElementRef>;

  async ngOnInit() {
    this.current_url = this.router.url;
    this.current_url = this.current_url.split('#')[0];

    setTimeout(() => {
      this.desc_gsap();
      this.value_gsap();
      this.history_gsap();
      this.blog_gsap();
    }, 100)

    await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer;
      setTimeout(() => {
        this.desc_gsap();
        this.value_gsap();
        this.history_gsap();
        this.blog_gsap();
      }, 100)
    })

  }

  desc_gsap() {
    let desc_imgs = this.descImgs.map(elem => elem.nativeElement);
    desc_imgs.forEach(img => {
      gsap.fromTo(img, {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
  }

  value_gsap() {
    let value_imgs = this.valueImgs.map(elem => elem.nativeElement);
    let value_texts = this.valueTexts.map(elem => elem.nativeElement);
    value_imgs.forEach(img => {
      gsap.fromTo(img, {
        x: -500
      }, {
        x: 0,
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })

    value_texts.forEach(text => {
      gsap.fromTo(text, {
        x: 500
      }, {
        x: 0,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
  }

  history_gsap() {
    let title_desc = this.hs_title_desc.map(e => e.nativeElement);
    let title_mob = this.hs_title_mob.map(e => e.nativeElement);

    title_desc.forEach((title, index) => {
      gsap.fromTo(title, {
        opacity: .3,
        x: (index < 2) ? -200 : 200
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })

    title_mob.forEach(title => {
      gsap.fromTo(title, {
        opacity: .3,
        y: 75
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
  }

  blog_gsap() {
    let blog_containers = this.blogContainer.map(element => element.nativeElement);
    blog_containers.forEach(container => {
      gsap.fromTo(container, {
        opacity: 0,
        y: 50
      } ,{
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
    console.log(this.current_width)
  }

  scrollFN(id: any) {
    console.log(id, 'scroll fn');
    let top_event = this.elem.nativeElement.querySelector(`#${id}`);
    let offsetTop = top_event.getBoundingClientRect().top + window.pageYOffset;

    console.log(offsetTop)
    if(id == 'history') {
      window.scrollTo({
        top: (offsetTop - 50),
        behavior: 'smooth'
      })
    } else if (id == 'map') {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: (offsetTop - 100),
        behavior: 'smooth'
      })
    }
  }
}
