import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Secret } from 'src/app/secret/secret';

@Injectable()
export class SecretService {
  constructor(
    private apiService: ApiService,
  ) { }

  createSecret(secret: Secret) {
    console.log(secret);
  }
}
