import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  paragraphContent = 'This is Sparta!';
  showParagraph = true;
  buttonClickLogs: Date[] = [];

  constructor() {}

  ngOnInit(): void {}

  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.buttonClickLogs.push(new Date());
  }
}
