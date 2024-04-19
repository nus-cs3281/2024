
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-ancientbeast"}},[_v("Project: AncientBeast"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-ancientbeast","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast"}},[_v("AncientBeast")]),_v(" is a turn-based strategy game that has been around for 13 years, with a small but active developer base and player community. It is played directly on the browser and supports various game modes including online multiplayer. The current version being worked on is v0.5.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have mainly worked on the improvement of visuals, adding some information on the hexagon grid upon some user action.")]),_v(" "),_c('p',[_v("My "),_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast/issues/2536"}},[_v("first issue")]),_v(" was to show a 'Skip turn' icon when the user hovers over an active unit. To solve this issue (PR "),_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast/pull/2558"}},[_v("here")]),_v("), I added some assets to the assets loaded as well as an additional hint type. Then, I added the 'Skip turn' icon if the new hint type was called.")]),_v(" "),_c('p',[_v("My "),_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast/issues/2537"}},[_v("second issue")]),_v(" was to show the selected ability above the hovered hexagon when targeting the ability. This issue presented a different challenge, since the hint types above are only used for units. To solve this issue (PR "),_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast/pull/2567"}},[_v("here")]),_v(" and still ongoing), I had to add the unit abilities to the assets, and then add an 'ability' class to the hovered hex's overlay visual state, removing the class as necessary. Then, I checked if the 'ability' class was present, got the appropriate ability asset, and set it to be shown above the hexagon.")]),_v(" "),_c('p',[_v("I plan to take on this "),_c('a',{attrs:{"href":"https://github.com/FreezingMoon/AncientBeast/issues/2539"}},[_v("third issue")]),_v(" after the PR above is merged, as it is makes use of the changes made in the above 2 PRs.")]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("AncientBeast makes use of "),_c('a',{attrs:{"href":"https://phaser.io/"}},[_v("Phaser")]),_v(" as its game engine (which is also "),_c('a',{attrs:{"href":"https://github.com/phaserjs/phaser/tree/v3.80.1"}},[_v("open source")]),_v("). Having had not much experience with game development, I found using Phaser quite challenging, and had to rely a lot on community help. I mainly learnt about how to manipulate GameObjects, such as Sprites, in Phaser as well as how they are animated and rendered.")]),_v(" "),_c('p',[_v("Another thing I learnt about was testing a game's UI using Jest. The approach AncientBeast took relied mostly on getting game objects at certain "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("x")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("y")]),_v(" positions, as well as checking what existed at certain coordinates to ensure that actions were correctly handled. Some of the difficulties faced were in trying not to have tests depend too much on implementation (e.g. of Creatures in the game), and so tests had to be a bit more general.")]),_v(" "),_c('p',[_v("More broadly, I learnt about game development in general. There is a lot more attention paid to anything that the user might try to do, including just hovering over something. I think this level of detail to user actions (and how it can be handled neatly in the codebase) is quite unique to game development.")]),_v(" "),_c('h3',{attrs:{"id":"observations-from-ancientbeast"}},[_v("Observations from AncientBeast"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#observations-from-ancientbeast","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Unfortunately, I think AncientBeast's code is quite messy. The files are long, variables are sometimes inappropriately named (e.g. some are just named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("o")]),_v("), and basically a lot of functionality is packed together in one place, reducing readability. There are deprecated calls as well, which I think should be fixed together with the deprecation. Furthermore, there is a lack of developer documentation, which further poses a challenge to new contributors. For example, I think I would have greatly benefitted from some flows of standard actions, or generally how classes interact with each other. Better documentation might also lead to better structuring of code, which AncientBeast needs. Another point of improvement would be type safety, since I found that quite a few variables are just typed as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("any")]),_v(".")]),_v(" "),_c('p',[_v("That being said, I think AncientBeast does well in contributor management. Once someone expresses an interest in an issue, they will be assigned it and given a soft deadline, usually of 2 weeks. If they cannot complete it and/or are unresponsive, then the issue will usually be assigned to someone else, or just left without an assignee, indicating that it is available. I think we could benefit from implementing a similar approach, else our issues get inundated with \"is this issue still available?\" comments and waiting for people to say whether or not they are still working on it. The soft deadline also helps to push progress along.")]),_v(" "),_c('p',[_v("Another thing we could adopt is having a standardised code format. I've noticed many discrepancies in coding style throughout our codebase, and I think having a standardised coding style (with non-controversial rules) would make our code neater and in some cases more readable.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 19 Apr 2024, 12:52:08 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  