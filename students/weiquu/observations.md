### Project: AncientBeast

[AncientBeast](https://github.com/FreezingMoon/AncientBeast) is a turn-based strategy game that has been around for 13 years, with a small but active developer base and player community. It is played directly on the browser and supports various game modes including online multiplayer. The current version being worked on is v0.5.

### My Contributions

I have mainly worked on the improvement of visuals, adding some information on the hexagon grid upon some user action.

My [first issue](https://github.com/FreezingMoon/AncientBeast/issues/2536) was to show a 'Skip turn' icon when the user hovers over an active unit. To solve this issue (PR [here](https://github.com/FreezingMoon/AncientBeast/pull/2558)), I added some assets to the assets loaded as well as an additional hint type. Then, I added the 'Skip turn' icon if the new hint type was called.

My [second issue](https://github.com/FreezingMoon/AncientBeast/issues/2537) was to show the selected ability above the hovered hexagon when targeting the ability. This issue presented a different challenge, since the hint types above are only used for units. To solve this issue (PR [here](https://github.com/FreezingMoon/AncientBeast/pull/2567) and still ongoing), I had to add the unit abilities to the assets, and then add an 'ability' class to the hovered hex's overlay visual state, removing the class as necessary. Then, I checked if the 'ability' class was present, got the appropriate ability asset, and set it to be shown above the hexagon. Unfortunately, due to some complications and a decision to focus more on TEAMMATES work, I have been unable to resolve some of the problems with the PR. I plan to complete it during the exam weeks.

Afterwards, I plan to take on this [third issue](https://github.com/FreezingMoon/AncientBeast/issues/2539) after the PR above is merged, as it is makes use of the changes made in the above 2 PRs.

### My Learning Record

AncientBeast makes use of [Phaser](https://phaser.io/) as its game engine (which is also [open source](https://github.com/phaserjs/phaser/tree/v3.80.1)). Having had not much experience with game development, I found using Phaser quite challenging, and had to rely a lot on community help. I mainly learnt about how to manipulate GameObjects, such as Sprites, in Phaser as well as how they are animated and rendered.

Another thing I learnt about was testing a game's UI using Jest. The approach AncientBeast took relied mostly on getting game objects at certain `x` and `y` positions, as well as checking what existed at certain coordinates to ensure that actions were correctly handled. Some of the difficulties faced were in trying not to have tests depend too much on implementation (e.g. of Creatures in the game), and so tests had to be a bit more general.

More broadly, I learnt about game development in general. There is a lot more attention paid to anything that the user might try to do, including just hovering over something. I think this level of detail to user actions (and how it can be handled neatly in the codebase) is quite unique to game development.

### Observations from AncientBeast

Unfortunately, I think AncientBeast's code is quite messy. The files are long, variables are sometimes inappropriately named (e.g. some are just named `o`), and basically a lot of functionality is packed together in one place, reducing readability. There are deprecated calls as well, which I think should be fixed together with the deprecation. Furthermore, there is a lack of developer documentation, which further poses a challenge to new contributors. For example, I think I would have greatly benefitted from some flows of standard actions, or generally how classes interact with each other. Better documentation might also lead to better structuring of code, which AncientBeast needs. Another point of improvement would be type safety, since I found that quite a few variables are just typed as `any`.

That being said, I think AncientBeast does well in contributor management. Once someone expresses an interest in an issue, they will be assigned it and given a soft deadline, usually of 2 weeks. If they cannot complete it and/or are unresponsive, then the issue will usually be assigned to someone else, or just left without an assignee, indicating that it is available. I think we could benefit from implementing a similar approach, else our issues get inundated with "is this issue still available?" comments and waiting for people to say whether or not they are still working on it. The soft deadline also helps to push progress along.

Another thing we could adopt is having a standardised code format. I've noticed many discrepancies in coding style throughout our codebase, and I think having a standardised coding style (with non-controversial rules) would make our code neater and in some cases more readable.
