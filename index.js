"use strict";
const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");

const EXAMPLEDIR = path.join(__dirname, "/Example");
const EXAMPLEFILES = ['item-runes.json', 'item-gems.json', 'item-modifiers.json', 'item-nameaffixes.json', 'item-names.json'];

const all_hp_potions = [process.env.H1, process.env.H2, process.env.H3, process.env.H4, process.env.H5];
const all_mana_potions = [process.env.M1, process.env.M2, process.env.M3, process.env.M4, process.env.M5];
const all_rej_potions = [process.env.R, process.env.FR];
const all_ammo = [process.env.AM1, process.env.AM2];
const all_status_potions = [process.env.SP, process.env.AP, process.env.THP];
const all_throwables = [process.env.SGP, process.env.FP, process.env.CGP, process.env.XP, process.env.RGP, process.env.OP];
const all_scrolls = [process.env.TTP, process.env.STT, process.env.TI, process.env.SI];

var slot1;

function json_parse_test() {
    // Function to parse examples files
    var temp = fs.readFileSync(path.join(EXAMPLEDIR, EXAMPLEFILES[0]));
    var small_test = JSON.parse(temp.toString().trim());
    console.log(small_test);
}

function load_and_parse(dir, filename) {
    var temp = fs.readFileSync(path.join(dir, filename));
    slot1 = JSON.parse(temp.toString().trim());
    // console.log(slot1.length + ' Length');
}

function reference_from_id(id) {
    var temp = slot1.findIndex((e) => e.id.toString() === id);
    console.log(temp + ' ' + slot1[temp].enUS);
    // console.log(slot1[temp]);
}

function cross_reference(array) {
    var i = 0;
    while (i < array.length) {
        reference_from_id(array[i]);
        i += 1;
    }
}

load_and_parse(EXAMPLEDIR, EXAMPLEFILES[4]); // Loading Name file from examples

cross_reference(all_rej_potions);
cross_reference(all_hp_potions);
cross_reference(all_mana_potions);
cross_reference(all_ammo);
cross_reference(all_status_potions);
cross_reference(all_throwables);
cross_reference(all_scrolls);