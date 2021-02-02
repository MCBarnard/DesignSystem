<template>
<div :class="[
    {'light-button': theme !== 'light' && theme !== 'dark'},
    {'light-button': theme === 'light'},
    {'dark-button': theme === 'dark'},
    {'danger-variant': variant === 'danger'}
    ]"
     @click="clicked" class="outer">
	<div :class="{'active-button': active}" class="outer-inner">
    <slot name="content"></slot>
  </div>
</div>
</template>
<script>
export default {
  name: "InvertedButton",
  data() {
    return {
      hovering: false
    }
  },
  props: {
    theme: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    },
    variant: {
      type: String
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked_inverted_button');
      this.active = !this.active;
    }
  }
}
</script>

<style scoped>
.outer {
  outline: none;
  align-items: center;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  background: transparent;
  border-radius: 50%;
}


.outer-inner {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
  isolation: isolate;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  display: block;
}

.light-button {
  color: #394a56;
  border: 1px solid #FFFFFF;
  display: inline-block;
  background: #f1f1f1;
}

.light-button .active-button {
  color: #42ba00;
}

.light-button:hover .outer-inner {
  border: 1px solid #42ba00;
}
.light-button .outer-inner {
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
  -9px -9px 16px rgba(255, 255, 255, 0.5),
  inset 3px 3px 7px rgba(136, 165, 191, 0.48),
  inset -3px -3px 7px #FFFFFF;
  background: linear-gradient(318.32deg, rgba(163, 177, 198, 0.1) 0%, rgba(163, 177, 198, 0.1) 55%, rgba(163, 177, 198, 0.25) 100%);
  display: flex;
  justify-content: center;
}
.dark-button {
  color: #FFFFFF;
  border: 1px solid #544c4c;
  display: inline-block;
  background: #333333;
}

.dark-button .outer-inner {
  color: #FFFFFF;
  box-shadow: 9px 9px 16px #000000,
  -9px -9px 16px #2f2f2f80,
  inset 3px 3px 7px #0000007a,
  inset -3px -3px 7px #565656;
  background: linear-gradient(318.32deg, rgba(163, 177, 198, 0.1) 0%, rgba(163, 177, 198, 0.1) 55%, rgba(163, 177, 198, 0.25) 100%);
  display: flex;
  justify-content: center;
}

.dark-button .active-button {
  color: #42ba00;
}

.dark-button:hover .outer-inner {
  border: 1px solid #42ba00;
}
.danger-variant:hover .outer-inner {
  border: 1px solid #ac0d0d;
}
.danger-variant .active-button {
  color: #ac0d0d;
}
</style>
