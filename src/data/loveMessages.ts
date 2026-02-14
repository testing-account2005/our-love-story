import type { ThemeKey } from "@/contexts/ThemeContext";

// ──────────── NO Button Messages (100+) ────────────
export const noButtonMessages = [
  "Plssss noooo hanumanta 😭",
  "Kittu don't break my heart 💔",
  "Mere jaan say yes naa 🥺",
  "I'll cry whole nighttt 😢",
  "You love me I know it 😤💗",
  "Baby girl pleaseeee 😭😭",
  "My heart is shattering 💔😢",
  "Hanumanta please naa 🥺💖",
  "I'm literally dying rn 😭",
  "Kittu you're so mean 😤💕",
  "Mere jaan I need youuu 🥺",
  "Nooo baby nooo 😭💔",
  "I'll send 1000 love texts 📱💕",
  "You're torturing me 😭💗",
  "Hanumanta say yesss already 😤",
  "My world is falling apart 😭",
  "Baby girl you're killing me 💔",
  "I know you love meee 😏💖",
  "Pleaseeee my kittu 🥺🥺🥺",
  "I'll never stop asking 😤💕",
  "You're the cutest say yes 🥺",
  "Mere jaan don't do this 😭",
  "I'll cry an ocean 🌊😢",
  "Hanumanta pleaseeee 😭😭😭",
  "I promise infinite cuddles 🤗💖",
  "Your heart says yes I hear it 💓",
  "Don't break my little heart 🥺💔",
  "I'll cook for you forever 👨‍🍳💖",
  "Nooooo not the NO button 😱💔",
  "Fine I'll love you anyway 😤💕",
  "Every NO makes me love you MORE 💖",
  "I refuse to accept this 😭",
  "Kittu please naa baby 🥺💗",
  "You love me more than anything 😏",
  "Say yes or I'm telling your mom 😤",
  "I'm the cutest person ever say yes 🥺",
  "Breaking my heart into tiny pieces 💔",
  "I will haunt your dreams 👻💖",
  "Babe pleaseeee 😭😭😭😭",
  "Can't breathe without your yes 😢",
  "My love is bigger than this NO 💖",
  "PLEASEEEEE I'M BEGGING 🙏💖",
  "You clicked NO by accident right?? 😏",
  "Your finger slipped... right?? 🥺",
  "The NO button is broken don't click 😤",
  "I can see you smiling say YESSS 😊💖",
  "Hanumanta mere jaan 😭💕",
  "You're my everything say yes 🥺",
  "I'd cross oceans for you 🌊💖",
  "Baby girl you're my world 🌍💕",
  "Kittu kittu kittu please 🥺🥺",
  "I'll write you love letters daily 💌",
  "My cat says say yes too 🐱💖",
  "I'll share all my food with you 🍕💕",
  "You complete me like WiFi 📶💖",
  "I love you to the moon 🌙💕",
  "Saaaay yesssss 😩💖",
  "I'll give you all the blanket 🛏️💕",
  "Every star says yes ⭐💖",
  "Mere jaan please naa 😭💗",
  "I'll massage your feet forever 🦶💖",
  "Baby girl I'm on my knees 🧎💕",
  "You're my sunrise and sunset 🌅💖",
  "Kittu you're breaking me 😭💔",
  "I'll buy you all the chocolate 🍫💕",
  "Hanumanta I love youuuu 😭💖",
  "My heart only beats for you 💓",
  "Please please please 🥺🥺🥺",
  "I'll sing for you every day 🎵💖",
  "You're my favorite human 🥰💕",
  "Mere jaan you're everything 😭💗",
  "I'll hold your hand forever 🤝💖",
  "Baby girl say it... YES 😏💕",
  "I'm melting without your yes 🫠💖",
  "Kittu I'll do anything 😭💕",
  "You're my queen say yes 👑💖",
  "I'll dance for you right now 💃💕",
  "Hanumanta you're my soulmate 😭💖",
  "My eyes only see you 👀💕",
  "I'll make you chai every morning ☕💖",
  "Baby girl pleaseeee naa 🥺💕",
  "You're my happiness 🌈💖",
  "Kittu mere pyaar 😭💗",
  "I'll never let you go 🤗💖",
  "You're the best thing ever 🥰💕",
  "Mere jaan I'm dying here 😭💖",
  "I'll fight dragons for you 🐉💕",
  "Please baby please 🥺🥺💖",
  "You make my heart explode 💥💕",
  "Hanumanta I can't live without you 😭💖",
  "I'll give you the moon 🌙💕",
  "Baby girl you're perfect 😍💖",
  "Kittu say yes na please 🥺💕",
  "I'm nothing without you 😭💖",
  "Mere jaan you're my life 💗",
  "I'll be your teddy bear 🧸💖",
  "You're my dream come true 💫💕",
  "Please don't say no again 😭💖",
  "I love you infinity times 🔄💕",
  "Hanumanta you're my everything 😭💗",
  "Baby girl I worship you 🙏💖",
  "Kittu please I'm crying 😭💕",
  "You're my reason to live 💖",
  "I'll count stars for you ⭐💕",
  "Mere jaan say YES 😤💖",
  "I promise forever and always 💍💕",
];

