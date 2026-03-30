"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { getProfile } from "@/app/services/user-service"

export default function ProfilePage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getProfile()

        setName(data.name)
        setEmail(data.email)
      } catch {
        router.replace("/login")
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded shadow flex flex-col gap-4 w-full">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button>
          Update Profile
        </Button>
      </div>
    </div>
  )
}