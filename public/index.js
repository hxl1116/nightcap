window.onload = () => {
    const clubInfo = [
        {
            name: 'Club Arcane',
            loc: '461 King St W, Toronto, ON M5V 1K4, Canada',
            cap: 450,
            theme: 'Hip-Hop',
            color: 'e9c46a',
            textColor: '2a9d8f'
        },
        {
            name: 'Club Underground',
            loc: ' University Ave, Kingston, ON K7L 2N9, Canada',
            cap: 300,
            theme: 'House',
            color: 'b08968',
            textColor: 'ede0d4'
        },
        {
            name: 'Club Soda',
            loc: '1001 Southbridge St Worcester, MA 01610',
            cap: 500,
            theme: 'Bubble Pop',
            color: '333d29',
            textColor: 'c2c5aa'
        },
        {
            name: 'Studio 52',
            loc: '1508 Okie St NE, Washington, DC 20002',
            cap: 450,
            theme: 'R&B',
            color: 'f8edeb',
            textColor: 'ef476f'
        },
        {
            name: 'Ciro\'s',
            loc: '8433 Sunset Boulevard, West Hollywood, CA, United States',
            cap: 100,
            theme: 'Jazz',
            color: 'bc4749',
            textColor: 'f2e8cf'
        },
        {
            name: 'Paradisio Garage',
            loc: 'Goldacherstrasse 11, 9327 Tübach, Switzerland',
            cap: 250,
            theme: 'Electronica',
            color: '003566',
            textColor: 'ffd60a'
        }
    ]

    let clubNamesSelect = document.querySelector('#club-names-select')
    let clubNameText = document.querySelector('#club-name')
    let clubLocText = document.querySelector('#club-loc')
    let clubCapText = document.querySelector('#club-cap')
    let clubThemeText = document.querySelector('#club-theme')

    let clubInfoBox = document.querySelector('#club-info')

    const updateInfoBox = (idx) => {
        clubNameText.innerText = clubInfo[idx].name
        clubLocText.innerText = clubInfo[idx].loc
        clubCapText.innerText = clubInfo[idx].cap
        clubThemeText.innerText = clubInfo[idx].theme

        // Update colors
        clubInfoBox.style.backgroundColor = `#${clubInfo[idx].color}`
        clubInfoBox.style.color = `#${clubInfo[idx].textColor}`
    }

    const handleSelect = () => {
        updateInfoBox(clubNamesSelect.value)
    }

    clubNamesSelect.addEventListener('change', handleSelect)
}
