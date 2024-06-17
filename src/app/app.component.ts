import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-user />
  `,
    styles: ``,
    imports: [RouterOutlet, UserComponent]
})
export class AppComponent {
  city = 'Barcelona';
}
