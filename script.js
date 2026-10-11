/* ============================================================
 *  그 여름의 기록 — 미니 데모 시나리오
 *  Monogatari.js v3.4 기반 (표준 패턴: Monogatari.script + Monogatari.run)
 *
 *  검은 화면 이슈 수정:
 *    1) 시나리오 함수를 Monogatari.script = {...} 객체로 분리
 *    2) 'wait 1000,' 처럼 콤마가 들어가던 문법 오류 모두 제거
 *    3) jump 명령은 시나리오 배열의 마지막에 단독으로 위치
 *
 *  자산은 assets/ 폴더의 파일명과 정확히 일치해야 로드됨.
 *  자산이 없으면 콘솔에 404가 뜨지만 시나리오 흐름은 계속 진행.
 * ============================================================ */

'use strict';

/* ============================================================
 *  1. 시나리오 정의 (Monogatari.script)
 * ============================================================ */

Monogatari.script = {

    'Start': function () {
        return [
            'play music theme_opening with volume 55 fade 3',
            'show background school_courtyard with fadeIn 2s',
            'wait 2500',

            'narrator 7월. 방학까지 일주일.',
            'narrator 그 해 여름은 유난히 길었다.',

            'show character yuna_default at center with fadeIn 1.5s',
            'wait 1200',

            'narrator 햇살이 내리쬐는 교정, 어느 오후.',
            'narrator 나는 도서부로 향하는 길이었다.',

            'hide character yuna_default at center with fadeOut 0.8s',
            'show background school_hallway with fadeIn 1.5s',
            'wait 1500',

            'play sound se_door',
            'wait 600',

            'show character yuna_surprise at right with fadeIn 1s',
            'wait 800',

            '유나 저기요...!',
            '유나 혹시 이쪽이 도서부... 맞죠?',

            {
                'Choice': {
                    'Dialog': '유나 저기요...!',
                    'A': {
                        'Text': '응, 맞아. 같이 들어가자.',
                        'Do': 'jump Friendly',
                    },
                    'B': {
                        'Text': '...누구세요?',
                        'Do': 'jump Cautious',
                    },
                },
            },
        ];
    },

    'Friendly': function () {
        return [
            'stop music theme_opening with fade 2',
            'play music theme_daily with volume 50 fade 2',

            '유나 ...에? 같이요?',
            '유나 아, 정말 괜찮아요?!',
            'show character yuna_smile at right with fadeIn 0.4s',

            '유나 다행이다... 혼자 들어가려니까 좀 그랬거든요.',
            '유나 저는 1학년 유나예요. 요리부에 들어왔는데, 도서부도 같이 와도 되냐고 해서요...',
            '유나 어, 근데 선배님은 이름이 어떻게 돼요?',

            {
                'Choice': {
                    'Dialog': '유나 어, 근데 선배님은 이름이 어떻게 돼요?',
                    'A': {
                        'Text': '...성빈. 2학년.',
                        'Do': 'jump Friendly_Name',
                    },
                    'B': {
                        'Text': '이름은 나중에 알려줄게.',
                        'Do': 'jump Friendly_NoName',
                    },
                },
            },
        ];
    },

    'Cautious': function () {
        return [
            'stop music theme_opening with fade 2',
            'play music theme_daily with volume 45 fade 2',

            '유나 아, 죄송해요! 갑자기 불러서...',
            '유나 저는 1학년 유나예요. 도서부에 처음 가보는 길인데, 혹시 같이 들어가주실 수 있어요?',
            'show character yuna_shy at right with fadeIn 0.4s',

            {
                'Choice': {
                    'Dialog': '유나 ...같이 들어가주실 수 있어요?',
                    'A': {
                        'Text': '...좋아.',
                        'Do': 'jump Cautious_Yes',
                    },
                    'B': {
                        'Text': '혼자 갈게.',
                        'Do': 'jump Cautious_No',
                    },
                },
            },
        ];
    },

    'Friendly_Name': function () {
        return [
            '유나 성빈 선배님, 이예요?',
            '유나 어, 좀 특이한 이름이다... 귀여워요.',
            'show character yuna_smile at right with fadeIn 0.4s',
            '유나 그럼, 같이 들어가요, 성빈 선배님.',
            'jump Scene_Library',
        ];
    },

    'Friendly_NoName': function () {
        return [
            '유나 네-네?! 나중에요?',
            '유나 뭐야, 그건 좀 재밌네...',
            'show character yuna_smile at right with fadeIn 0.4s',
            '유나 그럼 일단 같이 들어가요. 이름은 천천히.',
            'jump Scene_Library',
        ];
    },

    'Cautious_Yes': function () {
        return [
            '유나 정말요?!',
            'show character yuna_smile at right with fadeIn 0.4s',
            '유나 고마워요, 선배님...!',
            '유나 아, 저는 1학년 유나예요. 요리부에 들어왔어요.',
            'jump Scene_Library',
        ];
    },

    'Cautious_No': function () {
        return [
            '유나 아... 네.',
            'show character yuna_shy at right with fadeIn 0.4s',
            '유나 혼자 가볼게요... 죄송해요, 불러서.',
            'hide character yuna_shy at right with fadeOut 0.8s',
            'wait 1000',

            'narrator 나는 도서부로 향했다.',
            'narrator 그런데 발걸음이 한 발짝 무거웠다.',
            'narrator 그 여름, 나는 다른 사람을 만나지 못했다.',

            'jump End_Alone',
        ];
    },

    'Scene_Library': function () {
        return [
            'play sound se_door',
            'show background library_room with fadeIn 1.5s',
            'wait 1500',

            'narrator 도서부. 조용한 공기, 책장 사이로 들어오는 오후 햇살.',
            '유나 와... 여기도 좋네요.',
            '유나 책 냄새가 좋아요. 이런 곳이 책 읽는 곳이구나.',

            {
                'Choice': {
                    'Dialog': '유나 책 냄새가 좋아요. 이런 곳이 책 읽는 곳이구나.',
                    'A': {
                        'Text': '책 추천해줄까?',
                        'Do': 'jump Scene_Recommend',
                    },
                    'B': {
                        'Text': '편하게 읽어. 천천히.',
                        'Do': 'jump Scene_FreeRead',
                    },
                },
            },
        ];
    },

    'Scene_Recommend': function () {
        return [
            '유나 추천?! 진짜요?!',
            'show character yuna_smile at right with fadeIn 0.4s',

            '유나 어떤 책이 좋아요?',
            'play sound se_page',
            'wait 600',

            'narrator 나는 잠깐 책장을 훑고, 한 권을 꺼냈다.',
            'narrator 《햇빛은 오래도록 머문다》 — 제목부터 조용한, 그러나 따뜻한 책.',

            '유나 오, 제목부터 좋아요...',
            '유나 이거 읽어보고 싶어요!',

            'show cg cg_library with fadeIn 2s',
            'play music theme_tender with volume 60 fade 3',
            'wait 2500',

            'narrator 그날 이후로, 도서부에서 우리는 자주 마주쳤다.',
            'narrator 나는 종종 같은 책을 손에 들고 자리에 앉았고,',
            'narrator 유나는 어느새 내 옆자리에서 책을 읽고 있었다.',

            'hide cg with fadeOut 1s',
            'jump End_Together',
        ];
    },

    'Scene_FreeRead': function () {
        return [
            '유나 네, 알겠어요. 천천히...',
            'show character yuna_smile at right with fadeIn 0.4s',

            'play sound se_page',
            'wait 600',

            'narrator 우리는 나란히 앉아 책을 읽었다.',
            'narrator 가끔 페이지 넘기는 소리만 들렸고, 그것이 이상하게 편안했다.',

            'show cg cg_meeting with fadeIn 2s',
            'play music theme_tender with volume 60 fade 3',
            'wait 2500',

            'hide cg with fadeOut 1s',
            'jump End_Together',
        ];
    },

    'End_Together': function () {
        return [
            'stop music theme_tender with fade 2',
            'show background rooftop_sunset with fadeIn 2s',
            'play music theme_ending with volume 65 fade 3',
            'wait 2500',

            'show character yuna_default at center with fadeIn 1.5s',
            'wait 1000',

            'narrator 방학 전날, 옥상.',
            'narrator 유나가 햇살을 등지고 서 있었다.',

            '유나 선배님.',
            '유나 그 책, 다 읽었어요.',
            'show character yuna_smile at center with fadeIn 0.4s',

            '유나 ...고마워요. 그 책, 안 좋았으면 하고, 너무 좋아서.',

            'show cg cg_ending with fadeIn 2s',
            'wait 3500',

            'narrator 그 해 여름의 끝에서,',
            'narrator 나는 깨달았다.',
            'narrator 어떤 만남은 계절을 바꾸고, 어떤 계절은 사람을 바꾼다는 것을.',

            'hide cg with fadeOut 1.5s',
            'wait 1000',

            'narrator 그 여름의 기록 — 끝.',
            'narrator 이어지는 이야기는, 다음에.',
            'end',
        ];
    },

    'End_Alone': function () {
        return [
            'stop music theme_daily with fade 2',
            'show background library_room with fadeIn 2s',
            'play music theme_ending with volume 50 fade 3',
            'wait 2500',

            'narrator 그 해 여름은, 조용히 끝이 났다.',
            'narrator 도서부에서 책을 읽다가, 가끔 그 애의 얼굴이 떠올랐지만,',
            'narrator 나는 다시 페이지를 넘겼다.',

            'show cg cg_meeting with fadeIn 2s',
            'wait 3000',

            'narrator 그 여름의 기록 — 끝.',
            'narrator 〈다른 결말〉이 기록되었습니다.',
            'end',
        ];
    },
};

