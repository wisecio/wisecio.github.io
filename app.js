import {
  presets,
  queueWrite
} from "https://cdn.skypack.dev/glitched-writer@2.0.29";

const phrases = [
  "Hello there.",
  "Yes, we knew you would come by at some point.",
  "We would like to present you",
  "our new baby.",
  "wisec.io",
  "Future is now",
  "Standby."

];



queueWrite(
  phrases,
  ".text",
  {
    ...presets.neo,
    letterize: true
  },
  2000,
  10000



);


 
  
 