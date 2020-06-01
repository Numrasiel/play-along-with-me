import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'html5video',
  templateUrl: './html5video.component.html',
  styleUrls: ['./html5video.component.scss']
})
export class Html5videoComponent implements OnInit {
  videoSource: string = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  startTime: number = 7.15;
  status: number = 0;//0 stopped 1 playing 2 paused
  duration: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  play() {
    if (this.status == 0) {
      this.duration = this.videoPlayer.nativeElement.duration;
      console.log (`duration is ${this.duration}`)
      this.stop();
    }
    console.log('playing');
    const vid = this.videoPlayer.nativeElement;
    vid.paused ? vid.play() : vid.pause();
  }

  stop() {
    console.log('stoping');
    const vid = this.videoPlayer.nativeElement;
    vid.currentTime = this.startTime;
    vid.pause();
  }

  setTime(time: number) {
    this.videoPlayer.nativeElement.currentTime = time;
  }
}
