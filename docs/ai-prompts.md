# AI 일러스트 프롬프트 가이드

> 미니 데모에서 사용할 캐릭터·배경·CG 일러스트를 AI로 생성하기 위한 프롬프트 모음.
> Midjourney / Stable Diffusion XL / 나노바나나(이미지 생성형) 등 모두 호환되는 영문 프롬프트로 작성.
> 결정 컷만 일러스트레이터에게 보정 의뢰 → 일관성·저작권 모두 안전.

---

## 1. 공통 스타일 토큰 (모든 프롬프트 앞에 붙이기)

```
anime style, visual novel illustration, soft lighting, pastel palette,
high quality, masterpiece, detailed eyes, clean lineart,
```

**권장 네거티브 (거부 프롬프트)**:
```
low quality, blurry, deformed, extra fingers, extra limbs,
3d, photorealistic, ugly, jpeg artifacts, watermark,
```

**비율**:
- 캐릭터 스탠딩: `2:3` (세로)
- 배경: `16:9` (가로, 1920×1080 권장)
- CG: `16:9` (가로, 1920×1080 권장)

---

## 2. 캐릭터 스탠딩 (5종)

### 2-1. `yuna_default.png` — 기본 미소
```
anime style, visual novel illustration,
1girl, 17 years old, brown medium-length hair just below shoulders,
soft gentle expression, school blazer uniform with white shirt and red ribbon tie,
plaid skirt, standing pose, full body, simple white background,
soft lighting, pastel palette, high quality, masterpiece,
```

### 2-2. `yuna_smile.png` — 환하게 웃는 얼굴
```
anime style, visual novel illustration,
1girl, 17 years old, brown medium-length hair just below shoulders,
bright happy smile, dimples, sparkling eyes,
school blazer uniform with white shirt and red ribbon tie, plaid skirt,
standing pose, upper body, simple white background,
soft lighting, pastel palette, high quality, masterpiece,
```

### 2-3. `yuna_shy.png` — 부끄러운 표정
```
anime style, visual novel illustration,
1girl, 17 years old, brown medium-length hair just below shoulders,
embarrassed shy expression, looking away slightly, blushing cheeks,
school blazer uniform with white shirt and red ribbon tie, plaid skirt,
standing pose, upper body, simple white background,
soft lighting, pastel palette, high quality, masterpiece,
```

### 2-4. `yuna_surprise.png` — 놀란 표정
```
anime style, visual novel illustration,
1girl, 17 years old, brown medium-length hair just below shoulders,
surprised expression, slightly open mouth, wide eyes,
school blazer uniform with white shirt and red ribbon tie, plaid skirt,
standing pose, upper body, simple white background,
soft lighting, pastel palette, high quality, masterpiece,
```

### 2-5. `mc_silhouette.png` — 주인공 실루엣
```
anime style, visual novel illustration,
silhouette of a high school boy, short black hair, school uniform,
back view, standing pose, simple white background,
soft lighting, pastel palette, high quality, masterpiece,
```
> 주인공 얼굴은 미연시 관습상 보여주지 않거나 실루엣 처리.

---

## 3. 배경 (4종, 16:9)

### 3-1. `school_courtyard.jpg` — 여름 교정 (오후 햇살)
```
anime style, visual novel background,
japanese high school courtyard, summer afternoon, golden sunlight streaming through trees,
no characters, empty scene, blue sky with cumulus clouds,
vibrant green trees, stone pavement, nostalgic atmosphere,
high quality, masterpiece, no text,
```

### 3-2. `school_hallway.jpg` — 복도
```
anime style, visual novel background,
japanese high school hallway, summer afternoon,
wooden floor, sunlight from windows casting long shadows,
lockers along the wall, nostalgic atmosphere,
no characters, empty scene, high quality, masterpiece, no text,
```

### 3-3. `library_room.jpg` — 도서부 / 도서관
```
anime style, visual novel background,
quiet school library room, summer afternoon,
tall bookshelves filled with books, large wooden tables,
golden sunlight through tall windows, nostalgic atmosphere,
no characters, empty scene, high quality, masterpiece, no text,
```

