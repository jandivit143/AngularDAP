import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lazy-two',
    template: `
    <h2 class="display-1 text-danger text-center">Lazy Two Component from Lazy Module!.....</h2>`
})

export class LazyTwoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}