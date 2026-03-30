"use client"

import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Nome" />
      <Input label="Email" />
      <Input label="Senha" type="password" />

      <Button>Cadastrar</Button>

      <p className="text-sm text-center">
        Já tem conta? <a href="/login" className="text-blue-500">Entrar</a>
      </p>
    </div>
  )
}