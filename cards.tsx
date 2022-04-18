import blue_moon from './img/BlueMoon.jpeg';
import full_moon from './img/FullMoon.jpeg';
import full_moon_aquarius from './img/FullMooninAquarius.jpeg';
import full_moon_aries from './img/FullMooninAries.jpeg';
import full_moon_cancer from './img/FullMooninCancer.jpeg';
import full_moon_capricorn from './img/FullMooninCapricorn.jpeg';
import full_moon_gemini from './img/FullMooninGemini.jpeg';
import full_moon_leo from './img/FullMooninLeo.jpeg';
import full_moon_libra from './img/FullMooninLibra.jpeg';
import full_moon_pisces from './img/FullMooninPisces.jpeg';
import full_moon_sagittarius from './img/FullMooninSagittarius.jpeg';
import full_moon_scorpio from './img/FullMooninScorpio.jpeg';
import full_moon_taurus from './img/FullMooninTaurus.jpeg';
import full_moon_virgo from './img/FullMooninVirgo.jpeg';
import new_moon_aquarius from './img/NewMooninAquarius.jpeg';
import new_moon_aries from './img/NewMooninAries.jpeg';
import new_moon_cancer from './img/NewMooninCancer.jpeg';
import new_moon_capricorn from './img/NewMooninCapricorn.jpeg';
import new_moon_gemini from './img/NewMooninGemini.jpeg';
import new_moon_leo from './img/NewMooninLeo.jpeg';
import new_moon_libra from './img/NewMooninLibra.jpeg';
import new_moon_pisces from './img/NewMooninPisces.jpeg';
import new_moon_sagittarius from './img/NewMooninSagittarius.jpeg';
import new_moon_scorpio from './img/NewMooninScorpio.jpeg';
import new_moon_taurus from './img/NewMooninTaurus.jpeg';
import new_moon_virgo from './img/NewMooninVirgo.jpeg';
import north_node from './img/NorthNode.jpeg';
import south_node from './img/SouthNode.jpeg';
import super_moon from './img/SuperMoon.jpeg';
import void_moon from './img/Void-Of-CourseMoon.jpeg';
import new_moon from './img/NewMoon.jpeg';
import waxing_crescent_moon from './img/WaxingCrescentMoon.jpeg';
import first_quarter_moon from './img/FirstQuarterMoon.jpeg';
import gibbous_moon from './img/GibbousMoon.jpeg';
import disseminating_moon from './img/DisseminatingMoon.jpeg';
import third_quarter_moon from './img/ThirdQuarterMoon.jpeg';
import balsamic_moon from './img/BalsamicMoon.jpeg';
import new_moon_eclipse from './img/NewMoonEclipse.jpeg';
import full_moon_eclipse from './img/FullMoonEclipse.jpeg';
import waxing_moon from './img/WaxingMoon.jpeg';
import waning_moon from './img/WaningMoon.jpeg';
import cardinal_moon from './img/CardinalMoon.jpeg';
import fixed_moon from './img/FixedMoon.jpeg';
import mutable_moon from './img/MutableMoon.jpeg';

// array of data
interface Card {
    name: string,
    tag: string,
    meaning: string,
    card_face: any,
}

