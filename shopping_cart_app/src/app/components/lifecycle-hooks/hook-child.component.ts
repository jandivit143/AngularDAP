import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import JustProduct from 'src/app/justproduct';

@Component({
    selector: 'app-hook-child',
    template: `
        <h1>Child Hook Component!</h1>
        <h3>{{parentData}}</h3>
    `
})

export class HookChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input()
    parentData:string;

    @Input()
    product:JustProduct;

    count:number=0;
    intervalId:any;
    constructor() {
        // Preferably for Dependency Injection
        console.log('constructor called!');
        this.parentData = '';
        this.product = {} as JustProduct;

        // this.intervalId = setInterval(() => {
        //     this.count++;
        //     console.log('Counter is: '+this.count);
        // },1000);
    }

    ngOnInit() {
        // Handle the initialization logic - it is called only once
        console.log('ngOnInit!');
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        // Invoked everytime, there is a change in one of the input properties of the
        // component
        console.log('ngOnChanges! ' + JSON.stringify(changes));
    }
    
    ngDoCheck(): void {
        console.log('ngDoCheck!',this.product);
    }

    ngAfterContentInit(): void {
        // Invoked after Angular performs any content projection(Explicitly trying to pass some content from parent to child with the
        // to child with the help of ng-content as a directive) into the component.
        console.log('ngAfterContentInit!');        
    }

    ngAfterContentChecked(): void {
        // Invoked each time the content of the given component has been checked by the change detection mechanism
        console.log('ngAfterContentChecked!');
    }

    ngAfterViewInit(): void {
        // Invoked after component's view has been fully initialized.
        console.log('ngAfterViewInit!');
    }

    ngAfterViewChecked(): void {
        // Invoked each time the view of the given component has been checked by the change detection mechanism.
        console.log('ngAfterViewChecked!');
    }

    ngOnDestroy(): void {
        // unsubscribe to the observables
        // detach event listeners
        // stop interval timers
        // disconnect web socket connection
        // if don't release the resources properly, we might have some side effects, memory leaks etc.
        console.log('ngOnDestroy!');
        // clearInterval(this.intervalId);
    }
}