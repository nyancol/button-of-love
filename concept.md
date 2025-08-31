# Concept
## Overview
I am building a little web-based game like candy box. Here below is a description of the concept of the game candy box in case you are not familiar:

My game is about creating a game between two players (a romantic couple), with the goal of helping them communicate better their love through words of affirmation and communication about their feelings.
The three main components are:
- An "I love you" section, where each player sees an "I love you" button, and when pressed, it increases a counter defining how much player 1 loves player 2, and vice-versa.
- A "words of affirmation" section, where each player can send a short message to the other communicating what they love about the other, to which the other user can react with one emoji. This is displayed as a timestamped words of affirmation log, and below is generated a chart indicating different adjectives/single words and a counter matching how many times the player sent words of affirmation relating to this adjective/word.
- A "feelings" section, where each player is incentivized to describe how they feel.

## User authentication
At the beginning, the user has to log in the game and invite an other registered user or accept the invitation of another user to be part of a relation.

## Initial State (When the couple first logs in)
Once the user has created and accepted a relation, the user gets in the following interface:

- The interface is starkly simple.
- At the center: a big button that says: “I Love You” ❤️
- Below it: a two-digit counter (00) with each player’s name above their own.
    - Player 1 counter: 00
    - Player 2 counter: 00
- The counters increase when they press the button.
- Once the counter hits 99, it wraps back around to 00.

At this point, the players realize: “Wait… my love number can’t grow beyond 99?? That doesn’t feel right.” → Curiosity kicks in.

## Discovery & First Upgrade (How to add digits)

### The Suspicious Digits in the Environment
1. Around the interface, small numbers start appearing (like in the footer of the page: copyright years, addresses, timestamps, version numbers, maybe even random numbers floating in the background).
    - The player can drag a digit from these numbers and try to attach it to the counter.
    - The digit slides down uselessly and “clinks” to the ground with a message:
        “This digit has no socket. Where would you even plug it in?”
2. The Hidden Socket Mechanic
    - After a while (or after enough failed drag attempts), players notice that the panel behind the counter wiggles slightly when hovered.
    - By clicking-and-dragging, the entire UI panel pivots like a wall, revealing its backside.
    - On the backside:
        - The two original digits are wired with cords into a small battery.
        - Next to them is an empty socket outline (like a port that hasn’t been unlocked).
        - The battery itself is connected to a hand-crank dynamo.
Message:
    “This counter runs on love energy… but it looks like you’ll need to expand the system to add more digits.”

3. Unlocking the Power Outlet
    - To create a working outlet for new digits, players must perform a small ritual:
        - Click the dynamo to spin it a few times (a playful mini-animation).
        - After a certain number of cranks, sparks fly and the empty socket activates into a glowing port.
        - A message appears:
            “A new digit can now be powered!”

4. Attaching a Digit
    - Now, when players drag a digit from the environment and drop it into the socket, it latches on.
    - At first, it appears as a blank, dark digit.
    - To bring it to life, they must wire it to the battery by clicking and dragging a small power cord.
    - Once connected, it flickers on, and the counter extends from 99 to 999.

The game starts with only the first I love you section, where the counters only have two digits. Once the counter reaches 99, it starts over to 00. Here the player is expected to think of a way to add more digits (let say 2). Here I want to be creative like candy box on how the user can progress. Some ideas I have are: the user can drag/drop other numbers/digits from the game (eg. numbers at the footer of the page relating to the company address), but when dropping the digit next to the counter, it just falls as there is no power outlet to which it can be attached (how to create a power outlet? tbd). Once this is done, and the new digit is added, the digit still appears as blank/shutdown, the user discovers that it is possible to pull on an element which shows that the UI component is actually a wall that can pivot, behind it we can see: on the back of the digits are power cords, connecting to a battery indicating a power level which itself is connected to a manual dynamo.
Here the user needs to connect the battery to the new power outlet that he/she created so the new digit can power up, and the counter can increase beyond 99, to 9999 (in case we added two digits).
-> here the motivation for the players is to be faster in adding new digits so they can increase the counter faster than the other and jokingly prove that they love the other player more.

Rewrite this process adding new ideas and/or completing it with the missing steps like how to create the power outlet. I want a concept that describes the initial state when the players first log in and a state where multiple digits have been added to the counter.

# Insipirations
## Candy Box !
Candy Box! is a whimsical web-based incremental game known for its unique, minimalist ASCII art style and its surprising mechanical depth. The game begins in extreme simplicity: candies accrue automatically over time, and the player can choose to eat or throw them away. As time passes and certain actions are taken, new mechanics, shops, RPG elements, and secrets gradually appear, revealing the true scope of the experience.

Game Concept
At its core, Candy Box! mixes idle/clicker mechanics with RPG progression and discovery. Players start with a nearly blank interface but unlock increasingly complex options such as:

Buying and upgrading equipment like swords,

Planting lollipops for passive resource generation,

Undertaking quests and battles with loot,

Solving puzzles and discovering secrets.

Mechanics and Progression
Number Increases: The primary currency, candies, grow automatically over time. Spending them unlocks new paths or upgrades, similar to clicker or "idle" games.

RPG Elements: Players equip weapons, improve stats, and embark on text-based quests with enemies and bosses, which adds a surprising level of challenge and complexity.

Discovery: There’s a strong sense of curiosity—almost every new option, item, or area is initially hidden. The joy comes from experimenting and sharing discoveries within the community.

ASCII Art & Humor: The entire presentation is in simple text graphics, with quirky humor and unexpected events throughout the game.