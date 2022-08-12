(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false
    });


    // // Worldwide Sales Chart
    // var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    // var myChart1 = new Chart(ctx1, {
    //     type: "bar",
    //     data: {
    //         labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    //         datasets: [{
    //             label: "USA",
    //             data: [15, 30, 55, 65, 60, 80, 95],
    //             backgroundColor: "rgba(0, 156, 255, .7)"
    //         },
    //         {
    //             label: "UK",
    //             data: [8, 35, 40, 60, 70, 55, 75],
    //             backgroundColor: "rgba(0, 156, 255, .5)"
    //         },
    //         {
    //             label: "AU",
    //             data: [12, 25, 45, 55, 65, 70, 60],
    //             backgroundColor: "rgba(0, 156, 255, .3)"
    //         }
    //         ]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Salse & Revenue Chart
    // var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    // var myChart2 = new Chart(ctx2, {
    //     type: "line",
    //     data: {
    //         labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    //         datasets: [{
    //             label: "Salse",
    //             data: [15, 30, 55, 45, 70, 65, 85],
    //             backgroundColor: "rgba(0, 156, 255, .5)",
    //             fill: true
    //         },
    //         {
    //             label: "Revenue",
    //             data: [99, 135, 170, 130, 190, 180, 270],
    //             backgroundColor: "rgba(0, 156, 255, .3)",
    //             fill: true
    //         }
    //         ]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });



    // // Single Line Chart
    // var ctx3 = $("#line-chart").get(0).getContext("2d");
    // var myChart3 = new Chart(ctx3, {
    //     type: "line",
    //     data: {
    //         labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    //         datasets: [{
    //             label: "Salse",
    //             fill: false,
    //             backgroundColor: "rgba(0, 156, 255, .3)",
    //             data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Single Bar Chart
    // var ctx4 = $("#bar-chart").get(0).getContext("2d");
    // var myChart4 = new Chart(ctx4, {
    //     type: "bar",
    //     data: {
    //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(0, 156, 255, .7)",
    //                 "rgba(0, 156, 255, .6)",
    //                 "rgba(0, 156, 255, .5)",
    //                 "rgba(0, 156, 255, .4)",
    //                 "rgba(0, 156, 255, .3)"
    //             ],
    //             data: [55, 49, 44, 24, 15]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Pie Chart
    // var ctx5 = $("#pie-chart").get(0).getContext("2d");
    // var myChart5 = new Chart(ctx5, {
    //     type: "pie",
    //     data: {
    //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(0, 156, 255, .7)",
    //                 "rgba(0, 156, 255, .6)",
    //                 "rgba(0, 156, 255, .5)",
    //                 "rgba(0, 156, 255, .4)",
    //                 "rgba(0, 156, 255, .3)"
    //             ],
    //             data: [55, 49, 44, 24, 15]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Doughnut Chart
    // var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    // var myChart6 = new Chart(ctx6, {
    //     type: "doughnut",
    //     data: {
    //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(0, 156, 255, .7)",
    //                 "rgba(0, 156, 255, .6)",
    //                 "rgba(0, 156, 255, .5)",
    //                 "rgba(0, 156, 255, .4)",
    //                 "rgba(0, 156, 255, .3)"
    //             ],
    //             data: [55, 49, 44, 24, 15]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });

    // 各個課程類型的購課人數：直條圖 Single Bar Chart1
    var ctx01 = $("#bar-chart1").get(0).getContext("2d");
    var myChart01 = new Chart(ctx01, {
        type: "bar",
        data: {
            labels: ["音樂",
                "手作",
                "人文",
                "藝術",
                "投資理財",
                "程式",
                "生活品味",
                "職場技能",
                "行銷",
                "語言",
                "設計",
                "攝影"],
            datasets: [{
                label: "平均購課人數",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [366
                    , 379
                    , 678
                    , 817
                    , 845
                    , 867
                    , 951
                    , 1111
                    , 1229
                    , 1444
                    , 1662
                    , 1745]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 各個課程類型的募資價格與正式售價 Single Line Chart1
    var ctx02 = $("#line-chart1").get(0).getContext("2d");
    var myChart02 = new Chart(ctx02, {
        type: "line",
        data: {
            labels: ["藝術"
                , "手作"
                , "音樂"
                , "人文"
                , "生活品味"
                , "設計"
                , "攝影"
                , "職場技能"
                , "語言"
                , "行銷"
                , "程式"
                , "投資理財"],
            datasets: [{
                label: "正式售價",
                fill: true,
                backgroundColor: "rgba(0, 156, 255, .2)",
                data: [1507
                    , 1585
                    , 1768
                    , 1857
                    , 1860
                    , 1899
                    , 2076
                    , 2098
                    , 2182
                    , 2187
                    , 2205
                    , 2967]
            },
            {
                label: "募資價格",
                fill: true,
                backgroundColor: "rgba(0, 156, 255, .7)",
                data: [1069
                    , 1180
                    , 1288
                    , 1292
                    , 1313
                    , 1292
                    , 1503
                    , 1435
                    , 1639
                    , 1552
                    , 1495
                    , 1831]
            },
            ]
        },
        options: {
            responsive: true
        }
    });

    // 各個文章類型的平均觀看次數 Single Bar Chart2
    var ctx03 = $("#bar-chart2").get(0).getContext("2d");
    var myChart03 = new Chart(ctx03, {
        type: "bar",
        data: {
            labels: ["人文"
                , "音樂"
                , "理想 生活"
                , "數位行銷"
                , "學語言"
                , "手作"
                , "投資理財"
                , "學程式"
                , "藝術"
                , "職場必備技能"
                , "拍照 技巧"
                , "自學設計"],
            datasets: [{
                label: "平均觀看人數",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [301
                    , 544
                    , 759
                    , 818
                    , 990
                    , 1194
                    , 1299
                    , 2185
                    , 2500
                    , 2748
                    , 3730
                    , 4241]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 預約直播次數 Single Bar Chart3
    var ctx04 = $("#bar-chart3").get(0).getContext("2d");
    var myChart04 = new Chart(ctx04, {
        type: "bar",
        data: {
            labels: ["興趣"
                , "求職"
                , "理財投資"
                , "設計"
                , "語言"
                , "商業"],
            datasets: [{
                label: "平均預約人數",
                backgroundColor: [
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [22
                    , 44
                    , 56
                    , 58
                    , 85
                    , 254]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 賣課量前20%的課程類型 Single Bar Chart4
    var ctx05 = $("#bar-chart4").get(0).getContext("2d");
    var myChart05 = new Chart(ctx05, {
        type: "bar",
        data: {
            labels: ["音樂"
                , "手作"
                , "人文"
                , "藝術"
                , "程式"
                , "投資理財"
                , "行銷"
                , "職場技能"
                , "設計"
                , "攝影"
                , "生活品味"
                , "語言"],
            datasets: [{
                label: "平均銷售人數",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                ],
                data: [1670
                    , 2013
                    , 2213
                    , 2400
                    , 2968
                    , 3250
                    , 3266
                    , 3833
                    , 4425
                    , 4477
                    , 4782
                    , 5145]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 賣課金額前20%的課程類型 Single Bar Chart5
    var ctx06 = $("#bar-chart5").get(0).getContext("2d");
    var myChart06 = new Chart(ctx06, {
        type: "bar",
        data: {
            labels: ["手作"
                , "生活品味"
                , "藝術"
                , "音樂"
                , "人文"
                , "設計"
                , "程式"
                , "攝影"
                , "行銷"
                , "職場技能"
                , "投資理財"
                , "語言"],
            datasets: [{
                label: "課程營收總和(k)",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                ],
                data: [3543
                    , 3850
                    , 4585
                    , 4627
                    , 4684
                    , 5432
                    , 6029
                    , 6474
                    , 6558
                    , 7676
                    , 8146
                    , 11708]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 買課程總次數前20%使用者的購課類型偏好 Single Bar Chart6
    var ctx07 = $("#bar-chart6").get(0).getContext("2d");
    var myChart07 = new Chart(ctx07, {
        type: "bar",
        data: {
            labels: ["手作"
                , "音樂"
                , "人文"
                , "行銷"
                , "投資理財"
                , "語言"
                , "藝術"
                , "攝影"
                , "程式"
                , "生活品味"
                , "職場技能"
                , "設計"],
            datasets: [{
                label: "總課堂數",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [1479
                    , 2400
                    , 3380
                    , 8203
                    , 9162
                    , 9757
                    , 16770
                    , 18175
                    , 20837
                    , 23560
                    , 30995
                    , 35487]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 買課程總金額前20%使用者的購課類型偏好 Single Bar Chart7
    var ctx08 = $("#bar-chart7").get(0).getContext("2d");
    var myChart08 = new Chart(ctx08, {
        type: "bar",
        data: {
            labels: ["手作"
                , "音樂"
                , "人文"
                , "生活品味"
                , "行銷"
                , "語言"
                , "攝影"
                , "藝術"
                , "投資理財"
                , "設計"
                , "程式"
                , "職場技能"],
            datasets: [{
                label: "總金額(k)",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [2315
                    , 4138
                    , 6633
                    , 16488
                    , 17724
                    , 19630
                    , 20091
                    , 23915
                    , 34936
                    , 38360
                    , 52057
                    , 57950]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 平均賣課量前20%老師 Single Bar Chart8
    var ctx09 = $("#bar-chart8").get(0).getContext("2d");
    var myChart09 = new Chart(ctx09, {
        type: "bar",
        data: {
            labels: ["音樂"
                , "手作"
                , "人文"
                , "生活品味"
                , "藝術"
                , "設計"
                , "攝影"
                , "程式"
                , "職場技能"
                , "投資理財"
                , "行銷"
                , "語言"],
            datasets: [{
                label: "平均銷售量",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                    "rgba(0, 156, 255)",
                ],
                data: [1125
                    , 1518
                    , 1919
                    , 2338
                    , 2942
                    , 2980
                    , 3091
                    , 3609
                    , 3633
                    , 4503
                    , 4563
                    , 5849]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 課程平均銷售金額前20%老師 Single Bar Chart9
    var ctx10 = $("#bar-chart9").get(0).getContext("2d");
    var myChart10 = new Chart(ctx10, {
        type: "bar",
        data: {
            labels: ["手作"
                ,"人文"
                ,"音樂"
                ,"生活品味"
                ,"藝術"
                ,"設計"
                ,"攝影"
                ,"程式"
                ,"職場技能"
                ,"行銷"
                ,"投資理財"
                ,"語言"],
            datasets: [{
                label: "課程平均銷售金額(k)",
                backgroundColor: [
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .2)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255)",
                ],
                data: [3525
                    ,3809
                    ,4627
                    ,4662
                    ,5327
                    ,6183
                    ,6717
                    ,8467
                    ,8945
                    ,9486
                    ,10008
                    ,15880]
            }]
        },
        options: {
            responsive: true
        }
    });

    // 課程類別 x 募資價格與正式售價差距區間 x 購課次數 Multiple Line Chart1
    var ctx11 = $("#MultipleLineChart1").get(0).getContext("2d");
    var myChart11 = new Chart(ctx11, {
        type: "line",
        data: {
            labels: ["500元", "1000元", "1500元", "2000元", "2500元", "3000元", "3500元"],
            datasets: [{
                label: "職場技能",
                data: [764
                    , 980
                    , 1348
                    , 407
                    , 1285
                    , 0, 6828],
                borderColor: "rgba(255, 102, 102)",
                // fill: true
            },
            {
                label: "生活品味",
                data: [344
                    , 544
                    , 400
                    , 263
                    , 1378
                    , 0
                    , 0],
                borderColor: "rgba(255, 178, 102)",
                // fill: true
            },
            {
                label: "程式",
                data: [, 555
                    , 939
                    , 1539
                    , 591
                    , 0
                    , 187
                    , 0],
                borderColor: "rgba(0, 0, 0)",
                // fill: true
            },
            {
                label: "藝術",
                data: [814
                    , 771
                    , 1615
                    , 1430
                    , 997
                    , 0
                    , 0],
                borderColor: "rgba(102, 0, 0)",
                // fill: true
            },
            {
                label: "設計",
                data: [866
                    , 1396
                    , 627
                    , 1932
                    , 0
                    , 176
                    , 0],
                borderColor: "rgba(102, 102, 0)",
                // fill: true
            },
            {
                label: "攝影",
                data: [791
                    , 1501
                    , 0
                    , 1262
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(0, 204, 102)",
                // fill: true
            },
            {
                label: "投資理財",
                data: [363
                    , 647
                    , 1645
                    , 386
                    , 938
                    , 240
                    , 1840],
                borderColor: "rgba(255, 204, 204)",
                // fill: true
            },
            {
                label: "語言",
                data: [2132
                    , 1149
                    , 2143
                    , 279
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(102, 178, 255)",
                // fill: true
            },
            {
                label: "音樂",
                data: [332
                    , 425
                    , 204
                    , 0
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(102, 102, 255)",
                // fill: true
            },
            {
                label: "行銷",
                data: [1606
                    , 1574
                    , 428
                    , 10
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(178, 102, 255)",
                // fill: true
            },
            {
                label: "手作",
                data: [294
                    , 587
                    , 0
                    , 0
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(255, 102, 255)",
                // fill: true
            },
            {
                label: "人文",
                data: [456
                    , 985
                    , 444
                    , 0
                    , 0
                    , 0
                    , 0],
                borderColor: "rgba(204, 0, 102)",
                // fill: true
            },
            ]
        },
        options: {
            responsive: true
        }
    });

    // 課程類別 x 募資開始時間 x 購課次數 Multiple Line Chart2
    var ctx12 = $("#MultipleLineChart2").get(0).getContext("2d");
    var myChart12 = new Chart(ctx12, {
        type: "line",
        data: {
            labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            datasets: [{
                label: "職場技能",
                data: [1793
                    , 450
                    , 667
                    , 402
                    , 1053
                    , 4208
                    , 828
                    , 690
                    , 462
                    , 622
                    , 1889
                    , 229],
                borderColor: "rgba(255, 102, 102)",
                // fill: true
            },
            {
                label: "生活品味",
                data: [368
                    , 243
                    , 1788
                    , 2834
                    , 797
                    , 409
                    , 386
                    , 91
                    , 376
                    , 754
                    , 360
                    , 2176],
                borderColor: "rgba(255, 178, 102)",
                // fill: true
            },
            {
                label: "程式",
                data: [380
                    , 516
                    , 1691
                    , 473
                    , 858
                    , 1123
                    , 1288
                    , 721
                    , 629
                    , 795
                    , 658
                    , 400],
                borderColor: "rgba(0, 0, 0)",
                // fill: true
            },
            {
                label: "藝術",
                data: [981
                    , 722
                    , 483
                    , 1177
                    , 1581
                    , 580
                    , 265
                    , 630
                    , 461
                    , 1190
                    , 767
                    , 805],
                borderColor: "rgba(102, 0, 0)",
                // fill: true
            },
            {
                label: "設計",
                data: [1171
                    , 797
                    , 936
                    , 1127
                    , 2027
                    , 1034
                    , 5175
                    , 1185
                    , 911
                    , 1860
                    , 1963
                    , 397],
                borderColor: "rgba(102, 102, 0)",
                // fill: true
            },
            {
                label: "攝影",
                data: [624
                    , 810
                    , 8491
                    , 646
                    , 859
                    , 641
                    , 999
                    , 875
                    , 909
                    , 1296
                    , 1195
                    , 675],
                borderColor: "rgba(0, 204, 102)",
                // fill: true
            },
            {
                label: "投資理財",
                data: [362
                    , 371
                    , 88
                    , 938
                    , 2277
                    , 0, 1290
                    , 1840
                    , 1175
                    , 1395
                    , 363
                    , 380],
                borderColor: "rgba(255, 204, 204)",
                // fill: true
            },
            {
                label: "語言",
                data: [1202
                    , 465
                    , 209
                    , 720
                    , 481
                    , 1416
                    , 679
                    , 414
                    , 1203
                    , 6365
                    , 2605
                    , 1632],
                borderColor: "rgba(102, 178, 255)",
                // fill: true
            },
            {
                label: "音樂",
                data: [424
                    , 105, 0
                    , 287
                    , 468
                    , 575
                    , 77
                    , 219
                    , 173
                    , 688
                    , 256
                    , 359],
                borderColor: "rgba(102, 102, 255)",
                // fill: true
            },
            {
                label: "行銷",
                data: [667
                    , 803
                    , 283
                    , 2579
                    , 237
                    , 1020
                    , 417
                    , 1088
                    , 1423
                    , 1352
                    , 2992
                    , 813],
                borderColor: "rgba(178, 102, 255)",
                // fill: true
            },
            {
                label: "手作",
                data: [268
                    , 274
                    , 1023
                    , 328
                    , 296
                    , 847
                    , 379
                    , 166
                    , 331
                    , 228
                    , 303
                    , 411],
                borderColor: "rgba(255, 102, 255)",
                // fill: true
            },
            {
                label: "人文",
                data: [95
                    , 0, 269
                    , 455
                    , 146
                    , 1584
                    , 1113
                    , 359
                    , 122
                    , 632
                    , 653
                    , 849],
                borderColor: "rgba(204, 0, 102)",
                // fill: true
            },
            ]
        },
        options: {
            responsive: true
        }
    });

    // 課程類別 x 影片總長度 x 購課次數 Multiple Line Chart3
    var ctx13 = $("#MultipleLineChart3").get(0).getContext("2d");
    var myChart13 = new Chart(ctx13, {
        type: "line",
        data: {
            labels: ["1hr", "2hr", "3hr", "4hr", "5hr", "6hr", "7hr", "8hr", "9hr", "10hr", "11hr", "12hr", "13hr", "14hr", "15hr"],
            datasets: [{
                label: "職場技能",
                data: [1420, 899, 782, 572, 1590, 1052, 957, 3378, 1724, 910, 863, 7075, 669, 0, 0],
                borderColor: "rgba(255, 102, 102)",
                // fill: true
            },
            {
                label: "生活品味",
                data: [2593, 338, 738, 669, 517, 480, 462, 1345, 986, 201, 1378, 0, 0, 0, 0],
                borderColor: "rgba(255, 178, 102)",
                // fill: true
            },
            {
                label: "程式",
                data: [276, 332, 242, 744, 573, 394, 709, 1464, 769, 1248, 786, 593, 790, 778, 2076],
                borderColor: "rgba(0, 0, 0)",
                // fill: true
            },
            {
                label: "藝術",
                data: [714, 954, 411, 1156, 836, 964, 1652, 901, 0, 1615, 1430, 1741, 0, 0, 303],
                borderColor: "rgba(102, 0, 0)",
                // fill: true
            },
            {
                label: "設計",
                data: [4327
                    , 392
                    , 398
                    , 883
                    , 917
                    , 1577
                    , 2104
                    , 94
                    , 1632
                    , 578
                    , 2067
                    , 1222, 0
                    , 1313
                    , 2207],
                borderColor: "rgba(102, 102, 0)",
                // fill: true
            },
            {
                label: "攝影",
                data: [17684
                    , 866
                    , 818
                    , 1789
                    , 1574
                    , 180
                    , 600
                    , 1238
                    , 191, 0, 0, 0, 0, 0, 0],
                borderColor: "rgba(0, 204, 102)",
                // fill: true
            },
            {
                label: "投資理財",
                data: [256
                    , 316
                    , 664
                    , 577
                    , 1851
                    , 1394
                    , 435, 0
                    , 352
                    , 2283
                    , 95
                    , 4187, 0, 0
                    , 1840],
                borderColor: "rgba(255, 204, 204)",
                // fill: true
            },
            {
                label: "語言",
                data: [232
                    , 814
                    , 1449
                    , 1152
                    , 5020
                    , 499
                    , 452
                    , 357
                    , 2179
                    , 4
                    , 259
                    , 3
                    , 0, 764, 0],
                borderColor: "rgba(102, 178, 255)",
                // fill: true
            },
            {
                label: "音樂",
                data: [295
                    , 289
                    , 628
                    , 351
                    , 197
                    , 533
                    , 0
                    , 359
                    , 269, 0, 0, 0, 0, 0, 0],
                borderColor: "rgba(102, 102, 255)",
                // fill: true
            },
            {
                label: "行銷",
                data: [102
                    , 722
                    , 1578
                    , 1234
                    , 1091
                    , 1469
                    , 7990, 0
                    , 751, 0, 0
                    , 1894, 0, 0, 0],
                borderColor: "rgba(178, 102, 255)",
                // fill: true
            },
            {
                label: "手作",
                data: [308
                    , 249
                    , 261
                    , 539
                    , 413
                    , 1309
                    , 223
                    , 268, 0, 0
                    , 476
                    , 328, 0, 0
                    , 255],
                borderColor: "rgba(255, 102, 255)",
                // fill: true
            },
            {
                label: "人文",
                data: [61
                    , 394
                    , 612
                    , 691
                    , 812
                    , 1341, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: "rgba(204, 0, 102)",
                // fill: true
            },
            ]
        },
        options: {
            responsive: true
        }
    });

})(jQuery);

