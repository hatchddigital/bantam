/// <reference path="../jquery/jquery.d.ts"/>

// Extend jquery with .slide()
interface JQuery {
    pinmap(options?:any, callback?:{(api:any):void}):void;
}

// Declare an external module, to import pinmap using AMD.
// NB. You still need to setup require.js to find the bower module.
declare module pinmap {
    export function dummy():void;
}

declare module "pinmap" {
    export = pinmap;
}
