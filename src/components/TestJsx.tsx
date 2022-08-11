import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  emits: ["action"],
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {};
  },
  render() {
    return <HelloWorld attrs={this.$attrs} on={this.$listeners}></HelloWorld>;
  },
});
