export const CLUBS = [
    {
        id: 'clubArcane',
        name: 'Club Arcane',
        genre: 'Pop',
        location: 'Toronto',
        capacity: 100,
        threshold: 70
    },
    {
        id: 'clubUnderground',
        name: 'Club Underground',
        genre: 'Hip Hop',
        location: 'Buffalo',
        capacity: 50,
        threshold: 30
    },
    {
        id: 'clubSoda',
        name: 'Club Soda',
        genre: 'Jazz',
        location: 'Worcester',
        capacity: 20,
        threshold: 12
    },
    {
        id: 'studio52',
        name: 'Studio 52',
        genre: 'Rock',
        location: 'Washington D.C.',
        capacity: 52,
        threshold: 32
    }
]

// Club capacity levels
export const CAP_MSG = {
    normal: {color: 'success', message: 'Welcome!'},
    caution: {color: 'warning', message: 'Warn the bouncers...'},
    danger: {color: 'danger', message: 'No one allowed in!'}
}

export const clubReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // Increment club volume
            if (state.vol < state.max) return {...state, vol: state.vol++}
            // Bail out of dispatch
            else return state
        case 'decrement':
            // Decrement club volume
            if (state.vol > 0) return {...state, vol: state.vol--}
            // Bail out of dispatch
            else return state
        default:
            throw new Error(`Unknown type: ${action.type}`)
    }
}
