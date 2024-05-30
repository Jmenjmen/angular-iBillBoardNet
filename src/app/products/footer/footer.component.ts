import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { GetIpService } from '../../get-ip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(private ShareSv: ServiceService, private sendSV: GetIpService, private elem: ElementRef) {

  }

  lang = '';
  form: FormGroup;
  subs: Subscription;
  checked: boolean;

  async ngOnInit() {
    this.form = new FormGroup({
      mail: new FormControl(null, [Validators.email, Validators.minLength(5), Validators.required])
    })

    await this.ShareSv.getAnswer().subscribe(answer => {
      this.lang = answer
    })

  }

  checkValue(event: any){
    this.checked = event.currentTarget.checked;
 }

  sendData() {
    this.form.updateValueAndValidity();
    
    if(this.form.valid) {
      this.subs = this.sendSV.sendFormData(this.form.value)
      .subscribe(data => {
        this.form.reset()
      })
    }
  }

  ngOnDestroy(): void {
    if(this.subs) {
      this.subs.unsubscribe()
    }
  }

}
