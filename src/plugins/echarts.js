import Vue from 'vue';
import VueCharts from 'vue-echarts';

import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'

Vue.component('chart', VueCharts);
