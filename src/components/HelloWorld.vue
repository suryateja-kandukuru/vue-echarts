<template>
  <div class="chart-wrapper">
    <chart :options="optionsBarChart" :ref="'lineChart'"></chart>
    <chart
      :options="optionsChart"
      @datazoom="onDataZoom"
      :ref="'lineChart1'"
    ></chart>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    onDataZoom(event) {
      const zoom = {
        type: "dataZoom",
        start: event.start,
        end: event.end,
        show: false
      };
      this.$refs.lineChart.dispatchAction(zoom);
    }
  },
  data: () => ({
    optionsBarChart: {
      xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
      // y axis - value takes range based on data we provide automatically adjusts the data
      yAxis: { type: "value" },
      series: [
        {
          type: "line",
          data: [60, 70, 80, 100],
          smooth: true,
          symbol: "circle",
          symbolSize: 12,
          lineStyle: { width: 1.5, color: "#ffa000" },
          itemStyle: {
            color: "#00875a",
            shadowColor: "#000",
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          }
        },
        {
          name: "Respiration Rate Markpoint",
          type: "effectScatter",
          data: [64, 76, 75, 103],
          symbol: "circle",
          symbolSize: 12,
          itemStyle: {
            color: "purple",
            shadowColor: "#000",
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
          zlevel: 1
        },
        {
          name: "Respiration Rate Markpoint",
          type: "scatter",
          data: [61, 74, 27, 109],
          symbol: "circle",
          symbolSize: 12,
          itemStyle: {
            color: "red",
            shadowColor: "#000",
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          },
          zlevel: 1
        }
      ],
      title: {
        text: "Chart 1",
        x: "center",
        textStyle: { fontSize: 24 }
      },
      dataZoom: [{ start: 0, end: 100, show: false }],
      color: ["#127ac2"]
    },
    optionsChart: {
      xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
      tooltip: {
        triggerOn: "click",
        position: "top",
        trigger: "item",
        axisPointer: { type: "cross" },
        enterable: true,
        alwaysShowContent: true,
        backgroundColor: "#fff",
        textStyle: {
          color: "#000"
        },

        formatter: params => {
          console.log(params);
          return `<div class="container">
          <p> data value is ${params.value}</p>
          <p> The name of data point is ${params.name} </p>
          </div>`;
        }
      },

      // y axis - value takes range based on data we provide automatically adjusts the data
      yAxis: { type: "value" },
      series: [
        {
          type: "line",
          data: [20, 35, 90, 180],
          symbol: "circle",
          symbolSize: 12
        },
        {
          type: "line",
          data: [180, 120, 60, 40],
          symbol: "circle",
          symbolSize: 18,
          zindex: 10,
          lineStyle: { width: 1.5, color: "#ffa000" },
          itemStyle: {
            color: "#00875a",
            shadowColor: "#000",
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          }
        }
      ],
      title: {
        text: "Chart 2",
        x: "center",
        textStyle: { fontSize: 24 }
      },
      color: ["#127ac2"],
      dataZoom: [{ start: 0, end: 100 }],
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
            title: {
              zoom: "area zooming",
              back: "restore area zooming"
            }
          },
          dataView: {
            readOnly: true,
            title: "data view",
            show: true,
            lang: ["data view", "close", "refresh"]
          },
          magicType: {
            type: ["line", "bar"],
            title: {
              line: "for line charts",
              bar: "for bar charts"
            }
          },
          restore: {
            show: true,
            title: "restore"
          },
          saveAsImage: {
            type: "png",
            name: "Analysis Chart",
            backgroundColor: "whitesmoke",
            excluedeComponents: ["toolbox"],
            show: true,
            title: "save as image"
          }
        }
      }
    }
  })
};
</script>

<style>
.chart-wrapper {
  display: flex;
}
.echarts {
  width: 100%;
  height: 100%;
}
.container {
  height: 65px;
  width: 180px;
  background: whitesmoke;
  border: 1px solid grey;
  padding: 10px;
}
.chart-tooltip {
  width: inherit;
  height: auto;
  padding: 10px;
  border: 2px solid white;
  background: dodgerblue;
}
</style>