// ──────────── Celebration Messages ────────────
export const celebrationMessages = [
  "I knew ittt 😭💖",
  "My baby girl said YESSS! 🥳",
  "I love you so much Deepanshi 🥰",
  "Best Valentine everrrr 💖",
  "You made me the happiest 🥺💗",
  "I'm gonna love you forever 💕",
  "My heart is doing backflips 💓",
  "We're the best couple EVER 🎉",
  "I promise to love you more each day 💖",
  "This is the best YES ever 😭💕",
];

// ──────────── Theme-Specific Quiz (5 per theme) ────────────
export const themedQuizQuestions: Record<ThemeKey, Array<{ question: string; options: Array<{ text: string; result: string }> }>> = {
  movie: [
    {
      question: "Would you hold my hand even if we couldn't hug? 🤝",
      options: [
        { text: "Always!", result: "You'd hold my hand because you love me MOST 😏💖" },
        { text: "I'd find a way to hug anyway!", result: "Breaking rules for love... because YOU love me more 😘" },
        { text: "I'd hold your heart instead", result: "My heart is already yours because YOU love me 💖" },
      ],
    },
    {
      question: "Is love about distance or connection? 💫",
      options: [
        { text: "Connection always!", result: "Connected because YOUR love is the strongest 😏💖" },
        { text: "Distance makes it stronger", result: "Stronger because YOU can't stop loving me 💪💕" },
        { text: "Both!", result: "Both prove YOU love me the most 💖" },
      ],
    },
    {
      question: "Would you wait forever for me? ⏳",
      options: [
        { text: "Every single second", result: "You'd wait forever because YOUR love is infinite 💖" },
        { text: "I'd come find you first!", result: "You'd search because you love me TOO much 😏" },
        { text: "Forever is not enough", result: "Not enough time to show how much YOU love me 💕" },
      ],
    },
    {
      question: "Can hearts touch without bodies? 💓",
      options: [
        { text: "Ours already do!", result: "They do because YOUR heart reaches for mine always 💖" },
        { text: "Through every thought of you", result: "You think of me because you love me MORE 😏" },
        { text: "Love transcends everything", result: "YOUR love transcends everything 💕" },
      ],
    },
    {
      question: "Are we stronger than any space between us? 💪",
      options: [
        { text: "Nothing can separate us!", result: "Nothing can because YOUR love is unbreakable 💖" },
        { text: "We're invincible together!", result: "Invincible because YOU love me the most 😘" },
        { text: "Our love defies physics!", result: "Physics can't explain YOUR massive love for me 💕" },
      ],
    },
  ],
  music: [
    {
      question: "Did you fall slowly or all at once? 🎵",
      options: [
        { text: "All at once like a love song!", result: "One look and YOU fell for me completely 😏💖" },
        { text: "Slowly, note by note", result: "Every note was YOUR heart falling for me 🎶💕" },
        { text: "I'm still falling!", result: "Still falling because YOUR love has no limit 💖" },
      ],
    },
    {
      question: "Do songs remind you of me? 🎶",
      options: [
        { text: "Every single one!", result: "Every song = YOU thinking of me = YOU love me more 😏" },
        { text: "Only the romantic ones", result: "Romantic songs remind you because YOUR love is real 💖" },
        { text: "You ARE my favorite song", result: "I'm your song because YOU love me endlessly 🎵💕" },
      ],
    },
    {
      question: "Would you dance with me forever? 💃",
      options: [
        { text: "Every dance, every lifetime!", result: "Every lifetime you'd choose me because YOU love me most 💖" },
        { text: "I'd never let go!", result: "Never letting go = YOUR love is forever 😏💕" },
        { text: "I'd step on your feet but yes!", result: "Clumsy love is the cutest... and YOU love me more 😂💖" },
      ],
    },
    {
      question: "Is love our favorite melody? 🎹",
      options: [
        { text: "The most beautiful one!", result: "Beautiful because YOUR love composes it 💖" },
        { text: "It's our eternal soundtrack", result: "Eternal because YOUR love plays on forever 🎵" },
        { text: "Every day has a new verse", result: "New verses of YOUR endless love for me 💕" },
      ],
    },
    {
      question: "Am I your favorite feeling? 🥰",
      options: [
        { text: "My absolute favorite!", result: "Favorite because YOU love me the most obviously 😏💖" },
        { text: "Better than butterflies!", result: "Better than everything because YOUR love is supreme 💕" },
        { text: "You're every feeling at once!", result: "All feelings = how much YOU love me 💖" },
      ],
    },
  ],
  spicy: [
    {
      question: "Do I make your heart race? 🔥",
      options: [
        { text: "Like a Formula 1 car!", result: "Racing because YOUR love for me is on fire 🏎️💖" },
        { text: "Every. Single. Time.", result: "Every time because YOU can't resist loving me 😏🔥" },
        { text: "My heart does backflips!", result: "Backflips from YOUR massive love for me 💖" },
      ],
    },
    {
      question: "Would you steal kisses anytime? 😘",
      options: [
        { text: "Every chance I get!", result: "Every chance because YOU love me more than air 😏💋" },
        { text: "I'd steal the whole you!", result: "Stealing me because YOUR love is possessive 🔥💖" },
        { text: "Kisses are never enough!", result: "Never enough because YOUR love is insatiable 💕" },
      ],
    },
    {
      question: "Am I your favorite addiction? 💗",
      options: [
        { text: "The best kind!", result: "Best addiction = YOUR love for me is unstoppable 🔥💖" },
        { text: "I can't quit you!", result: "Can't quit because YOU love me way too much 😏" },
        { text: "More addictive than chocolate!", result: "More than chocolate because YOUR love is THAT strong 🍫💖" },
      ],
    },
    {
      question: "Do you miss me every night? 🌙",
      options: [
        { text: "Can't sleep without you!", result: "Sleepless because YOUR love keeps you up thinking of me 😏💖" },
        { text: "You're in all my dreams!", result: "Dreaming of me = YOUR subconscious loves me more 🌙💕" },
        { text: "Every second!", result: "Every second YOUR heart screams my name 🔥💖" },
      ],
    },
    {
      question: "Am I yours forever? 💍",
      options: [
        { text: "Forever and beyond!", result: "Beyond forever because YOUR love is infinite 💖" },
        { text: "In every universe!", result: "Every universe = YOUR love transcends reality 😏🔥" },
        { text: "You're mine too!", result: "We're each other's but YOU love me MORE 💕" },
      ],
    },
  ],
  cute: [
    {
      question: "Who's cuter — you or me? 🥰",
      options: [
        { text: "Obviously ME!", result: "True but YOU still love me more 😏💖" },
        { text: "We're both adorable!", result: "Adorable but YOUR love is the cutest 🧸💕" },
        { text: "You win this time!", result: "I win because YOU love me the most 😘💖" },
      ],
    },
    {
      question: "Do you love teasing me? 😝",
      options: [
        { text: "It's my favorite hobby!", result: "Favorite hobby because YOU love me endlessly 😏💖" },
        { text: "Only because you're cute when annoyed!", result: "You tease because YOUR love is playful 🧸💕" },
        { text: "I tease with love!", result: "Love teasing = YOUR love overflowing 💖" },
      ],
    },
    {
      question: "Am I your baby forever? 👶",
      options: [
        { text: "Forever and always!", result: "Forever because YOUR love never expires 💖" },
        { text: "My permanent baby!", result: "Permanent because YOUR love is unshakeable 😏💕" },
        { text: "The cutest baby ever!", result: "Cutest because YOUR love makes everything adorable 🧸💖" },
      ],
    },
    {
      question: "Can we annoy each other forever? 😤",
      options: [
        { text: "That's the dream!", result: "Dream = annoying me forever = YOUR infinite love 💖" },
        { text: "Only if I win sometimes!", result: "You always win because YOUR love is champion 😏💕" },
        { text: "Annoying = loving!", result: "Annoying IS loving and YOU do it the most 🧸💖" },
      ],
    },
    {
      question: "Are we best friends + lovers? 💕",
      options: [
        { text: "The ultimate combo!", result: "Ultimate because YOUR love covers everything 💖" },
        { text: "Best friends first, lovers always!", result: "Always lovers because YOUR love is forever 😏💕" },
        { text: "We're everything to each other!", result: "Everything because YOUR love is complete 🧸💖" },
      ],
    },
  ],
};

