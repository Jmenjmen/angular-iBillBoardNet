import { AfterContentInit, Component, ErrorHandler, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetIpService } from './get-ip.service';
import { ShareBtwModuleService } from './share-btw-module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Verdex';

  data: any;

  routeSubs: Subscription;
  ipSubs: Subscription;

  constructor (private activatedRoute: ActivatedRoute, private route: Router, private getIp: GetIpService, private BtwModule: ShareBtwModuleService) {
    const UA = navigator.userAgent;
    let device = "";
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS"Safari/i.test(UA)) {
      device = 'mobile'
    } else {
      device = 'desktop'
    }

    const currentDate = new Date();

    // Extract individual components of the date and time
    const day_current = currentDate.getDate().toString().padStart(2, '0'); // Day of the month (2 digits)
    const month_current = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month (2 digits, January is 0)
    const year_current = currentDate.getFullYear().toString(); // Full year
    const hours_current = currentDate.getHours().toString().padStart(2, '0'); // Hours (2 digits, 24-hour format)
    const minutes_current = currentDate.getMinutes().toString().padStart(2, '0'); // Minutes (2 digits)
    const seconds_current = currentDate.getSeconds().toString().padStart(2, '0'); // Seconds (2 digits)

    // Combine components into the desired format
    const formattedDateTime = `${day_current}/${month_current}/${year_current}-${hours_current}:${minutes_current}:${seconds_current}`;

    this.data = {
      "clientData": {
        "ip": "",
        "device": device,
        "Time In": formattedDateTime,
        "productTime": [

        ],
        "Time Out": "",
        "exit": ""
      }
    }
    this.ipSubs = this.getIp.getIp().subscribe(ip => {
      this.data.clientData.ip = ip
    })
    this.routeSubs = route.events.subscribe(async (event) => {
      if (event instanceof NavigationStart) {
        
        if (window.location.href.split("/").slice(3, 4)[0] !== 'cz' && window.location.href.split("/").slice(3, 4)[0] !== 'en') {
          window.location.href = '/cz'
        }
      }
      if(event instanceof NavigationEnd) {
        if(event.url.split('/').slice(-1).join('') == 'vitaland' || event.url.split('/').slice(-1).join('') == 'vitayield' || event.url.split('/').slice(-1).join('') == 'vitaxorb' || event.url.split('/').slice(-1).join('') == 'vitacalcite') {
          let sharedData = this.BtwModule.getData();
          const endTime = new Date()
          let distance = Math.abs(endTime.getTime() - sharedData.msg.getTime());
          const hours = Math.floor(distance / 3600000);
          distance -= hours * 3600000;
          const minutes = Math.floor(distance / 60000);
          distance -= minutes * 60000;
          const seconds = Math.floor(distance / 1000);
          const resaultTime =  `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
          await this.data.clientData.productTime.push(`{${sharedData.product}: ${resaultTime}}`)
        }
      }
    })
  }

  ngOnInit(): void {
    console.log(location.href)
    let current_url = '/' + location.href.split('/').slice(3).join('/');
    if(current_url == '/') {
      this.route.navigate(['cz'])
    }
  }

  @HostListener('window:beforeunload', [ '$event' ])
  async doBeforeUnload(e) {

    const currentDate = new Date();

    // Extract individual components of the date and time
    const day_current = currentDate.getDate().toString().padStart(2, '0'); // Day of the month (2 digits)
    const month_current = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month (2 digits, January is 0)
    const year_current = currentDate.getFullYear().toString(); // Full year
    const hours_current = currentDate.getHours().toString().padStart(2, '0'); // Hours (2 digits, 24-hour format)
    const minutes_current = currentDate.getMinutes().toString().padStart(2, '0'); // Minutes (2 digits)
    const seconds_current = currentDate.getSeconds().toString().padStart(2, '0'); // Seconds (2 digits)

    // Combine components into the desired format
    const formattedDateTime = `${day_current}/${month_current}/${year_current}-${hours_current}:${minutes_current}:${seconds_current}`;

    this.data.clientData["Time Out"] = formattedDateTime;

    this.data.clientData.exit = this.route.url;
    if(await this.route.url.split('/').slice(-1).join('') == 'vitaland' || await this.route.url.split('/').slice(-1).join('') == 'vitayield' || await this.route.url.split('/').slice(-1).join('') == 'vitaxorb' || await this.route.url.split('/').slice(-1).join('') == 'vitacalcite') {
      let sharedData = await this.BtwModule.getData();
      const endTime = new Date()
      let distance = Math.abs(endTime.getTime() - sharedData.msg.getTime());
      const hours = Math.floor(distance / 3600000);
      distance -= hours * 3600000;
      const minutes = Math.floor(distance / 60000);
      distance -= minutes * 60000;
      const seconds = Math.floor(distance / 1000);
      const resaultTime =  `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
      console.log(resaultTime)
      await this.data.clientData.productTime.push(`{${sharedData.product}: ${resaultTime}}`)
    }
    await this.getIp.sendDataOnServer(this.data).subscribe(res => {
    })
  }

  ngOnDestroy() {
    if(this.routeSubs) {
      this.routeSubs.unsubscribe()
    }
    if(this.ipSubs) {
      this.ipSubs.unsubscribe()
    }
  }
}
