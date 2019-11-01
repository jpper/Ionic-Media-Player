import { Component } from '@angular/core';
import { Howl } from "howler"

export interface Track {
  name: string;
  path: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  playlist: Track[] = [
    {
      name: "Funny Song",
      path: "./assets/mp3/bensound-funnysong.mp3"
    },
    {
      name: "Jazzy Frenchie",
      path: "./assets/mp3/bensound-jazzyfrenchy.mp3"
    },
    {
      name: "Love",
      path: "./assets/mp3/bensound-love.mp3"
    }
  ]

  activeTrack: Track = null
  player: Howl = null;
  isPlaying = false

  constructor() { }
  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
      },
      onend: () => {

      }
    })
    this.player.play()
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() { }

  prev() { }

  seek() { }

  updateProgress() { }

}
