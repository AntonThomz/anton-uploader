const _0x387a0d=_0x3445;(function(_0x14714c,_0x1d1d16){const _0x120a9d=_0x3445,_0x50d200=_0x14714c();while(!![]){try{const _0x32f0ff=parseInt(_0x120a9d(0x1ec))/0x1*(parseInt(_0x120a9d(0x201))/0x2)+parseInt(_0x120a9d(0x206))/0x3*(-parseInt(_0x120a9d(0x1f0))/0x4)+-parseInt(_0x120a9d(0x1f9))/0x5+parseInt(_0x120a9d(0x1f1))/0x6+parseInt(_0x120a9d(0x1f2))/0x7+parseInt(_0x120a9d(0x1ef))/0x8*(parseInt(_0x120a9d(0x1e7))/0x9)+parseInt(_0x120a9d(0x1ff))/0xa*(-parseInt(_0x120a9d(0x1ee))/0xb);if(_0x32f0ff===_0x1d1d16)break;else _0x50d200['push'](_0x50d200['shift']());}catch(_0xc84862){_0x50d200['push'](_0x50d200['shift']());}}}(_0x5d17,0x78616));function _0x5d17(){const _0x21d3dc=['append','getHeaders','data','379bSducj','base64','66GvzdDL','845160zYTswW','4ZNkcxM','5422842tjzMNa','2288706rMbFqq','catch','createReadStream','https://uguu.se/upload.php','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.212\x20Safari/537.36','exports','POST','23480zyHasZ','form-data','link','axios','toString','readFileSync','2040310ZSmssZ','files[]','2634qIvxsg','response','message','then','Upload\x20successful:','1608519wVGeFh','Client-ID\x20aedd064ce68c6ee','45uWnmgh','post'];_0x5d17=function(){return _0x21d3dc;};return _0x5d17();}const axios=require(_0x387a0d(0x1fc)),fs=require('fs'),FormData=require(_0x387a0d(0x1fa));async function antonuploader1(_0x2b5ead){const _0x28ef79=_0x387a0d;try{const _0x4d95d9=fs[_0x28ef79(0x1fe)](_0x2b5ead),_0x5a6915=await axios[_0x28ef79(0x1e8)]('https://api.imgur.com/3/upload',{'image':_0x4d95d9[_0x28ef79(0x1fd)](_0x28ef79(0x1ed)),'type':'base64'},{'headers':{'Authorization':_0x28ef79(0x207)}});return console['log'](_0x28ef79(0x205),_0x5a6915[_0x28ef79(0x1eb)]),_0x5a6915[_0x28ef79(0x1eb)][_0x28ef79(0x1eb)][_0x28ef79(0x1fb)];}catch(_0x2be1cf){console['error']('Upload\x20failed:',_0x2be1cf[_0x28ef79(0x202)]?_0x2be1cf['response']['data']:_0x2be1cf[_0x28ef79(0x203)]);}}async function antonuploader2(_0x92577){return new Promise(async(_0x4e9ab3,_0x219b87)=>{const _0x49ecce=_0x3445,_0x3f819f=new FormData();_0x3f819f[_0x49ecce(0x1e9)](_0x49ecce(0x200),fs[_0x49ecce(0x1f4)](_0x92577)),await axios({'url':_0x49ecce(0x1f5),'method':_0x49ecce(0x1f8),'headers':{'User-Agent':_0x49ecce(0x1f6),..._0x3f819f[_0x49ecce(0x1ea)]()},'data':_0x3f819f})[_0x49ecce(0x204)](_0x1e0393=>{const _0x5fac8=_0x49ecce;_0x4e9ab3(_0x1e0393[_0x5fac8(0x1eb)]['files'][0x0]);})[_0x49ecce(0x1f3)](_0x4f93c4=>_0x219b87(_0x4f93c4));});}function _0x3445(_0x1d806e,_0x6c6caa){const _0x5d1784=_0x5d17();return _0x3445=function(_0x3445b4,_0x5df81e){_0x3445b4=_0x3445b4-0x1e7;let _0x3b5943=_0x5d1784[_0x3445b4];return _0x3b5943;},_0x3445(_0x1d806e,_0x6c6caa);}module[_0x387a0d(0x1f7)]={'antonuploader1':antonuploader1,'antonuploader2':antonuploader2};