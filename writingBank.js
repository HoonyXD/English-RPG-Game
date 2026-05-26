// ==========================================
// 교과서 단어/문법 연계형 작문 데이터 (1~10단계 각 10문제 확장판)
// ==========================================
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

quizBank.writing = {
    1: [ // 5학년 1-2과: 출신, 이름 철자, 소유 표현
        { q: "단어를 배열하세요: '나는 브라질 출신이야.'", blocks: ["I'm", "from", "Brazil."], ans: "I'm from Brazil." },
        { q: "단어를 배열하세요: '너는 어디 출신이니?'", blocks: ["Where", "are", "you", "from?"], ans: "Where are you from?" },
        { q: "단어를 배열하세요: '이것은 누구의 전화기인가요?'", blocks: ["Whose", "phone", "is", "this?"], ans: "Whose phone is this?" },
        { q: "단어를 배열하세요: '그것은 인호의 것이야.'", blocks: ["It's", "Inho's."], ans: "It's Inho's." },
        { q: "단어를 배열하세요: '네 이름의 철자는 어떻게 되니?'", blocks: ["How", "do", "you", "spell", "your", "name?"], ans: "How do you spell your name?" },
        { q: "단어를 배열하세요: '나는 한국 출신이야.'", blocks: ["I", "am", "from", "Korea."], ans: "I am from Korea." },
        { q: "단어를 배열하세요: '이것은 내 공이야.'", blocks: ["This", "is", "my", "ball."], ans: "This is my ball." },
        { q: "단어를 배열하세요: '저것은 네 가방이니?'", blocks: ["Is", "that", "your", "bag?"], ans: "Is that your bag?" },
        { q: "단어를 배열하세요: '그녀는 미국 출신이야.'", blocks: ["She", "is", "from", "the", "U.S."], ans: "She is from the U.S." },
        { q: "단어를 배열하세요: '그것은 미나의 가방이야.'", blocks: ["It's", "Mina's", "bag."], ans: "It's Mina's bag." }
    ],
    2: [ // 5학년 3-4과: 좋아하는 과목, 일과 시간
        { q: "단어를 배열하세요: '내가 가장 좋아하는 과목은 수학이야.'", blocks: ["My", "favorite", "subject", "is", "math."], ans: "My favorite subject is math." },
        { q: "단어를 배열하세요: '네가 가장 좋아하는 과목은 무엇이니?'", blocks: ["What's", "your", "favorite", "subject?"], ans: "What's your favorite subject?" },
        { q: "단어를 배열하세요: '나는 2시 30분에 집에 가.'", blocks: ["I", "go", "home", "at", "2:30."], ans: "I go home at 2:30." },
        { q: "단어를 배열하세요: '너는 몇 시에 집에 가니?'", blocks: ["What", "time", "do", "you", "go", "home?"], ans: "What time do you go home?" },
        { q: "단어를 배열하세요: '4시는 어때?'", blocks: ["How", "about", "at", "4:00?"], ans: "How about at 4:00?" },
        { q: "단어를 배열하세요: '나는 과학을 좋아해.'", blocks: ["I", "like", "science."], ans: "I like science." },
        { q: "단어를 배열하세요: '나는 8시에 아침을 먹어.'", blocks: ["I", "have", "breakfast", "at", "8:00."], ans: "I have breakfast at 8:00." },
        { q: "단어를 배열하세요: '점심 시간이야.'", blocks: ["It's", "time", "for", "lunch."], ans: "It's time for lunch." },
        { q: "단어를 배열하세요: '나는 음악을 좋아하지 않아.'", blocks: ["I", "don't", "like", "music."], ans: "I don't like music." },
        { q: "단어를 배열하세요: '영어가 재미있어.'", blocks: ["English", "is", "fun."], ans: "English is fun." }
    ],
    3: [ // 5학년 5-6과: 음식 주문, 특정 장소의 사물 및 허락
        { q: "단어를 배열하세요: '무엇을 드시겠어요?'", blocks: ["What", "would", "you", "like?"], ans: "What would you like?" },
        { q: "단어를 배열하세요: '나는 스테이크를 먹고 싶어.'", blocks: ["I'd", "like", "a", "steak."], ans: "I'd like a steak." },
        { q: "단어를 배열하세요: '부엌에 무엇이 있나요?'", blocks: ["What's", "in", "the", "kitchen?"], ans: "What's in the kitchen?" },
        { q: "단어를 배열하세요: '거기에 가스레인지가 있어.'", blocks: ["There", "is", "a", "stove."], ans: "There is a stove." },
        { q: "단어를 배열하세요: '들어가도 될까요?'", blocks: ["May", "I", "come", "in?"], ans: "May I come in?" },
        { q: "단어를 배열하세요: '나는 피자를 주문하고 싶어요.'", blocks: ["I'd", "like", "a", "pizza,", "please."], ans: "I'd like a pizza, please." },
        { q: "단어를 배열하세요: '이 음식은 너무 짜요.'", blocks: ["This", "food", "is", "too", "salty."], ans: "This food is too salty." },
        { q: "단어를 배열하세요: '방에 침대가 하나 있어.'", blocks: ["There", "is", "a", "bed", "in", "the", "room."], ans: "There is a bed in the room." },
        { q: "단어를 배열하세요: '당신의 연필을 써도 될까요?'", blocks: ["May", "I", "use", "your", "pencil?"], ans: "May I use your pencil?" },
        { q: "단어를 배열하세요: '거실에 무엇이 있나요?'", blocks: ["What's", "in", "the", "living", "room?"], ans: "What's in the living room?" }
    ],
    4: [ // 5학년 7-8과: 과거의 행동 및 소감, 외모/옷차림 묘사
        { q: "단어를 배열하세요: '너는 여름 동안 무엇을 했니?'", blocks: ["What", "did", "you", "do", "during", "the", "summer?"], ans: "What did you do during the summer?" },
        { q: "단어를 배열하세요: '나는 여행을 갔었어.'", blocks: ["I", "went", "on", "a", "trip."], ans: "I went on a trip." },
        { q: "단어를 배열하세요: '그는 짧은 곱슬머리를 가졌어.'", blocks: ["He", "has", "short", "curly", "hair."], ans: "He has short curly hair." },
        { q: "단어를 배열하세요: '그녀는 무엇을 입고 있니?'", blocks: ["What's", "she", "wearing?"], ans: "What's she wearing?" },
        { q: "단어를 배열하세요: '그녀는 노란색 티셔츠를 입고 있어.'", blocks: ["She's", "wearing", "a", "yellow", "T-shirt."], ans: "She's wearing a yellow T-shirt." },
        { q: "단어를 배열하세요: '네 주말은 어땠니?'", blocks: ["How", "was", "your", "weekend?"], ans: "How was your weekend?" },
        { q: "단어를 배열하세요: '정말 멋졌어.'", blocks: ["It", "was", "great."], ans: "It was great." },
        { q: "단어를 배열하세요: '그녀는 긴 생머리를 가졌어.'", blocks: ["She", "has", "long", "straight", "hair."], ans: "She has long straight hair." },
        { q: "단어를 배열하세요: '그는 파란색 바지를 입고 있어.'", blocks: ["He", "is", "wearing", "blue", "pants."], ans: "He is wearing blue pants." },
        { q: "단어를 배열하세요: '나는 어제 책을 읽었어.'", blocks: ["I", "read", "a", "book", "yesterday."], ans: "I read a book yesterday." }
    ],
    5: [ // 5학년 9-10과: 여가 활동 제안, 증상 묻고 조언하기
        { q: "단어를 배열하세요: '자유 시간에 무엇을 하니?'", blocks: ["What", "do", "you", "do", "in", "your", "free", "time?"], ans: "What do you do in your free time?" },
        { q: "단어를 배열하세요: '등산 가자.'", blocks: ["Let's", "go", "hiking."], ans: "Let's go hiking." },
        { q: "단어를 배열하세요: '무슨 일 있니?'", blocks: ["What's", "wrong?"], ans: "What's wrong?" },
        { q: "단어를 배열하세요: '나는 감기에 걸렸어.'", blocks: ["I", "have", "a", "cold."], ans: "I have a cold." },
        { q: "단어를 배열하세요: '잠을 좀 자렴.'", blocks: ["Get", "some", "sleep."], ans: "Get some sleep." },
        { q: "단어를 배열하세요: '나는 자유 시간에 자전거를 타.'", blocks: ["I", "ride", "a", "bike", "in", "my", "free", "time."], ans: "I ride a bike in my free time." },
        { q: "단어를 배열하세요: '이번 주말에 수영하러 가자.'", blocks: ["Let's", "go", "swimming", "this", "weekend."], ans: "Let's go swimming this weekend." },
        { q: "단어를 배열하세요: '나는 두통이 있어.'", blocks: ["I", "have", "a", "headache."], ans: "I have a headache." },
        { q: "단어를 배열하세요: '따뜻한 물을 좀 마시렴.'", blocks: ["Drink", "some", "warm", "water."], ans: "Drink some warm water." },
        { q: "단어를 배열하세요: '의사를 만나보는 게 좋겠어.'", blocks: ["You", "should", "see", "a", "doctor."], ans: "You should see a doctor." }
    ],
    6: [ // 6학년 1-3과: 학년(서수), 장래희망, 여가 활동
        { q: "단어를 배열하세요: '나는 6학년이야.'", blocks: ["I'm", "in", "the", "sixth", "grade."], ans: "I'm in the sixth grade." },
        { q: "단어를 배열하세요: '나는 비행기 조종사가 되고 싶어.'", blocks: ["I", "want", "to", "be", "a", "pilot."], ans: "I want to be a pilot." },
        { q: "단어를 배열하세요: '수영하러 가자.'", blocks: ["Let's", "go", "swimming."], ans: "Let's go swimming." },
        { q: "단어를 배열하세요: '그는 의사가 되기를 원해.'", blocks: ["He", "wants", "to", "be", "a", "doctor."], ans: "He wants to be a doctor." },
        { q: "단어를 배열하세요: '자전거 타러 가자.'", blocks: ["Let's", "go", "biking."], ans: "Let's go biking." },
        { q: "단어를 배열하세요: '너는 몇 학년이니?'", blocks: ["What", "grade", "are", "you", "in?"], ans: "What grade are you in?" },
        { q: "단어를 배열하세요: '그녀는 5학년이야.'", blocks: ["She", "is", "in", "the", "fifth", "grade."], ans: "She is in the fifth grade." },
        { q: "단어를 배열하세요: '너는 커서 무엇이 되고 싶니?'", blocks: ["What", "do", "you", "want", "to", "be?"], ans: "What do you want to be?" },
        { q: "단어를 배열하세요: '나는 캠핑 가고 싶어.'", blocks: ["I", "want", "to", "go", "camping."], ans: "I want to go camping." },
        { q: "단어를 배열하세요: '우리 야구하러 가자.'", blocks: ["Let's", "go", "play", "baseball."], ans: "Let's go play baseball." }
    ],
    7: [ // 6학년 4-5과: 생일, 미래 계획(be going to)
        { q: "단어를 배열하세요: '네 생일은 언제니?'", blocks: ["When", "is", "your", "birthday?"], ans: "When is your birthday?" },
        { q: "단어를 배열하세요: '나는 나무들을 심을 예정이야.'", blocks: ["I", "am", "going", "to", "plant", "trees."], ans: "I am going to plant trees." },
        { q: "단어를 배열하세요: '너는 무엇을 할 예정이니?'", blocks: ["What", "are", "you", "going", "to", "do?"], ans: "What are you going to do?" },
        { q: "단어를 배열하세요: '그것은 5월이야.'", blocks: ["It's", "May."], ans: "It's May." },
        { q: "단어를 배열하세요: '나는 집에 방문할 예정이야.'", blocks: ["I'm", "going", "to", "visit", "home."], ans: "I'm going to visit home." },
        { q: "단어를 배열하세요: '내 생일은 7월 4일이야.'", blocks: ["My", "birthday", "is", "July", "fourth."], ans: "My birthday is July fourth." },
        { q: "단어를 배열하세요: '그는 이번 주말에 책을 읽을 예정이야.'", blocks: ["He", "is", "going", "to", "read", "books."], ans: "He is going to read books." },
        { q: "단어를 배열하세요: '우리는 내일 영화를 볼 예정이야.'", blocks: ["We", "are", "going", "to", "watch", "a", "movie."], ans: "We are going to watch a movie." },
        { q: "단어를 배열하세요: '그녀는 이번 겨울에 한국에 올 예정이야.'", blocks: ["She", "is", "going", "to", "visit", "Korea."], ans: "She is going to visit Korea." },
        { q: "단어를 배열하세요: '네 생일은 10월이니?'", blocks: ["Is", "your", "birthday", "in", "October?"], ans: "Is your birthday in October?" }
    ],
    8: [ // 6학년 6-7과: 의무/권유(should), 정중한 요청 및 제안
        { q: "단어를 배열하세요: '나는 두통이 있어.'", blocks: ["I", "have", "a", "headache."], ans: "I have a headache." },
        { q: "단어를 배열하세요: '너는 의사를 만나보는 게 좋겠어.'", blocks: ["You", "should", "see", "a", "doctor."], ans: "You should see a doctor." },
        { q: "단어를 배열하세요: '무엇을 드시고 싶으신가요?'", blocks: ["What", "would", "you", "like", "to", "have?"], ans: "What would you like to have?" },
        { q: "단어를 배열하세요: '너는 약을 좀 먹어야 해.'", blocks: ["You", "should", "take", "some", "medicine."], ans: "You should take some medicine." },
        { q: "단어를 배열하세요: '치킨을 좀 드시겠어요?'", blocks: ["Would", "you", "like", "some", "chicken?"], ans: "Would you like some chicken?" },
        { q: "단어를 배열하세요: '나는 복통이 있어.'", blocks: ["I", "have", "a", "stomachache."], ans: "I have a stomachache." },
        { q: "단어를 배열하세요: '너는 오늘 집에서 쉬는 게 좋겠어.'", blocks: ["You", "should", "rest", "at", "home", "today."], ans: "You should rest at home today." },
        { q: "단어를 배열하세요: '나는 피자를 먹고 싶어.'", blocks: ["I", "would", "like", "to", "eat", "pizza."], ans: "I would like to eat pizza." },
        { q: "단어를 배열하세요: '오렌지 주스를 좀 드시겠어요?'", blocks: ["Would", "you", "like", "some", "orange", "juice?"], ans: "Would you like some orange juice?" },
        { q: "단어를 배열하세요: '너는 일찍 잠자리에 들어야 해.'", blocks: ["You", "should", "go", "to", "bed", "early."], ans: "You should go to bed early." }
    ],
    9: [ // 6학년 8-9과: 외모 묘사, 대상을 비교하는 말(비교급)
        { q: "단어를 배열하세요: '그는 짧은 생머리를 가졌어.'", blocks: ["He", "has", "short", "straight", "hair."], ans: "He has short straight hair." },
        { q: "단어를 배열하세요: '내가 너보다 더 힘이 세.'", blocks: ["I", "am", "stronger", "than", "you."], ans: "I am stronger than you." },
        { q: "단어를 배열하세요: '그녀는 나보다 키가 더 커.'", blocks: ["She", "is", "taller", "than", "me."], ans: "She is taller than me." },
        { q: "단어를 배열하세요: '너는 그보다 더 빨라.'", blocks: ["You", "are", "faster", "than", "him."], ans: "You are faster than him." },
        { q: "단어를 배열하세요: '그는 곧은 머리카락을 가지고 있어.'", blocks: ["He", "has", "straight", "hair."], ans: "He has straight hair." },
        { q: "단어를 배열하세요: '이 가방은 저 가방보다 더 커.'", blocks: ["This", "bag", "is", "bigger", "than", "that", "one."], ans: "This bag is bigger than that one." },
        { q: "단어를 배열하세요: '지호는 민수보다 더 빨라.'", blocks: ["Jiho", "is", "faster", "than", "Minsu."], ans: "Jiho is faster than Minsu." },
        { q: "단어를 배열하세요: '그녀는 그녀의 여동생보다 더 예뻐.'", blocks: ["She", "is", "prettier", "than", "her", "sister."], ans: "She is prettier than her sister." },
        { q: "단어를 배열하세요: '영어는 수학보다 더 쉬워.'", blocks: ["English", "is", "easier", "than", "math."], ans: "English is easier than math." },
        { q: "단어를 배열하세요: '비행기는 기차보다 더 빨라.'", blocks: ["A", "plane", "is", "faster", "than", "a", "train."], ans: "A plane is faster than a train." }
    ],
    10: [ // 6학년 10-13과: 위치 및 길 안내, 의견/이유 표현(because)
        { q: "단어를 배열하세요: '박물관에 어떻게 가나요?'", blocks: ["How", "can", "I", "get", "to", "the", "museum?"], ans: "How can I get to the museum?" },
        { q: "단어를 배열하세요: '너는 어떻게 생각하니?'", blocks: ["What", "do", "you", "think?"], ans: "What do you think?" },
        { q: "단어를 배열하세요: '너는 왜 기쁘니?'", blocks: ["Why", "are", "you", "happy?"], ans: "Why are you happy?" },
        { q: "단어를 배열하세요: '내가 이겼기 때문에 기뻐.'", blocks: ["I", "am", "happy", "because", "I", "won."], ans: "I am happy because I won." },
        { q: "단어를 배열하세요: '거기에 어떻게 가나요?'", blocks: ["How", "can", "I", "get", "there?"], ans: "How can I get there?" },
        { q: "단어를 배열하세요: '똑바로 가다가 왼쪽으로 도세요.'", blocks: ["Go", "straight", "and", "turn", "left."], ans: "Go straight and turn left." },
        { q: "단어를 배열하세요: '그것은 은행 옆에 있어요.'", blocks: ["It's", "next", "to", "the", "bank."], ans: "It's next to the bank." },
        { q: "단어를 배열하세요: '나는 그렇게 생각하지 않아.'", blocks: ["I", "don't", "think", "so."], ans: "I don't think so." },
        { q: "단어를 배열하세요: '너는 왜 슬프니?'", blocks: ["Why", "are", "you", "sad?"], ans: "Why are you sad?" },
        { q: "단어를 배열하세요: '내가 숙제를 잃어버렸기 때문에 슬퍼.'", blocks: ["I", "am", "sad", "because", "I", "lost", "my", "homework."], ans: "I am sad because I lost my homework." }
    ],
    11: [ // 의무/금지 (must, must not)
        { q: "배열: '너는 규칙을 따라야만 해.'", blocks: ["You", "must", "follow", "the", "rules."], ans: "You must follow the rules." },
        { q: "배열: '여기서 달리면 안 된다.'", blocks: ["You", "must", "not", "run", "here."], ans: "You must not run here." },
        { q: "배열: '우리는 지금 떠나야 해.'", blocks: ["We", "must", "leave", "now."], ans: "We must leave now." },
        { q: "배열: '박물관에서 만지지 마시오.'", blocks: ["You", "must", "not", "touch", "it."], ans: "You must not touch it." },
        { q: "배열: '그는 열심히 공부해야 한다.'", blocks: ["He", "must", "study", "hard."], ans: "He must study hard." },
        { q: "배열: '너는 늦으면 안 된다.'", blocks: ["You", "must", "not", "be", "late."], ans: "You must not be late." },
        { q: "배열: '나는 숙제를 해야 해.'", blocks: ["I", "must", "do", "my", "homework."], ans: "I must do my homework." },
        { q: "배열: '그녀는 의사를 만나야만 한다.'", blocks: ["She", "must", "see", "a", "doctor."], ans: "She must see a doctor." },
        { q: "배열: '여기서 담배를 피우면 안 된다.'", blocks: ["You", "must", "not", "smoke", "here."], ans: "You must not smoke here." },
        { q: "배열: '안전벨트를 매야 합니다.'", blocks: ["You", "must", "wear", "a", "seatbelt."], ans: "You must wear a seatbelt." }
    ],
    12: [ // 빈도부사 (always, usually, often, sometimes, never)
        { q: "배열: '나는 항상 7시에 일어난다.'", blocks: ["I", "always", "get", "up", "at", "7:00."], ans: "I always get up at 7:00." },
        { q: "배열: '그녀는 보통 자전거를 타고 학교에 간다.'", blocks: ["She", "usually", "bikes", "to", "school."], ans: "She usually bikes to school." },
        { q: "배열: '그들은 자주 축구를 한다.'", blocks: ["They", "often", "play", "soccer."], ans: "They often play soccer." },
        { q: "배열: '우리는 가끔 영화를 본다.'", blocks: ["We", "sometimes", "watch", "movies."], ans: "We sometimes watch movies." },
        { q: "배열: '그는 절대 거짓말을 하지 않는다.'", blocks: ["He", "never", "tells", "lies."], ans: "He never tells lies." },
        { q: "배열: '너는 대개 방을 청소하니?'", blocks: ["Do", "you", "usually", "clean", "your", "room?"], ans: "Do you usually clean your room?" },
        { q: "배열: '수지는 항상 친절하다.'", blocks: ["Suji", "is", "always", "kind."], ans: "Suji is always kind." },
        { q: "배열: '나는 가끔 아침을 거른다.'", blocks: ["I", "sometimes", "skip", "breakfast."], ans: "I sometimes skip breakfast." },
        { q: "배열: '그것은 절대 쉽지 않다.'", blocks: ["It", "is", "never", "easy."], ans: "It is never easy." },
        { q: "배열: '그는 자주 책을 읽는다.'", blocks: ["He", "often", "reads", "books."], ans: "He often reads books." }
    ],
    13: [ // 감탄문 (What a / How)
        { q: "배열: '정말 아름다운 날이구나!'", blocks: ["What", "a", "beautiful", "day", "it", "is!"], ans: "What a beautiful day it is!" },
        { q: "배열: '이 소년은 정말 똑똑하구나!'", blocks: ["How", "smart", "this", "boy", "is!"], ans: "How smart this boy is!" },
        { q: "배열: '정말 귀여운 고양이네!'", blocks: ["What", "a", "cute", "cat!"], ans: "What a cute cat!" },
        { q: "배열: '날씨가 정말 덥구나!'", blocks: ["How", "hot", "it", "is!"], ans: "How hot it is!" },
        { q: "배열: '정말 멋진 차를 가졌구나!'", blocks: ["What", "a", "nice", "car!"], ans: "What a nice car!" },
        { q: "배열: '음악이 정말 시끄럽네!'", blocks: ["How", "loud", "the", "music", "is!"], ans: "How loud the music is!" },
        { q: "배열: '정말 재미있는 책이구나!'", blocks: ["What", "a", "fun", "book!"], ans: "What a fun book!" },
        { q: "배열: '그녀는 정말 빠르게 달리는구나!'", blocks: ["How", "fast", "she", "runs!"], ans: "How fast she runs!" },
        { q: "배열: '정말 큰 방이네!'", blocks: ["What", "a", "big", "room!"], ans: "What a big room!" },
        { q: "배열: '너는 정말 친절하구나!'", blocks: ["How", "kind", "you", "are!"], ans: "How kind you are!" }
    ],
    14: [ // 현재진행형 (am/is/are + -ing)
        { q: "배열: '나는 지금 피아노를 치고 있어.'", blocks: ["I", "am", "playing", "the", "piano", "now."], ans: "I am playing the piano now." },
        { q: "배열: '그는 무엇을 하고 있니?'", blocks: ["What", "is", "he", "doing?"], ans: "What is he doing?" },
        { q: "배열: '그들은 공원에서 달리는 중이다.'", blocks: ["They", "are", "running", "in", "the", "park."], ans: "They are running in the park." },
        { q: "배열: '그녀는 영어를 공부하고 있지 않다.'", blocks: ["She", "is", "not", "studying", "English."], ans: "She is not studying English." },
        { q: "배열: '너 지금 내 말을 듣고 있니?'", blocks: ["Are", "you", "listening", "to", "me?"], ans: "Are you listening to me?" },
        { q: "배열: '우리는 저녁을 먹고 있어.'", blocks: ["We", "are", "having", "저녁(dinner)."], ans: "We are having dinner." },
        { q: "배열: '새들이 노래하고 있다.'", blocks: ["Birds", "are", "singing."], ans: "Birds are singing." },
        { q: "배열: '그는 책을 읽는 중이다.'", blocks: ["He", "is", "reading", "a", "book."], ans: "He is reading a book." },
        { q: "배열: '엄마는 요리를 하고 계셔.'", blocks: ["Mom", "is", "cooking."], ans: "Mom is cooking." },
        { q: "배열: '비가 내리고 있다.'", blocks: ["It", "is", "raining."], ans: "It is raining." }
    ],
    15: [ // 제안하기 (Why don't you / Shall we)
        { q: "배열: '우리 댄스 클럽에 가입할까?'", blocks: ["Shall", "we", "join", "the", "dance", "club?"], ans: "Shall we join the dance club?" },
        { q: "배열: '휴식을 취하는 게 어때?'", blocks: ["Why", "don't", "you", "take", "a", "rest?"], ans: "Why don't you take a rest?" },
        { q: "배열: '우리 내일 만날까?'", blocks: ["Shall", "we", "meet", "tomorrow?"], ans: "Shall we meet tomorrow?" },
        { q: "배열: '그에게 물어보는 게 어때?'", blocks: ["Why", "don't", "you", "ask", "him?"], ans: "Why don't you ask him?" },
        { q: "배열: '우리 테니스 칠까?'", blocks: ["Shall", "we", "play", "tennis?"], ans: "Shall we play tennis?" },
        { q: "배열: '초록색 셔츠를 입어보는 게 어때?'", blocks: ["Why", "don't", "you", "try", "this?"], ans: "Why don't you try this?" },
        { q: "배열: '우리 야구하러 가자.'", blocks: ["Shall", "we", "go", "play", "baseball?"], ans: "Shall we go play baseball?" },
        { q: "배열: '의사를 만나보는 게 어떠니?'", blocks: ["Why", "don't", "you", "see", "a", "doctor?"], ans: "Why don't you see a doctor?" },
        { q: "배열: '우리 같이 공부할까?'", blocks: ["Shall", "we", "study", "together?"], ans: "Shall we study together?" },
        { q: "배열: '일찍 자는 게 어때?'", blocks: ["Why", "don't", "you", "go", "to", "bed", "early?"], ans: "Why don't you go to bed early?" }
    ],
    16: [ // 최상급 (the -est / the most)
        { q: "배열: '지호는 반에서 가장 키가 크다.'", blocks: ["Jiho", "is", "the", "tallest", "boy", "in", "his", "class."], ans: "Jiho is the tallest boy in his class." },
        { q: "배열: '이것이 세상에서 가장 비싼 차야.'", blocks: ["This", "is", "the", "most", "expensive", "car."], ans: "This is the most expensive car." },
        { q: "배열: '치타는 가장 빠른 동물이다.'", blocks: ["The", "cheetah", "is", "the", "fastest", "animal."], ans: "The cheetah is the fastest animal." },
        { q: "배열: '수학은 나에게 가장 어렵다.'", blocks: ["Math", "is", "the", "hardest", "for", "me."], ans: "Math is the hardest for me." },
        { q: "배열: '그녀는 우리 학교에서 가장 인기가 많다.'", blocks: ["She", "is", "the", "most", "popular", "girl."], ans: "She is the most popular girl." },
        { q: "배열: '오늘이 일년 중 가장 추운 날이다.'", blocks: ["Today", "is", "the", "coldest", "day."], ans: "Today is the coldest day." },
        { q: "배열: '러시아는 가장 큰 나라이다.'", blocks: ["Russia", "is", "the", "biggest", "country."], ans: "Russia is the biggest country." },
        { q: "배열: '이것이 내 인생 최고의 날이야.'", blocks: ["This", "is", "the", "best", "day", "of", "my", "life."], ans: "This is the best day of my life." },
        { q: "배열: '그것은 가장 쉬운 문제였다.'", blocks: ["It", "was", "the", "easiest", "problem."], ans: "It was the easiest problem." },
        { q: "배열: '그는 세계에서 가장 힘이 세다.'", blocks: ["He", "is", "the", "strongest", "man."], ans: "He is the strongest man." }
    ],
    17: [ // 동명사 목적어 (enjoy, finish, mind, stop + -ing)
        { q: "배열: '나는 책 읽는 것을 즐긴다.'", blocks: ["I", "enjoy", "reading", "books."], ans: "I enjoy reading books." },
        { q: "배열: '그녀는 숙제하는 것을 끝마쳤다.'", blocks: ["She", "finished", "doing", "her", "homework."], ans: "She finished doing her homework." },
        { q: "배열: '말하는 것을 멈춰라.'", blocks: ["Stop", "talking,", "please."], ans: "Stop talking, please." },
        { q: "배열: '너는 낚시하러 가는 것을 좋아하니?'", blocks: ["Do", "you", "enjoy", "going", "fishing?"], ans: "Do you enjoy going fishing?" },
        { q: "배열: '그는 방 청소를 끝냈다.'", blocks: ["He", "finished", "cleaning", "his", "room."], ans: "He finished cleaning his room." },
        { q: "배열: '음악 듣는 것을 멈추지 마라.'", blocks: ["Don't", "stop", "listening", "to", "music."], ans: "Don't stop listening to music." },
        { q: "배열: '우리는 비디오 게임 하는 것을 즐긴다.'", blocks: ["We", "enjoy", "playing", "video", "games."], ans: "We enjoy playing video games." },
        { q: "배열: '그녀는 피아노 연습을 끝냈다.'", blocks: ["She", "finished", "practicing", "the", "piano."], ans: "She finished practicing the piano." },
        { q: "배열: '그들은 웃는 것을 멈추지 못했다.'", blocks: ["They", "couldn't", "stop", "laughing."], ans: "They couldn't stop laughing." },
        { q: "배열: '나는 그림 그리는 것을 즐겨.'", blocks: ["I", "enjoy", "drawing", "pictures."], ans: "I enjoy drawing pictures." }
    ],
    18: [ // to부정사 목적어 (want, hope, wish, decide + to-V)
        { q: "배열: '나는 내일 축구 하는 것을 원해.'", blocks: ["I", "want", "to", "play", "soccer", "tomorrow."], ans: "I want to play soccer tomorrow." },
        { q: "배열: '그녀는 대구에 가기를 결정했다.'", blocks: ["She", "decided", "to", "go", "to", "Daegu."], ans: "She decided to go to Daegu." },
        { q: "배열: '나는 너를 다시 만나기를 희망해.'", blocks: ["I", "hope", "to", "meet", "you", "again."], ans: "I hope to meet you again." },
        { q: "배열: '그는 새로운 컴퓨터 사기를 원한다.'", blocks: ["He", "wants", "to", "buy", "a", "new", "computer."], ans: "He wants to buy a new computer." },
        { q: "배열: '그들은 열심히 공부하기로 결심했다.'", blocks: ["They", "decided", "to", "study", "hard."], ans: "They decided to study hard." },
        { q: "배열: '나는 커서 의사가 되기를 희망해.'", blocks: ["I", "hope", "to", "be", "a", "doctor."], ans: "I hope to be a doctor." },
        { q: "배열: '너는 피자 먹기를 원하니?'", blocks: ["Do", "you", "want", "to", "eat", "pizza?"], ans: "Do you want to eat pizza?" },
        { q: "배열: '우리는 일찍 떠나기로 결정했어.'", blocks: ["We", "decided", "to", "leave", "early."], ans: "We decided to leave early." },
        { q: "배열: '그녀는 파리에 방문하길 원한다.'", blocks: ["She", "wants", "to", "visit", "Paris."], ans: "She wants to visit Paris." },
        { q: "배열: '나는 오늘 쉬기를 희망해.'", blocks: ["I", "hope", "to", "rest", "today."], ans: "I hope to rest today." }
    ],
    19: [ // 경험을 묻는 현재완료 (Have you ever -ed?)
        { q: "배열: '너는 제주도에 가본 적이 있니?'", blocks: ["Have", "you", "ever", "been", "to", "Jeju", "Island?"], ans: "Have you ever been to Jeju Island?" },
        { q: "배열: '나는 김치를 먹어본 적이 없어.'", blocks: ["I", "have", "never", "eaten", "Kimchi."], ans: "I have never eaten Kimchi." },
        { q: "배열: '너는 호랑이를 본 적이 있니?'", blocks: ["Have", "you", "ever", "seen", "a", "tiger?"], ans: "Have you ever seen a tiger?" },
        { q: "배열: '그는 그 영화를 세 번 봤다.'", blocks: ["He", "has", "seen", "the", "movie", "three", "times."], ans: "He has seen the movie three times." },
        { q: "배열: '그녀는 사막에 가본 적이 없다.'", blocks: ["She", "has", "never", "been", "to", "a", "desert."], ans: "She has never been to a desert." },
        { q: "배열: '너는 피자를 만들어 본 적이 있니?'", blocks: ["Have", "you", "ever", "made", "a", "pizza?"], ans: "Have you ever made a pizza?" },
        { q: "배열: '우리는 전에 만난 적이 있다.'", blocks: ["We", "have", "met", "before."], ans: "We have met before." },
        { q: "배열: '너는 비행기를 타본 적이 있니?'", blocks: ["Have", "you", "ever", "flown", "in", "a", "plane?"], ans: "Have you ever flown in a plane?" },
        { q: "배열: '그는 한 번도 지각한 적이 없다.'", blocks: ["He", "has", "never", "been", "late."], ans: "He has never been late." },
        { q: "배열: '그들은 한국에 와본 적이 있다.'", blocks: ["They", "have", "been", "to", "Korea."], ans: "They have been to Korea." }
    ],
    20: [ // 수동태 입문 (be + p.p.)
        { q: "배열: '이 방은 매일 청소된다.'", blocks: ["This", "room", "is", "cleaned", "every", "day."], ans: "This room is cleaned every day." },
        { q: "배열: '영어가 전 세계에서 사용된다.'", blocks: ["English", "is", "spoken", "all", "over", "the", "world."], ans: "English is spoken all over the world." },
        { q: "배열: '그 창문은 깨졌다.'", blocks: ["The", "window", "was", "broken."], ans: "The window was broken." },
        { q: "배열: '이 책은 세종대왕에 의해 쓰였다.'", blocks: ["This", "book", "was", "written", "by", "King", "Sejong."], ans: "This book was written by King Sejong." },
        { q: "배열: '그 차는 한국에서 만들어졌다.'", blocks: ["The", "car", "was", "made", "in", "Korea."], ans: "The car was made in Korea." },
        { q: "배열: '치즈는 우유로 만들어진다.'", blocks: ["Cheese", "is", "made", "from", "milk."], ans: "Cheese is made from milk." },
        { q: "배열: '그 소년은 민수라고 불린다.'", blocks: ["The", "boy", "is", "called", "Minsu."], ans: "The boy is called Minsu." },
        { q: "배열: '그 편지는 어제 배달되었다.'", blocks: ["The", "letter", "was", "delivered", "yesterday."], ans: "The letter was delivered yesterday." },
        { q: "배열: '그 빌딩은 2000년에 지어졌다.'", blocks: ["The", "building", "was", "built", "in", "2000."], ans: "The building was built in 2000." },
        { q: "배열: '그 유리는 지호에 의해 깨졌다.'", blocks: ["The", "glass", "was", "broken", "by", "Jiho."], ans: "The glass was broken by Jiho." }
    ]
};
