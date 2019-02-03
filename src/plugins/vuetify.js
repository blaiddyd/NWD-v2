/* eslint-disable quote-props */

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa4',
  theme: {
    'primary': '#c51162',
    'secondary': '#00acc1',
    'accent': '#e0f7fa',
    'error': '#880e4f',
    'info': '#00838f',
    'success': '#00897b',
    'warning': '#ffb300',
  },
});
