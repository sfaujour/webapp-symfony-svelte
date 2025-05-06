<script>
  import { cn } from "$lib/utils.js";
  
  /**
   * @type {string[]}
   */
  export let class_name = [];
</script>

<div class={cn("rounded-xl border bg-card text-card-foreground shadow", class_name)} {...$$restProps}>
  <slot />
</div> 
