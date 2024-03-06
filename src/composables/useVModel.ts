import { computed } from "vue";

export function useVModel<T>(
  props,
  propName: string,
  emit: (...args: any[]) => void
) {
  return computed({
    get() {
      return props[propName] as T;
    },
    set(value) {
      emit(`update:${propName}`, value);
    },
  });
}
