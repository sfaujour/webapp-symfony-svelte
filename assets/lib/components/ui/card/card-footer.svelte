<script>
  import { cn } from "$lib/utils.js";
  
  /**
   * @type {string[]}
   */
  export let class_name = [];
</script>

<div class={cn("flex items-center p-6 pt-0", class_name)} {...$$restProps}>
  <slot />
</div>
