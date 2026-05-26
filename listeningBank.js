// ==========================================
// 초등 5~6학년 교과서 연계형 듣기 모의고사 (외부 파일)
// ==========================================
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

quizBank.listening = {
    1: [ // 5학년 1-2과: 출신, 철자, 소유
        { q: "🔊 대화를 듣고, 남자의 출신 국가로 알맞은 것을 고르세요.", speak: "Where are you from? I am from Brazil.", a: ["미국", "브라질", "한국", "영국"], c: 1 },
        { q: "🔊 대화를 듣고, 이름의 철자가 올바른 것을 고르세요.", speak: "How do you spell your name? S O M I N.", a: ["SAMIN", "SOMIN", "SUMIN", "SAMIN"], c: 1 },
        { q: "🔊 대화를 듣고, 이 전화기가 누구의 것인지 고르세요.", speak: "Whose phone is this? It's Inho's.", a: ["민수의 것", "인호의 것", "수민이의 것", "선생님의 것"], c: 1 },
        { q: "🔊 질문을 듣고, 이어질 알맞은 대답을 고르세요.", speak: "Where are you from?", a: ["I'm from Korea.", "Good morning.", "Thank you.", "Yes, I am."], c: 0 },
        { q: "🔊 질문을 듣고, 이어질 알맞은 대답을 고르세요.", speak: "Are you sure?", a: ["No, it isn't.", "Yes, I'm sure.", "I like math.", "It's a phone."], c: 1 }
    ],
    2: [ // 5학년 3-4과: 좋아하는 과목, 일과 시간
        { q: "🔊 대화를 듣고, 여자가 가장 좋아하는 과목을 고르세요.", speak: "What's your favorite subject? My favorite subject is math.", a: ["과학", "음악", "체육", "수학"], c: 3 },
        { q: "🔊 대화를 듣고, 남자가 좋아하는 활동을 고르세요.", speak: "What do you like to do? I like to do math problems.", a: ["노래하기", "수학 문제 풀기", "그림 그리기", "달리기"], c: 1 },
        { q: "🔊 대화를 듣고, 민수가 집에 가는 시간을 고르세요.", speak: "What time do you go home, Minsu? I go home at 2:30.", a: ["2시", "2시 30분", "3시", "3시 30분"], c: 1 },
        { q: "🔊 대화를 듣고, 두 사람이 만날 약속 시간을 고르세요.", speak: "Let's meet today. How about at 4:00? Sure.", a: ["2시", "4시", "5시", "6시"], c: 1 },
        { q: "🔊 질문을 듣고, 빈칸에 이어질 알맞은 대답을 고르세요.", speak: "What's your favorite subject?", a: ["I go home.", "My favorite subject is science.", "It's four o'clock.", "I don't know."], c: 1 }
    ],
    3: [ // 5학년 5-6과: 음식 주문, 장소 및 사물
        { q: "🔊 대화를 듣고, 여자가 주문한 음식을 고르세요.", speak: "What would you like? I'd like a steak, please.", a: ["피자", "스파게티", "스테이크", "샐러드"], c: 2 },
        { q: "🔊 대화를 듣고, 음식의 맛에 대한 평으로 알맞은 것을 고르세요.", speak: "How is the steak? It's salty.", a: ["달다", "매콤하다", "싱겁다", "짜다"], c: 3 },
        { q: "🔊 대화를 듣고, 부엌에 있는 물건이 무엇인지 고르세요.", speak: "What's in the kitchen? There is a stove.", a: ["냉장고", "가스레인지(스토브)", "침대", "소파"], c: 1 },
        { q: "🔊 대화를 듣고, 여자의 마지막 말에 대한 대답으로 알맞은 것을 고르세요.", speak: "May I come in? Sure, come on in.", a: ["들어와도 좋다", "들어오면 안 된다", "바쁘다", "나중에 오라"], c: 0 },
        { q: "🔊 질문을 듣고, 알맞은 답변을 고르세요.", speak: "What would you like?", a: ["I like math.", "I'd like a pizza.", "There is a stove.", "No, thank you."], c: 1 }
    ],
    4: [ // 5학년 7-8과: 과거 소감, 외모 묘사
        { q: "🔊 대화를 듣고, 남자가 여름방학 동안 한 일을 고르세요.", speak: "What did you do during the summer? I went on a trip.", a: ["도서관 가기", "영화 보기", "여행 가기", "운동하기"], c: 2 },
        { q: "🔊 대화를 듣고, 남자의 주말 소감으로 알맞은 것을 고르세요.", speak: "How was your weekend? It was great.", a: ["지루했다", "슬펐다", "피곤했다", "훌륭했다"], c: 3 },
        { q: "🔊 대화를 듣고, 설명하고 있는 인물의 외모를 고르세요.", speak: "What does he look like? He has short curly hair.", a: ["긴 생머리", "짧은 생머리", "긴 곱슬머리", "짧은 곱슬머리"], c: 3 },
        { q: "🔊 대화를 듣고, 수지가 현재 입고 있는 옷의 색상을 고르세요.", speak: "What's Suji wearing? She's wearing a yellow T-shirt.", a: ["빨간색 티셔츠", "노란색 티셔츠", "파란색 바지", "하얀색 치마"], c: 1 },
        { q: "🔊 질문을 듣고, 이어질 대답으로 알맞은 것을 고르세요.", speak: "How was your weekend?", a: ["I went on a trip.", "It was great.", "She's wearing a dress.", "He has short hair."], c: 1 }
    ],
    5: [ // 5학년 9-10과: 여가, 아픔/조언
        { q: "🔊 대화를 듣고, 남자가 여가 시간에 하는 행동을 고르세요.", speak: "What do you do in your free time? I ride a bike.", a: ["독서하기", "게임하기", "자전거 타기", "요리하기"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 남자에게 제안한 활동을 고르세요.", speak: "Let's go hiking this weekend. Okay, sounds good.", a: ["수영 가기", "등산 가기", "낚시 가기", "영화 보기"], c: 1 },
        { q: "🔊 대화를 듣고, 남자의 몸 상태(증상)로 알맞은 것을 고르세요.", speak: "What's wrong? I have a cold.", a: ["두통", "복통", "치통", "감기"], c: 3 },
        { q: "🔊 대화를 듣고, 여자가 한 조언의 내용으로 알맞은 것을 고르세요.", speak: "I have a cold. Get some sleep.", a: ["따뜻한 물 마시기", "병원 가기", "잠을 자기", "약 먹기"], c: 2 },
        { q: "🔊 질문을 듣고, 이어질 답변으로 알맞은 것을 고르세요.", speak: "What do you do in your free time?", a: ["Let's go hiking.", "I have a cold.", "I ride a bike.", "Get some sleep."], c: 2 }
    ],
    6: [ // 6학년 1-3과: 학년, 장래희망, 취미
        { q: "🔊 대화를 듣고, 여자가 몇 학년인지 고르세요.", speak: "What grade are you in? I'm in the sixth grade.", a: ["4학년", "5학년", "6학년", "중학교 1학년"], c: 2 },
        { q: "🔊 대화를 듣고, 남자의 장래희망(직업)을 고르세요.", speak: "What do you want to be? I want to be a pilot.", a: ["의사", "선생님", "경찰관", "비행기 조종사"], c: 3 },
        { q: "🔊 대화를 듣고, 두 사람이 같이 하기로 한 활동을 고르세요.", speak: "Let's go swimming. Sure, I love swimming.", a: ["수영하러 가기", "쇼핑하러 가기", "자전거 타기", "축구하기"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "What do you want to be?", a: ["I'm in the sixth grade.", "I want to be a doctor.", "Let's go swimming.", "I have a headache."], c: 1 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "Let's go swimming.", a: ["Sounds good.", "I'm twelve.", "I want to be a pilot.", "No, it isn't."], c: 0 }
    ],
    7: [ // 6학년 4-5과: 생일, 미래 계획
        { q: "🔊 대화를 듣고, 남자의 생일이 있는 달을 고르세요.", speak: "When is your birthday? It's May 5th.", a: ["3월", "4월", "5월", "6월"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 이번 주말에 할 일을 고르세요.", speak: "What are you going to do? I'm going to plant trees.", a: ["집안일 돕기", "나무 심기", "친구 만나기", "공부하기"], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 미래에 할 계획으로 알맞은 것을 고르세요.", speak: "What will you do this winter? I'm going to visit my cousins.", a: ["사촌 방문하기", "스키장 가기", "여행 가기", "방콕하기"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 답변을 고르세요.", speak: "When is your birthday?", a: ["I'm going to plant trees.", "It's May fifth.", "I want to be a pilot.", "I have a cold."], c: 1 }
    ],
    8: [ // 6학년 6-7과: 통증, 조언(should), 음식 주문
        { q: "🔊 대화를 듣고, 남자가 아픈 곳을 고르세요.", speak: "What's wrong? I have a headache.", a: ["배탈", "치통", "두통", "감기"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 권유한 해결책으로 알맞은 것을 고르세요.", speak: "I have a headache. You should see a doctor.", a: ["약 먹기", "쉬기", "병원 가기(의사 진찰)", "따뜻한 물 마시기"], c: 2 },
        { q: "🔊 대화를 듣고, 식당 점원이 손님에게 한 말의 의도를 고르세요.", speak: "What would you like to have?", a: ["메뉴 추천", "주문 받기", "계산 돕기", "자리 안내"], c: 1 },
        { q: "🔊 질문을 듣고, 빈칸에 알맞은 답변을 고르세요.", speak: "What would you like to have?", a: ["I have a headache.", "I'd like to have pizza, please.", "You should see a doctor.", "I'm in the sixth grade."], c: 1 },
        { q: "🔊 의사의 조언을 듣고, 남자가 행동해야 할 내용으로 알맞은 것을 고르세요.", speak: "You should take some medicine and get some rest.", a: ["운동하기", "약 먹고 쉬기", "과일 먹기", "밖에 나가기"], c: 1 }
    ],
    9: [ // 6학년 8-9과: 외모 묘사, 비교급
        { q: "🔊 대화를 듣고, 톰의 외모 설명으로 알맞은 것을 고르세요.", speak: "What does Tom look like? He has short straight hair.", a: ["짧은 생머리", "긴 생머리", "짧은 곱슬머리", "긴 곱슬머리"], c: 0 },
        { q: "🔊 대화를 듣고, 두 사람의 대화 주제로 알맞은 것을 고르세요.", speak: "I'm stronger than you. No, I'm stronger!", a: ["기분 비교", "외모 묘사", "힘(신체 능력) 비교", "학년 비교"], c: 2 },
        { q: "🔊 대화를 듣고, 키가 더 큰 사람은 누구인지 고르세요.", speak: "Is she taller than you? Yes, she is taller than me.", a: ["나(말하는 사람)", "그녀(상대방)", "둘이 같다", "알 수 없다"], c: 1 },
        { q: "🔊 질문을 듣고, 올바른 대답을 고르세요.", speak: "Who is faster, Minho or Junho?", a: ["Minho is faster than Junho.", "He has straight hair.", "I want to be a pilot.", "Yes, I know."], c: 0 },
        { q: "🔊 대화를 듣고, 남자의 마지막 대사 속 핵심 형용사를 고르세요.", speak: "You are faster than him.", a: ["stronger", "taller", "faster", "bigger"], c: 2 }
    ],
    10: [ // 6학년 10-13과: 의견, 감정/이유, 길 찾기
        { q: "🔊 대화를 듣고, 남자가 박물관에 가기 위해 묻고 있는 내용을 고르세요.", speak: "How can I get to the museum?", a: ["입장료", "개관 시간", "가는 방법(길 찾기)", "전시 내용"], c: 2 },
        { q: "🔊 대화를 듣고, 여자의 기분과 그 이유가 바르게 짝지어진 것을 고르세요.", speak: "Why are you happy? I am happy because I won the game.", a: ["슬픔 - 시험 낙제", "행복 - 게임 이김", "화남 - 친구와 싸움", "기쁨 - 선물 받음"], c: 1 },
        { q: "🔊 대화를 듣고, 남자의 의견을 묻는 질문 표현을 고르세요.", speak: "What do you think about this?", a: ["What do you think?", "Why are you happy?", "How can I get there?", "Where is it?"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "Why are you sad?", a: ["Because I lost my dog.", "Go straight one block.", "I think so too.", "It next to the bank."], c: 0 },
        { q: "🔊 안내 음성을 듣고, 최종 목적지의 위치를 고르세요.", speak: "Go straight and turn left. It's next to the bank.", a: ["은행 건너편", "은행 옆", "학교 뒤", "병원 앞"], c: 1 }
    ]
};