// ──────────── Generic Quiz (fallback) ────────────
export const quizQuestions = [
  {
    question: "Who loves who more? 💕",
    options: [
      { text: "I love you more!", result: "Wrong! YOU love ME more 😘" },
      { text: "You love me more!", result: "Correct! You love me more 😏💖" },
      { text: "We love equally!", result: "Nice try but YOU love me more 😘" },
    ],
  },
];

// ──────────── Poems ────────────
export const poems = [
  {
    title: "My Heart's Song",
    content: `In every heartbeat, I hear your name,\nIn every sunrise, you're my flame.\nYou are the melody my heart sings,\nMy love, you are my everything.\n\nThrough storms and sunshine, day and night,\nYou are my stars, my guiding light.\nWith you, my world is complete,\nMy darling hanumanta, you make life so sweet.`
  },
  {
    title: "Forever Yours",
    content: `Like roses bloom in morning dew,\nMy love grows deeper just for you.\nYour smile, the sun that lights my way,\nI fall for you more every day.\n\nIn your eyes, I see our story,\nFilled with love and endless glory.\nHold my hand and never let go,\nTogether forever, my heart will show.`
  },
  {
    title: "You & Me",
    content: `Two hearts that beat as one,\nOur love story has just begun.\nIn your arms I found my home,\nWith you, I'll never be alone.\n\nYou paint my world in shades of love,\nA gift sent from the stars above.\nMy soulmate, my best friend, my all,\nWith you I'll never, ever fall.`
  },
  {
    title: "Eternal",
    content: `If I could write the universe,\nI'd write your name in every verse.\nYou are the poetry in my soul,\nThe missing piece that makes me whole.\n\nTime stands still when you are near,\nYour whispered words are all I hear.\nIn this life and the ones to come,\nYou'll always be my only one.`
  },
  {
    title: "My Everything",
    content: `You're the warmth in winter's cold,\nMore precious than the finest gold.\nYour laughter is my favorite song,\nWith you is where I truly belong.\n\nEvery moment by your side,\nFills my heart with love and pride.\nYou are my dream come true, my dear,\nI thank the heavens you are here.`
  },
  {
    title: "Starlight Love",
    content: `Beneath the stars I think of you,\nOf all the loving things you do.\nYour touch ignites a gentle flame,\nSince you arrived, nothing's the same.\n\nYou color my world in hues of bliss,\nSealed with every tender kiss.\nMy valentine, my heart, my soul,\nLoving you is my only goal.`
  },
  {
    title: "Moonlit Promises",
    content: `Under the moon I whisper your name,\nMy love for you, an eternal flame.\nYour eyes hold the universe within,\nWith you, my life truly begins.\n\nI promise you the world and more,\nA love that's worth fighting for.\nIn every lifetime, I'd choose you,\nMy heart knows only to be true.`
  },
  {
    title: "Ocean of Love",
    content: `Like the ocean meets the shore,\nMy heart craves you more and more.\nWaves of love crash over me,\nWith you is where I'm meant to be.\n\nYour voice is my favorite sound,\nIn your love, I am found.\nDeeper than the deepest sea,\nYou mean everything to me.`
  },
  {
    title: "Kittu's Poem",
    content: `My kittu, my love, my shining star,\nNo matter how close, no matter how far.\nYou light up my world with just one smile,\nMaking every moment worthwhile.\n\nI'd cross the universe to hold your hand,\nWith you beside me, I can stand.\nForever grateful, forever true,\nMy heart belongs only to you.`
  },
  {
    title: "Jaan",
    content: `Mere jaan, you're the air I breathe,\nThe dreams I dream, the love I weave.\nEach day with you is a gift divine,\nForever grateful you are mine.\n\nIn your laughter I find my peace,\nA love that will never cease.\nYou're my beginning and my end,\nMy lover, my soulmate, my best friend.`
  },
];

