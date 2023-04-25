import Layout from "@/components/Layout"
import { useRouter } from "next/router"

export default function EventPage() {
    const router = useRouter

  return (
    <Layout>
    <div>my event</div>
    </Layout>
  )
}
