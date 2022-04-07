$(document).ready(() => {
    init()

    // Add event handlers
    $('#increment').click(() => {
        handleIncrement()
    })

    $('#decrement').click(() => {
        handleDecrement()
    })
})

// Club capacity levels
const CAPACITIES = {
    normal: {
        color: '#94d2bd',
        message: 'Welcome!'
    },
    caution: {
        color: '#ca6702',
        message: 'Warn the bouncers...'
    },
    restricted: {
        color: '#ae2012',
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

// The currently selected club's name
let activeClub = null

// The current volume of each club
let volumes = {}

const init = () => {
    for (let club of CLUBS) {
        // Init club volume
        volumes[club.name] = 0


        // Insert club display elements
        $('#clubs-list').append(
            $(`<div class="club-display" id="${club.name}-display">`).append(
                $('<div class="club-info normal">')
                    .append(
                        $('<p class="club-name">').text(club.text),
                        $('<p class="club-msg">')
                    ),
                $('<p class="cap-count">').text(volumes[club.name])
            )
        )

        // Insert club radio options
        $('#club-opts').append(
            $('<label>')
                .text(club.text)
                .prepend(
                    $(`<input id="${club.name}-opt" name="club-opt" type="radio">`).click(() => {
                        activeClub = club.name
                    })
                ),
        )
    }
}

const handleStatus = ({action}) => {
    let club = CLUBS.filter(club => club.name === activeClub).pop()
    let disp = $(`#${club.name}-display > div`)
    let vol = volumes[activeClub]
    let msg = null

    disp.removeClass('normal')
    disp.removeClass('caution')
    disp.removeClass('restricted')

    switch (action) {
        case 'increment':
            // If club volume is between threshold and max capacity
            if (vol >= club.threshold && vol < club.capacity) {
                volumes[activeClub] += 1
                disp.addClass('caution')
                msg = CAPACITIES.caution
                break
            }
            // If club volume is less than threshold
            else if (vol < club.threshold) {
                volumes[activeClub] += 1
                disp.addClass('normal')
                msg = CAPACITIES.normal
                break
            }
            // If club volume is at capacity
            else {
                disp.addClass('restricted')
                msg = CAPACITIES.restricted
                break
            }
        case 'decrement':
            // If club volume is between threshold and max capacity
            if (vol >= club.threshold && vol < club.capacity) {
                disp.addClass('caution')
                msg = CAPACITIES.caution
                break
            }
            // If club volume is less than threshold
            else if (vol < club.threshold) {
                disp.addClass('normal')
                msg = CAPACITIES.normal
                break
            }
            // If club volume is at capacity
            else {
                disp.addClass('restricted')
                msg = CAPACITIES.restricted
                break
            }
        default:
            throw new Error(`Unknown action: ${action}`)
    }

    $(`#${activeClub}-display p.cap-count`).text(volumes[activeClub])
    $(`#${activeClub}-display p.club-msg`).text(msg.message)
}

const handleIncrement = () => {
    handleStatus({action: 'increment'})
}

const handleDecrement = () => {
    let volume = volumes[activeClub]

    if (volume > 0) volumes[activeClub] -= 1

    handleStatus({action: 'decrement'})
}
