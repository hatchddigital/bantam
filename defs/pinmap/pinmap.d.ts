/// <reference path="../jquery/jquery.d.ts"/>

// Extend jquery with .slide()
interface JQuery {
    pinmap(options?:any, callback?:{(api:any):void}):void;
}

declare module "pinmap" {
    function dummy():void;
    export = dummy;
}
