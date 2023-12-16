const quirks = [
  {
    name: "Obsessively polishes a lucky coin.",
    info: "Always seen rubbing a coin for good luck.",
  },
  {
    name: "Speaks in rhymes.",
    info: "Regardless of the situation, they can't help rhyming.",
  },
  {
    name: "Has a phobia of cats.",
    info: "Even the mention of felines sends them into a panic.",
  },
  {
    name: "Constantly whistles old tunes.",
    info: "Known for their endless repertoire of whistled melodies.",
  },
  {
    name: "Collects exotic teas.",
    info: "Fascinated by teas from around the world, always seeking new varieties.",
  },
  {
    name: "Forgets names but never faces.",
    info: "Remembers everyone's face but mixes up names.",
  },
  {
    name: "Believes in astrology fervently.",
    info: "Consults the stars for every decision, big or small.",
  },
  {
    name: "Wears a perpetually broken spectacle.",
    info: "One lens is always cracked, but they refuse to replace it.",
  },
  {
    name: "Has an invisible friend.",
    info: "Often seen talking to someone who isn't there.",
  },
  {
    name: "Draws doodles on everything.",
    info: "Their signature is a small doodle left on every document or surface.",
  },
  {
    name: "Never sits down.",
    info: "Always standing, even when it would be normal to sit.",
  },
  {
    name: "Writes letters to a childhood hero.",
    info: "Still composes and sends letters to a hero they've never met.",
  },
  {
    name: "Wears an excessively large hat.",
    info: "Known for their comically oversized headwear.",
  },
  {
    name: "Laughs at inopportune moments.",
    info: "Finds humor in the most serious or awkward situations.",
  },
  {
    name: "Carries a beloved doll.",
    info: "Always has a ragged, well-loved doll tucked in their belt or bag.",
  },
  {
    name: "Insists on being called by a title.",
    info: "Demands to be addressed with a self-bestowed title.",
  },
  {
    name: "Never uses the same word twice.",
    info: "Strives to use an extensive and obscure vocabulary.",
  },
  {
    name: "Obsessed with cleaning their shoes.",
    info: "Stops to clean their shoes obsessively, even during conversations.",
  },
  {
    name: "Whispers to plants.",
    info: "Believes they can communicate with greenery.",
  },
  {
    name: "Afraid of their own reflection.",
    info: "Avoids mirrors and reflective surfaces.",
  },
  {
    name: "Has a signature laugh.",
    info: "An unmistakable and contagious laugh.",
  },
  {
    name: "Always eating something.",
    info: "Perpetually snacking on something, even in serious discussions.",
  },
  {
    name: "Tells outrageous lies unconvincingly.",
    info: "Known for their terrible and unbelievable fibs.",
  },
  {
    name: "Refuses to wear the color blue.",
    info: "Has a mysterious aversion to anything blue.",
  },
  {
    name: "Carries a pocketful of marbles.",
    info: "Always ready for a game or to leave a trail.",
  },
  {
    name: "Has a pet mouse in their pocket.",
    info: "Talks to and consults their tiny rodent friend.",
  },
  {
    name: "Braids their beard with flowers.",
    info: "Decorates their beard or hair with fresh flowers daily.",
  },
  {
    name: "Meticulously counts steps.",
    info: "Obsessed with the number of steps they take.",
  },
  {
    name: "Hums in their sleep.",
    info: "Known to hum melodious tunes while napping.",
  },
  {
    name: "Always carrying too many books.",
    info: "Burdened with an impractical number of books.",
  },
  {
    name: "Uses exaggerated hand gestures.",
    info: "Communicates with wildly expressive hand movements.",
  },
  {
    name: "Obsessed with a historical figure.",
    info: "Can relate any conversation back to this person.",
  },
  {
    name: "Believes they're cursed by a witch.",
    info: "Convinced of a witch's curse affecting their life.",
  },
  {
    name: "Never eats in public.",
    info: "Mysteriously refuses to eat around others.",
  },
  {
    name: "Collects odd socks.",
    info: "Fascinated by and collects mismatched socks.",
  },
  {
    name: "Habitually late, but always apologetic.",
    info: "Never on time, but endlessly remorseful about it.",
  },
  {
    name: "Paints their nails in vivid colors.",
    info: "Sports brightly colored and intricately painted nails.",
  },
  {
    name: "Speaks in a theatrical whisper.",
    info: "Conveys even mundane information as if it's a great secret.",
  },
  {
    name: "Has a signature scent.",
    info: "Carries a distinct and memorable personal aroma.",
  },
  {
    name: "Writes poetry about their adventures.",
    info: "Composes verses about every significant event.",
  },
  {
    name: "Always wears a mismatched glove.",
    info: "One hand dons a completely different style of glove.",
  },
  {
    name: "Refuses to speak to children.",
    info: "Mysteriously avoids any interaction with kids.",
  },
  {
    name: "Sings instead of speaking.",
    info: "Expresses themselves through song, regardless of the setting.",
  },
  {
    name: "Carries a lucky rabbit's foot.",
    info: "Superstitiously clings to a worn rabbit's foot for luck.",
  },
  {
    name: "Wears a cloak of many patches.",
    info: "Cloak adorned with patches from various places and events.",
  },
  {
    name: "Has a habit of misplacing things.",
    info: "Constantly losing and searching for their belongings.",
  },
  {
    name: "Talks to their own shadow.",
    info: "Engages in deep conversations with their shadow.",
  },
  {
    name: "Obsessed with perfect symmetry.",
    info: "Everything they own or do must be symmetrical.",
  },
  {
    name: "Refers to themselves in the third person.",
    info: 'Never uses "I" or "me" when talking about themselves.',
  },
  {
    name: "Carries a weathered map of a fictional place.",
    info: "Treasures a map of a place that doesn't exist.",
  },
  {
    name: "Haunted by past mistakes.",
    info: "Plagued by guilt and often seen muttering apologies to unseen ghosts.",
  },
  {
    name: "Secretly battles a dark addiction.",
    info: "Struggles with a hidden, harmful addiction.",
  },
  {
    name: "Has a missing finger.",
    info: "Lost under mysterious and possibly sinister circumstances.",
  },
  {
    name: "Carries a bloodstained handkerchief.",
    info: "Keeps a reminder of a tragic event always close.",
  },
  {
    name: "Wears a locket with a stranger's portrait.",
    info: "Mourns a person they never met.",
  },
  {
    name: "Speaks to a deceased loved one.",
    info: "Believes they can communicate with a lost family member or friend.",
  },
  {
    name: "Obsessive compulsive rituals.",
    info: "Engages in ritualistic behaviors to keep dark thoughts at bay.",
  },
  {
    name: "Paranoid about being followed.",
    info: "Constantly looks over their shoulder, fearing unseen pursuers.",
  },
  {
    name: "Insomnia plagued by nightmares.",
    info: "Suffers from lack of sleep due to recurring nightmares.",
  },
  {
    name: "Scarred from torture.",
    info: "Bears physical and emotional scars from past torture.",
  },
  {
    name: "Whispers an old war chant.",
    info: "Repeats a haunting melody from a long-forgotten battle.",
  },
  {
    name: "Furtive glances at the moon.",
    info: "Fears what happens to them under its light.",
  },
  {
    name: "Carries a vial of poison.",
    info: "Always has a deadly substance at hand for unknown reasons.",
  },
  {
    name: "Suffering from a cursed wound.",
    info: "Bears a wound that never heals and occasionally bleeds.",
  },
  {
    name: "Drawn to fire.",
    info: "Mesmerized by flames, hinting at a darker fascination.",
  },
  {
    name: "Mourns a child's death daily.",
    info: "Consumed by grief over the loss of a child.",
  },
  {
    name: "Writes letters to an enemy.",
    info: "Pens unsent letters filled with anger and sorrow to a foe.",
  },
  {
    name: "Never laughs or smiles.",
    info: "Their face is a mask of sorrow or grim determination.",
  },
  {
    name: "Hears whispering voices.",
    info: "Plagued by whispers only they can hear.",
  },
  {
    name: "Keeps a list of names.",
    info: "A list of people they believe wronged them, constantly updated.",
  },
  {
    name: "Refuses to touch anyone.",
    info: "Avoids physical contact, as if fearing they'll be corrupted.",
  },
  {
    name: "Wears a blindfold over one eye.",
    info: "Covers an eye that saw something unspeakable.",
  },
  {
    name: "Carries a book of dark lore.",
    info: "Obsessed with a tome filled with forbidden knowledge.",
  },
  {
    name: "Has a pact with an unknown entity.",
    info: "Bound by a secret and ominous agreement.",
  },
  {
    name: "Obsessed with death omens.",
    info: "Sees signs of death and doom in everyday occurrences.",
  },
  {
    name: "Collects sharp blades.",
    info: "Fascinated with collecting various knives and daggers.",
  },
  {
    name: "Burns incense to ward off spirits.",
    info: "Constantly surrounded by smoke to keep away ghosts.",
  },
  {
    name: "Recurring seizures or trances.",
    info: "Falls into unexplained fits, perhaps of a mystical nature.",
  },
  {
    name: "Cares for a grave that isn't theirs.",
    info: "Tends to a mysterious grave with devotion.",
  },
  {
    name: "Lost their shadow.",
    info: "Somehow, their shadow has been taken or lost.",
  },
  {
    name: "Eyes change color with mood.",
    info: "Their eyes shift color, revealing their dark inner emotions.",
  },
  {
    name: "Always cold to the touch.",
    info: "Their skin unnaturally cold, hinting at a strange affliction.",
  },
  {
    name: "Secretly feeds on pain.",
    info: "Draws strength from the suffering of others.",
  },
  {
    name: "Haunted by a vengeful spirit.",
    info: "Tormented by a spirit seeking retribution.",
  },
  {
    name: "Wears chains under their clothes.",
    info: "The sound of chains is a constant reminder of their bondage.",
  },
  {
    name: "Speaks in forgotten languages.",
    info: "Occasionally lapses into ancient tongues in mid-conversation.",
  },
  {
    name: "Afraid of holy symbols.",
    info: "Unnerved or pained by religious icons.",
  },
  {
    name: "Keeps a cryptic journal.",
    info: "Filled with unsettling entries that make little sense.",
  },
  {
    name: "Has vivid hallucinations.",
    info: "Reacts to things others cannot see or hear.",
  },
  {
    name: "Obsessed with a doomsday prophecy.",
    info: "Convinced of an impending apocalypse they must prepare for.",
  },
  {
    name: "Cannot enter homes uninvited.",
    info: "Bound by a mysterious force that prevents them from entering without permission.",
  },
  {
    name: "Refuses to speak of their past.",
    info: "Their history is a closed book, filled with dark secrets.",
  },
  {
    name: "Casts no reflection.",
    info: "Mirrors fail to capture their image.",
  },
  {
    name: "Marks days since a tragic event.",
    info: "Keeps a tally, each mark a reminder of a past horror.",
  },
  {
    name: "Wears a mask to hide scars.",
    info: "Conceals disfigurements that hint at a dark story.",
  },
  {
    name: "Constantly checks for pursuers.",
    info: "Believes they are being hunted by something relentless.",
  },
  {
    name: "Never reveals their full name.",
    info: "Fearful of the power their name might hold.",
  },
  {
    name: "Feels no physical pain.",
    info: "Numb to physical suffering, but perhaps not emotional.",
  },
  {
    name: "Believes they are cursed.",
    info: "Convinced they bring misfortune to those around them.",
  },
  {
    name: "Carries a pendant filled with ashes.",
    info: "Wears a necklace containing the ashes of a loved one or foe.",
  },
  {
    name: "Dramatically announces their entrance.",
    info: "Always enters a room with a booming, heroic declaration.",
  },
  {
    name: "Uncontrollably laughs in danger.",
    info: "Finds danger inexplicably hilarious.",
  },
  {
    name: "Wears a cape that's too long.",
    info: "Constantly trips over an overly dramatic, flowing cape.",
  },
  {
    name: "Has a sidekick who's a chicken.",
    info: "Bravely accompanied by a surprisingly fearless chicken.",
  },
  {
    name: "Always poses heroically.",
    info: "Strikes a heroic pose in even the most mundane situations.",
  },
  {
    name: "Mistakes mundane items for artifacts.",
    info: "Treats ordinary objects like legendary treasures.",
  },
  {
    name: "Names their moves out loud.",
    info: "Shouts the names of their attacks or actions in combat.",
  },
  {
    name: "Wears overly shiny armor.",
    info: "Blindingly polished armor that's more flash than function.",
  },
  {
    name: "Has a booming, over-the-top laugh.",
    info: "A laugh that echoes heroically (or comically) far and wide.",
  },
  {
    name: "Inadvertently saves cats in trees.",
    info: "Somehow always ends up rescuing felines wherever they go.",
  },
  {
    name: "Obsessed with perfect hair.",
    info: "Constantly grooming to maintain their impeccable hairstyle.",
  },
  {
    name: "Tells tall tales of their deeds.",
    info: "Embellishes their adventures with wildly exaggerated details.",
  },
  {
    name: "Carries an enormous, impractical sword.",
    info: "Wields a sword far too large to be practical.",
  },
  {
    name: "Wears a mismatched set of armor.",
    info: "Assembled from various heroic escapades, none of it matches.",
  },
  {
    name: "Speaks in overly dramatic monologues.",
    info: "Even simple conversations turn into epic speeches.",
  },
  {
    name: "Constantly challenges people to arm-wrestle.",
    info: "Sees arm-wrestling as the ultimate test of strength.",
  },
  {
    name: "Refers to themselves in the third person.",
    info: "Always talks about themselves as if narrating an epic.",
  },
  {
    name: "Wears sunglasses at night.",
    info: "Believes it adds to their mysterious, heroic allure.",
  },
  {
    name: "Has a habit of misquoting famous sayings.",
    info: "Always slightly off when trying to sound wise or profound.",
  },
  {
    name: "Always offers to carry others' burdens.",
    info: "Literally tries to carry other people's belongings.",
  },
  {
    name: "Refuses to walk through doors normally.",
    info: "Must make an entrance, be it leaping, rolling, or striding dramatically.",
  },
  {
    name: "Has a custom theme song.",
    info: "Humming or singing a personal theme song in heroic moments.",
  },
  {
    name: "Takes everything as a challenge.",
    info: "Views every task, no matter how small, as a heroic quest.",
  },
  {
    name: "Believes they're destined for greatness.",
    info: "Convinced they're the protagonist of a grand story.",
  },
  {
    name: "Inspirational speeches at odd times.",
    info: "Breaks into motivational speeches at seemingly random moments.",
  },
  {
    name: "Can't resist a damsel in distress.",
    info: "Compulsively aids anyone they perceive as needing a hero.",
  },
  {
    name: "Refuses to ride animals normally.",
    info: "Rides horses backwards, side-saddle, or standing up for dramatic effect.",
  },
  {
    name: "Has a signature battle cry.",
    info: "A unique and often amusing yell they let out in combat.",
  },
  {
    name: "Wears a mysteriously windblown cloak.",
    info: "Their cloak billows dramatically, even indoors.",
  },
  {
    name: "Tries to pet every animal they see.",
    info: "Irresistibly drawn to animals, regardless of the situation.",
  },
  {
    name: "Uses excessively flowery language.",
    info: "Speaks in an old-fashioned or overly poetic manner.",
  },
  {
    name: "Laughs in the face of peril.",
    info: "Finds joy and humor in even the most dangerous situations.",
  },
  {
    name: "Overly enthusiastic handshakes.",
    info: "Greets everyone with an overly vigorous handshake.",
  },
  {
    name: "Always looking for a sidekick.",
    info: "Eagerly seeks a companion for their heroic journeys.",
  },
  {
    name: "Constantly misplaces their weapon.",
    info: "Often forgets where they've put their sword or shield.",
  },
  {
    name: "Refuses to believe in lost causes.",
    info: "Optimistically insists there's hope in every situation.",
  },
  {
    name: "Has an overly dramatic gasping reaction.",
    info: "Reacts to news or events with exaggerated shock or awe.",
  },
  {
    name: "Mistakes ordinary people for villains.",
    info: "Frequently confuses regular folk for nefarious characters.",
  },
  {
    name: "Always trying to strike a deal.",
    info: "Tries to barter or negotiate in even the most inappropriate times.",
  },
  {
    name: "Believes their life is a stage play.",
    info: "Acts as if they're constantly in a dramatic performance.",
  },
  {
    name: "Constantly misreads social cues.",
    info: "Oblivious to awkwardness or social norms.",
  },
  {
    name: "Unusual obsession with a mundane object.",
    info: "Treats a simple item like a fork or spoon as a talisman of great importance.",
  },
  {
    name: "Incessantly optimistic, even in dire situations.",
    info: "Unfailingly cheerful, regardless of the circumstances.",
  },
  {
    name: "Fancy footwork in battle.",
    info: "Incorporates dance moves into their fighting style.",
  },
  {
    name: "Wears a helmet with an absurd plume.",
    info: "A helmet adorned with an excessively large feather or plume.",
  },
  {
    name: "Has a catchphrase they use constantly.",
    info: "Repeats a specific phrase in almost every conversation.",
  },
  {
    name: "Refuses to admit when lost.",
    info: "Insists they know exactly where they are, even when clearly lost.",
  },
  {
    name: "Takes dramatic pauses mid-sentence.",
    info: "Pauses for effect at odd times during conversations.",
  },
  {
    name: "Incapable of whispering.",
    info: "Speaks in a loud voice, incapable of toning it down.",
  },
  {
    name: "Believes mundane tasks are epic quests.",
    info: "Treats simple chores like legendary adventures.",
  },
  {
    name: "Obsessed with counting tiles.",
    info: "Counts floor tiles wherever they go.",
  },
  {
    name: "Speaks in animal noises.",
    info: "Communicates using a variety of animal sounds.",
  },
  {
    name: "Wears two different shoes.",
    info: "Never wears a matching pair of shoes.",
  },
  {
    name: 'Carries an invisible "pet".',
    info: "Talks and cares for an imaginary pet.",
  },
  {
    name: "Laughs at their own jokes.",
    info: "Finds themselves hilariously funny, often the only one laughing.",
  },
  {
    name: "Uncontrollable hiccups when lying.",
    info: "Hiccups every time they tell a fib.",
  },
  {
    name: "Mistakes inanimate objects for people.",
    info: "Talks to objects like they're old friends.",
  },
  {
    name: "Obsessed with a random color.",
    info: "Everything they own is the same, very specific color.",
  },
  {
    name: "Collects ridiculous hats.",
    info: "Proudly wears a different absurd hat each day.",
  },
  {
    name: "Insists on walking backwards.",
    info: "Believes walking backward is luckier than forwards.",
  },
  {
    name: "Can't remember their own name.",
    info: "Always introduces themselves with a different name.",
  },
  {
    name: "Sings instead of speaking.",
    info: "Turns every sentence into a song.",
  },
  {
    name: "Thinks they're a famous bard.",
    info: "Acts like a celebrity, even though nobody knows them.",
  },
  {
    name: "Tells bad puns constantly.",
    info: "Can't resist making a pun, no matter how groan-worthy.",
  },
  {
    name: "Imitates people's accents poorly.",
    info: "Tries to mimic the accent of whoever they're talking to.",
  },
  {
    name: "Carries a pocket full of glitter.",
    info: "Throws glitter in the air for dramatic effect.",
  },
  {
    name: "Believes they're invisibly cloaked.",
    info: "Walks around as if unseen, but clearly visible.",
  },
  {
    name: "Thinks they can speak with rocks.",
    info: "Engages in one-sided conversations with pebbles and boulders.",
  },
  {
    name: "Always wears elaborate fake mustaches.",
    info: "Sports a new, outrageous mustache daily.",
  },
  {
    name: "Pretends to be a wizard.",
    info: 'Makes grandiose hand gestures and spouts gibberish "spells."',
  },
  {
    name: "Juggles anytime they're standing still.",
    info: "Can't resist juggling whatever is at hand.",
  },
  {
    name: "Uses outrageous metaphors.",
    info: "Comes up with bizarre and funny metaphors for everything.",
  },
  {
    name: "Refuses to use doors.",
    info: "Climbs in and out of windows, ignoring doors completely.",
  },
  {
    name: "Constantly loses their pants.",
    info: "Frequently caught pulling up their trousers in public.",
  },
  {
    name: "Wears clothes inside out.",
    info: "Claims it's the latest fashion trend.",
  },
  {
    name: "Has a laugh like a donkey's bray.",
    info: "Their unique laugh is unmistakable (and a bit embarrassing).",
  },
  {
    name: "Always carries a rubber duck.",
    info: "Consults the duck when making decisions.",
  },
  {
    name: "Insists they're from the future.",
    info: "Makes wild claims about life in a distant, fantastical future.",
  },
  {
    name: "Scared of their own shadow.",
    info: "Literally jumps at the sight of their shadow.",
  },
  {
    name: "Believes they're a master disguise artist.",
    info: "Wears terrible disguises and thinks they're unrecognizable.",
  },
  {
    name: "Mixes up common sayings.",
    info: "Gets idioms and proverbs hilariously wrong.",
  },
  {
    name: "Wears spectacles with no lenses.",
    info: 'Claims they help them "see" better.',
  },
  {
    name: "Thinks they can control the weather.",
    info: "Makes grand gestures at the sky, expecting it to respond.",
  },
  {
    name: "Always talks in third person.",
    info: 'Refers to themselves by name, never "I" or "me."',
  },
  {
    name: "Carries a backpack full of socks.",
    info: "Obsessed with keeping their feet (and others') warm.",
  },
  {
    name: "Starts a dance party in awkward situations.",
    info: "Breaks into dance when they don't know what else to do.",
  },
  {
    name: "Thinks cats are spies.",
    info: "Suspicious of felines, believing they're up to something.",
  },
  {
    name: "Believes they're a dragon in disguise.",
    info: 'Roars and breathes "fire" (usually just cold air).',
  },
  {
    name: "Always wears a giant fake beard.",
    info: "Claims it's a mark of wisdom.",
  },
  {
    name: "Refuses to use conventional weapons.",
    info: "Fights with outrageously impractical items, like a spoon or a broom.",
  },
  {
    name: "Writes terrible poetry about daily life.",
    info: "Recites their latest bad verse to anyone who'll listen.",
  },
  {
    name: "Habitually knits in public.",
    info: "Knits everything from scarves to socks during conversations.",
  },
  {
    name: "Takes everything literally.",
    info: "Unable to understand sarcasm or idioms.",
  },
  {
    name: "Claims to have an evil twin.",
    info: "Blames their mischiefs on a nonexistent twin.",
  },
  {
    name: "Sneezes with exaggerated loudness.",
    info: "Each sneeze is a mini event.",
  },
  {
    name: "Wears a helmet with absurdly large horns.",
    info: "Never without their oversized, cumbersome helmet.",
  },
  {
    name: "Slightly uneven smile.",
    info: "Their smile is charmingly asymmetrical.",
  },
  {
    name: "Taps fingers when thinking.",
    info: "A gentle, almost imperceptible tap when lost in thought.",
  },
  {
    name: "Prefers only one type of drink.",
    info: "Will only ever drink, for example, apple cider, regardless of the occasion.",
  },
  {
    name: "Speaks more formally than necessary.",
    info: "Uses a slightly more formal tone than the situation warrants.",
  },
  {
    name: "Frequently adjusts clothing.",
    info: "Subtly straightens and adjusts their outfit, even when it seems fine.",
  },
  {
    name: "Faint accent from a distant land.",
    info: "A barely noticeable lilt in their voice hinting at foreign origins.",
  },
  {
    name: "Blinks more than usual.",
    info: "Their blinking is just frequent enough to be perceptible if observed closely.",
  },
  {
    name: "Prefers sitting to standing.",
    info: "Will often find a place to sit, even if others are standing.",
  },
  {
    name: "Chews lip when nervous.",
    info: "A small tell when they're feeling anxious or unsure.",
  },
  {
    name: "Subtle use of uncommon words.",
    info: "Sprinkles rarely-used words into otherwise normal conversation.",
  },
  {
    name: "Lightly traces patterns on surfaces.",
    info: "Absent-mindedly draws on tables or counters with their fingers.",
  },
  {
    name: "Gazes into the distance mid-conversation.",
    info: "Briefly looks away, as if catching a distant memory.",
  },
  {
    name: "Prefers dim lighting.",
    info: "Uncomfortable under bright lights, often seeking out dimmer areas.",
  },
  {
    name: "Occasionally forgets common words.",
    info: "Pauses to recall a word that's surprisingly ordinary.",
  },
  {
    name: "Slightly mismatched socks.",
    info: "Socks are similar but not quite a pair, noticeable upon closer inspection.",
  },
  {
    name: "Wears a faded scarf regardless of weather.",
    info: "A scarf worn constantly, its significance unknown.",
  },
  {
    name: "Quiet, melodic humming while working.",
    info: "A tune so soft, it's easy to miss unless one is very close.",
  },
  {
    name: "Eyes change shades with mood.",
    info: "A subtle shift in the color of their eyes, reflecting their emotions.",
  },
  {
    name: "Gently taps foot to an internal rhythm.",
    info: "Barely noticeable unless one is looking at their feet.",
  },
  {
    name: "Prefers to walk along lines or patterns.",
    info: "Tends to step along tiles or patterns unconsciously.",
  },
  {
    name: "Always carries a small, worn book.",
    info: "A book they rarely open, but always have on hand.",
  },
  {
    name: "Folds hands in a unique way.",
    info: "A distinct way of clasping or folding their hands when idle.",
  },
  {
    name: "Wears a small, unnoticeable amulet.",
    info: "Hidden beneath clothing, a tiny charm with unknown meaning.",
  },
  {
    name: "Has a habit of looking upwards when recalling.",
    info: "Looks skyward briefly when trying to remember details.",
  },
  {
    name: "Subtle scent of an uncommon herb or spice.",
    info: "A light, almost imperceptible aroma that accompanies them.",
  },
  {
    name: "Occasionally pauses mid-sentence.",
    info: "A brief, thoughtful pause before continuing to speak.",
  },
  {
    name: "Has a tiny, barely visible scar.",
    info: "A small mark that tells a story, noticeable only up close.",
  },
  {
    name: "Uses a unique handshake.",
    info: "Their handshake has a slight, peculiar twist, different from the norm.",
  },
  {
    name: "Always leaves a tiny bit of food on their plate.",
    info: "Never quite finishes their meal, regardless of what it is.",
  },
  {
    name: "Carries an old coin they often flip.",
    info: "A coin flipped absently, a habit more than superstition.",
  },
  {
    name: "Prefers writing to speaking.",
    info: "More comfortable expressing themselves in written form.",
  },
  {
    name: "Subtly mirrors people's body language.",
    info: "Unconsciously copies the posture and gestures of those they talk to.",
  },
  {
    name: "Rarely makes direct eye contact.",
    info: "Tends to look just past people, rather than directly at them.",
  },
  {
    name: "Has a very faint, almost unheard laugh.",
    info: "Their laugh is so soft it's almost a whisper.",
  },
  {
    name: "Prefers to stand on one leg.",
    info: "When idle, often stands with one foot slightly raised.",
  },
  {
    name: "Gently clears throat before speaking.",
    info: "A soft, almost habitual clearing of the throat.",
  },
  {
    name: "Always wears a single, simple ring.",
    info: "A plain ring, its story known only to them.",
  },
  {
    name: "Subtly sniffs the air when entering a room.",
    info: "A quick, almost imperceptible sniff as they survey their surroundings.",
  },
  {
    name: "Touches their ear when deep in thought.",
    info: "A small gesture, touching or tugging at their earlobe.",
  },
  {
    name: "Has a habit of closing their eyes when smiling.",
    info: "Eyes briefly shut in a genuine smile.",
  },
  {
    name: "Wears a bracelet hidden under sleeves.",
    info: "A simple bracelet, rarely seen, always worn.",
  },
  {
    name: "Occasionally mixes up left and right.",
    info: "A momentary confusion, quickly corrected.",
  },
  {
    name: "Prefers to stand near exits.",
    info: "Subconsciously positions themselves close to a way out.",
  },
  {
    name: "Always carries a small stone in their pocket.",
    info: "A pebble or small rock, carried for reasons unknown.",
  },
  {
    name: "Keeps a tiny sketchbook, rarely used.",
    info: "A sketchbook for occasional, private drawings.",
  },
  {
    name: "Frequently looks at their hands while talking.",
    info: "Glances at their hands, as if ensuring they're still there.",
  },
  {
    name: "Wears a very subtle, unique perfume or cologne.",
    info: "A scent that's almost a whisper, evoking mystery.",
  },
  {
    name: "Occasionally whispers to themselves.",
    info: "Soft murmurs, a private dialogue or reminder.",
  },
  {
    name: "Has a small twitch in their left eye.",
    info: "Barely noticeable, particularly when they're tired or stressed.",
  },
  {
    name: "Thinks they're a shape-shifter.",
    info: "Tries to morph into animals or objects but never actually changes.",
  },
  {
    name: "Believes they're a dragon's reincarnation.",
    info: 'Roars and breathes "fire".',
  },
  {
    name: "Convinced they're invisible in the dark.",
    info: "Stands still in shadows, thinking they're unseen.",
  },
  {
    name: "Tells time by smelling the air.",
    info: "Claims they can smell different hours of the day.",
  },
  {
    name: "Speaks to rocks, believing they respond.",
    info: "Carries on conversations with various stones and pebbles.",
  },
  {
    name: "Thinks they can control weather with dance.",
    info: "Performs elaborate dances to 'summon' weather changes.",
  },
  {
    name: "Carries a magic wand (that's clearly a stick).",
    info: "Wields a stick, insisting it's a powerful wand.",
  },
  {
    name: "Wears goggles to see invisible creatures.",
    info: "Claims the goggles allow them to see hidden beings.",
  },
  {
    name: "Constantly looking for a hidden portal.",
    info: "Checks behind tapestries and in cupboards for magical gateways.",
  },
  {
    name: "Thinks they're a time traveler.",
    info: "Talks about past and future events as if they've experienced them.",
  },
  {
    name: "Wears a colander as a helmet to block mind reading.",
    info: "Insists it protects them from psychic intrusions.",
  },
  {
    name: "Talks in 'secret code' (that's just gibberish).",
    info: "Speaks nonsense, believing it's a cunningly encrypted language.",
  },
  {
    name: "Has an imaginary pet dragon.",
    info: "Describes the adventures of a non-existent dragon companion.",
  },
  {
    name: "Insists certain colors are invisible to them.",
    info: "Claims to be unable to see specific, random colors.",
  },
  {
    name: "Pretends to be a ghost among the living.",
    info: "Floats around, making spooky noises and gestures.",
  },
  {
    name: "Hunts for an imaginary creature.",
    info: "Dedicated to tracking down a beast no one has ever seen.",
  },
  {
    name: "Writes letters to fictional characters.",
    info: "Pens heartfelt notes to characters from popular tales.",
  },
  {
    name: "Believes they can speak with trees.",
    info: "Engages trees in deep conversation, waiting for their 'reply.'",
  },
  {
    name: "Thinks they have an invisible twin.",
    info: "Blames misdeeds on their non-existent twin.",
  },
  {
    name: "Wears boots on hands, claims they're magic.",
    info: "Insists the boots grant them special powers.",
  },
  {
    name: "Constantly searching for a mythical city.",
    info: "Convinced that a legendary, lost city is just around the corner.",
  },
  {
    name: "Believes they're a legendary hero reborn.",
    info: "Claims to be the reincarnation of a famous, ancient hero.",
  },
  {
    name: "Thinks they can turn invisible by holding breath.",
    info: "Stands motionless while holding their breath, thinking they've vanished.",
  },
  {
    name: "Tries to 'teleport' (just closes eyes and spins).",
    info: "Closes their eyes, spins around, and then looks surprised.",
  },
  {
    name: "Carries a 'magic' rock that grants wishes.",
    info: "Makes wishes on a plain rock, convinced it's magical.",
  },
  {
    name: "Wears a fake mustache over their real mustache.",
    info: "Believes it gives them a disguise or alternate identity.",
  },
  {
    name: "Talks to their shadow like an old friend.",
    info: "Engages in long, one-sided conversations with their shadow.",
  },
  {
    name: "Insists they're training to be a wizard.",
    info: "Practices 'spellcasting' with exaggerated, theatrical gestures.",
  },
  {
    name: "Wears a blanket as a cape, claims it's enchanted.",
    info: "Parades around with a blanket cape, declaring its magical properties.",
  },
  {
    name: "Thinks they're a master of disguise.",
    info: "Uses poorly executed disguises, convinced they're unrecognizable.",
  },
  {
    name: "Believes their reflection is a parallel world.",
    info: "Speaks to their reflection as if it's another person.",
  },
  {
    name: "Uses a spoon as a wand, casting 'spells'.",
    info: "Waves a spoon around, muttering incantations.",
  },
  {
    name: "Convinced they can speak with the moon.",
    info: "Holds nightly conversations with the moon.",
  },
  {
    name: "Wears flowers as earrings, believes they give super hearing.",
    info: "Claims the flowers enhance their hearing abilities.",
  },
  {
    name: "Tries to hatch stones, believing they're dragon eggs.",
    info: "Warms and nurtures rocks, hoping for dragons.",
  },
  {
    name: "Insists they're a bard, but can't sing.",
    info: "Breaks into song often, despite a complete lack of musical talent.",
  },
  {
    name: "Carries a 'treasure map' to everyday locations.",
    info: "Follows a self-made map to places like the local bakery.",
  },
  {
    name: "Believes they can become invisible in crowds.",
    info: "Stands in groups, thinking they blend in perfectly.",
  },
  {
    name: "Pretends to be a different npc each day.",
    info: "Adopts new names and personas on a daily basis.",
  },
  {
    name: "Talks to paintings, awaiting responses.",
    info: "Pauses in front of artwork, expecting it to converse.",
  },
  {
    name: "Thinks they're a master chef with terrible cooking.",
    info: "Proudly serves inedible concoctions, claiming them as delicacies.",
  },
  {
    name: "Wears layers of odd clothing for 'protection'.",
    info: "Dons multiple layers of mismatched garments for 'safety.'",
  },
  {
    name: "Believes they're a pirate on dry land.",
    info: "Speaks and acts like a pirate, far from any sea.",
  },
  {
    name: "Pretends to be various animals.",
    info: "Imitates animal sounds and behaviors, believing they're convincing.",
  },
  {
    name: "Uses a stick as a 'mighty' sword.",
    info: "Brandishes a branch as if it's a legendary weapon.",
  },
  {
    name: "Insists on walking in zigzag patterns.",
    info: "Claims it's the most efficient way to travel.",
  },
  {
    name: "Wears a pot as a helmet, claiming it's magical.",
    info: "Insists the kitchen pot grants them special abilities.",
  },
  {
    name: "Thinks they can communicate with fish.",
    info: "Spends hours 'chatting' with fish in ponds or tanks.",
  },
  {
    name: "Believes they're guarded by an invisible beast.",
    info: "Warns others of their fierce, unseen guardian.",
  },
  {
    name: "Tries to sell ordinary rocks as precious gems.",
    info: "Attempts to convince others of the 'value' of common stones.",
  },
  {
    name: "Writes love poems on napkins.",
    info: "Scribbles romantic verses on napkins at every meal.",
  },
  {
    name: "Always carrying a single red rose.",
    info: "Always has a fresh rose, hoping to give it to the right person.",
  },
  {
    name: "Sighs dreamily at the mention of love.",
    info: "Gets lost in a daydream whenever love is mentioned.",
  },
  {
    name: "Keeps a love letter in their pocket.",
    info: "Carries an old, worn love letter they never sent.",
  },
  {
    name: "Blushes easily when flattered.",
    info: "Turns noticeably red at the slightest compliment.",
  },
  {
    name: "Has a collection of love stories.",
    info: "Owns a vast array of romantic novels and poetry books.",
  },
  {
    name: "Always notices small details about people.",
    info: "Comments on small changes like a new haircut or outfit.",
  },
  {
    name: "Serenades people with a lute.",
    info: "Carries a lute and serenades people they find attractive.",
  },
  {
    name: "Can't help but compliment others.",
    info: "Frequent, heartfelt compliments to almost everyone they meet.",
  },
  {
    name: "Wears heart-shaped jewelry.",
    info: "Adorns themselves with heart-shaped necklaces, rings, or brooches.",
  },
  {
    name: "Constantly daydreaming about their crush.",
    info: "Often gets caught daydreaming and smiling to themselves.",
  },
  {
    name: "Draws hearts in the margins of paper.",
    info: "Doodles little hearts unconsciously while taking notes or writing.",
  },
  {
    name: "Believes in love at first sight.",
    info: "Convinced they'll instantly know when they meet 'the one.'",
  },
  {
    name: "Always looking for love advice.",
    info: "Eagerly seeks relationship advice from anyone willing to give it.",
  },
  {
    name: "Has a habit of staring into the distance.",
    info: "Gazes longingly off into the distance, lost in romantic thoughts.",
  },
  {
    name: "Writes anonymous love letters.",
    info: "Sends heartfelt, unsigned letters to their secret crush.",
  },
  {
    name: "Collects flowers for a loved one.",
    info: "Picks flowers wherever they go to give to their beloved.",
  },
  {
    name: "Remembers every anniversary.",
    info: "Keeps track of even the smallest anniversaries and celebrates them.",
  },
  {
    name: "Quotes romantic poetry.",
    info: "Often quotes lines from romantic poems in everyday conversation.",
  },
  {
    name: "Believes every person has a soulmate.",
    info: "Talks about soulmates and destiny in love.",
  },
  {
    name: "Keeps a locket with a mystery portrait.",
    info: "Wears a locket with the portrait of an unknown person they adore.",
  },
  {
    name: "Has a signature romantic gesture.",
    info: "Known for a particular romantic gesture, like a hand kiss or deep bow.",
  },
  {
    name: "Writes songs about their love life.",
    info: "Composes and performs songs about their romantic escapades.",
  },
  {
    name: "Always sees the 'romantic' option.",
    info: "Tends to interpret situations and stories with a romantic twist.",
  },
  {
    name: "Prefers candlelit dinners.",
    info: "Enjoys eating by candlelight, even when dining alone.",
  },
  {
    name: "Hopelessly flirts without realizing it.",
    info: "Naturally flirts with everyone, often without noticing.",
  },
  {
    name: "Keeps pressed flowers from past loves.",
    info: "Has a collection of pressed flowers from previous romances.",
  },
  {
    name: "Gives thoughtful, personalized gifts.",
    info: "Presents carefully chosen gifts that are deeply personal.",
  },
  {
    name: "Likes to stargaze and dream about love.",
    info: "Enjoys watching the stars while musing about romance.",
  },
  {
    name: "Has a book of love quotes.",
    info: "Carries a small book filled with favorite romantic quotes.",
  },
  {
    name: "Wears perfume/cologne given by a past love.",
    info: "Still uses a fragrance gifted by a former lover.",
  },
  {
    name: "Often lost in romantic daydreams.",
    info: "Gets distracted by daydreams about romantic scenarios.",
  },
  {
    name: "Believes in love conquering all.",
    info: "Firmly holds that love can overcome any obstacle.",
  },
  {
    name: "Has a romantic nickname for everyone.",
    info: "Gives everyone they meet a charming, affectionate nickname.",
  },
  {
    name: "Saves a dance for their love.",
    info: "Reserves the last dance of any event for their beloved.",
  },
  {
    name: "Sketches portraits of their beloved.",
    info: "Fills their sketchbook with drawings of their love interest.",
  },
  {
    name: "Recites love incantations 'just in case'.",
    info: "Whispers romantic spells, hoping to attract love.",
  },
  {
    name: "Hangs mistletoe year-round.",
    info: "Keeps mistletoe hanging in their doorway all year.",
  },
  {
    name: "Looks for signs of love in everything.",
    info: "Interprets random events as omens of love or romance.",
  },
  {
    name: "Has a favorite 'love spot' in nature.",
    info: "Visits a particular scenic spot, deemed perfect for romance.",
  },
  {
    name: "Treats every encounter as a potential date.",
    info: "Approaches social interactions with a flirtatious mindset.",
  },
  {
    name: "Constantly rehearsing confessions of love.",
    info: "Practices dramatic love confessions when alone.",
  },
  {
    name: "Believes in love letters over texts.",
    info: "Prefers the romance of handwritten notes to modern communication.",
  },
  {
    name: "Thinks they're a love potion expert.",
    info: "Dabbles in making 'love potions' that are usually just herbal teas.",
  },
  {
    name: "Has an imaginary ideal partner.",
    info: "Describes their perfect, yet imaginary, significant other in detail.",
  },
  {
    name: "Wears a ring from a past love affair.",
    info: "Wears a ring from a previous romance, filled with memories.",
  },
  {
    name: "Compares everyone to a lost love.",
    info: "Measures everyone they meet against a past lover.",
  },
  {
    name: "Gazes longingly at couples.",
    info: "Watches couples with a mix of longing and happiness.",
  },
  {
    name: "Cherishes a handkerchief from a past love.",
    info: "Keeps a handkerchief given by a former sweetheart.",
  },
  {
    name: "Always ready with romantic advice.",
    info: "Offers romantic counsel, regardless of their own success in love.",
  },
  {
    name: "Laughs when sad.",
    info: "Tends to laugh inappropriately during somber or serious moments.",
  },
  {
    name: "Carries a doll from a lost childhood.",
    info: "Protectively carries a ragged doll, a remnant of a tragic past.",
  },
  {
    name: "Obsessed with bad luck omens.",
    info: "Sees signs of doom in mundane occurrences, reacting both humorously and grimly.",
  },
  {
    name: "Writes tragic poetry, but only in limericks.",
    info: "Expresses their sorrow through oddly cheerful limerick poems.",
  },
  {
    name: "Believes they're haunted by a clumsy ghost.",
    info: "Constantly trips or drops things, blaming a supposed clumsy spirit.",
  },
  {
    name: "Wears shoes on wrong feet for good luck.",
    info: "Insists wearing shoes incorrectly brings fortune, despite the discomfort.",
  },
  {
    name: "Collects funny hats of their enemies.",
    info: "Has a collection of comically oversized or absurd hats from foes they've defeated.",
  },
  {
    name: "Sings melancholic songs with silly lyrics.",
    info: "Composes songs that are sad in melody but ridiculous in content.",
  },
  {
    name: "Carries a broken compass they swear by.",
    info: "Uses a clearly malfunctioning compass, leading to bizarre and unfortunate detours.",
  },
  {
    name: "Has a morbid fear of butterflies.",
    info: "Terrified of butterflies, believing they bring bad news or worse.",
  },
  {
    name: "Tells jokes to cover up their crying.",
    info: "Uses humor to mask their tears or emotional pain.",
  },
  {
    name: "Wears a cloak that's always slightly wet.",
    info: "Mysteriously damp cloak, reminiscent of a sad, rainy day.",
  },
  {
    name: "Insists on digging graves for fallen foes.",
    info: "Digs small, symbolic graves for enemies, often with humorous epitaphs.",
  },
  {
    name: "Laughs at their own misfortune.",
    info: "Finds their series of unfortunate events amusingly ironic.",
  },
  {
    name: "Talks to a skull they carry around.",
    info: "Engages in one-sided conversations with a skull, which they find hilarious and others find morbid.",
  },
  {
    name: "Wears a brightly colored patch over a missing eye.",
    info: "Covers a tragic injury with a comically vibrant eyepatch.",
  },
  {
    name: "Has an imaginary friend who gives terrible advice.",
    info: "Blames an imaginary companion for their poor decisions, a mix of comedy and sadness.",
  },
  {
    name: "Afraid of shadows, makes shadow puppets.",
    info: "Reacts fearfully to shadows but copes by creating funny shadow figures.",
  },
  {
    name: "Incessant knitter, even in dire situations.",
    info: "Knits in response to stress, often creating absurdly long scarves or hats at inappropriate times.",
  },
  {
    name: "Writes love letters to a ghost.",
    info: "Pens romantic yet humorous letters to a supposed spirit lover.",
  },
  {
    name: "Laughs maniacally in sleep.",
    info: "Experiences dreams that cause them to laugh sinisterly while sleeping.",
  },
  {
    name: "Carries a painting of their 'happy place'.",
    info: "Holds a crudely drawn, somewhat bleak depiction of their 'happy' escape.",
  },
  {
    name: "Obsessed with a doomsday prophecy, prepares comically.",
    info: "Prepares for an apocalypse in absurd ways, like hoarding rubber ducks or spoons.",
  },
  {
    name: "Mourns lost goldfish, talks to its empty bowl.",
    info: "Fondly and humorously speaks to an empty fishbowl, mourning their pet fish.",
  },
  {
    name: "Wears a jester's hat to funerals.",
    info: "Out of a misunderstood sense of respect, dons a jester hat at somber occasions.",
  },
  {
    name: "Throws salt over shoulder after every sentence.",
    info: "Superstitiously tosses salt for luck after speaking, creating a mess and confusion.",
  },
  {
    name: "Afraid of their own reflection, makes faces in mirrors.",
    info: "Startled by mirrors, but responds by making exaggerated, funny faces.",
  },
  {
    name: "Believes their life is a tragic play, acts overdramatically.",
    info: "Views their life as a dark comedy play, overacting in everyday situations.",
  },
  {
    name: "Cooks lavish meals, forgets to eat them.",
    info: "Prepares extravagant dishes but then sadly forgets to consume them.",
  },
  {
    name: "Talks to a 'cursed' gemstone, asks for advice.",
    info: "Consults with a gem they believe is cursed, often receiving 'bad' advice.",
  },
  {
    name: "Writes tragic memoirs in comical tone.",
    info: "Pens their life story, mixing dark events with a humorous narrative style.",
  },
  {
    name: "Obsessively polishes a rusty, worthless sword.",
    info: "Cherishes a clearly useless sword, buffing it with pride and a touch of melancholy.",
  },
  {
    name: "Collects sad paintings, gives them funny names.",
    info: "Has an array of sorrowful art, each humorously misnamed.",
  },
  {
    name: "Laughs at the sound of thunder.",
    info: "Finds thunder amusing, though it reminds them of darker times.",
  },
  {
    name: "Wears a ring that's obviously too large.",
    info: "Clings to an oversized ring from a significant yet comically mismatched past.",
  },
  {
    name: "Sings off-key when scared.",
    info: "Resorts to singing cheerfully and terribly out of tune when frightened.",
  },
  {
    name: "Considers a tattered cloak their 'invisibility' mantle.",
    info: "Believes a ragged cloak renders them invisible, despite obvious visibility.",
  },
  {
    name: "Carries a jar of 'monster tears'.",
    info: "Claims to have a jar of monster tears, shedding light on both past battles and odd humor.",
  },
  {
    name: "Talks to plants, gets 'insulted' by them.",
    info: "Engages in one-sided arguments with plants, taking offense at imagined slights.",
  },
  {
    name: "Has a pet rock they consult for decisions.",
    info: "Seeks guidance from a rock, making comically serious deliberations with it.",
  },
  {
    name: "Wears a solemn mask with a painted smile.",
    info: "Hides their sorrow behind a mask that bears a painted, exaggerated grin.",
  },
  {
    name: "Throws a pie at problems, literally.",
    info: "Responds to challenges by throwing pies, a humorous yet ineffective solution.",
  },
  {
    name: "Believes they're cursed to trip at important moments.",
    info: "Often trips at critical times, convinced it's a curse, but laughs it off.",
  },
  {
    name: "Keeps a diary of misfortunes, illustrated comically.",
    info: "Chronicles their misadventures with amusing drawings and captions.",
  },
  {
    name: "Has a tragic backstory, exaggerates it ridiculously.",
    info: "Shares their sad past but with absurd, unbelievable embellishments.",
  },
  {
    name: "Wears overly dramatic mourning attire.",
    info: "Dresses in theatrical mourning clothes, complete with oversized veils or hats.",
  },
  {
    name: "Sneezes loudly when sad.",
    info: "Has loud, attention-catching sneezes whenever they're feeling down.",
  },
  {
    name: "Hosts tea parties for inanimate objects.",
    info: "Holds somber yet silly tea parties with dolls or statues.",
  },
  {
    name: "Thinks they're followed by a ghost, makes jokes to it.",
    info: "Believes in a ghostly follower to whom they tell bad jokes.",
  },
  {
    name: "Recites melancholic poetry with a puppet.",
    info: "Performs gloomy poems using a comical puppet, blending sorrow with humor.",
  },
  {
    name: "Believes they can speak to vegetables.",
    info: "Engages in earnest conversations with vegetables, claiming to understand their feelings.",
  },
  {
    name: "Wears shoes on the wrong feet for luck.",
    info: "Insists that wearing shoes on the wrong feet brings good fortune.",
  },
  {
    name: "Thinks they're a reincarnated plant.",
    info: "Firmly believes they were a flower or tree in a past life and often tries to photosynthesize.",
  },
  {
    name: "Has an obsession with collecting spoons.",
    info: "Amasses a bizarre array of spoons from all over the world.",
  },
  {
    name: "Constantly narrates their own life.",
    info: "Provides a running commentary of their actions in a dramatic voice.",
  },
  {
    name: "Giggles whenever they hear the word 'butter'.",
    info: "Uncontrollably laughs at the mention of anything related to butter.",
  },
  {
    name: "Wears a hat shaped like a giant fish.",
    info: "Proudly dons an oversized fish hat, claiming it gives them wisdom.",
  },
  {
    name: "Only speaks in questions.",
    info: "Communicates exclusively through questions, never statements.",
  },
  {
    name: "Sings responses instead of speaking.",
    info: "Answers questions by singing in an operatic voice, regardless of the situation.",
  },
  {
    name: "Carries a pocket full of puppets.",
    info: "Uses hand puppets to express different parts of their personality.",
  },
  {
    name: "Hiccups every time they tell a lie.",
    info: "A telltale hiccup escapes whenever they're not truthful.",
  },
  {
    name: "Insists on walking in reverse on tuesdays.",
    info: "Walks backwards every Tuesday for reasons known only to them.",
  },
  {
    name: "Has a pet rock they consult for advice.",
    info: "Holds serious consultations with a pet rock, considering it wise.",
  },
  {
    name: "Thinks they're invisibly followed by a band.",
    info: "Moves as if to music, believing an invisible band is playing their life's soundtrack.",
  },
  {
    name: "Wears clothes inside out for 'perspective'.",
    info: "Claims wearing clothes inside out helps them see the world differently.",
  },
  {
    name: "Draws mustaches on everything.",
    info: "Can't resist adding mustache doodles to objects and pictures.",
  },
  {
    name: "Refuses to use the letter 'e'.",
    info: "Avoids using words with the letter 'E', leading to bizarre sentence structures.",
  },
  {
    name: "Believes they're a sleepwalking detective.",
    info: "Claims to solve mysteries in their sleep, waking up with 'clues.'",
  },
  {
    name: "Speaks fluent gibberish when excited.",
    info: "Bursts into animated, nonsensical speech when emotions run high.",
  },
  {
    name: "Has a different theme for each day of the week.",
    info: "Dresses and behaves according to a self-imposed daily theme.",
  },
  {
    name: "Thinks their shadow is a separate being.",
    info: "Converses and argues with their shadow as if it were a distinct entity.",
  },
  {
    name: "Tries to trade sand for goods and services.",
    info: "Uses sand as currency, genuinely surprised when others don't accept it.",
  },
  {
    name: "Wears an elaborate costume daily.",
    info: "Dresses in extravagant, outlandish outfits, each day a different theme.",
  },
  {
    name: "Collects oddly shaped sticks.",
    info: "Has a collection of sticks, each with its own name and backstory.",
  },
  {
    name: "Laughs in a different language.",
    info: "Laughs in a language different from the one they speak.",
  },
  {
    name: "Believes they're secretly a novel's protagonist.",
    info: "Thinks their life is a book being written in real-time by a distant author.",
  },
  {
    name: "Writes love letters to the moon.",
    info: "Pens romantic notes to the moon, earnestly believing in a lunar romance.",
  },
  {
    name: "Has conversations with paintings.",
    info: "Engages in deep discussions with artwork, awaiting their 'responses.'",
  },
  {
    name: "Insists they're training a snail army.",
    info: "Claims to be the leader of a slowly assembling snail army.",
  },
  {
    name: "Makes predictions based on cloud shapes.",
    info: "Interprets cloud formations as omens or signs, forecasting the future.",
  },
  {
    name: "Wears a cape made of bells.",
    info: "Donned in a cape of tiny bells, they jingle with every movement.",
  },
  {
    name: "Believes they can understand animals' thoughts.",
    info: "Claims to know what animals are thinking, often with absurd interpretations.",
  },
  {
    name: "Only eats food of a certain color each day.",
    info: "Adheres to a strict diet based on color, changing daily.",
  },
  {
    name: "Thinks they're a master of disguise (but aren't).",
    info: "Regularly attempts to disguise themselves, but the results are comically obvious.",
  },
  {
    name: "Wears a mismatched glove as a fashion statement.",
    info: "Sports a single, glaringly mismatched glove as a style choice.",
  },
  {
    name: "Thinks they're a ghost (but aren't).",
    info: "Wanders around, trying to pass through walls and scaring people, unaware they're very much alive.",
  },
  {
    name: "Writes bizarre, unreadable poetry.",
    info: "Composes poetry so abstract and strange, it's incomprehensible.",
  },
  {
    name: "Carries an encyclopedia for random facts.",
    info: "Whips out an encyclopedia to share odd facts at unexpected times.",
  },
  {
    name: "Invents ridiculous conspiracy theories.",
    info: "Concocts wildly imaginative conspiracy theories about mundane events.",
  },
  {
    name: "Wears shoes on hands for 'dexterity'.",
    info: "Claims wearing shoes on their hands improves their manual dexterity.",
  },
  {
    name: "Refuses to speak on days with full moons.",
    info: "Remains completely silent whenever there's a full moon.",
  },
  {
    name: "Has an imaginary friend as an advisor.",
    info: "Consults with an imaginary friend for advice on important decisions.",
  },
  {
    name: "Believes they're a pirate displaced in time.",
    info: "Acts like a pirate, complete with 'arrrs' and 'mateys', convinced they're out of their era.",
  },
  {
    name: "Uses a toy sword as a serious weapon.",
    info: "Brandishes a toy sword as if it were a mighty weapon of legend.",
  },
  {
    name: "Wears a collection of odd socks as a scarf.",
    info: "Fashioned a scarf entirely out of mismatched socks, claiming it's a family heirloom.",
  },
  {
    name: "Builds tiny furniture for invisible friends.",
    info: "Crafts small chairs and tables for their unseen companions.",
  },
  {
    name: "Insists on greeting people with a haiku.",
    info: "Greets new acquaintances by composing a haiku on the spot.",
  },
  {
    name: "Thinks they can predict the future with cheese.",
    info: "Uses different cheeses to make predictions about what's to come.",
  },
  {
    name: "Believes their life is a musical.",
    info: "Bursts into spontaneous, dramatic song, treating everyday life like a musical.",
  },
  {
    name: "Carries a backpack full of rubber ducks.",
    info: "Filled with rubber ducks for every occasion, believing each one has a special power.",
  },
  {
    name: "Prefers only cold beverages.",
    info: "Refuses to drink anything that isn't chilled.",
  },
  {
    name: "Always wears a scarf, regardless of the weather.",
    info: "A signature scarf is part of their daily attire.",
  },
  {
    name: "Hums while working.",
    info: "A constant, soft hum accompanies their concentration on tasks.",
  },
  {
    name: "Can't start the day without their favorite tea or coffee.",
    info: "Absolutely needs their specific morning beverage to function.",
  },
  {
    name: "Cracks knuckles when anxious or thinking.",
    info: "A habitual knuckle-cracking, especially in deep thought or stress.",
  },
  {
    name: "Always carries a good luck charm.",
    info: "Has a small charm or trinket they believe brings good luck.",
  },
  {
    name: "Collects small figurines or trinkets.",
    info: "Fascinated by and collects miniature items.",
  },
  {
    name: "Prefers writing in pencil over pen.",
    info: "Insists on using pencils for the ease of erasing and correcting.",
  },
  {
    name: "Enjoys people-watching.",
    info: "Often found observing and contemplating the behavior of passersby.",
  },
  {
    name: "Has a specific routine before bed.",
    info: "Follows a meticulous and unchanging nighttime routine.",
  },
  {
    name: "Snacks constantly while working.",
    info: "Needs to munch on something to stay focused.",
  },
  {
    name: "Always checks the weather before leaving home.",
    info: "Won't step outside without first knowing the weather forecast.",
  },
  {
    name: "Wears a particular color almost exclusively.",
    info: "Favors one color for their clothing, often for sentimental reasons.",
  },
  {
    name: "Has a habit of misplacing their glasses.",
    info: "Regularly loses their glasses, only to find them in obvious places.",
  },
  {
    name: "Prefers walking over other modes of transport.",
    info: "Chooses to walk whenever possible, regardless of distance.",
  },
  {
    name: "Keeps a diary or journal.",
    info: "Writes in a personal diary or journal daily.",
  },
  {
    name: "Always reading a new book.",
    info: "Never seen without a book in hand, constantly engrossed in reading.",
  },
  {
    name: "Likes to doodle or sketch absentmindedly.",
    info: "Often found doodling on any available piece of paper.",
  },
  {
    name: "Enjoys solving crossword puzzles.",
    info: "A fan of crosswords, often seen solving them in spare moments.",
  },
  {
    name: "Takes their coffee very seriously.",
    info: "Particular about how their coffee is made and served.",
  },
  {
    name: "Has a specific seat they prefer everywhere they go.",
    info: "Chooses the same seat in restaurants, buses, or other public places.",
  },
  {
    name: "Loves spicy food, adds hot sauce to everything.",
    info: "An affinity for spicy flavors, adding heat to even unlikely dishes.",
  },
  {
    name: "Has an unusual laugh.",
    info: "Their laugh is distinct and easily recognizable.",
  },
  {
    name: "Talks to themselves when concentrating.",
    info: "Mumbles or speaks softly to themselves while focused on a task.",
  },
  {
    name: "Prefers to eat the same breakfast daily.",
    info: "Sticks to the same breakfast routine, finding comfort in the repetition.",
  },
  {
    name: "Keeps plants everywhere.",
    info: "Loves being surrounded by greenery, be it at home or work.",
  },
  {
    name: "Fascinated by maps and cartography.",
    info: "Shows a keen interest in maps, often studying them for fun.",
  },
  {
    name: "Always carries a notepad and pen.",
    info: "Prepared to jot down thoughts or notes at any moment.",
  },
  {
    name: "Has a favorite mug they're attached to.",
    info: "Drinks only from a special, often sentimental mug.",
  },
  {
    name: "Obsessively organizes or cleans their space.",
    info: "Keeps their living or working area meticulously tidy.",
  },
  {
    name: "Prefers silence over music or noise.",
    info: "Enjoys quiet environments and often seeks out peaceful spots.",
  },
  {
    name: "Enjoys long walks to clear their mind.",
    info: "Regularly takes long, reflective walks.",
  },
  {
    name: "Tends to overexplain or elaborate too much.",
    info: "Provides more detail than necessary when sharing information or stories.",
  },
  {
    name: "Fidgets with jewelry when nervous or thinking.",
    info: "Absentmindedly plays with a ring, necklace, or bracelet.",
  },
  {
    name: "Enjoys early mornings or late nights.",
    info: "Finds peace in being awake before others or when everyone else has retired.",
  },
  {
    name: "Has a sweet tooth, loves desserts.",
    info: "A penchant for sweets, rarely passing up dessert.",
  },
  {
    name: "Loyal to a specific brand or product.",
    info: "Swears by a particular brand for certain items, refusing alternatives.",
  },
  {
    name: "Prefers handwritten notes to digital ones.",
    info: "Values the personal touch of handwritten notes over digital communication.",
  },
  {
    name: "Always has a pocket full of mints or gum.",
    info: "Carries mints or gum and offers them to others.",
  },
  {
    name: "Has a specific way they take their tea.",
    info: "Particular about the preparation of their tea, down to steeping time and temperature.",
  },
  {
    name: "Likes to arrive early for appointments.",
    info: "Makes it a point to be early for meetings and appointments.",
  },
  {
    name: "Loves watching clouds and finding shapes.",
    info: "Takes time to look at clouds, imagining shapes and figures.",
  },
  {
    name: "Keeps a lucky coin in their wallet.",
    info: "Carries a coin they consider lucky, often with a story behind it.",
  },
  {
    name: "Has a favorite chair or spot in their home.",
    info: "Favors one particular spot for reading, relaxing, or thinking.",
  },
  {
    name: "Chooses to eat vegetarian or vegan meals.",
    info: "Committed to a vegetarian or vegan diet, either for health or ethical reasons.",
  },
  {
    name: "Likes to keep their hands busy.",
    info: "Needs to be doing something with their hands, like knitting or fiddling with objects.",
  },
  {
    name: "Enjoys birdwatching or identifying birds.",
    info: "Takes pleasure in observing and identifying different bird species.",
  },
  {
    name: "Loves to experiment with cooking.",
    info: "Enjoys trying new recipes and experimenting with ingredients in the kitchen.",
  },
  {
    name: "Carries a flask of strong liquor at all times.",
    info: "Frequently takes sips, especially in stressful situations.",
  },
  {
    name: "Has a collection of risqué tattoos.",
    info: "Boasts tattoos with suggestive themes or hidden adult meanings.",
  },
  {
    name: "Flirtatious with a wicked sense of humor.",
    info: "Known for their bold flirtations and sharp, sometimes risqué jokes.",
  },
  {
    name: "Runs an underground gambling ring.",
    info: "Secretly orchestrates and manages illegal betting games.",
  },
  {
    name: "Owes money to shady characters.",
    info: "In debt to the wrong kind of people, often looking over their shoulder.",
  },
  {
    name: "Has a scar from a bar fight.",
    info: "Bears a noticeable scar, a souvenir from a wild night gone wrong.",
  },
  {
    name: "Secretly writes erotic literature.",
    info: "Authors steamy, provocative stories under a pseudonym.",
  },
  {
    name: "Addicted to a potent, illegal substance.",
    info: "Struggles with an addiction to something illicit and dangerous.",
  },
  {
    name: "Frequents seedy establishments.",
    info: "Regularly seen in disreputable bars or clubs known for illicit activities.",
  },
  {
    name: "Engages in underground fighting circuits.",
    info: "Participates in or bets on illegal, no-holds-barred fights.",
  },
  {
    name: "Habitual smoker of exotic herbs.",
    info: "Often smokes rare, potent herbs with strong effects.",
  },
  {
    name: "Possesses a collection of forbidden artifacts.",
    info: "Curates a hidden assortment of items that are morally and legally dubious.",
  },
  {
    name: "Wears provocatively stylish attire.",
    info: "Dresses in a manner that is deliberately revealing or suggestive.",
  },
  {
    name: "Rumored to have a scandalous past.",
    info: "Whispers and rumors circulate about their risqué and potentially dark history.",
  },
  {
    name: "Con artist with a silver tongue.",
    info: "Skilled at deception and seduction, using their charm for dubious purposes.",
  },
  {
    name: "Has a secret identity in the underworld.",
    info: "Leads a double life, with an alias known only in certain circles.",
  },
  {
    name: "Deals in information and blackmail.",
    info: "Trades in secrets, often using information to manipulate or blackmail.",
  },
  {
    name: "Frequent user of double entendres.",
    info: "Conversation is laced with innuendos and double meanings.",
  },
  {
    name: "Has a penchant for excessive drinking.",
    info: "Known for their love of alcohol, often to a troubling degree.",
  },
  {
    name: "Involved in smuggling rare goods.",
    info: "Partakes in the illicit trade of rare or forbidden items.",
  },
  {
    name: "Expert in poisons and toxins.",
    info: "Has extensive, suspicious knowledge of various poisons.",
  },
  {
    name: "Member of a secret hedonistic society.",
    info: "Part of a clandestine group known for indulging in excessive pleasures.",
  },
  {
    name: "Tells dark, morbid jokes.",
    info: "Their sense of humor is dark and often inappropriate.",
  },
  {
    name: "Runs an illegal potion or drug den.",
    info: "Operates a hidden establishment selling illicit potions or substances.",
  },
  {
    name: "Practices forbidden magic or sorcery.",
    info: "Dabbles in dark arts or magic that is outlawed or taboo.",
  },
  {
    name: "Has debts in the criminal underworld.",
    info: "Owes significant favors or money to dangerous criminal figures.",
  },
  {
    name: "Secretly observes others for pleasure.",
    info: "Engages in voyeuristic activities, spying on people without their knowledge.",
  },
  {
    name: "Owns a collection of obscene books.",
    info: "Keeps a stash of literature that's erotic or morally questionable.",
  },
  {
    name: "Gambles with high stakes and risks.",
    info: "Known for participating in high-risk gambling with serious consequences.",
  },
  {
    name: "Lives a life of decadence and excess.",
    info: "Their lifestyle is one of extravagant indulgence, often to unhealthy levels.",
  },
  {
    name: "Has a network of illicit contacts.",
    info: "Maintains a web of contacts involved in various underground activities.",
  },
  {
    name: "Proudly displays trophies from dubious feats.",
    info: "Showcases items or tokens from past deeds of questionable nature.",
  },
  {
    name: "Cynical and jaded worldview.",
    info: "Exhibits a deeply cynical attitude towards life and people.",
  },
  {
    name: "Engages in risky, thrill-seeking behaviors.",
    info: "Constantly seeking the next adrenaline rush, regardless of danger.",
  },
  {
    name: "Frequents the company of courtesans or escorts.",
    info: "Known to spend time and money on professional companions.",
  },
  {
    name: "Has a history of seduction and heartbreak.",
    info: "Leaves a trail of romantic conquests and broken hearts.",
  },
  {
    name: "Bears marks from a torturous past.",
    info: "Their body carries the scars of past encounters with torture or abuse.",
  },
  {
    name: "Involved in political espionage or treachery.",
    info: "Engages in dangerous games of political manipulation and espionage.",
  },
  {
    name: "Skilled in the art of seduction.",
    info: "Uses their allure and charm to manipulate others for personal gain.",
  },
  {
    name: "Has an obsession with dark rituals or cults.",
    info: "Fascinated with occult practices or forbidden rituals.",
  },
  {
    name: "Known for their brutal, ruthless tactics.",
    info: "Reputation for being merciless and brutal in achieving their goals.",
  },
  {
    name: "Secret life as a spy or assassin.",
    info: "Moonlights as a spy or hitman, with a hidden cache of dangerous skills.",
  },
  {
    name: "Carries a forbidden, cursed artifact.",
    info: "In possession of an item that's powerful but comes with dire consequences.",
  },
  {
    name: "Frequent bouts of rage or violence.",
    info: "Prone to unpredictable, often violent outbursts.",
  },
  {
    name: "Has an illicit love affair with notable consequences.",
    info: "Involved in a scandalous affair that could have serious repercussions.",
  },
  {
    name: "Addicted to high-stakes gambling.",
    info: "Can't resist the allure of gambling, often with severe personal stakes.",
  },
  {
    name: "Wields dark humor as a defense mechanism.",
    info: "Uses biting, dark humor to cope with their own demons.",
  },
  {
    name: "Practices an illegal or forbidden form of art.",
    info: "Their artistic expression flirts with or crosses the boundaries of legality.",
  },
  {
    name: "Has a secret they would kill to protect.",
    info: "Harbors a deep secret that they are willing to go to great lengths to keep hidden.",
  },
  {
    name: "Makes morally questionable decisions for survival.",
    info: "Often caught making choices that are ethically dubious, prioritizing their survival.",
  },
  {
    name: "Connoisseur of rare spirits.",
    info: "Has an extensive and impressive collection of rare and exotic alcoholic beverages, often sharing colorful stories about each one.",
  },
  {
    name: "Secretly writes passionate love letters.",
    info: "Composes deeply romantic and slightly risqué love letters to a secret crush but never sends them.",
  },
  {
    name: "Flirtatious gambler with a lucky charm.",
    info: "A notorious flirt at gambling tables, they believe their suggestive lucky charm always helps them win.",
  },
  {
    name: "Enjoys crafting homemade potions.",
    info: "Dabbles in making homemade brews and potions, some of which have quite intoxicating effects.",
  },
  {
    name: "Sultry singer with a hint of sadness.",
    info: "Performs in taverns with a seductive voice that hints at a deeper, unspoken sorrow.",
  },
  {
    name: "Addicted to love potions.",
    info: "Constantly experimenting with different love potions, hoping to find true love, often with humorous outcomes.",
  },
  {
    name: "Carries a flask with a mysterious elixir.",
    info: 'Always sipping from a flask containing a strange liquid, claiming it\'s for "medicinal purposes."',
  },
  {
    name: "Hopeless romantic who falls in love easily.",
    info: "Falls head over heels in love at the slightest provocation, often leading to comedic situations.",
  },
  {
    name: "Has a secret stash of exotic aphrodisiacs.",
    info: "Collects various rare herbs and concoctions believed to enhance romantic encounters.",
  },
  {
    name: "Frequents underground opium dens.",
    info: "Known to disappear into secretive locations, rumored to indulge in forbidden pleasures.",
  },
  {
    name: "Operates a clandestine moonshine still.",
    info: "Secretly brews potent moonshine, sharing it with only a trusted few.",
  },
  {
    name: "Inventor of questionably effective tonics.",
    info: "Creates bizarre tonics and elixirs, promising outrageous effects like eternal youth or irresistible charm.",
  },
  {
    name: "Tells outrageous tall tales of romantic conquests.",
    info: "Boasts exaggerated and often humorous stories of romantic escapades.",
  },
  {
    name: "Wears an amulet filled with potent herbs.",
    info: "Claims their amulet contains herbs that ward off unwanted affections or attract desired ones.",
  },
  {
    name: "Philandering bard with many jealous lovers.",
    info: "A charming bard who leaves a trail of broken hearts and angry lovers wherever they go.",
  },
  {
    name: "Addicted to gambling, always chasing debts.",
    info: "Constantly gambling and in debt, often tries to wager their way out of trouble.",
  },
  {
    name: "Secretly a member of a hedonistic cult.",
    info: "Part of a secretive group indulging in lavish and lascivious rituals.",
  },
  {
    name: "Has a magical tattoo with a lustful spirit.",
    info: "Bears an enchanted tattoo that occasionally whispers temptations or gives risqué advice.",
  },
  {
    name: "Carries a love-struck diary.",
    info: "Keeps a diary filled with the names of their crushes and details of their romantic fantasies.",
  },
  {
    name: "Wears perfume/cologne with bewitching properties.",
    info: "Uses a fragrance that seems to have a subtle, enchanting effect on others.",
  },
  {
    name: "Owner of an illicit speakeasy.",
    info: "Runs a hidden establishment where all manner of vices can be indulged in away from prying eyes.",
  },
  {
    name: "Famed for their seductive dance moves.",
    info: "Known throughout the land for a dance that is as entrancing as it is scandalous.",
  },
  {
    name: "Herbalist specializing in euphoric plants.",
    info: "An expert in plants and herbs that induce euphoria, often experimenting with their effects.",
  },
  {
    name: "Rogue with a collection of stolen hearts.",
    info: "A charming thief who's metaphorically stolen the hearts of many, keeping tokens from each conquest.",
  },
  {
    name: "Enjoys whispering flirtations in ancient tongues.",
    info: "Speaks seductive phrases in long-forgotten languages, adding an air of mystery.",
  },
  {
    name: "Cursed with uncontrollable desires.",
    info: "Struggles with a curse that amplifies their earthly desires to comical extents.",
  },
  {
    name: "Potion shop owner with a secret.",
    info: "Sells ordinary potions upfront but offers more illicit concoctions under the table.",
  },
  {
    name: "Has a habit of sending anonymous saucy poems.",
    info: "Enjoys composing and secretly sending playful and slightly bawdy poems to unsuspecting recipients.",
  },
  {
    name: "Believes they're irresistible due to a love spell.",
    info: "Convinced they're under a love spell that makes them universally desired, often leading to humorous misunderstandings.",
  },
  {
    name: "Tattooed with a map to a secret love den.",
    info: "Has a map tattooed on their body leading to a hidden rendezvous spot for clandestine meetings.",
  },
  {
    name: "Mysterious alchemist obsessed with creating love elixirs.",
    info: "An alchemist dedicated to crafting the perfect love elixir, often with unexpected results.",
  },
  {
    name: "Frequents secret masquerade balls.",
    info: "Known to attend mysterious, masked balls where identities and inhibitions are hidden.",
  },
  {
    name: "Addicted to a potion that enhances charisma.",
    info: "Relies on a potion to be charming and eloquent, but its effects are unpredictable.",
  },
  {
    name: "Collector of romantic, cursed artifacts.",
    info: "Hoards artifacts that are said to be cursed with passionate, sometimes dangerous love stories.",
  },
  {
    name: "Brews a notorious hangover cure.",
    info: "Known for a special brew that cures the worst of hangovers, though the ingredients are best left unknown.",
  },
  {
    name: "Smuggler of exotic, forbidden texts.",
    info: "Deals in the smuggling of banned romantic and erotic literature.",
  },
  {
    name: "Enchants jewelry to attract admirers.",
    info: "Crafts jewelry that they claim draws the attention of potential suitors.",
  },
  {
    name: "Wears clothes imbued with seductive magic.",
    info: "Dresses in enchanted garments that subtly enhance their allure.",
  },
  {
    name: "A scribe who pens illicit correspondence.",
    info: "Writes and sends secretive, often salacious letters for others.",
  },
  {
    name: "Runs a discreet escort service for the elite.",
    info: "Operates a high-class, secretive service catering to the romantic whims of the wealthy.",
  },
  {
    name: "Cursed to speak only in seductive rhymes.",
    info: "A curse compels them to speak in rhymes, which unintentionally come out as flirtatious.",
  },
  {
    name: "Artisan of exquisite, intimate apparel.",
    info: "A skilled tailor known for creating beautifully crafted, albeit risqué, clothing.",
  },
  {
    name: "Keeper of a legendary aphrodisiac recipe.",
    info: "Guards a recipe for a legendary aphrodisiac, sought after by many.",
  },
  {
    name: "Hosts underground romantic poetry nights.",
    info: "Organizes covert gatherings where forbidden and passionate poetry is recited.",
  },
  {
    name: "Secretly a love-struck ghost hunter.",
    info: "Hunts ghosts, secretly hoping to reunite with a lost spectral lover.",
  },
  {
    name: "Inventor of a questionable 'love detector' device.",
    info: "Claims to have invented a device that can detect romantic compatibility.",
  },
  {
    name: "Cursed with an alluring, irresistible scent.",
    info: "Emits a naturally enchanting fragrance, drawing people to them, much to their chagrin.",
  },
  {
    name: "Mixes potions in a brothel's backroom.",
    info: "Works in the back of a brothel, creating potions to enhance the establishment's allure.",
  },
  {
    name: "Has a magical, ever-full bottle of wine.",
    info: "Owns a bottle of wine that never empties, often shared in intimate settings.",
  },
  {
    name: "Retired courtesan with a wealth of secrets.",
    info: "A former courtesan turned advisor, holding a trove of secrets about the rich and powerful.",
  },
];
module.exports = quirks;
