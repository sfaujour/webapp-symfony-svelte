<script>
  import { cn } from "../../../utils.js";
  
  /**
   * @type {string[]}
   */
  export let class_name = [];
</script>

<h3 class={cn("font-semibold leading-none tracking-tight", class_name)} {...$$restProps}>
  <slot />
</h3> 