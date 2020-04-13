import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SongListItemModel } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: SongListItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
