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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://thissongissick.com/blog/", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bottom'
   (function(symbolName) {   
   
   })("bottom");
   //Edge symbol end:'bottom'

   //=========================================================
   
   //Edge symbol: 'circle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("circle");
   //Edge symbol end:'circle'

   //=========================================================
   
   //Edge symbol: 'ballsg1'
   (function(symbolName) {   
   
   })("ballsg1");
   //Edge symbol end:'ballsg1'

   //=========================================================
   
   //Edge symbol: 'ballz'
   (function(symbolName) {   
   
   })("ballz");
   //Edge symbol end:'ballz'

   //=========================================================
   
   //Edge symbol: 'smallz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("smallz");
   //Edge symbol end:'smallz'

   //=========================================================
   
   //Edge symbol: 'smalls'
   (function(symbolName) {   
   
   })("smalls");
   //Edge symbol end:'smalls'

   //=========================================================
   
   //Edge symbol: 'lights'
   (function(symbolName) {   
   
   })("lights");
   //Edge symbol end:'lights'

})(jQuery, AdobeEdge, "EDGE-31050626");