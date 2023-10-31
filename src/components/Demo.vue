<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";
export default defineComponent({
  name: "Demo",
  directives: { vClickOutside },
  setup() {
    const conditionRef = ref();
    const conditionPopoverRef = ref();
    const onClickOutside = () => {
      unref(conditionPopoverRef).conditionPopoverRef?.delayHide?.();
    };
    return {
      conditionRef,
      conditionPopoverRef,
      onClickOutside,
    };
  },
});
</script>

<template>
  <div ref="conditionRef" v-click-outside="onClickOutside">
    <div style="color: red">测试内容</div>
  </div>
  <el-popover
    ref="conditionPopoverRef"
    trigger="click"
    virtual-triggering
    :virtual-ref="conditionRef"
    :placement="'right'"
    :persistent="false"
    :hide-after="0"
  >
    <div>测试popover</div>
  </el-popover>
</template>
