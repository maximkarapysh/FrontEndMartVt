import { Component } from "@angular/core";

@Component({
    selector: "ngstyle-sample",
    templateUrl: "ng-style.component.html"
})
export class NgStyleComponent {
    getStyles() {
        let styles = {
            "background-color": "yellow",
            "font-weight": "bold",
            "font-size": "20px"
        };
        return styles;
    }
}