export interface Saint {
  id: string;
  name: string;
  short: string;
  story: string;
}

export const saints: Saint[] = [
  {
    id: "st-alphonsa",
    name: "St. Alphonsa",
    short: "First canonized saint of Indian origin, known for her suffering and devotion.",
    story: `# St. Alphonsa of the Immaculate Conception

**Born:** August 19, 1910  
**Died:** July 28, 1946  
**Canonized:** October 12, 2008

## Early Life

Saint Alphonsa was born Anna Muttathupadathu in Kudamaloor, Kerala, India. She was the fourth child of Joseph and Mary Muttathupadathu. Her mother died when she was just three months old, and she was raised by her maternal aunt.

## Religious Calling

From an early age, Alphonsa felt called to religious life. Despite family pressure to marry, she remained steadfast in her desire to serve God. At age 19, she joined the Franciscan Clarist Congregation and took the name Sister Alphonsa of the Immaculate Conception.

## Life of Suffering

Throughout her life, St. Alphonsa endured numerous physical ailments and sufferings, which she offered up for the salvation of souls. She saw her sufferings as a participation in Christ's passion and embraced them with joy and gratitude.

## Legacy

St. Alphonsa is remembered for her deep spirituality, her love for the poor and sick, and her unwavering faith despite tremendous suffering. She was the first person of Indian origin to be canonized by the Catholic Church.

*"I will spend my heaven doing good on earth."* - St. Alphonsa`
  },
  {
    id: "st-teresa-calcutta",
    name: "St. Teresa of Calcutta",
    short: "Nobel Peace Prize winner who served the poorest of the poor in India.",
    story: `# St. Teresa of Calcutta (Mother Teresa)

**Born:** August 26, 1910  
**Died:** September 5, 1997  
**Canonized:** September 4, 2016

## Early Life

Born Anjezë Gonxhe Bojaxhiu in Skopje (now North Macedonia), she felt called to missionary work from a young age. At 18, she joined the Sisters of Loreto and was sent to India, where she taught at a school in Calcutta.

## Call Within a Call

In 1946, while traveling by train, Mother Teresa experienced what she described as "a call within a call" to serve the poorest of the poor. She left her teaching position and began working in the slums of Calcutta.

## Missionaries of Charity

In 1950, she founded the Missionaries of Charity, which grew to operate hospices, orphanages, and charity centers worldwide. The organization continues her work today in over 130 countries.

## Recognition and Awards

Mother Teresa received numerous awards, including the Nobel Peace Prize in 1979. However, she always emphasized that her work was done for Jesus, whom she saw in every person she served.

## Legacy

St. Teresa of Calcutta remains an icon of compassionate service to the poor and marginalized. Her example continues to inspire millions around the world to serve those most in need.

*"Give, but give until it hurts."* - St. Teresa of Calcutta`
  },
  {
    id: "st-francis-assisi",
    name: "St. Francis of Assisi",
    short: "Founder of the Franciscan order, patron saint of animals and the environment.",
    story: `# St. Francis of Assisi

**Born:** 1181  
**Died:** October 3, 1226  
**Canonized:** July 16, 1228

## Early Life

Born Giovanni di Pietro di Bernardone in Assisi, Italy, Francis was the son of a wealthy cloth merchant. In his youth, he lived a carefree life and dreamed of becoming a knight.

## Conversion

After experiencing visions and a profound spiritual awakening, Francis renounced his wealthy lifestyle. He famously stripped naked in the town square, returning his clothes to his father, and dedicated his life to serving God and the poor.

## Founding the Franciscans

Francis gathered followers who shared his vision of living in poverty and serving others. In 1209, Pope Innocent III approved his simple rule, and the Franciscan order was born.

## Love for Creation

St. Francis had a deep love for all of God's creation. He preached to birds, tamed a wolf, and saw all creatures as his brothers and sisters. This earned him the title of patron saint of animals and the environment.

## The Stigmata

In 1224, while praying on Mount La Verna, Francis received the stigmata - the wounds of Christ appeared on his hands, feet, and side. He was the first recorded person to receive this mystical gift.

## Legacy

St. Francis revolutionized Christian spirituality with his emphasis on poverty, humility, and care for creation. His influence extends far beyond the Catholic Church, inspiring people of all faiths to live more simply and compassionately.

*"Lord, make me an instrument of your peace."* - Prayer of St. Francis`
  },
  {
    id: "st-joan-arc",
    name: "St. Joan of Arc",
    short: "Teenage peasant girl who led France to victory and was martyred at age 19.",
    story: `# St. Joan of Arc

**Born:** c. 1412  
**Died:** May 30, 1431  
**Canonized:** May 16, 1920

## Early Life

Joan was born in Domrémy, France, during the Hundred Years' War. She was a peasant girl who grew up in a time when France was largely occupied by English forces.

## Divine Visions

At age 13, Joan began experiencing visions of Saints Michael, Margaret, and Catherine, who told her to drive out the English and bring the Dauphin (later Charles VII) to Reims for his coronation.

## Military Leadership

Despite her youth and humble origins, Joan convinced the court of her divine mission. She was given armor and troops, and led several military campaigns that turned the tide of the war in France's favor.

## Capture and Trial

In 1430, Joan was captured by Burgundian allies of the English. She was put on trial for heresy and witchcraft by an ecclesiastical court. Despite her eloquent defense, she was condemned and burned at the stake at age 19.

## Vindication and Canonization

Twenty-five years after her death, a retrial declared her innocent. She became a symbol of French nationalism and was canonized in 1920, becoming the patron saint of France.

## Legacy

St. Joan of Arc remains one of history's most remarkable figures - a teenage girl who changed the course of history through her unwavering faith and courage. She inspires people to stand up for their convictions, even in the face of overwhelming opposition.

*"I am not afraid... I was born to do this."* - St. Joan of Arc`
  }
];

// Utility functions
export function getAllSaints(): Saint[] {
  return saints;
}

export function getSaintById(id: string): Saint | undefined {
  return saints.find(saint => saint.id === id);
}

export function getAllSaintIds(): string[] {
  return saints.map(saint => saint.id);
}
