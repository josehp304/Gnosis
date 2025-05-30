export interface Mystery {
  id: string;
  title: string;
  description: string;
  meditation: string;
  scripture?: string;
}

export interface MysterySet {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  mysteries: Mystery[];
  days: string[];
}

export interface RosaryPrayer {
  id: string;
  title: string;
  text: string;
  repetitions?: number;
  section: "opening" | "decade" | "closing";
}

// Opening Prayers
export const openingPrayers: RosaryPrayer[] = [
  {
    id: "sign-of-cross",
    title: "Sign of the Cross",
    text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    section: "opening"
  },
  {
    id: "apostles-creed",
    title: "Apostles' Creed",
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
and life everlasting. Amen.`,
    section: "opening"
  },
  {
    id: "our-father",
    title: "Our Father",
    text: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come,
thy will be done
on earth as it is in heaven.

Give us this day our daily bread,
and forgive us our trespasses,
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil. Amen.`,
    section: "opening"
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou amongst women,
and blessed is the fruit of thy womb, Jesus.

Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death. Amen.`,
    repetitions: 3,
    section: "opening"
  },
  {
    id: "glory-be",
    title: "Glory Be to the Father",
    text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit,
as it was in the beginning,
is now, and ever shall be,
world without end. Amen.`,
    section: "opening"
  }
];

// Decade Prayers
export const decadePrayers: RosaryPrayer[] = [
  {
    id: "our-father-decade",
    title: "Our Father",
    text: `Our Father, who art in heaven,
hallowed be thy name;
thy kingdom come,
thy will be done
on earth as it is in heaven.

Give us this day our daily bread,
and forgive us our trespasses,
as we forgive those who trespass against us;
and lead us not into temptation,
but deliver us from evil. Amen.`,
    section: "decade"
  },
  {
    id: "hail-mary-decade",
    title: "Hail Mary",
    text: `Hail Mary, full of grace,
the Lord is with thee.
Blessed art thou amongst women,
and blessed is the fruit of thy womb, Jesus.

Holy Mary, Mother of God,
pray for us sinners,
now and at the hour of our death. Amen.`,
    repetitions: 10,
    section: "decade"
  },
  {
    id: "glory-be-decade",
    title: "Glory Be to the Father",
    text: `Glory be to the Father,
and to the Son,
and to the Holy Spirit,
as it was in the beginning,
is now, and ever shall be,
world without end. Amen.`,
    section: "decade"
  },
  {
    id: "fatima-prayer",
    title: "Fatima Prayer",
    text: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy.",
    section: "decade"
  }
];

// Offering and Litany Prayers
export const offeringPrayers: RosaryPrayer[] = [
  {
    id: "offering-rosary",
    title: "Offering of the Rosary",
    text: `O God whose only begotten Son by His Life has purchased for us the rewards of eternal life, Grant that we beseech Thee while meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may both imitate what they contain and obtain what they promise, through the same Christ our Lord Amen.`,
    section: "closing"
  },
  {
    id: "litany-blessed-virgin",
    title: "Litany of the Blessed Virgin Mary",
    text: `Lord, have mercy on us,| Lord, have mercy on us.
Christ, have mercy on us,| Christ, have mercy on us.
Lord, have mercy on us,| Lord, have mercy on us.
Christ, hear us,| Christ, graciously hear us.

God the Father of Heaven,|Have mercy on us.
God the Son, Redeemer of the world,|Have mercy on us.
God the Holy Ghost,|Have mercy on us.
Holy Trinity, one God,|Have mercy on us.

Holy Mary,|pray for us.
Holy Mother of God,|pray for us.
Holy Virgin of virgins,|pray for us.
Mother of Christ,|pray for us.
Mother of divine grace,|pray for us.
Mother most pure,|pray for us.
Mother most chaste,|pray for us.
Mother inviolate,|pray for us.
Mother undefiled,|pray for us.
Mother most amiable,|pray for us.
Mother most admirable,|pray for us.
Mother of good counsel,|pray for us.
Mother of our Creator,|pray for us.
Mother of our Savior,|pray for us.
Virgin most prudent,|pray for us.
Virgin most venerable,|pray for us.
Virgin most renowned,|pray for us.
Virgin most powerful,|pray for us.
Virgin most merciful,|pray for us.
Virgin most faithful,|pray for us.
Mirror of justice,|pray for us.
Seat of wisdom,|pray for us.
Cause of our joy,|pray for us.
Spiritual vessel,|pray for us.
Vessel of honor,|pray for us.
Singular vessel of devotion,|pray for us.
Mystical rose,|pray for us.
Tower of David,|pray for us.
Tower of ivory,|pray for us.
House of gold,|pray for us.
Ark of the Covenant,|pray for us.
Gate of Heaven,|pray for us.
Morning star,|pray for us.
Health of the sick,|pray for us.
Refuge of sinners,|pray for us.
Comforter of the afflicted,|pray for us.
Help of Christians,|pray for us.
Queen of angels,|pray for us.
Queen of patriarchs,|pray for us.
Queen of prophets,|pray for us.
Queen of apostles,|pray for us.
Queen of martyrs,|pray for us.
Queen of confessors,|pray for us.
Queen of virgins,|pray for us.
Queen of all saints,|pray for us.
Queen conceived without Original Sin,|pray for us.
Queen assumed into Heaven,|pray for us.
Queen of the most holy Rosary,|pray for us.
Queen of peace,|pray for us.

Lamb of God, who takes away the sins of the world,|Spare us, O Lord.
Lamb of God, who takes away the sins of the world,|Graciously hear us, O Lord.
Lamb of God, who takes away the sins of the world,|Have mercy on us.

Pray for us, O Holy Mother of God,|That we may be made worthy of the promises of Christ.

Grant, we beseech Thee, O Lord God, that we Thy Servants may enjoy perpetual health of mind and body and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ Our Lord. Amen.`,
    section: "closing"
  }
];

