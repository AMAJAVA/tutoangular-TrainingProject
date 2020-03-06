import { Directive, Input, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isToOpen : boolean = false;
 	constructor() { }

	@HostListener('click') toggleOpen(eventData : Event) {
		this.isToOpen = !this.isToOpen;
	}

}
