/* Shared placeholder catalog for the prototype pages.
   In the real site this data comes from artwork.yaml files (see DESIGN.md §2). */
const GALLERY_WORKS = [
  {src:"art/starlight-fox.jpg",    title:"Starlight Fox",       year:2026, medium:"Procreate · iPad",    tags:["procreate","animals","night","2026"], story:"A fox made of constellations, drawn after the meteor shower. The stars in its tail took a whole evening — worth it."},
  {src:"art/umbrella-parade.jpg",  title:"The Umbrella Parade", year:2026, medium:"Procreate · iPad",    tags:["procreate","2026"],                   story:"Rainy days are only gloomy if you forget your umbrella. I counted eleven puddle reflections."},
  {src:"art/moon-garden.jpg",      title:"Moon Garden",         year:2026, medium:"Photoshop · Cintiq",  tags:["photoshop","night","2026"],           story:"She waters the flowers with starlight. Obviously the flowers only bloom at night."},
  {src:"art/deep-sea-library.jpg", title:"The Deep Sea Library",year:2025, medium:"Photoshop · Cintiq",  tags:["photoshop","animals","2025"],         story:"The whale is the librarian. Nobody is allowed to eat the books. The lanterns are bioluminescent bookmarks."},
  {src:"art/dragon-friend.jpg",    title:"Dragon Friend",       year:2025, medium:"Procreate · iPad",    tags:["procreate","animals","2025"],         story:"He curls around the chimney to keep warm and tells her about the old sky. From my dragon phase — the good one."},
  {src:"art/clockwork-bird.jpg",   title:"Clockwork Bird",      year:2025, medium:"Procreate · iPad",    tags:["procreate","animals","2025"],         story:"It winds itself up every morning and complains about it. Relatable."},
];

const ARCHIVE_ERAS = [
  {label:"Age 15–16 · finding the glow", note:"Started painting light instead of outlining it. Everything got moodier and shinier.",
   works:[
     {src:"art/moon-garden.jpg", title:"Moon Garden (study)", year:2025, medium:"Photoshop", story:"First time I drowned the whole picture in blue on purpose."},
     {src:"art/starlight-fox.jpg", title:"Fox sketch no. 3", year:2025, medium:"Procreate", story:"The idea that later became Starlight Fox. He used to have wings. Wings were wrong."},
   ]},
  {label:"Age 12–14 · first tablet", note:"Got the hand-me-down iPad. Drew every single day of one summer. Mostly dragons.",
   works:[
     {src:"art/dragon-friend.jpg", title:"Roof dragon, first version", year:2021, medium:"Procreate", story:"The dragon was smaller then. So was I."},
     {src:"art/clockwork-bird.jpg", title:"Bird machine", year:2021, medium:"Procreate", story:"I loved gears. I did not understand gears."},
   ]},
  {label:"Age 6–8 · the crayon era", note:"Crayons, markers, and absolute confidence. Dragons outnumbered people roughly 40 to 1.",
   works:[
     {src:"art/crayon-dragon.jpg", title:"BIG DRAGON", year:2016, medium:"crayon on paper", story:"He is friendly. The scribbles are fire, but friendly fire."},
     {src:"art/crayon-family.jpg", title:"Our house", year:2015, medium:"crayon + marker", story:"Everyone gets one arm longer than the other. That's just how arms work."},
   ]},
];
