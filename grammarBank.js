// ==========================================================================
// 초등 5~6학년 및 중등 입문 교과 연계형 문법 뱅크 (1~20단계 각 10문제 완전판)
// ==========================================================================
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

quizBank.grammar = {
    1: [ // 5학년 Lesson 1-2 (기초: 출신, 소유)
        { q: "Where ( ) you from?", a: ["is", "are", "do", "am"], c: 1 },
        { q: "I'm ( ) Brazil.", a: ["in", "at", "from", "on"], c: 2 },
        { q: "Whose phone is ( )?", a: ["this", "they", "we", "he"], c: 0 },
        { q: "It's ( ) phone.", a: ["Inho", "Inho's", "Inho is", "Inho has"], c: 1 },
        { q: "How ( ) you spell your name?", a: ["is", "are", "do", "can"], c: 2 },
        { q: "I ( ) from Korea.", a: ["is", "are", "am", "does"], c: 2 },
        { q: "This is ( ) ball. (나의 공)", a: ["I", "my", "me", "mine"], c: 1 },
        { q: "( ) you sure?", a: ["Is", "Are", "Am", "Do"], c: 1 },
        { q: "She ( ) from the U.S.", a: ["is", "are", "am", "do"], c: 0 },
        { q: "Whose bags ( ) these?", a: ["is", "are", "am", "was"], c: 1 }
    ],
    2: [ // 5학년 Lesson 3-4 (좋아하는 것, 시간)
        { q: "What's your ( ) subject?", a: ["favorite", "like", "best", "good"], c: 0 },
        { q: "My favorite subject ( ) math.", a: ["am", "are", "is", "do"], c: 2 },
        { q: "What time ( ) you go home?", a: ["is", "are", "does", "do"], c: 3 },
        { q: "I go home ( ) 2:30.", a: ["in", "on", "at", "to"], c: 2 },
        { q: "How ( ) at 4:00?", a: ["about", "is", "time", "do"], c: 0 },
        { q: "I ( ) science. (좋아하다)", a: ["like", "likes", "liking", "to like"], c: 0 },
        { q: "I have breakfast ( ) 8:00.", a: ["in", "on", "at", "to"], c: 2 },
        { q: "It's time ( ) lunch.", a: ["to", "for", "at", "on"], c: 1 },
        { q: "I ( ) like music. (좋아하지 않는다)", a: ["don't", "doesn't", "not", "am not"], c: 0 },
        { q: "English ( ) fun.", a: ["am", "is", "are", "be"], c: 1 }
    ],
    3: [ // 5학년 Lesson 5-6 (음식, 장소)
        { q: "What would you ( )?", a: ["like", "likes", "to", "want"], c: 0 },
        { q: "I'd ( ) a steak.", a: ["like", "likes", "want", "have"], c: 0 },
        { q: "It's ( )! (너무 짜)", a: ["salty", "sweet", "hot", "cold"], c: 0 },
        { q: "What's in the ( )?", a: ["kitchen", "stove", "bank", "park"], c: 0 },
        { q: "May I come ( )?", a: ["in", "on", "at", "to"], c: 0 },
        { q: "There ( ) a stove in the kitchen.", a: ["is", "are", "am", "be"], c: 0 },
        { q: "There ( ) two beds in the room.", a: ["is", "are", "am", "was"], c: 1 },
        { q: "May I ( ) your pencil?", a: ["use", "uses", "using", "used"], c: 0 },
        { q: "I'd like a pizza, ( ). (정중한 표현)", a: ["here", "now", "please", "there"], c: 2 },
        { q: "What's in the living ( )?", a: ["room", "bed", "stove", "house"], c: 0 }
    ],
    4: [ // 5학년 Lesson 7-8 (과거, 외모)
        { q: "What ( ) you do during the summer?", a: ["do", "does", "did", "are"], c: 2 },
        { q: "How ( ) your weekend?", a: ["is", "are", "was", "were"], c: 2 },
        { q: "What ( ) he look like?", a: ["do", "does", "is", "are"], c: 1 },
        { q: "He has short ( ) hair.", a: ["curly", "tall", "big", "long"], c: 0 },
        { q: "What's she ( )?", a: ["wear", "wears", "wearing", "to wear"], c: 2 },
        { q: "I ( ) on a trip. (go의 과거형)", a: ["go", "goes", "went", "going"], c: 2 },
        { q: "It ( ) great! (과거형)", a: ["is", "was", "were", "be"], c: 1 },
        { q: "She ( ) long straight hair.", a: ["have", "has", "is", "wear"], c: 1 },
        { q: "He is wearing blue ( ).", a: ["shirt", "pants", "cap", "dress"], c: 1 },
        { q: "I ( ) a book yesterday. (read의 과거형)", a: ["read", "reads", "reading", "to read"], c: 0 }
    ],
    5: [ // 5학년 Lesson 9-10 (취미, 아픔)
        { q: "What do you do in your ( ) time?", a: ["free", "busy", "easy", "good"], c: 0 },
        { q: "Let's ( ) hiking.", a: ["go", "going", "to go", "goes"], c: 0 },
        { q: "What's ( )?", a: ["wrong", "bad", "sick", "pain"], c: 0 },
        { q: "I have ( ) cold.", a: ["a", "an", "the", "one"], c: 0 },
        { q: "Get ( ) sleep.", a: ["some", "any", "a", "one"], c: 0 },
        { q: "I ride a bike ( ) my free time.", a: ["in", "on", "at", "to"], c: 0 },
        { q: "Let's go ( ) this weekend.", a: ["swim", "swimming", "swims", "to swim"], c: 1 },
        { q: "I have a ( ). (두통)", a: ["headache", "stomachache", "toothache", "cold"], c: 0 },
        { q: "You ( ) see a doctor.", a: ["should", "are", "do", "will"], c: 0 },
        { q: "Drink some ( ) water.", a: ["hot", "cold", "warm", "salty"], c: 2 }
    ],
    6: [ // 6학년 Lesson 1-3 (순서, 직업, ~ing)
        { q: "I'm in the ( ) grade.", a: ["six", "sixth", "one", "first"], c: 1 },
        { q: "I ( ) to be a pilot.", a: ["want", "wants", "wanting", "to want"], c: 0 },
        { q: "Let's go ( ).", a: ["swim", "swimming", "swims", "to swim"], c: 1 },
        { q: "He ( ) to be a doctor.", a: ["want", "wants", "wanting", "to want"], c: 1 },
        { q: "Let's go ( ) (자전거 타기)", a: ["bike", "biking", "to bike", "bikes"], c: 1 },
        { q: "What grade ( ) you in?", a: ["is", "are", "am", "do"], c: 1 },
        { q: "She is in the ( ) grade. (5학년)", a: ["five", "fifth", "third", "six"], c: 1 },
        { q: "What do you want to ( )?", a: ["is", "am", "be", "do"], c: 2 },
        { q: "I want to go ( ). (캠핑 가기)", a: ["camp", "camping", "camps", "to camp"], c: 1 },
        { q: "Let's go ( ) baseball.", a: ["play", "playing", "plays", "to play"], c: 0 }
    ],
    7: [ // 6학년 Lesson 4-5 (날짜, 계획)
        { q: "When is your ( )?", a: ["birth", "birthday", "day", "date"], c: 1 },
        { q: "I am ( ) to plant trees.", a: ["go", "going", "goes", "to go"], c: 1 },
        { q: "What ( ) you going to do?", a: ["is", "are", "am", "do"], c: 1 },
        { q: "It's ( ) (5월)", a: ["May", "June", "March", "April"], c: 0 },
        { q: "I'm going to ( ) home.", a: ["visit", "visiting", "to visit", "visits"], c: 0 },
        { q: "My birthday is July ( ). (4일)", a: ["four", "fourth", "fourteen", "forty"], c: 1 },
        { q: "He ( ) going to read books.", a: ["am", "is", "are", "does"], c: 1 },
        { q: "We are going to ( ) a movie.", a: ["watch", "watching", "watches", "watched"], c: 0 },
        { q: "She ( ) going to visit Korea.", a: ["am", "is", "are", "will"], c: 1 },
        { q: "Is your birthday ( ) October?", a: ["in", "on", "at", "to"], c: 0 }
    ],
    8: [ // 6학년 Lesson 6-7 (병, 주문)
        { q: "I have a ( ).", a: ["headache", "head", "sick", "pain"], c: 0 },
        { q: "You ( ) see a doctor.", a: ["should", "should to", "shoulding", "shall"], c: 0 },
        { q: "What would you like to ( )?", a: ["have", "has", "having", "to have"], c: 0 },
        { q: "You should ( ) some medicine.", a: ["take", "taking", "takes", "to take"], c: 0 },
        { q: "Would you like ( ) chicken?", a: ["a", "an", "some", "the"], c: 2 },
        { q: "I have a ( ). (복통)", a: ["stomachache", "headache", "toothache", "cold"], c: 0 },
        { q: "You should ( ) at home today.", a: ["rest", "rests", "resting", "to rest"], c: 0 },
        { q: "I ( ) like to eat pizza.", a: ["will", "would", "should", "can"], c: 1 },
        { q: "Would you like some orange ( )?", a: ["juice", "juices", "a juice", "the juice"], c: 0 },
        { q: "You should ( ) to bed early.", a: ["go", "going", "goes", "went"], c: 0 }
    ],
    9: [ // 6학년 Lesson 8-9 (비교, 외모)
        { q: "He has ( ) straight hair.", a: ["short", "tall", "long", "big"], c: 0 },
        { q: "I am ( ) than you.", a: ["strong", "stronger", "more strong", "strongest"], c: 1 },
        { q: "She is ( ) than me.", a: ["tall", "taller", "more tall", "tallest"], c: 1 },
        { q: "He has ( ) hair.", a: ["straight", "strong", "fast", "big"], c: 0 },
        { q: "You are ( ) than him.", a: ["fast", "faster", "more fast", "fastest"], r: "", a: ["fast", "faster", "more fast", "fastest"], c: 1 },
        { q: "This bag is ( ) than that one.", a: ["big", "bigger", "more big", "biggest"], c: 1 },
        { q: "Jiho is ( ) than Minsu.", a: ["fast", "faster", "more fast", "fastest"], c: 1 },
        { q: "She is ( ) than her sister.", a: ["pretty", "prettier", "more pretty", "prettiest"], c: 1 },
        { q: "English is ( ) than math.", a: ["easy", "easier", "more easy", "easiest"], c: 1 },
        { q: "A plane is ( ) than a train.", a: ["fast", "faster", "more fast", "fastest"], c: 1 }
    ],
    10: [ // 6학년 Lesson 10-13 (의견, 감정, 길 찾기)
        { q: "How can I get ( ) the museum?", a: ["to", "at", "in", "on"], c: 0 },
        { q: "What do you ( )?", a: ["think", "thought", "thinking", "to think"], c: 0 },
        { q: "Why ( ) you happy?", a: ["do", "are", "is", "does"], c: 1 },
        { q: "I am happy ( ) I won.", a: ["because", "so", "but", "and"], c: 0 },
        { q: "How can I get ( )?", a: ["there", "to there", "at there", "in there"], c: 0 },
        { q: "Go ( ) and turn left. (직진)", a: ["straight", "straights", "straightly", "to straight"], c: 0 },
        { q: "It's ( ) to the bank.", a: ["next", "near", "by", "at"], c: 0 },
        { q: "I don't ( ) so.", a: ["think", "thinking", "thought", "thinks"], c: 0 },
        { q: "Why ( ) she sad?", a: ["do", "are", "is", "does"], c: 2 },
        { q: "I am sad because I ( ) my homework.", a: ["lose", "lost", "losing", "to lose"], c: 1 }
    ],
    11: [ // 11단계: 의무 및 금지 (must, must not)
        { q: "You ( ) follow the rules.", a: ["must", "must not", "are", "do"], c: 0 },
        { q: "You must not ( ) here. (뛰다)", a: ["run", "runs", "running", "ran"], c: 0 },
        { q: "We must ( ) now.", a: ["leave", "leaves", "leaving", "left"], c: 0 },
        { q: "You must not ( ) the paintings.", a: ["touch", "touches", "touching", "touched"], c: 0 },
        { q: "He must ( ) hard for the test.", a: ["study", "studies", "studying", "studied"], c: 0 },
        { q: "You must not ( ) late.", a: ["be", "is", "are", "am"], c: 0 },
        { q: "I must ( ) my homework.", a: ["do", "does", "doing", "did"], c: 0 },
        { q: "She ( ) see a doctor right away.", a: ["must", "are", "do", "must not"], c: 0 },
        { q: "You must not ( ) here. (담배 피우다)", a: ["smoke", "smokes", "smoking", "smoked"], c: 0 },
        { q: "You ( ) wear a seatbelt.", a: ["must", "must not", "are", "do"], c: 0 }
    ],
    12: [ // 12단계: 빈도부사 (always, usually, often, sometimes, never)
        { q: "I ( ) get up at 7:00. (항상)", a: ["always", "usually", "sometimes", "never"], c: 0 },
        { q: "She ( ) bikes to school. (보통)", a: ["always", "usually", "sometimes", "never"], c: 1 },
        { q: "They ( ) play soccer. (자주)", a: ["often", "never", "always", "sometimes"], c: 0 },
        { q: "We ( ) watch movies. (가끔)", a: ["always", "usually", "sometimes", "never"], c: 2 },
        { q: "He ( ) tells lies. (절대 ~않다)", a: ["always", "usually", "sometimes", "never"], c: 3 },
        { q: "Do you ( ) clean your room?", a: ["usually", "always", "never", "often"], c: 0 },
        { q: "Suji is ( ) kind.", a: ["always", "usually", "sometimes", "never"], c: 0 },
        { q: "I ( ) skip breakfast. (가끔)", a: ["sometimes", "always", "usually", "never"], c: 0 },
        { q: "He ( ) reads books in the library.", a: ["often", "never", "always", "sometimes"], c: 0 },
        { q: "It ( ) is easy. (빈도부사 위치 규칙)", a: ["is never", "never is", "is always", "always is"], c: 0 }
    ],
    13: [ // 13단계: 감탄문 (What a / How)
        { q: "What ( ) beautiful day it is!", a: ["a", "an", "the", "X"], c: 0 },
        { q: "How ( ) this boy is!", a: ["smart", "a smart", "smart boy", "boys"], c: 0 },
        { q: "What a cute cat ( )!", a: ["is it", "it is", "it was", "are they"], c: 1 },
        { q: "How ( ) it is today!", a: ["hot", "a hot", "hot day", "hots"], c: 0 },
        { q: "What ( ) expensive car!", a: ["a", "an", "the", "X"], c: 1 },
        { q: "How ( ) the music is!", a: ["loud", "a loud", "loudly", "loud music"], c: 0 },
        { q: "What a ( ) book!", a: ["fun", "fun a", "funny a", "funs"], c: 0 },
        { q: "How ( ) she runs!", a: ["fast", "fastly", "a fast", "fasts"], c: 0 },
        { q: "What ( ) big room this is!", a: ["a", "an", "the", "X"], c: 0 },
        { q: "How kind you ( )!", a: ["are", "is", "am", "be"], c: 0 }
    ],
    14: [ // 14단계: 현재진행형 (am/is/are + -ing)
        { q: "I am ( ) the piano now.", a: ["play", "plays", "playing", "played"], c: 2 },
        { q: "What ( ) he doing?", a: ["is", "are", "am", "does"], c: 0 },
        { q: "They are ( ) in the park.", a: ["run", "runs", "running", "ran"], c: 2 },
        { q: "She ( ) not studying English.", a: ["is", "are", "am", "does"], c: 0 },
        { q: "Are you ( ) to me?", a: ["listen", "listens", "listening", "listened"], c: 2 },
        { q: "We ( ) having dinner.", a: ["is", "are", "am", "do"], c: 1 },
        { q: "The birds ( ) singing beautifully.", a: ["is", "are", "am", "was"], c: 1 },
        { q: "Look! It is ( ) outside.", a: ["rain", "rains", "running", "raining"], c: 3 },
        { q: "He ( ) making a cake now.", a: ["is", "are", "am", "does"], c: 0 },
        { q: "Why are you ( )? (우는 중이니)", a: ["cry", "cries", "crying", "cried"], c: 2 }
    ],
    15: [ // 15단계: 제안하기 (Why don't you / Shall we)
        { q: "Shall we ( ) the dance club?", a: ["join", "joins", "joining", "joined"], c: 0 },
        { q: "Why don't you ( ) a rest?", a: ["take", "takes", "taking", "took"], c: 0 },
        { q: "Shall we ( ) tomorrow?", a: ["meet", "meets", "meeting", "met"], c: 0 },
        { q: "Why don't you ( ) him?", a: ["ask", "asks", "asking", "asked"], c: 0 },
        { q: "Shall we ( ) tennis?", a: ["play", "plays", "playing", "played"], c: 0 },
        { q: "Why ( ) you go to bed early?", a: ["don't", "not", "doesn't", "aren't"], c: 0 },
        { q: "Shall ( ) go to the park?", a: ["we", "you", "I", "they"], c: 0 },
        { q: "Why don't you ( ) this green shirt?", a: ["try", "tries", "trying", "tried"], c: 0 },
        { q: "Shall we ( ) together?", a: ["study", "studies", "studying", "studied"], c: 0 },
        { q: "Why don't you ( ) some water?", a: ["drink", "drinks", "drinking", "drank"], c: 0 }
    ],
    16: [ // 16단계: 최상급 (the -est / the most)
        { q: "Jiho is the ( ) boy in his class.", a: ["tall", "taller", "tallest", "most tall"], c: 2 },
        { q: "This is the ( ) expensive car.", a: ["most", "more", "best", "very"], c: 0 },
        { q: "The cheetah is the ( ) animal.", a: ["fast", "faster", "fastest", "most fast"], c: 2 },
        { q: "Math is the ( ) subject for me.", a: ["hard", "harder", "hardest", "most hard"], c: 2 },
        { q: "She is the ( ) popular girl.", a: ["most", "more", "best", "very"], c: 0 },
        { q: "Today is the ( ) day of the year.", a: ["cold", "coder", "coldest", "most cold"], c: 2 },
        { q: "Russia is the ( ) country.", a: ["big", "bigger", "biggest", "most big"], c: 2 },
        { q: "This is the ( ) day of my life.", a: ["good", "better", "best", "most good"], c: 2 },
        { q: "It was the ( ) problem.", a: ["easy", "easier", "easiest", "most easy"], c: 2 },
        { q: "He is the ( ) man in the world.", a: ["strong", "stronger", "strongest", "most strong"], c: 2 }
    ],
    17: [ // 17단계: 동명사 목적어 (enjoy, finish, mind, stop + -ing)
        { q: "I enjoy ( ) books.", a: ["read", "reads", "to read", "reading"], c: 3 },
        { q: "She finished ( ) her homework.", a: ["do", "does", "to do", "doing"], c: 3 },
        { q: "Stop ( ), please.", a: ["talk", "talks", "to talk", "talking"], c: 3 },
        { q: "Do you enjoy ( ) fishing?", a: ["go", "going", "to go", "goes"], c: 1 },
        { q: "He finished ( ) his room.", a: ["clean", "cleans", "to clean", "cleaning"], c: 3 },
        { q: "Don't stop ( ) to music.", a: ["listen", "listens", "to listen", "listening"], c: 3 },
        { q: "We enjoy ( ) video games.", a: ["play", "playing", "to play", "plays"], c: 1 },
        { q: "She finished ( ) the piano.", a: ["practice", "practices", "to practice", "practicing"], c: 3 },
        { q: "They couldn't stop ( ).", a: ["laugh", "laughs", "to laugh", "laughing"], c: 3 },
        { q: "I enjoy ( ) pictures.", a: ["draw", "draws", "to draw", "drawing"], c: 3 }
    ],
    18: [ // 18단계: to부정사 목적어 (want, hope, wish, decide + to-V)
        { q: "I want ( ) soccer tomorrow.", a: ["play", "playing", "to play", "plays"], c: 2 },
        { q: "She decided ( ) to Daegu.", a: ["go", "going", "to go", "went"], c: 2 },
        { q: "I hope ( ) you again.", a: ["meet", "meeting", "to meet", "met"], c: 2 },
        { q: "He wants ( ) a new computer.", a: ["buy", "buying", "to buy", "buys"], c: 2 },
        { q: "They decided ( ) hard.", a: ["study", "studying", "to study", "studied"], c: 2 },
        { q: "I hope ( ) a doctor.", a: ["be", "being", "to be", "am"], c: 2 },
        { q: "Do you want ( ) pizza?", a: ["eat", "eating", "to eat", "eats"], c: 2 },
        { q: "We decided ( ) early.", a: ["leave", "leaving", "to leave", "left"], c: 2 },
        { q: "She wants ( ) Paris.", a: ["visit", "visiting", "to visit", "visits"], c: 2 },
        { q: "I hope ( ) today.", a: ["rest", "resting", "to rest", "rested"], c: 2 }
    ],
    19: [ // 19단계: 경험을 묻는 현재완료 (Have you ever -ed?)
        { q: "Have you ever ( ) to Jeju Island?", a: ["be", "being", "been", "was"], c: 2 },
        { q: "I have never ( ) Kimchi.", a: ["eat", "eating", "eaten", "ate"], c: 2 },
        { q: "Have you ever ( ) a tiger?", a: ["see", "seeing", "seen", "saw"], c: 2 },
        { q: "He ( ) seen the movie three times.", a: ["have", "has", "is", "does"], c: 1 },
        { q: "She has ( ) been to a desert.", a: ["ever", "never", "before", "yet"], c: 1 },
        { q: "Have you ever ( ) a pizza?", a: ["make", "making", "made", "makes"], c: 2 },
        { q: "We have ( ) before.", a: ["meet", "meeting", "met", "meets"], c: 2 },
        { q: "Have you ever ( ) in a plane?", a: ["fly", "flying", "flown", "flew"], c: 2 },
        { q: "He has never ( ) late.", a: ["be", "being", "been", "was"], c: 2 },
        { q: "They ( ) been to Korea.", a: ["have", "has", "are", "do"], c: 0 }
    ],
    20: [ // 20단계: 수동태 입문 (be + p.p.)
        { q: "This room is ( ) every day.", a: ["clean", "cleans", "cleaning", "cleaned"], c: 3 },
        { q: "English is ( ) all over the world.", a: ["speak", "speaks", "speaking", "spoken"], c: 3 },
        { q: "The window ( ) broken yesterday.", a: ["is", "was", "are", "were"], c: 1 },
        { q: "This book was written ( ) King Sejong.", a: ["by", "to", "for", "with"], c: 0 },
        { q: "The car was ( ) in Korea.", a: ["make", "making", "made", "makes"], c: 2 },
        { q: "Cheese is ( ) from milk.", a: ["make", "making", "made", "makes"], c: 2 },
        { q: "The boy is ( ) Minsu.", a: ["call", "calls", "calling", "called"], c: 3 },
        { q: "The letter was ( ) yesterday.", a: ["deliver", "delivers", "delivering", "delivered"], c: 3 },
        { q: "The building was ( ) in 2000.", a: ["build", "building", "built", "builds"], c: 2 },
        { q: "The glass was broken ( ) Jiho.", a: ["by", "to", "for", "of"], c: 0 }
    ]
};
