import { loading } from "./function";
import { ComponentCustomProperties } from "vue";

export default (global: ComponentCustomProperties & Record<string, any>) => {
   global.$loading = loading;
};
