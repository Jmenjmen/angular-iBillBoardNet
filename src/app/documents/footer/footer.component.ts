import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GetIpService } from '../../get-ip.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(private sendSV: GetIpService) {
    
  }

  @Input() lang = '';
  form: FormGroup;
  subs: Subscription;
  checked: boolean;

  async ngOnInit() {
    this.form = new FormGroup({
      mail: new FormControl(null, [Validators.email, Validators.minLength(5), Validators.required])
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
  }

}
