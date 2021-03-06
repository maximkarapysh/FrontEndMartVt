import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


const Products = [
  { id: 1, name: 'product 1', price: 100 },
  { id: 2, name: 'product 2', price: 200 },
  { id: 3, name: 'product 3', price: 300 },
  { id: 4, name: 'product 4', price: 400 },
  { id: 5, name: 'product 5', price: 500 },
  { id: 6, name: 'product 6', price: 600 },
  { id: 7, name: 'product 7', price: 700 },
  { id: 8, name: 'product 8', price: 800 },
  { id: 9, name: 'product 9', price: 900 },
  { id: 10, name: 'product 10', price: 1000}
]; 

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  products = Products;
  @Input () rows;
  @Output () delRow = new EventEmitter();

  constructor( ) {

  }

  ngOnInit() {
    this.products = this.products.slice(0, this.rows);
  }
  deleteItem (rowIndex) {
    this.products.splice(rowIndex,1);
    this.delRow.emit(rowIndex.id);
  }
    


}
