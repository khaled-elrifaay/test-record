import { Component } from '@angular/core';
import {
  GenericResponse,
  RecordingData,
  VoiceRecorder,
} from 'capacitor-voice-recorder';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}
  stop() {
    VoiceRecorder.stopRecording()
      .then((result: RecordingData) => console.log("ennnnnd",result.value))
      .catch((error) => console.log(error));
  }
  start() {
    VoiceRecorder.hasAudioRecordingPermission().then((res) => {
      if (res.value) {
        VoiceRecorder.startRecording()
        .then((result: GenericResponse) => console.log("staaaart",result.value))
        .catch((error) => console.log(error));
      } else {
          VoiceRecorder.requestAudioRecordingPermission();
      }
  });
  
  }
}
