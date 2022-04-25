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

const ENDPOINT = '/clubs'

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

export const getClubs = (update) => {
    fetch(ENDPOINT)
        .then(res => {
            if (res.status === 200) {
                update(res.json())
            } else {
                console.log(`HTTP error: ${res.status}: ${res.statusText}`)
                return {'status': res.status}
            }
        })
        .catch((err) => {
            console.error(err)
            return err
        })
}

export const postClub = async (data) => {
    return await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            if (res.status === 201) return res.json()
            else {
                console.log(`HTTP error: ${res.status}: ${res.statusText}`)
                return {'status': res.status}
            }
        })
        .catch((err) => {
            console.error(err)
            return err
        })
}

export const putClub = async (id, data) => {
    return await fetch(`${ENDPOINT}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, ...data})
    })
        .then((res) => {
            if (res.status === 201) return res.json()
            else {
                console.log(`HTTP error: ${res.status}: ${res.statusText}`)
                return {'status': res.status}
            }
        })
        .catch((err) => {
            console.error(err)
            return err
        })
}

export const deleteClub = async (id) => {
    return await fetch(`${ENDPOINT}/${id}`, {method: 'DELETE'})
        .then((res) => {
            if (res.status === 200) return res.json()
            else {
                console.log(`HTTP error: ${res.status}: ${res.statusText}`)
                return {'status': res.status}
            }
        })
        .catch((err) => {
            console.error(err)
            return err
        })
}
