import { Component, OnInit, Input } from '@angular/core';
import { WorkItem } from './../work-item';

@Component({
  selector: 'app-works-item',
  templateUrl: './works-item.component.html',
  styleUrls: ['./works-item.component.css']
})
export class WorksItemComponent implements OnInit {

    @Input('work') work!: WorkItem;

    constructor() {
    }

    ngOnInit(): void {
        // let title = this.work.title;
        // let description = this.work.description;
        // let image = this.work.image;
        // let url = this.work.url;
    }

}
