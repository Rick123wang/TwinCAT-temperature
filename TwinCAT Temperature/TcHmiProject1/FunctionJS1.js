// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../Packages/Beckhoff.TwinCAT.HMI.Framework.12.746.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject_CloseDom;
        (function (TcHmiProject_CloseDom) {
            function FunctionJS1(par1) {
                window.opener = null;
                //window.opener=top;   
                window.open("", "_self");
                window.close();   
            }
            TcHmiProject_CloseDom.FunctionJS1 = FunctionJS1;
        })(TcHmiProject_CloseDom = Functions.TcHmiProject_CloseDom || (Functions.TcHmiProject_CloseDom = {}));
        Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.TcHmiProject_CloseDom', TcHmiProject_CloseDom.FunctionJS1);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
