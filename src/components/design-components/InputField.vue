<template>
  <label :class="[
      {'white-theme': theme !== 'light' && theme !== 'dark'},
      {'dark-theme': theme === 'dark'},
      {'white-theme': theme === 'light'}
      ]">
    <input type="text" :placeholder="label" :value="value"/>
  </label>
</template>

<script>
export default {
  name: "InputField",
  props: {
    theme: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
  }
}
</script>

<style scoped>
label {
  display: block;
  width: 100%;
}
input {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  font-size: 16px;
  border: 0;
  outline: 0;
  border-radius: 520px;
  padding: 10px 16px;
  margin-right: 32px;
  width: 100%;
  max-width: 320px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
}
.white-theme input {
  color: #736969;
  background-color:#f1f1f1;
  text-shadow: 1px 1px 0 #FFFFFF;
  box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFFFFF;
}

.white-theme input:focus {
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFFFFF;
}
.dark-theme input {
  color: #cfcfcf;
  text-shadow: 1px 1px 0 #434343;
  background: linear-gradient(145deg, #414141, #373737);
  box-shadow:  inset 2px 2px 5px #202020, inset -5px -5px 10px #434343;
}

.dark-theme input:focus {
  box-shadow:  inset 1px 1px 2px #202020, inset -1px -1px 2px #5a5a5a;
}
</style>
