
export const menuList = (language) => {
    if (language == 'ru-RU') {
        return [
            {
                title: 'Фильмы',
                id: 0,
                key: 0,
                submenu: [
                    {
                        title: 'Популярные',
                        url: '',
                        id: 0,
                        key: 0,
                    },
                    {
                        title: 'В кинотеатрах',
                        url: '',
                        id: 1,
                        key: 0,
                    },
                    {
                        title: 'Премьера',
                        url: '',
                        id: 2,
                        key: 0,
                    },
                    {
                        title: 'Лучшие',
                        url: '',
                        id: 3,
                        key: 0,
                    }

                ]
            },
            {
                title: 'Сериалы',
                id: 1,
                key: 1,
                submenu: [
                    {
                        title: 'Популярные',
                        url: '',
                        id: 0,
                        key: 1,
                    },
                    {
                        title: 'Сегодня на ТВ',
                        url: '',
                        id: 1,
                        key: 1,
                    },
                    {
                        title: 'В телевизорах',
                        url: '',
                        id: 2,
                        key: 1,
                    },
                    {
                        title: 'Лучшие',
                        url: '',
                        id: 3,
                        key: 1,
                    }

                ]
            },
            {
                title: 'Люди',
                id: 2,
                key: 2,
                submenu: [
                    {
                        title: 'Популярные',
                        url: '',
                        id: 0,
                        key: 2,
                    }
                ]
            },
            {
                title: 'Ещё',
                id: 3,
                key: 3,
                submenu: [
                    {
                        title: 'Обсуждение',
                        url: '',
                        id: 0,
                        key: 3,
                    },
                    {
                        title: 'Доска лидеров',
                        url: '',
                        id: 1,
                        key: 3,
                    },
                    {
                        title: 'Поддержка',
                        url: '',
                        id: 2,
                        key: 3,
                    },
                    {
                        title: 'API',
                        url: '',
                        id: 3,
                        key: 3,
                    },
                ]
            }
        ]
    } else if (language == 'en-US') {
        return [
            {
                title: 'Movies',
                id: 0,
                key: 0,
                submenu: [
                    {
                        title: 'Popular',
                        url: '',
                        id: 0,
                        key: 0,
                    },
                    {
                        title: 'Playing now',
                        url: '',
                        id: 1,
                        key: 0,
                    },
                    {
                        title: 'Upcoming',
                        url: '',
                        id: 2,
                        key: 0,
                    },
                    {
                        title: 'Top rated',
                        url: '',
                        id: 3,
                        key: 0,
                    }

                ]
            },
            {
                title: 'Series',
                id: 1,
                key: 1,
                submenu: [
                    {
                        title: 'Popular',
                        url: '',
                        id: 0,
                        key: 1,
                    },
                    {
                        title: 'Airing Today',
                        url: '',
                        id: 1,
                        key: 1,
                    },
                    {
                        title: 'On TV',
                        url: '',
                        id: 2,
                        key: 1,
                    },
                    {
                        title: 'Top rated',
                        url: '',
                        id: 3,
                        key: 1,
                    }

                ]
            },
            {
                title: 'Poeple',
                id: 2,
                key: 2,
                submenu: [
                    {
                        title: 'Popular People',
                        url: '',
                        id: 0,
                        key: 2,
                    }
                ]
            },
            {
                title: 'More',
                id: 3,
                key: 3,
                submenu: [
                    {
                        title: 'Discussion',
                        url: '',
                        id: 0,
                        key: 3,
                    },
                    {
                        title: 'Leaderboard',
                        url: '',
                        id: 1,
                        key: 3,
                    },
                    {
                        title: 'Support',
                        url: '',
                        id: 2,
                        key: 3,
                    },
                    {
                        title: 'API',
                        url: '',
                        id: 3,
                        key: 3,
                    },
                ]
            }
        ]
    }

}
