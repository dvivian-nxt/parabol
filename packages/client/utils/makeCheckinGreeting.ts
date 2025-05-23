const greetings = [
  {
    content: 'Hola',
    language: 'Spanish'
  },
  {
    content: 'Bonjour',
    language: 'French'
  },
  {
    content: 'Guten tag',
    language: 'German'
  },
  {
    content: 'Ciao',
    language: 'Italian'
  },
  {
    content: 'Jambo',
    language: 'Swahili'
  },
  {
    content: 'Oi',
    language: 'Portuguese'
  },
  {
    content: 'Salut',
    language: 'Catalan'
  },
  {
    content: 'Hallo',
    language: 'German'
  },
  {
    content: 'Hej',
    language: 'Swedish'
  },
  {
    content: 'Nǐ hǎo',
    language: 'Chinese'
  },
  {
    content: 'Annyeong',
    language: 'Korean'
  },
  {
    content: 'Shalom',
    language: 'Hebrew'
  },
  {
    content: 'Merhaba',
    language: 'Turkish'
  },
  {
    content: 'Zdravo',
    language: 'Slovenian'
  },
  {
    content: 'Barev',
    language: 'Armenian'
  },
  {
    content: 'Bună',
    language: 'Romanian'
  },
  {
    content: 'Yasou',
    language: 'Greek'
  },
  {
    content: 'Lei Ho',
    language: 'Cantonese'
  },
  {
    content: 'Salaam',
    language: 'Arabic'
  },
  {
    content: 'Kumusta',
    language: 'Filipino'
  },
  {
    content: 'Pryvit',
    language: 'Ukranian'
  },
  {
    content: 'Habari',
    language: 'Swahili'
  },
  {
    content: 'Vanakkam',
    language: 'Tamil'
  },
  {
    content: 'Chào',
    language: 'Vietnamese'
  },
  {
    content: 'Gamardjoba',
    language: 'Georgian'
  },
  {
    content: 'Selam',
    language: 'Amharic'
  },
  {
    content: 'Iska warran',
    language: 'Somalian'
  },
  {
    content: 'Kaixo',
    language: 'Basque'
  },
  {
    content: 'Hei',
    language: 'Finnish'
  }
]

