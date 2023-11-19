import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-edit-profile',
  imports: [
    AppModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent {

}
