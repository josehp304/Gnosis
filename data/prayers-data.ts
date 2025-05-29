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
