"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Muestra spinner y bloquea interacción */
  isLoading?: boolean;
  /** Texto opcional a mostrar cuando está cargando (si lo quieres) */
  loadingText?: string;
}

const Spinner = () => (
  <svg
    className="animate-spin"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="img"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false,
    isLoading = false, loadingText, disabled, children, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const computedDisabled = disabled || isLoading;

    return (
      <Comp
        {...props}
        type={!asChild ? type : undefined}
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "cursor-progress",
          asChild && computedDisabled && "pointer-events-none opacity-50"
        )}
        disabled={!asChild ? computedDisabled : undefined}
        aria-disabled={asChild ? computedDisabled : undefined}
        data-disabled={asChild ? (computedDisabled ? "" : undefined) : undefined}
        aria-busy={isLoading || undefined}
        tabIndex={asChild && computedDisabled ? -1 : props.tabIndex}
        ref={ref}
      >
        {isLoading && <Spinner />}
        {loadingText ? (isLoading ? loadingText : children) : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
