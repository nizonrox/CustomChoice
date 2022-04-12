'use strict';
const fs = require('fs')
const path = require('path');
const EXAMPLEDIR = path.join(__dirname, '/Example');

var EXAMPLEFILES = ['item-runes.json', 'item-gems.json', 'item-modifiers.json', 'item-nameaffixes.json', 'item-names.json', 'item-runes.json']




var HP_Potions = ['2266', '2267', '2268', '2269', '2270'];
var MP_Potions = ['2271', '2272', '2273', '2274', '2275'];
var REJ_Potions = ['2209', '2210'];

var slot1 = [''];

function JSON_SMALL_TEST() {
    let rawdata = fs.readFileSync(path.join(EXAMPLEDIR, EXAMPLEFILES[0]));
    let small_test = JSON.parse(rawdata.toString().trim());
    
    console.log(small_test);
};

function Load_LootFile(dir, filename) {
    let rawdata = fs.readFileSync(path.join(dir, filename));
    slot1 = JSON.parse(rawdata.toString().trim());
    // console.log(slot1.length + ' Length');
};

function CorssRef(id) {
    let temp = slot1.findIndex(e => e.id == id);
    console.log(temp + ' ' + slot1[temp].enUS + ' +');
    // console.log(slot1[temp]);
};

function CrossArray(temp) {
    for (var i = 0; i < temp.length; i++) {
        CorssRef(temp[i]);
    }
};



Load_LootFile(EXAMPLEDIR, EXAMPLEFILES[4]); // Loading Name file from examples

CrossArray(HP_Potions);
CrossArray(MP_Potions);
