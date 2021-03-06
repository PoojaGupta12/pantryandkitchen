import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarMonthViewComponent } from './calendar-month-view.component';
import { CalendarMonthViewHeaderComponent } from './calendar-month-view-header.component';
import { CalendarMonthCellComponent } from './calendar-month-cell.component';
import { CalendarOpenDayEventsComponent } from './calendar-open-day-events.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarMonthMealViewComponent } from './calendar-month-meal-view.component';
import {AddDishDialog} from './add-dish-dialog';

export { CalendarMonthViewComponent } from './calendar-month-view.component';
export { MonthViewDay as CalendarMonthViewDay } from 'calendar-utils';

//import {NGDemoMaterialModule} from '../../material-module';
import {MainMaterialModule} from '../../main-material.module';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, DragAndDropModule, CalendarCommonModule,MainMaterialModule,FormsModule,ReactiveFormsModule ],
  declarations: [
    CalendarMonthViewComponent,
    CalendarMonthCellComponent,
    CalendarOpenDayEventsComponent,
    CalendarMonthViewHeaderComponent,
    CalendarMonthMealViewComponent,
    AddDishDialog
  ],
  exports: [
    CalendarMonthViewComponent,
    CalendarMonthCellComponent,
    CalendarOpenDayEventsComponent,
    CalendarMonthViewHeaderComponent,
    CalendarMonthMealViewComponent,
    AddDishDialog
  ],
  entryComponents:[AddDishDialog]
})
export class CalendarMonthModule {}
