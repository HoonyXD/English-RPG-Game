const wordPool = [
  {
    "word": "a / an",
    "meaning": "a/an (부정관사)"
  },
  {
    "word": "about",
    "meaning": "~에 대해"
  },
  {
    "word": "above",
    "meaning": "~위에"
  },
  {
    "word": "across",
    "meaning": "~을 가로질러"
  },
  {
    "word": "action",
    "meaning": "행동"
  },
  {
    "word": "activity",
    "meaning": "활동"
  },
  {
    "word": "actor",
    "meaning": "배우(남)"
  },
  {
    "word": "actress",
    "meaning": "배우(여)"
  },
  {
    "word": "add",
    "meaning": "더하다"
  },
  {
    "word": "address",
    "meaning": "주소"
  },
  {
    "word": "adult",
    "meaning": "어른"
  },
  {
    "word": "advice",
    "meaning": "조언"
  },
  {
    "word": "afraid",
    "meaning": "두려운"
  },
  {
    "word": "after",
    "meaning": "~후에"
  },
  {
    "word": "afternoon",
    "meaning": "오후"
  },
  {
    "word": "again",
    "meaning": "다시"
  },
  {
    "word": "age",
    "meaning": "나이"
  },
  {
    "word": "ago",
    "meaning": "~전에"
  },
  {
    "word": "agree",
    "meaning": "동의하다"
  },
  {
    "word": "air",
    "meaning": "공기"
  },
  {
    "word": "airport",
    "meaning": "공항"
  },
  {
    "word": "all",
    "meaning": "모든"
  },
  {
    "word": "also",
    "meaning": "또한"
  },
  {
    "word": "always",
    "meaning": "항상"
  },
  {
    "word": "amazing",
    "meaning": "놀라운"
  },
  {
    "word": "and",
    "meaning": "그리고"
  },
  {
    "word": "angry",
    "meaning": "화난"
  },
  {
    "word": "animal",
    "meaning": "동물"
  },
  {
    "word": "another",
    "meaning": "또 다른"
  },
  {
    "word": "answer",
    "meaning": "대답"
  },
  {
    "word": "any",
    "meaning": "어떤"
  },
  {
    "word": "anyone",
    "meaning": "누구든지"
  },
  {
    "word": "anything",
    "meaning": "무엇이든"
  },
  {
    "word": "apartment",
    "meaning": "아파트"
  },
  {
    "word": "apple",
    "meaning": "사과"
  },
  {
    "word": "area",
    "meaning": "지역"
  },
  {
    "word": "arm",
    "meaning": "팔"
  },
  {
    "word": "around",
    "meaning": "주위에"
  },
  {
    "word": "arrive",
    "meaning": "도착하다"
  },
  {
    "word": "art",
    "meaning": "예술"
  },
  {
    "word": "article",
    "meaning": "기사, 관사"
  },
  {
    "word": "artist",
    "meaning": "예술가"
  },
  {
    "word": "ask",
    "meaning": "묻다"
  },
  {
    "word": "aunt",
    "meaning": "이모, 고모"
  },
  {
    "word": "autumn",
    "meaning": "가을"
  },
  {
    "word": "away",
    "meaning": "멀리"
  },
  {
    "word": "baby",
    "meaning": "아기"
  },
  {
    "word": "back",
    "meaning": "뒤, 등"
  },
  {
    "word": "bad",
    "meaning": "나쁜"
  },
  {
    "word": "bag",
    "meaning": "가방"
  },
  {
    "word": "ball",
    "meaning": "공"
  },
  {
    "word": "banana",
    "meaning": "바나나"
  },
  {
    "word": "band",
    "meaning": "밴드"
  },
  {
    "word": "bank",
    "meaning": "은행"
  },
  {
    "word": "bath",
    "meaning": "목욕"
  },
  {
    "word": "bathroom",
    "meaning": "화장실"
  },
  {
    "word": "be",
    "meaning": "~이다"
  },
  {
    "word": "beach",
    "meaning": "해변"
  },
  {
    "word": "beautiful",
    "meaning": "아름다운"
  },
  {
    "word": "because",
    "meaning": "왜냐하면"
  },
  {
    "word": "become",
    "meaning": "~이 되다"
  },
  {
    "word": "bed",
    "meaning": "침대"
  },
  {
    "word": "bedroom",
    "meaning": "침실"
  },
  {
    "word": "before",
    "meaning": "~전에"
  },
  {
    "word": "begin",
    "meaning": "시작하다"
  },
  {
    "word": "beginning",
    "meaning": "시작"
  },
  {
    "word": "behind",
    "meaning": "뒤에"
  },
  {
    "word": "believe",
    "meaning": "믿다"
  },
  {
    "word": "best",
    "meaning": "최고의"
  },
  {
    "word": "better",
    "meaning": "더 좋은"
  },
  {
    "word": "between",
    "meaning": "~사이에"
  },
  {
    "word": "bicycle",
    "meaning": "자전거"
  },
  {
    "word": "big",
    "meaning": "큰"
  },
  {
    "word": "bike",
    "meaning": "자전거"
  },
  {
    "word": "bill",
    "meaning": "청구서"
  },
  {
    "word": "bird",
    "meaning": "새"
  },
  {
    "word": "birthday",
    "meaning": "생일"
  },
  {
    "word": "black",
    "meaning": "검은색"
  },
  {
    "word": "blog",
    "meaning": "블로그"
  },
  {
    "word": "blue",
    "meaning": "파란색"
  },
  {
    "word": "boat",
    "meaning": "배"
  },
  {
    "word": "body",
    "meaning": "몸"
  },
  {
    "word": "book",
    "meaning": "책"
  },
  {
    "word": "boot",
    "meaning": "부츠"
  },
  {
    "word": "bored",
    "meaning": "지루한"
  },
  {
    "word": "boring",
    "meaning": "지루하게 하는"
  },
  {
    "word": "both",
    "meaning": "둘 다"
  },
  {
    "word": "bottle",
    "meaning": "병"
  },
  {
    "word": "box",
    "meaning": "상자"
  },
  {
    "word": "boy",
    "meaning": "남자아이"
  },
  {
    "word": "boyfriend",
    "meaning": "남자친구"
  },
  {
    "word": "bread",
    "meaning": "빵"
  },
  {
    "word": "break",
    "meaning": "부수다, 휴식"
  },
  {
    "word": "breakfast",
    "meaning": "아침식사"
  },
  {
    "word": "bring",
    "meaning": "가져오다"
  },
  {
    "word": "brother",
    "meaning": "남자형제"
  },
  {
    "word": "brown",
    "meaning": "갈색"
  },
  {
    "word": "build",
    "meaning": "짓다"
  },
  {
    "word": "building",
    "meaning": "건물"
  },
  {
    "word": "bus",
    "meaning": "버스"
  },
  {
    "word": "business",
    "meaning": "사업"
  },
  {
    "word": "busy",
    "meaning": "바쁜"
  },
  {
    "word": "but",
    "meaning": "하지만"
  },
  {
    "word": "butter",
    "meaning": "버터"
  },
  {
    "word": "buy",
    "meaning": "사다"
  },
  {
    "word": "bye",
    "meaning": "안녕"
  },
  {
    "word": "cafe",
    "meaning": "카페"
  },
  {
    "word": "cake",
    "meaning": "케이크"
  },
  {
    "word": "call",
    "meaning": "전화하다"
  },
  {
    "word": "camera",
    "meaning": "카메라"
  },
  {
    "word": "can",
    "meaning": "~할 수 있다"
  },
  {
    "word": "capital",
    "meaning": "수도"
  },
  {
    "word": "car",
    "meaning": "자동차"
  },
  {
    "word": "card",
    "meaning": "카드"
  },
  {
    "word": "career",
    "meaning": "직업"
  },
  {
    "word": "carry",
    "meaning": "나르다"
  },
  {
    "word": "cat",
    "meaning": "고양이"
  },
  {
    "word": "cent",
    "meaning": "센트"
  },
  {
    "word": "centre",
    "meaning": "중심"
  },
  {
    "word": "century",
    "meaning": "세기"
  },
  {
    "word": "chair",
    "meaning": "의자"
  },
  {
    "word": "change",
    "meaning": "바꾸다"
  },
  {
    "word": "cheap",
    "meaning": "저렴한"
  },
  {
    "word": "check",
    "meaning": "확인하다"
  },
  {
    "word": "cheese",
    "meaning": "치즈"
  },
  {
    "word": "chicken",
    "meaning": "닭고기"
  },
  {
    "word": "child",
    "meaning": "아이"
  },
  {
    "word": "chocolate",
    "meaning": "초콜릿"
  },
  {
    "word": "choose",
    "meaning": "선택하다"
  },
  {
    "word": "cinema",
    "meaning": "영화관"
  },
  {
    "word": "city",
    "meaning": "도시"
  },
  {
    "word": "class",
    "meaning": "수업, 반"
  },
  {
    "word": "classroom",
    "meaning": "교실"
  },
  {
    "word": "clean",
    "meaning": "깨끗한"
  },
  {
    "word": "climb",
    "meaning": "오르다"
  },
  {
    "word": "clock",
    "meaning": "시계"
  },
  {
    "word": "close",
    "meaning": "닫다"
  },
  {
    "word": "clothes",
    "meaning": "옷"
  },
  {
    "word": "club",
    "meaning": "클럽"
  },
  {
    "word": "coat",
    "meaning": "코트"
  },
  {
    "word": "coffee",
    "meaning": "커피"
  },
  {
    "word": "cold",
    "meaning": "추운"
  },
  {
    "word": "college",
    "meaning": "대학"
  },
  {
    "word": "colour",
    "meaning": "색깔"
  },
  {
    "word": "come",
    "meaning": "오다"
  },
  {
    "word": "common",
    "meaning": "흔한"
  },
  {
    "word": "company",
    "meaning": "회사"
  },
  {
    "word": "compare",
    "meaning": "비교하다"
  },
  {
    "word": "complete",
    "meaning": "완전한"
  },
  {
    "word": "computer",
    "meaning": "컴퓨터"
  },
  {
    "word": "concert",
    "meaning": "콘서트"
  },
  {
    "word": "conversation",
    "meaning": "대화"
  },
  {
    "word": "cook",
    "meaning": "요리하다"
  },
  {
    "word": "cooking",
    "meaning": "요리"
  },
  {
    "word": "cool",
    "meaning": "시원한, 멋진"
  },
  {
    "word": "correct",
    "meaning": "맞는"
  },
  {
    "word": "cost",
    "meaning": "비용"
  },
  {
    "word": "could",
    "meaning": "~할 수 있었다"
  },
  {
    "word": "country",
    "meaning": "나라"
  },
  {
    "word": "course",
    "meaning": "과정"
  },
  {
    "word": "cousin",
    "meaning": "사촌"
  },
  {
    "word": "cow",
    "meaning": "소"
  },
  {
    "word": "cream",
    "meaning": "크림"
  },
  {
    "word": "create",
    "meaning": "만들다"
  },
  {
    "word": "culture",
    "meaning": "문화"
  },
  {
    "word": "cup",
    "meaning": "컵"
  },
  {
    "word": "customer",
    "meaning": "고객"
  },
  {
    "word": "cut",
    "meaning": "자르다"
  },
  {
    "word": "dad",
    "meaning": "아빠"
  },
  {
    "word": "dance",
    "meaning": "춤추다"
  },
  {
    "word": "dancer",
    "meaning": "댄서"
  },
  {
    "word": "dangerous",
    "meaning": "위험한"
  },
  {
    "word": "dark",
    "meaning": "어두운"
  },
  {
    "word": "date",
    "meaning": "날짜"
  },
  {
    "word": "daughter",
    "meaning": "딸"
  },
  {
    "word": "day",
    "meaning": "날"
  },
  {
    "word": "decide",
    "meaning": "결정하다"
  },
  {
    "word": "delicious",
    "meaning": "맛있는"
  },
  {
    "word": "describe",
    "meaning": "묘사하다"
  },
  {
    "word": "design",
    "meaning": "디자인"
  },
  {
    "word": "desk",
    "meaning": "책상"
  },
  {
    "word": "detail",
    "meaning": "세부사항"
  },
  {
    "word": "dictionary",
    "meaning": "사전"
  },
  {
    "word": "die",
    "meaning": "죽다"
  },
  {
    "word": "diet",
    "meaning": "식단"
  },
  {
    "word": "difference",
    "meaning": "차이"
  },
  {
    "word": "different",
    "meaning": "다른"
  },
  {
    "word": "difficult",
    "meaning": "어려운"
  },
  {
    "word": "dinner",
    "meaning": "저녁식사"
  },
  {
    "word": "dirty",
    "meaning": "더러운"
  },
  {
    "word": "discuss",
    "meaning": "토론하다"
  },
  {
    "word": "dish",
    "meaning": "요리, 접시"
  },
  {
    "word": "do",
    "meaning": "하다"
  },
  {
    "word": "doctor",
    "meaning": "의사"
  },
  {
    "word": "dog",
    "meaning": "개"
  },
  {
    "word": "dollar",
    "meaning": "달러"
  },
  {
    "word": "door",
    "meaning": "문"
  },
  {
    "word": "down",
    "meaning": "아래로"
  },
  {
    "word": "draw",
    "meaning": "그리다"
  },
  {
    "word": "dress",
    "meaning": "드레스"
  },
  {
    "word": "drink",
    "meaning": "마시다"
  },
  {
    "word": "drive",
    "meaning": "운전하다"
  },
  {
    "word": "driver",
    "meaning": "운전자"
  },
  {
    "word": "during",
    "meaning": "~동안"
  },
  {
    "word": "each",
    "meaning": "각각"
  },
  {
    "word": "ear",
    "meaning": "귀"
  },
  {
    "word": "early",
    "meaning": "이른"
  },
  {
    "word": "east",
    "meaning": "동쪽"
  },
  {
    "word": "easy",
    "meaning": "쉬운"
  },
  {
    "word": "eat",
    "meaning": "먹다"
  },
  {
    "word": "egg",
    "meaning": "달걀"
  },
  {
    "word": "email",
    "meaning": "이메일"
  },
  {
    "word": "end",
    "meaning": "끝"
  },
  {
    "word": "enjoy",
    "meaning": "즐기다"
  },
  {
    "word": "enough",
    "meaning": "충분한"
  },
  {
    "word": "euro",
    "meaning": "유로"
  },
  {
    "word": "evening",
    "meaning": "저녁"
  },
  {
    "word": "event",
    "meaning": "행사"
  },
  {
    "word": "ever",
    "meaning": "언제나"
  },
  {
    "word": "every",
    "meaning": "모든"
  },
  {
    "word": "everybody",
    "meaning": "모든 사람"
  },
  {
    "word": "everyone",
    "meaning": "모든 사람"
  },
  {
    "word": "everything",
    "meaning": "모든 것"
  },
  {
    "word": "exam",
    "meaning": "시험"
  },
  {
    "word": "example",
    "meaning": "예시"
  },
  {
    "word": "excited",
    "meaning": "신난"
  },
  {
    "word": "exciting",
    "meaning": "흥미진진한"
  },
  {
    "word": "exercise",
    "meaning": "운동"
  },
  {
    "word": "expensive",
    "meaning": "비싼"
  },
  {
    "word": "explain",
    "meaning": "설명하다"
  },
  {
    "word": "extra",
    "meaning": "추가의"
  },
  {
    "word": "eye",
    "meaning": "눈"
  },
  {
    "word": "face",
    "meaning": "얼굴"
  },
  {
    "word": "family",
    "meaning": "가족"
  },
  {
    "word": "famous",
    "meaning": "유명한"
  },
  {
    "word": "fantastic",
    "meaning": "환상적인"
  },
  {
    "word": "far",
    "meaning": "멀리"
  },
  {
    "word": "farm",
    "meaning": "농장"
  },
  {
    "word": "farmer",
    "meaning": "농부"
  },
  {
    "word": "fast",
    "meaning": "빠른"
  },
  {
    "word": "fat",
    "meaning": "살찐"
  },
  {
    "word": "father",
    "meaning": "아버지"
  },
  {
    "word": "favourite",
    "meaning": "좋아하는"
  },
  {
    "word": "feel",
    "meaning": "느끼다"
  },
  {
    "word": "feeling",
    "meaning": "감정"
  },
  {
    "word": "festival",
    "meaning": "축제"
  },
  {
    "word": "few",
    "meaning": "몇 안 되는"
  },
  {
    "word": "fill",
    "meaning": "채우다"
  },
  {
    "word": "film",
    "meaning": "영화"
  },
  {
    "word": "find",
    "meaning": "찾다"
  },
  {
    "word": "fine",
    "meaning": "좋은"
  },
  {
    "word": "finish",
    "meaning": "끝내다"
  },
  {
    "word": "fire",
    "meaning": "불"
  },
  {
    "word": "first",
    "meaning": "첫 번째"
  },
  {
    "word": "fish",
    "meaning": "물고기"
  },
  {
    "word": "five",
    "meaning": 5
  },
  {
    "word": "flight",
    "meaning": "비행"
  },
  {
    "word": "floor",
    "meaning": "바닥"
  },
  {
    "word": "flower",
    "meaning": "꽃"
  },
  {
    "word": "fly",
    "meaning": "날다"
  },
  {
    "word": "follow",
    "meaning": "따르다"
  },
  {
    "word": "food",
    "meaning": "음식"
  },
  {
    "word": "foot",
    "meaning": "발"
  },
  {
    "word": "football",
    "meaning": "축구"
  },
  {
    "word": "for",
    "meaning": "~을 위해"
  },
  {
    "word": "forget",
    "meaning": "잊다"
  },
  {
    "word": "free",
    "meaning": "무료의, 자유로운"
  },
  {
    "word": "friend",
    "meaning": "친구"
  },
  {
    "word": "friendly",
    "meaning": "친절한"
  },
  {
    "word": "from",
    "meaning": "~로부터"
  },
  {
    "word": "front",
    "meaning": "앞"
  },
  {
    "word": "fruit",
    "meaning": "과일"
  },
  {
    "word": "full",
    "meaning": "가득 찬"
  },
  {
    "word": "fun",
    "meaning": "재미"
  },
  {
    "word": "funny",
    "meaning": "재미있는"
  },
  {
    "word": "future",
    "meaning": "미래"
  },
  {
    "word": "game",
    "meaning": "게임"
  },
  {
    "word": "garden",
    "meaning": "정원"
  },
  {
    "word": "get",
    "meaning": "얻다"
  },
  {
    "word": "girl",
    "meaning": "여자아이"
  },
  {
    "word": "girlfriend",
    "meaning": "여자친구"
  },
  {
    "word": "give",
    "meaning": "주다"
  },
  {
    "word": "glass",
    "meaning": "유리, 잔"
  },
  {
    "word": "go",
    "meaning": "가다"
  },
  {
    "word": "good",
    "meaning": "좋은"
  },
  {
    "word": "goodbye",
    "meaning": "안녕히 가세요"
  },
  {
    "word": "grandfather",
    "meaning": "할아버지"
  },
  {
    "word": "grandmother",
    "meaning": "할머니"
  },
  {
    "word": "great",
    "meaning": "훌륭한"
  },
  {
    "word": "green",
    "meaning": "초록색"
  },
  {
    "word": "grey",
    "meaning": "회색"
  },
  {
    "word": "group",
    "meaning": "그룹"
  },
  {
    "word": "grow",
    "meaning": "자라다"
  },
  {
    "word": "guitar",
    "meaning": "기타"
  },
  {
    "word": "gym",
    "meaning": "체육관"
  },
  {
    "word": "hair",
    "meaning": "머리카락"
  },
  {
    "word": "half",
    "meaning": "반"
  },
  {
    "word": "hand",
    "meaning": "손"
  },
  {
    "word": "happen",
    "meaning": "일어나다"
  },
  {
    "word": "happy",
    "meaning": "행복한"
  },
  {
    "word": "hard",
    "meaning": "어려운, 열심히"
  },
  {
    "word": "hat",
    "meaning": "모자"
  },
  {
    "word": "hate",
    "meaning": "싫어하다"
  },
  {
    "word": "have",
    "meaning": "가지다"
  },
  {
    "word": "head",
    "meaning": "머리"
  },
  {
    "word": "health",
    "meaning": "건강"
  },
  {
    "word": "healthy",
    "meaning": "건강한"
  },
  {
    "word": "hear",
    "meaning": "듣다"
  },
  {
    "word": "hello",
    "meaning": "안녕"
  },
  {
    "word": "help",
    "meaning": "도움"
  },
  {
    "word": "here",
    "meaning": "여기"
  },
  {
    "word": "high",
    "meaning": "높은"
  },
  {
    "word": "history",
    "meaning": "역사"
  },
  {
    "word": "hobby",
    "meaning": "취미"
  },
  {
    "word": "holiday",
    "meaning": "휴일"
  },
  {
    "word": "home",
    "meaning": "집"
  },
  {
    "word": "homework",
    "meaning": "숙제"
  },
  {
    "word": "hope",
    "meaning": "바라다"
  },
  {
    "word": "horse",
    "meaning": "말"
  },
  {
    "word": "hospital",
    "meaning": "병원"
  },
  {
    "word": "hot",
    "meaning": "뜨거운"
  },
  {
    "word": "hotel",
    "meaning": "호텔"
  },
  {
    "word": "hour",
    "meaning": "시간"
  },
  {
    "word": "house",
    "meaning": "집"
  },
  {
    "word": "how",
    "meaning": "어떻게"
  },
  {
    "word": "hundred",
    "meaning": "백"
  },
  {
    "word": "hungry",
    "meaning": "배고픈"
  },
  {
    "word": "husband",
    "meaning": "남편"
  },
  {
    "word": "ice",
    "meaning": "얼음"
  },
  {
    "word": "ice cream",
    "meaning": "아이스크림"
  },
  {
    "word": "idea",
    "meaning": "아이디어"
  },
  {
    "word": "if",
    "meaning": "만약"
  },
  {
    "word": "imagine",
    "meaning": "상상하다"
  },
  {
    "word": "important",
    "meaning": "중요한"
  },
  {
    "word": "improve",
    "meaning": "개선하다"
  },
  {
    "word": "in",
    "meaning": "안에"
  },
  {
    "word": "include",
    "meaning": "포함하다"
  },
  {
    "word": "information",
    "meaning": "정보"
  },
  {
    "word": "interest",
    "meaning": "관심"
  },
  {
    "word": "interested",
    "meaning": "흥미있는"
  },
  {
    "word": "interesting",
    "meaning": "흥미로운"
  },
  {
    "word": "internet",
    "meaning": "인터넷"
  },
  {
    "word": "interview",
    "meaning": "인터뷰"
  },
  {
    "word": "into",
    "meaning": "~안으로"
  },
  {
    "word": "introduce",
    "meaning": "소개하다"
  },
  {
    "word": "island",
    "meaning": "섬"
  },
  {
    "word": "jacket",
    "meaning": "재킷"
  },
  {
    "word": "jeans",
    "meaning": "청바지"
  },
  {
    "word": "job",
    "meaning": "직업"
  },
  {
    "word": "join",
    "meaning": "합류하다"
  },
  {
    "word": "journey",
    "meaning": "여행"
  },
  {
    "word": "juice",
    "meaning": "주스"
  },
  {
    "word": "just",
    "meaning": "그냥, 방금"
  },
  {
    "word": "keep",
    "meaning": "유지하다"
  },
  {
    "word": "key",
    "meaning": "열쇠, 핵심"
  },
  {
    "word": "kilometre",
    "meaning": "킬로미터"
  },
  {
    "word": "kind",
    "meaning": "종류"
  },
  {
    "word": "kitchen",
    "meaning": "부엌"
  },
  {
    "word": "know",
    "meaning": "알다"
  },
  {
    "word": "land",
    "meaning": "땅"
  },
  {
    "word": "language",
    "meaning": "언어"
  },
  {
    "word": "large",
    "meaning": "큰"
  },
  {
    "word": "late",
    "meaning": "늦은"
  },
  {
    "word": "later",
    "meaning": "나중에"
  },
  {
    "word": "laugh",
    "meaning": "웃다"
  },
  {
    "word": "learn",
    "meaning": "배우다"
  },
  {
    "word": "leave",
    "meaning": "떠나다"
  },
  {
    "word": "left",
    "meaning": "왼쪽"
  },
  {
    "word": "leg",
    "meaning": "다리"
  },
  {
    "word": "lesson",
    "meaning": "수업"
  },
  {
    "word": "let",
    "meaning": "허락하다"
  },
  {
    "word": "letter",
    "meaning": "편지"
  },
  {
    "word": "library",
    "meaning": "도서관"
  },
  {
    "word": "life",
    "meaning": "삶"
  },
  {
    "word": "like",
    "meaning": "좋아하다"
  },
  {
    "word": "line",
    "meaning": "선"
  },
  {
    "word": "lion",
    "meaning": "사자"
  },
  {
    "word": "list",
    "meaning": "목록"
  },
  {
    "word": "listen",
    "meaning": "듣다"
  },
  {
    "word": "little",
    "meaning": "작은"
  },
  {
    "word": "live",
    "meaning": "살다"
  },
  {
    "word": "local",
    "meaning": "지역의"
  },
  {
    "word": "long",
    "meaning": "긴"
  },
  {
    "word": "look",
    "meaning": "보다"
  },
  {
    "word": "lose",
    "meaning": "잃다"
  },
  {
    "word": "lot",
    "meaning": "많이"
  },
  {
    "word": "love",
    "meaning": "사랑"
  },
  {
    "word": "lunch",
    "meaning": "점심"
  },
  {
    "word": "machine",
    "meaning": "기계"
  },
  {
    "word": "magazine",
    "meaning": "잡지"
  },
  {
    "word": "main",
    "meaning": "주요한"
  },
  {
    "word": "make",
    "meaning": "만들다"
  },
  {
    "word": "man",
    "meaning": "남자"
  },
  {
    "word": "many",
    "meaning": "많은"
  },
  {
    "word": "map",
    "meaning": "지도"
  },
  {
    "word": "market",
    "meaning": "시장"
  },
  {
    "word": "married",
    "meaning": "결혼한"
  },
  {
    "word": "match",
    "meaning": "시합, 맞다"
  },
  {
    "word": "maybe",
    "meaning": "아마도"
  },
  {
    "word": "me",
    "meaning": "나를"
  },
  {
    "word": "meal",
    "meaning": "식사"
  },
  {
    "word": "mean",
    "meaning": "의미하다"
  },
  {
    "word": "meaning",
    "meaning": "의미"
  },
  {
    "word": "meat",
    "meaning": "고기"
  },
  {
    "word": "meet",
    "meaning": "만나다"
  },
  {
    "word": "meeting",
    "meaning": "회의"
  },
  {
    "word": "member",
    "meaning": "회원"
  },
  {
    "word": "menu",
    "meaning": "메뉴"
  },
  {
    "word": "message",
    "meaning": "메시지"
  },
  {
    "word": "midnight",
    "meaning": "자정"
  },
  {
    "word": "milk",
    "meaning": "우유"
  },
  {
    "word": "million",
    "meaning": "백만"
  },
  {
    "word": "minute",
    "meaning": "분"
  },
  {
    "word": "miss",
    "meaning": "그리워하다"
  },
  {
    "word": "mistake",
    "meaning": "실수"
  },
  {
    "word": "model",
    "meaning": "모델"
  },
  {
    "word": "modern",
    "meaning": "현대의"
  },
  {
    "word": "moment",
    "meaning": "순간"
  },
  {
    "word": "money",
    "meaning": "돈"
  },
  {
    "word": "month",
    "meaning": "월"
  },
  {
    "word": "morning",
    "meaning": "아침"
  },
  {
    "word": "mother",
    "meaning": "어머니"
  },
  {
    "word": "mountain",
    "meaning": "산"
  },
  {
    "word": "mouse",
    "meaning": "쥐, 마우스"
  },
  {
    "word": "mouth",
    "meaning": "입"
  },
  {
    "word": "move",
    "meaning": "움직이다"
  },
  {
    "word": "movie",
    "meaning": "영화"
  },
  {
    "word": "much",
    "meaning": "많은"
  },
  {
    "word": "mum",
    "meaning": "엄마"
  },
  {
    "word": "museum",
    "meaning": "박물관"
  },
  {
    "word": "music",
    "meaning": "음악"
  },
  {
    "word": "must",
    "meaning": "~해야 한다"
  },
  {
    "word": "name",
    "meaning": "이름"
  },
  {
    "word": "natural",
    "meaning": "자연의"
  },
  {
    "word": "near",
    "meaning": "가까운"
  },
  {
    "word": "need",
    "meaning": "필요하다"
  },
  {
    "word": "never",
    "meaning": "절대 ~않다"
  },
  {
    "word": "new",
    "meaning": "새로운"
  },
  {
    "word": "news",
    "meaning": "뉴스"
  },
  {
    "word": "newspaper",
    "meaning": "신문"
  },
  {
    "word": "next",
    "meaning": "다음"
  },
  {
    "word": "nice",
    "meaning": "좋은"
  },
  {
    "word": "night",
    "meaning": "밤"
  },
  {
    "word": "no",
    "meaning": "아니오"
  },
  {
    "word": "north",
    "meaning": "북쪽"
  },
  {
    "word": "nose",
    "meaning": "코"
  },
  {
    "word": "not",
    "meaning": "아니다"
  },
  {
    "word": "note",
    "meaning": "메모"
  },
  {
    "word": "nothing",
    "meaning": "아무것도 없다"
  },
  {
    "word": "now",
    "meaning": "지금"
  },
  {
    "word": "number",
    "meaning": "숫자"
  },
  {
    "word": "nurse",
    "meaning": "간호사"
  },
  {
    "word": "often",
    "meaning": "자주"
  },
  {
    "word": "old",
    "meaning": "늙은, 오래된"
  },
  {
    "word": "only",
    "meaning": "오직"
  },
  {
    "word": "open",
    "meaning": "열린"
  },
  {
    "word": "opinion",
    "meaning": "의견"
  },
  {
    "word": "or",
    "meaning": "또는"
  },
  {
    "word": "orange",
    "meaning": "오렌지"
  },
  {
    "word": "order",
    "meaning": "주문하다"
  },
  {
    "word": "other",
    "meaning": "다른"
  },
  {
    "word": "our",
    "meaning": "우리의"
  },
  {
    "word": "out",
    "meaning": "밖에"
  },
  {
    "word": "outside",
    "meaning": "밖에"
  },
  {
    "word": "over",
    "meaning": "위에"
  },
  {
    "word": "own",
    "meaning": "자신의"
  },
  {
    "word": "page",
    "meaning": "페이지"
  },
  {
    "word": "paint",
    "meaning": "그리다"
  },
  {
    "word": "paper",
    "meaning": "종이"
  },
  {
    "word": "parent",
    "meaning": "부모"
  },
  {
    "word": "park",
    "meaning": "공원"
  },
  {
    "word": "part",
    "meaning": "부분"
  },
  {
    "word": "partner",
    "meaning": "파트너"
  },
  {
    "word": "party",
    "meaning": "파티"
  },
  {
    "word": "passport",
    "meaning": "여권"
  },
  {
    "word": "pay",
    "meaning": "지불하다"
  },
  {
    "word": "pen",
    "meaning": "펜"
  },
  {
    "word": "pencil",
    "meaning": "연필"
  },
  {
    "word": "people",
    "meaning": "사람들"
  },
  {
    "word": "pepper",
    "meaning": "후추"
  },
  {
    "word": "perfect",
    "meaning": "완벽한"
  },
  {
    "word": "person",
    "meaning": "사람"
  },
  {
    "word": "personal",
    "meaning": "개인적인"
  },
  {
    "word": "phone",
    "meaning": "전화"
  },
  {
    "word": "photo",
    "meaning": "사진"
  },
  {
    "word": "photograph",
    "meaning": "사진"
  },
  {
    "word": "phrase",
    "meaning": "구절"
  },
  {
    "word": "piano",
    "meaning": "피아노"
  },
  {
    "word": "picture",
    "meaning": "그림"
  },
  {
    "word": "piece",
    "meaning": "조각"
  },
  {
    "word": "pig",
    "meaning": "돼지"
  },
  {
    "word": "pink",
    "meaning": "분홍색"
  },
  {
    "word": "place",
    "meaning": "장소"
  },
  {
    "word": "plan",
    "meaning": "계획"
  },
  {
    "word": "plane",
    "meaning": "비행기"
  },
  {
    "word": "plant",
    "meaning": "식물"
  },
  {
    "word": "play",
    "meaning": "놀다"
  },
  {
    "word": "player",
    "meaning": "선수"
  },
  {
    "word": "please",
    "meaning": "제발"
  },
  {
    "word": "point",
    "meaning": "점"
  },
  {
    "word": "police",
    "meaning": "경찰"
  },
  {
    "word": "pool",
    "meaning": "수영장"
  },
  {
    "word": "poor",
    "meaning": "가난한"
  },
  {
    "word": "popular",
    "meaning": "인기있는"
  },
  {
    "word": "possible",
    "meaning": "가능한"
  },
  {
    "word": "post",
    "meaning": "우편, 게시하다"
  },
  {
    "word": "potato",
    "meaning": "감자"
  },
  {
    "word": "pound",
    "meaning": "파운드"
  },
  {
    "word": "practice",
    "meaning": "연습"
  },
  {
    "word": "practise",
    "meaning": "연습하다"
  },
  {
    "word": "prefer",
    "meaning": "선호하다"
  },
  {
    "word": "prepare",
    "meaning": "준비하다"
  },
  {
    "word": "present",
    "meaning": "선물, 현재"
  },
  {
    "word": "pretty",
    "meaning": "예쁜"
  },
  {
    "word": "price",
    "meaning": "가격"
  },
  {
    "word": "probably",
    "meaning": "아마도"
  },
  {
    "word": "problem",
    "meaning": "문제"
  },
  {
    "word": "product",
    "meaning": "제품"
  },
  {
    "word": "programme",
    "meaning": "프로그램"
  },
  {
    "word": "project",
    "meaning": "프로젝트"
  },
  {
    "word": "purple",
    "meaning": "보라색"
  },
  {
    "word": "put",
    "meaning": "놓다"
  },
  {
    "word": "question",
    "meaning": "질문"
  },
  {
    "word": "quick",
    "meaning": "빠른"
  },
  {
    "word": "quickly",
    "meaning": "빠르게"
  },
  {
    "word": "quiet",
    "meaning": "조용한"
  },
  {
    "word": "quite",
    "meaning": "꽤"
  },
  {
    "word": "radio",
    "meaning": "라디오"
  },
  {
    "word": "rain",
    "meaning": "비"
  },
  {
    "word": "read",
    "meaning": "읽다"
  },
  {
    "word": "ready",
    "meaning": "준비된"
  },
  {
    "word": "real",
    "meaning": "진짜의"
  },
  {
    "word": "really",
    "meaning": "정말"
  },
  {
    "word": "reason",
    "meaning": "이유"
  },
  {
    "word": "red",
    "meaning": "빨간색"
  },
  {
    "word": "relax",
    "meaning": "쉬다"
  },
  {
    "word": "remember",
    "meaning": "기억하다"
  },
  {
    "word": "repeat",
    "meaning": "반복하다"
  },
  {
    "word": "report",
    "meaning": "보고서"
  },
  {
    "word": "restaurant",
    "meaning": "식당"
  },
  {
    "word": "result",
    "meaning": "결과"
  },
  {
    "word": "return",
    "meaning": "돌아오다"
  },
  {
    "word": "rice",
    "meaning": "쌀"
  },
  {
    "word": "rich",
    "meaning": "부유한"
  },
  {
    "word": "ride",
    "meaning": "타다"
  },
  {
    "word": "right",
    "meaning": "오른쪽, 옳은"
  },
  {
    "word": "river",
    "meaning": "강"
  },
  {
    "word": "road",
    "meaning": "도로"
  },
  {
    "word": "room",
    "meaning": "방"
  },
  {
    "word": "rule",
    "meaning": "규칙"
  },
  {
    "word": "run",
    "meaning": "달리다"
  },
  {
    "word": "sad",
    "meaning": "슬픈"
  },
  {
    "word": "salad",
    "meaning": "샐러드"
  },
  {
    "word": "salt",
    "meaning": "소금"
  },
  {
    "word": "same",
    "meaning": "같은"
  },
  {
    "word": "sandwich",
    "meaning": "샌드위치"
  },
  {
    "word": "say",
    "meaning": "말하다"
  },
  {
    "word": "school",
    "meaning": "학교"
  },
  {
    "word": "science",
    "meaning": "과학"
  },
  {
    "word": "scientist",
    "meaning": "과학자"
  },
  {
    "word": "sea",
    "meaning": "바다"
  },
  {
    "word": "see",
    "meaning": "보다"
  },
  {
    "word": "sell",
    "meaning": "팔다"
  },
  {
    "word": "send",
    "meaning": "보내다"
  },
  {
    "word": "sentence",
    "meaning": "문장"
  },
  {
    "word": "seven",
    "meaning": 7
  },
  {
    "word": "share",
    "meaning": "나누다"
  },
  {
    "word": "she",
    "meaning": "그녀"
  },
  {
    "word": "shirt",
    "meaning": "셔츠"
  },
  {
    "word": "shoe",
    "meaning": "신발"
  },
  {
    "word": "shop",
    "meaning": "가게"
  },
  {
    "word": "shopping",
    "meaning": "쇼핑"
  },
  {
    "word": "short",
    "meaning": "짧은"
  },
  {
    "word": "should",
    "meaning": "~해야 한다"
  },
  {
    "word": "show",
    "meaning": "보여주다"
  },
  {
    "word": "shower",
    "meaning": "샤워"
  },
  {
    "word": "sick",
    "meaning": "아픈"
  },
  {
    "word": "similar",
    "meaning": "비슷한"
  },
  {
    "word": "sing",
    "meaning": "노래하다"
  },
  {
    "word": "singer",
    "meaning": "가수"
  },
  {
    "word": "sister",
    "meaning": "여자형제"
  },
  {
    "word": "sit",
    "meaning": "앉다"
  },
  {
    "word": "situation",
    "meaning": "상황"
  },
  {
    "word": "six",
    "meaning": 6
  },
  {
    "word": "skill",
    "meaning": "기술"
  },
  {
    "word": "skirt",
    "meaning": "치마"
  },
  {
    "word": "sleep",
    "meaning": "자다"
  },
  {
    "word": "slow",
    "meaning": "느린"
  },
  {
    "word": "small",
    "meaning": "작은"
  },
  {
    "word": "snow",
    "meaning": "눈"
  },
  {
    "word": "so",
    "meaning": "그래서"
  },
  {
    "word": "some",
    "meaning": "약간"
  },
  {
    "word": "somebody",
    "meaning": "누군가"
  },
  {
    "word": "someone",
    "meaning": "누군가"
  },
  {
    "word": "something",
    "meaning": "무언가"
  },
  {
    "word": "sometimes",
    "meaning": "때때로"
  },
  {
    "word": "son",
    "meaning": "아들"
  },
  {
    "word": "song",
    "meaning": "노래"
  },
  {
    "word": "soon",
    "meaning": "곧"
  },
  {
    "word": "sorry",
    "meaning": "미안한"
  },
  {
    "word": "sound",
    "meaning": "소리"
  },
  {
    "word": "soup",
    "meaning": "수프"
  },
  {
    "word": "south",
    "meaning": "남쪽"
  },
  {
    "word": "speak",
    "meaning": "말하다"
  },
  {
    "word": "special",
    "meaning": "특별한"
  },
  {
    "word": "spell",
    "meaning": "철자를 말하다"
  },
  {
    "word": "spend",
    "meaning": "소비하다"
  },
  {
    "word": "sport",
    "meaning": "스포츠"
  },
  {
    "word": "spring",
    "meaning": "봄"
  },
  {
    "word": "stand",
    "meaning": "서다"
  },
  {
    "word": "star",
    "meaning": "별"
  },
  {
    "word": "start",
    "meaning": "시작하다"
  },
  {
    "word": "station",
    "meaning": "역"
  },
  {
    "word": "stay",
    "meaning": "머물다"
  },
  {
    "word": "still",
    "meaning": "여전히"
  },
  {
    "word": "stop",
    "meaning": "멈추다"
  },
  {
    "word": "story",
    "meaning": "이야기"
  },
  {
    "word": "street",
    "meaning": "거리"
  },
  {
    "word": "strong",
    "meaning": "강한"
  },
  {
    "word": "student",
    "meaning": "학생"
  },
  {
    "word": "study",
    "meaning": "공부하다"
  },
  {
    "word": "style",
    "meaning": "스타일"
  },
  {
    "word": "subject",
    "meaning": "과목"
  },
  {
    "word": "success",
    "meaning": "성공"
  },
  {
    "word": "sugar",
    "meaning": "설탕"
  },
  {
    "word": "summer",
    "meaning": "여름"
  },
  {
    "word": "sun",
    "meaning": "태양"
  },
  {
    "word": "supermarket",
    "meaning": "슈퍼마켓"
  },
  {
    "word": "sure",
    "meaning": "확신하는"
  },
  {
    "word": "sweater",
    "meaning": "스웨터"
  },
  {
    "word": "swim",
    "meaning": "수영하다"
  },
  {
    "word": "swimming",
    "meaning": "수영"
  },
  {
    "word": "table",
    "meaning": "테이블"
  },
  {
    "word": "take",
    "meaning": "취하다"
  },
  {
    "word": "talk",
    "meaning": "이야기하다"
  },
  {
    "word": "tall",
    "meaning": "키가 큰"
  },
  {
    "word": "taxi",
    "meaning": "택시"
  },
  {
    "word": "tea",
    "meaning": "차"
  },
  {
    "word": "teach",
    "meaning": "가르치다"
  },
  {
    "word": "teacher",
    "meaning": "선생님"
  },
  {
    "word": "team",
    "meaning": "팀"
  },
  {
    "word": "teenager",
    "meaning": "십대"
  },
  {
    "word": "telephone",
    "meaning": "전화"
  },
  {
    "word": "television",
    "meaning": "텔레비전"
  },
  {
    "word": "tell",
    "meaning": "말하다"
  },
  {
    "word": "ten",
    "meaning": 10
  },
  {
    "word": "tennis",
    "meaning": "테니스"
  },
  {
    "word": "terrible",
    "meaning": "끔찍한"
  },
  {
    "word": "test",
    "meaning": "시험"
  },
  {
    "word": "text",
    "meaning": "문자"
  },
  {
    "word": "than",
    "meaning": "~보다"
  },
  {
    "word": "thank",
    "meaning": "감사하다"
  },
  {
    "word": "that",
    "meaning": "그것"
  },
  {
    "word": "the",
    "meaning": "그 (정관사)"
  },
  {
    "word": "theatre",
    "meaning": "극장"
  },
  {
    "word": "their",
    "meaning": "그들의"
  },
  {
    "word": "them",
    "meaning": "그들을"
  },
  {
    "word": "then",
    "meaning": "그때"
  },
  {
    "word": "there",
    "meaning": "거기에"
  },
  {
    "word": "they",
    "meaning": "그들"
  },
  {
    "word": "thing",
    "meaning": "것"
  },
  {
    "word": "think",
    "meaning": "생각하다"
  },
  {
    "word": "this",
    "meaning": "이것"
  },
  {
    "word": "thousand",
    "meaning": "천"
  },
  {
    "word": "three",
    "meaning": 3
  },
  {
    "word": "through",
    "meaning": "~을 통해"
  },
  {
    "word": "ticket",
    "meaning": "표"
  },
  {
    "word": "time",
    "meaning": "시간"
  },
  {
    "word": "tired",
    "meaning": "피곤한"
  },
  {
    "word": "title",
    "meaning": "제목"
  },
  {
    "word": "to",
    "meaning": "~에게"
  },
  {
    "word": "today",
    "meaning": "오늘"
  },
  {
    "word": "together",
    "meaning": "함께"
  },
  {
    "word": "toilet",
    "meaning": "화장실"
  },
  {
    "word": "tomato",
    "meaning": "토마토"
  },
  {
    "word": "tomorrow",
    "meaning": "내일"
  },
  {
    "word": "tonight",
    "meaning": "오늘 밤"
  },
  {
    "word": "too",
    "meaning": "너무, 또한"
  },
  {
    "word": "tooth",
    "meaning": "이"
  },
  {
    "word": "topic",
    "meaning": "주제"
  },
  {
    "word": "tourist",
    "meaning": "관광객"
  },
  {
    "word": "town",
    "meaning": "마을"
  },
  {
    "word": "traffic",
    "meaning": "교통"
  },
  {
    "word": "train",
    "meaning": "기차"
  },
  {
    "word": "travel",
    "meaning": "여행하다"
  },
  {
    "word": "tree",
    "meaning": "나무"
  },
  {
    "word": "trip",
    "meaning": "여행"
  },
  {
    "word": "trousers",
    "meaning": "바지"
  },
  {
    "word": true,
    "meaning": "사실인"
  },
  {
    "word": "try",
    "meaning": "시도하다"
  },
  {
    "word": "T-shirt",
    "meaning": "티셔츠"
  },
  {
    "word": "turn",
    "meaning": "돌다"
  },
  {
    "word": "TV",
    "meaning": "TV"
  },
  {
    "word": "twelve",
    "meaning": 12
  },
  {
    "word": "twenty",
    "meaning": 20
  },
  {
    "word": "twice",
    "meaning": "두 번"
  },
  {
    "word": "two",
    "meaning": 2
  },
  {
    "word": "type",
    "meaning": "종류"
  },
  {
    "word": "umbrella",
    "meaning": "우산"
  },
  {
    "word": "uncle",
    "meaning": "삼촌"
  },
  {
    "word": "under",
    "meaning": "아래에"
  },
  {
    "word": "understand",
    "meaning": "이해하다"
  },
  {
    "word": "university",
    "meaning": "대학교"
  },
  {
    "word": "until",
    "meaning": "~까지"
  },
  {
    "word": "up",
    "meaning": "위로"
  },
  {
    "word": "use",
    "meaning": "사용하다"
  },
  {
    "word": "useful",
    "meaning": "유용한"
  },
  {
    "word": "usually",
    "meaning": "보통"
  },
  {
    "word": "vacation",
    "meaning": "방학"
  },
  {
    "word": "vegetable",
    "meaning": "채소"
  },
  {
    "word": "very",
    "meaning": "매우"
  },
  {
    "word": "video",
    "meaning": "비디오"
  },
  {
    "word": "village",
    "meaning": "마을"
  },
  {
    "word": "visit",
    "meaning": "방문하다"
  },
  {
    "word": "visitor",
    "meaning": "방문객"
  },
  {
    "word": "wait",
    "meaning": "기다리다"
  },
  {
    "word": "waiter",
    "meaning": "웨이터"
  },
  {
    "word": "wake",
    "meaning": "깨다"
  },
  {
    "word": "walk",
    "meaning": "걷다"
  },
  {
    "word": "wall",
    "meaning": "벽"
  },
  {
    "word": "want",
    "meaning": "원하다"
  },
  {
    "word": "warm",
    "meaning": "따뜻한"
  },
  {
    "word": "wash",
    "meaning": "씻다"
  },
  {
    "word": "watch",
    "meaning": "보다, 시계"
  },
  {
    "word": "water",
    "meaning": "물"
  },
  {
    "word": "way",
    "meaning": "방법, 길"
  },
  {
    "word": "we",
    "meaning": "우리"
  },
  {
    "word": "wear",
    "meaning": "입다"
  },
  {
    "word": "weather",
    "meaning": "날씨"
  },
  {
    "word": "website",
    "meaning": "웹사이트"
  },
  {
    "word": "week",
    "meaning": "주"
  },
  {
    "word": "weekend",
    "meaning": "주말"
  },
  {
    "word": "well",
    "meaning": "잘"
  },
  {
    "word": "west",
    "meaning": "서쪽"
  },
  {
    "word": "what",
    "meaning": "무엇"
  },
  {
    "word": "when",
    "meaning": "언제"
  },
  {
    "word": "where",
    "meaning": "어디"
  },
  {
    "word": "which",
    "meaning": "어느"
  },
  {
    "word": "white",
    "meaning": "흰색"
  },
  {
    "word": "who",
    "meaning": "누구"
  },
  {
    "word": "why",
    "meaning": "왜"
  },
  {
    "word": "wife",
    "meaning": "아내"
  },
  {
    "word": "will",
    "meaning": "~할 것이다"
  },
  {
    "word": "win",
    "meaning": "이기다"
  },
  {
    "word": "window",
    "meaning": "창문"
  },
  {
    "word": "wine",
    "meaning": "와인"
  },
  {
    "word": "winter",
    "meaning": "겨울"
  },
  {
    "word": "with",
    "meaning": "~와 함께"
  },
  {
    "word": "without",
    "meaning": "~없이"
  },
  {
    "word": "woman",
    "meaning": "여자"
  },
  {
    "word": "wonderful",
    "meaning": "훌륭한"
  },
  {
    "word": "word",
    "meaning": "단어"
  },
  {
    "word": "work",
    "meaning": "일하다"
  },
  {
    "word": "world",
    "meaning": "세계"
  },
  {
    "word": "would",
    "meaning": "~할 것이다"
  },
  {
    "word": "write",
    "meaning": "쓰다"
  },
  {
    "word": "wrong",
    "meaning": "틀린"
  },
  {
    "word": "year",
    "meaning": "해"
  },
  {
    "word": "yes",
    "meaning": "예"
  },
  {
    "word": "yesterday",
    "meaning": "어제"
  },
  {
    "word": "you",
    "meaning": "너"
  },
  {
    "word": "young",
    "meaning": "어린"
  },
  {
    "word": "your",
    "meaning": "너의"
  },
  {
    "word": "ability",
    "meaning": "능력"
  },
  {
    "word": "able",
    "meaning": "할 수 있는"
  },
  {
    "word": "abroad",
    "meaning": "해외에"
  },
  {
    "word": "accept",
    "meaning": "받아들이다"
  },
  {
    "word": "accident",
    "meaning": "사고"
  },
  {
    "word": "achieve",
    "meaning": "성취하다"
  },
  {
    "word": "active",
    "meaning": "활동적인"
  },
  {
    "word": "actually",
    "meaning": "실제로"
  },
  {
    "word": "advantage",
    "meaning": "장점"
  },
  {
    "word": "adventure",
    "meaning": "모험"
  },
  {
    "word": "advertise",
    "meaning": "광고하다"
  },
  {
    "word": "advertisement",
    "meaning": "광고"
  },
  {
    "word": "affect",
    "meaning": "영향을 미치다"
  },
  {
    "word": "airline",
    "meaning": "항공사"
  },
  {
    "word": "alive",
    "meaning": "살아있는"
  },
  {
    "word": "allow",
    "meaning": "허락하다"
  },
  {
    "word": "almost",
    "meaning": "거의"
  },
  {
    "word": "alone",
    "meaning": "혼자"
  },
  {
    "word": "already",
    "meaning": "이미"
  },
  {
    "word": "although",
    "meaning": "비록 ~이지만"
  },
  {
    "word": "amount",
    "meaning": "양"
  },
  {
    "word": "ancient",
    "meaning": "고대의"
  },
  {
    "word": "ankle",
    "meaning": "발목"
  },
  {
    "word": "anyway",
    "meaning": "어쨌든"
  },
  {
    "word": "anywhere",
    "meaning": "어디서나"
  },
  {
    "word": "app",
    "meaning": "앱"
  },
  {
    "word": "appear",
    "meaning": "나타나다"
  },
  {
    "word": "appearance",
    "meaning": "외모"
  },
  {
    "word": "apply",
    "meaning": "지원하다"
  },
  {
    "word": "argue",
    "meaning": "논쟁하다"
  },
  {
    "word": "argument",
    "meaning": "논쟁"
  },
  {
    "word": "army",
    "meaning": "군대"
  },
  {
    "word": "arrange",
    "meaning": "정리하다"
  },
  {
    "word": "assistant",
    "meaning": "조수"
  },
  {
    "word": "athlete",
    "meaning": "운동선수"
  },
  {
    "word": "attack",
    "meaning": "공격"
  },
  {
    "word": "attend",
    "meaning": "참석하다"
  },
  {
    "word": "attention",
    "meaning": "주의"
  },
  {
    "word": "attractive",
    "meaning": "매력적인"
  },
  {
    "word": "audience",
    "meaning": "청중"
  },
  {
    "word": "author",
    "meaning": "작가"
  },
  {
    "word": "available",
    "meaning": "이용 가능한"
  },
  {
    "word": "average",
    "meaning": "평균"
  },
  {
    "word": "avoid",
    "meaning": "피하다"
  },
  {
    "word": "award",
    "meaning": "상"
  },
  {
    "word": "awful",
    "meaning": "끔찍한"
  },
  {
    "word": "background",
    "meaning": "배경"
  },
  {
    "word": "badly",
    "meaning": "나쁘게"
  },
  {
    "word": "bar",
    "meaning": "막대기"
  },
  {
    "word": "baseball",
    "meaning": "야구"
  },
  {
    "word": "basketball",
    "meaning": "농구"
  },
  {
    "word": "beat",
    "meaning": "이기다"
  },
  {
    "word": "beef",
    "meaning": "쇠고기"
  },
  {
    "word": "behave",
    "meaning": "행동하다"
  },
  {
    "word": "behaviour",
    "meaning": "행동"
  },
  {
    "word": "belong",
    "meaning": "속하다"
  },
  {
    "word": "belt",
    "meaning": "벨트"
  },
  {
    "word": "benefit",
    "meaning": "혜택"
  },
  {
    "word": "billion",
    "meaning": "10억"
  },
  {
    "word": "biology",
    "meaning": "생물학"
  },
  {
    "word": "birth",
    "meaning": "탄생"
  },
  {
    "word": "blood",
    "meaning": "피"
  },
  {
    "word": "bone",
    "meaning": "뼈"
  },
  {
    "word": "borrow",
    "meaning": "빌리다"
  },
  {
    "word": "boss",
    "meaning": "상사"
  },
  {
    "word": "bottom",
    "meaning": "바닥"
  },
  {
    "word": "bowl",
    "meaning": "그릇"
  },
  {
    "word": "brain",
    "meaning": "뇌"
  },
  {
    "word": "bridge",
    "meaning": "다리"
  },
  {
    "word": "bright",
    "meaning": "밝은"
  },
  {
    "word": "brilliant",
    "meaning": "훌륭한"
  },
  {
    "word": "broken",
    "meaning": "고장난"
  },
  {
    "word": "brush",
    "meaning": "솔질하다"
  },
  {
    "word": "burn",
    "meaning": "타다"
  },
  {
    "word": "camp",
    "meaning": "캠프"
  },
  {
    "word": "care",
    "meaning": "돌보다"
  },
  {
    "word": "careful",
    "meaning": "조심스러운"
  },
  {
    "word": "carefully",
    "meaning": "조심스럽게"
  },
  {
    "word": "carpet",
    "meaning": "카펫"
  },
  {
    "word": "cartoon",
    "meaning": "만화"
  },
  {
    "word": "case",
    "meaning": "경우"
  },
  {
    "word": "cash",
    "meaning": "현금"
  },
  {
    "word": "castle",
    "meaning": "성"
  },
  {
    "word": "catch",
    "meaning": "잡다"
  },
  {
    "word": "cause",
    "meaning": "원인"
  },
  {
    "word": "celebrate",
    "meaning": "축하하다"
  },
  {
    "word": "celebrity",
    "meaning": "유명인"
  },
  {
    "word": "certain",
    "meaning": "확실한"
  },
  {
    "word": "certainly",
    "meaning": "확실히"
  },
  {
    "word": "chance",
    "meaning": "기회"
  },
  {
    "word": "character",
    "meaning": "성격"
  },
  {
    "word": "charity",
    "meaning": "자선단체"
  },
  {
    "word": "chat",
    "meaning": "이야기하다"
  },
  {
    "word": "chef",
    "meaning": "요리사"
  },
  {
    "word": "chemistry",
    "meaning": "화학"
  },
  {
    "word": "choice",
    "meaning": "선택"
  },
  {
    "word": "church",
    "meaning": "교회"
  },
  {
    "word": "clear",
    "meaning": "명확한"
  },
  {
    "word": "clearly",
    "meaning": "명확하게"
  },
  {
    "word": "clever",
    "meaning": "영리한"
  },
  {
    "word": "climate",
    "meaning": "기후"
  },
  {
    "word": "cloud",
    "meaning": "구름"
  },
  {
    "word": "coast",
    "meaning": "해안"
  },
  {
    "word": "code",
    "meaning": "코드"
  },
  {
    "word": "colleague",
    "meaning": "동료"
  },
  {
    "word": "collect",
    "meaning": "수집하다"
  },
  {
    "word": "comedy",
    "meaning": "코미디"
  },
  {
    "word": "comfortable",
    "meaning": "편안한"
  },
  {
    "word": "comment",
    "meaning": "의견"
  },
  {
    "word": "communicate",
    "meaning": "의사소통하다"
  },
  {
    "word": "community",
    "meaning": "지역사회"
  },
  {
    "word": "compete",
    "meaning": "경쟁하다"
  },
  {
    "word": "competition",
    "meaning": "대회"
  },
  {
    "word": "complain",
    "meaning": "불평하다"
  },
  {
    "word": "condition",
    "meaning": "상태"
  },
  {
    "word": "conference",
    "meaning": "회의"
  },
  {
    "word": "connect",
    "meaning": "연결하다"
  },
  {
    "word": "consider",
    "meaning": "고려하다"
  },
  {
    "word": "contain",
    "meaning": "포함하다"
  },
  {
    "word": "continent",
    "meaning": "대륙"
  },
  {
    "word": "continue",
    "meaning": "계속하다"
  },
  {
    "word": "control",
    "meaning": "통제"
  },
  {
    "word": "count",
    "meaning": "세다"
  },
  {
    "word": "couple",
    "meaning": "커플"
  },
  {
    "word": "cover",
    "meaning": "덮다"
  },
  {
    "word": "crazy",
    "meaning": "미친"
  },
  {
    "word": "creative",
    "meaning": "창의적인"
  },
  {
    "word": "crime",
    "meaning": "범죄"
  },
  {
    "word": "criminal",
    "meaning": "범죄자"
  },
  {
    "word": "crowd",
    "meaning": "군중"
  },
  {
    "word": "crowded",
    "meaning": "복잡한"
  },
  {
    "word": "cry",
    "meaning": "울다"
  },
  {
    "word": "cycle",
    "meaning": "자전거 타다"
  },
  {
    "word": "daily",
    "meaning": "매일의"
  },
  {
    "word": "danger",
    "meaning": "위험"
  },
  {
    "word": "data",
    "meaning": "데이터"
  },
  {
    "word": "dead",
    "meaning": "죽은"
  },
  {
    "word": "death",
    "meaning": "죽음"
  },
  {
    "word": "decision",
    "meaning": "결정"
  },
  {
    "word": "deep",
    "meaning": "깊은"
  },
  {
    "word": "definitely",
    "meaning": "분명히"
  },
  {
    "word": "degree",
    "meaning": "학위"
  },
  {
    "word": "dentist",
    "meaning": "치과의사"
  },
  {
    "word": "department",
    "meaning": "부서"
  },
  {
    "word": "depend",
    "meaning": "의존하다"
  },
  {
    "word": "desert",
    "meaning": "사막"
  },
  {
    "word": "designer",
    "meaning": "디자이너"
  },
  {
    "word": "destroy",
    "meaning": "파괴하다"
  },
  {
    "word": "develop",
    "meaning": "발전시키다"
  },
  {
    "word": "device",
    "meaning": "장치"
  },
  {
    "word": "diary",
    "meaning": "일기"
  },
  {
    "word": "digital",
    "meaning": "디지털의"
  },
  {
    "word": "direction",
    "meaning": "방향"
  },
  {
    "word": "director",
    "meaning": "감독"
  },
  {
    "word": "disagree",
    "meaning": "동의하지 않다"
  },
  {
    "word": "disappear",
    "meaning": "사라지다"
  },
  {
    "word": "disaster",
    "meaning": "재해"
  },
  {
    "word": "discover",
    "meaning": "발견하다"
  },
  {
    "word": "disease",
    "meaning": "질병"
  },
  {
    "word": "distance",
    "meaning": "거리"
  },
  {
    "word": "document",
    "meaning": "문서"
  },
  {
    "word": "double",
    "meaning": "두 배의"
  },
  {
    "word": "download",
    "meaning": "다운로드"
  },
  {
    "word": "drama",
    "meaning": "드라마"
  },
  {
    "word": "dream",
    "meaning": "꿈"
  },
  {
    "word": "drop",
    "meaning": "떨어뜨리다"
  },
  {
    "word": "drug",
    "meaning": "약"
  },
  {
    "word": "dry",
    "meaning": "건조한"
  },
  {
    "word": "earn",
    "meaning": "벌다"
  },
  {
    "word": "earth",
    "meaning": "지구"
  },
  {
    "word": "easily",
    "meaning": "쉽게"
  },
  {
    "word": "education",
    "meaning": "교육"
  },
  {
    "word": "effect",
    "meaning": "효과"
  },
  {
    "word": "electricity",
    "meaning": "전기"
  },
  {
    "word": "electronic",
    "meaning": "전자의"
  },
  {
    "word": "employee",
    "meaning": "직원"
  },
  {
    "word": "energy",
    "meaning": "에너지"
  },
  {
    "word": "engine",
    "meaning": "엔진"
  },
  {
    "word": "engineer",
    "meaning": "엔지니어"
  },
  {
    "word": "enormous",
    "meaning": "거대한"
  },
  {
    "word": "environment",
    "meaning": "환경"
  },
  {
    "word": "equipment",
    "meaning": "장비"
  },
  {
    "word": "especially",
    "meaning": "특히"
  },
  {
    "word": "essay",
    "meaning": "에세이"
  },
  {
    "word": "everywhere",
    "meaning": "어디에나"
  },
  {
    "word": "evidence",
    "meaning": "증거"
  },
  {
    "word": "excellent",
    "meaning": "훌륭한"
  },
  {
    "word": "expect",
    "meaning": "기대하다"
  },
  {
    "word": "experience",
    "meaning": "경험"
  },
  {
    "word": "experiment",
    "meaning": "실험"
  },
  {
    "word": "expert",
    "meaning": "전문가"
  },
  {
    "word": "explanation",
    "meaning": "설명"
  },
  {
    "word": "express",
    "meaning": "표현하다"
  },
  {
    "word": "extreme",
    "meaning": "극단적인"
  },
  {
    "word": "extremely",
    "meaning": "극도로"
  },
  {
    "word": "factory",
    "meaning": "공장"
  },
  {
    "word": "fail",
    "meaning": "실패하다"
  },
  {
    "word": "fair",
    "meaning": "공평한"
  },
  {
    "word": "fan",
    "meaning": "팬"
  },
  {
    "word": "fashion",
    "meaning": "패션"
  },
  {
    "word": "fear",
    "meaning": "두려움"
  },
  {
    "word": "feature",
    "meaning": "특징"
  },
  {
    "word": "field",
    "meaning": "들판"
  },
  {
    "word": "fight",
    "meaning": "싸우다"
  },
  {
    "word": "finger",
    "meaning": "손가락"
  },
  {
    "word": "fit",
    "meaning": "맞다, 건강한"
  },
  {
    "word": "fix",
    "meaning": "고치다"
  },
  {
    "word": "flu",
    "meaning": "독감"
  },
  {
    "word": "focus",
    "meaning": "집중하다"
  },
  {
    "word": "foreign",
    "meaning": "외국의"
  },
  {
    "word": "forest",
    "meaning": "숲"
  },
  {
    "word": "formal",
    "meaning": "공식적인"
  },
  {
    "word": "fresh",
    "meaning": "신선한"
  },
  {
    "word": "fridge",
    "meaning": "냉장고"
  },
  {
    "word": "furniture",
    "meaning": "가구"
  },
  {
    "word": "gallery",
    "meaning": "갤러리"
  },
  {
    "word": "gas",
    "meaning": "가스"
  },
  {
    "word": "gate",
    "meaning": "문"
  },
  {
    "word": "general",
    "meaning": "일반적인"
  },
  {
    "word": "gift",
    "meaning": "선물"
  },
  {
    "word": "goal",
    "meaning": "목표"
  },
  {
    "word": "gold",
    "meaning": "금"
  },
  {
    "word": "golf",
    "meaning": "골프"
  },
  {
    "word": "government",
    "meaning": "정부"
  },
  {
    "word": "grass",
    "meaning": "풀"
  },
  {
    "word": "ground",
    "meaning": "땅"
  },
  {
    "word": "guest",
    "meaning": "손님"
  },
  {
    "word": "guide",
    "meaning": "안내하다"
  },
  {
    "word": "habit",
    "meaning": "습관"
  },
  {
    "word": "headache",
    "meaning": "두통"
  },
  {
    "word": "heart",
    "meaning": "심장"
  },
  {
    "word": "heat",
    "meaning": "열"
  },
  {
    "word": "heavy",
    "meaning": "무거운"
  },
  {
    "word": "height",
    "meaning": "높이"
  },
  {
    "word": "hero",
    "meaning": "영웅"
  },
  {
    "word": "hide",
    "meaning": "숨다"
  },
  {
    "word": "hill",
    "meaning": "언덕"
  },
  {
    "word": "hit",
    "meaning": "치다"
  },
  {
    "word": "hockey",
    "meaning": "하키"
  },
  {
    "word": "hold",
    "meaning": "잡다"
  },
  {
    "word": "hole",
    "meaning": "구멍"
  },
  {
    "word": "huge",
    "meaning": "거대한"
  },
  {
    "word": "human",
    "meaning": "인간"
  },
  {
    "word": "hurt",
    "meaning": "다치다"
  },
  {
    "word": "identify",
    "meaning": "확인하다"
  },
  {
    "word": "ill",
    "meaning": "아픈"
  },
  {
    "word": "illness",
    "meaning": "질병"
  },
  {
    "word": "image",
    "meaning": "이미지"
  },
  {
    "word": "immediately",
    "meaning": "즉시"
  },
  {
    "word": "impossible",
    "meaning": "불가능한"
  },
  {
    "word": "increase",
    "meaning": "증가하다"
  },
  {
    "word": "incredible",
    "meaning": "믿을 수 없는"
  },
  {
    "word": "independent",
    "meaning": "독립적인"
  },
  {
    "word": "industry",
    "meaning": "산업"
  },
  {
    "word": "injury",
    "meaning": "부상"
  },
  {
    "word": "insect",
    "meaning": "곤충"
  },
  {
    "word": "inside",
    "meaning": "안에"
  },
  {
    "word": "instruction",
    "meaning": "지시"
  },
  {
    "word": "instrument",
    "meaning": "악기"
  },
  {
    "word": "intelligent",
    "meaning": "지능적인"
  },
  {
    "word": "international",
    "meaning": "국제적인"
  },
  {
    "word": "invention",
    "meaning": "발명"
  },
  {
    "word": "invitation",
    "meaning": "초대"
  },
  {
    "word": "invite",
    "meaning": "초대하다"
  },
  {
    "word": "involve",
    "meaning": "포함하다"
  },
  {
    "word": "item",
    "meaning": "항목"
  },
  {
    "word": "jam",
    "meaning": "잼"
  },
  {
    "word": "jazz",
    "meaning": "재즈"
  },
  {
    "word": "joke",
    "meaning": "농담"
  },
  {
    "word": "journalist",
    "meaning": "기자"
  },
  {
    "word": "jump",
    "meaning": "점프하다"
  },
  {
    "word": "kid",
    "meaning": "아이"
  },
  {
    "word": "kill",
    "meaning": "죽이다"
  },
  {
    "word": "king",
    "meaning": "왕"
  },
  {
    "word": "knee",
    "meaning": "무릎"
  },
  {
    "word": "knife",
    "meaning": "칼"
  },
  {
    "word": "knowledge",
    "meaning": "지식"
  },
  {
    "word": "lady",
    "meaning": "여성"
  },
  {
    "word": "lake",
    "meaning": "호수"
  },
  {
    "word": "lamp",
    "meaning": "램프"
  },
  {
    "word": "laptop",
    "meaning": "노트북"
  },
  {
    "word": "law",
    "meaning": "법"
  },
  {
    "word": "lawyer",
    "meaning": "변호사"
  },
  {
    "word": "lazy",
    "meaning": "게으른"
  },
  {
    "word": "leader",
    "meaning": "리더"
  },
  {
    "word": "lecture",
    "meaning": "강의"
  },
  {
    "word": "lemon",
    "meaning": "레몬"
  },
  {
    "word": "lend",
    "meaning": "빌려주다"
  },
  {
    "word": "level",
    "meaning": "수준"
  },
  {
    "word": "lifestyle",
    "meaning": "생활방식"
  },
  {
    "word": "lift",
    "meaning": "들어올리다"
  },
  {
    "word": "link",
    "meaning": "연결"
  },
  {
    "word": "lock",
    "meaning": "잠그다"
  },
  {
    "word": "loud",
    "meaning": "큰 소리의"
  },
  {
    "word": "luck",
    "meaning": "운"
  },
  {
    "word": "lucky",
    "meaning": "운이 좋은"
  },
  {
    "word": "mail",
    "meaning": "우편"
  },
  {
    "word": "major",
    "meaning": "주요한"
  },
  {
    "word": "manage",
    "meaning": "관리하다"
  },
  {
    "word": "manager",
    "meaning": "관리자"
  },
  {
    "word": "mark",
    "meaning": "표시하다"
  },
  {
    "word": "marry",
    "meaning": "결혼하다"
  },
  {
    "word": "material",
    "meaning": "재료"
  },
  {
    "word": "mathematics",
    "meaning": "수학"
  },
  {
    "word": "matter",
    "meaning": "중요하다"
  },
  {
    "word": "media",
    "meaning": "미디어"
  },
  {
    "word": "medical",
    "meaning": "의학의"
  },
  {
    "word": "medicine",
    "meaning": "약"
  },
  {
    "word": "memory",
    "meaning": "기억"
  },
  {
    "word": "mention",
    "meaning": "언급하다"
  },
  {
    "word": "metal",
    "meaning": "금속"
  },
  {
    "word": "method",
    "meaning": "방법"
  },
  {
    "word": "middle",
    "meaning": "중간"
  },
  {
    "word": "mind",
    "meaning": "마음"
  },
  {
    "word": "mirror",
    "meaning": "거울"
  },
  {
    "word": "mobile",
    "meaning": "이동식의"
  },
  {
    "word": "moon",
    "meaning": "달"
  },
  {
    "word": "movement",
    "meaning": "움직임"
  },
  {
    "word": "musician",
    "meaning": "음악가"
  },
  {
    "word": "narrow",
    "meaning": "좁은"
  },
  {
    "word": "national",
    "meaning": "국가의"
  },
  {
    "word": "nature",
    "meaning": "자연"
  },
  {
    "word": "nearly",
    "meaning": "거의"
  },
  {
    "word": "necessary",
    "meaning": "필요한"
  },
  {
    "word": "neck",
    "meaning": "목"
  },
  {
    "word": "nervous",
    "meaning": "긴장한"
  },
  {
    "word": "network",
    "meaning": "네트워크"
  },
  {
    "word": "noise",
    "meaning": "소음"
  },
  {
    "word": "noisy",
    "meaning": "시끄러운"
  },
  {
    "word": "normal",
    "meaning": "정상적인"
  },
  {
    "word": "normally",
    "meaning": "보통"
  },
  {
    "word": "notice",
    "meaning": "알아채다"
  },
  {
    "word": "novel",
    "meaning": "소설"
  },
  {
    "word": "ocean",
    "meaning": "바다"
  },
  {
    "word": "offer",
    "meaning": "제안하다"
  },
  {
    "word": "oil",
    "meaning": "기름"
  },
  {
    "word": "opportunity",
    "meaning": "기회"
  },
  {
    "word": "option",
    "meaning": "선택지"
  },
  {
    "word": "ordinary",
    "meaning": "평범한"
  },
  {
    "word": "organization",
    "meaning": "조직"
  },
  {
    "word": "organize",
    "meaning": "조직하다"
  },
  {
    "word": "original",
    "meaning": "원래의"
  },
  {
    "word": "outside",
    "meaning": "밖에"
  },
  {
    "word": "oven",
    "meaning": "오븐"
  },
  {
    "word": "pain",
    "meaning": "고통"
  },
  {
    "word": "palace",
    "meaning": "궁전"
  },
  {
    "word": "parking",
    "meaning": "주차"
  },
  {
    "word": "particular",
    "meaning": "특별한"
  },
  {
    "word": "pass",
    "meaning": "지나가다"
  },
  {
    "word": "passenger",
    "meaning": "승객"
  },
  {
    "word": "patient",
    "meaning": "환자"
  },
  {
    "word": "pattern",
    "meaning": "패턴"
  },
  {
    "word": "peace",
    "meaning": "평화"
  },
  {
    "word": "perform",
    "meaning": "공연하다"
  },
  {
    "word": "perhaps",
    "meaning": "아마도"
  },
  {
    "word": "permission",
    "meaning": "허락"
  },
  {
    "word": "personality",
    "meaning": "성격"
  },
  {
    "word": "pet",
    "meaning": "반려동물"
  },
  {
    "word": "physical",
    "meaning": "신체적인"
  },
  {
    "word": "physics",
    "meaning": "물리학"
  },
  {
    "word": "pick",
    "meaning": "고르다"
  },
  {
    "word": "pilot",
    "meaning": "조종사"
  },
  {
    "word": "planet",
    "meaning": "행성"
  },
  {
    "word": "plastic",
    "meaning": "플라스틱"
  },
  {
    "word": "plate",
    "meaning": "접시"
  },
  {
    "word": "platform",
    "meaning": "플랫폼"
  },
  {
    "word": "pocket",
    "meaning": "주머니"
  },
  {
    "word": "polite",
    "meaning": "공손한"
  },
  {
    "word": "pollution",
    "meaning": "오염"
  },
  {
    "word": "population",
    "meaning": "인구"
  },
  {
    "word": "position",
    "meaning": "위치"
  },
  {
    "word": "possibility",
    "meaning": "가능성"
  },
  {
    "word": "poster",
    "meaning": "포스터"
  },
  {
    "word": "power",
    "meaning": "힘"
  },
  {
    "word": "predict",
    "meaning": "예측하다"
  },
  {
    "word": "prevent",
    "meaning": "예방하다"
  },
  {
    "word": "print",
    "meaning": "인쇄하다"
  },
  {
    "word": "prison",
    "meaning": "감옥"
  },
  {
    "word": "prize",
    "meaning": "상"
  },
  {
    "word": "process",
    "meaning": "과정"
  },
  {
    "word": "produce",
    "meaning": "생산하다"
  },
  {
    "word": "professional",
    "meaning": "전문적인"
  },
  {
    "word": "professor",
    "meaning": "교수"
  },
  {
    "word": "progress",
    "meaning": "진행"
  },
  {
    "word": "promise",
    "meaning": "약속하다"
  },
  {
    "word": "protect",
    "meaning": "보호하다"
  },
  {
    "word": "provide",
    "meaning": "제공하다"
  },
  {
    "word": "public",
    "meaning": "공공의"
  },
  {
    "word": "publish",
    "meaning": "출판하다"
  },
  {
    "word": "quality",
    "meaning": "품질"
  },
  {
    "word": "quantity",
    "meaning": "양"
  },
  {
    "word": "queen",
    "meaning": "여왕"
  },
  {
    "word": "race",
    "meaning": "경주"
  },
  {
    "word": "railway",
    "meaning": "철도"
  },
  {
    "word": "raise",
    "meaning": "올리다"
  },
  {
    "word": "rate",
    "meaning": "비율"
  },
  {
    "word": "rather",
    "meaning": "오히려"
  },
  {
    "word": "react",
    "meaning": "반응하다"
  },
  {
    "word": "realize",
    "meaning": "깨닫다"
  },
  {
    "word": "receive",
    "meaning": "받다"
  },
  {
    "word": "recently",
    "meaning": "최근에"
  },
  {
    "word": "recipe",
    "meaning": "레시피"
  },
  {
    "word": "recognize",
    "meaning": "인식하다"
  },
  {
    "word": "recommend",
    "meaning": "추천하다"
  },
  {
    "word": "record",
    "meaning": "기록하다"
  },
  {
    "word": "recycle",
    "meaning": "재활용하다"
  },
  {
    "word": "reduce",
    "meaning": "줄이다"
  },
  {
    "word": "region",
    "meaning": "지역"
  },
  {
    "word": "regular",
    "meaning": "규칙적인"
  },
  {
    "word": "relationship",
    "meaning": "관계"
  },
  {
    "word": "remove",
    "meaning": "제거하다"
  },
  {
    "word": "repair",
    "meaning": "수리하다"
  },
  {
    "word": "replace",
    "meaning": "교체하다"
  },
  {
    "word": "reply",
    "meaning": "대답하다"
  },
  {
    "word": "reporter",
    "meaning": "기자"
  },
  {
    "word": "request",
    "meaning": "요청"
  },
  {
    "word": "research",
    "meaning": "연구하다"
  },
  {
    "word": "respond",
    "meaning": "반응하다"
  },
  {
    "word": "response",
    "meaning": "반응"
  },
  {
    "word": "review",
    "meaning": "검토하다"
  },
  {
    "word": "role",
    "meaning": "역할"
  },
  {
    "word": "roof",
    "meaning": "지붕"
  },
  {
    "word": "route",
    "meaning": "경로"
  },
  {
    "word": "safe",
    "meaning": "안전한"
  },
  {
    "word": "salary",
    "meaning": "월급"
  },
  {
    "word": "sale",
    "meaning": "판매"
  },
  {
    "word": "save",
    "meaning": "저장하다"
  },
  {
    "word": "scared",
    "meaning": "겁먹은"
  },
  {
    "word": "scary",
    "meaning": "무서운"
  },
  {
    "word": "scene",
    "meaning": "장면"
  },
  {
    "word": "schedule",
    "meaning": "일정"
  },
  {
    "word": "score",
    "meaning": "점수"
  },
  {
    "word": "screen",
    "meaning": "화면"
  },
  {
    "word": "search",
    "meaning": "검색하다"
  },
  {
    "word": "season",
    "meaning": "계절"
  },
  {
    "word": "seat",
    "meaning": "자리"
  },
  {
    "word": "secret",
    "meaning": "비밀"
  },
  {
    "word": "seem",
    "meaning": "~처럼 보이다"
  },
  {
    "word": "sense",
    "meaning": "감각"
  },
  {
    "word": "serious",
    "meaning": "심각한"
  },
  {
    "word": "serve",
    "meaning": "섬기다"
  },
  {
    "word": "service",
    "meaning": "서비스"
  },
  {
    "word": "several",
    "meaning": "여러"
  },
  {
    "word": "shake",
    "meaning": "흔들다"
  },
  {
    "word": "shape",
    "meaning": "모양"
  },
  {
    "word": "ship",
    "meaning": "배"
  },
  {
    "word": "shoulder",
    "meaning": "어깨"
  },
  {
    "word": "shout",
    "meaning": "소리치다"
  },
  {
    "word": "side",
    "meaning": "옆"
  },
  {
    "word": "sign",
    "meaning": "표지판"
  },
  {
    "word": "silver",
    "meaning": "은"
  },
  {
    "word": "simple",
    "meaning": "간단한"
  },
  {
    "word": "since",
    "meaning": "~이후로"
  },
  {
    "word": "single",
    "meaning": "단일의"
  },
  {
    "word": "site",
    "meaning": "사이트"
  },
  {
    "word": "size",
    "meaning": "크기"
  },
  {
    "word": "skin",
    "meaning": "피부"
  },
  {
    "word": "sky",
    "meaning": "하늘"
  },
  {
    "word": "smell",
    "meaning": "냄새"
  },
  {
    "word": "smile",
    "meaning": "미소"
  },
  {
    "word": "smoke",
    "meaning": "연기"
  },
  {
    "word": "social",
    "meaning": "사회적인"
  },
  {
    "word": "society",
    "meaning": "사회"
  },
  {
    "word": "soft",
    "meaning": "부드러운"
  },
  {
    "word": "solution",
    "meaning": "해결책"
  },
  {
    "word": "solve",
    "meaning": "해결하다"
  },
  {
    "word": "somewhere",
    "meaning": "어딘가에"
  },
  {
    "word": "sort",
    "meaning": "종류"
  },
  {
    "word": "source",
    "meaning": "출처"
  },
  {
    "word": "specific",
    "meaning": "특정한"
  },
  {
    "word": "speech",
    "meaning": "연설"
  },
  {
    "word": "speed",
    "meaning": "속도"
  },
  {
    "word": "spoon",
    "meaning": "숟가락"
  },
  {
    "word": "square",
    "meaning": "정사각형"
  },
  {
    "word": "stage",
    "meaning": "무대"
  },
  {
    "word": "stamp",
    "meaning": "우표"
  },
  {
    "word": "state",
    "meaning": "상태"
  },
  {
    "word": "steal",
    "meaning": "훔치다"
  },
  {
    "word": "step",
    "meaning": "단계"
  },
  {
    "word": "stomach",
    "meaning": "배"
  },
  {
    "word": "stone",
    "meaning": "돌"
  },
  {
    "word": "store",
    "meaning": "가게"
  },
  {
    "word": "storm",
    "meaning": "폭풍"
  },
  {
    "word": "strange",
    "meaning": "이상한"
  },
  {
    "word": "strategy",
    "meaning": "전략"
  },
  {
    "word": "stress",
    "meaning": "스트레스"
  },
  {
    "word": "structure",
    "meaning": "구조"
  },
  {
    "word": "stupid",
    "meaning": "바보같은"
  },
  {
    "word": "succeed",
    "meaning": "성공하다"
  },
  {
    "word": "successful",
    "meaning": "성공적인"
  },
  {
    "word": "such",
    "meaning": "그런"
  },
  {
    "word": "suddenly",
    "meaning": "갑자기"
  },
  {
    "word": "suggest",
    "meaning": "제안하다"
  },
  {
    "word": "suggestion",
    "meaning": "제안"
  },
  {
    "word": "support",
    "meaning": "지원하다"
  },
  {
    "word": "surprise",
    "meaning": "놀라게 하다"
  },
  {
    "word": "surprised",
    "meaning": "놀란"
  },
  {
    "word": "survey",
    "meaning": "설문조사"
  },
  {
    "word": "sweet",
    "meaning": "달콤한"
  },
  {
    "word": "symbol",
    "meaning": "상징"
  },
  {
    "word": "system",
    "meaning": "시스템"
  },
  {
    "word": "tablet",
    "meaning": "태블릿"
  },
  {
    "word": "target",
    "meaning": "목표"
  },
  {
    "word": "task",
    "meaning": "과업"
  },
  {
    "word": "taste",
    "meaning": "맛"
  },
  {
    "word": "technology",
    "meaning": "기술"
  },
  {
    "word": "temperature",
    "meaning": "온도"
  },
  {
    "word": "term",
    "meaning": "용어"
  },
  {
    "word": "thick",
    "meaning": "두꺼운"
  },
  {
    "word": "thin",
    "meaning": "얇은"
  },
  {
    "word": "thought",
    "meaning": "생각"
  },
  {
    "word": "throw",
    "meaning": "던지다"
  },
  {
    "word": "tip",
    "meaning": "팁"
  },
  {
    "word": "tool",
    "meaning": "도구"
  },
  {
    "word": "top",
    "meaning": "꼭대기"
  },
  {
    "word": "touch",
    "meaning": "만지다"
  },
  {
    "word": "tour",
    "meaning": "여행"
  },
  {
    "word": "tourism",
    "meaning": "관광"
  },
  {
    "word": "towel",
    "meaning": "수건"
  },
  {
    "word": "tower",
    "meaning": "탑"
  },
  {
    "word": "toy",
    "meaning": "장난감"
  },
  {
    "word": "track",
    "meaning": "트랙"
  },
  {
    "word": "tradition",
    "meaning": "전통"
  },
  {
    "word": "traditional",
    "meaning": "전통적인"
  },
  {
    "word": "train",
    "meaning": "훈련하다"
  },
  {
    "word": "training",
    "meaning": "훈련"
  },
  {
    "word": "transport",
    "meaning": "교통"
  },
  {
    "word": "trouble",
    "meaning": "문제"
  },
  {
    "word": "truck",
    "meaning": "트럭"
  },
  {
    "word": "typical",
    "meaning": "전형적인"
  },
  {
    "word": "unfortunately",
    "meaning": "불행히도"
  },
  {
    "word": "unhappy",
    "meaning": "불행한"
  },
  {
    "word": "uniform",
    "meaning": "교복"
  },
  {
    "word": "unit",
    "meaning": "단위"
  },
  {
    "word": "unusual",
    "meaning": "특이한"
  },
  {
    "word": "valley",
    "meaning": "계곡"
  },
  {
    "word": "van",
    "meaning": "밴"
  },
  {
    "word": "variety",
    "meaning": "다양성"
  },
  {
    "word": "vehicle",
    "meaning": "차량"
  },
  {
    "word": "view",
    "meaning": "전망"
  },
  {
    "word": "virus",
    "meaning": "바이러스"
  },
  {
    "word": "voice",
    "meaning": "목소리"
  },
  {
    "word": "war",
    "meaning": "전쟁"
  },
  {
    "word": "wave",
    "meaning": "파도"
  },
  {
    "word": "weak",
    "meaning": "약한"
  },
  {
    "word": "web",
    "meaning": "웹"
  },
  {
    "word": "wedding",
    "meaning": "결혼식"
  },
  {
    "word": "weight",
    "meaning": "무게"
  },
  {
    "word": "wet",
    "meaning": "젖은"
  },
  {
    "word": "wheel",
    "meaning": "바퀴"
  },
  {
    "word": "whole",
    "meaning": "전체의"
  },
  {
    "word": "wild",
    "meaning": "야생의"
  },
  {
    "word": "wind",
    "meaning": "바람"
  },
  {
    "word": "winner",
    "meaning": "승자"
  },
  {
    "word": "wish",
    "meaning": "바라다"
  },
  {
    "word": "wood",
    "meaning": "나무"
  },
  {
    "word": "worried",
    "meaning": "걱정된"
  },
  {
    "word": "worry",
    "meaning": "걱정하다"
  },
  {
    "word": "worse",
    "meaning": "더 나쁜"
  },
  {
    "word": "worst",
    "meaning": "가장 나쁜"
  },
  {
    "word": "yet",
    "meaning": "아직"
  },
  {
    "word": "zero",
    "meaning": "영, 0"
  }
];