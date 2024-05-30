import { Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { ShareBtwModuleService } from '../../share-btw-module.service';
import { Subscription } from 'rxjs';
import { GetIpService } from '../../get-ip.service';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-product-xorb',
  templateUrl: './product-xorb.component.html',
  styleUrl: './product-xorb.component.css'
})
export class ProductXorbComponent implements OnInit, OnDestroy {

  current_width = window.screen.width;

  constructor(private elem: ElementRef, private activeroute: ActivatedRoute, private ShareSv: ServiceService, private BtwModule: ShareBtwModuleService, private getIpSV: GetIpService) {
    gsap.registerPlugin(ScrollTrigger, Draggable);
  }

  @ViewChildren('descImg') descImg: QueryList<ElementRef>;
  @ViewChildren('benefit') benefits: QueryList<ElementRef>;
  @ViewChildren('compose') composeImages: QueryList<ElementRef>;
  @ViewChildren('summaryImg') sumImgs: QueryList<ElementRef>;
  @ViewChildren('product') products: QueryList<ElementRef>;
  @ViewChild('historyContainer') history_containers: ElementRef;
  @ViewChildren('historyImg') history_imgs: QueryList<ElementRef>;
  @ViewChildren('historyDesc') history_descs: QueryList<ElementRef>;

  lang = this.activeroute.snapshot.paramMap.get('lang');
  startTime = new Date();

  shareSubs: Subscription;

  async ngOnInit() {
    this.desc_gsap();
    this.benefits_gsap();
    this.compose_gsap();
    this.summary_gsap();
    this.products_gsap();
    this.history_gsap();

    this.BtwModule.setData({ product: "xorb", msg: this.startTime })
    this.shareSubs = await this.ShareSv.getAnswer().subscribe((answer) => {
      this.lang = answer;
      this.desc_gsap();
      this.benefits_gsap();
      this.compose_gsap();
      this.summary_gsap();
      this.products_gsap();
      this.history_gsap();
    })
  }

  history_gsap() {
    setTimeout(() => {
      let history_images = this.history_imgs.map(element => element.nativeElement);
      let history_descs = this.history_descs.map(element => element.nativeElement);
      history_images.forEach(img => {
        gsap.fromTo(img, {
          x: -500
        }, {
          x: 0,
          scrollTrigger: {
            trigger: this.history_containers.nativeElement,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
      history_descs.forEach(desc => {
        gsap.fromTo(desc, {
          x: 500
        }, {
          x: 0,
          scrollTrigger: {
            trigger: this.history_containers.nativeElement,
            start: 'top bottom',
            end: 'center center',
            scrub: true
          }
        })
      })
    }, 100)
  }

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

  sendPresenter() {
    const data = { product: "xorbPresenter" }
    this.getIpSV.sendPresenterData(data).subscribe(data => {
      return data
    });
  }

  sendSheet() {
    const data = { product: "xorbSheets" }
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
