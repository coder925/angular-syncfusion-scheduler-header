import {
  AgendaService,
  DayService,
  MonthAgendaService,
  MonthService,
  TimelineMonthService,
  TimelineViewsService,
  WeekService,
  WorkWeekService
  } from '@syncfusion/ej2-angular-schedule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  providers: [
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
