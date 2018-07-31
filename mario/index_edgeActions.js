/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope({nope:['jquery-ui-1.10.0.custom.min.js'], complete: init});
         
         //This hide the congratulations message
         sym.$("thanks5").hide();
         
         // This creates the variables needed for scoring and sets them to "0"
         var i2correct = 0;
         var i3correct = 0;
         var i4correct = 0;
         var i5correct = 0;
         var i5scorrect = 0; 
         
         //This is the global function that shows the congratulations message if condition is met
         function showdone(){
         if(i2correct+i3correct+i4correct+i5correct+i5scorrect == 5){
         sym.$("thanks5").show();
         }
         }
         
         function init(){
         
         
         		//iphone2;
         
         		sym.$('i2').draggable({
         				opacity:1, revert:'invalid'
         		});
         
         		sym.$('target1').droppable({
         				accept: sym.$('i2')     
         		});
         
         		sym.$('target1').droppable({    
         				drop: function() {
         				if(sym.getVariable("currentdragger") == "i2"){   
         				if(i2correct == 0){
         				sym.getSymbol("i2").play();
         				sym.getSymbol("bar").play();
         				i2correct = 1;    
         				}
         				}
         				showdone();
         			}
         		});
         
         //iphone3;
         
         		sym.$('i3').draggable({
         			opacity:1, revert:'invalid'
         		});
         
         		sym.$('target2').droppable({
         				accept: sym.$('i3')     
         		});
         
         		sym.$('target2').droppable({
         				drop: function() {
         				if(sym.getVariable("currentdragger") == "i3"){   
         				if(i3correct == 0){
         				sym.getSymbol("i3").play();
         				sym.getSymbol("bar").play();
         				i3correct = 1;    
         				}
         				}
         				showdone();
         			}
         		});
         
         
         //iphone4;
         
         		sym.$('i4').draggable({
         				opacity:1, revert:'invalid'
         		});
         
         		sym.$('target3').droppable({
         				accept: sym.$('i4')     
         		});
         
         		sym.$('target3').droppable({    
         				drop: function() {
         				if(sym.getVariable("currentdragger") == "i4"){   
         				if(i4correct == 0){
         				sym.getSymbol("i4").play();
         				sym.getSymbol("bar").play();
         				i4correct = 1;    
         				}
         				}
         				showdone();
         			}
         		});
         
         		//iphone5;
         
         		sym.$('i5').draggable({
         				opacity:1, revert:'invalid'
         		});
         
         		sym.$('target4').droppable({
         				accept: sym.$('i5')     
         		});
         
         		sym.$('target4').droppable({    
         				drop: function() {
         				if(sym.getVariable("currentdragger") == "i5"){   
         				if(i5correct == 0){
         				sym.getSymbol("i5").play();
         				sym.getSymbol("bar").play();
         				i5correct = 1;    
         				}
         				}
         				showdone();
         			}
         		});
         
         		//iPhone5s;
         
         		sym.$('i5s').draggable({
         				opacity:1, revert:'invalid'
         		});
         
         		sym.$('target5').droppable({
         				accept: sym.$('i5s')     
         		});
         
         		sym.$('target5').droppable({    
         				drop: function() {
         				if(sym.getVariable("currentdragger") == "i5s"){   
         				if(i5scorrect == 0){
         				sym.getSymbol("i5s").play();
         				sym.getSymbol("bar").play();
         				i5scorrect = 1;    
         				}
         				}
         				showdone();
         			}
         		});
         
         
         }
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${overlay}", "click", function(sym, e) {
         sym.$("overlay").hide();
         sym.play();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play('start');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'part'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("part");
   //Edge symbol end:'part'

   //=========================================================
   
   //Edge symbol: 'moustache'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("moustache");
   //Edge symbol end:'moustache'

   //=========================================================
   
   //Edge symbol: 'eyes3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("eyes3");
   //Edge symbol end:'eyes3'

   //=========================================================
   
   //Edge symbol: 'ears'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ears");
   //Edge symbol end:'ears'

   //=========================================================
   
   //Edge symbol: 'tie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("tie");
   //Edge symbol end:'tie'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_t'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Symbol_t");
   //Edge symbol end:'Symbol_t'

   //=========================================================
   
   //Edge symbol: 'mouth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("mouth");
   //Edge symbol end:'mouth'

   //=========================================================
   
   //Edge symbol: 'bar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bar");
   //Edge symbol end:'bar'

   //=========================================================
   
   //Edge symbol: 'i5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i5}", "mouseleave", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i5}", "mouseenter", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "i5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("i5");
   //Edge symbol end:'i5'

   //=========================================================
   
   //Edge symbol: 'i3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i3}", "mouseenter", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "i3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i3}", "mouseleave", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("i3");
   //Edge symbol end:'i3'

   //=========================================================
   
   //Edge symbol: 'i5s'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i5s}", "mouseleave", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i5s}", "mouseenter", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "i5s");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("i5s");
   //Edge symbol end:'i5s'

   //=========================================================
   
   //Edge symbol: 'i4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i4}", "mouseenter", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "i4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i4}", "mouseleave", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("i4");
   //Edge symbol end:'i4'

   //=========================================================
   
   //Edge symbol: 'i2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i2}", "mouseleave", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i2}", "mouseenter", function(sym, e) {
         sym.getComposition().getStage().setVariable("currentdragger", "i2");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("i2");
   //Edge symbol end:'i2'

   //=========================================================
   
   //Edge symbol: 'overlay'
   (function(symbolName) {   
   
   })("overlay");
   //Edge symbol end:'overlay'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'mush'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play("loop");
         

      });
      //Edge binding end

   })("mush");
   //Edge symbol end:'mush'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'ghostly'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17079, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("ghostly");
   //Edge symbol end:'ghostly'

   //=========================================================
   
   //Edge symbol: 'ghostly_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17079, function(sym, e) {
         sym.play('loop');
         

      });
      //Edge binding end

   })("ghostly_1");
   //Edge symbol end:'ghostly_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-34189304");