let cards: Array<Card> = [
    {
        name: 'New Moon',
        tag: 'A new start is coming',
        meaning: 'The New Moon marks the start of the Waxing cycle and the mid-point of the Dark Moon.  It\'s a dark and veiled time, when the Moon is invisible, and a time of rebirth.  It\'s a time that witches do their work, making wishes and laying down intentions for the new cycle; an intensely magical time, when it\'s easier to pierce the veil to other worlds.',
        card_face: new_moon,
    },
    {
        name: 'Waxing Crescent Moon',
        tag: 'Have faith in your dreams',
        meaning: 'The Waxing Crescent Moon is the second Moon phase in the eight main Moon phases, but even if it\'s not the time of the Waxing Crescent Moon when you pull this card, it still suggests you need to really pursue your dreams.  It\'s the time to put your foot down hard as you chase your goals.',
        card_face: waxing_crescent_moon,
    },
    {
        name: 'First Quarter Moon',
        tag: 'Your commitment is being tested',
        meaning: 'In the lunar cycle, the First Quarter Moon comes between the New Mooon and the Full Moon.  It\'s a time when the Sun and Moon are at a hard astrological angle to each other and this can prompt a small crisis.  No matter when you pull this card, you need to see any dramas as a stepping stone to where you want to be.  It can also be a time when you need to stay strong through a storm.',
        card_face: first_quarter_moon,
    },
    {
        name: 'Gibbous Moon',
        tag: 'You\'re very close to achieving your goal',
        meaning: 'The Gibbous Moon comes at the very end of the lunar cycle, just before the Full Moon.  She looks like she\'s bulging because she\'s almost a Full Moon, so she\'s nearly fully rounded.  It\'s the culmination of the Waxing cycle and, as such, tends to be a rather intense period of the month.  No matter when you pull this card, it suggests a very ripe time and a very ripe situation.',
        card_face: gibbous_moon,
    },
    {
        name: 'Full Moon',
        tag: 'Surrender to the Divine',
        meaning: 'The Full Moon marks the climax of the lunar cycle, making this card something of a power card.  The Full Moon is often the time when answers are given to questions asked during the New Moon, and pulling this card at any time in the lunar cycle suggests answers will be coming your way before too long.',
        card_face: full_moon,
    },
    {
        name: 'Disseminating Moon',
        tag: 'Take time to breathe out',
        meaning: 'The Disseminating Moon is the first Moon phase after the explosion of energy that comes with the Full Moon.  No matter when you pick this card, it suggests you\'re at a more tranquil point in the life cycle of whatever situation you\'re asking about.  This is not the ideal time to start something new.  The Disseminating Moon is the time to breathe out.  Give yourself some time off and think about what has passed.',
        card_face: disseminating_moon,
    },
    {
        name: 'Third Quarter Moon',
        tag: 'Adjustments are required',
        meaning: 'At the time of the Third Quarter Moon, we know where we have been - but where are we going?  The Moon is now a Half Moon and slipping away from us as she catches less and less light, moving towards her full disappearance at New Moon.  It\'s a time of falling away and a time to reevaluate.  No matter when you draw this card, the teaching is to release and to trust.',
        card_face: third_quarter_moon,
    },
    {
        name: 'Balsamic Moon',
        tag: 'A time for healing',
        meaning: 'Patience is required at the time of the Balsamic Moon.  It\'s a time for self-care as you slowly but surely prepare yourself for the New Moon, which is just around the corner.  No matter which point in the current Moon cycle you have pulled this card, it\'s a reminder to go a little bit easy on yourself.  The time to step into your creatrix power will come soon enough.  Give yourself the time you need.',
        card_face: balsamic_moon,
    },
    {
        name: 'New Moon in Aries',
        tag: 'It\'s time to take action',
        meaning: 'Aries is the first sign of the zodiac, so the New Moon in Aries is the first of the 12 or 13 New Moons of the year.  If you\'re committed to working with all the lunations, then the New Moon in Aries is the right time to start, and drawing this card - no matter when you do it - signifies it\'s also the ideal time to start your Moon work, such as setting intentions.',
        card_face: new_moon_aries,
    },
    {
        name: 'New Moon in Taurus',
        tag: 'Prosperity lies ahead',
        meaning: 'We often feel that it\'s somehow wrong to focus on our finances but the truth is that money can make life far more comfortable from a physical point of view.  Taurus knows this and the New Moon in Taurus is the time to work your magic to create the money you want so you can have the creature comforts you want.  Remember, though, that someone else is still wishing for what you already have.',
        card_face: new_moon_taurus,
    },
    {
        name: 'New Moon in Gemini',
        tag: 'Communication is key',
        meaning: 'Gemini is the sign of communication and socializing, of ideas and travel, and the energy around it and around this card (no matter when you pull it) is speedy, gossipy and flirtatious.  The New moon in Gemini is a wonderful time to get out and socialize - Gemini loves a chat.  One thing to be aware of is that this card can also indicate being mentally \'scattered\'.  Daily meditations will help to unscramble crossed wires in your brain.',
        card_face: new_moon_gemini,
    },
    {
        name: 'New Moon in Cancer',
        tag: 'You and your loved ones are safe',
        meaning: 'The New Moon in Cancer can be a super-emotional time.  The Moon is all about emotions and Cancer is a water sign and also very emotional!  Saying that, the Moon is very happy in the sign of Cancer - it\'s one of her two home signs, along with Taurus - so whenever you pull it, this card suggests that whatever happens next will be in your favour.  It\'s especially positive for familiy members.',
        card_face: new_moon_cancer,
    },
    {
        name: 'New Moon in Leo',
        tag: 'Confidence is your key to success',
        meaning: 'Leo is the sign of the big- and brave-hearted lion, of the pride and showmanship - and flirting.  The energy around the New Moon in Leo (and therefore around this card, whenever you pick it) is hot and generous.  The energy loves itself, and so should you.  If you\'ve been too much of a wallflower, this New Moon card (and the Leo New Moon) comes as a reminder that you need to be proud of who you are.',
        card_face: new_moon_leo,
    },
    {
        name: 'New Moon in Virgo',
        tag: 'A time to give rather than take',
        meaning: 'Virgo is the sign of health, service and analysis - its energy is precise and has a feel of the harvest about it.  When this card comes up, it could be that a wonderful bounty is coming your way.  However, the energy of the New Moon in Virgo is usually about getting your life in order, so that\'s what you need to do at the time of the Virgo New Moon and whenever else you pull this card.',
        card_face: new_moon_virgo,
    },
    {
        name: 'New Moon in Libra',
        tag: 'A new romantic cycle begins',
        meaning: 'Libra is the sign of love and harmony, negotiation and relationships; it is harmonious, kind and luxurious, and always aiming for balance.  So when we have the New Moon in Libra, or at any time you draw this card, there\'s a restart possible for anything and everything connected to partnerships, negotiations, appearances and justice.  Remember that Libra is depicted by a set of scales - this energy wants to bring things back to equilibrium.',
        card_face: new_moon_libra,
    },
    {
        name: 'New Moon in Scorpio',
        tag: 'Work through your fears',
        meaning: 'Scorpio is the sign of death and rebirth, magic and shamans - its energy is a little bit dark, occult, even scary.  Not all of us like to face the shadow but Scorpio demands it.  In fact, it\'s through working through your dark side that you can get to the light, and the New Moon in Scorpio (and the appearance of this card at any other time) suggests you need to do that now.',
        card_face: new_moon_scorpio,
    },
    {
        name: 'New Moon in Sagittarius',
        tag: 'Luck is on your side',
        meaning: 'Sagittarius is the sign of fun, travel, exploration and the Great Cosmic Quest.  It\'s the sign of big ideas - its energy is expansive, upbeat, lucky and Divine.  The New Moon in Sagittarius exudes all this, as does this card whenever you draw it.  Nothing is set in stone with Sagittarius and an optimistic energy could attract all manner of good things if you tap into the energy by expecting the best.',
        card_face: new_moon_sagittarius,
    },
    {
        name: 'New Moon in Capricorn',
        tag: 'Your hard work is paying off',
        meaning: 'Capricorn is the sign of ambition, building and hard work - the energy is solid and rigid.  The New Moon in Capricorn is a powerful lunation that comes towards the end of each year and marks arguably the best moment annually to make a list of your hopes, dreams, ambitions and intentions for the year ahead.  Pulling this card at any time suggests that with planning and discipline you can achieve whatever you set your mind to.',
        card_face: new_moon_capricorn,
    },
    {
        name: 'New Moon in Aquarius',
        tag: 'Bring love into the situation',
        meaning: 'Aquarius is the sign of invention, modern advances and technology, and humanity.  Its energy is a little brittle - it\'s individual, scientific even, and relatively emotionally detached.  Many people think Aquarius is a water sign because the Aquarius symbol is the Water Bearer, but it\'s actually an air sign and is far more about intellect than the emotional water signs - as is this card, no matter when you draw it.  Dropping convention works will with this energy.',
        card_face: new_moon_aquarius,
    },
    {
        name: 'New Moon in Pisces',
        tag: 'Meditate and contemplate',
        meaning: 'Pisces is the sign of reveries and mysteries, or depths of emotion, idealism and hopeless romantics.  It is the sign of water and the unconscious - its energy is deep, like watery depths.  The New Moon in Pisces indicates a time to listen to your feelings and to allow your emotions free reign.  Whatever you\'re feeling as you pull this card is more likely than the truth, unless you\'ve been kidding yourself somehow - and only youknow if that\'s the case or not.',
        card_face: new_moon_pisces,
    },
    {
        name: 'Full Moon in Aries',
        tag: 'A fiery climax approaches',
        meaning: 'The Full Moon in Aries is a super-fiery time, when emotions can run very high.  On the upside, there\'s excitement about what may lie ahead, but tempers are likely to flare, with rash comments or decisions.  No matter when you pull this card, it signals that the situation has just, or is about to, come to a peak, perhaps in a rather heated way.  There could be a price to pay if you have been too competitive or too blunt.',
        card_face: full_moon_aries,
    },
    {
        name: 'Full Moon in Taurus',
        tag: 'Your dreams need a practical plan',
        meaning: 'The Full Moon in Taurus is a time to get back to earth, to get grounded, to work through any negative feelings you\'ve been dealing with and to find a balance between being passionate and being overly intense.  Money issues may come to a head at the time of the Full Moon in Taurus, but you can take this card as a sign to pay more attention to your cash flow no matter when you draw it.',
        card_face: full_moon_taurus,
    },
    {
        name: 'Full Moon in Gemini',
        tag: 'The answers you need are coming',
        meaning: 'Talk, talk and more talk as the emotional Full Moon moves into the communicative sign of Gemini.  It\'s too easy to say too much, so mind how you go if you pull this card.  This card can also indicate an enjoyable social event, since the Full Moon in Gemini is a great time for socializing.  This card also augurs well for any study you\'re either taking or considering.',
        card_face: full_moon_gemini,
    },
    {
        name: 'Full Moon in Cancer',
        tag: 'A personal issue reaches resolution',
        meaning: 'The heightened emotions of the Moon-Cancer combination can\'t be ignored.  However, Cncer is one of the Moon\'s two home signs (along with Taurus) so astrologically-speaking the Moon loves to be in this sign - in face she rules Cancer.  This means that with this card there\'s a sense that \'All is as it should be\' or \'Don\'t worry, all will soon be well.\'',
        card_face: full_moon_cancer,
    },
    {
        name: 'Full Moon in Leo',
        tag: 'Don\'t let pride get in your way',
        meaning: 'When the Full Moon comes into in Leo it can be a wonderfully bright time, where people feel more confident to show the world their talents and assets.  That\'s the upside of this lunation and of this card (no matter when you pull it).  However, take note that the Leo-Full Moon combination creates a sort of tension between your needs and the needs of people in your networks.  Leo-Full Moon is a time to release pride.',
        card_face: full_moon_leo,
    },
    {
        name: 'Full Moon in Virgo',
        tag: 'You are good enough',
        meaning: 'The Full Moon in Virgo is a time to declutter your life, you home and your office.  It\'s a time to sort what\'s good in your life from what\'s not serving you.  It\'s also the time to clear out your energies via salt baths and meditations, and to practise getting more grounded, by walking barefoot.  No matter when you draw this card, it\'s a reminder that any time is a good time to start living a healthier life.',
        card_face: full_moon_virgo,
    },
    {
        name: 'Full Moon in Libra',
        tag: 'A win-win outcome is forecast',
        meaning: 'No matter when you pull the Full Moon in libra card, it encourages you to find a balance between your desires and those of the people around you.  Balance is a very Libran energy and the Full Moon brings things to a peak.  Dramas and upsets bring partnerships to the fore.  Libra energy also brings love energy.  Negotiations are easier.',
        card_face: full_moon_libra,
    },
    {
        name: 'Full Moon in Scorpio',
        tag: 'It\'s time to release negativity',
        meaning: 'The Full Moon in Scorpio has a sting in its tail: it can herald a vindictive end to a relationship.  It can also be a time when we want to be good but we\'re naughty.  If you pull this card, no matter when, your dark side and your \'shadow self\' may be showing.  The Full Moon in Scorpio is also a time of magic.  If you were thinking of making some magic, this is your sign to do it.',
        card_face: full_moon_scorpio,
    },
    {
        name: 'Full Moon in Sagittarius',
        tag: 'Look at the bigger picture',
        meaning: 'The Full Moon in Sagittarius is a time when we are reminded that life is an adventure and there\'s a big wide world to see beyond our backyard.  It\'s about having fun and being prepared to sail into uncharted territory.  It\'s about big ideas versus the details.  No matter when you draw this card, it encourages you to look at the bigger picture.',
        card_face: full_moon_sagittarius,
    },
    {
        name: 'Full Moon in Capricorn',
        tag: 'The end of a tough cycle approaches',
        meaning: 'The Full Moon in Capricorn has a very strong work ethic and energy, and will more than likely come up when you\'re asking a professional question.  If your question is about another matter, it will serve as a much-needed reminder to move through any feelings of hopelessness you may have been feeling about your situation, and this applies no matter when you draw the card.  Making a plan is a far better use of your time.',
        card_face: full_moon_capricorn,
    },
    {
        name: 'Full Moon in Aquarius',
        tag: 'Show the world the real you',
        meaning: 'Every Full Moon is a time to release and let go, but the addition of Aquarian energy to the mix triples that message.  Aquarius is the opposite of clingly, and pulling this card at any time suggests either you need to let go or someone is thinking they are the ones who need to let go - perhaps of you.  What needs to go?  What is the right thing to do?  Whatever happens next could be highly unconventional or unexpected.',
        card_face: full_moon_aquarius,
    },
    {
        name: 'Full Moon in Pisces',
        tag: 'Balance spirituality and practicality',
        meaning: 'Pisces is the last sign of the zodiac, so the Full Moon in Pisces symbolically marks endings.  When the Moon is full in Pisces, or whenever you pull this card, it\'s a time to dive deep into your emotions.  Practicality is at odds with the numinous Piscean energies that have no borders, so feel your way now.  Psychic abiliy is heightened when the Full Moon is in Pisces, and soulmates now connect.  It\'s also a time to send out your dreams to the Universe, releasing your fears.',
        card_face: full_moon_pisces,
    },
    {
        name: 'New Moon Eclipse',
        tag: 'Expect powerful change',
        meaning: 'New Moon Eclipses are among the most exciting astrological events.  They herald a complete change of pace.  It\'s as though you\'re headed in one direction, probably being guided by your ego, and then here comes the Divine - the Goddess, or Spirit - to turn you instead to face the direction you actually need to go.  Regardless of whether or not there\'s a New Moon Eclipse happening when you pull this card, it\'s a powerful affirmation of positive turnarounds.',
        card_face: new_moon_eclipse,
    },
    {
        name: 'Full Moon Eclipse',
        tag: 'Conclusions are within reach',
        meaning: 'Full Moons are nearly always about climaxes and very often about conclusions; Full Moon Eclipses are the same, but on steroids.  A Full Moon Eclipse can be hard to handle because it portents change, something many of us are comfortable with.  But change is a part of life and this card, no matter when you pull it, reminds you of that fact.  Full Moon Eclipses can also give us a glimpse into what Carl Jung called \'the shadow self\'.  Work with your darkness.',
        card_face: full_moon_eclipse,
    },
    {
        name: 'Waxing Moon',
        tag: 'The energy is gaining momentum',
        meaning: 'The Waxing cycle is the period of the lunar cycle from New Moon to Full Moon, and during this time the Moon appears to be slightly bigger and rounder every night.  This is a very empowered and empowering time, and this is a very promising card.  It suggests now is the time to make plans and to act on them, no matter when you actually pull the card.',
        card_face: waxing_moon,
    },
    {
        name: 'Waning Moon',
        tag: 'What do you need to release',
        meaning: 'At the time of the Waning cycle, take a moment to look up in the skies every night - you will see the Moon growing smaller and smaller as she moves from Full to New again.  It\'s the time to cling on to anyone or anything.  Drawing this card suggests your situation is in its autumn and winter phase, so hunker down and start the regeneration process.',
        card_face: waning_moon,
    },
    {
        name: 'Void-of-Course Moon',
        tag: 'Nothing will come of this situation',
        meaning: 'The main definition of a Void-of-Course Moon is when the moon won\'t make a major connection with any of the planets until she enters the next sign.  The best thing you can do when you get this card is to chant the Sanskrit words, \'Om Namo Narayani!\', which means, \'I surrender to the Divine\'.  A Void-of-Course Moon is time to just \'be\'.',
        card_face: void_moon,
    },
    {
        name: 'Cardinal Moon',
        tag: 'Be bold and make the first move',
        meaning: 'In astrology, there are three quadruplicities: Cardinal, Fixed and Mutable.  The Cardinal signs are Aries, Cancer, Libra and Capricor (remember, we each have all 12 signs in our chart, for different parts of our lives - it\'s just the way the astrological wheel works).  These are the signs that like to get things started and which are the natural leaders.  No matter when you draw this card, it\'s a sign that something new is starting and you quite possibly need to take the lead on it.',
        card_face: cardinal_moon,
    },
    {
        name: 'Fixed Moon',
        tag: 'Hold your vision',
        meaning: 'In astrology, there are three quadruplicities: Cardinal, Fixed and Mutable.  The Fixed signs are Taurus, Leo, Scorpio and Aquarius.  The Fixed signs can be stubborn, so anything that\'s just starting as you draw this card may well last longer.  (Remember, we each have all the start signs in our chart - it\'s just the way the astrological wheel works - so there\'s no judgement when we say that while it\'s admirable how much staying-power the Fixed signs have, they can also be obstinate.)',
        card_face: fixed_moon,
    },
    {
        name: 'Mutable Moon',
        tag: 'Nothing is yet set in stone',
        meaning: 'In astrology, there are three quadruplicities: Cardinal, Fixed and Mutable.  The Mutable signs are Gemini, Sagittarius, Virgo and Pisces, and when the Moon is in one of these signs, you know there\'s going to be more flexibility in a situation.  Any time you pull this card, it suggests there\'s the opportunity to keep visualizing and affirming what you want, as there\'s still room for change.  So think about what you want, and enjoy the daydream!',
        card_face: mutable_moon,
    },
    {
        name: 'Supermoon',
        tag: 'Emotions are running high',
        meaning: 'A supermoon is a New or Full Moon that takes place when the Moon is at its closest point to the Earth during its monthly orbit, an event known as perigee.  If it\'s a Full Moon, the Moon appears around 14 percent bigger at this time.  The Moon is known as the Queen of Emotions, and if you draw the Supermoon card (regardless of when you do this) you can expect your feelings to be more highly charged.',
        card_face: super_moon,
    },
    {
        name: 'Blue Moon',
        tag: 'Bellieve in the impossible',
        meaning: 'There are usually three Full Moons between each equinox and solstice (and vice versa).  Sometimes, though, we get four Full Moons in a single season.  When that happens, the third of the season\'s four Full Moons is called a Blue Moon - at least, that was the original definition of a Blue Moon.  These days it\'s popular to use the Blue Moon for the second Full Moon in any calendar month that has two Full Moons.  Drawing this card suggests you\'re about to get a rare chance, and that something \'one-off\' could well be about to happen.',
        card_face: blue_moon,
    },
    {
        name: 'South Node',
        tag: 'Don\'t let your past hold you back',
        meaning: 'The South Node is where the Moon crosses the ecliptic going south.  On the horoscope chart it shows us what we are likely to become obsessed with, but which will probably do us little or no good.  The South Node is the karmic astrological point that reminds us of the well-known phrase, \'If you always do what you\'ve always done, you\'ll always get what you\'ve always got!\'',
        card_face: south_node,
    },
    {
        name: 'North Node',
        tag: 'Step out of your comfort zone',
        meaning: 'The North Node is where the Moon crosses the ecliptic going north.  It\'s a karmic point and on the horoscope chart shows us what we need to do and where we need to go with our life to find satisfaction, fulfillment and happiness.  The North Node is the karmic astrological point that reminds us - to paraphrase Andre Gide - that in order to discover new oceans, we have to be prepared to lose sight of the shore.',
        card_face: north_node,
    },
];

export default cards;