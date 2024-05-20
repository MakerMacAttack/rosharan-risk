# rosharan-risk

The game of Risk. But, it's set on Roshar. Wow. If you don't know, Roshar is the continent (and planet, and star system) which provides the setting for the Stormlight Archive as written by Brandon Sanderson.

## History

There's a site that will let you play Risk online and upload custom maps. I emailed Team Dragonsteel to ask them for their permission to make a Roshar map. I got a reply from Brandon's assistant Peter saying no. The site is free to play but there are paying options people can pick to get like flair and stuff, so that was a no-no. Not the answer I wanted but he was clear and direct which is all I wanted so I thanked him for his time.

A few days later I got another email from him, saying that Brandon had reviewed the email he sent and it was too rude. So... still no, but more politer now. Which kinda surprised me since I hadn't thought there was anything rude in the initial email, but it was still a nice thought.

So anyway some time later I learned how to code and I needed a project to practice some things on so I was like, hey, I can just make Risk from scratch. It's simple enough I can do it and getting online multiplayer functionality will be difficult enough to warrant the challenge, and this way no one can make any money so hopefully when I ask Team Dragonsteel if I can give it out to fans they'll say yes.

## Gameplay

I mean it's Risk. There's gonna be a lot of options. One way or another, initial placement is chosen. Then players take turns trying to kill each other via dice rolls. You get some extra troops at the start of each turn based on your total land as well as bonuses for having an entire kingdom at once. You get up to 1 card per turn and you can turn in a matched set for more troops.

I plan to eventually try to add some particular Rosharan flavored extra rules. The simplest will be Blade and Plate. Each player will begin the game with some number of Plate and Blade which they can distribute to their armies. Any army will be able to upgrade attack dice to d8 for every Blade they have, every army will be able to upgrade defense dice to d8 for every Plate they have. If the number of standard troops in a given territory drops below the number of Blade or Plate, the excess Shards automatically retreat at random to an adjacent territory that has 'space' for a Shard. If retreat is impossible, it's instead giving immediately to whatever army killed them.

Thematically this represents that if things look like they're going bad for the army, they will pull back the heavy weapons for use later, but it's random since in retreat your options can be limited. Actually isolating someone and killing them means you've forced them to stand and fight which is why you actually gain the Shards.

Down the road I have vaguer plans for other elements. Oathgates for more complicated deployment, perhaps have Urithiru be a place one army can hold and potentially lose. Maybe Urithiru will lock it's own side if the other end of the Gate is held by an enemy, so in order to invade, you must first successfully take the city with the Oathgate, and then follow up by immediately attacking and winning in Urithiru that turn. I dunno, still thinking.

I also plan to field a lot of comments from users telling me why the only thing that matters is that I add Kaladin to it or that I need to code that every individual troop is some sort of Knight Radiant with complicated rules which will make every turn take seven hours and other non-actionable demands that will clearly ruin gameplay. Y'know, normal stuff.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
