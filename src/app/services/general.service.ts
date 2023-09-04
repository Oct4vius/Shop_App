import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  showModal = false;

  constructor(private router: Router) { }

  navigateInsideModal(route: string) {
    this.showModal = true
    this.router.navigate([{ outlets: { modal: [route] } }]);
  }
}
