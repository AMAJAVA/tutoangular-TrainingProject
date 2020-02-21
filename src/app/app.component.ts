import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	featureDisplayed : string = 'recipe';
  	title = 'TrainingProject';

  	onNavigate(featureLoaded: string) {
  		this.featureDisplayed = featureLoaded;
  		console.log(this.featureDisplayed);
  	}
}
