/* ============================================================
 *  그 여름의 기록 — Monogatari 엔진 초기화
 *  반드시 마지막에 로드되어야 합니다.
 * ============================================================ */

'use strict';

const { $_ready } = Monogatari;
const monogatari = Monogatari.default;

// 디버그 레벨 (0=끄기, 5=최대)
monogatari.debug.level(0);

$_ready(() => {
    monogatari.init('#monogatari').then(() => {
        // 하단의 '넘기기'는 스킵 모드가 아니라 다음 대사 한 줄 진행으로 동작시킵니다.
        const quickMenu = monogatari.component('quick-menu');
        const advanceButton = quickMenu?.button('Skip');

        if (quickMenu && advanceButton) {
            advanceButton.icon = 'fas fa-step-forward';
            advanceButton.data = { ...advanceButton.data, action: 'manual-next' };
            monogatari.registerListener('manual-next', {
                callback: () => {
                    monogatari.proceed({ userInitiated: true, skip: false, autoPlay: false })
                        .catch((error) => monogatari.debug.log(`Manual advance prevented: ${error}`));
                }
            });
            quickMenu.onConfigurationUpdate();
        }

        console.info('[그 여름의 기록] 게임 준비 완료 — 시작 버튼을 눌러주세요.');
    }).catch((err) => {
        console.error('[그 여름의 기록] 엔진 초기화 실패:', err);
    });
});
