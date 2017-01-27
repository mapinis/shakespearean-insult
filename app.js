/*
    Shakespearian Insult Generator
    Written by Mark Apinis
    1/26/17
    Thank You to http://www.pangloss.com/seidel/shake_rule.html for the insults
*/

//Don't worry, I used a Python script to generate these bits
var words0 = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 
 'craven', 'currish', 'dankish', 'dissembling', 'droning', 'errant', 'fawning', 'fobbing', 'froward', 
 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent', 'infectious', 'jarring', 'loggerheaded', 
 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny', 'qualling', 
 'rank', 'reeky', 'roguish', 'ruttish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 
 'unmuzzled', 'vain', 'venomed', 'villainous', 'warped', 'wayward', 'weedy', 'yeasty'];

var words1 = ['base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 
 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 
 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 
 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-born', 'full-gorged', 'guts-griping', 
 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 
 'ill-nurtured', 'knotty-pated', 'milk-livered', 'motley-minded', 'onion-eyed', 'plume-plucked', 
 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing', 'rump-fed', 'shard-borne', 
 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 
 'unchin-snouted', 'weather-bitten'];

var words2 = ['apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey',
 'canker-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 
 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 
 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewdster', 'lout', 
 'maggot-pie', 'malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 
 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'ratsbane', 'scut', 'skainsmate', 
 'strumpet', 'varlot', 'vassal', 'whey-face', 'wagtail'];

var words = [words0, words1, words2];

var generateInsult = function(){
    var insult = [];
    for(arr of words){
        insult.push(arr[Math.floor(Math.random() * arr.length)])
    }
    insult[0] += ","
    insult = insult.join(" ");

    $('#insult').text("Thou " + insult + "!");
    $('#insult').animate({ opacity: 1 }, 300);
};
$( document ).ready(function(){
    $('#reroll').click(function(e) {
        e.preventDefault();
        $('#insult').stop();
        $('#insult').animate({ opacity: 0 }, 100);
        setTimeout(generateInsult, 100);
    });

    $('#reroll').delay(200).animate({ opacity: 1 }, 200);
    setTimeout(generateInsult, 200);
});