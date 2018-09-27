import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.createForm = new FormGroup({
      'Id': new FormControl('', Validators.required),
      'Name': new FormControl('', Validators.required)
    })
  }

  createProduct() {
    this.productService.createProduct(this.createForm.getRawValue()).subscribe(resp => {
      if(resp == true)
        this.router.navigate(['home']);
    })
  }

  ngOnInit() {
  }

}
