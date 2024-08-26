import { Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ScanproductComponent } from './scanproduct/scanproduct.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';



export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
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
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
