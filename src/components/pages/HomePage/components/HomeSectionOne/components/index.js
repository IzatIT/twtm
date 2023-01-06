

export const getCategories = (language, section) => {
    if(section === 'one'){
        if(language === 'ru-RU'){
            return [
                {
                    title: 'В кинотеатрах',
                    id: 0,
                    active: true,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
                {
                    title: 'По тв',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'popular'
                },
                {
                    title: 'Скоро',
                    id: 2,
                    active: false,
                    category: 'movie',
                    subcategory: 'upcoming'
                },
                {
                    title: 'Напрокат',
                    id: 3,
                    active: false,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
            ]
        }else if(language === 'en-US'){
            return [
                {
                    title: 'In Theaters',
                    id: 0,
                    url: '',
                    active: false,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
                {
                    title: 'On TV',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'popular'
                },
                {
                    title: 'Upcoming',
                    id: 2,
                    active: false,
                    category: 'movie',
                    subcategory: 'upcoming'
                },
                {
                    title: 'Fof Rent',
                    id: 3,
                    active: false,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
            ]
        }
    }
    if(section === 'two'){
        if(language === 'ru-RU'){
            return [
                {
                    title: 'Фильмы',
                    id: 0,
                    active: true,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
                {
                    title: 'ТВ',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'popular'
                },
            ]
        }else if(language === 'en-US'){
            return [
                {
                    title: 'Movies',
                    id: 0,
                    url: '',
                    active: false,
                    category: 'movie',
                    subcategory: 'now_playing'
                },
                {
                    title: 'TV',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'popular'
                },
            ]
        }
    }
    if(section === 'three'){
        if(language === 'ru-RU'){
            return [
                {
                    title: 'Фильмы',
                    id: 0,
                    active: true,
                    category: 'movie',
                    subcategory: 'latest'
                },
                {
                    title: 'По тв',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'latest'
                },
            ]
        }else if(language === 'en-US'){
            return [
                {
                    title: 'Movies',
                    id: 0,
                    url: '',
                    active: false,
                    category: 'movie',
                    subcategory: 'latest'
                },
                {
                    title: 'On TV',
                    id: 1,
                    active: false,
                    category: 'tv',
                    subcategory: 'latest'
                },
            ]
        }
    }
}