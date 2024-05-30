import { AfterViewChecked, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

import Swiper from 'swiper';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements AfterViewChecked, OnInit {

  constructor(private elem: ElementRef, private activeroute: ActivatedRoute) {
    
  }

  lang = this.activeroute.snapshot.paramMap.get('lang');

  current_width = document.documentElement.clientWidth;

  slides = 2;

  @ViewChild('lamp') lamp: ElementRef;
  @ViewChild('technology') technology: ElementRef;
  @ViewChild('techImage') techImage: ElementRef;


  @ViewChildren('product') productElem: QueryList<ElementRef>;
  @ViewChildren('certificateTitle') certificateTitle: QueryList<ElementRef>;
  @ViewChildren('certificateLogo') certificateLogo: QueryList<ElementRef>;
  @ViewChild('sertificate') sertificate: ElementRef;
  @ViewChildren('blogContainer') blogContainer: QueryList<ElementRef>;
  @ViewChildren('map') map: QueryList<ElementRef>;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.products_gsap();
    this.technology_gsap();
    this.sertificate_gsap();
    this.blog_gsap();
    this.map_gsap();

    this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang');
      this.products_gsap();
      this.technology_gsap();
      this.sertificate_gsap();
      this.blog_gsap();
      this.map_gsap();
    })

  }

  products_gsap() {
    setTimeout(() => {
      let productsElem = this.productElem.map(element => element.nativeElement);
    productsElem.forEach(product => {
      gsap.fromTo(product, {
        opacity: 0,
        y: 50
      } ,{
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: product,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      })
    })
    }, 100)
  }

  technology_gsap () {
    setTimeout(() => {
      gsap.fromTo(this.lamp.nativeElement, {
        opacity: 0
      }, {
        opacity: 1,
        scrollTrigger: {
          trigger: this.technology.nativeElement,
          start: 'top bottom',
          end: 'center center',
          scrub: true
      }
    });
    gsap.fromTo(this.techImage.nativeElement, {
      opacity: 0,
      x: -200,
      y: 50
    }, {
      opacity: 1,
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: this.technology.nativeElement,
          start: 'top bottom',
          end: 'center center',
          scrub: true
      }
    })

  }, 100)
  }

  sertificate_gsap() {
    setTimeout(() => {
      let sertifiLogo = this.certificateLogo.map(element => element.nativeElement);
      let sertifiTitle = this.certificateTitle.map(element => element.nativeElement);
      sertifiLogo.forEach(logo => {
        gsap.fromTo(logo, {
          x: 1000
        }, {
          x: 0,
          scrollTrigger: {
            trigger: this.sertificate.nativeElement,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })

      sertifiTitle.forEach(title => {
        gsap.fromTo(title, {
          x: -1000
        }, {
          x: 0,
          scrollTrigger: {
            trigger: this.sertificate.nativeElement,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

  blog_gsap() {
    setTimeout(() => {
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
    }, 100)
  }

  map_gsap() {
    setTimeout(() => {
      let maps = this.map.map(element => element.nativeElement);
      maps.forEach(map => {
        gsap.fromTo(map, {
          opacity: 0,
          x: -100
        }, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: map,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
    if(this.current_width > 1175 && this.current_width < 1200) {
      this.technology_gsap()
    } else if (this.current_width <= 1175 && this.current_width > 1100) {
      this.technology_gsap()
    } else if (this.current_width < 1100 && this.current_width > 980) {
      this.blog_gsap()
    }
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

  ngAfterViewChecked(): void {
    let swiper_testimonails = this.elem.nativeElement.querySelector('.mySwiper');
    let values = this.elem.nativeElement.querySelector('.mySwiper2');
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: any, className: string) {
          return '<span class="' + className + '">' + '</span>'
        }
      }
    }

    Object.assign(swiper_testimonails, params);
    Object.assign(values, params);
    swiper_testimonails.initialize();
    values.initialize();

  }

}
