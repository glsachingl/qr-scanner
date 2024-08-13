import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ScanproductComponent } from './scanproduct/scanproduct.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: "addproduct",
        component: AddproductComponent
    },
    {
        path: "scanproduct",
        component: ScanproductComponent
    },
    {
        path: "product/:id",
        component: ProductComponent
    }];
