import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Home } from './page/home/home';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
    /*ruta general o raiz especifica que nos lleve a la ruta home*/ 
    {path: "", component: Home},
    {path: `home`, component: Home},
    {path: `about`, component: About},
    {path:`products`, component:Products},
    {path:`contact`, component:Contact},

];

