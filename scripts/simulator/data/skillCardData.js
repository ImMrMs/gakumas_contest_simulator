import { deep_copy } from "../../util/utility.js";
/**
 * IDの付け方
 * 0_0_0000_0
 * レアレティ：基本(トラブル含む)1, 白2, 金3, 虹4
 * タイプ　　：一般スキル0, トラブル1, キャラ固有2, サポ固有3
 * タイプ　　：アクティブ1, メンタル2
 * プラン　　：フリー0, センス1, ロジック2
 * 固有番号　：2桁番号
 * 強化　　　：強化前0, 強化後1
 * 
 * 実装：7/12まで
 */

export const skillCardData = [
    /**
     * ベーシックカード(アクティブ/フリー)
     * 1010010 ~
     */
    {
        id: 1010010,
        name: 'アピールの基本',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
        ],
        afterUse: null,
    },
    {
        id: 1010011,
        name: 'アピールの基本+',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 14 },
        ],
        afterUse: null,
    },
    {
        id: 1010020,
        name: 'ポーズの基本',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 1010021,
        name: 'ポーズの基本+',
        type: 'active',
        plan: 'free', 
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: 'block', value: 4 },
        ],
        afterUse: null,
    },
    /**
     * ベーシックカード(アクティブ/センス)
     * 1011010 ~
     */
    {
        id: 1011010,
        name: '挑戦',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1011011,
        name: '挑戦+',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 37 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1011020,
        name: '試行錯誤',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1011021,
        name: '試行錯誤+',
        type: 'active',
        plan: 'sense', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'score', value: 10 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * ベーシックカード(アクティブ/ロジック)
     * 1012010 ~
     */
    {
        id: 1012010,
        name: '可愛い仕草',
        type: 'active',
        plan: 'logic', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1012011,
        name: '可愛い仕草+',
        type: 'active',
        plan: 'logic', 
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1012020,
        name: '気分転換',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 1012021,
        name: '気分転換+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 110 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * ベーシックカード(メンタル/フリー)
     * 1020010 ~
     */
    {
        id: 1020010,
        name: '表現の基本',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 1020011,
        name: '表現の基本+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * ベーシックカード(メンタル/センス)
     * 1021010 ~
     */
    {
        id: 1021010,
        name: '振る舞いの基本',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好調', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1021011,
        name: '振る舞いの基本+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好調', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1021020,
        name: '表情の基本',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1021021,
        name: '表情の基本+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    /**
     * ベーシックカード(メンタル/ロジック)
     * 1022010 ~
     */
    {
        id: 1022010,
        name: '目線の基本',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好印象', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1022011,
        name: '目線の基本+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 1022020,
        name: '意識の基本',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 1022021,
        name: '意識の基本+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    /**
     * トラブルカード(メンタル/トラブル)
     * 1100010 ~
     */
    {
        id: 1100010,
        name: '眠気',
        type: 'trouble',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(アクティブ/フリー)
     * 2010010 ~
     */
    /**
     * 白カード(アクティブ/センス)
     * 2011010 ~
     */
    {
        id: 2011010,
        name: '軽い足取り',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 2011011,
        name: '軽い足取り+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '好調', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 2011020,
        name: '愛嬌',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
        ],
        afterUse: null
    },
    {
        id: 2011021,
        name: '愛嬌+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 21 },
        ],
        afterUse: null
    },
    {
        id: 2011030,
        name: '準備運動',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2011031,
        name: '準備運動+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2011040,
        name: 'ファンサ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
        ],
        afterUse: null
    },
    {
        id: 2011041,
        name: 'ファンサ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 16 },
        ],
        afterUse: null
    },
    {
        id: 2011050,
        name: '勢い任せ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 3, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2011051,
        name: '勢い任せ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '集中', value: 4, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2011060,
        name: 'ハイタッチ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 17, options: [{ type: '集中', value: 1.5 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2011061,
        name: 'ハイタッチ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 23, options: [{ type: '集中', value: 2 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2011070,
        name: 'トークタイム',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 27 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2011071,
        name: 'トークタイム+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 38 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(アクティブ/ロジック)
     * 2012010 ~
     */
    {
        id: 2012010,
        name: '今日もおはよう',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2012011,
        name: '今日もおはよう+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2012020,
        name: 'ゆるふわおしゃべり',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: 'score', value: null, options: [{ type: 'block', value: 60 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2012021,
        name: 'ゆるふわおしゃべり+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: 'score', value: null, options: [{ type: 'block', value: 80 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2012030,
        name: 'もう少しだけ',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2012031,
        name: 'もう少しだけ+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 15 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2012040,
        name: '手拍子',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 150 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2012041,
        name: '手拍子+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 200 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2012050,
        name: '元気な挨拶',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 110 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2012051,
        name: '元気な挨拶+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(メンタル/フリー)
     * 2020010 ~
     */
    {
        id: 2020010,
        name: '気合十分',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '消費体力減少', value: 2 },
        ],
        afterUse: null
    },
    {
        id: 2020011,
        name: '気合十分+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2020020,
        name: 'ファーストステップ',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力軽減', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2020021,
        name: 'ファーストステップ+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力軽減', value: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(メンタル/センス)
     * 2021010 ~
     */
    {
        id: 2021010,
        name: 'バランス感覚',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2021011,
        name: 'バランス感覚+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '集中', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2021020,
        name: '楽観的',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 1, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2021021,
        name: '楽観的+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: '集中', value: 1, condition: '好調>0' },
        ],
        afterUse: null
    },
    {
        id: 2021030,
        name: '深呼吸',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 2 },
            { type: '好調', value: 3, condition: '集中>=3' },
        ],
        afterUse: null
    },
    {
        id: 2021031,
        name: '深呼吸+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
            { type: '好調', value: 3, condition: '集中>=3' },
        ],
        afterUse: null
    },
    {
        id: 2021040, // id
        name: 'ひと呼吸',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2021041,
        name: 'ひと呼吸+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: '集中', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(メンタル/ロジック)
     * 2022010 ~
     */
    {
        id: 2022010,
        name: 'リスタート',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2022011,
        name: 'リスタート+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2022020,
        name: 'えいえいおー',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: null
    },
    {
        id: 2022021,
        name: 'えいえいおー+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null
    },
    {
        id: 2022030,
        name: 'リズミカル',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2022031,
        name: 'リズミカル+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2022040,
        name: '思い出し笑い',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'やる気', value: 2, condition: '好印象>=3' },
        ],
        afterUse: null
    },
    {
        id: 2022041,
        name: '思い出し笑い+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 },
            { type: 'やる気', value: 3, condition: '好印象>=3' },
        ],
        afterUse: null
    },
    {
        id: 2022050,
        name: 'パステル気分',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: '好印象', value: 3, condition: 'やる気>=3' },
        ],
        afterUse: null
    },
    {
        id: 2022051,
        name: 'パステル気分+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: '好印象', value: 4, condition: 'やる気>=3' },
        ],
        afterUse: null
    },
    {
        id: 2022060,
        name: '励まし',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: '好印象', value: 4, condition: 'やる気>=6' },
        ],
        afterUse: null
    },
    {
        id: 2022061,
        name: '励まし+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: '好印象', value: 5, condition: 'やる気>=6' },
        ],
        afterUse: null
    },
    {
        id: 2022070,
        name: '幸せのおまじない',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 8 },
        condition: '',
        effects: [
            { type: '好印象', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2022071,
        name: '幸せのおまじない+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 8 },
        condition: '',
        effects: [
            { type: '好印象', value: 9 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 白カード(キャラ固有)
     * 2201010 ~
     */
    {
        id: 2201010,
        name: '新進気鋭',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 17 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2201011,
        name: '新進気鋭+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 25 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2202010,
        name: '意地っ張り',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '集中', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2202011,
        name: '意地っ張り+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 7 },
            { type: '集中', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2203010,
        name: 'アルバイター',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: '好印象', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2203011,
        name: 'アルバイター+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好印象', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2204010,
        name: 'リトル・プリンス',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'score', value: 3, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2204011,
        name: 'リトル・プリンス+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
            { type: 'score', value: 5, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2205010,
        name: '内気系少女',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 1 },
            { type: 'ターン終了時、好印象+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2205011,
        name: '内気系少女+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'ターン終了時、好印象+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2206010,
        name: '元気いっぱい',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'score', value: null, options: [{ type: 'block', value: 50 }] },
            { type: 'やる気', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2206011,
        name: '元気いっぱい+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
            { type: 'やる気', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2207010,
        name: 'フレンドリー',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 10 },
            { type: 'score', value: 10, condition: '集中>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2207011,
        name: 'フレンドリー+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'score', value: 12 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2208010,
        name: '超高学歴アイドル',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'block', value: 3, condition: 'やる気>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2208011,
        name: '超高学歴アイドル+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
            { type: 'block', value: 5, condition: 'やる気>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2209010,
        name: '包容力',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 2 },
            { type: 'block', value: 1 },
            { type: '体力回復', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2209011,
        name: '包容力+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 3 },
            { type: 'block', value: 4 },
            { type: '体力回復', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2210010,
        name: '未完の大器',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 3 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    {
        id: 2210011,
        name: '未完の大器+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 4, options: [{ type: '使用したスキルカード数', value: 4 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 }
    },
    /**
     * 金カード(アクティブ/フリー)
     * 3010010 ~
     */
    {
        id: 3010010,
        name: '前途洋々',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 8 },
            { type: 'block', value: 7 },
        ],
        afterUse: null,
    },
    {
        id: 3010011,
        name: '前途洋々+',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'block', value: 10 },
        ],
        afterUse: null,
    },
    /**
     * 金カード(アクティブ/センス)
     * 3011010 ~
     */
    {
        id: 3011010,
        name: '決めポーズ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 18 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011011,
        name: '決めポーズ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 27 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011020,
        name: 'アドリブ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 5 },
            { type: '好調', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 3011021,
        name: 'アドリブ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 9 },
            { type: '好調', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3011030,
        name: '情熱ターン',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 11 },
            { type: '集中', value: 3 },
        ],
        afterUse: null,
    },
    {
        id: 3011031,
        name: '情熱ターン+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 18 },
            { type: '集中', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3011040,
        name: '飛躍',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
            { type: 'score', value: 15, condition: '集中>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011041,
        name: '飛躍+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 13 },
            { type: 'score', value: 15, condition: '集中>=6' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011050,
        name: '祝福',
        type: 'active',
        plan: 'sense',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 26 },
            { type: '好調', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011051,
        name: '祝福+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 40 },
            { type: '好調', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011060,
        name: 'スタートダッシュ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 30 },
            { type: 'block', value: 10 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3011061,
        name: 'スタートダッシュ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 40 },
            { type: 'block', value: 10 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3011070,
        name: 'スタンドプレー',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'block', value: 7 },
            { type: '集中', value: 5 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3011071,
        name: 'スタンドプレー+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'block', value: 7 },
            { type: '集中', value: 7 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: null,
    },
    {
        id: 3011080,
        name: 'シュプレヒコール',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 2 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3011081,
        name: 'シュプレヒコール+',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '好調', value: 3 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3011090,
        name: '立ち位置チェック',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 25 },
            { type: 'block', value: 15 },
            { type: '元気増加無効', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3011091,
        name: '立ち位置チェック+',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 40 },
            { type: 'block', value: 15 },
            { type: '元気増加無効', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 金カード(アクティブ/ロジック)
     * 3012010 ~
     */
    {
        id: 3012010,
        name: 'ラブリーウインク',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 60 }] },
        ],
        afterUse: null,
    },
    {
        id: 3012011,
        name: 'ラブリーウインク+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 80 }] },
        ],
        afterUse: null,
    },
    {
        id: 3012020,
        name: 'ありがとうの言葉',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 9 },
            { type: 'score', value: null, options: [{ type: 'block', value: 40 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012021,
        name: 'ありがとうの言葉+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: 'score', value: null, options: [{ type: 'block', value: 70 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012030,
        name: 'ハートの合図',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 130 }] },
            { type: 'ブロック割合減少', value: 50 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012031,
        name: 'ハートの合図+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 180 }] },
            { type: 'ブロック割合減少', value: 50 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012040,
        name: 'キラメキ',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 200 }] },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012041,
        name: 'キラメキ+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 250 }] },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3012050,
        name: 'みんな大好き',
        type: 'active',
        plan: 'logic',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 90 }] },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3012051,
        name: 'みんな大好き+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'やる気', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 120 }] },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    /**
     * 金カード(メンタル/フリー)
     * 3020010 ~
     */
    {
        id: 3020010,
        name: 'アイドル宣言',
        type: 'mental',
        plan: 'free',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3020011,
        name: 'アイドル宣言+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 2 },
            { type: '消費体力減少', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3020020,
        name: 'ハイテンション',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: '元気増加無効', value: 2 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3020021,
        name: 'ハイテンション+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 13 },
            { type: '元気増加無効', value: 2 },
            { type: '消費体力減少', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 金カード(メンタル/センス)
     * 3021010 ~
     */
    {
        id: 3021010,
        name: '眼力',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: '集中', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021011,
        name: '眼力+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021020,
        name: '大声援',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: '好調', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021021,
        name: '大声援+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
            { type: '好調', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021030,
        name: '演出計画',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '絶好調', value: 3 },
            { type: 'アクティブスキルカード使用時固定元気+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021031,
        name: '演出計画+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '絶好調', value: 4 },
            { type: 'アクティブスキルカード使用時固定元気+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021040,
        name: '願いの力',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '集中', value: 2 },
            { type: 'アクティブスキルカード使用時集中+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021041,
        name: '願いの力+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 3 },
            { type: 'アクティブスキルカード使用時集中+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021050,
        name: '静かな意志',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '集中', value: 3 },
            { type: '好調', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021051,
        name: '静かな意志+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '集中', value: 4 },
            { type: '好調', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021060,
        name: '始まりの合図',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好調', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021061,
        name: '始まりの合図+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好調', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021070,
        name: '意地',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021071,
        name: '意地+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: '集中', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021080,
        name: '存在感',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 2 },
        condition: '',
        effects: [
            { type: '集中', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3021081,
        name: '存在感+',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: '集中', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3021090,
        name: '成功への道筋',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '集中', value: 7 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021091,
        name: '成功への道筋+',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
            { type: '集中', value: 9 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3021100,
        name: 'スポットライト',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: '好調', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3021101,
        name: 'スポットライト+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 9 },
            { type: '好調', value: 5 },
        ],
        afterUse: null,
    },
    /**
     * 金カード(メンタル/ロジック)
     * 3022010 ~
     */
    {
        id: 3022010,
        name: 'あふれる思い出',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3022011,
        name: 'あふれる思い出+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
            { type: 'やる気', value: 5 },
        ],
        afterUse: null,
    },
    {
        id: 3022020,
        name: 'ふれあい',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '好印象', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 3022021,
        name: 'ふれあい+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: '好印象', value: 5 },
        ],
        afterUse: null,
    },
    {
        id: 3022030,
        name: '幸せな時間',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 },
        ],
        afterUse: null,
    },
    {
        id: 3022031,
        name: '幸せな時間+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '好印象', value: 8 },
        ],
        afterUse: null,
    },
    {
        id: 3022040,
        name: 'ファンシーチャーム',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'メンタルスキルカード使用時好印象+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022041,
        name: 'ファンシーチャーム+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'メンタルスキルカード使用時好印象+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022050,
        name: 'ワクワクが止まらない',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: 'メンタルスキルカード使用時やる気+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022051,
        name: 'ワクワクが止まらない+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'やる気', value: 5 },
            { type: 'メンタルスキルカード使用時やる気+1', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022060,
        name: '本番前夜',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 4 },
            { type: 'やる気', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022061,
        name: '本番前夜+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 5 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022070,
        name: 'ひなたぼっこ',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: 'やる気', value: 5 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022071,
        name: 'ひなたぼっこ+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: 'やる気', value: 7 },
            { type: '消費体力増加', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022080,
        name: 'イメトレ',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: 'やる気', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022081,
        name: 'イメトレ+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 11 },
            { type: 'やる気', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022090,
        name: 'やる気は満点',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: '好印象', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022091,
        name: 'やる気は満点+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '好印象', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022100,
        name: 'ゆめみごこち',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3022101,
        name: 'ゆめみごこち+',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 1 },
        condition: '',
        effects: [
            { type: 'やる気', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3022110,
        name: '止められない想い',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 3 },
            { type: '好印象', value: 3 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022111,
        name: '止められない想い+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'やる気', value: 4 },
            { type: '好印象', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3022120,
        name: 'オトメゴコロ',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: null,
    },
    {
        id: 3022121,
        name: 'オトメゴコロ+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
            { type: '好印象', value: 2, condition: '好印象>=10' },
        ],
        afterUse: null,
    },
    /**
     * 金カード(キャラ固有)
     * 3201010 ~
     */
    {
        id: 3201010,
        name: '一番は譲らない',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 18 },
            { type: '好調', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3201011,
        name: '一番は譲らない+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 26 },
            { type: '好調', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3202010,
        name: 'ローン・ウルフ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'score', value: 12, condition: '集中>=3' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3202011,
        name: 'ローン・ウルフ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: 12 },
            { type: 'score', value: 12, condition: '集中>=3' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3203010,
        name: 'Colorful Cute!',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3203011,
        name: 'Colorful Cute!+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 8 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3204010,
        name: 'らしさ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 4 },
            { type: '集中', value: 3, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3204011,
        name: 'らしさ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 6 },
            { type: '集中', value: 4, condition: '好調>0' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3205010,
        name: '純白の妖精',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 120 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3205011,
        name: '純白の妖精+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 2 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 160 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3206010,
        name: 'いっしょけんめい',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 1 },
            { type: 'やる気', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3206011,
        name: 'いっしょけんめい+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 4 },
            { type: 'やる気', value: 6 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3207010,
        name: '勇気の一歩',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 17, options: [{ type: '集中', value: 2 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3207011,
        name: '勇気の一歩+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 24, options: [{ type: '集中', value: 2.5 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3208010,
        name: '苦しいのが好き',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 6 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 250 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3208011,
        name: '苦しいのが好き+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 7 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 350 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3209010,
        name: '寄り添う気持ち',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'block', value: 10 },
            { type: '集中', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3209011,
        name: '寄り添う気持ち+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 12 }, 
            { type: '集中', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3210010,
        name: '打倒お姉ちゃん',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3210011,
        name: '打倒お姉ちゃん+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: 'score', value: null, options: [{ type: 'block', value: 140 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 金カード(サポ固有)
     * 3300010 ~
     */
    {
        id: 3300010,
        name: 'お姉ちゃんだもの！',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        // condition: 'レッスンCLEAR割合<=100',
        condition: 'score<=1000', // コンテストではこうらしい
        effects: [
            { type: 'score', value: 6 },
            { type: 'block', value: 6 },
            { type: 'ドロー', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300011,
        name: 'お姉ちゃんだもの！+',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        // condition: 'レッスンCLEAR割合<=100',
        condition: 'score<=1000', // コンテストではこうらしい
        effects: [
            { type: 'score', value: 10 },
            { type: 'block', value: 9 },
            { type: 'ドロー', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300020,
        name: 'おアツイ視線',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: 'block==0',
        effects: [
            { type: 'block', value: 5 },
            { type: '消費体力減少', value: 2 },
            { type: 'ドロー', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300021,
        name: 'おアツイ視線+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: 'block==0',
        effects: [
            { type: 'block', value: 6 },
            { type: '消費体力減少', value: 3 },
            { type: 'ドロー', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300030,
        name: 'ご指導ご鞭撻',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 5 },
        condition: 'hpPer>=50',
        effects: [
            { type: 'score', value: 4 },
            { type: 'block', value: 5 },
            { type: '手札強化', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300031,
        name: 'ご指導ご鞭撻+',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: 'hpPer>=50',
        effects: [
            { type: 'score', value: 4 },
            { type: 'block', value: 5 },
            { type: '手札強化', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300040,
        name: 'ストレッチ談義',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        condition: 'turn>=3',
        effects: [
            { type: 'score', value: 3 },
            { type: '消費体力減少', value: 2 },
            { type: '手札強化', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300041,
        name: 'ストレッチ談義+',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: 'turn>=3',
        effects: [
            { type: 'score', value: 3 },
            { type: '消費体力減少', value: 2 },
            { type: '手札強化', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300050,
        name: '全力サポート',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 1, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300051,
        name: '全力サポート+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 2, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300060,
        name: 'キメ顔で自撮り',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 3 },
            { type: '集中', value: 2 },
            { type: 'ドロー', value: 1, delay: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300061,
        name: 'キメ顔で自撮り+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: '集中', value: 3 },
            { type: 'ドロー', value: 1, delay: 1, condition: 'hpPer>=50' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300070,
        name: 'なに聴いてるの？',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '体力回復', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 3300071,
        name: 'なに聴いてるの？+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 2 },
            { type: '体力回復', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(アクティブ/フリー)
     * 4010010 ~
     */
    /**
     * 虹カード(アクティブ/センス)
     * 4011010 ~
     */
    {
        id: 4011010,
        name: 'コール＆レスポンス',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 15 },
            { type: 'score', value: 15, condition: '集中>=3' },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011011,
        name: 'コール＆レスポンス+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 15 },
            { type: 'score', value: 34, condition: '集中>=3', options: [{ type: '集中', value: '1.5' }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011020,
        name: 'バズワード',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 38 },
        ],
        afterUse: null,
    },
    {
        id: 4011021,
        name: 'バズワード+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: 'score', value: 54 },
        ],
        afterUse: null,
    },
    {
        id: 4011030,
        name: '成就',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 10 },
        condition: '',
        effects: [
            { type: '好調', value: 4 },
            { type: 'score', value: 32, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011031,
        name: '成就+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 10 },
        condition: '',
        effects: [
            { type: '好調', value: 7 },
            { type: 'score', value: 40, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011040,
        name: '魅惑のパフォーマンス',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 8 },
        condition: '好調>0',
        effects: [
            { type: '絶好調', value: 2 },
            { type: 'score', value: 38, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011041,
        name: '魅惑のパフォーマンス+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '好調>0',
        effects: [
            { type: '絶好調', value: 3 },
            { type: 'score', value: 47, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011050,
        name: '至高のエンタメ',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: 'アクティブスキルカード使用時、パラメータ+4', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011051,
        name: '至高のエンタメ+',
        type: 'active',
        plan: 'sense',
        cost: { type: '集中', value: 2 },
        condition: '',
        effects: [
            { type: 'ドロー', value: 1, delay: 1 },
            { type: 'アクティブスキルカード使用時、パラメータ+5', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4011060,
        name: '覚醒',
        type: 'active',
        plan: 'sense',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: 'score', value: 3 },
            { type: 'score', value: 3 },
            { type: '集中', value: 4 },
        ],
        afterUse: null,
    },
    {
        id: 4011061,
        name: '覚醒+',
        type: 'active',
        plan: 'sense',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: 'score', value: 4 },
            { type: 'score', value: 4 },
            { type: '集中', value: 6 },
        ],
        afterUse: null,
    },
    /**
     * 虹カード(アクティブ/ロジック)
     * 4012010 ~
     */
    {
        id: 4012010,
        name: '２００％スマイル',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 100 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012011,
        name: '２００％スマイル+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 },
            { type: 'score', value: null, options: [{ type: '好印象', value: 170 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012020,
        name: '開花',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'やる気', value: 6 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 200 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012021,
        name: '開花+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'やる気', value: 8 },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 300 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012030,
        name: '届いて！',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 160 }] },
            { type: 'ブロック割合減少', value: 100 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012031,
        name: '届いて！+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 2 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: 'block', value: 220 }] },
            { type: 'ブロック割合減少', value: 100 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012040,
        name: '輝くキミへ',
        type: 'active',
        plan: 'logic',
        cost: { type: 'やる気', value: 4 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'スキルカード使用時、好印象の30%分パラメータ', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012041,
        name: '輝くキミへ+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'やる気', value: 4 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'スキルカード使用時、好印象の50%分パラメータ', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012050,
        name: 'あのときの約束',
        type: 'active',
        plan: 'logic',
        cost: { type: '好印象', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 9 },
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 150 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4012051,
        name: 'あのときの約束+',
        type: 'active',
        plan: 'logic',
        cost: { type: '好印象', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 14 },
            { type: 'score', value: null, options: [{ type: 'block', value: 130 }] },
            { type: 'score', value: null, options: [{ type: 'やる気', value: 200 }] },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(メンタル/フリー)
     * 4020010 ~
     */
    {
        id: 4020010,
        name: 'テレビ出演',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 3 },
            { type: '消費体力減少', value: 4 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020011,
        name: 'テレビ出演+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 5 },
            { type: '消費体力減少', value: 5 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020020,
        name: '叶えたい夢',
        type: 'mental',
        plan: 'free',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
            { type: '消費体力軽減', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020021,
        name: '叶えたい夢+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 9 },
            { type: '消費体力軽減', value: 2 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020030,
        name: 'アイドル魂',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: 'block', value: 6 },
            { type: '低下状態無効', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020031,
        name: 'アイドル魂+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: 'block', value: 6 },
            { type: '低下状態無効', value: 1 },
            { type: '手札強化', value: null, delay: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020040,
        name: '仕切り直し',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '手札入れ替え', value: null },
            { type: '消費体力減少', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4020041,
        name: '仕切り直し+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '手札入れ替え', value: null },
            { type: '消費体力減少', value: 4 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(メンタル/センス)
     * 4021010 ~
     */
    {
        id: 4021010,
        name: '国民的アイドル',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: '次に使用するスキルカードの効果を発動', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021011,
        name: '国民的アイドル+',
        type: 'mental',
        plan: 'sense',
        cost: { type: '好調', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 8 },
            { type: '次に使用するスキルカードの効果を発動', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021020,
        name: '魅惑の視線',
        type: 'mental',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: '絶好調', value: 4 },
            { type: '消費体力減少', value: 2 },
            { type: 'スキルカード使用数追加', value: 1 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021021,
        name: '魅惑の視線+',
        type: 'mental',
        plan: 'sense',
        cost: { type: '集中', value: 3 },
        condition: '',
        effects: [
            { type: '絶好調', value: 5 },
            { type: '消費体力減少', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021030,
        name: '鳴り止まない拍手',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '集中', value: 4 },
            { type: '好調', value: 2 },
            { type: '消費体力減少', value: 2 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021031,
        name: '鳴り止まない拍手+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '集中', value: 5 },
            { type: '好調', value: 3 },
            { type: '消費体力減少', value: 3 },

        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021040,
        name: '天真爛漫',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '集中', value: 1 },
            { type: 'ターン終了時、集中が3以上の場合、集中+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4021041,
        name: '天真爛漫+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 1 },
            { type: 'ターン終了時、集中が3以上の場合、集中+2', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(メンタル/ロジック)
     * 4022010 ~
     */
    {
        id: 4022010,
        name: '私がスター',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'ターン追加', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022011,
        name: '私がスター+',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 1 },
        condition: '',
        effects: [
            { type: 'ターン追加', value: 1 },
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022020,
        name: '星屑センセーション',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'スキルカード使用数追加', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022021,
        name: '星屑センセーション+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'やる気', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 7 },
            { type: 'スキルカード使用数追加', value: 1 },
            { type: 'ドロー', value: 1 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022030,
        name: 'ノートの端の決意',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 },
            { type: 'やる気', value: 3 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022031,
        name: 'ノートの端の決意+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 },
            { type: 'やる気', value: 3 },
            { type: '消費体力減少', value: 3 },
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022040,
        name: '手書きのメッセージ',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 9 }, 
            { type: 'block', value: 9 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022041,
        name: '手書きのメッセージ+',
        type: 'mental',
        plan: 'logic',
        cost: { type: '好印象', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 10 }, 
            { type: 'block', value: 10 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022050,
        name: 'トキメキ',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 10 },
        condition: '',
        effects: [
            { type: '好印象', value: 8 }, 
            { type: 'やる気', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022051,
        name: 'トキメキ+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 9 },
        condition: '',
        effects: [
            { type: '好印象', value: 10 }, 
            { type: 'やる気', value: 6 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022060,
        name: '虹色ドリーマー',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 9 },
        condition: '',
        effects: [
            { type: '好印象', value: 1 }, 
            { type: 'ターン終了時、好印象が3以上の場合、好印象+3', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4022061,
        name: '虹色ドリーマー+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 9 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 }, 
            { type: 'ターン終了時、好印象が3以上の場合、好印象+3', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(キャラ固有)
     * 4201010 ~
     */
    {
        id: 4201010,
        name: '絶対に負けない',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 34 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4201011,
        name: '絶対に負けない+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 48 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4201020,
        name: 'ＰＯＷ！',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 250 }] }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4201021,
        name: 'ＰＯＷ！+',
        type: 'active',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: null, options: [{ type: '好印象', value: 260 }] }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202010,
        name: 'それぞれの道',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: 'score', value: 14 }, 
            { type: '集中', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202011,
        name: 'それぞれの道+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 15 }, 
            { type: '集中', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202020,
        name: '絡まる想い',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 8 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 8 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4202021,
        name: '絡まる想い+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 8 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '好印象', value: 10 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203010,
        name: 'よそ見はダメ♪',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'block', value: 2 }, 
            { type: '好印象', value: 7 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203011,
        name: 'よそ見はダメ♪+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: 'block', value: 4 }, 
            { type: '好印象', value: 9 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203020, 
        name: 'アドレナリン全開',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 3 }, 
            { type: '絶好調', value: 4 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4203021, 
        name: 'アドレナリン全開+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '好調', value: 4 }, 
            { type: '絶好調', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4204010,
        name: '盛装の華形',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 12 }, 
            { type: 'score', value: 14, condition: '好調>0' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4204011,
        name: '盛装の華形+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'score', value: 18 }, 
            { type: 'score', value: 20, condition: '好調>0' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4204020,
        name: 'ひんやり一休み',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 8 },
        condition: '',
        effects: [
            { type: 'score', value: 9 }, 
            { type: 'score', value: 9 }, 
            { type: 'score', value: 9 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4204021,
        name: 'ひんやり一休み+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 8 },
        condition: '',
        effects: [
            { type: 'score', value: 14 }, 
            { type: 'score', value: 14 }, 
            { type: 'score', value: 14 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4205010, 
        name: 'もう怖くないから',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '好印象', value: 3 }, 
            { type: 'ターン終了時、好印象+1', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4205011, 
        name: 'もう怖くないから+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 }, 
            { type: 'ターン終了時、好印象+1', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4206010, 
        name: 'お嬢様の晴れ舞台',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 2 }, 
            { type: 'score', value: null, options: [{ type: 'block', value: 100 }] }, 
            { type: 'やる気', value: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4206011, 
        name: 'お嬢様の晴れ舞台+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 4 },
        condition: '',
        effects: [
            { type: 'block', value: 5 }, 
            { type: 'score', value: null, options: [{ type: 'block', value: 120 }] }, 
            { type: 'やる気', value: 3 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4207010,
        name: 'ワンモアステップ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: 'score', value: 7 }, 
            { type: 'score', value: 7 }, 
            { type: 'score', value: 7, condition: '集中>=6' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4207011,
        name: 'ワンモアステップ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'score', value: 9 }, 
            { type: 'score', value: 9 }, 
            { type: 'score', value: 9, condition: '集中>=6' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4207020,
        name: '昼下がりのそよ風',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'やる気', value: 7 }, 
            { type: 'やる気', value: 3, condition: 'やる気>=6' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4207021,
        name: '昼下がりのそよ風+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'やる気', value: 8 }, 
            { type: 'やる気', value: 5, condition: 'やる気>=3' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4208010, 
        name: '本気の趣味',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 5 }, 
            { type: 'block', value: 4, condition: 'やる気>=3' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4208011, 
        name: '本気の趣味+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'block', value: 7 }, 
            { type: 'block', value: 7, condition: 'やる気>=3' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4209010,
        name: '距離感',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '集中', value: 4 }, 
            { type: '体力回復', value: 4 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4209011,
        name: '距離感+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '集中', value: 5 }, 
            { type: '体力回復', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4209020,
        name: '入道雲と、きみ',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '次に使用するアクティブスキルカードの効果を発動', value: 1 }, 
            { type: '好調', value: 3 }, 
            { type: '消費体力減少', value: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4209021,
        name: '入道雲と、きみ+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: '次に使用するアクティブスキルカードの効果を発動', value: 1 }, 
            { type: '好調', value: 5 }, 
            { type: '消費体力減少', value: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4210010, 
        name: 'おっきなおにぎり',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 5 }] }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4210011, 
        name: 'おっきなおにぎり+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 3 },
        condition: '',
        effects: [
            { type: 'block', value: 2, options: [{ type: '使用したスキルカード数', value: 8 }] }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    /**
     * 虹カード(サポ固有)
     * 4300010 ~ 実装順
     */
    {
        id: 4300010, 
        name: '花萌ゆ季節',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        effects: [
            { type: '生成', value: 'ランダムな強化済みスキルカード' }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
            { type: 'ドロー', value: 1, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300011, 
        name: '花萌ゆ季節+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: '生成', value: 'ランダムな強化済みスキルカード' }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
            { type: 'ドロー', value: 1, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300020, 
        name: '陽だまりの生徒会室',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '体力回復', value: 3 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300021, 
        name: '陽だまりの生徒会室+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: '体力回復', value: 5 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300030, 
        name: '心のアルバム',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 3 }, 
            { type: 'block', value: 3 }, 
            { type: 'ドロー', value: 1, delay: 1 }, 
            { type: 'ドロー', value: 1, delay: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300031, 
        name: '心のアルバム+',
        type: 'active',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: 'score', value: 6 }, 
            { type: 'block', value: 5 }, 
            { type: 'ドロー', value: 1, delay: 1 }, 
            { type: 'ドロー', value: 1, delay: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300040, 
        name: 'ティーパーティ',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 }, 
            { type: '手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300041, 
        name: 'ティーパーティ+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 1 },
        condition: '',
        effects: [
            { type: 'スキルカード使用数追加', value: 1 }, 
            { type: 'ドロー', value: 1 }, 
            { type: '手札強化', value: null }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300050, 
        name: '光のステージ',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 3 },
        condition: '',
        effects: [
            { type: '消費体力軽減', value: 1 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300051, 
        name: '光のステージ+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 0 },
        condition: '',
        effects: [
            { type: '消費体力軽減', value: 1 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300060, 
        name: '新生徒会爆誕！',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 5 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '消費体力減少', value: 2 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300061, 
        name: '新生徒会爆誕！+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 4 },
        condition: '',
        pre_effects: [
            { type: 'レッスン開始時手札に入る', value: null }
        ],
        effects: [
            { type: '消費体力減少', value: 4 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300070, 
        name: '喧嘩するほど仲がいい',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '集中', value: 3 }, 
            { type: '好調', value: 2 }, 
            { type: '手札強化', value: null, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300071, 
        name: '喧嘩するほど仲がいい+',
        type: 'mental',
        plan: 'sense',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '集中', value: 4 }, 
            { type: '好調', value: 4 }, 
            { type: '手札強化', value: null, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300080, 
        name: 'ダメダメクッキング',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 7 },
        condition: '',
        effects: [
            { type: '好印象', value: 4 }, 
            { type: 'やる気', value: 3 }, 
            { type: '手札強化', value: null, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    }, 
    {
        id: 4300081, 
        name: 'ダメダメクッキング+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'normal', value: 6 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 }, 
            { type: 'やる気', value: 4 }, 
            { type: '手札強化', value: null, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300090, 
        name: '薄れゆく壁',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 5 },
        condition: '',
        effects: [
            { type: 'block', value: 3 }, 
            { type: '手札強化', value: null, delay: 1 }, 
            { type: '手札強化', value: null, delay: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300091, 
        name: '薄れゆく壁+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'normal', value: 2 },
        condition: '',
        effects: [
            { type: 'block', value: 3 }, 
            { type: '手札強化', value: null, delay: 1 }, 
            { type: '手札強化', value: null, delay: 2 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300100, 
        name: 'みずたまりスキップ',
        type: 'mental',
        plan: 'free',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 3 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300101, 
        name: 'みずたまりスキップ+',
        type: 'mental',
        plan: 'free',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: 'block', value: 8 }, 
            { type: 'スキルカード使用数追加', value: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300120, 
        name: 'お泊り猛勉強',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: '好印象', value: 5 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300121, 
        name: 'お泊り猛勉強+',
        type: 'mental',
        plan: 'logic',
        cost: { type: 'direct', value: 1 },
        condition: '',
        effects: [
            { type: '好印象', value: 6 }, 
            { type: 'ドロー', value: 1, delay: 1 }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300110, 
        name: 'はじける水しぶき',
        type: 'active',
        plan: 'sense',
        cost: { type: 'direct', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 33 }, 
            { type: '体力回復', value: 4, delay: 2, condition: '好調>=4' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
    {
        id: 4300111, 
        name: 'はじける水しぶき+',
        type: 'active',
        plan: 'sense',
        cost: { type: 'direct', value: 6 },
        condition: '',
        effects: [
            { type: 'score', value: 45 }, 
            { type: '体力回復', value: 6, delay: 2, condition: '好調>=4' }, 
        ],
        afterUse: { type: 'exhaust', value: 1 },
    },
];

export class SkillCard {

    // property
    #available = false;

    // method
    constructor (id) {
        const skillCard = SkillCardData.getById(id);
        for (const propertyName in skillCard) {
            if (skillCard.hasOwnProperty(propertyName)) {
                this[propertyName] = skillCard[propertyName];
            }
        }
    }

    get score () {
        return this.effects.reduce((p, v) => (v.type == 'score' ? p+v.actualValue : p), 0)
    }

    get block () {
        return this.effects.reduce((p, v) => (v.type == 'block' ? p+v.actualValue : p), 0)
    }

    /**
     * Pアイテムが利用可能か返します
     * @returns {Boolean}
     */
    isAvailable () {
        return this.#available;
    }

    setAvailable (available) {
        this.#available = available;
    }

}

export class SkillCardData {
    
    // property
    static #skillCardData = skillCardData;
    static #index = Object.fromEntries(this.#skillCardData.map((item, i) => [item.id, i]));

    // method

    /**
     * IDと一致するスキルカードオブジェクトを返します
     * @param {Number} id - スキルカードのID 
     * @returns {Object} スキルカードデータ
     */
    static getById (id) {
        if (!(id in this.#index)) {
            throw new Error(`id(${id})と一致するスキルカードがありません。`);
        }
        return deep_copy(this.#skillCardData[this.#index[id]]);
    }

    /**
     * スキルカードリストを返します※非推奨
     * @returns {Array<Object>} スキルカードデータ
     */
    static getAll () {
        return deep_copy(this.#skillCardData);
    }

}