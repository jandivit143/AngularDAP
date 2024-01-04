import { Component } from '@angular/core';

@Component({
    selector: 'shared-anothercomp',
    template: `
        <h3 class="text-info text-center">
            I am the Another Component from the Shared Module!
        </h3>
    `
})

export default class AnotherComponent {
    constructor() { }
}