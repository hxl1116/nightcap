export const CLUBS = [
    {
        id: 1,
        name: 'clubArcane',
        text: 'Club Arcane',
        capacity: 100,
        threshold: 70
    },
    {
        id: 2,
        name: 'clubUnderground',
        text: 'Club Underground',
        capacity: 50,
        threshold: 30
    },
    {
        id: 3,
        name: 'clubSoda',
        text: 'Club Soda',
        capacity: 20,
        threshold: 12
    },
    {
        id: 4,
        name: 'studio52',
        text: 'Studio 52',
        capacity: 52,
        threshold: 32
    }
]


export const init = (clubs) => {
    let volumes = {}

    for (const club of clubs)
        volumes[club.name] = 0

    return volumes
}

export const clubReducer = (state, action) => {
    let vol = state[action.payload]

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                [action.payload]: vol + 1
            }
        case 'decrement':
            return {
                ...state,
                [action.payload]: vol - 1
            }
        case 'reset':
            return init(action.payload)
        default:
            throw new Error(`Unknown action ${action}`)
    }
}
