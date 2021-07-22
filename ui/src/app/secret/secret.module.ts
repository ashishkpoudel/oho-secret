import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SecretComponent } from 'src/app/secret/secret.component';
import { CoreModule } from 'src/app/core/core.module';
import { SecretService } from 'src/app/secret/secret.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CoreModule,
  ],
  providers: [
    SecretService,
  ],
  declarations: [
    SecretComponent,
  ],
  exports: [
    SecretComponent,
  ]
})
export class SecretModule { }
