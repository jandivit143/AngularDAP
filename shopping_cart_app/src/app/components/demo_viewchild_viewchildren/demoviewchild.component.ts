// ViewChild - accessing the template of same component or accessing the template of child component from
// template file into the component class.
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
    selector: 'app-viewchild',
    template: `
        <br />
        <h3 class="text-center text-secondary display-5">ViewChild / ViewChildren!</h3>
        <!-- <p id="para1">This is an important message!</p> --> <!-- we may use document.getElementById('para1') to get the element reference using Vanilla HTML -->
        
        <!-- #para1 Template Reference Variable -->
        <p #para1>This is an important message!</p>
        <p #para1>This is an important message!</p>
        <hr />
        <app-counter #childView></app-counter>
        <h1>Counter {{childView.counter}}!</h1>
        <h1>Counter {{cntComp.counter}}!</h1>

        <div style="padding:20px;">
            <button style="margin: 10px;" (click)="inc();">Increment</button>
            <button style="margin: 10px;" (click)="dec();">Decrement</button>
        </div>
    `
})

export class ViewChildComponent implements OnInit, AfterViewInit {
    @ViewChild('para1') // ViewChild will only look for the first child even if we have same template reference variable for different elements
    marker:ElementRef;

    @ViewChild('childView')
    cntComp:CounterComponent;

    // @ViewChildren('para1') // ViewChildren will look for the child elements also which will have the same template reference variable for different elements
    // markers:QueryList<any>;

    constructor() {
        // for ViewChild
        this.marker = {} as ElementRef;
        this.cntComp = {} as CounterComponent;
        console.log(this.marker);

        // for ViewChildren
        // this.markers = {} as QueryList<any>;
        // console.log(this.markers);
        
    }

    inc(){
        this.cntComp.increment();
    }

    dec(){
        this.cntComp.decrement();
    }

    ngOnInit() { }

    ngAfterViewInit(): void {
        // for ViewChild
        console.log(this.marker);
        this.marker.nativeElement.style.color = 'yellow';
        this.marker.nativeElement.style.fontSize = 'xx-large';
        // this.marker.nativeElement.innerHTML = 'xx-large';
        // this.marker.nativeElement.innerText = 'xx-large';
        
        // // for ViewChildren
        // console.log(this.markers);
        // this.markers.first.nativeElement.style.color = 'green';
        // this.markers.first.nativeElement.style.fontSize = 'xx-large';
        // this.markers.last.nativeElement.style.color = 'blue';
        // this.markers.last.nativeElement.style.fontSize = 'xx-large';
    }
}