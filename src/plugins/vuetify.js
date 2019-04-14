/* eslint-disable quote-props */

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa4',
  theme: {
    'primary': '#7768ae',
    'secondary': '#4d9de0',
    'accent': '#e1bc29',
    'error': '#e15554',
    'info': '#4d9de0',
    'success': '#3bb273',
    'warning': '#ffb300',
  },
});
