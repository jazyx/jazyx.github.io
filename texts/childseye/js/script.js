"use strict"

;(function tooltips(window){

  class Tooltips {
    constructor () {
      this.tooltipMap = {
        "fascinates": 
           "<dl>\
              <dt>to fascinate</dt>\
              <dd>to interest someone a lot:\
              <i>Science has always fascinated me.</i>\
              </dd>\
            </dl>\
            <a href='https://dictionary.cambridge.org/dictionary/learner-english/fascinate' target='meaning'>Cambridge Learner's Dictionary</a>\
            <a href='https://tatoeba.org/rus/sentences/search?query=fascinates&from=eng&to=rus' target='example'>Example translations</a>"
      , "traded in": 
           "<dl>\
              <dt>to trade &lt;something&gt; in</dt>\
              <dd>to give something as part of your payment for something else:\
              <i>He traded his old computer in for a new model.</i>\
              <i>They decided to trade in their small car for a bigger one.</i>\
              </dd>\
            </dl>\
            <a href='https://dictionary.cambridge.org/dictionary/learner-english/trade-sth-in' target='meaning'>Cambridge Learner's Dictionary</a>\
            <a href='https://tatoeba.org/rus/sentences/search?query=trade+in&from=eng&to=rus' target='example'>Example translations</a>"
      , "all-encompassing": 
          "<dl>\
            <dt>encompassing</dt>\
            <dd>to include a lot of things, ideas, places, etc:.\
            <i>Their albums encompass a wide range of music.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/encompass?q=encompassing' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=encompassing&from=eng&to=rus' target='example'>Example translations</a>"
      , "enigmatic":
          "<dl>\
            <dt>enigmatic</dt>\
            <dd>mysterious and impossible to understand completely\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/enigmatic' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?from=eng&to=rus&query=enigmatic' target='example'>Example translations</a>"
      , "acorn": 
          "<img src='http://pngimg.com/uploads/acorn/acorn_PNG37003.png'>"
      , "oak": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg/597px-Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg'>"
      , "sweet chestnut": 
          "<img src='http://s0.geograph.org.uk/geophotos/05/38/66/5386630_75d82586.jpg'>"
      , "basketful of sweet chestnuts":
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Borgata_Pognant_-_Marroni_IGP.JPG/640px-Borgata_Pognant_-_Marroni_IGP.JPG'>"
      , "roast":
        "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caldarroste%2C_ger%C3%B6stete_Kastanien%2C_roasted_Chestnuts.jpg/640px-Caldarroste%2C_ger%C3%B6stete_Kastanien%2C_roasted_Chestnuts.jpg'>"
      , "green hedgehog balls":
            "<p>Sweet chestnuts look like green hedgehogs.</p>"
          + "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Castanea_sativa_or_sweet_chestnut.jpg/640px-Castanea_sativa_or_sweet_chestnut.jpg'>"
          + "<img src='img/hedgehog.jpg'>"
      , "nestling":
          "<dl>\
            <dt>nestle (sth) against/in/on, etc</dt>\
            <dd>to rest yourself or part of your body in a comfortable,\
            protected position:\
            <i>The cat was nestling in her lap.</i>\
            </dd>\
            <dt>nestle beneath/between/in, etc</dt>\
            <dd>If a building, town, or object nestles somewhere,\
            it is in a protected position, with bigger things around it:\
            <i>a village nestled in the Carpathian mountains</>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/nestle' target='meaning'>\
          Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=nestling&from=eng&to=rus' target='example'>Example translations</a>"
      , "appreciate":
          "<dl>\
            <dt>to appreciate</dt>\
            <dd>to understand how good something or someone is and be able to enjoy them:\
            <i>There's no point buying him expensive wines - he doesn't appreciate them.</i>\
            <i>I bought Caroline the more expensive chocolates because I knew she would appreciate them.</i>\
            <i>Any advice that you can give me would be greatly appreciated.</i>\
            <i>I appreciated his openness.</i>\
            <i>I really appreciate all of your help and generosity.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/appreciate' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=appreciate&from=eng&to=rus' target='example'>Example translations</a>"
      , "prickles": 
          "<img src='http://www.differencebetween.info/sites/default/files/images/5/thorns.jpg'>\
          <a href='https://www.google.com/search?q=prickles&tbas=0&tbm=isch&tbas=0&source=lnt&sa=X&ved=0ahUKEwitktCIw6DbAhWMxaYKHXvRBhMQpwUIHQ&biw=1536&bih=772&dpr=1.25' target='images'>More images</a>"
      , "toddling": 
          "<dl>\
            <dt>to toddle</dt>\
            <dd>(especially of a young child) to walk with short steps, trying to keep the body balanced:\
            <i>I watched my two-year-old nephew toddling around after his puppy.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/toddle' target='meaning'>Cambridge Dictionary</a>\
          <img src='https://ak1.picdn.net/shutterstock/videos/2602541/thumb/1.jpg'>"
      , "to say the least":
          "<a href='https://tatoeba.org/rus/sentences/search?query=say+the+least&from=eng&to=rus' target='example'>Example translations</a>"
      , "picking up": 
          "<img src='img/pick_up.jpg'>"
      , "pointing out": 
          "<img src='img/point_out.jpg'>"
      , "the thought struck me":
          "<dl>\
            <dt>to strike &lt;someone&gt; (that)</dt>\
            <dd>If a thought or idea strikes you, you suddenly think of it:\
            <i>It struck me that I'd forgotten to order the champagne.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/essential-british-english/strike_1' target='meaning'>Cambridge Learner's Dictionary</a>"
      , "Despite":
          "<dl>\
            <dt>despite</dt>\
            <dd>used to say that something happened or is true, although something else makes this seem not probable:\
            <i>I am still pleased with the house despite all the problems we've had.</i>\
            <i>He managed to eat lunch despite having had an enormous breakfast.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/despite' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=despite&from=eng&to=rus' target='example'>Example translations</a>"
      , "flints":
          "<dl>\
            <dt>flint</dt>\
            <dd>a very hard, grey stone that can be used to produce a flame\
            <dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/flint' target='meaning'>Cambridge Learner's Dictionary</a>\
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Miorcani_flint.jpg/522px-Miorcani_flint.jpg'>\
          <a href='https://en.wikipedia.org/wiki/Flint' target='reference'>Wikipedia article</a>"
      , "break chips off them": 
          "<img src='https://www.nps.gov/cato/learn/kidsyouth/images/stone-hammer-388-wide.jpg?maxwidth=1200&maxheight=1200&autorotate=false'>"
      , "dead leaves": 
          "<img src='img/dry_leaves.jpg'>"
      , "dust": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Saw_dust_%28Zaagsel%29.jpg/481px-Saw_dust_%28Zaagsel%29.jpg'>"
      , "twigs": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Birch_twigs.jpg/640px-Birch_twigs.jpg'>"
      , "fallen branches": 
          "<img src='img/branches.jpg'>"
      , "littered with":
          "<dl>\
            <dt>to litter (with)</dt>\
            <dd> to spread across an area or place untidily:\
            <i>The park was littered with bottles and cans after the concert.</i>\
            <i>Dirty clothes littered the floor of her bedroom.</i>\
          </dl>\
          <dl>\
            <dt>to be littered with &lt;something&gt;</dt>\
            <dd>A place, document, or other object that is littered with something has or contains a lot of that thing:\
            <i>The newspaper has a reputation for being littered with spelling mistakes.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/litter' target='meaning'>Cambridge Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=litter&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/litter.jpg'>"
      , "punctuated":
          "<dl>\
            <dt>to punctuate</dt>\
            <dd>[formal] to happen or cause something to happen repeatedly while something else is happening; to interrupt something repeatedly:\
             <i>The president spoke at length in a speech punctuated by applause.</i>\
            <i>He chatted freely, punctuating his remarks as often as possible with the interviewer\'s first name.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/punctuate' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=punctuated&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/punctuation.png'>"
                , "chirrups":
          "<dl>\
            <dt>to chirp or to chirrup</dt>\
            <dd>(especially of a bird) to make a short high sound or sounds</dd>\
            <dd>to say something with a high, happy voice:</dd>\
            <i>\"Good morning!\" she chirruped.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/chirp?q=chirrup' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=chirp&from=eng&to=rus' target='example'>Example translations</a>"
      , "responsibility":
          "<dl>\
            <dt>responsibility</dt>\
            <dd>something that it is your job or duty to deal with:\
            <i>It is your responsibility to make sure that your homework is done on time.</i>\
            <i>The head of the department has various additional responsibilities.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/responsibility' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=responsibility&from=eng&to=rus' target='example'>Example translations</a>"
      , "parenthood":
          "<dl>\
            <dt>parenthood</dt>\
            <dd>being a mother or a father:\
            <i>the problems of parenthood</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/parenthood' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='http://www.reverso.net/translationresults.aspx?lang=RU&direction=английский-русский' target='example'>Example translations</a>"
      , "immense":
          "<dl>\
            <dt>immense</dt>\
            <dd>extremely big:\
            <i>immense pressure/value</i>\
            <i>Health care costs the country an immense amount of money.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/parenthood' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=immense&from=eng&to=rus'>Example translations</a>\
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Southgate_TC_Immense_Mode.jpg/510px-Southgate_TC_Immense_Mode.jpg'>\
          <a href='https://commons.wikimedia.org/wiki/File:Southgate_TC_Immense_Mode.jpg' target='source'>Photo credit: bulliver / Darren Kirby</a>"
      , "weight":
          "<dl>\
            <dt>weight</dt>\
            <dd>how heavy someone or something is:\
            <i>To lose weight, you must eat less food and play sport</i>\
            <i>The shelf broke under the weight of the books.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/weight' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=weight&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/weight.jpg'>"
      , "drainage":
          "<dl>\
            <dt>to drain</dt>\
            <dd>to remove the liquid from something, usually by pouring it away:\
            <i>Drain the pasta and add the tomatoes.</i>\
            </dd>\
            <dd>If something drains, liquid flows away or out of it.\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/drain_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=drain&from=eng&to=rus' target='example'>Example translations</a>"
      , "proudly":
          "<dl>\
            <dt>proudly</dt>\
            <dd>in a way that shows you are pleased about something you have done, something you own, or someone you know:\
            <i>He proudly showed us a photo of his grandchildren.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/proudly' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=proudly&from=eng&to=rus' target='example'>Example translations</a>"
      , "infinite":
          "<dl>\
            <dt>infinite</dt>\
            <dd>without limits; extremely large or great:\
            <i>&infin;</i>\
            <i>an infinite number/variety</i>\
            <i>The universe is theoretically infinite.</i>\
            <i>With infinite patience, she explained the complex procedure to us.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/infinite' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=infinite&from=eng&to=rus' target='example'>Example translations</a>"
      , "precaution":
          "<dl>\
            <dt>precaution</dt>\
            <dd>something that you do to prevent bad things happening in the future:\
            <i>Driving alone at night can be dangerous, so always take precautions.</i>\
            <i>They called the doctor as a precaution.</i>\
            <i>He took the precaution of locking the door.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/precaution' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=precaution&from=eng&to=rus' target='example'>Example translations</a>"
      , "admired":
          "<dl>\
            <dt>to admire</dt>\
            <dd>to respect or approve of someone or something:\
              <i>You have to admire him for being so determined.</i>\
              <i>I really admire people who can go out and work in such difficult conditions.</i>\
              <i>I really admire her can-do attitude.</i>\
              <i>I admire her courage.</i>\
              </dd>\
              <dd>to look at something or someone, thinking how attractive they are:\
              <i>We stood for a few minutes, admiring the view.</i>\
              <i>I was just admiring your shirt.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/admire' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=admire&from=eng&to=rus' target='example'>Example translations</a>"
      , "insects": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Insect_collage.png/617px-Insect_collage.png'>"
      , "mammals": 
          "<img src='https://media.bloomsbury.com/rep/bj/9781408113998.jpg'>"
      , "footprints": 
          "<img src='https://c1.staticflickr.com/9/8090/8503780928_097b9324c2_z.jpg'>\
          <a href='https://www.flickr.com/photos/deel/8503780928' target='source'>Photo credit: dee & tula monstah</a>"
      , "squdgy":
          "<dl>\
            <dt>squdgy</dt>\
            <dd>Used by Rudyard Kipling to describe the soft, sticky quality of mud. He also invented the word 'squshy' with a similar meaning.\
            <i>Elephants were making piles of wood in the sludgy, squdgy</em> river.</i>\
            </dd>\
          </dl>\
          <a href='http://www.reverso.net/translationresults.aspx?lang=RU&direction=английский-русский' target='example'>Example translations</a>"
      , "mud": 
          "<img src='img/mud.jpg'>"
      , "crouches": 
          "<dl>\
            <dt>to crouch</dt>\
            <dd>to move your body close to the ground by bending your knees:\
            <i>I crouched behind the chair to avoid being seen.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/crouch' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=crouch&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/crouch.jpg  '>"
      , "nature":
          "<dl>\
            <dt>nature</dt>\
            <dd>all the plants, creatures, substances, and forces that exist in the universe, which are not made by people:\
            <i>the laws of nature</i>\
            <i>I like to get out and enjoy nature.</i>\
            <i>a nature trail</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/nature' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=%3Dnature&from=eng&to=rus' target='example'>Example translations</a>"
      , "waving":
          "<dl>\
            <dt>to wave</dt>\
            <dd>to move from side to side in the air or make something move this way:\
            <i>The long grass waved in the breeze.</i>\
            <i>He started waving his arms about wildly.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/wave_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=wave&from=eng&to=rus' target='example'>Example translations</a>"
      , "vaguely": 
          "<dl>\
            <dt>vaguely</dt>\
            <dd>not clear or certain:\
            <i>I have a vague idea of where the hotel is.</i>\
            <i>He was a bit vague about directions.</i>\
            </dd>\
            <dd>showing that someone is not thinking clearly or does not understand:\
            <i>a vague expression</i>\
            <dd>\
          </dl>\
          <a href='' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=vaguely&from=eng&to=rus' target='example'>Example translations</a>\
          <img src=''>"
      
      , "aimed": 
          "<dl>\
            <dt>to aim</dt>\
            <dd>to point (a weapon) towards someone or something:\
            <i>He aimed the gun at the lion.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/aim_2' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=aim&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://c1.staticflickr.com/3/2423/3914890410_be4eddb4b8_b.jpg'>\
          <a href='https://www.flickr.com/photos/dahlstroms/3914890410' target='source'>Photo credit: Håkan Dahlström</a>"
      , "laundry": 
          "<dl>\
            <dt>laundry</dt>\
            <dd>clothes, sheets, etc that need to be washed:\
            <i>to do the laundry</i>\
            <i>a laundry basket</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/laundry' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=laundry&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/laundry.jpg'>"
      , "hoof": 
          "<dl>\
            <dt>hoof</dt>\
            <dd>the hard part on the foot of a horse and some other large animals\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/hoof' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=hoof&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/hoof.jpg'>"
      , "moorhen": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Common_moorhen_%28Gallinula_chloropus%29_with_worm.jpg/640px-Common_moorhen_%28Gallinula_chloropus%29_with_worm.jpg'>"
      , "roe deer": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Roe_deer_buck.jpg/640px-Roe_deer_buck.jpg'>"
      , "scribble": 
          "<dl>\
            <dt>scribble</dt>\
            <dd>to write or draw something quickly and carelessly:\
            <i>She scribbled some notes in her book</i>\
            </dd>\
            <dd>something that has been scribbled\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/scribble' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=scribble&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Scribble_.png/640px-Scribble_.png'>"
      , "hunter": 
          "<dl>\
            <dt>hunter</dt>\
            <dd>a person who chases and kills wild animals\
            <i></i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/hunt_1?q=hunter' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=hunter&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='http://www.brucelangton.com/Ruarks-Native-Tracker-Etch-lg.jpg'>"
      , "trampled": 
          "<dl>\
            <dt>to trample</dt>\
            <dd>to walk on something, usually damaging or hurting it:\
            <i>She shouted at the boys for trampling on her flowers.</i>\
            <i><Two people were trampled to death in the panic./i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/trample' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=trample&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/trample.jpg'>"
      , "chipped enamel": 
          "<img src='http://huetour.club/wp-content/uploads/2018/05/kitchen-sink-enamel-repair-we-can-restore-your-chipped-scratched-enamel-or-ceramic-sink-and-offer-a-fast-affordable-service-kitchen-sink-porcelain-repair.jpg'>"
      , "bath": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/An_old_bath_in_a_field_-_geograph.org.uk_-_1455437.jpg'>"
      , "cow": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Webster%27s_cows.jpg/526px-Webster%27s_cows.jpg'>"
      , "patience":
          "<dl>\
            <dt>patience</dt>\
            <dd>the quality of being able to stay calm and not get angry, especially when something takes a long time:\
            <i>Finally, I lost my patience and shouted at her.</i>\
            <i>Making small scale models takes a lot of patience.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/patience' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=patience&from=eng&to=rus' target='example'>Example translations</a>"
      , "bundle":
          "<dl>\
            <dt>bundle</dt>\
            <dd>a number of things that are tied together:\
            <i>a bundle of letters</i>\
            <i>a bundle of clothes</i>\
            <i></i>\
            </dd>\
            </dt>\
            <dt>a bundle of energy/nerves [informal]\
            <dd>a very energetic or nervous person\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/bundle_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=bundle&from=eng&to=rus' target='example'>Example translations</a>"
      , "drift":
          "<dl>\
            <dt>to drift</dt>\
            <dd>to be moved slowly somewhere by currents of wind or water:\
            <i>Smoke drifted across the rooftops.</i>\
            <i>The boat drifted towards the beach.</i>\
            <dd>\
            <dd>to move somewhere slowly:\
            <i>Guests were drifting out onto the terrace.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/drift_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=drift&from=eng&to=rus' target='example'>Example translations</a>"
      , "Snuffling":
          "<dl>\
            <dt>to snuffle</dt>\
            <dd>(of an animal) to breathe in quickly and repeatedly through the nose while smelling something:\
            <i>The dog snuffled around and began digging at the base of the tree.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/snuffle' target='meaning'>Cambridge Learner's Dictionary</a>"      
      , "jostling": 
          "<dl>\
            <dt>to jostle</dt>\
            <dd>to push other people in order to get somewhere in a crowd\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/jostle' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=jostle&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://www.pggwrightson.co.nz/-/media/Corporate/Images/Livestock-Images/LS-Landing/LS-Landing-Live-Export.ashx?mh=320&h=320&w=680&la=en&hash=BBA93492D9EAC3E8F48492987174C86BACBA3F79'>"
      , "logging tractors": 
          "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Harvester_John_Deere_1170E.JPG/640px-Harvester_John_Deere_1170E.JPG'>"
      , "playground": 
          "<img src='img/playground.jpg'>"
      , "labour":
          "<dl>\
            <dt>labour</dt>\
            <dd> practical work, especially when it involves hard physical effort:\
            <i>The car parts themselves are not expensive, it\'s the labour that costs the money.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/labour' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=labour&from=eng&to=rus' target='example'>Example translations</a>"
      , "leisure":
          "<dl>\
            <dt>leisure</dt>\
            <dd>the time when you are not working or doing other duties;<br />\
              leisure activities:\
            <i>Most people only have a limited amount of leisure time.</i>\
            <i>The town lacks leisure facilities such as a swimming pool or tennis courts.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/leisure' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=leisure&from=eng&to=rus' target='example'>Example translations</a>"
      , "tracks": 
          "<img src='img/tracks.jpg'>"
      , "newt": 
          "<img src='img/newt.jpg'>"
      , "dragging":
          "<dl>\
            <dt>to drag</dt>\
            <dd>to move something by pulling it along a surface, usually the ground:\
            <i>Pick the chair up instead of dragging it behind you!</i>\
            <i>She dragged the canoe down to the water.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/drag' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=drag&from=eng&to=rus' target='example'>Example translations</a>"
      , "tail": 
          "<dl>\
            <dt>tail</dt>\
            <dd>a part of an animal's body, sticking out from the base of the back, or something similar in shape or position:\
            <i>The dog wagged its tail excitedly.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/tail' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=tail&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/tails.jpg'>\
          <a href='https://www.flickr.com/photos/tonythemisfit/3318816038' target='source'>Photo credit: Tony Fischer</a>"
      , "sodden": 
          "<dl>\
            <dt>sodden</dt>\
            <dd>(of something that can absorb water) extremely wet:\
            <i>The football field was absolutely sodden.</i>\
            <i>Her thin coat quickly became sodden.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/sodden' target='meaning'>Cambridge Dictionary</a>\
          <img src='img/sodden.jpg'>"
      , "trail": 
          "<dl>\
            <dt>trail</dt>\
            <dd>a line of marks that someone or something leaves behind as they move:\
            <i>He left a trail of muddy footprints across the kitchen floor.</i>\
            </dd>\
            <dd>a path through the countryside, often where people walk:\
            <i>a nature trail</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/trail_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=trail&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gabes-mountain-trail-gsmnp1.jpg/640px-Gabes-mountain-trail-gsmnp1.jpg'>"
      , "shallow": 
          "<dl>\
            <dt>shallow</dt>\
            <dd>not deep:\
            <i>shallow water</i>\
            <i>a shallow dis</i>\
            <i>Whales cannot swim in shallow water.</i>\
            <i>Place alternate layers of pasta and meat sauce in a shallow dish.</i>\
            <i>We dipped our feet in a shallow pool by the rocks.</i>\
            <i>Don\'t dive into the shallow end of the pool.\</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/shallow' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=shallow&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='http://freeaussiestock.com/free/Australiana/slides/paddling.jpg'>"
      , "rut": 
          "<dl>\
            <dt>rut</dt>\
            <dd>a deep, narrow mark in the ground made by a wheel\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/rut' target='meaning'>Cambridge Learner's Dictionary</a>\
          <img src='http://s0.geograph.org.uk/geophotos/02/26/28/2262859_1a974453.jpg'>"
      , "tossing":
          "<dl>\
            <dt>to toss</dt>\
            <dd>to throw something somewhere carelessly:\
            <i>He read the letter quickly, then tossed it into the bin.</i>\
            </dd>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/toss_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=toss&from=eng&to=rus' target='example'>Example translations</a>"
      , "dollops":
          "<dl>\
            <dt>dollop</dt>\
            <dd>a lump or mass of a soft substance, usually food:\
            <i>a dollop of cream</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/dollop' target='meaning'>Cambridge Learner's Dictionary</a>"
      , "bombarding":
          "<dl>\
            <dt>to bombard</dt>\
            <dd>to continuously attack a place using guns and bombs\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/bombard' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=bombard&from=eng&to=rus' target='example'>Example translations</a>"
      , "effacing":
          "<dl>\
            <dt>to efface</dt>\
            <dd>[formal] to remove something intentionally:\
            <i>The whole country had tried to efface the memory of the old dictatorship.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/efface' target='meaning'>Cambridge Dictionary</a>\
          <img src='img/efface.jpg'>\
          <a href='https://www.flickr.com/photos/h_crimson/9277568896/' target='source'>Photo credit: Mattia Merlo</a>"
      , "indignant":
          "<dl>\
            <dt>indignant</dt>\
            <dd>angry because you have been treated badly or unfairly:\
            <i>Consumers are indignant at/about the high prices charged by car dealers.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/indignant' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=indignant&from=eng&to=rus' target='example'>Example translations</a>"
      , "wiped": 
          "<dl>\
            <dt>wipe</dt>\
            <dd> to clean or dry something by moving a cloth across it:\
            <i>I had a job wiping tables in a cafe.</i>\
            <i>She wiped her hands on the towel.</i>\
            </dd>\
            <dd>to remove dirt, water, a mark, etc from something with a cloth or your hand:\
            <i>He wiped a tear from his eye.</i>\
            </dd>\
            <dd>if someone or something wipes a computer's, phone's, etc. memory, it removes all the data from the memory:The virus wiped the memory of my computer.\
            <i>The virus wiped the memory of my computer.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/wipe_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=wipe&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/wipe.jpg'>\
          <a href='https://www.flickr.com/photos/yourbestdigs/27548532125' target='source'>Photo credit: Your Best Digs</a>"
      , "deep": 
          "<dl>\
            <dt>deep</dt>\
            <dd>having a long distance from the top to the bottom:\
            <i>The water is a lot deeper than it seems.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/deep_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=deep&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/deep.jpg'>"
      , "resist":
          "<dl>\
            <dt>resist</dt>\
            <dd>to stop yourself from doing something that you want to do:\
            <i>I can't resist chocolate.</i>\
            <i>I just can't resist reading other people's mail.</i>\
            </dd>\
            <dd>to refuse to accept something and try to stop it from happening:\
            <i>The President is resisting calls for him to resign.</i>\
            </dd>\
            <dd>to fight against someone or something that is attacking you:\
            <i>British troops resisted the attack for two days.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/resist' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=resist&from=eng&to=rus' target='example'>Example translations</a>"
      , "russet": 
          "<dl>\
            <dt>russet</dt>\
            <dd>a reddish-brown colour\
            <div style='height: 50px;width: 50px;background: #80461b;background: -moz-linear-gradient(top, #80461b 0%, #e37d6e 100%);background: -webkit-linear-gradient(top, #80461b 0%,#e37d6e 100%);background: linear-gradient(to bottom, #80461b 0%,#e37d6e 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80461b', endColorstr='#e37d6e',GradientType=0 );'></div>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/english/russet' target='meaning'>Cambridge Dictionary</a>\
          <img src=''>"
      , "sparrow": 
          "<dl>\
            <dt>sparrow</dt>\
            <dd>a small, brown bird that is common in towns and cities\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/sparrow' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=sparrow&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Passer_domesticus_Reifel_Migratory_Bird_Sanctuary-15.jpg/640px-Passer_domesticus_Reifel_Migratory_Bird_Sanctuary-15.jpg'>"
      , "squashed": 
          "<dl>\
            <dt>to squash</dt>\
            <dd>to crush something into a flat shape:\
            <i>I stepped on a spider and squashed it.</i>\
            </dd>\
            <dd>[often passive] to push someone or something into a small space:\
            <i>The kids were all squashed into the back seat.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/squash_2' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=squash&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='img/squashed.jpg'>\
          <a href='https://www.flickr.com/photos/jam_project/9648340515' target='source'>Photo credit: JAM Project</a>"
      , "feathers": 
          "<dl>\
            <dt>feathers</dt>\
            <dd>one of the soft, light things that grow from and cover a bird's skin\
            <i></i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/feather' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=feather&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://www.publicdomainpictures.net/pictures/30000/velka/bird-feather-13486506267nW.jpg'>"
      , "fluttered":
          "<dl>\
            <dt>to flutter</dt>\
            <dd>to move quickly and gently up and down or from side to side in the air, or to make something move in this way:\
            <i>The flag was fluttering in the breeze.</i>\
            </dd>\
            <dd>to move somewhere quickly and gently, usually without any particular purpose:\
              <i>There were several moths fluttering around the light.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/flutter_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=flutter&from=eng&to=rus' target='example'>Example translations</a>"
      , "breeze":
          "<dl>\
            <dt>breeze</dt>\
            <dd>B1 a gentle wind:\
            <i>a cool breeze</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/breeze_1' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=breeze&from=eng&to=rus' target='example'>Example translations</a>"
      , "ant": 
          "<dl>\
            <dt>ant</dt>\
            <dd> a small, black or red insect that lives in groups on the ground\
            <i></i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/ant' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=ant&from=eng&to=rus' target='example'>Example translations</a>\
          <img src='https://www.publicdomainpictures.net/pictures/120000/velka/ant-silhouette.jpg'>"
      , "investigates":
          "<dl>\
            <dt>to investigate</dt>\
            <dd>o try to discover all the facts about something, especially a crime or accident:\
            <i>He has been questioned by detectives investigating Jenkins\' murder.</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/investigate' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=investigate&from=eng&to=rus' target='example'>Example translations</a>"
      , "wealth": 
          "<dl>\
            <dt>wealth</dt>\
            <dd>a large amount of money or valuable possessions that someone has:\
            <i>He enjoyed his new wealth and status.</i>\
            </dd>\
            <dd>a large amount of something good:\
            <i>a wealth of experience/information</i>\
            </dd>\
          </dl>\
          <a href='https://dictionary.cambridge.org/dictionary/learner-english/wealth' target='meaning'>Cambridge Learner's Dictionary</a>\
          <a href='https://tatoeba.org/rus/sentences/search?query=wealth&from=eng&to=rus' target='example'>Example translations</a>"
      }
      
      this.tooltipDiv = document.querySelector("div.tooltip")
      this.show = true

      let listener = this.showTooltip.bind(this)
      document.body.addEventListener("mousedown", listener, true)
    }

    showTooltip (event) {
      if (this.show) {
        let span = this._getElement(event, "SPAN")
        let text
          , html

        if (!span) { return }

        text = span.innerText
        html = this.tooltipMap[text]

        if (!html) { return }

        this.tooltipDiv.innerHTML = html

        this.show = false

      } else {
        let link = this._getElement(event, "A")

        if (!link) {
          this.show = true
          this.tooltipDiv.innerHTML = ""
        }
      }
    }

    _getElement(event, nodeName) {
      let target = event.target

      while (target && target.nodeName !== nodeName) {
        target = target.parentNode
      }

      return target
    }
  }

  window.tooltips = new Tooltips()

})(window)
