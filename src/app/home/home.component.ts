import { Component, OnInit } from '@angular/core';
import { faTrash, faCartShopping, faPlus, faPenToSquare, faGear } from '@fortawesome/free-solid-svg-icons';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cartShoppingIcon  = faCartShopping
  trashIcon = faTrash
  plusIcon = faPlus
  editIcon = faPenToSquare

  constructor(private router: Router, public generalService: GeneralService){}

  faIcon = faGear


  openLogin(){
    this.router.navigate(['home/login'])
    this.generalService.showModal = true;
  }

  navigateInsideModal(route: string) {
    this.generalService.navigateInsideModal(route);
  }

  openAddProduct(){
    this.router.navigate(['home/addproduct'])
    this.generalService.showModal = true
  }

  ngOnInit(){
  }
  
}
