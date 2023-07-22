// mixins/watchMixin.js
import { ref } from 'vue'

export function characterLengthWatcher(maxLength: number) {
  const characterLength = ref(maxLength);

  // Watch function to update chatteree id length if the user enters a name
  function updateCharacterLength(name: string) {
    characterLength.value = maxLength - name.length;
  }

  return {
    characterLength,
    updateCharacterLength,
  };
}
