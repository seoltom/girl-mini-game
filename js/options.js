/* ============================================================
 *  그 여름의 기록 — 엔진 설정
 * ============================================================ */

'use strict';

monogatari.settings({
    'Name': '그 여름의 기록',
    'Version': '0.1.0',
    'Label': 'Start',

    'Slots': 10,
    'MultiLanguage': false,
    'LanguageSelectionScreen': false,

    'MainScreenMusic': '',
    'SaveLabel': 'Save',
    'AutoSaveLabel': 'AutoSave',

    'ShowMainScreen': true,
    'Preload': false,
    'AutoSave': 0,
    'ServiceWorkers': false,

    'AspectRatio': '16:9',
    'ForceAspectRatio': 'None',

    'TypeAnimation': true,
    'InstantText': true,
    'NVLTypeAnimation': true,
    'NarratorTypeAnimation': true,
    'CenteredTypeAnimation': true,

    'Orientation': 'landscape',
    'Skip': 30,

    // ----- 표시할 UI (Voice 활성) -----
    'Show': {
        'Text': true,
        'Name': true,
        'Choice': true,
        'Background': true,
        'Character': true,
        'CG': true,
        'Music': true,
        'Sound': true,
        'Voice': true,
        'Controls': true,
        'Save': true,
        'Load': true,
        'Backlog': true,
        'Skip': true,
        'Auto': true,
        'Settings': true,
    },

    'AssetsPath': {
        'root': '../assets',
        'characters': 'characters',
        'icons': 'icons',
        'images': 'cg',
        'music': 'bgm',
        'scenes': 'backgrounds',
        'sounds': 'sound',
        'ui': 'ui',
        'videos': 'videos',
        'voices': 'voices',
        'gallery': 'gallery'
    },

    'SplashScreenLabel': '',
    'Storage': {
        'Adapter': 'LocalStorage',
        'Store': 'GameData',
        'Endpoint': ''
    },
    'AllowRollback': true,
    'ExperimentalFeatures': false,
    'Screenshots': false
});

monogatari.preferences({
    'Language': '한국어',
    'Volume': {
        'Music': 0.7,
        'Voice': 1.0,
        'Sound': 1.0,
        'Video': 1.0
    },
    'TextSpeed': 20,
    'AutoPlaySpeed': 5
});
