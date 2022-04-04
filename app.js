
   
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
 

const text = document.querySelector('.text');

const writer = GlitchedWriter.create(text);

let phrases = [
    "chapo",
    "to",
    "jebana",
    "pizda",
    
];

writer.queueWrite(phrases, 2000, true);
