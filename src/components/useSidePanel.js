import {ref} from "vue";

export const isDisplayed = ref(false);

export function togglePanel() {
    isDisplayed.value = !isDisplayed.value
}
  
export function hidePanel() {
    isDisplayed.value = false
}

export function showPanel() {
    isDisplayed.value = true
}