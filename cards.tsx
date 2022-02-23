// array of data
let cards = [
    {
        name: 'New Moon',
        tag: 'A new start is coming',
        meaning: 'The New Moon marks the start of the Waxing cycle and the mid-point of the Dark Moon.  It\'s a dark and veiled time, when the Moon is invisible, and a time of rebirth.  It\'s a time that witches do their work, making wishes and laying down intentions for the new cycle; an intensely magical time, when it\'s easier to pierce the veil to other worlds.'
    },
    {
        name: 'Waxing Crescent Moon',
        tag: 'Have faith in your dreams',
        meaning: 'The Waxing Crescent Moon is the second Moon phase in the eight main Moon phases, but even if it\'s not the time of the Waxing Crescent Moon when you pull this card, it still suggests you need to really pursue your dreams.  It\'s the time to put your foot down hard as you chase your goals.'
    },
    {
        name: 'First Quarter Moon',
        tag: 'Your commitment is being tested',
        meaning: 'In the lunar cycle, the First Quarter Moon comes between the New Mooon and the Full Moon.  It\'s a time when the Sun and Moon are at a hard astrological angle to each other and this can prompt a small crisis.  No matter when you pull this card, you need to see any dramas as a stepping stone to where you want to be.  It can also be a time when you need to stay strong through a storm.'
    },
    {
        name: 'Gibbous Moon',
        tag: 'You\'re very close to achieving your goal',
        meaning: 'The Gibbous Moon comes at the very end of the lunar cycle, just before the Full Moon.  She looks like she\'s bulging because she\'s almost a Full Moon, so she\'s nearly fully rounded.  It\'s the culmination of the Waxing cycle and, as such, tends to be a rather intense period of the month.  No matter when you pull this card, it suggests a very ripe time and a very ripe situation.'
    },
    {
        name: 'Full Moon',
        tag: 'Surrender to the Divine',
        meaning: 'The Full Moon marks the climax of the lunar cycle, making this card something of a power card.  The Full Moon is often the time when answers are given to questions asked during the New Moon, and pulling this card at any time in the lunar cycle suggests answers will be coming your way before too long.'
    },
    {
        name: 'Disseminating Moon',
        tag: 'Take time to breathe out',
        meaning: 'The Disseminating Moon is the first Moon phase after the explosion of energy that comes with the Full Moon.  No matter when you pick this card, it suggests you\'re at a more tranquil point in the life cycle of whatever situation you\'re asking about.  This is not the ideal time to start something new.  The Disseminating Moon is the time to breathe out.  Give yourself some time off and think about what has passed.'
    },
    {
        name: 'Third Quarter Moon',
        tag: 'Adjustments are required',
        meaning: 'At the time of the Third Quarter Moon, we know where we have been - but where are we going?  The Moon is now a Half Moon and slipping away from us as she catches less and less light, moving towards her full disappearance at New Moon.  It\'s a time of falling away and a time to reevaluate.  No matter when you draw this card, the teaching is to release and to trust.'
    },
    {
        name: 'Balsamic Moon',
        tag: 'A time for healing',
        meaning: 'Patience is required at the time of the Balsamic Moon.  It\'s a time for self-care as you slowly but surely prepare yourself for the New Moon, which is just around the corner.  No matter which point in the current Moon cycle you have pulled this card, it\'s a reminder to go a little bit easy on yourself.  The time to step into your creatrix power will come soon enough.  Give yourself the time you need.'
    },
    {
        name: 'New Moon in Aries',
        tag: 'It\'s time to take action',
        meaning: 'Aries is the first sign of the zodiac, so the New Moon in Aries is the first of the 12 or 13 New Moons of the year.  If you\'re committed to working with all the lunations, then the New Moon in Aries is the right time to start, and drawing this card - no matter when you do it - signifies it\'s also the ideal time to start your Moon work, such as setting intentions.'
    },
    {
        name: 'New Moon in Taurus',
        tag: 'Prosperity lies ahead',
        meaning: 'We often feel that it\'s somehow wrong to focus on our finances but the truth is that money can make life far more comfortable from a physical point of view.  Taurus knows this and the New Moon in Taurus is the time to work your magic to create the money you want so you can have the creature comforts you want.  Remember, though, that someone else is still wishing for what you already have.'
    },
    {
        name: 'New Moon in Gemini',
        tag: 'Communication is key',
        meaning: 'Gemini is the sign of communication and socializing, of ideas and travel, and the energy around it and around this card (no matter when you pull it) is speedy, gossipy and flirtatious.  The New moon in Gemini is a wonderful time to get out and socialize - Gemini loves a chat.  One thing to be aware of is that this card can also indicate being mentally \'scattered\'.  Daily meditations will help to unscramble crossed wires in your brain.'
    },
    {
        name: 'New Moon in Cancer',
        tag: 'You and your loved ones are safe',
        meaning: 'The New Moon in Cancer can be a super-emotional time.  The Moon is all about emotions and Cancer is a water sign and also very emotional!  Saying that, the Moon is very happy in the sign of Cancer - it\'s one of her two home signs, along with Taurus - so whenever you pull it, this card suggests that whatever happens next will be in your favour.  It\'s especially positive for familiy members.'
    },
    {
        name: 'New Moon in Leo',
        tag: 'Confidence is your key to success',
        meaning: 'Leo is the sign of the big- and brave-hearted lion, of the pride and showmanship - and flirting.  The energy around the New Moon in Leo (and therefore around this card, whenever you pick it) is hot and generous.  The energy loves itself, and so should you.  If you\'ve been too much of a wallflower, this New Moon card (and the Leo New Moon) comes as a reminder that you need to be proud of who you are.'
    },
    {
        name: 'New Moon in Virgo',
        tag: 'A time to give rather than take',
        meaning: 'Virgo is the sign of health, service and analysis - its energy is precise and has a feel of the harvest about it.  When this card comes up, it could be that a wonderful bounty is coming your way.  However, the energy of the New Moon in Virgo is usually about getting your life in order, so that\'s what you need to do at the time of the Virgo New Moon and whenever else you pull this card.'
    },
    {
        name: 'New Moon in Libra',
        tag: 'A new romantic cycle begins',
        meaning: 'Libra is the sign of love and harmony, negotiation and relationships; it is harmonious, kind and luxurious, and always aiming for balance.  So when we have the New Moon in Libra, or at any time you draw this card, there\'s a restart possible for anything and everything connected to partnerships, negotiations, appearances and justice.  Remember that Libra is depicted by a set of scales - this energy wants to bring things back to equilibrium.'
    },
    {
        name: 'New Moon in Scorpio',
        tag: 'Work through your fears',
        meaning: 'Scorpio is the sign of death and rebirth, magic and shamans - its energy is a little bit dark, occult, even scary.  Not all of us like to face the shadow but Scorpio demands it.  In fact, it\'s through working through your dark side that you can get to the light, and the New Moon in Scorpio (and the appearance of this card at any other time) suggests you need to do that now.'
    },
    {
        name: 'New Moon in Sagittarius',
        tag: 'Luck is on your side',
        meaning: 'Sagittarius is the sign of fun, travel, exploration and the Great Cosmic Quest.  It\'s the sign of big ideas - its energy is expansive, upbeat, lucky and Divine.  The New Moon in Sagittarius exudes all this, as does this card whenever you draw it.  Nothing is set in stone with Sagittarius and an optimistic energy could attract all manner of good things if you tap into the energy by expecting the best.'
    },
    {
        name: 'New Moon in Capricorn',
        tag: 'Your hard work is paying off',
        meaning: 'Capricorn is the sign of ambition, building and hard work - the energy is solid and rigid.  The New Moon in Capricorn is a powerful lunation that comes towards the end of each year and marks arguably the best moment annually to make a list of your hopes, dreams, ambitions and intentions for the year ahead.  Pulling this card at any time suggests that with planning and discipline you can achieve whatever you set your mind to.'
    },
    {
        name: 'New Moon in Aquarius',
        tag: 'Bring love into the situation',
        meaning: 'Aquarius is the sign of invention, modern advances and technology, and humanity.  Its energy is a little brittle - it\'s individual, scientific even, and relatively emotionally detached.  Many people think Aquarius is a water sign because the Aquarius symbol is the Water Bearer, but it\'s actually an air sign and is far more about intellect than the emotional water signs - as is this card, no matter when you draw it.  Dropping convention works will with this energy.'
    },
    {
        name: 'New Moon in Pisces',
        tag: 'Meditate and contemplate',
        meaning: 'Pisces is the sign of reveries and mysteries, or depths of emotion, idealism and hopeless romantics.  It is the sign of water and the unconscious - its energy is deep, like watery depths.  The New Moon in Pisces indicates a time to listen to your feelings and to allow your emotions free reign.  Whatever you\'re feeling as you pull this card is more likely than the truth, unless you\'ve been kidding yourself somehow - and only youknow if that\'s the case or not.'
    },
]

export default cards;