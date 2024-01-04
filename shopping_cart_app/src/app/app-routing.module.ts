import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GreetComponent } from './components/greet/greet.component';
import { ProductsComponent } from './components/products/products.component';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { UsersComponent } from './components/users/users.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { DemoPipesComponent } from './components/demo_pipes/demopipes.component';
import { ViewChildComponent } from './components/demo_viewchild_viewchildren/demoviewchild.component';
import { HooksComponent } from './components/lifecycle-hooks/hooks.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    // component:LoginComponent,
    // From user accessibility perspective
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'greet',
    component:GreetComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    canActivate: [authGuard],
    canActivateChild:[adminGuard],
    children:[{
      path:':id',
      component:ProductDetailsComponent
    }]
  },
  {
    path:'cartdetails',
    component:CartDetailsComponent
  },
  // loading the module lazily
  {
    path:'lazy',
    loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'signupform',
    component:SignupformComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  },
  {
    path:'pipes',
    component:DemoPipesComponent
  },
  {
    path:'viewchild',
    component:ViewChildComponent
  },
  {
    path:'hooks',
    component:HooksComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  // Default preloadingStrategy - NoPreloading is default one

  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy:NoPreloading})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  // You can even set custom preloadingStrategy
  exports: [RouterModule]
})
export class AppRoutingModule { }
