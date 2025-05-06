<script>
  import { cn } from "../../../utils.js";
  
  /**
   * @type {string[]}
   */
  export let class_name = [];
</script>

<div class={cn("p-6 pt-0", class_name)} {...$$restProps}>
  <slot />
</div> 