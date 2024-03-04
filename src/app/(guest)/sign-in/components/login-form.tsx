'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { signIn } from '../actions/signIn'

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Digite seu e-mail.',
    })
    .email('Digite um e-mail válido.'),
  password: z
    .string({
      required_error: 'Digite sua senha.',
    })
    .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function login(data: LoginFormData) {
    signIn(data.email, data.password)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(login)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Senha" type="password" {...field} />
              </FormControl>
              <FormMessage />
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-active"
                >
                  Esqueci minha senha
                </Link>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </Form>
  )
}
