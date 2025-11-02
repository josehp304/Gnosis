export interface Prayer {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: "traditional" | "marian" | "devotional" | "liturgical";
  icon: string;
  whenToRecite?: string;
  text: string;
  context?: string;
  history?: string;
}

export const catholicPrayers: Prayer[] = [
  {
    id: "memorare",
    title: "The Memorare",
    subtitle: "Prayer to Our Lady",
    description: "A beloved Marian prayer asking for the intercession of the Blessed Virgin Mary in times of need.",
    category: "marian",
    icon: "🌹",
    whenToRecite: "In times of need, distress, or when seeking Mary's intercession",
    context: "A prayer of confidence in Mary's maternal care and powerful intercession",
    history: "Attributed to St. Bernard of Clairvaux (12th century), though its exact origins are debated",
    text: `Remember, O most gracious Virgin Mary,
that never was it known that anyone who fled to thy protection,
implored thy help, or sought thy intercession was left unaided.

Inspired with this confidence,
I fly to thee, O Virgin of virgins, my Mother;
to thee do I come; before thee I stand, sinful and sorrowful.

O Mother of the Word Incarnate,
despise not my petitions,
but in thy mercy hear and answer me.

Amen.`
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
    subtitle: "Statement of Faith",
    description: "The fundamental statement of Christian faith, summarizing the core beliefs of Christianity.",
    category: "traditional",
    icon: "✝️",
    whenToRecite: "During Mass, personal prayer, or when professing faith",
    context: "A concise summary of the essential truths of the Catholic faith",
    history: "Developed in the early centuries of Christianity, traditionally attributed to the Twelve Apostles",
    text: `I believe in God,
the Father almighty,
Creator of heaven and earth,
and in Jesus Christ, his only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died and was buried;
he descended into hell;
on the third day he rose again from the dead;
he ascended into heaven,
and is seated at the right hand of God the Father almighty;
from there he will come to judge the living and the dead.

I believe in the Holy Spirit,
the holy catholic Church,
the communion of saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting.

Amen.`
  },
  {
    id: "hail-holy-queen",
    title: "Hail Holy Queen",
    subtitle: "Salve Regina",
    description: "A beautiful Marian antiphon expressing devotion to Mary as Queen of Heaven and our spiritual mother.",
    category: "marian",
    icon: "👑",
    whenToRecite: "After the Rosary, during Marian devotions, or in times of seeking comfort",
    context: "A prayer acknowledging Mary's queenship and asking for her maternal protection",
    history: "Composed in the 11th century, traditionally attributed to Hermann of Reichenau",
    text: `Hail, holy Queen, Mother of mercy,
our life, our sweetness, and our hope.
To thee do we cry, poor banished children of Eve;
to thee do we send up our sighs,
mourning and weeping in this valley of tears.

Turn then, most gracious advocate,
thine eyes of mercy toward us;
and after this our exile,
show unto us the blessed fruit of thy womb, Jesus.

O clement, O loving, O sweet Virgin Mary.

Pray for us, O holy Mother of God,
that we may be made worthy of the promises of Christ.

Amen.`
  },
  {
    id: "act-of-contrition",
    title: "Act of Contrition",
    subtitle: "Prayer of Repentance",
    description: "A prayer expressing sorrow for sins and firm purpose of amendment, often used in the Sacrament of Confession.",
    category: "devotional",
    icon: "💔",
    whenToRecite: "During Confession, examination of conscience, or personal repentance",
    context: "A prayer of sincere sorrow for sin and resolution to avoid sin in the future",
    history: "Various forms have been used throughout Church history for expressing contrition",
    text: `O my God,
I am heartily sorry for having offended Thee,
and I detest all my sins because of thy just punishments,
but most of all because they offend Thee, my God,
who art all good and deserving of all my love.

I firmly resolve with the help of Thy grace
to sin no more and to avoid the near occasion of sin.

Amen.`
  },
  {
    id: "our-father",
    title: "Our Father",
    subtitle: "The Lord's Prayer",
    description: "The prayer that Jesus Christ himself taught to his disciples, the most fundamental Christian prayer.",
    category: "traditional",
    icon: "🙏",
    whenToRecite: "Daily prayer, during Mass, the Rosary, and all liturgical celebrations",
    context: "The perfect prayer given by Jesus, encompassing all our needs and relationship with God",
    history: "Taught by Jesus Christ to his disciples as recorded in Matthew 6:9-13 and Luke 11:2-4",
    text: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come,
thy will be done
on earth as it is in heaven.

Give us this day our daily bread,
and forgive us our trespasses,
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil.

Amen.`
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    subtitle: "Ave Maria",
    description: "The most beloved Marian prayer, combining the angel Gabriel's greeting with Elizabeth's praise and a petition for Mary's intercession.",
    category: "marian",
    icon: "🌟",
    whenToRecite: "Daily prayer, the Rosary, Angelus, and Marian devotions",
    context: "A prayer honoring Mary and seeking her intercession, especially at the hour of death",
    history: "Based on Luke 1:28 and Luke 1:42, with the petition added by the Church over time",
    text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou amongst women,
and blessed is the fruit of thy womb, Jesus.

Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death.

Amen.`
  },
  {
    id: "glory-be",
    title: "Glory Be",
    subtitle: "Doxology",
    description: "A short hymn of praise to the Holy Trinity, often recited at the end of prayers.",
    category: "traditional",
    icon: "✨",
    whenToRecite: "After each decade of the Rosary, at the end of prayers, or as a doxology",
    context: "A prayer glorifying the Father, Son, and Holy Spirit.",
    history: "An ancient Christian doxology, used since the early centuries of the Church.",
    text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit,
as it was in the beginning,
is now, and ever shall be,
world without end.

Amen.`
  },
  {
    id: "i-confess",
    title: "I Confess (Confiteor)",
    subtitle: "Prayer of Repentance",
    description: "A penitential prayer recited during Mass and in personal prayer, expressing sorrow for sins.",
    category: "liturgical",
    icon: "🕊️",
    whenToRecite: "At the beginning of Mass, during personal examination of conscience",
    context: "A prayer of confession and plea for mercy from God and the saints.",
    history: "Part of the Penitential Act in the Roman Rite Mass.",
    text: `I confess to almighty God
and to you, my brothers and sisters,
that I have greatly sinned,
in my thoughts and in my words,
in what I have done and in what I have failed to do,
through my fault, through my fault,
through my most grievous fault;
therefore I ask blessed Mary ever-Virgin,
all the Angels and Saints,
and you, my brothers and sisters,
to pray for me to the Lord our God.

Amen.`
  },
  {
    id: "act-of-faith",
    title: "Act of Faith",
    subtitle: "Prayer of Belief",
    description: "A prayer professing belief in all that God has revealed and the Church teaches.",
    category: "devotional",
    icon: "🕯️",
    whenToRecite: "During personal prayer, before receiving the sacraments, or in times of doubt",
    context: "A declaration of faith in God and His teachings.",
    history: "A traditional Catholic prayer for strengthening faith.",
    text: `O my God, I firmly believe
that You are one God in three Divine Persons:
Father, Son, and Holy Spirit.
I believe that Your Divine Son became man and died for our sins,
and that He will come to judge the living and the dead.
I believe these and all the truths
which the Holy Catholic Church teaches,
because You have revealed them,
who can neither deceive nor be deceived.

Amen.`
  },
  {
    id: "act-of-hope",
    title: "Act of Hope",
    subtitle: "Prayer of Trust",
    description: "A prayer expressing trust in God's promises and desire for eternal life.",
    category: "devotional",
    icon: "🌈",
    whenToRecite: "During personal prayer, in times of difficulty or discouragement",
    context: "A declaration of hope in God's mercy and salvation.",
    history: "A traditional Catholic prayer for strengthening hope.",
    text: `O my God, relying on Your almighty power and infinite mercy and promises,
I hope to obtain pardon of my sins,
the help of Your grace, and life everlasting,
through the merits of Jesus Christ, my Lord and Redeemer.

Amen.`
  },
  {
    id: "morning-prayer",
    title: "Morning Prayer",
    subtitle: "Daily Offering",
    description: "A prayer dedicating the day to God, asking for guidance and protection.",
    category: "devotional",
    icon: "🌅",
    whenToRecite: "At the start of each day",
    context: "A daily offering of oneself and the day to God.",
    history: "A traditional Catholic practice to begin the day in God's presence.",
    text: `O Jesus, through the Immaculate Heart of Mary,
I offer You my prayers, works, joys, and sufferings of this day
for all the intentions of Your Sacred Heart,
in union with the Holy Sacrifice of the Mass throughout the world,
in reparation for my sins, for the intentions of all my relatives and friends,
and in particular for the intentions of the Holy Father.

Amen.`
  },
  {
    id: "night-prayer",
    title: "Night Prayer",
    subtitle: "Prayer Before Sleep",
    description: "A prayer of thanksgiving and trust in God before going to sleep.",
    category: "devotional",
    icon: "🌙",
    whenToRecite: "Before going to bed each night",
    context: "A prayer entrusting oneself to God's care during the night.",
    history: "A traditional Catholic practice to end the day with gratitude and trust.",
    text: `O my God, I thank You for having preserved me this day.
I offer You my sleep and all the moments of this night,
and I ask You to keep me from sin.
I put myself within Your sacred side and under the mantle of Our Lady.
Let Your holy angels stand about me and keep me in peace.
And let Your blessing be upon me always.

Amen.`
  },
  {
    id: "before-meals",
    title: "Prayer Before Meals",
    subtitle: "Grace Before Meals",
    description: "A short prayer thanking God for the gift of food and asking for His blessing.",
    category: "traditional",
    icon: "🍞",
    whenToRecite: "Before eating any meal",
    context: "A prayer of gratitude for God's provision.",
    history: "A common Christian custom since the earliest times.",
    text: `Bless us, O Lord, and these Thy gifts,
which we are about to receive from Thy bounty,
through Christ our Lord.

Amen.`
  },
  {
    id: "after-meals",
    title: "Prayer After Meals",
    subtitle: "Grace After Meals",
    description: "A short prayer thanking God for the food received and asking for continued blessings.",
    category: "traditional",
    icon: "🍇",
    whenToRecite: "After eating any meal",
    context: "A prayer of thanksgiving for God's blessings.",
    history: "A common Christian custom since the earliest times.",
    text: `We give You thanks, almighty God,
for all Your benefits, who live and reign forever.
And may the souls of the faithful departed,
through the mercy of God, rest in peace.

Amen.`
  },
  {
    id: "st-michael",
    title: "St Michael's Prayer",
    subtitle: "Prayer to St. Michael",
    description: "A prayer invoking the archangel Michael for protection against Satan and evil.",
    category: "traditional",
    icon: "⚔️",
    whenToRecite: "For protection against Satan and evil, especially before important events",
    context: "A prayer invoking the archangel Michael for protection against Satan and evil.",
    history: "Based on Jude 1:9 and Revelation 12:7, with the petition added by the Church over time",
    text: `Saint Michael the Archangel,
defend us in battle,
against the wickedness and snares of the devil.
May God rebuke him, we humbly pray;
and do Thou, O Prince of the heavenly host,
by the power of God,
cast into hell Satan and all the evil spirits,
who prowl about the world seeking the ruin of souls.

Amen.`
  }
  
];

// Utility function for category badge styling
export const getCategoryBadge = (category: string): string => {
  switch (category) {
    case "traditional": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "marian": return "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200";
    case "devotional": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "liturgical": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

// Utility functions
export function getAllPrayers(): Prayer[] {
  return catholicPrayers;
}

export function getPrayerById(id: string): Prayer | undefined {
  return catholicPrayers.find(prayer => prayer.id === id);
}

export function getAllPrayerIds(): string[] {
  return catholicPrayers.map(prayer => prayer.id);
}

export function getPrayersByCategory(category: string): Prayer[] {
  if (category === "all") return catholicPrayers;
  return catholicPrayers.filter(prayer => prayer.category === category);
}
