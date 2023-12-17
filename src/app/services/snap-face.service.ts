import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/facesnap.model";
@Injectable({
    providedIn: 'root'
})
export class SnapFaceService {
    faceSnaps: FaceSnap [] =[
        {
          id:1,
          title: "Face Snapshot",
          description: "This is a face snapshot of the user.",
          createdDate: new Date(),
          snaps: 5,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        },
        {
          id:2,
          title: "Face Snapshot",
          description: "This is a face snapshot of the user.",
          createdDate: new Date(),
          snaps: 5,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location: 'larache'
        },
        {
          id:3,
          title: "Face Snapshot",
          description: "This is a face snapshot of the user.",
          createdDate: new Date(),
          snaps: 5,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location: 'Tanger'
        }
        ,
        {
          id:4,
          title: "Face Snapshot",
          description: "This is a face snapshot of the user.",
          createdDate: new Date(),
          snaps: 20,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location: 'larache'
        },
        {
          id:5,
          title: "Face Snapshot",
          description: "This is a face snapshot of the user.",
          createdDate: new Date(),
          snaps: 5,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location: 'Tanger'
        }
      ]
     
      getAllFacesnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId:number): FaceSnap{
        const faceSnap: FaceSnap | undefined = this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error('FaceSnapshot with ID "${faceSnapId}" not found.')

        }else{
          return faceSnap;
        }
      }

      snapFaceById(faceSnapId:number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap= this.getFaceSnapById(faceSnapId);
        snapType=='snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}