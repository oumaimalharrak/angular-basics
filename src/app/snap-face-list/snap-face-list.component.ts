import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnap.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.scss']
})
export class SnapFaceListComponent implements OnInit {
  faceSnap!: FaceSnap[];
  constructor(private faceSnapService : SnapFaceService){}
  ngOnInit(): void {
    this.faceSnap = this.faceSnapService.getAllFacesnaps();
  }
}
