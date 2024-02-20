import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent text-accent-foreground hover:bg-accent-active',
        secondary: 'bg-gray-500/10 hover:bg-accent/10 hover:text-accent',
        info: 'bg-info text-info-foreground hover:bg-info-active',
        success: 'bg-success text-success-foreground hover:bg-success-active',
        warning: 'bg-warning text-warning-foreground hover:bg-warning-active',
        danger: 'bg-danger text-danger-foreground hover:bg-danger-active',
        ghost:
          'text-card-foreground hover:bg-gray-600/5 dark:hover:bg-gray-300/5',
        link: 'text-accent hover:text-accent-active hover:underline hover:underline-offset-4',
      },
      size: {
        xs: 'h-9 rounded-md px-3 text-sm font-medium',
        sm: 'h-10 rounded-md px-4 text-sm font-medium',
        default: 'h-11 rounded-md px-8 text-sm font-medium',
        lg: 'h-12 rounded-lg px-8 text-base font-semibold',
        xl: 'h-13 rounded-lg px-8 text-base font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
