/// <reference path="../jquery/jquery.d.ts"/>

// Extend jquery with .slide()
interface JQuery {
    tabbed(options?:any):void;
}

// Export a dummy implementation for AMD
declare module "tabbed" {
    function dummy():void;
    export = dummy;
}
