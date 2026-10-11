/* ============================================================
 *  그 여름의 기록 — 자산 등록 (배경 / CG / 음악 / 효과음)
 *
 *  파일명은 assets/ 폴더의 실제 파일과 일치해야 합니다.
 *  자산이 없으면 콘솔에 404가 뜨지만 시나리오 흐름은 계속 진행됩니다.
 * ============================================================ */

'use strict';

// ----- 배경 (AssetsPath.scenes = 'assets/backgrounds/' 와 결합됨) -----
monogatari.assets('scenes', {
    'school_courtyard': 'school_courtyard.jpg',
    'school_hallway':   'school_hallway.jpg',
    'library_room':     'library_room.jpg',
    'rooftop_sunset':   'rooftop_sunset.jpg'
});

// ----- 이벤트 CG (AssetsPath.images = 'assets/images/' 와 결합됨) -----
monogatari.assets('images', {
    'cg_meeting': 'cg_meeting.png',
    'cg_library': 'cg_library.png',
    'cg_ending':  'cg_ending.png'
});

// ----- 배경음악 (AssetsPath.music = 'assets/music/' 와 결합됨) -----
monogatari.assets('music', {
    'theme_opening': 'theme_opening.mp3',
    'theme_daily':   'theme_daily.mp3',
    'theme_tender':  'theme_tender.mp3',
    'theme_ending':  'theme_ending.mp3'
});

// ----- 효과음 (AssetsPath.sounds = 'assets/sounds/' 와 결합됨) -----
monogatari.assets('sounds', {
    'se_chime': 'se_chime.mp3',
    'se_door':  'se_door.mp3',
    'se_page':  'se_page.mp3',
    'se_wind':  'se_wind.mp3'
});

// ----- 음성 (AssetsPath.voices = 'assets/voices/' 와 결합됨) -----
// 유나 일본어 더빙 (Japanese_GracefulMaiden)
monogatari.assets('voices', {
    'yuna_01_greet':         'yuna_01_greet.mp3',
    'yuna_02_library':       'yuna_02_library.mp3',
    'yuna_03_together':      'yuna_03_together.mp3',
    'yuna_04_relief':        'yuna_04_relief.mp3',
    'yuna_05_name':          'yuna_05_name.mp3',
    'yuna_06_letsgo':        'yuna_06_letsgo.mp3',
    'yuna_07_library_good':  'yuna_07_library_good.mp3',
    'yuna_08_booksmell':     'yuna_08_booksmell.mp3',
    'yuna_09_finished_book': 'yuna_09_finished_book.mp3',
    'yuna_10_thanks':        'yuna_10_thanks.mp3',
    'yuna_11_okay':          'yuna_11_okay.mp3',
    'yuna_12_alone':         'yuna_12_alone.mp3',
    'yuna_13_intro':         'yuna_13_intro.mp3',
    'yuna_14_library':       'yuna_14_library.mp3',
    'yuna_15_sorry':         'yuna_15_sorry.mp3',
    'yuna_16_firsttime':     'yuna_16_firsttime.mp3',
    'yuna_17_sungbin':       'yuna_17_sungbin.mp3',
    'yuna_18_cute':          'yuna_18_cute.mp3',
    'yuna_19_later':         'yuna_19_later.mp3',
    'yuna_20_funny':         'yuna_20_funny.mp3',
    'yuna_21_really':        'yuna_21_really.mp3',
    'yuna_21_request':       'yuna_21_request.mp3',
    'yuna_22_thanks':        'yuna_22_thanks.mp3',
    'yuna_23_ah':            'yuna_23_ah.mp3',
    'yuna_24_recommend':     'yuna_24_recommend.mp3',
    'yuna_25_whatbook':      'yuna_25_whatbook.mp3',
    'yuna_26_title':         'yuna_26_title.mp3',
    'yuna_27_read':          'yuna_27_read.mp3',
    'yuna_28_slowly':        'yuna_28_slowly.mp3',
    'yuna_29_senpai':        'yuna_29_senpai.mp3',
    'yuna_30_wish':          'yuna_30_wish.mp3',
    'yuna_31_so_good':       'yuna_31_so_good.mp3',
    'yuna_32_slow':          'yuna_32_slow.mp3',
    'yuna_33_intro2':        'yuna_33_intro2.mp3',
    // 주인공(성빈) 일본어 독백·내레이션 (Japanese_OptimisticYouth)
    'mc_01_summer':          'mc_01_summer.mp3',
    'mc_02_steps':           'mc_02_steps.mp3',
    'mc_03_realize':         'mc_03_realize.mp3',
    'mc_04_evening':         'mc_04_evening.mp3',
    'mc_05_july':            'mc_05_july.mp3',
    'mc_06_one_week':        'mc_06_one_week.mp3',
    'mc_07_sun':             'mc_07_sun.mp3',
    'mc_09_season':          'mc_09_season.mp3',
    'mc_15_toward':          'mc_15_toward.mp3',
    'mc_16_heavy':           'mc_16_heavy.mp3',
    'mc_21_library':         'mc_21_library.mp3',
    'mc_22_sun_in':          'mc_22_sun_in.mp3',
    'mc_27_book':            'mc_27_book.mp3',
    'mc_40_eve':             'mc_40_eve.mp3',
    'mc_41_rooftop':         'mc_41_rooftop.mp3',
});
