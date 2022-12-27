import { HtmlTagDefinition } from '@angular/compiler';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  @ViewChild('serverNameInput', { static: true })
  serverNameInput: ElementRef;
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    console.dir(this.serverContentInput);
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.serverNameInput.nativeElement.value,
      blueprintContent: this.serverContentInput.nativeElement.value,
    });
  }
}
