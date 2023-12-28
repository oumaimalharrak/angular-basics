import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';
import { SnapFaceService } from '../services/snap-face.service';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit, OnDestroy {
  faceSnap!: FaceSnap[];
  private destroy$!: Subject<boolean>

  constructor(private faceSnapService : SnapFaceService){}
  ngOnInit(): void {
    this.faceSnap = this.faceSnapService.getAllFacesnaps();
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
      ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
