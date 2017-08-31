import { UserServices } from './../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAdminComponent } from './userAdmin.component';
import { routing } from './userAdmin.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations: [
        UserAdminComponent,
    ],
    providers: [UserServices],
})
export class UserAdmin {}
