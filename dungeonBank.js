// ==========================================================================
// 교과서 연계형 던전 전투 데이터 (1~20단계 각 5문제 유지 완전판)
// ==========================================================================
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

quizBank.dungeon = {
    1: [
        { q: "⚔️ [몬스터 출현!] 빈칸에 알맞은 b동사는? 'Where ( ) you from?'", a: ["is", "are", "am", "does"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] '나는 브라질 출신이야'의 올바른 표현은?", a: ["I'm from Brazil.", "I'm at Brazil.", "I'm in Brazil.", "I'm go Brazil."], c: 0 },
        { q: "⚔️ [반격 개시!] 이름의 철자를 물어볼 때 쓰는 조동사는?", a: ["is", "are", "can", "do"], c: 3 },
        { q: "⚔️ [보스 몬스터 등장!] '이것은 누구의 전화기인가요?'에 알맞은 의문사는?", a: ["What", "Whose", "Who", "Where"], c: 1 },
        { q: "⚔️ [최후의 일격!] '그것은 인호의 것이야'의 올바른 소유격 표현은?", a: ["Inho", "Inho's", "Inho is", "Inho has"], c: 1 }
    ],
    2: [
        { q: "⚔️ [몬스터 출현!] '내가 가장 좋아하는 과목은 수학이야' 빈칸은? 'My ( ) subject is math.'", a: ["best", "good", "favorite", "like"], c: 2 },
        { q: "⚔️ [몬스터의 공격!] 일과 시간을 물어볼 때 올바른 질문 어순은?", a: ["What time do you go home?", "What time you do go home?", "What do time you go home?", "Time what do you go home?"], c: 0 },
        { q: "⚔️ [반격 개시!] '나는 2시 30분에 집에 가' 시간 앞에 붙는 전치사는?", a: ["in", "on", "at", "to"], c: 2 },
        { q: "⚔️ [보스 몬스터 등장!] 약속 시간을 제안할 때 쓰는 표현은? '( ) about at 4:00?'", a: ["What", "How", "When", "Why"], c: 1 },
        { q: "⚔️ [최후의 일격!] 'I like to do math problems'의 올바른 해석은?", a: ["나는 수학 책을 읽는다.", "나는 수학 문제를 푸는 것을 좋아한다.", "나는 수학 공부가 싫다.", "나는 수학 선생님이 좋다."], c: 1 }
    ],
    3: [
        { q: "⚔️ [몬스터 출현!] 식당에서 주문을 받을 때 점원의 질문은? 'What would you ( )?'", a: ["want", "like", "have", "eat"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] 정중하게 스테이크를 주문하는 표현은?", a: ["I like a steak.", "I'd like a steak.", "I am a steak.", "I have steak."], c: 1 },
        { q: "⚔️ [반격 개시!] '너무 짜!'를 뜻하는 올바른 형용사는?", a: ["sweet", "salty", "spicy", "sour"], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] '부엌에 가스레인지가 한 대 있어'의 올바른 문장은?", a: ["There is a stove in the kitchen.", "There are a stove in the kitchen.", "Stove is in the kitchen.", "What's in the kitchen."], c: 0 },
        { q: "⚔️ [최후의 일격!] 상대방의 방에 들어가도 되는지 허락을 구하는 조동사는?", a: ["May", "Will", "Should", "Must"], c: 0 }
    ],
    4: [
        { q: "⚔️ [몬스터 출현!] '너는 여름방학 때 무엇을 했니?' 과거를 묻는 조동사는?", a: ["do", "does", "did", "are"], c: 2 },
        { q: "⚔️ [몬스터의 공격!] '나는 여행을 다녀왔어' 과거 동사 형태로 알맞은 것은?", a: ["go on a trip", "goes on a trip", "went on a trip", "going on a trip"], c: 2 },
        { q: "⚔️ [반격 개시!] 주말이 어땠는지 소감을 물어보는 질문은?", a: ["How is your weekend?", "How was your weekend?", "What was your weekend?", "Where was your weekend?"], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] '그는 짧은 곱슬머리를 가졌어' 외모 묘사로 알맞은 문장은?", a: ["He has short straight hair.", "He has short curly hair.", "He has long curly hair.", "He looks short hair."], c: 1 },
        { q: "⚔️ [최후의 일격!] 'She's wearing a yellow T-shirt'의 올바른 해석은?", a: ["그녀는 노란색 티셔츠를 입고 있다.", "그녀는 노란색 티셔츠를 샀다.", "그녀는 노란색 티셔츠를 좋아한다.", "그녀는 노란색 티셔츠를 빨고 있다."], c: 0 }
    ],
    5: [
        { q: "⚔️ [몬스터 출현!] '자유 시간에 무엇을 하니?' 빈칸은? 'What do you do in your ( ) time?'", a: ["busy", "free", "good", "happy"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] '등산 가자!' 상대방에게 제안할 때 동사원형 앞에 붙는 표현은?", a: ["Let's go", "Let's going", "Let to go", "Let go to"], c: 0 },
        { q: "⚔️ [반격 개시!] 어디가 아픈지 물어볼 때 쓰는 관용구는? 'What's ( )?'", a: ["matter", "wrong", "happen", "bad"], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] '나는 감기에 걸렸어' 셀 수 있는 명사 앞에 붙는 부정관사는?", a: ["I have a cold.", "I have an cold.", "I have the cold.", "I have some cold."], c: 0 },
        { q: "⚔️ [최후의 일격!] 아픈 사람에게 '잠을 좀 자렴' 하고 조언할 때 알맞은 수량 형용사는?", a: ["any", "some", "a", "many"], c: 1 }
    ],
    6: [
        { q: "⚔️ [몬스터 출현!] '나는 6학년이야' 서수 형태로 알맞은 단어는?", a: ["six", "sixes", "sixth", "sixty"], c: 2 },
        { q: "⚔️ [몬스터의 공격!] '나는 비행기 조종사가 되고 싶어' 동사 구조로 알맞은 것은?", a: ["want be a pilot", "want to be a pilot", "wants to be a pilot", "wanting to be a pilot"], c: 1 },
        { q: "⚔️ [반격 개시!] '수영하러 가자' 취미 활동을 제안하는 go ~ing 문형은?", a: ["Let's go swim.", "Let's go swimming.", "Let's go to swim.", "Let's go swims."], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] 주어가 'He'일 때 '원하다(want)' 동사의 올바른 형태는?", a: ["want", "wants", "wanting", "wanted"], c: 1 },
        { q: "⚔️ [최후의 일격!] '자전거 타러 가자' 빈칸은? 'Let's go ( )'", a: ["bike", "biking", "to bike", "bikes"], c: 1 }
    ],
    7: [
        { q: "⚔️ [몬스터 출현!] '네 생일은 언제니?' 알맞은 의문사는?", a: ["What", "Where", "When", "Why"], c: 2 },
        { q: "⚔️ [몬스터의 공격!] '나는 나무를 심을 예정이야' 미래 계획 표현으로 알맞은 것은?", a: ["I am go to plant trees.", "I am going to plant trees.", "I am goes to plant trees.", "I will going to plant trees."], c: 1 },
        { q: "⚔️ [반격 개시!] 주어가 'You'일 때 be going to의 올바른 be동사는?", a: ["am", "is", "are", "do"], c: 2 },
        { q: "⚔️ [보스 몬스터 등장!] 영어로 '5월'을 뜻하는 올바른 단어는?", a: ["March", "April", "May", "June"], c: 2 },
        { q: "⚔️ [최후의 일격!] 'I'm going to visit my cousins'의 올바른 해석은?", a: ["나는 사촌들과 놀았다.", "나는 사촌들을 방문할 예정이다.", "나는 사촌들이 보고 싶다.", "나는 사촌들과 전화를 할 것이다."], c: 1 }
    ],
    8: [
        { q: "⚔️ [몬스터 출현!] '나는 두통(머리아픔)이 있어' 빈칸은? 'I have a ( ).'", a: ["stomachache", "headache", "toothache", "backache"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] 아픈 사람에게 강한 권유를 할 때 쓰는 조동사는?", a: ["should", "will", "can", "may"], c: 0 },
        { q: "⚔️ [반격 개시!] '무엇을 드시고 싶으신가요?' 정중한 음식 주문 표현은?", a: ["What do you want to eat?", "What would you like to have?", "What do you like to have?", "What would you want to eat?"], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] '너는 약을 좀 먹는 게 좋겠어' 알맞은 동사는?", a: ["eat some medicine", "take some medicine", "drink some medicine", "have to medicine"], c: 1 },
        { q: "⚔️ [최후의 일격!] '치킨 좀 드시겠어요?' 정중한 권유 표현은?", a: ["Do you want chicken?", "Would you like some chicken?", "Can you eat chicken?", "Should you take chicken?"], c: 1 }
    ],
    9: [
        { q: "⚔️ [몬스터 출현!] '그는 짧은 생머리를 가졌어' 빈칸은? 'He has short ( ) hair.'", a: ["curly", "straight", "wavy", "tall"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] '나는 너보다 힘이 세!' 비교급 규칙으로 알맞은 단어는?", a: ["strong", "stronger", "more strong", "strongest"], c: 1 },
        { q: "⚔️ [반격 개시!] 비교 대상 앞에 붙여 '~보다'를 뜻하는 올바른 단어는?", a: ["then", "than", "that", "there"], c: 1 },
        { q: "⚔️ [보스 몬스터 등장!] 'She is taller than me'의 올바른 해석은?", a: ["그녀는 나와 키가 똑같다.", "그녀는 나보다 키가 더 크다.", "내가 그녀보다 키가 더 크다.", "그녀는 키가 아주 작다."], c: 1 },
        { q: "⚔️ [최후의 일격!] 'You are faster than him'의 올바른 해석은?", a: ["너는 그보다 더 힘이 세다.", "너는 그보다 더 빠르다.", "그가 너보다 더 빠르다.", "너는 그만큼 빠르다."], c: 1 }
    ],
    10: [
        { q: "⚔️ [몬스터 출현!] '박물관에 어떻게 가나요?' 길을 물을 때 알맞은 전치사는?", a: ["get at the museum", "get to the museum", "get in the museum", "get on the museum"], c: 1 },
        { q: "⚔️ [몬스터의 공격!] 상대방의 의견을 정중하게 물어보는 질문은?", a: ["What do you think?", "Why are you happy?", "How can I get there?", "What is your name?"], c: 0 },
        { q: "⚔️ [반격 개시!] '너는 왜 기쁘니?' 이유를 묻는 의문사는?", a: ["What", "When", "Where", "Why"], c: 3 },
        { q: "⚔️ [보스 몬스터 등장!] 감정의 이유를 답할 때 문장을 연결해주는 접속사는?", a: ["so", "but", "because", "and"], c: 2 },
        { q: "⚔️ [최후의 일격!] 'Go straight and turn left. It's next to the bank.'의 올바른 길 안내 위치는?", a: ["직진 후 우회전, 은행 건너편", "직진 후 좌회전, 은행 옆", "직진 후 좌회전, 학교 뒤", "뒤로 돌아 우회전, 은행 안"], c: 1 }
    ],
    11: [ // 11단계: 의무 및 금지 (must, must not)
        { q: "⚔️ [다크 엘프 출현!] 빈칸에 알맞은 의무 조동사는? 'You ( ) follow the rules.'", a: ["must", "must not", "are", "do"], c: 0 },
        { q: "⚔️ [다크 엘프의 습격!] 금지를 나타내는 'You must not run here'의 알맞은 해석은?", a: ["여기서 뛰어라.", "여기서 뛰면 안 된다.", "여기서 뛸 필요가 없다.", "여기서 뛰어야만 한다."], c: 1 },
        { q: "⚔️ [칼날 반격!] 조동사 must 및 must not 뒤에 오는 동사의 형태는?", a: ["과거동사", "-ing형", "동사원형", "to부정사"], c: 2 },
        { q: "⚔️ [보스 매칭!] '박물관에서 물건을 만지면 안 된다'에 알맞은 금지 표현은?", a: ["You must touch it.", "You must not touch it.", "You should touch it.", "You can touch it."], c: 1 },
        { q: "⚔️ [최후의 일격!] '너는 지각하면 안 된다' 빈칸은? 'You must not ( ) late.'", a: ["is", "are", "been", "be"], c: 3 }
    ],
    12: [ // 12단계: 빈도부사 (always, usually, often, sometimes, never)
        { q: "⚔️ [미노타우르스 출현!] 빈도 100%인 '항상'을 뜻하는 빈도부사는?", a: ["always", "usually", "sometimes", "never"], c: 0 },
        { q: "⚔️ [미노타우르스의 위협!] 빈도부사의 문장 내 올바른 위치 규칙은?", a: ["조동사 앞, 일반동사 뒤", "be동사 뒤, 일반동사 앞", "문장 맨 끝", "명사 바로 앞"], c: 1 },
        { q: "⚔️ [도끼 반격!] 'We sometimes watch movies'의 알맞은 한국어 해석은?", a: ["우리는 항상 영화를 본다.", "우리는 자주 영화를 본다.", "우리는 가끔 영화를 본다.", "우리는 절대 영화를 안 본다."], c: 2 },
        { q: "⚔️ [보스 크러시!] 빈도 0%인 '결코 ~않다'를 뜻하는 알맞은 부사는?", a: ["often", "sometimes", "usually", "never"], c: 3 },
        { q: "⚔️ [최후의 일격!] 'Suji is always kind'에서 always의 올바른 위치는?", a: ["b동사(is) 뒤", "b동사(is) 앞", "주어(Suji) 앞", "문장 맨 뒤"], c: 0 }
    ],
    13: [ // 13단계: 감탄문 (What a / How)
        { q: "⚔️ [키메라 출현!] What 감탄문의 올바른 핵심 어순 배열은?", a: ["What + 형 + 명!", "What + a + 형 + 명!", "What + 명 + 형!", "What + a + 명 + 형!"], c: 1 },
        { q: "⚔️ [키메라의 독니!] How 감탄문의 올바른 핵심 어순 배열은?", a: ["How + 형용사/부사!", "How + a + 형용사!", "How + 명사 + 형용사!", "How + 주어 + 동사!"], c: 0 },
        { q: "⚔️ [화염 반격!] 'What a beautiful day it is!'의 올바른 해석은?", a: ["오늘 날씨가 어떠니?", "정말 아름다운 날이구나!", "날씨가 흐리구나.", "내일은 날씨가 좋을 것이다."], c: 1 },
        { q: "⚔️ [보스 슬래시!] '이 소년은 정말 똑똑하구나!' How 감탄문 빈칸은? 'How ( ) this boy is!'", a: ["smart boy", "smart", "a smart", "smarts"], c: 1 },
        { q: "⚔️ [최후의 일격!] 감탄문 문장 맨 끝의 '주어 + 동사'는 어떻게 처리할 수 있는가?", a: ["무조건 필수 기재", "명사로 변환", "생략 가능", "맨 앞으로 이동"], c: 2 }
    ],
    14: [ // 14단계: 현재진행형 (am/is/are + -ing)
        { q: "⚔️ [바실리스크 출현!] 현재진행형(~하는 중이다)의 문법 공식 구조는?", a: ["be동사 + 동사원형", "be동사 + 동사-ing", "have + 과거분사", "will + 동사원형"], c: 1 },
        { q: "⚔️ [석화 시선!] 'I am playing the piano now'의 올바른 뜻은?", a: ["나는 피아노를 칠 줄 안다.", "나는 지금 피아노를 치고 있다.", "나는 피아노 치는 것을 좋아한다.", "나는 피아노를 쳤었다."], c: 1 },
        { q: "⚔️ [거울 반격!] 'run'의 현재진행형(-ing) 스펠링 규칙으로 올바른 것은?", a: ["runing", "runnig", "running", "runening"], c: 2 },
        { q: "⚔️ [보스 저지!] '그녀는 영어를 공부하고 있지 않다' 진행형 부정문의 not의 올바른 위치는?", a: ["She is not studying English.", "She not is studying English.", "She is studying not English.", "She is studying English not."], c: 0 },
        { q: "⚔️ [최후의 일격!] '너 내 말 듣고 있니?' 알맞은 진행형 의문문 빈칸은? '( ) you listening to me?'", a: ["Is", "Do", "Are", "Does"], c: 2 }
    ],
    15: [ // 15단계: 제안하기 (Why don't you / Shall we)
        { q: "⚔️ [그리핀 출현!] '우리 ~할까?' 하고 동사원형 앞에서 함께 제안할 때 쓰는 표현은?", a: ["Shall we", "Will you", "Must we", "May I"], c: 0 },
        { q: "⚔️ [강풍 격돌!] 'Why don't you take a rest?'의 올바른 한국어 해석은?", a: ["너 왜 쉬고 있니?", "휴식을 취하는 게 어때?", "언제 쉴 예정이니?", "쉬면 안 된다."], c: 1 },
        { q: "⚔️ [창공 반격!] 제안문 'Shall we'와 'Why don't you' 바로 뒤에 오는 동사의 형태는?", a: ["동사-ing", "to부정사", "동사원형", "과거동사"], c: 2 },
        { q: "⚔️ [보스 관통!] '우리 내일 만날까?' 제안할 때 알맞은 영문장은?", a: ["Shall we meet tomorrow?", "Why don't you meet tomorrow?", "Shall we meeting tomorrow?", "Do we meet tomorrow?"], c: 0 },
        { q: "⚔️ [최후의 일격!] 상대방의 좋은 제안에 수락(동의)할 때 쓰는 표현으로 알맞은 것은?", a: ["I'm sorry.", "Sounds good.", "No, I don't.", "Goodbye."], c: 1 }
    ],
    16: [ // 16단계: 최상급 (the -est / the most)
        { q: "⚔️ [뱀파이어 출현!] 최상급 형용사(가장 ~한) 표현 앞에 공통적으로 붙는 정관사는?", a: ["a", "an", "the", "X"], c: 2 },
        { q: "⚔️ [흡혈 공격!] 'Jiho is the tallest boy in his class'의 알맞은 뜻은?", a: ["지호는 반에서 키가 크다.", "지호는 반에서 가장 키가 크다.", "지호는 반에서 두 번째로 크다.", "내가 지호보다 더 크다."], c: 1 },
        { q: "⚔️ [성수 반격!] 'expensive'와 같이 음절이 긴 단어의 최상급 형태를 만들 때 앞에 붙이는 단어는?", a: ["est", "more", "most", "best"], c: 2 },
        { q: "⚔️ [보스 파쇄!] 불규칙 형용사 'good'의 올바른 최상급 형태 단어는?", a: ["goodest", "better", "most good", "best"], c: 3 },
        { q: "⚔️ [최후의 일격!] '치타는 가장 빠른 동물이다' 빈칸은? 'The cheetah is the ( ) animal.'", a: ["fast", "faster", "fastest", "most fast"], c: 2 }
    ],
    17: [ // 17단계: 동명사 목적어 (enjoy, finish, mind, stop + -ing)
        { q: "⚔️ [스핑크스 출현!] 영어 동사 'enjoy'와 'finish'는 목적으로 어떤 형태를 취하는가?", a: ["동사원형", "to부정사", "동명사(-ing)", "과거분사"], c: 2 },
        { q: "⚔️ [수수께끼 공격!] 'Stop talking, please'의 올바른 의미는?", a: ["말하기를 시작하세요.", "말하는 것을 멈춰주세요.", "정직하게 말하세요.", "이야기를 경청하세요."], c: 1 },
        { q: "⚔️ [지혜 반격!] '나는 책 읽는 것을 즐긴다' 빈칸에 알맞은 목적어 형태는? 'I enjoy ( ) books.'", a: ["read", "to read", "reading", "reads"], c: 2 },
        { q: "⚔️ [보스 해체!] '그녀는 숙제하는 것을 끝마쳤다' 빈칸은? 'She finished ( ) her homework.'", a: ["do", "to do", "doing", "done"], c: 2 },
        { q: "⚔️ [최후의 일격!] 'Don't stop listening to music'의 올바른 뜻은?", a: ["음악을 크게 듣지 마라.", "음악 듣는 것을 멈추지 마라.", "음악 감상을 끝내라.", "음악 소리가 멈췄다."], c: 1 }
    ],
    18: [ // 18단계: to부정사 목적어 (want, hope, wish, decide + to-V)
        { q: "⚔️ [베히모스 출현!] 영어 동사 'want', 'hope', 'decide'는 목적어로 어떤 형태만 취하는가?", a: ["동명사(-ing)", "to부정사(to+동사원형)", "동사원형", "현재분사"], c: 1 },
        { q: "⚔️ [대지 진동!] 'I want to play soccer tomorrow'의 알맞은 뜻은?", a: ["나는 내일 축구를 할 수 있다.", "나는 내일 축구 하기를 원한다.", "나는 내일 축구를 끝마칠 것이다.", "나는 내일 축구를 즐겼다."], c: 1 },
        { q: "⚔️ [대검 반격!] '그녀는 대구에 가기로 결정했다' 빈칸은? 'She decided ( ) to Daegu.'", a: ["go", "going", "to go", "went"], c: 2 },
        { q: "⚔️ [보스 붕괴!] 'I hope to meet you again'의 올바른 해석은?", a: ["너를 다시 만나기를 희망해.", "너를 만나서 행복했어.", "너를 절대 만나지 않겠다.", "언제 다시 만날 수 있니?"], c: 0 },
        { q: "⚔️ [최후의 일격!] '너는 피자 먹기를 원하니?' 빈칸은? 'Do you want ( ) pizza?'", a: ["eat", "eating", "to eat", "eats"], c: 2 }
    ],
    19: [ // 19단계: 경험을 묻는 현재완료 (Have you ever -ed?)
        { q: "⚔️ [크라켄 출현!] 과거부터 지금까지의 경험을 묻는 현재완료 의문서 기본 세트 형태는?", a: ["Did you ever + 동사원형?", "Have you ever + 과거분사(p.p.)?", "Are you ever + 동사-ing?", "Do you have + 명사?"], c: 1 },
        { q: "⚔️ [해일 범람!] 'Have you ever been to Jeju Island?'의 알맞은 의미는?", a: ["제주도에 가본 적이 있니?", "제주도에 살고 있니?", "제주도에 갈 예정이니?", "제주도가 어디에 있니?"], c: 0 },
        { q: "⚔️ [뇌격 반격!] 동사 'eat(먹다)'와 'see(보다)'의 올바른 과거분사(p.p.) 형태 조합은?", a: ["ate - saw", "eating - seeing", "eaten - seen", "eats - sees"], c: 2 },
        { q: "⚔️ [보스 동결!] 'I have never eaten Kimchi'의 올바른 해석은?", a: ["나는 김치를 자주 먹는다.", "나는 김치를 한 번도 먹어본 적이 없다.", "나는 김치를 먹을 수 없다.", "나는 김치를 먹고 싶다."], c: 1 },
        { q: "⚔️ [최후의 일격!] 주어가 3인칭 단수 'He'나 'She'일 때 have 대신 사용하는 현재완료 조동사는?", a: ["have", "has", "is", "does"], c: 1 }
    ],
    20: [ // 20단계: 수동태 입문 (be + p.p.)
        { q: "⚔️ [블랙 드래곤 출현!] 주어가 행동을 직접 하는 것이 아니라 '당하는 것'을 나타내는 문법 공식은?", a: ["be동사 + 과거분사(p.p.)", "be동사 + 동사-ing", "have + 과거분사", "will + 동사원형"], c: 0 },
        { q: "⚔️ [멸망의 브레스!] 'English is spoken all over the world'의 알맞은 뜻은?", a: ["영어가 전 세계로 퍼지고 있다.", "영어는 전 세계에서 사용된다.", "모두가 영어를 말해야 한다.", "영어는 배우기 쉬운 언어다."], c: 1 },
        { q: "⚔️ [용기사 반격!] 수동태 문장에서 행위자(~에 의해서)를 나타낼 때 뒤에 배치하는 전치사는?", a: ["to", "for", "with", "by"], c: 3 },
        { q: "⚔️ [보스 처단!] '그 창문은 깨졌다' 과거 시점의 알맞은 수동태 문장은?", a: ["The window is broken.", "The window was broken.", "The window broke.", "The window was breaking."], c: 1 },
        { q: "⚔️ [최후의 일격!] '이 방은 매일 청소된다' 빈칸은? 'This room is ( ) every day.'", a: ["clean", "cleans", "cleaning", "cleaned"], c: 3 }
    ]
};
