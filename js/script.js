/* ============================================================
 *  그 여름의 기록 — 시나리오 (Monogatari v2 API)
 *
 *  톤 가이드 (N — 주인공 명상 독백 강화):
 *    • 주인공(성빈) 1인칭 시점의 명상적 독백을 각 장면의 결에 1~2줄씩 추가
 *    • 한국 정적 미감: 계절·빛·사물·행동으로 간접 표현
 *    • 일본 미연시: 짧은 문장, 호흡을 위한 쉼표, 시적 이미지
 *    • 대사·내레이션의 길이는 짧게 유지 (한 줄 12자 이내 호흡)
 *
 *  형식:
 *    monogatari.script({ 'Label': [...] }) 패턴.
 *    명령어: show scene/image/character, hide, play/stop music, play sound,
 *            wait, '<키> <대사>', 'narrator <대사>', jump, end, { Choice }
 * ============================================================ */

'use strict';

function combineBilingualLines(script) {
    const isJapanese = (text) => /[\u3040-\u30ff\u3400-\u9fff]/.test(text) && !/[\uac00-\ud7af]/.test(text);
    const isKorean = (text) => /[\uac00-\ud7af]/.test(text);
    const translations = {
        '혼자 들어가려니까 좀 그랬거든요.': '一人で入るのは、ちょっと心細くて。',
        '근데 도서부도 가도 되냐 해서...': 'でも、図書部にも行っていいって聞いて…',
        '나는 그 생각을, 이내 접었다.': '僕はその考えを、すぐにしまい込んだ。',
        '이름 없는 시간이, 조금 좋았다.': '名前のない時間が、少し好きだった。',
        '그게 무슨 뜻인지는, 몰랐다.': 'それがどういう意味なのか、わからなかった。',
        '방금, 왜 좋다고 했는지 모르겠다.': 'どうして「いいよ」と言ったのか、自分でもわからなかった。',
        '입이 먼저 움직인 건지도.': '口が先に動いたのかもしれない。',
        '그 여름.': 'あの夏。',
        '나는, 다른 사람을 만나지 못했다.': '僕は、ほかの人に出会わなかった。',
        '만나지 못한 것인지.': '出会えなかったのか。',
        '만나지 않은 것인지는, 아직 모르겠다.': '出会わなかったのかは、まだわからない。',
        '책 냄새.': '本の匂い。',
        '종이 냄새가 아니라, 더 오래된 어떤 것.': '紙の匂いじゃなくて、もっと古い何かの匂い。',
        '나는 잠깐 책장을 훑었다.': '僕は本棚に目を走らせた。',
        '어떤 책을 꺼내야 할지, 이미 알고 있었다.': 'どの本を手に取るか、もう決めていた。',
        '제목부터 조용하고, 따뜻한 책.': '題名からして、静かであたたかい本。',
        '그날 이후로.': 'あの日から。',
        '도서부에서 우리는, 자주 마주쳤다.': '図書部で、僕たちは何度も顔を合わせた。',
        '나는 같은 책을 손에 들고 자리에 앉았고,': '僕は同じ本を手に、席につき、',
        '유나는 어느새, 내 옆자리에서 책을 읽고 있었다.': 'ユナはいつの間にか、隣で本を読んでいた。',
        '그 자리를, 특별하게 부르고 싶지는 않았다.': 'その場所を、特別な名前で呼びたくはなかった。',
        '그냥, 그런 시간이 있다는 것만.': 'ただ、そんな時間があった。それだけ。',
        '우리는 나란히 앉아, 책을 읽었다.': '僕たちは並んで座り、本を読んだ。',
        '페이지 넘기는 소리만 가끔 들렸고.': 'ときおり、ページをめくる音だけが聞こえた。',
        '그것이 이상하게, 편안했다.': 'それが不思議と、心地よかった。',
        '편하다는 말이, 왜 이렇게 무거운지.': '「心地いい」という言葉が、なぜこんなに重いのか。',
        '나는 그때는, 몰랐다.': 'あのときの僕は、知らなかった。',
        '햇살을 등지고 선 사람을,': '日差しを背に立つ人を、',
        '왜 이렇게 오래 기억하게 되는지.': 'どうしてこんなにも長く覚えているのか。',
        '그때는, 몰랐다.': 'あのときは、知らなかった。',
        '그 해 여름의 끝에서.': 'あの夏の終わりに。',
        '나는 알았다.': '僕は気づいた。',
        '어떤 만남은 계절을 바꾸고,': '出会いが季節を変え、',
        '어떤 계절은, 사람을 바꾼다는 것을.': '季節が人を変えることを。',
        '그 여름 이후, 나는 가끔.': 'あの夏から、僕はときどき、',
        '햇살이 긴 오후를, 떠올리게 되었다.': '日差しの長い午後を思い出すようになった。',
        '그 여름의 기록 — 끝.': 'あの夏の記録――おしまい。',
        '이어지는 이야기는, 다음에.': '続きのお話は、また今度。',
        '그 해 여름은, 조용히 끝이 났다.': 'あの夏は、静かに終わった。',
        '도서부에서 책을 읽다가.': '図書部で本を読んでいると、',
        '가끔 그 애의 얼굴이 떠올랐지만.': 'ときどきあの子の顔が浮かんだけれど、',
        '나는 다시, 페이지를 넘겼다.': '僕はまた、ページをめくった。',
        '그게 잘한 일인지.': 'それが正しかったのか。',
        '잘하지 않은 일인지는, 아직 모른다.': 'そうではなかったのか、まだわからない。',
        '〈다른 결말〉이 기록되었습니다.': '〈別の結末〉が記録された。'
    };
    const parseDialogue = (line) => {
        if (typeof line !== 'string') return null;
        const match = line.match(/^(narrator|유나|나)\s+([\s\S]+)$/);
        return match ? { speaker: match[1], text: match[2] } : null;
    };

    for (const lines of Object.values(script)) {
        for (let index = 0; index < lines.length; index++) {
            const current = parseDialogue(lines[index]);
            if (!current || !isKorean(current.text) || !translations[current.text]) continue;
            const previous = parseDialogue(lines[index - 1]);
            if (previous && isJapanese(previous.text)) continue;
            lines.splice(index, 0, `${current.speaker} ${translations[current.text]}`);
            index++;
        }

        for (let index = 0; index < lines.length - 1; index++) {
            const first = parseDialogue(lines[index]);
            const second = parseDialogue(lines[index + 1]);
            if (!first || !second) continue;

            const japanese = isJapanese(first.text) ? first : isJapanese(second.text) ? second : null;
            const korean = isKorean(first.text) ? first : isKorean(second.text) ? second : null;
            if (!japanese || !korean || japanese === korean) continue;

            const speaker = korean.speaker !== 'narrator' ? korean.speaker : japanese.speaker;
            const japaneseText = japanese.text.replace(/^〈([\s\S]*)〉$/, '$1');
            lines[index] = `${speaker} ${japaneseText}\n${korean.text}`;
            lines.splice(index + 1, 1);
        }
    }

    return script;
}

