import { Component, OnInit } from '@angular/core';
import { faTrash, faCartShopping, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private router: Router, private generalService: GeneralService){}

  openAddProduct(){
    this.router.navigate(['addproduct'])
    this.generalService.showModal = true
  }

  ngOnInit(){
  }
  
}
