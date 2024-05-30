import { Component, DoCheck, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {

  constructor(private elem: ElementRef, private router: Router, private activeRoute: ActivatedRoute) {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  @ViewChildren('descImg') descImgs: QueryList<ElementRef>;
  @ViewChildren('benefit') benefits: QueryList<ElementRef>;
  @ViewChildren('utilImg') utilImgs: QueryList<ElementRef>;
  @ViewChildren('blogContainer') blogContainer: QueryList<ElementRef>;

  current_width = document.documentElement.clientWidth;
  lang = this.activeRoute.snapshot.paramMap.get('lang');

  ngOnInit(): void {
    setTimeout(() => {
      this.desc_gsap();
      this.benefits_gsap();
      this.util_gsap();
      this.blog_gsap();
    }, 100)

    this.activeRoute.paramMap.subscribe(param => {
      this.lang = param.get('lang');
      setTimeout(() => {
        this.desc_gsap();
        this.benefits_gsap();
        this.util_gsap();
        this.blog_gsap();
      }, 100)
    })
    let current_url = this.router.url;

    if(current_url.split('/')[1] != 'cz' && current_url.split('/')[1] != 'en') {
      let redir = current_url.split('/');
      redir[1] = 'en'
      this.router.navigate(redir);
    }
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

  benefits_gsap() {
    let benefits = this.benefits.map(elem => elem.nativeElement);
    benefits.forEach(benefit => {
      gsap.fromTo(benefit, {
        opacity: 0,
        y: 75
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: benefit,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
  }

  util_gsap() {
    let utils = this.utilImgs.map(elem => elem.nativeElement);
    utils.forEach(util => {
      gsap.fromTo(util, {
        opacity: .4,
        scale: .75
      }, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: util,
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
