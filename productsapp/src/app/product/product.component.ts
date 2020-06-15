import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Product } from '../product';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    stock: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(0)]],
    departments: [[], Validators.required]
  });

  @ViewChild('form') form: NgForm;

  products: Product[] = [];
  departments: Department[] = [];
  private unSubscribe$: Subject<any> = new Subject(); 

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.productService.get()
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe((product) => this.products = product);
    this.departmentService.get()
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe((dep) => this.departments = dep);
  }

  save() {
    let data = this.productForm.value;
    if (data._id != null) {
      this.productService.update(data)
      .subscribe()
    } else {
      this.productService.add(data)
      .subscribe()
    }
    this.cancel();
  }

  delete(prod: Product) {
    this.productService.del(prod)
    .subscribe(
      () => this.notify('Deleted!'),
      (err) => this.notify(err.error.msg)
    )
  }

  edit(prod: Product) {
    this.productForm.setValue(prod);
  }

  cancel() {
    // this.productForm.reset();
    this.form.resetForm();
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
  }

  notify(msg: string) {
    this.snackbar.open(msg, "OK", {duration: 3000});
  }

}
