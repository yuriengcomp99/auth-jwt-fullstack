"use client"

import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" type="password" />

      <Button>Entrar</Button>

      <p className="text-sm text-center">
        Não tem conta? <a href="/register" className="text-blue-500">Criar conta</a>
      </p>
    </div>
  )
}