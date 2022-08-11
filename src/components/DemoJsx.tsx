import { defineComponent } from "vue";
import TestJsx from "./TestJsx";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {};
  },
  render() {
    return <TestJsx name="xx" test></TestJsx>;
  },
});
