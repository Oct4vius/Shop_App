import { Component, OnInit } from '@angular/core';
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cartShoppingIcon  = faCartShopping
  trashIcon = faTrash

  ngOnInit(){
  }
  
}
