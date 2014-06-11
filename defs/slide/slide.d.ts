/// <reference path="../jquery/jquery.d.ts"/>

// Extend jquery with .slide()
interface JQuery {
    slide(options?:any):void;
}

// Export a dummy implementation for AMD
declare module "slide" {
    function dummy():void;
    export = dummy;
}
