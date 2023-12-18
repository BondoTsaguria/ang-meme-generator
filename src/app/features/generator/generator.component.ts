import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
})
export class GeneratorComponent implements OnInit {
  @ViewChild('memeCanvas', { static: false }) myCanvas: any;
  constructor() {}

  ngOnInit(): void {}

  preview(e: any) {
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
}