// Closing Prayers
export const closingPrayers: RosaryPrayer[] = [
  {
    id: "hail-holy-queen",
    title: "Hail Holy Queen",
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
that we may be made worthy of the promises of Christ. Amen.`,
    section: "closing"
  },
  {
    id: "memorare",
    title: "The Memorare",
    text: `Remember, O most gracious Virgin Mary,
that never was it known that anyone who fled to thy protection,
implored thy help, or sought thy intercession was left unaided.

Inspired with this confidence,
I fly to thee, O Virgin of virgins, my Mother;
to thee do I come; before thee I stand, sinful and sorrowful.

O Mother of the Word Incarnate,
despise not my petitions,
but in thy mercy hear and answer me. Amen.`,
    section: "closing"
  }
];

// Mystery Sets
export const mysterySet: MysterySet[] = [
  {
    id: "joyful",
    name: "Joyful Mysteries",
    description: "Celebrating the joy of the Incarnation and early life of Jesus",
    icon: "🌟",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    days: ["Monday", "Saturday"],
    mysteries: [
      {
        id: "annunciation",
        title: "The Annunciation",
        description: "The angel Gabriel announces to Mary that she will bear the Son of God",
        meditation: "Mary's faith and trust in God's plan, even when she didn't understand",
        scripture: "Luke 1:26-38"
      },
      {
        id: "visitation",
        title: "The Visitation",
        description: "Mary visits her cousin Elizabeth, who is pregnant with John the Baptist",
        meditation: "Mary's charity and service to others in their time of need",
        scripture: "Luke 1:39-56"
      },
      {
        id: "nativity",
        title: "The Nativity",
        description: "Jesus is born in Bethlehem",
        meditation: "God's humility in becoming man and being born in poverty",
        scripture: "Luke 2:1-20"
      },
      {
        id: "presentation",
        title: "The Presentation",
        description: "Mary and Joseph present Jesus in the Temple",
        meditation: "Obedience to God's law and Simeon's prophecy of suffering",
        scripture: "Luke 2:22-38"
      },
      {
        id: "finding-temple",
        title: "Finding Jesus in the Temple",
        description: "The twelve-year-old Jesus is found teaching in the Temple",
        meditation: "Jesus' wisdom and his dedication to his Father's business",
        scripture: "Luke 2:41-52"
      }
    ]
  },
  {
    id: "sorrowful",
    name: "Sorrowful Mysteries",
    description: "Meditating on the Passion and suffering of Jesus Christ",
    icon: "✝️",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    days: ["Tuesday", "Friday"],
    mysteries: [
      {
        id: "agony-garden",
        title: "The Agony in the Garden",
        description: "Jesus prays in the Garden of Gethsemane before his arrest",
        meditation: "Jesus' human fear and divine acceptance of the Father's will",
        scripture: "Matthew 26:36-46"
      },
      {
        id: "scourging",
        title: "The Scourging at the Pillar",
        description: "Jesus is brutally whipped by Roman soldiers",
        meditation: "Jesus suffers for our sins and shows us perfect patience",
        scripture: "Matthew 27:26"
      },
      {
        id: "crowning-thorns",
        title: "The Crowning with Thorns",
        description: "Soldiers mock Jesus by crowning him with thorns",
        meditation: "Jesus, the true King, is mocked and humiliated for our pride",
        scripture: "Matthew 27:27-31"
      },
      {
        id: "carrying-cross",
        title: "The Carrying of the Cross",
        description: "Jesus carries his cross to Calvary",
        meditation: "Jesus teaches us to embrace our crosses with love",
        scripture: "John 19:17"
      },
      {
        id: "crucifixion",
        title: "The Crucifixion",
        description: "Jesus dies on the cross for our salvation",
        meditation: "The ultimate sacrifice of love - Jesus gives his life for us",
        scripture: "John 19:18-30"
      }
    ]
  },
  {
    id: "glorious",
    name: "Glorious Mysteries",
    description: "Rejoicing in the Resurrection and glory of Jesus and Mary",
    icon: "👑",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    days: ["Sunday", "Wednesday"],
    mysteries: [
      {
        id: "resurrection",
        title: "The Resurrection",
        description: "Jesus rises from the dead on Easter Sunday",
        meditation: "Christ's victory over sin and death gives us hope of eternal life",
        scripture: "Matthew 28:1-10"
      },
      {
        id: "ascension",
        title: "The Ascension",
        description: "Jesus ascends into heaven forty days after his resurrection",
        meditation: "Jesus returns to the Father and prepares a place for us",
        scripture: "Acts 1:6-11"
      },
      {
        id: "descent-holy-spirit",
        title: "The Descent of the Holy Spirit",
        description: "The Holy Spirit comes upon the apostles at Pentecost",
        meditation: "The Spirit gives us courage and wisdom to spread the Gospel",
        scripture: "Acts 2:1-13"
      },
      {
        id: "assumption",
        title: "The Assumption of Mary",
        description: "Mary is taken up body and soul into heaven",
        meditation: "Mary's perfect cooperation with grace leads to her glorification",
        scripture: "Revelation 12:1"
      },
      {
        id: "coronation",
        title: "The Coronation of Mary",
        description: "Mary is crowned Queen of Heaven and Earth",
        meditation: "Mary's queenship and her role as our Mother and intercessor",
        scripture: "Revelation 12:1"
      }
    ]
  },
  {
    id: "luminous",
    name: "Luminous Mysteries",
    description: "Contemplating the Light of Christ in his public ministry",
    icon: "💡",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    days: ["Thursday"],
    mysteries: [
      {
        id: "baptism-jordan",
        title: "The Baptism in the Jordan",
        description: "Jesus is baptized by John the Baptist",
        meditation: "The Trinity is revealed and Jesus begins his public ministry",
        scripture: "Matthew 3:13-17"
      },
      {
        id: "wedding-cana",
        title: "The Wedding at Cana",
        description: "Jesus performs his first miracle at Mary's request",
        meditation: "Mary's intercession and Jesus' care for human joy",
        scripture: "John 2:1-11"
      },
      {
        id: "proclamation-kingdom",
        title: "The Proclamation of the Kingdom",
        description: "Jesus preaches the Gospel and calls for conversion",
        meditation: "Jesus calls us to repentance and faith in the Good News",
        scripture: "Mark 1:15"
      },
      {
        id: "transfiguration",
        title: "The Transfiguration",
        description: "Jesus is transfigured before Peter, James, and John",
        meditation: "A glimpse of Jesus' divine glory strengthens our faith",
        scripture: "Matthew 17:1-8"
      },
      {
        id: "institution-eucharist",
        title: "The Institution of the Eucharist",
        description: "Jesus gives us his Body and Blood at the Last Supper",
        meditation: "Jesus' greatest gift - himself in the Eucharist",
        scripture: "Matthew 26:26-28"
      }
    ]
  }
];

// Utility functions
export function getTodaysMysteries(): MysterySet {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Mystery assignment by day
  if (today === 1 || today === 6) return mysterySet.find(set => set.id === "joyful")!; // Monday, Saturday
  if (today === 2 || today === 5) return mysterySet.find(set => set.id === "sorrowful")!; // Tuesday, Friday
  if (today === 0 || today === 3) return mysterySet.find(set => set.id === "glorious")!; // Sunday, Wednesday
  if (today === 4) return mysterySet.find(set => set.id === "luminous")!; // Thursday

  return mysterySet[0]; // Default to Joyful
}

export function getAllMysteries(): MysterySet[] {
  return mysterySet;
}

export function getMysteryById(id: string): MysterySet | undefined {
  return mysterySet.find(set => set.id === id);
}
