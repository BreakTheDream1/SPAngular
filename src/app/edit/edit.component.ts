import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute, private router: Router) {
    this.subscription = activeRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.getProguct();
    this.editForm = new FormGroup({
      'Id': new FormControl(this.product.Id, Validators.required),
      'Name': new FormControl(this.product.Name, Validators.required)
    })
  }

  getProguct() {
    this.productService.getProduct(this.id).subscribe(resp => this.product = resp);
  }

  editProduct() {
    this.productService.editProduct(this.editForm.getRawValue()).subscribe(resp => {
      if(resp == true) {
        this.router.navigate(['home']);
      }
    })
  }

}
