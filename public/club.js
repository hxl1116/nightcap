$(document).ready(() => {
    init()

    // Add event handlers
    $('#decrement').click(() => {
        handleDecrement()
        // console.log(activeClub, capacities[activeClub].volume)
    })
    $('#increment').click(() => {
        handleIncrement()
        // console.log(activeClub, capacities[activeClub].volume)
    })
})

// Club capacity levels
const CAPACITIES = {
    normal: {
        color: 'green',
        message: 'Welcome!'
    },
    caution: {
        color: 'red',
        message: 'Warn the bouncers...'
    },
    restricted: {
        color: 'red',
        message: 'No one allowed in!'
    }
}

// Nightclub data
const CLUBS = [
    {
        id: 1,
        name: 'club-arcane',
        text: 'Club Arcane',
        capacity: 100,
        threshold: 70
    },
    {
        id: 2,
        name: 'club-underground',
        text: 'Club Underground',
        capacity: 50,
        threshold: 30
    },
    {
        id: 3,
        name: 'club-soda',
        text: 'Club Soda',
        capacity: 20,
        threshold: 12
    },
    {
        id: 4,
        name: 'studio-52',
        text: 'Studio 52',
        capacity: 52,
        threshold: 32
    }
]

let activeClub = null
let capacities = {}

const init = () => {
    for (let club of CLUBS) {
        // Insert club display elements
        $('#clubs-list').append(
            $(`<div class="club-display" id="${club.name}-display">`).append(
                $('<div class="club-info">').append(
                    $('<p class="club-name">').text(club.text),
                    $('<p class="club-msg">')
                ),
                $('<p class="cap-count">')
            )
        )

        // Insert club radio options
        $('#club-opts').append(
            $('<label>')
                .text(club.name),
            $(`<input id="${club.name}-opt" name="club-opt" type="radio">`).click(() => {
                activeClub = club.name
                // console.log(activeClub)
            })
        )

        // Init club volume
        capacities[club.name] = {volume: 0}
    }
}

// TODO: Combine with reducer, handle increment/decrement after check
const handleStatus = () => {
    let club = CLUBS.filter(club => club.name !== activeClub)
    let volume = capacities[activeClub].volume

    if (volume < club.threshold) return CAPACITIES.normal
    else if (volume >= club.threshold && volume < club.capacity) return CAPACITIES.caution
    else return CAPACITIES.restricted
}

const handleDecrement = () => {
    let volume = capacities[activeClub].volume

    // Decrement if volume is positive
    if (volume !== 0) capacities[activeClub].volume--

    // Handle status message
    handleStatus()
}

const handleIncrement = () => {
    let club = CLUBS.filter(club => club.name !== activeClub)
    let volume = capacities[activeClub].volume

    if (volume !== club.capacity) capacities[activeClub].volume++

    handleStatus()
}
