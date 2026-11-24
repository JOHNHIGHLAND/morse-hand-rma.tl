window.HAND_TRACKER={hands:null,ready:false,lastResults:null,async init(onResults){
  this.hands=new Hands({locateFile:f=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`});
  this.hands.setOptions({maxNumHands:RMA_CONFIG.maxHands,modelComplexity:RMA_CONFIG.modelComplexity,minDetectionConfidence:RMA_CONFIG.detectionConfidence,minTrackingConfidence:RMA_CONFIG.trackingConfidence});
  this.hands.onResults(results=>{this.lastResults=results;onResults(results);});
  this.ready=true;
},async send(image){if(this.ready)await this.hands.send({image});}};
