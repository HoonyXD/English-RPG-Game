const quizBankData = {
    grammar: {
        1: [ // 5학년 Lesson 1-2 (기초: 출신, 소유)
            { q: "Where ( ) you from?", a: ["is", "are", "do", "am"], c: 1 },
            { q: "I'm ( ) Brazil.", a: ["in", "at", "from", "on"], c: 2 },
            { q: "Whose phone is ( )?", a: ["this", "they", "we", "he"], c: 0 },
            { q: "It's ( ) phone.", a: ["Inho", "Inho's", "Inho is", "Inho has"], c: 1 },
            { q: "How ( ) you spell your name?", a: ["is", "are", "do", "can"], c: 2 }
        ],
        2: [ // 5학년 Lesson 3-4 (좋아하는 것, 시간)
            { q: "What's your ( ) subject?", a: ["favorite", "like", "best", "good"], c: 0 },
            { q: "My favorite subject ( ) math.", a: ["am", "are", "is", "do"], c: 2 },
            { q: "What time ( ) you go home?", a: ["is", "are", "does", "do"], c: 3 },
            { q: "I go home ( ) 2:30.", a: ["in", "on", "at", "to"], c: 2 },
            { q: "How ( ) at 4:00?", a: ["about", "is", "time", "do"], c: 0 }
        ],
        3: [ // 5학년 Lesson 5-6 (음식, 장소)
            { q: "What would you ( )?", a: ["like", "likes", "to", "want"], c: 0 },
            { q: "I'd ( ) a steak.", a: ["like", "likes", "want", "have"], c: 0 },
            { q: "It's ( )! (너무 짜)", a: ["salty", "sweet", "hot", "cold"], c: 0 },
            { q: "What's in the ( )?", a: ["kitchen", "stove", "bank", "park"], c: 0 },
            { q: "May I come ( )?", a: ["in", "on", "at", "to"], c: 0 }
        ],
        4: [ // 5학년 Lesson 7-8 (과거, 외모)
            { q: "What ( ) you do during the summer?", a: ["do", "does", "did", "are"], c: 2 },
            { q: "How ( ) your weekend?", a: ["is", "are", "was", "were"], c: 2 },
            { q: "What ( ) he look like?", a: ["do", "does", "is", "are"], c: 1 },
            { q: "He has short ( ) hair.", a: ["curly", "tall", "big", "long"], c: 0 },
            { q: "What's she ( )?", a: ["wear", "wears", "wearing", "to wear"], c: 2 }
        ],
        5: [ // 5학년 Lesson 9-10 (취미, 아픔)
            { q: "What do you do in your ( ) time?", a: ["free", "busy", "easy", "good"], c: 0 },
            { q: "Let's ( ) hiking.", a: ["go", "going", "to go", "goes"], c: 0 },
            { q: "What's ( )?", a: ["wrong", "bad", "sick", "pain"], c: 0 },
            { q: "I have ( ) cold.", a: ["a", "an", "the", "one"], c: 0 },
            { q: "Get ( ) sleep.", a: ["some", "any", "a", "one"], c: 0 }
        ],
        6: [ // 6학년 Lesson 1-3 (순서, 직업, ~ing)
            { q: "I'm in the ( ) grade.", a: ["six", "sixth", "one", "first"], c: 1 },
            { q: "I ( ) to be a pilot.", a: ["want", "wants", "wanting", "to want"], c: 0 },
            { q: "Let's go ( ).", a: ["swim", "swimming", "swims", "to swim"], c: 1 },
            { q: "He ( ) to be a doctor.", a: ["want", "wants", "wanting", "to want"], c: 1 },
            { q: "Let's go ( ) (자전거 타기)", a: ["bike", "biking", "to bike", "bikes"], c: 1 }
        ],
        7: [ // 6학년 Lesson 4-5 (날짜, 계획)
            { q: "When is your ( )?", a: ["birth", "birthday", "day", "date"], c: 1 },
            { q: "I am ( ) to plant trees.", a: ["go", "going", "goes", "to go"], c: 1 },
            { q: "What ( ) you going to do?", a: ["is", "are", "am", "do"], c: 1 },
            { q: "It's ( ) (5월)", a: ["May", "June", "March", "April"], c: 0 },
            { q: "I'm going to ( ) home.", a: ["visit", "visiting", "to visit", "visits"], c: 0 }
        ],
        8: [ // 6학년 Lesson 6-7 (병, 주문)
            { q: "I have a ( ).", a: ["headache", "head", "sick", "pain"], c: 0 },
            { q: "You ( ) see a doctor.", a: ["should", "should to", "shoulding", "shall"], c: 0 },
            { q: "What would you like to ( )?", a: ["have", "has", "having", "to have"], c: 0 },
            { q: "You should ( ) some medicine.", a: ["take", "taking", "takes", "to take"], c: 0 },
            { q: "Would you like ( ) chicken?", a: ["a", "an", "some", "the"], c: 2 }
        ],
        9: [ // 6학년 Lesson 8-9 (비교, 외모)
            { q: "He has ( ) straight hair.", a: ["short", "tall", "long", "big"], c: 0 },
            { q: "I am ( ) than you.", a: ["strong", "stronger", "more strong", "strongest"], c: 1 },
            { q: "She is ( ) than me.", a: ["tall", "taller", "more tall", "tallest"], c: 1 },
            { q: "He has ( ) hair.", a: ["straight", "strong", "fast", "big"], c: 0 },
            { q: "You are ( ) than him.", a: ["fast", "faster", "more fast", "fastest"], c: 1 }
        ],
        10: [ // 6학년 Lesson 10-13 (의견, 감정, 길 찾기)
            { q: "How can I get ( ) the museum?", a: ["to", "at", "in", "on"], c: 0 },
            { q: "What do you ( )?", a: ["think", "thought", "thinking", "to think"], c: 0 },
            { q: "Why ( ) you happy?", a: ["do", "are", "is", "does"], c: 1 },
            { q: "I am happy ( ) I won.", a: ["because", "so", "but", "and"], c: 0 },
            { q: "How can I get ( )?", a: ["there", "to there", "at there", "in there"], c: 0 }
        ]
    }
};