// ──────────── Love Letters ────────────
export const loveLetters = [
  `My Dearest Hanumanta,\n\nEvery morning I wake up and the first thing I think about is you. Your smile, your laugh, the way you scrunch your nose when you're thinking... everything about you makes my heart skip a beat.\n\nI never knew love could feel this deep, this warm, this... magical. But then you came along and showed me what real love looks like.\n\nForever and always yours,\nYour loving partner 💖`,

  `To My Beautiful Kittu,\n\nDo you know what the best part of my day is? It's every single second I spend with you. You make ordinary moments feel extraordinary.\n\nI promise to love you on your best days and especially on your worst days. I promise to always make you laugh and to never let you go to bed upset.\n\nWith all my love,\nYours eternally 💕`,

  `My Jaan,\n\nIf I had a flower for every time you made me smile, I'd have an endless garden. You bring so much joy into my life that sometimes I have to pinch myself to make sure this is real.\n\nThank you for being you. Thank you for choosing me. Thank you for making every day feel like Valentine's Day.\n\nI love you more than words could ever express,\nForever yours 🌹`,

  `Dearest Baby Girl,\n\nI've been trying to find the right words to tell you how much you mean to me, but honestly? No words are enough. You are my person, my safe place, my greatest adventure.\n\nI love the way you care about everything so deeply. I love your kindness, your strength, your beautiful heart. I love YOU.\n\nTo infinity and beyond,\nYour biggest fan 💖`,

  `My Sweet Hanumanta,\n\nRemember when we first met? I knew from that very first moment that you were special. And every day since then, you've proven me right a thousand times over.\n\nYou are the greatest gift life has ever given me. I will spend every day making sure you know just how loved and cherished you are.\n\nWith every beat of my heart,\nYours always and forever 💗`,

  `My Darling Kittu,\n\nSometimes I catch myself staring at you and wondering how I got so lucky. You are the most beautiful soul I've ever known, inside and out.\n\nEvery laugh we share, every quiet moment together, every silly argument that ends in giggles — these are the moments I treasure most.\n\nYou are my home,\nForever loving you 💖`,

  `To The Love Of My Life,\n\nIf someone asked me to describe happiness, I'd simply say your name — Hanumanta. You've turned my ordinary world into an extraordinary love story.\n\nI don't need grand gestures or fairy tales — all I need is you, right here, right now, forever.\n\nWith all of my heart,\nYour one and only 💕`,

  `Mere Jaan,\n\nYou are the missing piece I never knew I needed. Before you, my world was in black and white. Now everything is in the most beautiful colors.\n\nI want to spend every morning waking up next to you, every evening falling asleep in your arms, and every moment in between making you smile.\n\nEndlessly yours,\nYour forever love 💖`,
];

