import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css'],
    // providers: [MenuService]
})

export class MenuComponent {
    menuItems: string[];
    // Inject the Service
    constructor(private menuService: MenuService) {
        // call to the RESTFulService and then getting menuItems from that service
        // call to the RESTFulService is not supposed to be done here in MenuComponent
        // User Interface - so in this case suck kind of activities
        // are done in Angular by using Services - Angular Services
        // this.menuItems = ['Login', 'Products', 'Cart Details', 'Mobiles'];

        this.menuItems = this.menuService.menuItems;
    }
}