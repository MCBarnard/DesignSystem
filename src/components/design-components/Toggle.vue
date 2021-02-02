<template>
  <div class="toggle-wrapper">
    <label class="label" :class="[{'dark-theme': theme === 'dark'}, {'white-theme': theme === 'light'}]">
      <label class="switch">
        <input type="checkbox" :checked="value">
        <span class="slider round">
          <div class="moving-knob"></div>
        </span>
      </label>
      <div class="label-text unselectable">{{ label }}</div>
    </label>
  </div>
</template>

<script>

export default {
  name: "Toggle",
  props: {
    theme: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    value: {
      type: Boolean,
      required: true
    },
  }
}
</script>

<style scoped>
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.label {
  display: flex;
}
.label.dark-theme{
  color: #FFFFFF;
}
.label.light-theme{
  color: #394a56;
}
.label-text {
  margin-left: 16px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 25px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 40px;
  left: 1px;
  bottom: 2px;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 25px;
}

.white-theme .slider {
  background: #f1f1f1;
  box-shadow: inset 11px 11px 30px #cccccc,
  inset -11px -11px 23px #ffffff;
}

.white-theme .slider:before {
  background: linear-gradient(145deg, #ffffff, #d9d9d9);
  box-shadow:  1px 1px 2px #7d7d7d,
  -1px -1px 2px #ffffff;
}

.white-theme .slider:after {
  box-shadow: 0 0 30px 1px #e20202;
}
.white-theme input:checked + .slider:after {
  box-shadow: 0 0 30px 3px #5fff00;
}

.dark-theme .slider {
  border-radius: 59px;
  background: #333333;
  box-shadow: inset 11px 11px 23px #1d1d1d,
  inset -11px -11px 23px #2d2d2d;
}
.dark-theme .slider:before {
  background: linear-gradient(145deg, #414141, #373737);
  box-shadow:  1px 1px 2px #202020,
  -1px -1px 2px #5a5a5a;
}

.dark-theme .slider:after {
  box-shadow: 0 0 13px 1px #e20202;
}
.dark-theme input:checked + .slider:after {
  box-shadow: 0 0 13px 3px #5fff00;
}
.slider:after {
  position: absolute;
  width: 5px;
  height: 2px;
  right: 25px;
  bottom: 11px;
  transition: .4s;
  border-radius: 25px;
  content: "";
  background: #e20202;
}
input:checked + .slider:after {
  background: #5fff00;
}
input:checked + .slider:before, input:checked + .slider:after {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.toggle-wrapper {
  max-width: 200px;
}

</style>
