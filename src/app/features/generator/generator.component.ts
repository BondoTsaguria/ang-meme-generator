import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
})
export class GeneratorComponent implements OnInit {
  topText: string = '';
  bottomText: string = '';
  fileEvent: any;

  @ViewChild('memeCanvas', { static: false }) myCanvas: any;
  constructor() {}

  ngOnInit(): void {}

  preview(e: any) {
    this.fileEvent = e;
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = function (event) {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = function () {
        ctx.drawImage(img, 25, 150, 500, 500);
      };
    };
  }

  drawText() {
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.preview(this.fileEvent);

    ctx.fillStyle = '#000000';
    ctx.font = '50px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText(this.topText, canvas.width / 2, 100);
    ctx.fillText(this.bottomText, canvas.width / 2, 750);
  }
}
