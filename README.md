# Nightclub Capacity System

NightCap is a simple tool for measuring the number of persons in a nightclub.
The capacity can be indexed up and down per club to tally patrons.
Nightclubs can be filtered, added, or removed.

## CLIENT1: Initial UI

This phase adds a basic color coding system for nightclub capacity limits.

- Clubs are colored _green_ when occupancy is below the threshold
- Clubs are colored _yellow_ when the occupancy has reached the threshold
- Clubs are colored _red_ when at maximum occupancy

## CLIENT2: Port to React

In this phase, all existing UI and functionality was ported to React.

## CLIENT3: Responsive Design, New Features

In this phase, responsive design was integrated, and additional features were added

New features:
- Increment/decrement buttons per club
- Additional information displayed for each club
- Ability to edit club information
- Ability to add new clubs (provided with defaults)
- Ability to remove any club
- Ability to filter clubs by location

## CLIENT4: Full Stack

In this phase, the frontend was connected to a Flask Python server and PostgreSQL database.
Nightclub information is now stored in a persistent data format within an SQL database.
Data shown in the tool is retreived from the SQL database.