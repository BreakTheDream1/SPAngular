import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const Routes = [
  {path: 'home', component: ProductsComponent},
  {path: 'add', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
