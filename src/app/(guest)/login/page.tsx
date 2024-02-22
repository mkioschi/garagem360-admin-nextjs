import { Logo } from '@/components/logo'
import { Container } from '@/components/ui/container'

import { LoginForm } from './components/login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-card md:items-center md:bg-background">
      <Container className="max-w-md bg-card py-14 md:rounded-md md:border md:border-card-border md:shadow-card dark:md:shadow-none">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="mb-3">
            <Logo className="w-40" />
          </h1>
          <p className="text-sm text-muted">Entre no painel administrativo</p>
        </div>

        <LoginForm />
      </Container>
    </div>
  )
}
