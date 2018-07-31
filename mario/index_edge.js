/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'lilita-one, sans-serif': '<script src=\"http://use.edgefonts.net/lilita-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background2',
                            type: 'image',
                            rect: ['0px', '0px', '984px', '611px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
                        },
                        {
                            id: 'clouds',
                            symbolName: 'clouds',
                            type: 'rect',
                            rect: ['997px', '33px', '939', '223', 'auto', 'auto']
                        },
                        {
                            id: 'ghostly2Copy',
                            symbolName: 'ghostly_1',
                            type: 'rect',
                            rect: ['40px', '279', '262', '223', 'auto', 'auto']
                        },
                        {
                            id: 'target5',
                            type: 'rect',
                            rect: ['820px', '97px', '107', '219', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(53,162,34,1.00)',0],['rgba(182,221,176,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'target4',
                            type: 'rect',
                            rect: ['645px', '97px', '107', '219', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(251,76,137,1.00)',0],['rgba(255,173,218,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'target3',
                            type: 'rect',
                            rect: ['446px', '103px', '107', '219', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(85,31,10,1.00)',0],['rgba(170,144,133,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'target2',
                            type: 'rect',
                            rect: ['263px', '104', '107', '219', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(252,236,4,1.00)',0],['rgba(254,249,187,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'target1',
                            type: 'rect',
                            rect: ['66', '103px', '108', '219', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(191,0,16,1.00)',0],['rgba(233,169,175,1.00)',100],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'warrio',
                            type: 'image',
                            rect: ['244px', '98px', '145px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"warrio.png",'0px','0px'],
                            transform: [[],['-13']]
                        },
                        {
                            id: 'DK',
                            type: 'image',
                            rect: ['465px', '88px', '72px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DK.png",'0px','0px'],
                            transform: [[],['-19']]
                        },
                        {
                            id: 'mush',
                            symbolName: 'mush',
                            type: 'rect',
                            rect: ['902', '489', '47', '48', 'auto', 'auto']
                        },
                        {
                            id: 'pipe',
                            type: 'image',
                            rect: ['896px', '488px', '59px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pipe.png",'0px','0px']
                        },
                        {
                            id: 'luigi2',
                            type: 'image',
                            rect: ['806px', '96px', '126px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"luigi2.png",'0px','0px'],
                            transform: [[],['-13']]
                        },
                        {
                            id: 'mario2',
                            type: 'image',
                            rect: ['43px', '118px', '142px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mario2.png",'0px','0px'],
                            transform: [[],['-13']]
                        },
                        {
                            id: 'peach',
                            type: 'image',
                            rect: ['631px', '70px', '126px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"peach.png",'0px','0px'],
                            transform: [[],['-15']]
                        },
                        {
                            id: 'i5s',
                            symbolName: 'i5s',
                            type: 'rect',
                            rect: ['432px', '332', '151', '260', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'i5',
                            symbolName: 'i5',
                            type: 'rect',
                            rect: ['46px', '338px', '136', '264', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'i4',
                            symbolName: 'i4',
                            type: 'rect',
                            rect: ['628px', '332', '142', '260', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'i3',
                            symbolName: 'i3',
                            type: 'rect',
                            rect: ['242px', '340', '151', '260', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'i2',
                            symbolName: 'i2',
                            type: 'rect',
                            rect: ['801px', '340', '133', '248', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'barbg',
                            type: 'rect',
                            rect: ['628px', '24px', '346', '31px', 'auto', 'auto'],
                            opacity: '0.45526123046875',
                            fill: ["rgba(136,136,136,0.32)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            boxShadow: ["inset", 0, 0, 16, 5, "rgba(0,0,0,0.21)"]
                        },
                        {
                            id: 'bar',
                            symbolName: 'bar',
                            type: 'rect',
                            rect: ['628px', '27px', '356', '31', 'auto', 'auto']
                        },
                        {
                            id: 'title',
                            type: 'image',
                            rect: ['13px', '8px', '610px', '71px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px']
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            type: 'rect',
                            rect: ['7', '89', '977', '503', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'thanks5',
                            type: 'image',
                            rect: ['3px', '410px', '974px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"thanks5.png",'0px','0px'],
                            transform: [[],['1']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '980px', '611px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid235",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '611px',
                            '611px'
                        ],
                        [
                            "eid140",
                            "top",
                            0,
                            0,
                            "linear",
                            "${target2}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid137",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${target2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid243",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${target1}",
                            [270,[['rgba(191,0,16,1.00)',0],['rgba(233,169,175,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(191,0,16,1.00)',0],['rgba(233,169,175,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid241",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${target2}",
                            [270,[['rgba(252,236,4,1.00)',0],['rgba(254,249,187,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(252,236,4,1.00)',0],['rgba(254,249,187,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            0,
                            "linear",
                            "${target2}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid177",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid366",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${bar}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid132",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${target1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid234",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '980px',
                            '980px'
                        ],
                        [
                            "eid251",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${clouds}",
                            '-968px',
                            '997px'
                        ],
                        [
                            "eid365",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${bar}",
                            '628px',
                            '628px'
                        ]
                    ]
                }
            },
            "part": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'part',
                            type: 'image',
                            rect: [0, 0, '198px', '112px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/part_03.png', '0px', '0px']
                        },
                        {
                            id: 'eyes3',
                            type: 'rect',
                            rect: ['10', '-174', 198, 112, 'auto', 'auto'],
                            symbolName: 'eyes3'
                        },
                        {
                            rect: [25, '11px', '61px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: 'rect(0px 61.375px 0px 0px)',
                            fill: ['rgba(135,130,99,1.00)']
                        },
                        {
                            rect: [116, '11px', '61px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: 'rect(0px 61.375px 0px 0px)',
                            fill: ['rgba(135,130,99,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 198, 112]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid18",
                            "clip",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,61.375,0,0],
                            [0,61.375,84.15625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19",
                            "clip",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,61.375,84.15625,0],
                            [0,61.375,1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20",
                            "clip",
                            0,
                            500,
                            "easeInOutQuad",
                            "${EllipseCopy}",
                            [0,61.375,0,0],
                            [0,61.375,84.15625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21",
                            "clip",
                            500,
                            500,
                            "easeInOutQuad",
                            "${EllipseCopy}",
                            [0,61.375,84.15625,0],
                            [0,61.375,1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "moustache": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'moustache',
                            type: 'image',
                            rect: [0, 0, '183px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/part_103.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 183, 60]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${moustache}",
                            '0deg',
                            '17deg'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${moustache}",
                            '17deg',
                            '-18deg'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${moustache}",
                            '-18deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "eyes3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'partCopy',
                            type: 'image',
                            rect: [0, 0, '198px', '112px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/part_03.png', '0px', '0px']
                        },
                        {
                            rect: [25, '11px', '61px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: 'rect(0px 61.375px 0px 0px)',
                            fill: ['rgba(135,130,99,1.00)']
                        },
                        {
                            rect: [116, '11px', '61px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: 'rect(0px 61.375px 0px 0px)',
                            fill: ['rgba(135,130,99,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 198, 112]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "clip",
                            0,
                            500,
                            "easeInOutQuad",
                            "${EllipseCopy}",
                            [0,61.375,0,0],
                            [0,61.375,84.15625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid45",
                            "clip",
                            500,
                            500,
                            "easeInOutQuad",
                            "${EllipseCopy}",
                            [0,61.375,84.15625,0],
                            [0,61.375,1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid42",
                            "clip",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,61.375,0,0],
                            [0,61.375,84.15625,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid43",
                            "clip",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,61.375,84.15625,0],
                            [0,61.375,1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "ears": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'part_142',
                            type: 'image',
                            rect: [4, 31, '87px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/part_142.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'part_142Copy',
                            rect: [108, 31, '87px', '73px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], ['-1', 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/part_142.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 199, 146]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid57",
                            "left",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '108px',
                            '125px'
                        ],
                        [
                            "eid61",
                            "left",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '125px',
                            '108px'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '0deg',
                            '12deg'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '12deg',
                            '0deg'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '0deg',
                            '-12deg'
                        ],
                        [
                            "eid65",
                            "rotateZ",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '31px',
                            '42px'
                        ],
                        [
                            "eid60",
                            "top",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142Copy}",
                            '42px',
                            '31px'
                        ],
                        [
                            "eid56",
                            "left",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '4px',
                            '-13px'
                        ],
                        [
                            "eid64",
                            "left",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '-13px',
                            '4px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '31px',
                            '42px'
                        ],
                        [
                            "eid63",
                            "top",
                            250,
                            250,
                            "easeInOutQuad",
                            "${part_142}",
                            '42px',
                            '31px'
                        ]
                    ]
                }
            },
            "tie": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_t',
                            type: 'rect',
                            rect: ['0', '0', 188, 184, 'auto', 'auto'],
                            symbolName: 'Symbol_t'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 188, 132]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'tie',
                            type: 'image',
                            rect: ['auto', 52, '188px', '132px', 0, 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/part_092.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 188, 132]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "right",
                            0,
                            0,
                            "easeInOutQuad",
                            "${tie}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid85",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${tie}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid68",
                            "rotateZ",
                            0,
                            0,
                            "easeInOutQuad",
                            "${tie}",
                            '0deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Symbol_t": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Symbol_12',
                            symbolName: 'Symbol_1',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [0, 0, 188, 132, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 188, 184]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${Symbol_12}",
                            '0deg',
                            '-36deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            250,
                            250,
                            "easeInOutQuad",
                            "${Symbol_12}",
                            '-36deg',
                            '36deg'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            500,
                            250,
                            "easeInOutQuad",
                            "${Symbol_12}",
                            '36deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "mouth": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 199, '109px', 'auto', 'auto'],
                            id: 'mouth',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/part_072.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 199, 109]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid98",
                            "width",
                            0,
                            250,
                            "easeInOutQuad",
                            "${mouth}",
                            '199px',
                            '119px'
                        ],
                        [
                            "eid109",
                            "width",
                            250,
                            250,
                            "easeInOutQuad",
                            "${mouth}",
                            '119px',
                            '199px'
                        ],
                        [
                            "eid102",
                            "left",
                            0,
                            250,
                            "easeInOutQuad",
                            "${mouth}",
                            '0px',
                            '39px'
                        ],
                        [
                            "eid108",
                            "left",
                            250,
                            250,
                            "easeInOutQuad",
                            "${mouth}",
                            '39px',
                            '0px'
                        ]
                    ]
                }
            },
            "bar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 0, '31px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(66,190,87,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 356, 31]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid142",
                            "background-color",
                            4000,
                            0,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            'rgba(66,190,87,1.00)',
                            'rgba(66,190,87,1.00)'
                        ],
                        [
                            "eid112",
                            "width",
                            0,
                            655,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '0px',
                            '169px'
                        ],
                        [
                            "eid122",
                            "width",
                            655,
                            3345,
                            "easeInOutQuad",
                            "${Rectangle2}",
                            '169px',
                            '350px'
                        ]
                    ]
                }
            },
            "i5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'i5',
                            type: 'image',
                            rect: [0, 0, 136, 264, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 136, 264]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid154",
                            "rotateZ",
                            0,
                            250,
                            "easeOutQuad",
                            "${i5}",
                            '0deg',
                            '-17deg'
                        ],
                        [
                            "eid156",
                            "rotateZ",
                            250,
                            250,
                            "easeOutQuad",
                            "${i5}",
                            '-17deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "i3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'i3',
                            type: 'image',
                            rect: [0, 0, 151, 260, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 151, 260]
                        }
                    }
                },
                timeline: {
                    duration: 436,
                    autoPlay: true,
                    data: [
                        [
                            "eid158",
                            "rotateZ",
                            0,
                            250,
                            "easeOutQuad",
                            "${i3}",
                            '0deg',
                            '17deg'
                        ],
                        [
                            "eid160",
                            "rotateZ",
                            250,
                            186,
                            "easeOutQuad",
                            "${i3}",
                            '17deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "i5s": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'i5s',
                            type: 'image',
                            rect: [0, 0, 151, 260, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 151, 260]
                        }
                    }
                },
                timeline: {
                    duration: 369,
                    autoPlay: true,
                    data: [
                        [
                            "eid163",
                            "rotateZ",
                            0,
                            191,
                            "easeOutQuad",
                            "${i5s}",
                            '0deg',
                            '17deg'
                        ],
                        [
                            "eid165",
                            "rotateZ",
                            191,
                            178,
                            "easeOutQuad",
                            "${i5s}",
                            '17deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "i4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'i4',
                            type: 'image',
                            rect: [0, 0, 142, 260, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 142, 260]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid168",
                            "rotateZ",
                            0,
                            250,
                            "easeOutQuad",
                            "${i4}",
                            '0deg',
                            '17deg'
                        ],
                        [
                            "eid170",
                            "rotateZ",
                            250,
                            250,
                            "easeOutQuad",
                            "${i4}",
                            '17deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "i2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'i2',
                            type: 'image',
                            rect: [0, 0, 133, 248, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 133, 248]
                        }
                    }
                },
                timeline: {
                    duration: 555,
                    autoPlay: true,
                    data: [
                        [
                            "eid173",
                            "rotateZ",
                            0,
                            250,
                            "easeOutQuad",
                            "${i2}",
                            '0deg',
                            '17deg'
                        ],
                        [
                            "eid175",
                            "rotateZ",
                            250,
                            305,
                            "easeOutQuad",
                            "${i2}",
                            '17deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '-81px', '967px', '592px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect',
                            opacity: '0.46992500938051',
                            type: 'rect',
                            fill: ['rgba(90,129,138,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['17px', '69px', '933', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            text: 'Directions:<br>Drag and drop each character to thier name. Click anywhere when you are ready to begin!',
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 0],
                            font: ['Verdana, Geneva, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '977', '503']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "clouds": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud',
                            rect: ['645px', '173px', '278px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloudCopy',
                            rect: ['0px', '18px', '278px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud2',
                            rect: ['437px', '0px', '502px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud2Copy',
                            rect: ['133px', '115px', '435px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '939px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mush": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '1px', '47px', '48px', 'auto', 'auto'],
                            id: 'mushy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mushy.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid262",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${mushy}",
                            '1px',
                            '-47px'
                        ],
                        [
                            "eid264",
                            "top",
                            1000,
                            2000,
                            "linear",
                            "${mushy}",
                            '-47px',
                            '1px'
                        ],
                        [
                            "eid266",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${mushy}",
                            '1px',
                            '-51px'
                        ],
                        [
                            "eid268",
                            "top",
                            3500,
                            2500,
                            "linear",
                            "${mushy}",
                            '-51px',
                            '2px'
                        ],
                        [
                            "eid270",
                            "top",
                            6000,
                            2000,
                            "linear",
                            "${mushy}",
                            '2px',
                            '-47px'
                        ],
                        [
                            "eid274",
                            "top",
                            8000,
                            1000,
                            "linear",
                            "${mushy}",
                            '-47px',
                            '1px'
                        ],
                        [
                            "eid275",
                            "top",
                            12000,
                            0,
                            "linear",
                            "${mushy}",
                            '3px',
                            '3px'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-338px', '133px', '188px', '161px', 'auto', 'auto'],
                            id: 'ghots',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghots.png', '0px', '0px']
                        },
                        {
                            rect: ['931px', '-278px', '233px', '200px', 'auto', 'auto'],
                            id: 'ghots3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghots.png', '0px', '0px']
                        },
                        {
                            rect: ['924px', '-284px', '175px', '138px', 'auto', 'auto'],
                            id: 'ghots4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghots.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '188px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid323",
                            "opacity",
                            11000,
                            2000,
                            "linear",
                            "${ghots4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid362",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${ghots}",
                            '133px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${ghots}",
                            '188px',
                            '188px'
                        ],
                        [
                            "eid320",
                            "left",
                            8000,
                            750,
                            "linear",
                            "${ghots3}",
                            '571px',
                            '931px'
                        ],
                        [
                            "eid287",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${ghots}",
                            '0',
                            '1'
                        ],
                        [
                            "eid284",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${ghots}",
                            '1',
                            '1'
                        ],
                        [
                            "eid361",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${ghots}",
                            '-338px',
                            '0px'
                        ],
                        [
                            "eid293",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${ghots}",
                            '0px',
                            '951px'
                        ],
                        [
                            "eid317",
                            "opacity",
                            6000,
                            2000,
                            "linear",
                            "${ghots3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid326",
                            "left",
                            13000,
                            1000,
                            "linear",
                            "${ghots4}",
                            '0px',
                            '924px'
                        ],
                        [
                            "eid291",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${ghots}",
                            '161px',
                            '161px'
                        ]
                    ]
                }
            },
            "ghostly": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'ghostlyCopy3',
                            opacity: '0',
                            rect: ['946px', '146px', '142px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ghostlyCopy4',
                            opacity: '0',
                            rect: ['954px', '-238px', '142px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ghostly',
                            opacity: '0',
                            rect: ['333px', '-64px', '262px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ghostlyCopy',
                            opacity: '0',
                            rect: ['590px', '-269px', '262px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ghostlyCopy2',
                            opacity: '0',
                            rect: ['971px', '65px', '262px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '262px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 17079,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0
                    },
                    data: [
                        [
                            "eid329",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${ghostlyCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid347",
                            "opacity",
                            11419,
                            1331,
                            "linear",
                            "${ghostlyCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid353",
                            "opacity",
                            15000,
                            1000,
                            "linear",
                            "${ghostlyCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            7669,
                            1000,
                            "linear",
                            "${ghostly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid350",
                            "left",
                            12750,
                            750,
                            "linear",
                            "${ghostlyCopy4}",
                            '104px',
                            '954px'
                        ],
                        [
                            "eid338",
                            "left",
                            5500,
                            500,
                            "linear",
                            "${ghostlyCopy}",
                            '590px',
                            '947px'
                        ],
                        [
                            "eid332",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${ghostlyCopy2}",
                            '-16px',
                            '971px'
                        ],
                        [
                            "eid344",
                            "left",
                            8669,
                            1000,
                            "linear",
                            "${ghostly}",
                            '333px',
                            '957px'
                        ],
                        [
                            "eid335",
                            "opacity",
                            4000,
                            1500,
                            "linear",
                            "${ghostlyCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid356",
                            "left",
                            16000,
                            1079,
                            "linear",
                            "${ghostlyCopy3}",
                            '663px',
                            '946px'
                        ]
                    ]
                }
            },
            "ghostly_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['946px', '146px', '142px', '121px', 'auto', 'auto'],
                            id: 'ghostlyCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            rect: ['954px', '-238px', '142px', '121px', 'auto', 'auto'],
                            id: 'ghostlyCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            rect: ['333px', '-64px', '262px', '223px', 'auto', 'auto'],
                            id: 'ghostly',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            rect: ['590px', '-269px', '262px', '223px', 'auto', 'auto'],
                            id: 'ghostlyCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        },
                        {
                            rect: ['971px', '65px', '262px', '223px', 'auto', 'auto'],
                            id: 'ghostlyCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ghostly.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '262px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 17079,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid329",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${ghostlyCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid347",
                            "opacity",
                            11419,
                            1331,
                            "linear",
                            "${ghostlyCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid353",
                            "opacity",
                            15000,
                            1000,
                            "linear",
                            "${ghostlyCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            7669,
                            1000,
                            "linear",
                            "${ghostly}",
                            '0',
                            '1'
                        ],
                        [
                            "eid350",
                            "left",
                            12750,
                            750,
                            "linear",
                            "${ghostlyCopy4}",
                            '104px',
                            '954px'
                        ],
                        [
                            "eid338",
                            "left",
                            5500,
                            500,
                            "linear",
                            "${ghostlyCopy}",
                            '590px',
                            '947px'
                        ],
                        [
                            "eid332",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${ghostlyCopy2}",
                            '-16px',
                            '971px'
                        ],
                        [
                            "eid344",
                            "left",
                            8669,
                            1000,
                            "linear",
                            "${ghostly}",
                            '333px',
                            '957px'
                        ],
                        [
                            "eid335",
                            "opacity",
                            4000,
                            1500,
                            "linear",
                            "${ghostlyCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid356",
                            "left",
                            16000,
                            1079,
                            "linear",
                            "${ghostlyCopy3}",
                            '663px',
                            '946px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-34189304");
