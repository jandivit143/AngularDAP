import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyOneComponent } from './components/lazy-one/lazyone.component';
import { LazyTwoComponent } from './components/lazy-two/lazytwo.component';

/**
 * RouterModule.forRoot() method creates an NgModule that contains all the directives,
 * the given routes and the Router Service itself.
 * RouterModule.forChild() method creates an NgModule that contains all the directives,
 * the given routes but does not include the Router Service.
 * 
 * You are basically telling Angular, there is already a Router instance available in the app so please
 * just register all of these routes with that instance.
 */

const routes: Routes = [
    {
        path:'',
        component:LazyOneComponent
    },
    {
        path:'two',
        component:LazyTwoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRoutingModule { }