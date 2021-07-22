import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecretService } from 'src/app/secret/secret.service';
import { Secret } from 'src/app/secret/secret';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  public expiresIn = [
    { name: '7 Days', value: '07:00:00:00'},
    { name: '3 Days', value: '03:00:00:00'},
    { name: '2 Days', value: '01:00:00:00'},
    { name: '1 Days', value: '01:00:00:00'},
    { name: '12 Hours', value: '12:00:00'},
    { name: '6 Hours', value: '01:00:00'},
    { name: '1 Hour', value: '01:00:00'},
    { name: '30 Minutes', value: '20:00'},
  ];

  public secretForm: FormGroup = this.formBuilder.group({
    secret: [null, Validators.required],
    password: [null],
    expiresIn: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private secretService: SecretService,
  ) { }

  onCreateSecret() {
    const formData = this.secretForm.value;
    const secret = new Secret({
      secret: formData.secret,
      password: formData.password,
      expiresIn: formData.expiresIn,
    });

    this.secretService.createSecret(secret);
  }
 }
