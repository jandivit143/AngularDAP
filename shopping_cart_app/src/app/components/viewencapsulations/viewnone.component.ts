import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-none',
    template: `
        <p>I am not encapsulated and in 'green'! (ViewEncapsulation.None)</p>
    `,
    styles:[`
        p{
            color: green;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class ViewNoneComponent {
    constructor() {}
}

// Important points
// The styles defined in the component affect the other components
// The global styles affect the element style in the component