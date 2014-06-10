/// <reference path="../jquery/jquery.d.ts"/>

// Extend jquery with .slide()
interface JQuery {
    slide(options?:any):void;
}

// Declare an external module, to import slide using AMD.
// NB. You still need to setup require.js to find the bower module.
declare module slide {
    export function dummy():void;
}

declare module "slide" {
    export = slide;
}
