import { Component } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private generalService: GeneralService){}

  xIcon = faX

  closeLogin(){
    this.generalService.showModal = false
  }

}
