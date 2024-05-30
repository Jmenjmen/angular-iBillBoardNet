import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { GetIpService } from '../../get-ip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(private sendSV: GetIpService, private elem: ElementRef, private activeRoute: ActivatedRoute) {

  }

  lang = this.activeRoute.snapshot.paramMap.get('lang');
  form: FormGroup;
  subs: Subscription;
  checked: boolean;

  routerSubs: Subscription;

  async ngOnInit() {
    this.form = new FormGroup({
      mail: new FormControl(null, [Validators.email, Validators.minLength(5), Validators.required])
    })

    this.routerSubs = this.activeRoute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })

  }

  checkValue(event: any){
    this.checked = event.currentTarget.checked;
 }

  sendData() {
    this.form.updateValueAndValidity();
    
    if(this.form.valid) {
      this.subs = this.sendSV.sendFormData(this.form.value)
      .subscribe(data => { this.form.reset() })
    }
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe()
    }
    if(this.routerSubs) {
      this.routerSubs.unsubscribe()
    }
  }

}
