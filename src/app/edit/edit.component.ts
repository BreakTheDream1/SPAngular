import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id: number;
  private subscription: Subscription;
  product: Product;
  editForm: FormGroup;
  load: boolean = false;

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute, private router: Router) {
    this.subscription = activeRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.getProguct();
  }

  getProguct() {
    this.productService.getProduct(this.id).subscribe(resp => {
      this.product = resp;
      this.load = true;
      this.editForm = new FormGroup({
        'id': new FormControl({value: this.product.id, disabled:true},Validators.required),
        'name': new FormControl(this.product.name, Validators.required)
      })
    });
  }

  editProduct() {
    this.productService.editProduct(this.editForm.getRawValue()).subscribe(resp => {
      if(resp == true) {
        this.router.navigate(['home']);
      }
    })
  }

}
