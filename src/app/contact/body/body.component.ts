import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetIpService } from '../../get-ip.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  routerSubs: Subscription;
  formSubs: Subscription;

  constructor(private activeroute: ActivatedRoute, private sendSv: GetIpService) {}

  lang = this.activeroute.snapshot.paramMap.get('lang')

  ngOnInit(): void {
    this.form = new FormGroup({
      company_name: new FormControl('', [Validators.required]),
      name_surname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern('^[0-9+]+$')]),
      note: new FormControl('', [Validators.required])
    })

    this.routerSubs = this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }

  redirect_map() {
    window.open('https://maps.app.goo.gl/riyaJbXBFZoQbTnC9', '_blank');
  }

  sendFormData() {
    if(this.form.valid) {
      this.formSubs = this.sendSv.sendFormData(this.form.value).subscribe(data => {
        if(data.response == 'success') {
          this.form.reset()
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.routerSubs) {
      this.routerSubs.unsubscribe()
    }
    if(this.formSubs) {
      this.formSubs.unsubscribe()
    }
  }
}
