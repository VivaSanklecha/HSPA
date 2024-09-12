import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    standalone:true,
    templateUrl:'property-card.component.html'
})
export class PropertyCardComponent{
    Property: any={
        "ID":1,
        "Name":"Birla House",
        "Type":"Home",
        "Price":12500
    }
} 