import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-shadowdom',
    template: `
        <p>Using ShadowDom and in 'maroon'! (ViewEncapsulation.ShadowDom)</p>
    `,
    styles:[`
        p{
            color: maroon;
        }
    `],
    encapsulation: ViewEncapsulation.ShadowDom
})

export class ViewShadowDomComponent {
    constructor() {}
}

// Important points
// The shadow dom achieves the true encapsulation
// The parent and sibling styles still affect the component, but that is angular's implementation of shadowdom