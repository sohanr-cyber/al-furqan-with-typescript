export interface Ichapater {
    id: number,
    revelation_place: string,
    revelation_order: string,
    bismillah_pre: boolean,
    name_simple: string,
    name_complex: string,
    name_arabic: string,
    verses_count: number,
    chapter_number: number,
    translated_name: {
        name: string
    },
    time: string,
    verse_count: number

}

export interface Iverse {
    id: number, content: string, translation_eng: string, transliteration: string
}

export interface Isurah {
    id: number, surah_name: string, surah_name_ar: string, translation: string,
    total_verses: number, description: string,
    verses: {
        [index: string]: Iverse
    },

}


export interface Ipopular {
    id: string | number,
    name: string
}