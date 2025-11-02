
import { notFound } from "next/navigation"
import { getPrayerById, getAllPrayerIds, type Prayer } from "../../../data/prayers-data"
import type { Metadata } from "next"
import PrayerPageClient from "./PrayerPageClient"

interface PrayerPageProps {
  params: {
    id: string
  }
}

// Generate static params for all prayers
export async function generateStaticParams() {
  const prayerIds = getAllPrayerIds()
  return prayerIds.map((id) => ({
    id: id,
  }))
}

// Generate metadata for each prayer page
export async function generateMetadata({ params }: PrayerPageProps): Promise<Metadata> {
  const prayer = getPrayerById(params.id)
  
  if (!prayer) {
    return {
      title: "Prayer Not Found | Gnosis",
      description: "The requested prayer could not be found.",
    }
  }

  return {
    title: `${prayer.title} | Catholic Prayers | Gnosis`,
    description: prayer.description,
    keywords: [
      "Catholic prayer",
      prayer.title,
      prayer.category,
      "spiritual guidance",
      "faith",
      "devotion"
    ].join(", "),
  }
}

export default function PrayerPage({ params }: PrayerPageProps) {
  const prayer = getPrayerById(params.id)

  if (!prayer) {
    notFound()
  }

  return <PrayerPageClient prayer={prayer} />
}
