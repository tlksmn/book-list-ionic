import {Component, inject, OnInit} from '@angular/core';
import {BookElem, DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss'],
})
export class ViewBookComponent implements OnInit {
  private readonly dataService: DataService = inject(DataService)
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly platform: Platform = inject(Platform);
  public currentBook!: BookElem;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.currentBook = this.dataService.getBookById(parseInt(id, 10));
  }
}
