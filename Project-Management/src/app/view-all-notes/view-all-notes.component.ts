import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-all-notes',
  templateUrl: './view-all-notes.component.html',
  styleUrls: ['./view-all-notes.component.css']
})
export class ViewAllNotesComponent implements OnInit {
    listAllNotes = [];
    numberRow = 5; // the config number row in view
    run = true;
    counts = 0;
    currentPage = 1;
    constructor(
        private appService: AppService,
        private route: ActivatedRoute
    ) {
        this.getTotalItems();
      if ( this.run === true) {
          this.setPageData(0, this.numberRow );
          this.run = false;
      }
    }

  ngOnInit() {
  }
    setPageData(from: number, offset: number ) {
        this.appService.sendGetDataPaging(from, offset).then(result => {
            let arr3 = [];
             arr3 = Object.keys(result).map(function(key) {
                return [Number(key), result[key]];
            });
            this.listAllNotes = arr3;
        });
    }
    pageChangeds($event: number) {
        this.currentPage = $event;
        this.setPageData($event * this.numberRow  - (this.numberRow), this.numberRow);
    }
    getTotalItems() {
        this.appService.getTotalItemLogTimeSheet().then(result => {
            this.counts = result;
        });

    }
}