### 3-4. `rooftop_sunset.jpg` — 옥상 석양
```
anime style, visual novel background,
school rooftop at sunset, orange and pink sky,
silhouette of fence and school building, warm cinematic lighting,
nostalgic atmosphere, summer evening,
no characters, empty scene, high quality, masterpiece, no text,
```

---

## 4. CG (이벤트 일러스트, 3종, 16:9)

### 4-1. `cg_meeting.png` — 도서부 첫 만남 장면
```
anime style, visual novel CG illustration,
japanese high school library room, golden afternoon sunlight through tall windows,
1girl, 17 years old, brown medium-length hair, school uniform with red ribbon tie,
standing near a wooden bookshelf, looking at viewer, gentle smile,
holding a small book, warm lighting, soft pastel palette,
high quality, masterpiece, detailed background, no text,
```

### 4-2. `cg_library.png` — 나란히 책 읽는 장면
```
anime style, visual novel CG illustration,
quiet school library room, warm afternoon sunlight,
1girl, 17 years old, brown medium-length hair, school uniform,
sitting at a wooden table by the window, reading a book,
soft smile, peaceful atmosphere, soft pastel palette,
high quality, masterpiece, detailed background, no text,
```

### 4-3. `cg_ending.png` — 옥상 석양 엔딩
```
anime style, visual novel CG illustration,
school rooftop at sunset, dramatic orange and pink sky,
1girl, 17 years old, brown medium-length hair, school uniform,
standing at fence, back view, hair flowing in summer wind,
golden sunset lighting casting long shadow,
high quality, masterpiece, detailed background, no text,
```

---

## 5. 한국어 AI 도구용 프롬프트 (선택)

Nano Banana·Karloa 같은 한국형 이미지 생성 도구에서는 한국어 프롬프트가 더 잘 작동하는 경우가 있음.

### 유나 (기본)
```
일본 애니메이션 스타일, 비주얼 노벨 일러스트,
17세 소녀, 갈색 단발머리(어깨 약간 아래),
교복(블레이저+빨간 리본 타이+체크 스커트),
부드러운 미소, 온화한 표정,
흰색 배경, 파스텔 톤, 고화질, 걸작,
```

### 여름 교정
```
일본 애니메이션 스타일, 비주얼 노벨 배경,
일본 고등학교 교정, 여름 오후, 햇살이 나뭇잎 사이로 쏟아짐,
사람 없는 풍경, 잔잔한 분위기, 고화질, 걸작, 텍스트 없음,
```

---

## 6. 워크플로우 요약

1. **AI로 시안 생성** (위 프롬프트로 4~8장씩 뽑기)
2. **일관성 고정** — 같은 시드/스타일 토큰으로 통일, 얼굴/의상 일치 확인
3. **배경제거/배경추출** — 캐릭터 PNG는 [remove.bg](https://remove.bg) 또는 로컬 `rembg`로 투명 배경화
4. **결정 컷 보정 의뢰** (선택) — 일러스트레이터 1~2명에게 "이 시안 기반으로 다듬어 달라"고 의뢰. 미연시 컷당 5~15만 원대.
5. **`assets/characters/`, `assets/backgrounds/`, `assets/cg/`에 저장** — 파일명은 위 가이드와 정확히 일치.
6. **로컬에서 즉시 확인** — `python -m http.server 8000` → 브라우저에서 새로고침.

---

## 7. 저작권 안전을 위한 체크리스트

- [ ] AI 생성 이미지를 그대로 상용 배포할 수 있는지 라이선스 확인 (도구별 상이)
- [ ] 결정 컷은 직접 보정 의뢰해 "AI 그대로가 아닌 2차 창작물"로 만드는 게 안전
- [ ] 일본/한국 작가의 참조 이미지를 그대로 따라 그리지 않기 (스타일만 차용)
- [ ] 학교·캐릭터 이름이 실존 작품과 겹치지 않는지 확인