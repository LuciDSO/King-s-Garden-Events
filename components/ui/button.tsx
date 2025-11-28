import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft rounded-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-sm",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury variants
        gold: "bg-gradient-gold text-primary-foreground font-semibold tracking-wide hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        "gold-outline": "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-primary-foreground font-semibold tracking-wide rounded-sm",
        hero: "bg-background/10 text-primary-foreground border border-primary-foreground/30 backdrop-blur-sm hover:bg-background/20 font-medium tracking-wide rounded-sm",
        "hero-gold": "bg-gold/90 text-primary-foreground border border-gold-light/50 backdrop-blur-sm hover:bg-gold font-semibold tracking-wide shadow-elegant rounded-sm",
        elegant: "bg-charcoal text-ivory hover:bg-charcoal/90 font-medium tracking-wider uppercase text-xs rounded-sm",
        romantic: "bg-blush text-charcoal hover:bg-blush-deep/80 font-medium rounded-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
