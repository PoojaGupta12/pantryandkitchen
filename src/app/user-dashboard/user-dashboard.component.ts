import {  Component,  ChangeDetectionStrategy,  ViewChild,  TemplateRef} from '@angular/core';
import {  startOfDay,  endOfDay,  subDays,  addDays,  endOfMonth,  isSameDay,  isSameMonth,  addHours} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import {  CalendarEvent,  CalendarEventAction,  CalendarEventTimesChangedEvent} from '../../modules/calendar.module';


import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA}  from '@angular/material';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'pk-user-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  constructor() { }

   view: string = 'month';

  viewDate: Date = new Date();

actions: CalendarEventAction[] = [
  {
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      //this.handleEvent('Edited', event);
    }
  },
  {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      //this.handleEvent('Deleted', event);
    }
  }
];

refresh: Subject<any> = new Subject();

events: CalendarEvent[] = [];


activeDayIsOpen: boolean = true;



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    //this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }


  // handleEvent(actionIn: string, eventIn: CalendarEvent): void {

  //         let dialogRef = this.dialog.open(EventDialogComponent, {
  //           width: 'auto',
  //           data: { event: eventIn, action: actionIn }
  //         });

  //         dialogRef.afterClosed().subscribe(result => {
  //           console.log('The dialog was closed');
  //         });
  //       }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }


}
