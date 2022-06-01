import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.model';

@Component({
  selector: 'app-matches-accordion',
  templateUrl: './matches-accordion.component.html',
  styleUrls: ['./matches-accordion.component.scss']
})
export class MatchesAccordionComponent implements OnInit {

  @Input()
  matches: Match[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
