<script>
  import { cva } from "class-variance-authority";
  import { cn } from "$lib/utils.js";

  /**
   * @type {string}
   */
  export let type = undefined;
  /**
   * @type {any}
   */
  export let value = undefined;
  /**
   * @type {boolean}
   */
  export let disabled = false;
  /**
   * @type {string[]}
   */
  export let class_name = [];
  /**
   * @type {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
   */
  export let variant = "default";
  /**
   * @type {"default" | "sm" | "lg" | "icon"}
   */
  export let size = "default";

  const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );
</script>

<button
  type={type}
  value={value}
  disabled={disabled}
  class={cn(buttonVariants({ variant, size }), class_name)}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:mouseenter
  on:mouseleave
>
  <slot />
</button> 
