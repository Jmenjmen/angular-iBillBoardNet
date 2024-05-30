import { Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { ShareBtwModuleService } from '../../share-btw-module.service';
import { GetIpService } from '../../get-ip.service';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-product-calcite',
  templateUrl: './product-calcite.component.html',
  styleUrl: './product-calcite.component.css'
})
export class ProductCalciteComponent implements OnInit, OnDestroy {
  current_width = document.documentElement.clientWidth;

  constructor(private elem: ElementRef, private activeroute: ActivatedRoute, private ShareSv: ServiceService, private BtwModule: ShareBtwModuleService, private getIpSV: GetIpService) {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  @ViewChildren('descImg') descImg: QueryList<ElementRef>;
  @ViewChildren('benefit') benefits: QueryList<ElementRef>;
  @ViewChildren('compose') composeImages: QueryList<ElementRef>;
  @ViewChildren('rect') rects: QueryList<ElementRef>;
  @ViewChildren('summaryImg') sumImgs: QueryList<ElementRef>;
  @ViewChildren('product') products: QueryList<ElementRef>;

  lang = this.activeroute.snapshot.paramMap.get('lang');
  startTime = new Date();

  shareSubs: Subscription;

  async ngOnInit() {
    

    this.desc_gsap();
    this.benefits_gsap();
    this.compose_gsap();
    this.rect_gsap();
    this.summary_gsap();
    this.products_gsap();

    this.BtwModule.setData({ product: "calcite", msg: this.startTime })
    this.shareSubs = await this.ShareSv.getAnswer().subscribe((answer) => {
      //start gsap with change language
      this.lang = answer;
      this.desc_gsap();
      this.benefits_gsap();
      this.compose_gsap();
      this.rect_gsap();
      this.summary_gsap();
      this.products_gsap();
    })
  }

  //do gsap animations
  desc_gsap() {
    setTimeout(() => {
      let desc_imgs = this.descImg.map(element => element.nativeElement);
      desc_imgs.forEach(element => {
        gsap.fromTo(element, {
          x: -100,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

  benefits_gsap() {
    setTimeout(() => {
      let benefits = this.benefits.map(element => element.nativeElement);
    benefits.forEach((benefit, index) => {
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
    }, 100)
  }

  compose_gsap() {
    setTimeout(() => {
      let compose_imgs = this.composeImages.map(element => element.nativeElement);
      compose_imgs.forEach(element => {
        gsap.fromTo(element, {
          x: 100,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

  rect_gsap() {
    setTimeout(() => {
      let rects = this.rects.map(element => element.nativeElement);
      rects.forEach(rect => {
        gsap.fromTo(rect, {
          scale: 1.12
        }, {
          scale: 1,
          scrollTrigger: {
            trigger: rect,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

  summary_gsap() {
    setTimeout(() => {
      let sum_imgs = this.sumImgs.map(element => element.nativeElement);
      sum_imgs.forEach(img => {
        gsap.fromTo(img, {
          opacity: 0,
          x: 100
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
    }, 100)
  }

  products_gsap() {
    setTimeout(() => {
      let productsElem = this.products.map(element => element.nativeElement);
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

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.current_width = document.documentElement.clientWidth;
    if(this.current_width <= 1100 && this.current_width < 1500) {
      this.compose_gsap();
    } else if (this.current_width > 1100 && this.current_width < 1000) {
      this.compose_gsap();
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
    } else {
      window.scrollTo({
        top: (offsetTop - 100),
        behavior: 'smooth'
      })
    }
  }

  //send data for analytics
  sendPresenter() {
    const data = { product: "calcitePresenter" }
    this.getIpSV.sendPresenterData(data).subscribe(data => {
      return data
    });
  }

  sendSheets() {
    const data = { product: "calciteSheets" }
    this.getIpSV.sendPresenterData(data).subscribe(data => {
      return data
    });
  }

  sendOMRI() {
    const data = { product: "calciteOMRI" }
    this.getIpSV.sendPresenterData(data).subscribe(data => {
      return data
    });
  }

  sendFIBL() {
    const data = { product: "calciteFIBL" }
    this.getIpSV.sendPresenterData(data).subscribe(data => {
      return data
    });
  }

  ngOnDestroy(): void {
    if(this.shareSubs) {
      this.shareSubs.unsubscribe()
    }
  }
}
