import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva('mx-auto px-5', {
  variants: {
    variant: {
      default: 'w-full max-w-6xl',
      fluid: 'w-full max-w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type ContainerProps = VariantProps<typeof buttonVariants> &
  HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, variant, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Container.displayName = 'Container'

export { Container }
