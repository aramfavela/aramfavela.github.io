/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['zeyada, sans-serif']='<script src=\"http://use.edgefonts.net/zeyada:n4:all.js\"></script>';
   fonts['condiment, sans-serif']='<script src=\"http://use.edgefonts.net/condiment:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bottom',
            type:'rect',
            rect:['-161','484','auto','auto','auto','auto']
         },
         {
            id:'amp',
            type:'text',
            rect:['165px','458px','auto','auto','auto','auto'],
            text:"AMPHITHEATRE",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(237,57,82,1.00)","normal","none","normal"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['-176px','439px','174px','2px','auto','auto'],
            fill:["rgba(0,170,193,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RedRoks',
            type:'text',
            rect:['170px','408px','143px','42px','auto','auto'],
            text:"RED ROCKS",
            align:"left",
            font:['Arial, Helvetica, sans-serif',23,"rgba(237,57,82,1.00)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['-183px','397px','174px','5px','auto','auto'],
            fill:["rgba(0,170,193,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'date',
            type:'text',
            rect:['21px','350px','auto','auto','auto','auto'],
            text:"9.28.13",
            align:"left",
            font:['Arial, Helvetica, sans-serif',36,"rgba(0,170,193,1.00)","normal","none","normal"]
         },
         {
            id:'adventure',
            type:'image',
            rect:['-165px','268px','158px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"adventure.png",'0px','0px']
         },
         {
            id:'II',
            type:'image',
            rect:['168px','211px','45px','52px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"II.png",'0px','0px']
         },
         {
            id:'rowdy',
            type:'text',
            rect:['-154px','149px','auto','auto','auto','auto'],
            text:"Rowdytown",
            align:"left",
            font:['condiment, sans-serif',36,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'presents',
            type:'text',
            rect:['168px','128px','auto','auto','auto','auto'],
            text:"PRESENTS",
            font:['Arial, Helvetica, sans-serif',18,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'bigg',
            type:'image',
            rect:['-165px','5px','155px','111px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bigg.png",'0px','0px']
         },
         {
            id:'lights2',
            type:'rect',
            rect:['-9','-103','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'lights2',
            symbolName:'lights'
         },
         {
            id:'bottom',
            symbolName:'bottom'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bottom}": [
            ["style", "left", '-165px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '439px'],
            ["style", "left", '-176px'],
            ["style", "width", '174px']
         ],
         "${_amp}": [
            ["style", "top", '458px'],
            ["style", "left", '165px'],
            ["color", "color", 'rgba(237,57,82,1.00)']
         ],
         "${_RedRoks}": [
            ["style", "top", '408px'],
            ["style", "font-size", '23px'],
            ["style", "height", '42px'],
            ["color", "color", 'rgba(237,57,82,1.00)'],
            ["style", "left", '170px'],
            ["style", "width", '143px']
         ],
         "${_Rectangle}": [
            ["style", "height", '5px'],
            ["style", "top", '397px'],
            ["style", "left", '-183px'],
            ["color", "background-color", 'rgba(0,170,193,1.00)']
         ],
         "${_bigg}": [
            ["style", "top", '5px'],
            ["style", "left", '-165px'],
            ["style", "cursor", 'auto']
         ],
         "${_adventure}": [
            ["style", "top", '268px'],
            ["style", "left", '-165px']
         ],
         "${_rowdy}": [
            ["style", "top", '149px'],
            ["style", "font-family", 'condiment, sans-serif'],
            ["style", "left", '-154px'],
            ["style", "font-size", '36px']
         ],
         "${_date}": [
            ["color", "color", 'rgba(0,170,193,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '168px'],
            ["style", "top", '350px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '160px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_presents}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '128px'],
            ["style", "left", '168px'],
            ["style", "font-size", '18px']
         ],
         "${_II}": [
            ["style", "top", '211px'],
            ["style", "left", '168px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9500,
         autoPlay: true,
         timeline: [
            { id: "eid346", tween: [ "style", "${_amp}", "top", '458px', { fromValue: '458px'}], position: 9000, duration: 0 },
            { id: "eid324", tween: [ "style", "${_II}", "top", '211px', { fromValue: '211px'}], position: 5750, duration: 0 },
            { id: "eid306", tween: [ "style", "${_presents}", "top", '128px', { fromValue: '128px'}], position: 4000, duration: 0 },
            { id: "eid332", tween: [ "style", "${_date}", "top", '350px', { fromValue: '350px'}], position: 7000, duration: 0 },
            { id: "eid301", tween: [ "style", "${_bigg}", "top", '5px', { fromValue: '5px'}], position: 3000, duration: 0 },
            { id: "eid337", tween: [ "style", "${_Rectangle}", "left", '-3px', { fromValue: '-183px'}], position: 7500, duration: 500 },
            { id: "eid339", tween: [ "style", "${_RedRoks}", "top", '408px', { fromValue: '408px'}], position: 8000, duration: 0 },
            { id: "eid309", tween: [ "style", "${_rowdy}", "top", '149px', { fromValue: '149px'}], position: 5000, duration: 0 },
            { id: "eid344", tween: [ "style", "${_Rectangle2}", "left", '-3px', { fromValue: '-176px'}], position: 8500, duration: 500 },
            { id: "eid307", tween: [ "style", "${_presents}", "left", '29px', { fromValue: '168px'}], position: 4000, duration: 1000 },
            { id: "eid343", tween: [ "style", "${_Rectangle2}", "top", '439px', { fromValue: '439px'}], position: 8500, duration: 0 },
            { id: "eid227", tween: [ "style", "${_bottom}", "left", '-165px', { fromValue: '-165px'}], position: 1914, duration: 0 },
            { id: "eid310", tween: [ "style", "${_rowdy}", "left", '4px', { fromValue: '-154px'}], position: 5000, duration: 750 },
            { id: "eid330", tween: [ "style", "${_adventure}", "left", '-2px', { fromValue: '-165px'}], position: 6500, duration: 500 },
            { id: "eid329", tween: [ "style", "${_adventure}", "top", '268px', { fromValue: '268px'}], position: 6500, duration: 0 },
            { id: "eid334", tween: [ "style", "${_date}", "left", '24px', { fromValue: '168px'}], position: 7000, duration: 500 },
            { id: "eid336", tween: [ "style", "${_Rectangle}", "top", '397px', { fromValue: '397px'}], position: 7500, duration: 0 },
            { id: "eid347", tween: [ "style", "${_amp}", "left", '9px', { fromValue: '165px'}], position: 9000, duration: 500 },
            { id: "eid340", tween: [ "style", "${_RedRoks}", "left", '9px', { fromValue: '170px'}], position: 8000, duration: 500 },
            { id: "eid327", tween: [ "style", "${_II}", "left", '48px', { fromValue: '168px'}], position: 5750, duration: 750 },
            { id: "eid302", tween: [ "style", "${_bigg}", "left", '1px', { fromValue: '-165px'}], position: 3000, duration: 1000 }         ]
      }
   }
},
"bottom": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mountains',
      type: 'image',
      rect: ['164px','118px','160px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mountains.png','0px','0px']
   },
   {
      id: 'bluestripes',
      type: 'image',
      rect: ['322px','65px','160px','51px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bluestripes.png','0px','0px']
   },
   {
      id: 'yellowstripes',
      type: 'image',
      rect: ['0px','52px','160px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/yellowstripes.png','0px','0px']
   },
   {
      id: 'halfdome',
      type: 'image',
      rect: ['180px','0px','131px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/halfdome.png','0px','0px']
   },
   {
      id: 'redstripe',
      type: 'image',
      rect: ['195px','132px','75px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/redstripe.png','0px','0px']
   },
   {
      id: 'bbstripe',
      type: 'image',
      rect: ['223px','119px','62px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bbstripe.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_redstripe}": [
            ["style", "top", '132px'],
            ["style", "left", '195px']
         ],
         "${_bluestripes}": [
            ["style", "top", '65px'],
            ["style", "left", '322px']
         ],
         "${symbolSelector}": [
            ["style", "height", '181px'],
            ["style", "width", '482px']
         ],
         "${_bbstripe}": [
            ["style", "left", '223px'],
            ["style", "top", '119px']
         ],
         "${_halfdome}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '180px']
         ],
         "${_mountains}": [
            ["style", "top", '118px'],
            ["style", "left", '164px']
         ],
         "${_yellowstripes}": [
            ["style", "left", '0px'],
            ["style", "top", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_bbstripe}", "left", '223px', { fromValue: '223px'}], position: 2000, duration: 0 },
            { id: "eid16", tween: [ "style", "${_yellowstripes}", "left", '166px', { fromValue: '0px'}], position: 1000, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_halfdome}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 500 },
            { id: "eid6", tween: [ "style", "${_mountains}", "left", '164px', { fromValue: '164px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_redstripe}", "left", '195px', { fromValue: '195px'}], position: 2000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_bluestripes}", "left", '166px', { fromValue: '322px'}], position: 1000, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_yellowstripes}", "top", '52px', { fromValue: '52px'}], position: 1000, duration: 0 },
            { id: "eid23", tween: [ "style", "${_redstripe}", "top", '90px', { fromValue: '132px'}], position: 2000, duration: 500 },
            { id: "eid12", tween: [ "style", "${_bluestripes}", "top", '65px', { fromValue: '65px'}], position: 1000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_mountains}", "top", '38px', { fromValue: '118px'}], position: 0, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_bbstripe}", "top", '77px', { fromValue: '119px'}], position: 2000, duration: 500 }         ]
      }
   }
},
"circle": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','16px','16px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(4,190,241,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '16px']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(4,190,241,1)'],
            ["style", "height", '8px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid75", tween: [ "style", "${_Ellipse3}", "height", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(241,208,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(4,190,241,1)'}], position: 0, duration: 646 },
            { id: "eid55", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(241,3,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,208,3,1.00)'}], position: 646, duration: 1354 },
            { id: "eid76", tween: [ "style", "${_Ellipse3}", "width", '8px', { fromValue: '8px'}], position: 0, duration: 0 }         ]
      }
   }
},
"ballsg1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'circle6',
      type: 'rect',
      rect: ['72px','105px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'circle6',
      symbolName: 'circle'
   }   ]
   },
   states: {
      "Base State": {
         "${_circle6}": [
            ["style", "left", '20px'],
            ["style", "top", '127px']
         ],
         "${symbolSelector}": [
            ["style", "height", '171px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ballz": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ballsg12',
      type: 'rect',
      rect: ['60px','374px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg13',
      type: 'rect',
      rect: ['78px','454px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg14',
      type: 'rect',
      rect: ['83px','558px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg16',
      type: 'rect',
      rect: ['24px','495px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg17',
      type: 'rect',
      rect: ['54px','188px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg18',
      type: 'rect',
      rect: ['24px','445px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg19',
      type: 'rect',
      rect: ['114px','202px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg110',
      type: 'rect',
      rect: ['102px','410px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg114',
      type: 'rect',
      rect: ['108px','122px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg111',
      type: 'rect',
      rect: ['38px','368px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg112',
      type: 'rect',
      rect: ['114px','154px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg113',
      type: 'rect',
      rect: ['47px','266px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg115',
      type: 'rect',
      rect: ['24px','398px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'ballsg14',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg115',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg17',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg114',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg113',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg16',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg110',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg112',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg12',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg111',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg18',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg13',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg19',
      symbolName: 'ballsg1'
   }   ]
   },
   states: {
      "Base State": {
         "${_ballsg19}": [
            ["style", "left", '114px'],
            ["style", "top", '202px']
         ],
         "${_ballsg115}": [
            ["style", "left", '8px'],
            ["style", "top", '259px']
         ],
         "${_ballsg111}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ballsg16}": [
            ["style", "left", '108px'],
            ["style", "top", '324px']
         ],
         "${_ballsg114}": [
            ["style", "left", '18px'],
            ["style", "top", '66px']
         ],
         "${_ballsg113}": [
            ["style", "left", '8px'],
            ["style", "top", '138px']
         ],
         "${_ballsg17}": [
            ["style", "left", '54px'],
            ["style", "top", '188px']
         ],
         "${_ballsg13}": [
            ["style", "left", '98px'],
            ["style", "top", '0px']
         ],
         "${_ballsg18}": [
            ["style", "top", '409px'],
            ["style", "left", '90px']
         ],
         "${_ballsg14}": [
            ["style", "left", '8px'],
            ["style", "top", '438px']
         ],
         "${symbolSelector}": [
            ["style", "height", '660px'],
            ["style", "width", '174px']
         ],
         "${_ballsg110}": [
            ["style", "left", '68px'],
            ["style", "top", '288px']
         ],
         "${_ballsg112}": [
            ["style", "left", '84px'],
            ["style", "top", '103px']
         ],
         "${_ballsg12}": [
            ["style", "left", '8px'],
            ["style", "top", '352px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3080,
         autoPlay: true,
         timeline: [
            { id: "eid104", tween: [ "style", "${_ballsg111}", "left", '0px', { fromValue: '0px'}], position: 322, duration: 0 },
            { id: "eid112", tween: [ "style", "${_ballsg115}", "left", '8px', { fromValue: '8px'}], position: 322, duration: 0 },
            { id: "eid127", tween: [ "style", "${_ballsg12}", "top", '352px', { fromValue: '352px'}], position: 322, duration: 0 },
            { id: "eid116", tween: [ "style", "${_ballsg16}", "left", '108px', { fromValue: '108px'}], position: 322, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ballsg14}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
            { id: "eid118", tween: [ "style", "${_ballsg13}", "left", '98px', { fromValue: '98px'}], position: 322, duration: 0 },
            { id: "eid117", tween: [ "style", "${_ballsg16}", "top", '324px', { fromValue: '324px'}], position: 322, duration: 0 },
            { id: "eid224", tween: [ "style", "${_ballsg112}", "top", '123px', { fromValue: '103px'}], position: 322, duration: 2758 },
            { id: "eid111", tween: [ "style", "${_ballsg110}", "top", '288px', { fromValue: '288px'}], position: 322, duration: 0 },
            { id: "eid110", tween: [ "style", "${_ballsg110}", "left", '68px', { fromValue: '68px'}], position: 322, duration: 0 },
            { id: "eid119", tween: [ "style", "${_ballsg13}", "top", '0px', { fromValue: '0px'}], position: 322, duration: 0 },
            { id: "eid125", tween: [ "style", "${_ballsg18}", "top", '409px', { fromValue: '409px'}], position: 322, duration: 0 },
            { id: "eid113", tween: [ "style", "${_ballsg115}", "top", '259px', { fromValue: '259px'}], position: 322, duration: 0 },
            { id: "eid126", tween: [ "style", "${_ballsg12}", "left", '8px', { fromValue: '8px'}], position: 322, duration: 0 },
            { id: "eid217", tween: [ "style", "${_ballsg114}", "left", '-112px', { fromValue: '18px'}], position: 322, duration: 2758 },
            { id: "eid105", tween: [ "style", "${_ballsg111}", "top", '0px', { fromValue: '0px'}], position: 322, duration: 0 },
            { id: "eid109", tween: [ "style", "${_ballsg113}", "top", '138px', { fromValue: '138px'}], position: 322, duration: 0 },
            { id: "eid108", tween: [ "style", "${_ballsg113}", "left", '8px', { fromValue: '8px'}], position: 322, duration: 0 },
            { id: "eid218", tween: [ "style", "${_ballsg114}", "top", '31px', { fromValue: '66px'}], position: 322, duration: 2758 },
            { id: "eid223", tween: [ "style", "${_ballsg112}", "left", '263px', { fromValue: '84px'}], position: 322, duration: 2758 },
            { id: "eid124", tween: [ "style", "${_ballsg18}", "left", '90px', { fromValue: '90px'}], position: 322, duration: 0 }         ]
      }
   }
},
"smallz": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','6px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'smallball',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_smallball}": [
            ["style", "top", '0px'],
            ["style", "height", '5px'],
            ["color", "background-color", 'rgba(238,58,83,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '6px']
         ],
         "${symbolSelector}": [
            ["style", "height", '5px'],
            ["style", "width", '6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid199", tween: [ "color", "${_smallball}", "background-color", 'rgba(5,190,241,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(238,58,83,1)'}], position: 0, duration: 645 },
            { id: "eid201", tween: [ "color", "${_smallball}", "background-color", 'rgba(255,228,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(5,190,241,1)'}], position: 645, duration: 855 }         ]
      }
   }
},
"smalls": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'smallz',
      type: 'rect',
      rect: ['191px','210px','auto','auto','auto','auto']
   },
   {
      id: 'smallz4',
      type: 'rect',
      rect: ['98px','232px','auto','auto','auto','auto']
   },
   {
      id: 'smallz5',
      type: 'rect',
      rect: ['78px','7px','auto','auto','auto','auto']
   },
   {
      id: 'smallz6',
      type: 'rect',
      rect: ['54px','82px','auto','auto','auto','auto']
   },
   {
      id: 'smallz7',
      type: 'rect',
      rect: ['0px','369px','auto','auto','auto','auto']
   },
   {
      id: 'smallz8',
      type: 'rect',
      rect: ['14px','185px','auto','auto','auto','auto']
   },
   {
      id: 'smallz9',
      type: 'rect',
      rect: ['106px','124px','auto','auto','auto','auto']
   },
   {
      id: 'smallz10',
      type: 'rect',
      rect: ['6px','278px','auto','auto','auto','auto']
   },
   {
      id: 'smallz11',
      type: 'rect',
      rect: ['6px','0px','auto','auto','auto','auto']
   },
   {
      id: 'smallz12',
      type: 'rect',
      rect: ['120px','232px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'smallz7',
      symbolName: 'smallz'
   },
   {
      id: 'smallz4',
      symbolName: 'smallz'
   },
   {
      id: 'smallz8',
      symbolName: 'smallz'
   },
   {
      id: 'smallz10',
      symbolName: 'smallz'
   },
   {
      id: 'smallz12',
      symbolName: 'smallz'
   },
   {
      id: 'smallz11',
      symbolName: 'smallz'
   },
   {
      id: 'smallz',
      symbolName: 'smallz'
   },
   {
      id: 'smallz6',
      symbolName: 'smallz'
   },
   {
      id: 'smallz9',
      symbolName: 'smallz'
   },
   {
      id: 'smallz5',
      symbolName: 'smallz'
   }   ]
   },
   states: {
      "Base State": {
         "${_smallz6}": [
            ["style", "left", '54px'],
            ["style", "top", '82px']
         ],
         "${_smallz8}": [
            ["style", "left", '14px'],
            ["style", "top", '185px']
         ],
         "${_smallz5}": [
            ["style", "left", '78px'],
            ["style", "top", '7px']
         ],
         "${_smallz}": [
            ["style", "left", '92px'],
            ["style", "top", '205px']
         ],
         "${_smallz4}": [
            ["style", "left", '60px'],
            ["style", "top", '327px']
         ],
         "${_smallz9}": [
            ["style", "left", '106px'],
            ["style", "top", '124px']
         ],
         "${_smallz12}": [
            ["style", "left", '120px'],
            ["style", "top", '232px']
         ],
         "${symbolSelector}": [
            ["style", "height", '374px'],
            ["style", "width", '126px']
         ],
         "${_smallz10}": [
            ["style", "left", '6px'],
            ["style", "top", '278px']
         ],
         "${_smallz7}": [
            ["style", "left", '0px'],
            ["style", "top", '369px']
         ],
         "${_smallz11}": [
            ["style", "left", '6px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2847,
         autoPlay: true,
         timeline: [
            { id: "eid207", tween: [ "style", "${_smallz4}", "top", '327px', { fromValue: '327px'}], position: 2847, duration: 0 },
            { id: "eid202", tween: [ "style", "${_smallz}", "left", '92px', { fromValue: '92px'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "style", "${_smallz}", "top", '205px', { fromValue: '205px'}], position: 0, duration: 0 },
            { id: "eid206", tween: [ "style", "${_smallz4}", "left", '60px', { fromValue: '60px'}], position: 2847, duration: 0 }         ]
      }
   }
},
"lights": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ballsg1',
      type: 'rect',
      transform: [],
      rect: ['11px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy2',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy6',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy3',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy4',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy5',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy8',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'smallz',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy2',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy3',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy4',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy8',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy5',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy6',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy7',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'ballsg1Copy7',
      type: 'rect',
      transform: [],
      rect: ['3px','468px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy9',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   },
   {
      id: 'smallzCopy10',
      type: 'rect',
      rect: ['16px','617px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'smallzCopy8',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy5',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy6',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy',
      symbolName: 'smallz'
   },
   {
      id: 'ballsg1Copy4',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy7',
      symbolName: 'ballsg1'
   },
   {
      id: 'smallz',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy9',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy3',
      symbolName: 'smallz'
   },
   {
      id: 'ballsg1Copy5',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy',
      symbolName: 'ballsg1'
   },
   {
      id: 'smallzCopy2',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy10',
      symbolName: 'smallz'
   },
   {
      id: 'smallzCopy7',
      symbolName: 'smallz'
   },
   {
      id: 'ballsg1',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy2',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy3',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy6',
      symbolName: 'ballsg1'
   },
   {
      id: 'ballsg1Copy8',
      symbolName: 'ballsg1'
   },
   {
      id: 'smallzCopy4',
      symbolName: 'smallz'
   }   ]
   },
   states: {
      "Base State": {
         "${_ballsg1Copy8}": [
            ["style", "top", '179px'],
            ["style", "left", '106px']
         ],
         "${_ballsg1Copy5}": [
            ["style", "top", '239px'],
            ["style", "left", '126px']
         ],
         "${_smallzCopy7}": [
            ["style", "left", '16px'],
            ["style", "top", '217px']
         ],
         "${_smallzCopy8}": [
            ["style", "left", '157px'],
            ["style", "top", '147px']
         ],
         "${_ballsg1Copy}": [
            ["style", "top", '297px'],
            ["style", "left", '120px']
         ],
         "${symbolSelector}": [
            ["style", "height", '639px'],
            ["style", "width", '186px']
         ],
         "${_smallzCopy3}": [
            ["style", "left", '17px'],
            ["style", "top", '433px']
         ],
         "${_smallzCopy}": [
            ["style", "left", '156px'],
            ["style", "top", '597px']
         ],
         "${_smallzCopy2}": [
            ["style", "left", '116px'],
            ["style", "top", '437px']
         ],
         "${_ballsg1Copy7}": [
            ["style", "top", '6px'],
            ["style", "left", '14px']
         ],
         "${_smallz}": [
            ["style", "left", '16px'],
            ["style", "top", '617px']
         ],
         "${_smallzCopy9}": [
            ["style", "left", '150px'],
            ["style", "top", '241px']
         ],
         "${_smallzCopy10}": [
            ["style", "left", '51px'],
            ["style", "top", '297px']
         ],
         "${_smallzCopy6}": [
            ["style", "left", '26px'],
            ["style", "top", '117px']
         ],
         "${_ballsg1Copy4}": [
            ["style", "top", '85px'],
            ["style", "left", '105px']
         ],
         "${_smallzCopy5}": [
            ["style", "left", '24px'],
            ["style", "top", '365px']
         ],
         "${_ballsg1Copy2}": [
            ["style", "top", '200px'],
            ["style", "left", '0px']
         ],
         "${_ballsg1}": [
            ["style", "top", '468px'],
            ["style", "left", '11px']
         ],
         "${_smallzCopy4}": [
            ["style", "left", '126px'],
            ["style", "top", '347px']
         ],
         "${_ballsg1Copy6}": [
            ["style", "top", '115px'],
            ["style", "left", '8px']
         ],
         "${_ballsg1Copy3}": [
            ["style", "top", '0px'],
            ["style", "left", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2907,
         autoPlay: true,
         timeline: [
            { id: "eid258", tween: [ "style", "${_smallzCopy6}", "left", '26px', { fromValue: '26px'}], position: 2907, duration: 0 },
            { id: "eid265", tween: [ "style", "${_smallzCopy7}", "top", '217px', { fromValue: '217px'}], position: 2907, duration: 0 },
            { id: "eid230", tween: [ "style", "${_smallzCopy}", "left", '156px', { fromValue: '156px'}], position: 2907, duration: 0 },
            { id: "eid277", tween: [ "style", "${_ballsg1Copy6}", "top", '115px', { fromValue: '115px'}], position: 2907, duration: 0 },
            { id: "eid255", tween: [ "style", "${_smallzCopy5}", "left", '24px', { fromValue: '24px'}], position: 2907, duration: 0 },
            { id: "eid286", tween: [ "style", "${_smallzCopy8}", "left", '157px', { fromValue: '157px'}], position: 2907, duration: 0 },
            { id: "eid238", tween: [ "style", "${_ballsg1Copy5}", "left", '126px', { fromValue: '126px'}], position: 2907, duration: 0 },
            { id: "eid239", tween: [ "style", "${_ballsg1Copy5}", "top", '239px', { fromValue: '239px'}], position: 2907, duration: 0 },
            { id: "eid231", tween: [ "style", "${_ballsg1Copy}", "left", '120px', { fromValue: '120px'}], position: 2907, duration: 0 },
            { id: "eid251", tween: [ "style", "${_smallzCopy4}", "left", '126px', { fromValue: '126px'}], position: 2907, duration: 0 },
            { id: "eid278", tween: [ "style", "${_ballsg1Copy6}", "left", '8px', { fromValue: '8px'}], position: 2907, duration: 0 },
            { id: "eid234", tween: [ "style", "${_ballsg1Copy2}", "top", '200px', { fromValue: '200px'}], position: 2907, duration: 0 },
            { id: "eid233", tween: [ "style", "${_ballsg1Copy2}", "left", '0px', { fromValue: '0px'}], position: 2907, duration: 0 },
            { id: "eid291", tween: [ "style", "${_smallzCopy9}", "left", '150px', { fromValue: '150px'}], position: 2907, duration: 0 },
            { id: "eid264", tween: [ "style", "${_smallzCopy7}", "left", '16px', { fromValue: '16px'}], position: 2907, duration: 0 },
            { id: "eid235", tween: [ "style", "${_ballsg1Copy3}", "top", '0px', { fromValue: '0px'}], position: 2907, duration: 0 },
            { id: "eid296", tween: [ "style", "${_smallzCopy10}", "top", '297px', { fromValue: '297px'}], position: 2907, duration: 0 },
            { id: "eid240", tween: [ "style", "${_smallzCopy2}", "top", '437px', { fromValue: '437px'}], position: 2907, duration: 0 },
            { id: "eid282", tween: [ "style", "${_ballsg1Copy7}", "left", '14px', { fromValue: '14px'}], position: 2907, duration: 0 },
            { id: "eid254", tween: [ "style", "${_smallzCopy5}", "top", '365px', { fromValue: '365px'}], position: 2907, duration: 0 },
            { id: "eid249", tween: [ "style", "${_smallzCopy3}", "top", '433px', { fromValue: '433px'}], position: 2907, duration: 0 },
            { id: "eid292", tween: [ "style", "${_smallzCopy9}", "top", '241px', { fromValue: '241px'}], position: 2907, duration: 0 },
            { id: "eid237", tween: [ "style", "${_ballsg1Copy4}", "top", '85px', { fromValue: '85px'}], position: 2907, duration: 0 },
            { id: "eid261", tween: [ "style", "${_smallzCopy6}", "top", '117px', { fromValue: '117px'}], position: 2907, duration: 0 },
            { id: "eid252", tween: [ "style", "${_smallzCopy4}", "top", '347px', { fromValue: '347px'}], position: 2907, duration: 0 },
            { id: "eid281", tween: [ "style", "${_ballsg1Copy7}", "top", '6px', { fromValue: '6px'}], position: 2907, duration: 0 },
            { id: "eid232", tween: [ "style", "${_ballsg1Copy}", "top", '297px', { fromValue: '297px'}], position: 2907, duration: 0 },
            { id: "eid248", tween: [ "style", "${_smallzCopy3}", "left", '17px', { fromValue: '17px'}], position: 2907, duration: 0 },
            { id: "eid285", tween: [ "style", "${_smallzCopy8}", "top", '147px', { fromValue: '147px'}], position: 2907, duration: 0 },
            { id: "eid228", tween: [ "style", "${_smallzCopy}", "top", '597px', { fromValue: '597px'}], position: 2907, duration: 0 },
            { id: "eid236", tween: [ "style", "${_ballsg1Copy4}", "left", '105px', { fromValue: '105px'}], position: 2907, duration: 0 },
            { id: "eid297", tween: [ "style", "${_smallzCopy10}", "left", '51px', { fromValue: '51px'}], position: 2907, duration: 0 },
            { id: "eid298", tween: [ "style", "${_ballsg1Copy8}", "top", '179px', { fromValue: '179px'}], position: 2907, duration: 0 },
            { id: "eid241", tween: [ "style", "${_smallzCopy2}", "left", '116px', { fromValue: '116px'}], position: 2907, duration: 0 },
            { id: "eid299", tween: [ "style", "${_ballsg1Copy8}", "left", '106px', { fromValue: '106px'}], position: 2907, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-31050626");
