# 「그 여름의 기록」 — 일본 미연시 스타일 미니 데모

> Monogatari.js 기반 웹 브라우저 미연시 게임.
> AI 일러스트 + 무료 BGM으로 프로토타입을 빠르게 만들어 보고, 마음에 들면 확장.

[![Monogatari.js](https://img.shields.io/badge/engine-Monogatari.js-ff5fa2)](https://monogatari.io/)
[![License: CC-BY 4.0](https://img.shields.io/badge/license-CC--BY%204.0-blue)](LICENSE)
[![Status: prototype](https://img.shields.io/badge/status-prototype-yellow)]()

---

## 🚀 빠른 시작 (3분)

### 1. 로컬에서 실행
프로젝트 폴더에서 정적 서버를 띄웁니다.

```bash
cd /Users/seoltom/Work/girl-game
python3 -m http.server 8000
```

브라우저에서 [http://localhost:8000](http://localhost:8000)을 열면 게임 포털이 표시됩니다. 「그 여름의 기록」 카드가 여는 게임 주소는 `/summer/`입니다.

> ⚠️ `file://`로 직접 열면 CORS 때문에 자산이 안 로드됩니다. 반드시 정적 서버로 띄울 것.

### 2. 자산 추가 (`assets/` 폴더만 채우면 됨)
AI 일러스트 가이드 → [`docs/ai-prompts.md`](docs/ai-prompts.md)
BGM/SE 가이드 → [`docs/bgm-se-guide.md`](docs/bgm-se-guide.md)

```
assets/
├── characters/
│   ├── yuna_default.png
│   ├── yuna_smile.png
│   ├── yuna_shy.png
│   ├── yuna_surprise.png
│   └── mc_silhouette.png
├── backgrounds/
│   ├── school_courtyard.jpg   (1920×1080 권장)
│   ├── school_hallway.jpg
│   ├── library_room.jpg
│   └── rooftop_sunset.jpg
├── cg/
│   ├── cg_meeting.png
│   ├── cg_library.png
│   └── cg_ending.png
├── bgm/
│   ├── theme_opening.mp3
│   ├── theme_daily.mp3
│   ├── theme_tender.mp3
│   └── theme_ending.mp3
└── sound/
    ├── se_chime.mp3
    ├── se_door.mp3
    ├── se_page.mp3
    └── se_wind.mp3
```

자산이 없어도 시나리오 흐름은 동작합니다 (이미지/BGM이 비어 보일 뿐).

---

## 📁 폴더 구조

```
girl-game/
├── index.html              # 게임 포털 (/)
├── summer/
│   └── index.html          # 「그 여름의 기록」 게임 (/summer/)
├── portal.css              # 포털 화면 스타일
├── style.css               # 일본 미연시 스타일 커스텀 UI
├── main.js                 # Monogatari 엔진 초기화
├── js/
│   ├── options.js           # 엔진 설정
│   ├── assets.js            # 게임 자산 등록
│   ├── characters.js        # 캐릭터 등록
│   └── script.js            # 시나리오
├── assets/
│   ├── characters/         # 캐릭터 PNG (투명 배경 권장)
│   ├── backgrounds/        # 배경 JPG
│   ├── cg/                 # 이벤트 CG
│   ├── bgm/                # 배경음악 MP3
│   └── sound/              # 효과음 MP3
├── docs/
│   ├── concept.md          # 작품 컨셉 / 등장인물 / 시놉시스
│   ├── ai-prompts.md       # AI 일러스트 생성 프롬프트
│   └── bgm-se-guide.md     # 무료 BGM/SE 큐레이션
└── README.md               # 이 파일
```

---

## 🎮 게임 흐름

1. **타이틀 화면** → "시작" 클릭
2. **Act 1 — 오프닝**: 교정 배경 + 주인공 독백
3. **Act 2 — 첫 만남**: 도서부 앞 복도에서 유나와 마주침 → 선택지 1
   - 친절하게 / 경계하기 → 4가지 루트
4. **Act 3 — 도서부**: 함께 도서부 안 → 선택지 2
   - 책 추천 / 편하게 읽기 → 2가지 결말 변주
5. **Act 4 — 엔딩** (2종):
   - `End_Together` — 함께한 결말 (CG: 옥상 석양)
   - `End_Alone` — 다른 결말 (CG: 빈 도서부)

총 분량: **약 5~7분**, 엔딩 **2종**, CG **3장**, BGM **4곡**, SE **4개**.

---

## 🎨 일본 미연시 UI 규약

`style.css`에서 다음을 커스터마이즈했습니다:

| 요소 | 규칙 |
|---|---|
| 화면 비율 | 16:9 (1280×720) |
| 텍스트박스 | 하단 검정 반투명 (linear-gradient), 흰 글씨 |
| 이름 박스 | 흰 박스 + 검정 글씨, 라운드 2px |
| 컨트롤 버튼 | 우측 상단 동그라미, blur(6px) |
| 페이드 | 0.5~2s ease |
| 폰트 | Noto Serif JP (텍스트) + M PLUS Rounded 1c (UI) |

수정하고 싶다면 `style.css`에서 다음 클래스만 조정:

- `[data-view="text"]` — 텍스트박스
- `[data-view="name"]` — 이름 박스
- `[data-view="choices"]` — 선택지
- `[data-control]` — 세이브/로드/스킵 버튼

---

## 📝 시나리오 편집 (`script.js`)

Monogatari.js 스크립트 포맷:

```javascript
'Scene': function () {
    return [
        'play music theme_opening with volume 55 fade 3',
        'show background school_courtyard with fadeIn 2s',
        'wait 2500',

        'narrator 7월. 방학까지 일주일.',

        '유나 안녕하세요!',

        'choice: {' +
            '"ChoiceA": "안녕." -> "jump Friendly",' +
            '"ChoiceB": "...누구세요?" -> "jump Cautious"' +
        '}',
    ];
},

'Friendly': function () {
    return [...];
},
```

자주 쓰는 명령어:
- `play music <file> with volume X fade Y` — BGM 재생
- `stop music with fade Y` — BGM 정지
- `play sound <file>` — 효과음 1회
- `show background <file> with fadeIn X` — 배경 표시
- `show character <characterExpression> at <position> with fadeIn X` — 캐릭터 표시 (`left` / `center` / `right`)
- `hide character at <position> with fadeOut X` — 캐릭터 숨김
- `show cg <file> with fadeIn X` — CG 표시
- `hide cg with fadeOut X` — CG 숨김
- `wait <ms>` — 정적
- `narrator <text>` — 내레이션
- `<이름> <대사>` — 캐릭터 대사
- `choice: { "<key>": "<label>" -> "jump <Label>" }` — 선택지
- `end` — 게임 종료

---

## 🌐 배포 가이드

### 옵션 A — GitHub Pages (무료, 가장 간단)

```bash
cd /Users/seoltom/Work/girl-game
git init
git add .
git commit -m "Initial: 그 여름의 기록 미니 데모"
# GitHub에서 새 repo 생성 (예: girl-game-public)
git remote add origin https://github.com/<your-id>/<repo>.git
git branch -M main
git push -u origin main
```

GitHub repo → `Settings` → `Pages` → `Source: main / root` → `Save`.
1~2분 후 `https://<your-id>.github.io/<repo>/` 에서 플레이 가능.

### 옵션 B — Netlify Drop (가장 빠름, GUI)

1. https://app.netlify.com/drop 접속
2. `girl-game/` 폴더를 드래그 앤 드롭
3. 30초 후 `https://<random-name>.netlify.app/` URL 받음

### 옵션 C — Vercel (CLI)

```bash
npm i -g vercel
cd /Users/seoltom/Work/girl-game
vercel
```

### 옵션 D — itch.io (미연시/인디게임 특화)

1. https://itch.io/game/new 에서 새 프로젝트 생성
2. `Kind of project: HTML`
3. `girl-game/` 폴더를 zip으로 묶어 업로드
4. `View game → Run game` 으로 즉시 플레이

---

## 🛠 확장 아이디어

이 프로토타입이 마음에 들면:

- [ ] 히로인 추가 (각자 루트·엔딩 1개)
- [ ] 보컬 BGM (오프닝/엔딩 가라오케곡)
- [ ] CG 갤러리 (`gallery.html` 별도 페이지)
- [ ] 한글/일본어 다국어 토글
- [ ] Steam 등록 (itch.io에서 검증 후)
- [ ] 모바일 빌드 (Capacitor / Cordova 로 APK 패키징)

자세한 시놉시스·캐릭터는 [`docs/concept.md`](docs/concept.md) 참고.

---

## 📚 참고 자료

- [Monogatari.js 공식 문서](https://monogatari.io/documentation/)
- [Monogatari GitHub](https://github.com/Monogatari/Monogatari)
- [TyranoScript](https://tyrano.jp/) — 더 일본 미연시 특화 (대안 엔진)
- [Ren'Py](https://www.renpy.org/) — PC 표준 (대안 엔진)

---

## 📜 라이선스

- **엔진**: Monogatari.js (MIT)
- **원작 시나리오·코드**: 본 저장소 (CC-BY 4.0 권장)
- **AI 일러스트**: 각 도구 라이선스 확인 후 사용 (자세한 내용 `docs/ai-prompts.md` §7)
- **BGM/SE**: 출처별 라이선스 표기 필요 (`assets/CREDITS.md` 작성 권장)

만든 사람: **your-name**  
연락처: —

마지막 갱신: 2026-10-10
