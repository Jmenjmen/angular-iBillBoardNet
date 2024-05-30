import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetIpService } from '../../../get-ip.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {

  form!: FormGroup;

  constructor(private activeroute: ActivatedRoute, private sendSv: GetIpService) {

  }

  lang = this.activeroute.snapshot.paramMap.get('lang');
  langSubs: Subscription;

  ngOnInit(): void {
    this.form = new FormGroup({
      company_name: new FormControl('', [Validators.required]),
      name_surname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern('^[0-9+]+$')]),
      note: new FormControl('', [Validators.required])
    })
    this.langSubs = this.activeroute.paramMap.subscribe(param => {
      this.lang = param.get('lang')
    })
  }

  sendFormData() {
    this.sendSv.sendFormData(this.form.value).subscribe(data => {
      if(data.response == 'success') {
        this.form.reset()
      }
    })
    
  }

  ngOnDestroy(): void {
    if(this.langSubs) {
      this.langSubs.unsubscribe()
    }
  }

}
