import {Component, Output, EventEmitter} from '@angular/core'

@Component({
	selector : "app-header",
	templateUrl :'./header.component.html',
	styleUrls :['./header.component.css']
})

export class HeaderComponent {
	callapsed : boolean = true;
	title = 'Header';

	@Output() featureToLoad : EventEmitter<string> = new EventEmitter <string> ();

	onChoose(featureChoosed : string) {
		this.featureToLoad.emit(featureChoosed);
	}
}