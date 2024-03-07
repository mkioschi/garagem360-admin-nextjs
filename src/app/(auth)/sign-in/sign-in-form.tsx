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

import { authenticate } from './actions/authenticate'

const signInFormSchema = z.object({
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

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSignIn(data: SignInFormData) {
    const response = await authenticate(data.email, data.password)

    if (response?.error) {
      console.info(response?.error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignIn)}
        className="flex flex-col gap-6"
      >
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

        <Button type="submit" disabled={form.formState.isSubmitting}>
          Entrar
        </Button>
      </form>
    </Form>
  )
}
