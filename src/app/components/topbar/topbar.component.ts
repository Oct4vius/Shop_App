import { Component, OnInit } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit{

  faIcon = faGear

  constructor(private router: Router, public generalService: GeneralService) {}

  openLogin(){
    this.router.navigate(['login'])
    this.generalService.showModal = true;
  }

  navigateInsideModal(route: string) {
    this.generalService.navigateInsideModal(route);
  }

  ngOnInit() {
    
  }


}
