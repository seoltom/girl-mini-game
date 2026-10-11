# 무료 BGM / SE 큐레이션 가이드

> 일본·서양 무료 BGM 사이트에서 「그 여름의 기록」 분위기에 맞는 곡을 찾는 가이드.
> 직접 검색 키워드 / 추천 카테고리 / 다운로드·사용 규약까지 정리.

---

## 1. 작품 분위기 → BGM 매핑

| 슬롯 | 분위기 | 검색 키워드 (일본어) | 검색 키워드 (영어) | 권장 길이 |
|---|---|---|---|---|
| `theme_opening` | 여름 교정, 오후 햇살, 잔잔한 시작 | 切ない / 夕方 / 夏の思い出 / ピアノ | summer afternoon / gentle piano / nostalgic | 2~4분 |
| `theme_daily` | 일상, 도서부 앞 복도, 가벼움 | 日常 / 学園生活 / アコースティックギター | daily life / acoustic guitar / light | 2~4분 |
| `theme_tender` | 도서부 안, 나란히 책 읽는 정적 | 図書館 / 静か / ピアノ+ヴァイオリン | quiet library / soft piano / tender | 2~4분 |
| `theme_ending` | 옥상 석양, 결말, 따뜻한 마무리 | エンディング / 夕焼け / 感動 | ending / emotional / piano strings | 2~4분 |

---

## 2. 추천 무료 BGM 사이트 (일본)

### DOVA-SYNDROME (도바 신드로메) — https://dova-s.jp/
- **특징**: 일본 최대 무료 BGM/SE 사이트. 5,000곡 이상.
- **라이선스**: 무료, 크레딧 표기 권장(필수는 아님), 상업 利用 OK.
- **검색 방법**: `検索 → "ジャンル: ピアノ 切ない"` 또는 `タグ: 夏`
- **추천 카테고리 진입**: ジャンル → `癒し系・曲` / `切ない系・曲`

### 甘茶の音楽工房 (아마챠 음악공방) — https://amachamusic.chagasi.com/
- **특징**: 어쿠스틱·잔잔한 곡에 특화. 미연시 분위기에 가장 잘 맞음.
- **라이선스**: 무료, 상업 利用 OK, 크레딧 표기 필요.
- **추천 앨범**: `おとぎ話のような`、`日常の小品集`、`学園生活`

### 魔王魂 (마왕타마) — https://maoudamashii.jokersounds.com/
- **특징**: 게임 BGM 특화. 일렉/로키/동양풍 등 분위기별 곡 풍부.
- **라이선스**: 무료, 상업 利用 OK, 크레딧 표기 필요.
- **추천**: `新着曲` → `school` / `healing` 태그

### 騒音寺 (소온데라) — https://noise寺院.jp/
- **특징**: 어쿠스틱·잔잔·몽환 분위기.
- **라이선스**: 무료, 상업 利用 OK.

---

## 3. 추천 무료 BGM 사이트 (서양)

### Bensound — https://www.bensound.com/
- **특징**: 무료+유료. 무료는 크레딧 표기 필수.
- **추천 검색**: `acoustic` / `romantic` / `sad`

### Incompetech (Kevin MacLeod) — https://incompetech.com/
- **특징**: CC-BY 라이선스 (크레딧 표기 필수). 매우 풍부한 라이브러리.
- **추천 검색**: `acoustic` / `gentle` / `peaceful`

---

## 4. 무료 효과음(SE) 사이트

### 無料効果音ラボ (무료 효과음 연구소) — https://soundeffect-lab.info/
- **특징**: 일본어 효과음 라이브러리. 게임·영상 모두 사용 가능.
- **라이선스**: 무료, 상업 利用 OK, 크레딧 표기 필요 (사이트 링크).
- **추천 SE**:
  - `page` → 책 페이지 넘기는 소리 (도서부 장면)
  - `chime` → 부드러운 종소리 (씬 전환)
  - `door_open` → 문 여는 소리 (도서부 입장)
  - `wind` → 산들바람 (옥상 장면)

### 魔王魂 효과음 — https://maoudamashii.jokersounds.com/listeffect
- **특징**: 게임 효과음 특화. 클릭·메뉴 효과음도 있음.

### 効果音工房 — http://soundeffect.marche.ne.jp/
- **특징**: 일본어 일상 효과음.

---

## 5. 검색 워크플로우

### Step 1 — DOVA-SYNDROME에서 4곡 빠르게 고르기
1. https://dova-s.jp/ 접속
2. `検索` → 키워드 입력 (예: `夏の午後 ピアノ`)
3. 필터: `ジャンル: 切ない / 癒し` / `タグ: 学園`
4. **미리듣기 1분만 들어보고** 4곡 캐치 (`theme_opening`, `theme_daily`, `theme_tender`, `theme_ending`)
5. 각 곡의 `ダウンロード` 클릭 → MP3 다운
6. `assets/bgm/` 에 슬롯 이름으로 저장 (예: `theme_opening.mp3`)

### Step 2 — 효과음 4개 다운
1. https://soundeffect-lab.info/ 접속
2. `ページをめくる音` (페이지 넘김) → `se_page.mp3`
3. `ドアを開ける音` (문 열기) → `se_door.mp3`
4. `鈴の音` (방울 소리) → `se_chime.mp3`
5. `風` (바람) → `se_wind.mp3`
6. `assets/sound/` 에 저장

### Step 3 — 라이선스 표기 페이지 작성 (선택)
- 무료 BGM을 상업적으로 사용할 거라면 `assets/CREDITS.md` 같은 파일에 곡명·작곡가·출처·라이선스를 표기.
- 예: `theme_opening.mp3 — "夏のかけら" by [작곡가] — DOVA-SYNDROME — CC0 / 무료 利用`

---

## 6. 라이선스 비교표

| 사이트 | 무료 | 상업 利用 | 크레딧 | 비고 |
|---|---|---|---|---|
| DOVA-SYNDROME | ✅ | ✅ | 표기 권장(필수 X) | 가장 안전 |
| 甘茶の音楽工房 | ✅ | ✅ | 표기 필수 | 가장 분위기 좋음 |
| 魔王魂 | ✅ | ✅ | 표기 필수 | 게임 BGM 강자 |
| Bensound 무료 | ✅ | ✅ | 표기 필수 | 크레딧 표기 안 하면 유료 |
| Incompetech | ✅ | ✅ | 표기 필수 | 가장 풍부, CC-BY |
| 効果音ラボ | ✅ | ✅ | 표기 필요 | 효과음만 |

---

## 7. 포맷 권장

- **BGM**: MP3 (128~192kbps), 44.1kHz. 모노로 변환하면 용량 절반.
- **파일 크기**: 1곡당 2~5MB 이내 권장 (웹 로딩 시간 고려).
- **루프 처리**: Monogatari는 `loop` 옵션을 시나리오에서 줄 수 있음.
  ```javascript
  'play music theme_opening with volume 55 fade 3 loop'
  ```
- **보컬곡**: 가사가 있는 보컬곡은 BGM으로 쓰지 말고 별도 슬롯으로 (예: `op_vocal`, `ed_vocal`).

---

## 8. 음량 균형 팁

- BGM: `volume 50~65` (대사 끊기지 않을 정도로)
- 효과음: 기본 `volume 90~100` (BGM보다 명확하게)
- 엔딩 BG: `volume 65~70` (엔딩 감정선 살짝 강조)
- 씬 전환 시 `fade 2~3`로 부드럽게 페이드아웃/페이드인

이 가이드대로 `assets/bgm/`과 `assets/sound/`만 채우면 시나리오는 그대로 동작합니다.