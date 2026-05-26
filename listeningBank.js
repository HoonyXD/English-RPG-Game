// ==========================================================================
// 초등 5~6학년 및 중등 입문 교과 연계형 듣기 모의고사 (1~20단계 각 10문제 완전판)
// ==========================================================================
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

quizBank.listening = {
    1: [ // 5학년 1-2과: 출신, 철자, 소유
        { q: "🔊 대화를 듣고, 남자의 출신 국가로 알맞은 것을 고르세요.", speak: "Where are you from? I am from Brazil.", a: ["미국", "브라질", "한국", "영국"], c: 1 },
        { q: "🔊 대화를 듣고, 이름의 철자가 올바른 것을 고르세요.", speak: "How do you spell your name? S O M I N.", a: ["SAMIN", "SOMIN", "SUMIN", "SIMIN"], c: 1 },
        { q: "🔊 대화를 듣고, 이 전화기가 누구의 것인지 고르세요.", speak: "Whose phone is this? It's Inho's.", a: ["민수의 것", "인호의 것", "수민이의 것", "선생님의 것"], c: 1 },
        { q: "🔊 질문을 듣고, 이어질 알맞은 대답을 고르세요.", speak: "Where are you from?", a: ["I'm from Korea.", "Good morning.", "Thank you.", "Yes, I am."], c: 0 },
        { q: "🔊 질문을 듣고, 이어질 알맞은 대답을 고르세요.", speak: "Are you sure?", a: ["No, it isn't.", "Yes, I'm sure.", "I like math.", "It's a phone."], c: 1 },
        { q: "🔊 대화를 듣고, 이 가방이 누구의 것인지 고르세요.", speak: "Whose bag is this? It's mine.", a: ["누구의 것", "내 것", "선생님 것", "친구 것"], c: 1 },
        { q: "🔊 대화를 듣고, 여자의 출신 국가를 고르세요.", speak: "I'm from the U.K.", a: ["미국", "호주", "영국", "캐나다"], c: 2 },
        { q: "🔊 대화에서 질문하는 의도가 무엇인지 고르세요.", speak: "How do you spell your name?", a: ["출신 묻기", "이름 뜻 묻기", "철자 묻기", "나이 묻기"], c: 2 },
        { q: "🔊 대화를 듣고, 누구의 가방인지 고르세요.", speak: "This is my mom's bag.", a: ["내 것", "아빠 것", "엄마 것", "동생 것"], c: 2 },
        { q: "🔊 대화를 듣고, 그녀의 출신 국가를 고르세요.", speak: "She is from Canada.", a: ["캐나다", "미국", "영국", "한국"], c: 0 }
    ],
    2: [ // 5학년 3-4과: 좋아하는 과목, 일과 시간
        { q: "🔊 대화를 듣고, 여자가 가장 좋아하는 과목을 고르세요.", speak: "What's your favorite subject? My favorite subject is math.", a: ["과학", "음악", "체육", "수학"], c: 3 },
        { q: "🔊 대화를 듣고, 남자가 좋아하는 활동을 고르세요.", speak: "What do you like to do? I like to do math problems.", a: ["노래하기", "수학 문제 풀기", "그림 그리기", "달리기"], c: 1 },
        { q: "🔊 대화를 듣고, 민수가 집에 가는 시간을 고르세요.", speak: "What time do you go home, Minsu? I go home at 2:30.", a: ["2시", "2시 30분", "3시", "3시 30분"], c: 1 },
        { q: "🔊 대화를 듣고, 두 사람이 만날 약속 시간을 고르세요.", speak: "Let's meet today. How about at 4:00? Sure.", a: ["2시", "4시", "5시", "6시"], c: 1 },
        { q: "🔊 질문을 듣고, 빈칸에 이어질 알맞은 대답을 고르세요.", speak: "What's your favorite subject?", a: ["I go home.", "My favorite subject is science.", "It's four o'clock.", "I don't know."], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 좋아하는 과목을 고르세요.", speak: "I like science.", a: ["수학", "미술", "과학", "체육"], c: 2 },
        { q: "🔊 대화를 듣고, 남자가 아침 식사를 하는 시간을 고르세요.", speak: "I have breakfast at 8:00.", a: ["7시", "7시 30분", "8시", "8시 30분"], c: 2 },
        { q: "🔊 안내 방송을 듣고, 지금이 무엇을 할 시간인지 고르세요.", speak: "It's time for lunch.", a: ["공부할 시간", "점심 식사 시간", "청소할 시간", "집에 갈 시간"], c: 1 },
        { q: "🔊 대화를 듣고, 여자가 좋아하지 않는 과목을 고르세요.", speak: "I don't like music.", a: ["미술", "음악", "체육", "수학"], c: 1 },
        { q: "🔊 대화를 듣고, 여자아이의 영어에 대한 소감을 고르세요.", speak: "English is fun.", a: ["재미있다", "어렵다", "지루하다", "쉽다"], c: 0 }
    ],
    3: [ // 5학년 5-6과: 음식 주문, 장소 및 사물
        { q: "🔊 대화를 듣고, 여자가 주문한 음식을 고르세요.", speak: "What would you like? I'd like a steak, please.", a: ["피자", "스파게티", "스테이크", "샐러드"], c: 2 },
        { q: "🔊 대화를 듣고, 음식의 맛에 대한 평으로 알맞은 것을 고르세요.", speak: "How is the steak? It's salty.", a: ["달다", "매콤하다", "싱겁다", "짜다"], c: 3 },
        { q: "🔊 대화를 듣고, 부엌에 있는 물건이 무엇인지 고르세요.", speak: "What's in the kitchen? There is a stove.", a: ["냉장고", "가스레인지(스토브)", "침대", "소파"], c: 1 },
        { q: "🔊 대화를 듣고, 여자의 마지막 말에 대한 대답으로 알맞은 것을 고르세요.", speak: "May I come in? Sure, come on in.", a: ["들어와도 좋다", "들어오면 안 된다", "바쁘다", "나중에 오라"], c: 0 },
        { q: "🔊 질문을 듣고, 알맞은 답변을 고르세요.", speak: "What would you like?", a: ["I like math.", "I'd like a pizza.", "There is a stove.", "No, thank you."], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 주문하고자 하는 것을 고르세요.", speak: "I'd like a pizza, please.", a: ["피자", "치킨", "버거", "샐러드"], c: 0 },
        { q: "🔊 대화를 듣고, 음식의 맛을 나타내는 단어를 고르세요.", speak: "This food is too salty.", a: ["매운", "달콤한", "짠", "신"], c: 2 },
        { q: "🔊 대화를 듣고, 방 안에 있는 물건을 고르세요.", speak: "There is a bed in the room.", a: ["의자", "책상", "침대", "옷장"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 구하는 허락의 내용을 고르세요.", speak: "May I use your pencil? Sure.", a: ["연필 빌리기", "방에 들어가기", "컴퓨터 쓰기", "집에 가기"], c: 0 },
        { q: "🔊 대화를 듣고, 거실에 있는 사물이 무엇인지 고르세요.", speak: "What's in the living room? There is a sofa.", a: ["싱크대", "소파", "침대", "식탁"], c: 1 }
    ],
    4: [ // 5학년 7-8과: 과거 소감, 외모 묘사
        { q: "🔊 대화를 듣고, 남자가 여름방학 동안 한 일을 고르세요.", speak: "What did you do during the summer? I went on a trip.", a: ["도서관 가기", "영화 보기", "여행 가기", "운동하기"], c: 2 },
        { q: "🔊 대화를 듣고, 남자의 주말 소감으로 알맞은 것을 고르세요.", speak: "How was your weekend? It was great.", a: ["지루했다", "슬퐜다", "피곤했다", "훌륭했다"], c: 3 },
        { q: "🔊 대화를 듣고, 설명하고 있는 인물의 외모를 고르세요.", speak: "What does he look like? He has short curly hair.", a: ["긴 생머리", "짧은 생머리", "긴 곱슬머리", "짧은 곱슬머리"], c: 3 },
        { q: "🔊 대화를 듣고, 수지가 현재 입고 있는 옷의 색상을 고르세요.", speak: "What's Suji wearing? She's wearing a yellow T-shirt.", a: ["빨간색 티셔츠", "노란색 티셔츠", "파란색 바지", "하얀색 치마"], c: 1 },
        { q: "🔊 질문을 듣고, 이어질 대답으로 알맞은 것을 고르세요.", speak: "How was your weekend?", a: ["I went on a trip.", "It was great.", "She's wearing a dress.", "He has short hair."], c: 1 },
        { q: "🔊 대화를 듣고, 질문의 시제가 언제인지 고르세요.", speak: "What did you do yesterday?", a: ["현재", "과거", "미래", "진행"], c: 1 },
        { q: "🔊 대화를 듣고, 여자의 헤어스타일을 고르세요.", speak: "She has long straight hair.", a: ["짧은 파마머리", "긴 파마머리", "짧은 생머리", "긴 생머리"], c: 3 },
        { q: "🔊 대화를 듣고, 남자가 입고 있는 옷을 고르세요.", speak: "He is wearing blue pants.", a: ["노란 반바지", "파란 긴바지", "검은 셔츠", "청자켓"], c: 1 },
        { q: "🔊 대화를 듣고, 어제 남자가 한 행동을 고르세요.", speak: "I read a book yesterday.", a: ["공부하기", "축구하기", "책 읽기", "노래하기"], c: 2 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "What does she look like?", a: ["She is kind.", "She has big eyes.", "She likes pizza.", "She is at home."], c: 1 }
    ],
    5: [ // 5학년 9-10과: 여가, 아픔/조언
        { q: "🔊 대화를 듣고, 남자가 여가 시간에 하는 행동을 고르세요.", speak: "What do you do in your free time? I ride a bike.", a: ["독서하기", "게임하기", "자전거 타기", "요리하기"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 남자에게 제안한 활동을 고르세요.", speak: "Let's go hiking this weekend. Okay, sounds good.", a: ["수영 가기", "등산 가기", "낚시 가기", "영화 보기"], c: 1 },
        { q: "🔊 대화를 듣고, 남자의 몸 상태(증상)로 알맞은 것을 고르세요.", speak: "What's wrong? I have a cold.", a: ["두통", "복통", "치통", "감기"], c: 3 },
        { q: "🔊 대화를 듣고, 여자가 한 조언의 내용으로 알맞은 것을 고르세요.", speak: "I have a cold. Get some sleep.", a: ["따뜻한 물 마시기", "병원 가기", "잠을 자기", "약 먹기"], c: 2 },
        { q: "🔊 질문을 듣고, 이어질 답변으로 알맞은 것을 고르세요.", speak: "What do you do in your free time?", a: ["Let's go hiking.", "I have a cold.", "I ride a bike.", "Get some sleep."], c: 2 },
        { q: "🔊 대화를 듣고, 두 사람이 주말에 함께 할 여가 활동을 고르세요.", speak: "Let's go swimming this weekend. Sounds great.", a: ["등산", "축구", "수영", "자전거"], c: 2 },
        { q: "🔊 대화를 듣고, 여자의 아픈 부위를 고르세요.", speak: "I have a headache.", a: ["배", "치아", "머리(두통)", "다리"], c: 2 },
        { q: "🔊 대화를 듣고, 남자가 건넨 조언의 내용을 고르세요.", speak: "Drink some warm water.", a: ["약을 먹어라", "잠을 자라", "따뜻한 물을 마셔라", "병원에 가라"], c: 2 },
        { q: "🔊 질문을 듣고, 아픈 사람에게 건넬 알맞은 말을 고르세요.", speak: "What's wrong?", a: ["I have a stomachache.", "You're welcome.", "It's fine.", "Thank you."], c: 0 },
        { q: "🔊 대화를 듣고, 의사가 환자에게 건넨 말을 고르세요.", speak: "You should see a doctor.", a: ["집에 가라", "운동해라", "의사의 진찰을 받아야 한다", "밥을 먹어라"], c: 2 }
    ],
    6: [ // 6학년 1-3과: 학년, 장래희망, 취미
        { q: "🔊 대화를 듣고, 여자가 몇 학년인지 고르세요.", speak: "What grade are you in? I'm in the sixth grade.", a: ["4학년", "5학년", "6학년", "중학교 1학년"], c: 2 },
        { q: "🔊 대화를 듣고, 남자의 장래희망(직업)을 고르세요.", speak: "What do you want to be? I want to be a pilot.", a: ["의사", "선생님", "경찰관", "비행기 조종사"], c: 3 },
        { q: "🔊 대화를 듣고, 두 사람이 같이 하기로 한 활동을 고르세요.", speak: "Let's go swimming. Sure, I love swimming.", a: ["수영하러 가기", "쇼핑하러 가기", "자전거 타기", "축구하기"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "What do you want to be?", a: ["I'm in the sixth grade.", "I want to be a doctor.", "Let's go swimming.", "I have a headache."], c: 1 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "Let's go swimming.", a: ["Sounds good.", "I'm twelve.", "I want to be a pilot.", "No, it isn't."], c: 0 },
        { q: "🔊 질문을 듣고, 남자의 학년을 고르세요.", speak: "What grade are you in? I'm in the fifth grade.", a: ["4학년", "5학년", "6학년", "3학년"], c: 1 },
        { q: "🔊 대화를 듣고, 여자아이가 자라서 되고 싶은 직업을 고르세요.", speak: "What do you want to be? I want to be a teacher.", a: ["의사", "조종사", "가수", "선생님"], c: 3 },
        { q: "🔊 대화를 듣고, 남자가 하고 싶어 하는 여가 활동을 고르세요.", speak: "I want to go camping.", a: ["캠핑", "낚시", "축구", "수영"], c: 0 },
        { q: "🔊 대화를 듣고, 여자가 남자에게 자전거 제안을 하는 표현을 고르세요.", speak: "Let's go biking.", a: ["수영하러 가자", "자전거 타러 가자", "달리자", "집에 가자"], c: 1 },
        { q: "🔊 대화를 듣고, 두 사람이 함께 즐기고자 하는 구기 종목을 고르세요.", speak: "Let's go play baseball. Sure.", a: ["축구", "농구", "야구", "배구"], c: 2 }
    ],
    7: [ // 6학년 4-5과: 생일, 미래 계획
        { q: "🔊 대화를 듣고, 남자의 생일이 있는 달을 고르세요.", speak: "When is your birthday? It's May 5th.", a: ["3월", "4월", "5월", "6월"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 이번 주말에 할 일을 고르세요.", speak: "What are you going to do? I'm going to plant trees.", a: ["집안일 돕기", "나무 심기", "친구 만나기", "공부하기"], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 미래에 할 계획으로 알맞은 것을 고르세요.", speak: "What will you do this winter? I'm going to visit my cousins.", a: ["사촌 방문하기", "스키장 가기", "여행 가기", "방콕하기"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 답변을 고르세요.", speak: "When is your birthday?", a: ["I'm going to plant trees.", "It's May fifth.", "I want to be a pilot.", "I have a cold."], c: 1 },
        { q: "🔊 대화를 듣고, 여자의 구체적인 생일 날짜를 고르세요.", speak: "My birthday is July fourth.", a: ["7월 1일", "7월 4일", "5월 4일", "6월 4일"], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 이번 주말에 하려고 계획한 일을 고르세요.", speak: "He is going to read books this weekend.", a: ["영화 보기", "공부하기", "책 읽기", "운동하기"], c: 2 },
        { q: "🔊 대화를 듣고, 두 사람이 내일 함께 할 여가 일정을 고르세요.", speak: "We are going to watch a movie tomorrow.", a: ["공원 산책", "박물관 견학", "영화 관람", "쇼핑"], c: 2 },
        { q: "🔊 대화를 듣고, 그녀가 이번 겨울에 방문할 국가를 고르세요.", speak: "She is going to visit Korea.", a: ["미국", "중국", "한국", "일본"], c: 2 },
        { q: "🔊 질문을 듣고, 생일이 몇 월인지 알려주는 알맞은 표현을 고르세요.", speak: "Is your birthday in October? Yes, it is.", a: ["5월", "7월", "10월", "12월"], c: 2 },
        { q: "🔊 질문을 듣고, 미래 계획을 물어보는 알맞은 문장을 고르세요.", speak: "What are you going to do?", a: ["무엇을 하고 있니", "무엇을 할 예정이니", "과거에 무엇을 했니", "무엇을 좋아하니"], c: 1 }
    ],
    8: [ // 6학년 6-7과: 통증, 조언(should), 음식 주문
        { q: "🔊 대화를 듣고, 남자가 아픈 곳을 고르세요.", speak: "What's wrong? I have a headache.", a: ["배탈", "치통", "두통", "감기"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 권유한 해결책으로 알맞은 것을 고르세요.", speak: "I have a headache. You should see a doctor.", a: ["약 먹기", "쉬기", "병원 가기(의사 진찰)", "따뜻한 물 마시기"], c: 2 },
        { q: "🔊 대화를 듣고, 식당 점원이 손님에게 한 말의 의도를 고르세요.", speak: "What would you like to have?", a: ["메뉴 추천", "주문 받기", "계산 돕기", "자리 안내"], c: 1 },
        { q: "🔊 질문을 듣고, 빈칸에 알맞은 답변을 고르세요.", speak: "What would you like to have?", a: ["I have a headache.", "I'd like to have pizza, please.", "You should see a doctor.", "I'm in the sixth grade."], c: 1 },
        { q: "🔊 의사의 조언을 듣고, 남자가 행동해야 할 내용으로 알맞은 것을 고르세요.", speak: "You should take some medicine and get some rest.", a: ["운동하기", "약 먹고 쉬기", "과일 먹기", "밖에 나가기"], c: 1 },
        { q: "🔊 대화를 듣고, 여자아이가 느끼는 구체적인 통증 부위를 고르세요.", speak: "I have a stomachache.", a: ["머리", "이빨", "배(복통)", "목"], c: 2 },
        { q: "🔊 대화를 듣고, 아픈 친구에게 오늘 가 준 조언의 공간을 고르세요.", speak: "You should rest at home today.", a: ["학교", "병원", "집", "학원"], c: 2 },
        { q: "🔊 대화를 듣고, 남자가 정중하게 주문하고자 하는 음식을 고르세요.", speak: "I would like to eat pizza.", a: ["스파게티", "피자", "치킨", "버거"], c: 1 },
        { q: "🔊 대화를 듣고, 손님에게 음료를 권하는 점원의 대사를 고르세요.", speak: "Would you like some orange juice?", a: ["물", "콜라", "오렌지 주스", "사과 주스"], c: 2 },
        { q: "🔊 대화를 듣고, 몸이 안 좋은 사람에게 전달하는 수면 조언을 고르세요.", speak: "You should go to bed early.", a: ["일찍 일어나라", "운동해라", "일찍 잠자리에 들어라", "밥을 많이 먹어라"], c: 2 }
    ],
    9: [ // 6학년 8-9과: 외모 묘사, 비교급
        { q: "🔊 대화를 듣고, 톰의 외모 설명으로 알맞은 것을 고르세요.", speak: "What does Tom look like? He has short straight hair.", a: ["짧은 생머리", "긴 생머리", "짧은 곱슬머리", "긴 곱슬머리"], c: 0 },
        { q: "🔊 대화를 듣고, 두 사람의 대화 주제로 알맞은 것을 고르세요.", speak: "I'm stronger than you. No, I'm stronger!", a: ["기분 비교", "외모 묘사", "힘(신체 능력) 비교", "학년 비교"], c: 2 },
        { q: "🔊 대화를 듣고, 키가 더 큰 사람은 누구인지 고르세요.", speak: "Is she taller than you? Yes, she is taller than me.", a: ["나(말하는 사람)", "그녀(상대방)", "둘이 같다", "알 수 없다"], c: 1 },
        { q: "🔊 질문을 듣고, 올바른 대답을 고르세요.", speak: "Who is faster, Minho or Junho?", a: ["Minho is faster than Junho.", "He has straight hair.", "I want to be a pilot.", "Yes, I know."], c: 0 },
        { q: "🔊 대화를 듣고, 남자의 마지막 대사 속 핵심 형용사를 고르세요.", speak: "You are faster than him.", a: ["stronger", "taller", "faster", "bigger"], c: 2 },
        { q: "🔊 대화를 듣고, 어떤 가방이 더 큰지 설명하는 내용을 고르세요.", speak: "This bag is bigger than that one.", a: ["이 가방이 더 크다", "저 가방이 더 크다", "크기가 같다", "색상이 다르다"], c: 0 },
        { q: "🔊 대화를 듣고, 민호와 지호 중 더 빠른 사람이 누구인지 고르세요.", speak: "Jiho is faster than Minho.", a: ["민호", "지호", "둘이 같다", "알 수 없다"], c: 1 },
        { q: "🔊 대화를 듣고, 여동생과 언니(그녀) 중 더 예쁜 사람을 고르세요.", speak: "She is prettier than her sister.", a: ["여동생", "언니(그녀)", "둘이 똑같다", "알 수 없다"], c: 1 },
        { q: "🔊 대화를 듣고, 두 과목의 난이도 비교 내용을 고르세요.", speak: "English is easier than math.", a: ["영어가 더 어렵다", "수학이 더 쉽다", "영어가 더 쉽다", "난이도가 같다"], c: 2 },
        { q: "🔊 대화를 듣고, 교통수단 중 더 빠른 종류를 고르세요.", speak: "A plane is faster than a train.", a: ["기차", "비행기", "자동차", "자전거"], c: 1 }
    ],
    10: [ // 6학년 10-13과: 의견, 감정/이유, 길 찾기
        { q: "🔊 대화를 듣고, 남자가 박물관에 가기 위해 묻고 있는 내용을 고르세요.", speak: "How can I get to the museum?", a: ["입장료", "개관 시간", "가는 방법(길 찾기)", "전시 내용"], c: 2 },
        { q: "🔊 대화를 듣고, 여자의 기분과 그 이유가 바르게 짝지어진 것을 고르세요.", speak: "Why are you happy? I am happy because I won the game.", a: ["슬픔 - 시험 낙제", "행복 - 게임 이김", "화남 - 친구와 싸움", "기쁨 - 선물 받음"], c: 1 },
        { q: "🔊 대화를 듣고, 남자의 의견을 묻는 질문 표현을 고르세요.", speak: "What do you think about this?", a: ["What do you think?", "Why are you happy?", "How can I get there?", "Where is it?"], c: 0 },
        { q: "🔊 질문을 듣고, 자연스러운 대답을 고르세요.", speak: "Why are you sad?", a: ["Because I lost my dog.", "Go straight one block.", "I think so too.", "It next to the bank."], c: 0 },
        { q: "🔊 안내 음성을 듣고, 최종 목적지의 위치를 고르세요.", speak: "Go straight and turn left. It's next to the bank.", a: ["은행 건너편", "은행 옆", "학교 뒤", "병원 앞"], c: 1 },
        { q: "🔊 안내 길 찾기 대화를 듣고, 올바른 지시 방향을 고르세요.", speak: "Go straight and turn left.", a: ["직진 후 우회전", "직진 후 좌회전", "우회전 후 직진", "유턴"], c: 1 },
        { q: "🔊 대화를 듣고, 목적지가 어디 옆에 위치하는지 고르세요.", speak: "It's next to the bank.", a: ["학교 옆", "우체국 옆", "은행 옆", "병원 건너편"], c: 2 },
        { q: "🔊 상대방의 의견에 반대하는 남자의 한마디를 고르세요.", speak: "I don't think so.", a: ["동의한다", "그렇게 생각하지 않는다", "모르겠다", "좋은 생각이다"], c: 1 },
        { q: "🔊 대화를 듣고, 남자가 슬픈 핵심 이유를 고르세요.", speak: "I am sad because I lost my homework.", a: ["시험을 망쳐서", "돈을 잃어버려서", "숙제를 잃어버려서", "친구와 싸워서"], c: 2 },
        { q: "🔊 대화를 듣고, 여자가 기쁜 핵심 이유를 고르세요.", speak: "I am happy because I met my friend.", a: ["게임을 이겨서", "선물을 받아서", "친구를 만나서", "방학이라서"], c: 2 }
    ],
    11: [ // 11단계: 의무 및 금지 (must, must not)
        { q: "🔊 대화를 듣고, 규칙의 내용으로 알맞은 것을 고르세요.", speak: "You must follow the rules.", a: ["노래하기", "규칙 따르기", "뛰기", "잠자기"], c: 1 },
        { q: "🔊 대화를 듣고, 금지된 행동이 무엇인지 고르세요.", speak: "You must not run here.", a: ["걷기", "달리기", "만지기", "먹기"], c: 1 },
        { q: "🔊 대화를 듣고, 행동의 시점을 고르세요.", speak: "We must leave now.", a: ["내일", "나중에", "지금", "어제"], c: 2 },
        { q: "🔊 안내 음성을 듣고, 금지령의 행동을 고르세요.", speak: "You must not touch it.", a: ["보기", "듣기", "만지기", "사기"], c: 2 },
        { q: "🔊 대화를 듣고, 그가 해야 할 다짐을 고르세요.", speak: "He must study hard.", a: ["운동하기", "열심히 공부하기", "게임하기", "청소하기"], c: 1 },
        { q: "🔊 대화를 듣고, 주의해야 할 지침을 고르세요.", speak: "You must not be late.", a: ["일찍 오기", "지각하기", "조용히 하기", "떠들기"], c: 1 },
        { q: "🔊 대화를 듣고, 내가 반드시 완수해야 할 과제를 고르세요.", speak: "I must do my homework.", a: ["방 청소", "숙제", "요리", "심부름"], c: 1 },
        { q: "🔊 대화를 듣고, 그녀가 의무적으로 만나야 할 인물을 고르세요.", speak: "She must see a doctor.", a: ["선생님", "경찰관", "의사", "친구"], c: 2 },
        { q: "🔊 안내 경고를 듣고, 금지된 내용을 고르세요.", speak: "You must not smoke here.", a: ["담배 피우기", "음식 먹기", "사진 찍기", "주차하기"], c: 0 },
        { q: "🔊 탑승 시 필수 안전 수칙 내용을 고르세요.", speak: "You must wear a seatbelt.", a: ["모자 쓰기", "안경 쓰기", "안전벨트 매기", "마스크 쓰기"], c: 2 }
    ],
    12: [ // 12단계: 빈도부사 (always, usually, often, sometimes, never)
        { q: "🔊 대화를 듣고, 얼마나 자주 일어나는지 빈도를 고르세요.", speak: "I always get up at 7:00.", a: ["가끔", "보통", "자주", "항상"], c: 3 },
        { q: "🔊 대화를 듣고, 주된 등교 수단이 무엇인지 고르세요.", speak: "She usually bikes to school.", a: ["걸어서", "버스로", "자전거로", "전철로"], c: 2 },
        { q: "🔊 대화를 듣고, 자주 즐기는 운동 종목을 고르세요.", speak: "They often play soccer.", a: ["야구", "축구", "농구", "배구"], c: 1 },
        { q: "🔊 대화를 듣고, 가끔 시청하는 미디어를 고르세요.", speak: "We sometimes watch movies.", a: ["뉴스", "영화", "드라마", "유튜브"], c: 1 },
        { q: "🔊 대화를 듣고, 그가 절대 하지 않는 행동을 고르세요.", speak: "He never tells lies.", a: ["숙제 누락", "거짓말", "학교 지각", "싸움"], c: 1 },
        { q: "🔊 대화를 듣고, 주로 청소하는 대상 구역을 고르세요.", speak: "Do you usually clean your room?", a: ["거실", "교실", "내 방", "부엌"], c: 2 },
        { q: "🔊 대화를 듣고, 표현된 인물의 평소 인성을 고르세요.", speak: "Suji is always kind.", a: ["화가 남", "친절함", "슬픔", "바쁨"], c: 1 },
        { q: "🔊 대화를 듣고, 가끔 건너뛰는 식사 종류를 고르세요.", speak: "I sometimes skip breakfast.", a: ["아침", "점심", "저녁", "야식"], c: 0 },
        { q: "🔊 대화를 듣고, 독서를 자주 하는 장소를 고르세요.", speak: "He often reads books in the library.", a: ["도서관", "교실", "집", "공원"], c: 0 },
        { q: "🔊 대화를 듣고, 영어 학습에 대한 전반적 빈도 상태를 고르세요.", speak: "It is always fun.", a: ["어렵다", "지루하다", "항상 재미있다", "쉽다"], c: 2 }
    ],
    13: [ // 13단계: 감탄문 (What a / How)
        { q: "🔊 감탄의 내용을 듣고, 어떤 성격의 날인지 고르세요.", speak: "What a beautiful day it is!", a: ["비 오는 날", "아름다운 날", "추운 날", "더운 날"], c: 1 },
        { q: "🔊 소년에 대한 칭찬 감탄 내용을 고르세요.", speak: "How smart this boy is!", a: ["키가 큼", "똑똑함", "착함", "귀여움"], c: 1 },
        { q: "🔊 고양이를 보고 감탄하는 내용을 고르세요.", speak: "What a cute cat!", a: ["귀여운 고양이", "큰 강아지", "빠른 새", "작은 쥐"], c: 0 },
        { q: "🔊 기온에 대해 감탄하는 말을 듣고 상태를 고르세요.", speak: "How hot it is!", a: ["따뜻함", "추움", "시원함", "더움"], c: 3 },
        { q: "🔊 사물에 대한 감탄 표현을 듣고 종류를 고르세요.", speak: "What a nice car!", a: ["큰 집", "멋진 차", "예쁜 옷", "좋은 책"], c: 1 },
        { q: "🔊 음악 볼륨에 대한 감탄을 고르세요.", speak: "How loud the music is!", a: ["조용함", "시끄러움(큼)", "부드러움", "슬픔"], c: 1 },
        { q: "🔊 독서 소감 감탄을 고르세요.", speak: "What a fun book!", a: ["재미있는 책", "두꺼운 책", "어려운 책", "새 책"], c: 0 },
        { q: "🔊 주행 속도나 달리기 능력에 대한 감탄을 고르세요.", speak: "How fast she runs!", a: ["느리게", "빠르게", "높이", "멀리"], c: 1 },
        { q: "🔊 공간 넓이에 대한 감탄 내용을 고르세요.", speak: "What a big room!", a: ["작은 방", "큰 방", "더러운 방", "깨끗한 방"], c: 1 },
        { q: "🔊 타인의 친절함에 감탄하는 한마디를 고르세요.", speak: "How kind you are!", a: ["똑똑함", "정직함", "친절함", "용감함"], c: 2 }
    ],
    14: [ // 14단계: 현재진행형 (am/is/are + -ing)
        { q: "🔊 대화를 듣고, 현재 다루는 악기 종류를 고르세요.", speak: "I am playing the piano now.", a: ["바이올린", "기타", "피아노", "드럼"], c: 2 },
        { q: "🔊 질문의 의도가 무엇인지 파악하여 고르세요.", speak: "What is he doing?", a: ["어디 가니", "무엇을 하니(진행)", "언제 오니", "누구니"], c: 1 },
        { q: "🔊 공원에서 수행 중인 행동 공간과 매칭하세요.", speak: "They are running in the park.", a: ["학교", "공원", "운동장", "체육관"], c: 1 },
        { q: "🔊 그녀가 지금 공부하지 않는 과목을 고르세요.", speak: "She is not studying English.", a: ["수학", "과학", "영어", "역사"], c: 2 },
        { q: "🔊 상대방이 내 말에 집중하는지 확인하는 말을 고르세요.", speak: "Are you listening to me?", a: ["듣고 있다", "적고 있다", "말하고 있다", "보고 있다"], c: 0 },
        { q: "🔊 진행 중인 식사 시간 종류를 고르세요.", speak: "We are having dinner.", a: ["아침", "점심", "저녁", "간식"], c: 2 },
        { q: "🔊 지저귀는 생물 종류를 고르세요.", speak: "Birds are singing.", a: ["고양이", "강아지", "새", "원숭이"], c: 2 },
        { q: "🔊 창밖의 기상 상황 진행 상태를 고르세요.", speak: "It is raining outside.", a: ["맑음", "눈이 옴", "비가 옴", "흐림"], c: 2 },
        { q: "🔊 남자가 주방에서 제작 중인 제과 품목을 고르세요.", speak: "He is making a cake.", a: ["빵", "케이크", "쿠키", "피자"], c: 1 },
        { q: "🔊 아기의 현재 행동 상태를 고르세요.", speak: "The baby is crying.", a: ["웃음", "잠잠", "우는 중", "기어감"], c: 2 }
    ],
    15: [ // 15단계: 제안하기 (Why don't you / Shall we)
        { q: "🔊 동아리 가입 제안 대화를 듣고 대상을 고르세요.", speak: "Shall we join the dance club?", a: ["축구부", "댄스 클럽", "미술부", "밴드부"], c: 1 },
        { q: "🔊 권유문의 핵심 취지를 고르세요.", speak: "Why don't you take a rest?", a: ["공부하기", "휴식 취하기", "운동하기", "노래하기"], c: 1 },
        { q: "🔊 약속 일정 제안 시점을 고르세요.", speak: "Shall we meet tomorrow?", a: ["오늘", "내일", "주말", "다음 주"], c: 1 },
        { q: "🔊 타인에게 자문을 구하라는 권유 대상을 고르세요.", speak: "Why don't you ask him?", a: ["그녀에게", "그에게", "선생님께", "부모님께"], c: 1 },
        { q: "🔊 제안하는 스포츠 명칭을 고르세요.", speak: "Shall we play tennis?", a: ["배드민턴", "테니스", "탁구", "골프"], c: 1 },
        { q: "🔊 시착을 권하는 의류 색상을 고르세요.", speak: "Why don't you try this green shirt?", a: ["빨간 셔츠", "파란 셔츠", "초록 셔츠", "노란 셔츠"], c: 2 },
        { q: "🔊 구기 종목 플레이 제안을 고르세요.", speak: "Shall we go play baseball?", a: ["농구", "축구", "야구", "수영"], c: 2 },
        { q: "🔊 건강 상태 우려에 따른 권유 직업군을 고르세요.", speak: "Why don't you see a doctor?", a: ["의사", "치과의사", "약사", "간호사"], c: 0 },
        { q: "🔊 협동 학습 제안 방식을 고르세요.", speak: "Shall we study together?", a: ["혼자 공부", "같이 공부", "쉬기", "놀기"], c: 1 },
        { q: "🔊 수면 보충 권유 행동을 고르세요.", speak: "Why don't you go to bed early?", a: ["학교", "교회", "잠자리에 들기", "집"], c: 2 }
    ],
    16: [ // 16단계: 최상급 (the -est / the most)
        { q: "🔊 교실 내 최상급 외형 특징 인물을 고르세요.", speak: "Jiho is the tallest boy in his class.", a: ["가장 뚱뚱함", "가장 키가 큼", "가장 빠름", "가장 똑똑함"], c: 1 },
        { q: "🔊 차량 가격 최상급 특성을 고르세요.", speak: "This is the most expensive car.", a: ["가장 쌈", "가장 비쌈", "가장 빠름", "가장 오래됨"], c: 1 },
        { q: "🔊 야생 동물 기동력 최상급 특성을 고르세요.", speak: "The cheetah is the fastest animal.", a: ["가장 느림", "가장 힘이 셈", "가장 빠름", "가장 큼"], c: 2 },
        { q: "🔊 학습 체감 난이도 최상급 과목을 고르세요.", speak: "Math is the hardest for me.", a: ["영어", "수학", "과학", "사회"], c: 1 },
        { q: "🔊 교내 인지도 최상급 인물의 특징을 고르세요.", speak: "She is the most popular girl.", a: ["가장 똑똑함", "가장 인기가 많음", "가장 조용함", "가장 예쁨"], c: 1 },
        { q: "🔊 기온 최저 분포의 감탄적 최상급을 고르세요.", speak: "Today is the coldest day.", a: ["가장 더움", "가장 추움", "비가 가장 많이 옴", "바람이 가장 셈"], c: 1 },
        { q: "🔊 국가 면적 규모 최상급 대상을 고르세요.", speak: "Russia is the biggest country.", a: ["가장 작음", "가장 큼", "가장 추움", "가장 인구가 많음"], c: 1 },
        { q: "🔊 생애 최고의 소감 만족도를 고르세요.", speak: "This is the best day of my life.", a: ["최악의 날", "최고의 날", "평범한 날", "슬픈 날"], c: 1 },
        { q: "🔊 문항 해결 최저 난이도를 고르세요.", speak: "It was the easiest problem.", a: ["가장 어려움", "가장 쉬움", "평범함", "복잡함"], c: 1 },
        { q: "🔊 신체 물리력 최상급 소유자를 고르세요.", speak: "He is the strongest man.", a: ["가장 빠름", "가장 힘이 셈", "가장 유연함", "가장 약함"], c: 1 }
    ],
    17: [ // 17단계: 동명사 목적어 (enjoy, finish, mind, stop + -ing)
        { q: "🔊 즐겨 수행하는 독서 매체를 고르세요.", speak: "I enjoy reading books.", a: ["잡지", "만화", "책", "신문"], c: 2 },
        { q: "🔊 완료를 선언한 과업 종류를 고르세요.", speak: "She finished doing her homework.", a: ["방 청소", "숙제", "요리", "설거지"], c: 1 },
        { q: "🔊 중단을 요청하는 행위 종류를 고르세요.", speak: "Stop talking, please.", a: ["뛰기", "말하기", "먹기", "낙서하기"], c: 1 },
        { q: "🔊 레저 취미 활동 즐김 대상을 고르세요.", speak: "Do you enjoy going fishing?", a: ["캠핑", "등산", "낚시", "쇼핑"], c: 2 },
        { q: "🔊 가사 노동 정리를 완료한 구역을 고르세요.", speak: "He finished cleaning his room.", a: ["숙제", "내 방 청소", "마당 쓸기", "세차"], c: 1 },
        { q: "🔊 지속을 유도하는 청취 콘텐츠를 고르세요.", speak: "Don't stop listening to music.", a: ["라디오", "음악", "선생님 말씀", "뉴스"], c: 1 },
        { q: "🔊 공동으로 즐기는 오락 장르를 고르세요.", speak: "We enjoy playing video games.", a: ["보드게임", "비디오 게임", "카드게임", "숨바꼭질"], c: 1 },
        { q: "🔊 숙달 훈련을 완료한 악기 이름을 고르세요.", speak: "She finished practicing the piano.", a: ["바이올린", "플루트", "피아노", "첼로"], c: 2 },
        { q: "🔊 생리적 반응 제어 불능 상태 행동을 고르세요.", speak: "They couldn't stop laughing.", a: ["우는 것", "웃는 것", "먹는 것", "떠드는 것"], c: 1 },
        { q: "🔊 창작 예술 즐김 분야를 고르세요.", speak: "I enjoy drawing pictures.", a: ["사진 찍기", "그림 그리기", "만들기", "수집하기"], c: 1 }
    ],
    18: [ // 18단계: to부정사 목적어 (want, hope, wish, decide + to-V)
        { q: "🔊 익일 희망하는 구기 스포츠 종류를 고르세요.", speak: "I want to play soccer tomorrow.", a: ["야구", "축구", "농구", "족구"], c: 1 },
        { q: "🔊 이주 목적지로 최종 결정한 행정구역을 고르세요.", speak: "She decided to go to Daegu.", a: ["서울", "부산", "대구", "광주"], c: 2 },
        { q: "🔊 재회에 대한 소망 메세지를 고르세요.", speak: "I hope to meet you again.", a: ["다시 만나기", "헤어지기", "전화하기", "편지하기"], c: 0 },
        { q: "🔊 구매를 강력히 희망하는 전자기기를 고르세요.", speak: "He wants to buy a new computer.", a: ["스마트폰", "컴퓨터", "자전거", "게임기"], c: 1 },
        { q: "🔊 학업 정진에 대한 결의 내용을 고르세요.", speak: "They decided to study hard.", a: ["열심히 공부", "열심히 운동", "일찍 자기", "여행 가기"], c: 0 },
        { q: "🔊 미래 장래희망 장기 소망 직업을 고르세요.", speak: "I hope to be a doctor.", a: ["과학자", "경찰관", "의사", "변호사"], c: 2 },
        { q: "🔊 식사 메뉴 취향 요망 사항을 고르세요.", speak: "Do you want to eat pizza?", a: ["햄버거", "치킨", "피자", "스파게티"], c: 2 },
        { q: "🔊 출발 시간 단축 결심 사항을 고르세요.", speak: "We decided to leave early.", a: ["일찍 떠나기", "늦게 떠나기", "안 가기", "쉬다 가기"], c: 0 },
        { q: "🔊 해외 관광 희망 도시 명칭을 고르세요.", speak: "She wants to visit Paris.", a: ["런던", "뉴욕", "파리", "도쿄"], c: 2 },
        { q: "🔊 금일 스케줄 중 안정 추구 희망을 고르세요.", speak: "I hope to rest today.", a: ["일하기", "공부하기", "쉬기", "쇼핑하기"], c: 2 }
    ],
    19: [ // 19단계: 경험을 묻는 현재완료 (Have you ever -ed?)
        { q: "🔊 해외/국내 특정 도서 지역 조사를 고르세요.", speak: "Have you ever been to Jeju Island?", a: ["독도", "제주도", "거제도", "울릉도"], c: 1 },
        { q: "🔊 식습관 경험 중 전무한 전통 음식을 고르세요.", speak: "I have never eaten Kimchi.", a: ["불고기", "비빔밥", "김치", "떡볶이"], c: 2 },
        { q: "🔊 야생 맹수 목격 유무 질문 대상을 고르세요.", speak: "Have you ever seen a tiger?", a: ["사자", "호랑이", "곰", "늑대"], c: 1 },
        { q: "🔊 시각 매체 누적 관람 빈도 횟수를 고르세요.", speak: "He has seen the movie three times.", a: ["한 번", "두 번", "세 번", "네 번"], c: 2 },
        { q: "🔊 지형 기후대 중 탐방 경험이 없는 곳을 고르세요.", speak: "She has never been to a desert.", a: ["사막", "바다", "산", "동굴"], c: 0 },
        { q: "🔊 요리 조리법 실전 적용 경험 품목을 고르세요.", speak: "Have you ever made a pizza?", a: ["빵", "쿠키", "피자", "케이크"], c: 2 },
        { q: "🔊 대인 관계 과거 면식 유무 상태를 고르세요.", speak: "We have met before.", a: ["처음 만남", "전에 만난 적 있음", "모르는 사이", "친구 사이"], c: 1 },
        { q: "🔊 항공 교통수단 탑승 경험 유무를 고르세요.", speak: "Have you ever flown in a plane?", a: ["배", "기차", "비행기", "헬리콥터"], c: 2 },
        { q: "🔊 근태 이력 중 무결점 순결성 항목을 고르세요.", speak: "He has never been late.", a: ["지각", "결석", "숙제 안 함", "준비물 누락"], c: 0 },
        { q: "🔊 주권 국가 영토 밟아본 경험 국가를 고르세요.", speak: "They have been to Korea.", a: ["일본", "중국", "한국", "미국"], c: 2 }
    ],
    20: [ // 20단계: 수동태 입문 (be + p.p.)
        { q: "🔊 공간 위생 상태가 관리되는 빈도를 고르세요.", speak: "This room is cleaned every day.", a: ["매주", "매달", "매일", "가끔"], c: 2 },
        { q: "🔊 글로벌 범용 언어 사용의 주권을 고르세요.", speak: "English is spoken all over the world.", a: ["미국만", "영국만", "전 세계", "아시아"], c: 2 },
        { q: "🔊 기물 파손 피해를 입은 대상을 고르세요.", speak: "The window was broken.", a: ["열려있음", "닫혀있음", "깨졌음", "더러움"], c: 2 },
        { q: "🔊 역사 문헌 편찬의 위대한 주체를 고르세요.", speak: "This book was written by King Sejong.", a: ["이순신", "세종대왕", "김구", "방정환"], c: 1 },
        { q: "🔊 하드웨어 공산품 생산국 제조 국적을 고르세요.", speak: "The car was made in Korea.", a: ["미국", "일본", "한국", "독일"], c: 2 },
        { q: "🔊 유제품 가공 생산 원료 물질을 고르세요.", speak: "Cheese is made from milk.", a: ["콩", "우유", "밀가루", "쌀"], c: 1 },
        { q: "🔊 피명명자 소년의 실제 호칭 이름을 고르세요.", speak: "The boy is called Minsu.", a: ["민호", "민수", "준호", "지호"], c: 1 },
        { q: "🔊 우편 서류 인도 수령 완료 시점을 고르세요.", speak: "The letter was delivered yesterday.", a: ["오늘", "어제", "내일", "아까"], c: 1 },
        { q: "🔊 건축 구조물 준공 시점의 역사 연도를 고르세요.", speak: "The building was built in 2000.", a: ["1990년", "1995년", "2000년", "2005년"], c: 2 },
        { q: "🔊 파괴 행위 가해 원인 제공 청소년을 고르세요.", speak: "The glass was broken by Jiho.", a: ["민수", "지호", "철수", "영희"], c: 1 }
    ]
};
