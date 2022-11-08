import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    collapsed = true;
    @Output() selectedPage = new EventEmitter<string>();

    onSelect(selectedPage: string) {
        this.selectedPage.emit(selectedPage);
    }
}