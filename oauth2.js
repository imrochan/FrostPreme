// Copyright 2020, Nathan11#1777, All rights reserved. //
// ------ //
// CONFIG //
// ------ //
// Find this at chrome://extensions/
const chrome_extension_id = "ajaojccjmiclifooepnpdcfnfohlombf";
// ------ //
// Go to https://discord.com/developers/applications:
// 1. Go to "New Application" and name it whatever you want
// 2. Go to the OAuth2 tab and copy the "Cliend ID" into the variable below
// 3. Click "Add Redirect" and add https://<chrome extension id>.chromiumapp.org/ then save
// !!! MAKE SURE YOU REPLACE <CHROME EXTENSION ID> WITH YOUR CHROME EXTENSION ID !!!
// !!! EXAMPLE: https://ajaojccjmiclifooepnpdcfnfohlombf.chromiumapp.org/ !!!
const discord_app_id = "754717178481213480";
// ------ //
// Discord server ID that you want the script to check for
const guild_id = "704717015444619294";
// ------ //

// CODE //
var _0x9a01 = [
	"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x6F\x61\x75\x74\x68\x32\x2F\x61\x75\x74\x68\x6F\x72\x69\x7A\x65",
	"\x74\x6F\x6B\x65\x6E",
	"\x68\x74\x74\x70\x73\x3A\x2F\x2F",
	"\x2E\x63\x68\x72\x6F\x6D\x69\x75\x6D\x61\x70\x70\x2E\x6F\x72\x67\x2F",
	"\x6E\x61\x74\x68\x61\x6E\x31\x31\x23\x31\x37\x37\x37",
	"\x67\x75\x69\x6C\x64\x73",
	"\x73\x75\x62\x73\x74\x72\x69\x6E\x67",
	"\x72\x61\x6E\x64\x6F\x6D",
	"",
	"\x3F\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D",
	"\x26\x72\x65\x73\x70\x6F\x6E\x73\x65\x5F\x74\x79\x70\x65\x3D",
	"\x26\x72\x65\x64\x69\x72\x65\x63\x74\x5F\x75\x72\x69\x3D",
	"\x26\x73\x74\x61\x74\x65\x3D",
	"\x26\x73\x63\x6F\x70\x65\x3D",
	"\x26\x6E\x6F\x6E\x65\x3D",
	"\x6D\x65\x73\x73\x61\x67\x65",
	"\x6C\x6F\x67\x69\x6E",
	"\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E",
	"\x67\x65\x74",
	"\x42\x65\x61\x72\x65\x72",
	"\x6C\x61\x73\x74\x45\x72\x72\x6F\x72",
	"\x72\x75\x6E\x74\x69\x6D\x65",
	"\x61\x63\x63\x65\x73\x73\x5F\x64\x65\x6E\x69\x65\x64",
	"\x69\x6E\x63\x6C\x75\x64\x65\x73",
	"\x66\x61\x69\x6C",
	"\x65\x72\x72\x6F\x72",
	"\x63\x61\x74\x63\x68",
	"\x69\x64",
	"\x73\x75\x63\x63\x65\x73\x73",
	"\x66\x6F\x72\x45\x61\x63\x68",
	"\x64\x65\x6E\x69\x65\x64",
	"\x74\x68\x65\x6E",
	"\x6A\x73\x6F\x6E",
	"\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x75\x73\x65\x72\x73\x2F\x40\x6D\x65\x2F\x67\x75\x69\x6C\x64\x73",
	"\x20",
	"\x6C\x61\x75\x6E\x63\x68\x57\x65\x62\x41\x75\x74\x68\x46\x6C\x6F\x77",
	"\x69\x64\x65\x6E\x74\x69\x74\x79",
	"\x6C\x6F\x67\x6F\x75\x74",
	"\x61\x64\x64\x4C\x69\x73\x74\x65\x6E\x65\x72",
	"\x6F\x6E\x4D\x65\x73\x73\x61\x67\x65",
];
const DISCORD_URL = _0x9a01[0];
const CLIENT_ID = encodeURIComponent(discord_app_id);
const RESPONSE_TYPE = encodeURIComponent(_0x9a01[1]);
const REDIRECT_URI = `${_0x9a01[2]}${chrome_extension_id}${_0x9a01[3]}`;
const STATE = encodeURIComponent(_0x9a01[4]);
const SCOPE = encodeURIComponent(_0x9a01[5]);
let user_signed_in = false;
function get_discord_uri() {
	const _0xbf8fx9 = encodeURIComponent(
		Math[_0x9a01[7]]().toString(36)[_0x9a01[6]](2, 15) +
			Math[_0x9a01[7]]().toString(36)[_0x9a01[6]](2, 15)
	);
	const _0xbf8fxa = `${_0x9a01[8]}${DISCORD_URL}${_0x9a01[9]}${CLIENT_ID}${_0x9a01[10]}${RESPONSE_TYPE}${_0x9a01[11]}${REDIRECT_URI}${_0x9a01[12]}${STATE}${_0x9a01[13]}${SCOPE}${_0x9a01[14]}${_0xbf8fx9}${_0x9a01[8]}`;
	return _0xbf8fxa;
}
chrome[_0x9a01[21]][_0x9a01[39]][_0x9a01[38]](
	(_0xbf8fxb, _0xbf8fxc, _0xbf8fxd) => {
		if (_0xbf8fxb[_0x9a01[15]] === _0x9a01[16]) {
			chrome[_0x9a01[36]][_0x9a01[35]](
				{ url: get_discord_uri(), interactive: true },
				function (_0xbf8fxe) {
					const _0xbf8fxf = new URLSearchParams(_0xbf8fxe);
					const _0xbf8fx10 = _0xbf8fxf[_0x9a01[18]](_0x9a01[17]);
					const _0xbf8fx11 = _0x9a01[19];
					if (
						chrome[_0x9a01[21]][_0x9a01[20]] ||
						_0xbf8fxe[_0x9a01[23]](_0x9a01[22])
					) {
						_0xbf8fxd(_0x9a01[24]);
						return;
					} else {
						user_signed_in = true;
						fetch(_0x9a01[33], {
							headers: {
								authorization: `${_0x9a01[8]}${_0xbf8fx11}${_0x9a01[34]}${_0xbf8fx10}${_0x9a01[8]}`,
							},
						})
							[_0x9a01[31]]((_0xbf8fx14) => {
								return _0xbf8fx14[_0x9a01[32]]();
							})
							[_0x9a01[31]](async (_0xbf8fx12) => {
								_0xbf8fx12[_0x9a01[29]]((_0xbf8fx13) => {
									if (_0xbf8fx13[_0x9a01[27]] === guild_id) {
										return _0xbf8fxd(_0x9a01[28]);
									}
								});
								await _0xbf8fxd(_0x9a01[30]);
							})
							[_0x9a01[26]](console[_0x9a01[25]]);
					}
				}
			);
			return true;
		} else {
			if (_0xbf8fxb[_0x9a01[15]] === _0x9a01[37]) {
				user_signed_in = false;
				_0xbf8fxd(_0x9a01[28]);
				return false;
			}
		}
	}
);
