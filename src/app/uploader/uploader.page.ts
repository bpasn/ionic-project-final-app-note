import { Component, OnInit, ViewChild } from "@angular/core";
import { IonTabs } from '@ionic/angular';
import { Http } from "@angular/http";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.page.html",
  styleUrls: ["./uploader.page.scss"],
})
export class UploaderPage implements OnInit {
  imageURL: string

  // @ViewChild("tabs") tabs: IonTabs;

  constructor(public http: Http) {}

  ngOnInit() {
    // this.tabs.select("Feed");
  }

  // UPLOAD IMG TO WEB UPLOADCARE
  fileChanged(event) {
const files = event.target.files

    const data = new FormData()
    data.append("file", files[0])
    data.append("UPLOADCARE_STORE", "1")
    data.append("UPLOADCARE_PUB_KEY", "2ead22ddaa9291082227")

    this.http.post("https://upload.uploadcare.com/base/", data)
      .subscribe((event) => {
        console.log(event);
        this.imageURL = event.json().file
      })
  }
}
