import { Component } from "@angular/core";
import { User } from "../user";

@Component({
    selector: "user-form",
    templateUrl: "user-form.component.html",
    styleUrls: ["./../../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class UserFormComponent {

    roles: string[] = ["Guest", "Moderator", "Administartor"];

    model: User = new User(0, "", "", 0);

    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() { return JSON.stringify(this.model); }
}