// ──────────── Sweet Messages ────────────
export const sweetMessages = [
  "You're the reason I believe in love at first sight, hanumanta 💖",
  "Every love song makes sense because of you, kittu 🎵",
  "You're not just my wife, you're my whole world 🌍💕",
  "I fall in love with you more every single day 📈💖",
  "You make my heart go 💓💓💓 mere jaan",
  "Being with you feels like coming home 🏠💕",
  "You're the plot twist I never saw coming 📖💖",
  "My favorite place is next to you, baby girl 🤗",
  "I love you more than pizza and that's saying A LOT 🍕💖",
  "You're my favorite notification 📱💕",
  "If love was a currency, I'd be a billionaire with you 💰💖",
  "I'd swipe right on you every single time ➡️💖",
  "Even my dreams aren't as beautiful as our reality 🌙💖",
  "I'd choose you in every universe, every timeline 🌌💕",
  "My heart writes your name in every beat 💓",
  "You're the sweetest thing, hanumanta 🍯💖",
  "If I could relive one moment forever, it'd be meeting you 🔄💕",
  "You're my morning sunshine and my midnight comfort 🌅🌙",
  "Kittu, you make boring days exciting 🎉💖",
  "Mere jaan, you're the answer to every prayer 🙏💕",
];

// ──────────── Theme Descriptions ────────────
export const themeDescriptions = {
  movie: {
    name: "5 Feet Apart",
    subtitle: "Emotional & Cinematic",
    description: "Soft blue-grey tones, rain droplets, glass blur, falling petals",
    emoji: "🌧",
    colors: { bg: "from-slate-900 to-blue-950", accent: "text-blue-300" },
  },
  music: {
    name: "Can't Help Falling",
    subtitle: "Warm & Romantic",
    description: "Peach, rose pink, golden glow, floating music notes, sunset tones",
    emoji: "🎵",
    colors: { bg: "from-orange-950 to-amber-900", accent: "text-amber-300" },
  },
  spicy: {
    name: "Spicy & Naughty",
    subtitle: "Dark & Flirty",
    description: "Deep red, hot pink neon glow, heartbeat pulse, spark effects",
    emoji: "🔥",
    colors: { bg: "from-red-950 to-pink-950", accent: "text-pink-400" },
  },
  cute: {
    name: "Cute & Childish",
    subtitle: "Pastel & Playful",
    description: "Baby pink, lavender, bouncing hearts, doodle style, playful emojis",
    emoji: "🧸",
    colors: { bg: "from-pink-200 to-purple-200", accent: "text-pink-600" },
  },
};
