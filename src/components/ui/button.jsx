import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const buttonVariants = ({ variant, size, className }) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
        default: "bg-black text-white hover:bg-neutral-800",
        outline: "border border-[var(--color-border-color)] bg-transparent hover:bg-neutral-100",
        ghost: "hover:bg-neutral-100 font-medium",
        link: "text-primary underline-offset-4 hover:underline",
    }

    const sizes = {
        default: "h-12 px-6 py-2 rounded-[6px]",
        sm: "h-9 rounded-[6px] px-3",
        lg: "h-14 rounded-[8px] px-8 text-base",
        icon: "h-10 w-10",
    }

    return cn(
        base,
        variants[variant || "default"],
        sizes[size || "default"],
        className
    )
}

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={buttonVariants({ variant, size, className })}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
