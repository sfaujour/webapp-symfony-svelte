<script>
  import { cn } from "$lib/utils.js";
  
  /**
   * @type {string[]}
   */
  export let class_name = [];
</script>

<p class={cn("text-sm text-muted-foreground", class_name)} {...$$restProps}>
  <slot />
</p> 
