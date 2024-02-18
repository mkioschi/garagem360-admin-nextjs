import { Container } from '@/components/ui/container'

import { LoginForm } from './login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-card md:items-center md:bg-background">
      <Container className="max-w-md bg-card py-14 md:rounded-md md:border md:border-card-border md:shadow-card dark:md:shadow-none">
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-2 h-12 w-48 bg-gray-400 dark:bg-gray-600"></div>
          <p className="text-sm text-gray-400 dark:text-gray-200">
            Entrar no painel administrativo
          </p>
        </div>

        <LoginForm />
      </Container>
    </div>
  )
}
