import { Component } from '@angular/core';

@Component({
    selector: 'shared-sharedcomp',
    template: `
        <h3 class="text-warning text-center">
            I am the Shared Component from the Shared Module!
        </h3>
    `
})

export class SharedComponent {
    constructor() { }
}