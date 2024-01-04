import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWebStorageModule } from 'angular-web-storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { GreetComponent } from './components/greet/greet.component';
import { AppIIComponent } from './components/app-ii/app-ii.component';
import { StructuralDirectiveComponent } from './components/structural_directive/structuralDirective';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';
import { ProductsComponent } from './components/products/products.component';
import { AttributeDirectiveComponent } from './components/attribute_directives/demo_attribute.component';
import { AddToCartComponent } from './components/addtocart/addtocart.component';
import { ViewNoneComponent } from './components/viewencapsulations/viewnone.component';
import { ViewEmulatedComponent } from './components/viewencapsulations/viewemulated.component';
import { ViewShadowDomComponent } from './components/viewencapsulations/viewshadowdom.component';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { CartService } from './services/cart.service';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupformComponent } from './components/signupform/signupform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { DemoPipesComponent } from './components/demo_pipes/demopipes.component';
import { CaptionPipe } from './pipes/caption.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewChildComponent } from './components/demo_viewchild_viewchildren/demoviewchild.component';
import { CounterComponent } from './components/demo_viewchild_viewchildren/counter.component';
import { HooksComponent } from './components/lifecycle-hooks/hooks.component';
import { HookChildComponent } from './components/lifecycle-hooks/hook-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    GreetComponent,
    AppIIComponent,
    StructuralDirectiveComponent,
    MenuComponent,
    ProductsComponent,
    AttributeDirectiveComponent,
    AddToCartComponent,
    ViewNoneComponent,
    ViewEmulatedComponent,
    ViewShadowDomComponent,
    CartDetailsComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    UsersComponent,
    SignupformComponent,
    ReactiveformComponent,
    DemoPipesComponent,
    CaptionPipe,
    FilterPipe,
    ViewChildComponent,
    CounterComponent,
    HooksComponent,
    HookChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularWebStorageModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  // providers: [MenuService],
  // providers: [MenuService, CartService],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent,AppIIComponent]
})
export class AppModule {
  constructor(){
    // console.log('App Module loaded!');
  }
}
