var imgPath="img/";
var imgExt =".jpg";
var deckNode= document.body.getElementsByClassName("card-deck")[0];
var cardNode = deckNode.children.item(0).cloneNode(true);
deckNode.removeChild(deckNode.children[0]);

var cards =[];
cards[0]={
    img:'c1',
    title:'Get involved',
    text:'Contact your political representatives and the media to tell them you want immediate action on climate change. Remind them that reducing greenhouse gas emissions will also build healthier communities. And next time you’re at the polls, vote for politicians who support effective climate policies.'
};
cards[1]={
    img:'c2',
    title:'Be energy efficient',
    text: 'You already switch off lights — what’s next? Change light bulbs to compact fluorescents or LEDs. Unplug computers, TVs and other electronics when not in use. Install a programmable thermostat. And a home energy audit is cheaper than you think — book one today to find even more ways to save energy.'
};
cards[2]={
    img:'c3',
    title:'Choose renewable power',
    text: 'Ask your utility to switch your account to clean, renewable power, such as from wind farms. If it doesn’t offer this option yet, ask it to.'
};
cards[3]={
    img:'c4',
    title:'Trim your waste',
    text: 'Garbage buried in landfills produces methane, a potent greenhouse gas. Keep stuff out of landfills by composting kitchen scraps and garden trimmings, and recycling paper, plastic, metal and glass.'
};
cards[4]={
    img:'c5',
    title:'Get informed',
    text: 'Follow the latest news about climate change.'
};
cards[5]={
    img:'c6',
    title:'Support and Donate',
    text: 'Many organizations, including the David Suzuki Foundation, are working hard on solutions to climate change and rely on financial support from citizens like you. Consider making a donation today by calling 1-800-453-1533.'
};

var i;
for(i=0;i<cards.length;i++)
{
    var nCard = cardNode.cloneNode(true);
    var imgSrc = imgPath + cards[i].img+imgExt;
    nCard.getElementsByTagName("IMG")[0].setAttribute("src", imgSrc);
    nCard.getElementsByClassName("card-title")[0].innerHTML=cards[i].title;
    nCard.getElementsByClassName("card-text")[0].innerHTML=cards[i].text;
    deckNode.appendChild(nCard);
}   

document.addEventListener("jqLoaded", function(){
    
    setCSSDimensions();
    $(window).resize(function(){
        setCSSDimensions();
    });
});

function setCSSDimensions(){
    var _w=window.innerWidth.toString() +"px";
    var _h=window.innerHeight.toString() +"px";
    
 
    
    
    document.documentElement.style.setProperty('--screenW', _w);
    document.documentElement.style.setProperty('--screenH', _h);
};