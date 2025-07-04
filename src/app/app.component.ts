import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenLoaderComponent } from './components/shared/screen-loader/screen-loader.component';
import { SharedModule } from './components/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-ap';
}
