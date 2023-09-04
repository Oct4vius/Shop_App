import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private generalService: GeneralService, private router: Router){}

  xIcon = faX

  closeModal(){
    this.generalService.showModal = false
    this.router.navigate(['home'])
  }

}
