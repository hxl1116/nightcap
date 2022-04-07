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

// Club capacity levels
export const CAP_MSG = {
    normal: 'Welcome!',
    caution: 'Warn the bouncers...',
    restricted: 'No one allowed in!'
}


export const init = (clubs) => {
    let volumes = {}

    for (const club of clubs)
        volumes[club.name] = 0

    return volumes
}

export const clubReducer = (state, action) => {
    let club = CLUBS[action.payload]
    let vol = state[club.name]

    // Check for increment/decrement
    switch (action.type) {
        case 'increment':
            // Ensure club volume is below or at club capacity
            if (vol < club.capacity)
                return {
                    ...state,
                    [club.name]: vol + 1
                }
            // Bail out
            else return state
        case 'decrement':
            // Ensure club volume is zero or more
            if (vol > 0)
                return {
                    ...state,
                    [club.name]: vol - 1
                }
            // Bail out
            else return state
        case 'reset':
            return init(action.payload)
        default:
            throw new Error(`Unknown action ${action}`)
    }
}