monogatari.script(combineBilingualLines({

    'Start': [
        'play music theme_opening with volume 55 fade 3',
        'show scene school_courtyard with fadeIn',
        'wait 2500',

        'play voice mc_05_july',
        'narrator 7月。',
        'narrator 7월.',
        'play voice mc_06_one_week',
        'narrator 夏休みまで、一週間。',
        'narrator 방학까지, 일주일.',
        'play voice mc_01_summer',
        'show character 유나 default at center with fadeIn',
        'narrator その夏が、長かったと思う。',
        'narrator 그 해 여름이, 길다고 생각했다.',
        'hide character 유나 with fadeOut',

        'play voice mc_07_sun',
        'narrator 日差しが長く寝そべっていた午後。',
        'narrator 햇살이 길게 누워 있던 오후.',
        'play voice mc_02_steps',
        'narrator 足取りは、自然と図書部の方へ向かった。',
        'narrator 발걸음은, 저절로 도서부 쪽을 향했다.',
        'narrator 帰る口実が必要な時間だった。',
        'narrator 돌아갈 핑계가 필요한 시간이었다.',

        'show scene school_hallway with fadeIn',
        'wait 1500',

        'play sound se_door',
        'wait 600',

        'show character 유나 surprise at right with fadeIn',
        'wait 800',

        'play voice yuna_01_greet',
        '유나 저기요...',
        'narrator 〈あの...〉',

        'play voice yuna_02_library',
        '유나 혹시 이쪽이, 도서부?',
        'narrator 〈あちらは図書部ですか?〉',

        {
            'Choice': {
                'Dialog': 'narrator どう答えよう？ / 어떻게 답할까?',
                '같이': {
                    'Text': 'うん、一緒に行こう。\n응. 같이 가자.',
                    'Do': 'jump Friendly'
                },
                '누구세요': {
                    'Text': '……どちら様ですか？\n...누구세요?',
                    'Do': 'jump Cautious'
                }
            }
        }
    ],

    'Friendly': [
        'stop music theme_opening with fade 2',
        'play music theme_daily with volume 50 fade 2',

        'play voice yuna_03_together',
        'narrator え、一緒に?',
        '유나 ...같이요?',

        'play voice yuna_11_okay',
        'narrator ほんと、大丈夫ですか?',
        '유나 정말 괜찮아요?',
        'show character 유나 smile at right with fadeIn',

        'play voice yuna_04_relief',
        'narrator よかった。',
        '유나 다행이다.',
        '유나 혼자 들어가려니까 좀 그랬거든요.',

        'play voice yuna_13_intro',
        'narrator 私は一年のユナです。料理部です。',
        '유나 저는 1학년 유나예요. 요리부에요.',
        '유나 근데 도서부도 가도 되냐 해서...',

        'play voice yuna_05_name',
        'narrator 先輩は、お名前は何ですか?',
        '유나 선배님은, 이름이 어떻게 돼요?',

        {
            'Choice': {
                'Dialog': 'narrator 名前をどう答えよう？ / 이름을 어떻게 답할까?',
                '성빈': {
                    'Text': '……ソンビン。2年生。\n...성빈. 2학년.',
                    'Do': 'jump Friendly_Name'
                },
                '나중에': {
                    'Text': '名前は、また今度教えるよ。\n이름은, 나중에 알려줄게.',
                    'Do': 'jump Friendly_NoName'
                }
            }
        }
    ],

    'Cautious': [
        'stop music theme_opening with fade 2',
        'play music theme_daily with volume 45 fade 2',

        'play voice yuna_15_sorry',
        'narrator あ、ごめんなさい。急に声かけて。',
        '유나 아, 죄송해요. 갑자기 불러서.',

        'play voice yuna_16_firsttime',
        'narrator 一年のユナです。図書部は初めてなんですけど...',
        '유나 1학년 유나예요. 도서부에 처음 가는 길인데...',
        'show character 유나 shy at right with fadeIn',

        'play voice yuna_21_request',
        'narrator もしよかったら、一緒に入ってもらえませんか?',
        '유나 혹시, 같이 들어가주실 수 있어요?',

        {
            'Choice': {
                'Dialog': 'narrator どう答えよう？ / 어떻게 답할까?',
                '좋아': {
                    'Text': '……いいよ。\n...좋아.',
                    'Do': 'jump Cautious_Yes'
                },
                '혼자 갈게': {
                    'Text': '一人で行くよ。\n혼자 갈게.',
                    'Do': 'jump Cautious_No'
                }
            }
        }
    ],

    'Friendly_Name': [
        'play voice yuna_17_sungbin',
        'narrator ソンビン、さん。',
        '유나 성빈, 이라.',

        'play voice yuna_18_cute',
        'narrator あ、ちょっと変わってる。可愛いね。',
        '유나 어, 좀 독특하다. 귀여워요.',
        'show character 유나 smile at right with fadeIn',

        'play voice mc_09_season',
        'narrator その名前が、何かの季節に似ていた。',
        'narrator 그 이름이, 어떤 계절과 닮았다.',
        'narrator 나는 그 생각을, 이내 접었다.',

        'play voice yuna_06_letsgo',
        'narrator じゃあ一緒に行きましょ、ソンビン先輩。',
        '유나 그럼 같이 가요, 성빈 선배님.',
        'jump Scene_Library'
    ],

    'Friendly_NoName': [
        'play voice yuna_19_later',
        'narrator え、え?後で?',
        '유나 네-네? 나중에요?',

        'play voice yuna_20_funny',
        'narrator 何それ、ちょっと面白いね。',
        '유나 뭐야, 그건 좀 재밌네.',
        'show character 유나 smile at right with fadeIn',

        'narrator 이름 없는 시간이, 조금 좋았다.',
        'narrator 그게 무슨 뜻인지는, 몰랐다.',

        'play voice yuna_32_slow',
        'narrator じゃあ一緒に行きましょ、名前はゆっくり。',
        '유나 그럼 일단 같이 가요. 이름은 천천히.',
        'jump Scene_Library'
    ],

    'Cautious_Yes': [
        'play voice yuna_21_really',
        'narrator 本当に?',
        '유나 정말요?',
        'show character 유나 smile at right with fadeIn',

        'narrator 방금, 왜 좋다고 했는지 모르겠다.',
        'narrator 입이 먼저 움직인 건지도.',

        'play voice yuna_22_thanks',
        'narrator ありがとうございます、先輩...',
        '유나 고마워요, 선배님...',

        'play voice yuna_33_intro2',
        'narrator あ、私は一年のユナです。料理部です。',
        '유나 아, 저는 1학년 유나예요. 요리부에요.',
        'jump Scene_Library'
    ],

    'Cautious_No': [
        'play voice yuna_23_ah',
        'narrator あ...はい。',
        '유나 아... 네.',

        'hide character 유나 with fadeOut',
        'wait 1000',

        'play voice mc_15_toward',
        'narrator 僕は図書部へ向かった。',
        'narrator 나는 도서부로 향했다.',
        'play voice mc_16_heavy',
        'narrator でも足取りが一歩だけ重かった。',
        'narrator 그런데 발걸음이, 한 발짝 무거웠다.',

        'narrator 그 여름.',
        'narrator 나는, 다른 사람을 만나지 못했다.',

        'narrator 만나지 못한 것인지.',
        'narrator 만나지 않은 것인지는, 아직 모르겠다.',

        'jump End_Alone'
    ],

    'Scene_Library': [
        'play sound se_door',
        'show scene library_room with fadeIn',
        'wait 1500',

        'play voice mc_21_library',
        'narrator 図書部。',
        'narrator 도서부.',
        'play voice mc_22_sun_in',
        'narrator 本棚の間から午後の日差しが、ゆっくり歩いて入ってきた。',
        'narrator 책장 사이로 오후 햇살이, 천천히 걸어 들어왔다.',

        'narrator 책 냄새.',
        'narrator 종이 냄새가 아니라, 더 오래된 어떤 것.',

        'show character 유나 smile at right with fadeIn',
        'play voice yuna_07_library_good',
        'narrator わ...ここ、いいですね。',
        '유나 와... 여기, 좋네요.',

        'play voice yuna_08_booksmell',
        'narrator 本の匂いが好きです。',
        '유나 책 냄새가 좋아요.',

        {
            'Choice': {
                'Dialog': 'narrator どう返そう？ / 뭐라고 답할까?',
                '추천': {
                    'Text': '本、おすすめしようか？\n책, 추천해줄까?',
                    'Do': 'jump Scene_Recommend'
                },
                '천천히': {
                    'Text': 'ゆっくり読んでいいよ。\n편하게 읽어. 천천히.',
                    'Do': 'jump Scene_FreeRead'
                }
            }
        }
    ],

    'Scene_Recommend': [
        'play voice yuna_24_recommend',
        'narrator おすすめ? 本当に?',
        '유나 추천? 진짜요?',
        'show character 유나 smile at right with fadeIn',

        'play voice yuna_25_whatbook',
        'narrator どんな本がいいですか?',
        '유나 어떤 책이 좋아요?',
        'play sound se_page',
        'wait 600',

        'narrator 나는 잠깐 책장을 훑었다.',
        'narrator 어떤 책을 꺼내야 할지, 이미 알고 있었다.',

        'play voice mc_27_book',
        'narrator 『陽射しは長く留まる』。',
        'narrator 《햇빛은 오래도록 머문다》.',
        'narrator 제목부터 조용하고, 따뜻한 책.',

        'play voice yuna_26_title',
        'narrator あ、タイトルからもう好き...',
        '유나 오, 제목부터 좋아요...',

        'play voice yuna_27_read',
        'narrator これ、読んでみたいです。',
        '유나 이거, 읽어보고 싶어요.',

        'show character 유나 reading at center with fadeIn',
        'play music theme_tender with volume 60 fade 3',
        'wait 2500',

        'narrator 그날 이후로.',
        'narrator 도서부에서 우리는, 자주 마주쳤다.',

        'narrator 나는 같은 책을 손에 들고 자리에 앉았고,',
        'narrator 유나는 어느새, 내 옆자리에서 책을 읽고 있었다.',

        'narrator 그 자리를, 특별하게 부르고 싶지는 않았다.',
        'narrator 그냥, 그런 시간이 있다는 것만.',

        'hide character 유나 with fadeOut',
        'jump End_Together'
    ],

    'Scene_FreeRead': [
        'play voice yuna_28_slowly',
        'narrator はい、わかりました。ゆっくり...',
        '유나 네, 알겠어요. 천천히...',
        'show character 유나 smile at right with fadeIn',

        'play sound se_page',
        'wait 600',

        'narrator 우리는 나란히 앉아, 책을 읽었다.',
        'narrator 페이지 넘기는 소리만 가끔 들렸고.',
        'narrator 그것이 이상하게, 편안했다.',

        'narrator 편하다는 말이, 왜 이렇게 무거운지.',
        'narrator 나는 그때는, 몰랐다.',

        'show character 유나 book at right with fadeIn',
        'play music theme_tender with volume 60 fade 3',
        'wait 2500',

        'hide character 유나 with fadeOut',
        'jump End_Together'
    ],

    'End_Together': [
        'stop music theme_tender with fade 2',
        'show scene rooftop_sunset with fadeIn',
        'play music theme_ending with volume 65 fade 3',
        'wait 2500',

        'show character 유나 default at center with fadeIn',
        'wait 1000',

        'play voice mc_40_eve',
        'narrator 夏休み前日。',
        'narrator 방학 전날.',
        'play voice mc_41_rooftop',
        'narrator 屋上。',
        'narrator 옥상.',
        'show character 유나 rooftop at center with fadeIn',
        'narrator ユナが日差しを背に、立っていた。',
        'narrator 유나가 햇살을 등지고, 서 있었다.',

        'narrator 햇살을 등지고 선 사람을,',
        'narrator 왜 이렇게 오래 기억하게 되는지.',
        'narrator 그때는, 몰랐다.',

        'show character 유나 default at center with fadeIn',
        'play voice yuna_29_senpai',
        'narrator 先輩。',
        '유나 선배님.',

        'play voice yuna_09_finished_book',
        'narrator あの本、読みました。',
        '유나 그 책, 다 읽었어요.',
        'show character 유나 smile at center with fadeIn',

        'play voice yuna_10_thanks',
        'narrator ありがとうございます。',
        '유나 ...고마워요.',

        'play voice yuna_30_wish',
        'narrator もしダメだったらいいなって、一度。',
        '유나 안 좋았으면 좋겠다, 한 번.',

        'play voice yuna_31_so_good',
        'narrator すごく良くて。',
        '유나 너무 좋아서.',

        'show character 유나 rooftop at center with fadeIn',
        'wait 3500',

        'narrator 그 해 여름의 끝에서.',
        'play voice mc_03_realize',
        'narrator 僕は気づいた。出会いが季節を変え、季節が人を変えることを。',
        'narrator 나는 알았다. 어떤 만남은 계절을 바꾸고, 어떤 계절은 사람을 바꾼다는 것을.',

        'play voice mc_04_evening',
        'narrator あの夏から、僕はときどき、日差しの長い午後を思い出すようになった。',
        'narrator 그 여름 이후, 나는 가끔 햇살이 긴 오후를 떠올리게 되었다.',

        'hide character 유나 with fadeOut',
        'wait 1000',

        'narrator 그 여름의 기록 — 끝.',
        'narrator 이어지는 이야기는, 다음에.',
        'end'
    ],

    'End_Alone': [
        'stop music theme_daily with fade 2',
        'show scene library_room with fadeIn',
        'play music theme_ending with volume 50 fade 3',
        'wait 2500',

        'narrator 그 해 여름은, 조용히 끝이 났다.',

        'narrator 도서부에서 책을 읽다가.',
        'narrator 가끔 그 애의 얼굴이 떠올랐지만.',
        'narrator 나는 다시, 페이지를 넘겼다.',

        'narrator 그게 잘한 일인지.',
        'narrator 잘하지 않은 일인지는, 아직 모른다.',

        'show character 유나 book at right with fadeIn',
        'wait 3000',

        'narrator 그 여름의 기록 — 끝.',
        'narrator 〈다른 결말〉이 기록되었습니다.',
        'end'
    ]
}));