/* ============================================================
 *  2. 엔진 설정 (Monogatari.run)
 * ============================================================ */

Monogatari.run({
    id: 'monogatari',
    assetsPath: './assets/',

    // ----- 작품 메타 -----
    title: '그 여름의 기록',
    subtitle: '— 미니 데모 —',
    author: 'your-name',

    // ----- 언어 (한국어) -----
    language: 'ko',

    // ----- 화면 비율 (16:9) -----
    Resolution: {
        width: 1280,
        height: 720
    },

    // ----- 표시할 UI -----
    Show: {
        Text: true,
        Name: true,
        Choice: true,
        Background: true,
        Character: true,
        CG: true,
        Music: true,
        Sound: true,
        Voice: false,
        Controls: true,
        Save: true,
        Load: true,
        Backlog: true,
        Skip: true,
        Auto: true,
        Settings: true,
    },

    // ----- 자산 등록 (실제 파일명과 일치해야 함) -----
    'Assets': {
        'Backgrounds': {
            'school_courtyard': 'backgrounds/school_courtyard.jpg',
            'school_hallway':   'backgrounds/school_hallway.jpg',
            'library_room':     'backgrounds/library_room.jpg',
            'rooftop_sunset':   'backgrounds/rooftop_sunset.jpg',
        },
        'Characters': {
            'yuna_default':  'characters/yuna_default.png',
            'yuna_smile':    'characters/yuna_smile.png',
            'yuna_shy':      'characters/yuna_shy.png',
            'yuna_surprise': 'characters/yuna_surprise.png',
            'mc_silhouette': 'characters/mc_silhouette.png',
        },
        'CG': {
            'cg_meeting':   'cg/cg_meeting.png',
            'cg_library':   'cg/cg_library.png',
            'cg_ending':    'cg/cg_ending.png',
        },
        'Music': {
            'theme_opening':  'bgm/theme_opening.mp3',
            'theme_daily':    'bgm/theme_daily.mp3',
            'theme_tender':   'bgm/theme_tender.mp3',
            'theme_ending':   'bgm/theme_ending.mp3',
        },
        'Sound': {
            'se_chime':  'sound/se_chime.mp3',
            'se_door':   'sound/se_door.mp3',
            'se_page':   'sound/se_page.mp3',
            'se_wind':   'sound/se_wind.mp3',
        }
    },

    // ----- 진입점 -----
    'Scene': 'Start',
});

/* ============================================================
 *  3. 디버깅용 리스너
 * ============================================================ */

Monogatari.on('load', function () {
    console.info('[그 여름의 기록] Monogatari 엔진 부트 완료. 자산은 assets/ 폴더에 추가하면 자동 로드됩니다.');
});