// The trailing question mark “?” is added in the presentation component.
const questions = [
  'If you had to describe how you’re feeling right now as a weather pattern, what’s your forecast?',
  'What’s something you’re looking forward to, and why?',
  'What’s something you’re worried about?',
  'What’s something new or interesting you’ve learned recently?',
  'What animal best represents you today, and why?',
  'What’s the weirdest thing in your fridge right now?',
  'What was your favorite recent meal, and why?',
  'If you could have one superpower today, what would it be, and for what purpose?',
  'What are you grateful for today, and why?',
  'What would you do if you had an extra day off tomorrow?',
  'If you could invite anyone to dinner tonight, who would it be and what would you eat?',
  'What was the last song you listened to, and where?',
  'What’s your favorite recent accomplishment, and why?',
  'If you could get advice from anyone in the world today, whom would you ask, and what would you ask them?',
  'If you had an expert personal assistant today, what would you have them do?',
  'What’s something about the next teammate that you appreciate?',
  'Show us something in your space that you really like!',
  'What’s got your attention today, and why?',
  'What was your favorite recent book or article, and what did it inspire?',
  'What emoji best represents you today, and why?',
  'What’s the most important thing to remember daily that you haven’t been able to?',
  'What help could you most use that you haven’t asked for?',
  'What is your one piece of advice to everyone here?',
  'Who was the last person you felt inspired by?',
  'What simple thing still blows your mind?',
  'What sparked your curiosity in whatever you’re most curious about now?',
  'If you could know the absolute and total truth to one question, what question would you ask?',
  'Which question can you ask to find out the most about a person?',
  'What color best describes your personality today?',
  'What’s something new you’ve learned about yourself in the last three months?',
  'Have you been pleasantly surprised by anything recently?',
  'If you did not have to sleep, how would you spend the extra 8 hours?',
  'What thing from nature, excluding animals, best describes you today?',
  'If you could do something that you don’t do because it’s bad for you, but you could do it without any repercussions — what would you do?',
  'What question do you wish people would ask you?',
  'If you could be one other person, who would that person be and why?',
  'If you had to describe how you’re feeling right now as an amusement park ride, what ride are you on?',
  'If you could safely eat any inedible object, what would it be?',
  'What are you reading right now?',
  'If you could pick up a new skill in an instant what would it be?',
  'Is there any topic lately that you would like to be mentored on?',
  'Are there any aspects of your personality that hold you back? How do you adapt?',
  'What’s one project that you could stop doing to give yourself more focus?',
  'When you’re feeling stressed, how do you deal with it?',
  'How would you describe your communication style in 3 words?',
  'What criteria helps you decide whether to say “no” to something or commit to it?',
  'What are you excited about this week? What worries you?',
  'What’s one rule your parents or guardians enforced when you were a kid?',
  'Do you have any routines you use to improve your energy and focus?',
  'How do you recognize when you’re stressed?',
  'Who has made a positive difference in your life recently?',
  'What was the last thing you fell in love with?',
  'What thing or experience exceeded your expectations recently?',
  'When was the last time you felt unbounded optimism?',
  'Do you have any non-work goals right now? What are they?',
  'What’s one country you would love to visit and why?',
  'What’s the most useful thing you own?',
  'What’s something you couldn’t live without?',
  'If you had to sing karaoke right now, which song would you pick?',
  'What drink best describes you today?',
  'What’s one thing many people hate, but you love?',
  'What was the first thing you thought about when waking up today?',
  'What’s the last thing you completed that you’re proud of?',
  'What’s something in your workspace that cheers you up during the day?',
  'What’s something that made you smile recently?',
  'What’s one of your favorite recent memories?',
  'What’s one thing that brings you energy and joy?',
  'What are you nostalgic about recently?',
  'What are you looking forward to?',
  'What fictional world or place would you like to visit?',
  'If you could have an animal sidekick, what animal would it be? Why?',
  'What is one thing we would never guess about you?',
  'What current fact about your life would most impress your five-year-old self?',
  'What fruit or vegetable represents your mood today?',
  'What’s something you are craving right now?',
  'What’s something you would change if you ran the world?',
  'If you could rid the world of one thing, what would it be?',
  'What were you most passionate about as a kid?',
  'If you were a takeaway food, what would sum up your day and why?',
  'What looks easy peasy lemon squeezy but is actually difficult difficult lemon difficult?',
  'What’s something from your childhood that you still love today?',
  'What healthy food tastes just as good to you as unhealthy food?',
  'You’ve died but instead of entering the afterlife, you’ve entered Earth 2.0. What is something that makes Earth 2.0 better?',
  'What’s a small act of kindness you were once shown, that you’ll never forget?',
  'What’s a movie you always recommend to people? Why do you love it?',
  'What’s normal where you live, but might seem weird to the rest of the world?',
  'What do you value most in a friendship?',
  'What’s something that you’ve never learned to do?',
  'Where do you feel most at home?',
  'What small thing would improve your day today?',
  'If you could go back in time 10,000 years ago and make a cave painting to confuse everyone in the future, what would you draw?',
  'What do you enjoy most about what you spend your time on?',
  'What’s one thing you want to do in life, but don’t know where to start',
  'What’s your favorite thing about the place you live?',
  'What’s something that puts you in a state of flow?',
  'If you could go back in time and make little changes to your childhood, what is one thing you’d learn so you could be an expert at it today?',
  'A genie appears and grants you a wish for someone else in the world. Who and what do you make a wish for?',
  'If you could instantly know any other language, which would it be and why?',
  'What’s the best phrase or piece of slang people in your hometown use?',
  'What’s something you wish you’d learned earlier in life?',
  'What’s an unusual skill you’d love to master?',
  'If you were going to be frozen tomorrow for a one-way 1000-year interstellar voyage, what would you most want to communicate (and to whom) before you leave?',
  'If you had to eat only one dish for the rest of time, what would it be?',
  'If you could be fluent in another language instantly, which would you choose, and why?',
  'What’s something people don’t know about you?',
  'What’s the best piece of advice you’ve ever been given?',
  'What’s the most useful item you’ve purchased this year?',
  'If you could describe your life as a movie, what genre would it be?',
  'If you were coming out onto a stage, what would your entrance song be?',
  'What was your least favorite food as a child? Why did you dislike it?',
  'If you were setting off to Mars and could take only one luxury item with you, what would it be?',
  'If you had to give a lecture on one thing, what would it be?',
  'If you could become a supernatural creature at night, what would it be, and why?',
  'If you could bring back a fashion trend, what would it be, and why?',
  'What season best describes you? Winter, Spring, Summer or Autumn?',
  'If you could have an unlimited supply of one food or drink, what would it be?',
  'You’re cooking for the whole team, what is your signature dish?',
  'If you could live in another historical period, would you? If so, which one?',
  'As a child, what did you want to be when you grew up?',
  'What’s the best book you’ve ever read? Why was it so memorable?',
  'If you had a time machine, would you go back in time to meet your ancestors, or forward in time to meet your descendents?',
  'If you could live with any fictional character, who would you choose?',
  'If you were reincarnated as an animal what would you choose and why?',
  'Which bucket list item do you most want to check off this year?',
  'What’s the worst piece of advice you’ve ever been given? And why was it so bad?',
  'If you could teleport anywhere in the world, where would you go right now?',
  'Which fictional character would you want by your side during a zombie apocalypse?',
  'What’s one thing you wish could be automated in your job?',
  'What’s an unusual tradition you or your family have?',
  'Name a TV show you think is under-rated. Describe it in a sentence.',
  'What was your first ever job?',
  'What’s one thing you are unbeatable at?',
  'If you were a cocktail, which would you be today?',
  'What is your favorite smell and why?',
  'What’s one thing you’ve been procrastinating on and can’t finish?',
  'What was your favorite class in school? Why?',
  'If you could keep only one part of your morning routine, what would it be?',
  'Do you work better with or without music? What are you listening to while you work?',
  'Have you ever experienced a culture shock? Where was it and what happened?',
  'If you had unlimited time and resources, how would you spend your days?',
  'What’s the last book you quit reading, and why?',
  'Have you learned any useful productivity hacks recently?',
  'If your home was packed full of golf balls how would you remove them?',
  'Do you have a favorite mug? Let us see it and tell us why you love it!',
  'What’s one productivity tool you couldn’t live without, and what makes it indispensable?',
  'How do you get motivated for difficult tasks?',
  'Look around and assess how satisfied you are with your physical workspace. What’s one thing you love about it? What would you improve?',
  'Name a healthy food you enjoy and an unhealthy food that you find hard to resist.',
  'What’s an adventurous thing you’ve done recently?',
  'What’s a TV show you recommend to everyone?',
  'What age do you wish you could be permanently?',
  'What’s a guilty pleasure you love to indulge from time to time?',
  'Where did you grow up and what was it like?',
  'What are some strategies that you’ve found to be helpful in your recent work?',
  'What’s something on your desk, a nearby wall, or out the window that cheers you up during the day?',
  'What boundaries have you set to ensure that you unplug from work?',
  'If you were forced to watch reruns of a favorite show, which would you choose?',
  'Would you rather spend a three-week trip visiting multiple interesting destinations or one interesting destination?',
  'What’s one of the biggest risks you’ve taken in your career? How do you feel about having taken it?',
  'What was your favorite breakfast as a kid?',
  'What’s something you rebelled against as a kid?',
  'What were some of your favorite activities as a kid?',
  'What’s a food, smell, or sound that you associate with where you grew up?',
  'What’s a landmark, popular destination, or local hangout spot that you either frequented or avoided when you were growing up?',
  'Would you rather receive a shoutout from the CEO at a company all-hands meeting or a private word of thanks from them?',
  'Would you rather someone took a boring task off your to-do list or invited you to participate in a project of great interest?',
  'You can grow the tail of any animal or mythical creature. Which do you choose?',
  'What’s a time when someone did something you appreciated (at work or in another context), but you didn’t let them know? What held you back?',
  'Would you rather take a cold shower every day or always sleep an hour less than you need?',
  'Which do you prefer, oceans or mountains? Why?',
  'Would you rather speak all languages or be able to communicate with animals?',
  'Make a choice: Never hear music again or lose the ability to read?',
  'Do you have any mentors or people you look up to? Tell us about one of them.',
  'What would you do if you came home and found a penguin in your freezer?',
  'If you had to sing karaoke right now, which song would you pick?',
  'You’ve been teleported to the middle ages. How do you make a living there?',
  'If you had a magic button on your desk to bring you whatever you wanted instantly, what would it summon?',
  'What’s your guilty pleasure right now?',
  'What was the last thing you did that gave you child-like joy?',
  'What’s a book you would like to live in?',
  'What’s the last thing you did for the first time?',
  'What’s one activity that grants you pure escapism?',
  'You’re on a desert island and can bring one luxury with you – what is it?',
  'What’s one characteristic you admire in others and why?',
  'What’s an organization or private company you admire and why?',
  'What was the first concert or gig you ever attended?',
  'What does friendship mean to you?',
  'What’s one possession or tool that enhances your daily life?',
  'What smell or image triggers nostalgia for you?',
  'How do you like to sit in a chair?',
  'What’s a cause or purpose you deeply believe in?',
  'What’s a hobby or side project you’ve been meaning to take up?',
  'What ice cream flavour sums up your personality today?',
  'What’s one thing your parents or guardians always nagged you about?',
  'What’s something you do to relieve anger or stress?',
  'What’s a sauce, condiment or dressing you couldn’t live without?',
  'What are you doing when you feel most alive?',
  'Tell us about a stranger you still remember. What made them memorable?',
  'What would you do if you came home and found a penguin in your freezer?',
  'What’s one thing you wish you’d been taught in school?',
  'You’ve been granted a one-way ticket to another country of your choice. Where are you going?',
  'What does it feel like to be you right now?',
  'How have you changed in the last year?',
  'What’s a food that reminds you of childhood?',
  'What’s something our team is good at?',
  'What’s something you’ve drawn inspiration from recently?',
  'What’s something you like to do whenever you travel to a new country?',
  'Who on the team would you like to swap jobs with for a day?',
  'It’s your first day on the job as an evil villain. What’s the first piece of mischief you commit?',
  'Who’s an ex-colleague from this job or another that you still think about?',
  'What’s an adult problem nobody prepared you for?',
  'What do your family think you do for work?',
  'What’s a book that affected you so deeply (emotionally or intellectually) that you still regularly think about it?',
  'What’s something that doesn’t deserve the hate it gets?',
  'What’s a simple life hack that everyone can benefit from?',
  'What is a lesson you feel you learned too late in life?',
  'If buying groceries were a game, what would be one of the loading screen tips?',
  'What’s one of your recent pet peeves?',
  'How would your best friend describe you?',
  'Congratulations! You’ve been chosen to represent your country in a global competition. What sport or activity are you doing?',
  'What’s a small victory you had this week that might seem trivial but was important to you?',
  'If you could have any author, living or dead, write the story of your life, who would it be and why?',
  'Imagine you could teleport to any place in the world for your next meal. Where would you go and what would you eat?',
  'What’s one song that always boosts your mood, no matter how many times you hear it?',
  'What’s something you would like to do again for the first time?'
]

export const makeCheckinGreeting = (meetingCount: number, seedId = '') => {
  const seed = seedId.charCodeAt(0)
  const idx = (seed + meetingCount) % greetings.length
  // Guaranteed not out of bounds
  return greetings[idx]!
}

export const makeCheckinQuestion = (meetingCount: number, seedId = '') => {
  const seed = seedId.charCodeAt(0)
  const idx = (seed + meetingCount) % questions.length
  // Guaranteed not out of bounds
  return questions[idx]!
}
