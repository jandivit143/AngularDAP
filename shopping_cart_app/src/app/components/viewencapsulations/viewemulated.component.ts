import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-emulated',
    template: `
        <p>Using Emulator and in 'blue'! (ViewEncapsulation.Emulated)</p>
    `,
    styles:[`
        p{
            color: blue;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})

export class ViewEmulatedComponent {
    constructor() {}
}
// ViewEncapsulation.Emulated strategy in angular adds the unique HTML attributes to the component CSS styles and
// to the markup so as to achieve encapsulation. This is not true encapsulation. The Angular emulates the
// encapsulation and hence the name is Emulated.

// This is the default option.

// Important points
// Strategy isolates the component styles. They do not bleed out to other components.
// Global styles may affect the element styles in the component.
// The Angular adds the attributes to the styles and mark up.