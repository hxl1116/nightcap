window.onload = () => {
    // TODO: Add color (bg, text) attribute
    const clubInfo = [
        {
            name: 'Club Arcane',
            loc: '461 King St W, Toronto, ON M5V 1K4, Canada',
            cap: 450,
            theme: 'Hip-Hop'
        },
        {
            name: 'Club Underground',
            loc: ' University Ave, Kingston, ON K7L 2N9, Canada',
            cap: 300,
            theme: 'House'
        },
        {
            name: 'Club Soda',
            loc: '1001 Southbridge St Worcester, MA 01610',
            cap: 500,
            theme: 'Bubble Pop'
        },
        {
            name: 'Studio 52',
            loc: '1508 Okie St NE, Washington, DC 20002',
            cap: 450,
            theme: 'R&B'
        },
        {
            name: 'Ciro\'s',
            loc: '8433 Sunset Boulevard, West Hollywood, CA, United States',
            cap: 100,
            theme: 'Jazz'
        },
        {
            name: 'Paradisio Garage',
            loc: 'Goldacherstrasse 11, 9327 Tübach, Switzerland',
            cap: 250,
            theme: 'Electronica'
        }
    ]

    let clubNamesSelect = document.querySelector('#club-names-select')
    let clubNameText = document.querySelector('#club-name')
    let clubLocText = document.querySelector('#club-loc')
    let clubCapText = document.querySelector('#club-cap')
    let clubThemeText = document.querySelector('#club-theme')

    const updateInfoBox = (idx) => {
        clubNameText.innerText = clubInfo[idx].name
        clubLocText.innerText = clubInfo[idx].loc
        clubCapText.innerText = clubInfo[idx].cap
        clubThemeText.innerText = clubInfo[idx].theme
    }

    const handleSelect = () => {
        updateInfoBox(clubNamesSelect.value)
    }

    clubNamesSelect.addEventListener('change', handleSelect)
}
