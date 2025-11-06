import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Home } from './page/home/home';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Ofertas } from './page/ofertas/ofertas';
import { Maquillaje } from './page/products/secciones/maquillaje/maquillaje';
import { Carteras } from './page/products/secciones/carteras/carteras';
import { Joyas } from './page/products/secciones/joyas/joyas';
import { NewProduct } from './page/products/secciones/new-product/new-product';



export const routes: Routes = [
    /*ruta general o raiz especifica que nos lleve a la ruta home*/
    { path: "", component: Home },
    { path: `home`, component: Home },
    { path: `about`, component: About },
    { path: `products`, component: Products },
    { path: `contact`, component: Contact },
    { path:  `ofertas`, component: Ofertas },
    { path:  `carteras`, component: Carteras},
    { path:  `maquillajes`, component: Maquillaje },
    { path:  `joyas`, component: Joyas },
    { path:  `new-products`, component: NewProduct },
];

