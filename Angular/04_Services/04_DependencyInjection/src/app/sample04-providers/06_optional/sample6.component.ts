import { Component, Optional } from "@angular/core";

import { Logger } from "./../logger.service";

@Component({
    selector: "my-sample6",
    templateUrl: "sample6.component.html",
    providers: [Logger]
})
export class Sample6Component {
    // @Optional() - зависимость является не обязательной. Если инжектор не сможет ее создать, поле logger будет null
    constructor( @Optional() private logger: Logger) {
    }

    log() {
        if (this.logger) {
            this.logger.log("Option 1");
        }
        else {
            console.log("Option 2");
        }
    }
}
