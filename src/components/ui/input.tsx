import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-border bg-card text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus:border-border-active focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-border-invalid',
  {
    variants: {
      size: {
        xs: 'h-9 rounded-md px-3 text-sm',
        sm: 'h-10 rounded-md px-3 text-sm',
        default: 'h-11 rounded-md px-4 text-sm',
        lg: 'h-12 rounded-lg px-4 text-base',
        xl: 'h-13 rounded-lg px-4 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
