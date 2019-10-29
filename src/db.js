const users = [
    {
        id:'1',
        name: 'Victor',
        email: 'kavsjo@hotmil.se',
        age: 31,
    },
    {
        id:'2',
        name: 'Hans',
        email: 'landa@hotmil.se',
        age: 65
    },
    {
        id:'3',
        name: 'Shrek',
        email: 'shrek@hotmil.se',
        age: 43
    }
]

const posts = [
    {
        id:'18',
        title: 'Angels and Demons',
        body: 'Dan brown novel',
        published: true,
        author: '1'
    },
    {
        id:'25',
        title: 'Dark Tower',
        body: 'Stephen kin novel',
        published: true,
        author: '1'
    },
    {
        id:'34',
        title: 'Future Shit',
        body: 'Future book about shit',
        published: false,
        author: '2'
    }
]

const comments = [
    {
        id: '12',
        text: 'Jag tycker om denna boken',
        author: '1',
        post: '18'
    },
    {
        id: '13',
        text: 'JBoken sööööög',
        author: '2',
        post: '25'
    },
    {
        id: '14',
        text: 'Hej hopp kallops',
        author: '3',
        post: '18'
    },
    {
        id: '15',
        text: 'Dalat fyyyy fäään',
        author: '1',
        post: '34'
    }
]

const db = {
    users,
    posts,
    comments
}

export {db as default}