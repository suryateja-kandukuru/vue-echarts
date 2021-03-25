<template>
  <div class="chart-wrapper">
    <chart :options="barChart"></chart>
    <chart :options="pieChart"></chart>
    <chart :options="treeChart"></chart>
  </div>
</template>

<script>
export default {
  name: "MultiChart",
  data: () => ({
    barChart: {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true // bar with get align with the x axis points exactly
        }
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [
            {
              value: 120,
              itemStyle: {
                color: "red"
              }
            },
            200,
            150,
            80,
            70,
            110,
            {
              value: 10,
              itemStyle: {
                color: "green"
              }
            }
          ],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "orange"
          },
          itemStyle: {
            color: "blue"
          }
        }
      ]
    },
    pieChart: {
      // legend will give the breif info of chart with the colors and their name to identify easily
      legend: { orient: "verti", right: "right" },
      series: [
        {
          name: "Toy Market",
          type: "pie",
          radius: "50%",
          data: [
            {
              value: 1048,
              name: "China",
              itemStyle: {
                color: "red"
              }
            },
            { value: 735, name: "Japan" },
            { value: 580, name: "India" },
            { value: 484, name: "USA" },
            { value: 300, name: "Australia" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    },
    treeChart: {
      series: [
        {
          type: "tree",
          data: [
            {
              name: "vivek",
              children: [
                {
                  name: "sabith",
                  children: [
                    {
                      name: "surya"
                    },
                    {
                      name: "deepak"
                    },
                    {
                      name: "sonali"
                    },
                    {
                      name: "shruthika"
                    },
                    {
                      name: "santosh"
                    },
                    {
                      name: "naren"
                    },
                    {
                      name: "lakshit"
                    }
                  ]
                }
              ]
            }
          ],
          symbolSize: 10,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 15
          },
          leaves: {
            label: { position: "right", verticalAlign: "middle", align: "left" }
          }
        }
      ]
    }
  })
};
</script>
