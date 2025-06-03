import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function GetShares() {
  const params = useLocalSearchParams();
  
  console.log('Params:', params);
  

  let shares = new Map(); // Map<string, [number, number]>
  let shares_collective = new Map(); // Map<Array<string>, [number, number]>
  let personCount = new Map(); // Map<string, number>
  let sharesActual = new Map(); // Map<string, number>
  let sharesActual_collective = new Map(); // Map<Array<string>, number>
  let person = []; // Array<string>
  let notasaba = ["baap", "dada", "shohar", "akhyafibhai", "akhyafibehen", "allatibehen", "poti", "dadi", "nani", "haqeeqibehen", "maa", "beti", "biwi"];
  let asaba = ["beta", "pota", "padpota", "baap", "dada", "paddada", "haqeeqibhai", "allatibhai", "haqeeqibhateeja", "allatibhateeja", "chacha"];
  let Lcm, remaining, sec_Lcm, Lcm_leftOver; 


  

  function gcd(a, b) {
    // O(log(min(a, b)))
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    // O(log(min(a, b)))
    return (a * b) / gcd(a, b);
}

function lcmMany(arr) {
    // O(n * log(max(arr)))
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans = lcm(ans, arr[i]);
    }
    return ans;
}

// JavaScript equivalent of the C++ functions

function Exists(s) {
    // Check if the string exists in the 'person' array
    return person.includes(s);
}

function BaapShares() {
    // Case 1
    if (Exists("beta") || Exists("pota") || Exists("padpota")) {
        shares.set("baap", [1, 6]);
        if (Exists("beta")) shares.set("beta", [-1, -1]);
        if (Exists("pota")) shares.set("pota", [-1, -1]);
        if (Exists("padpota")) shares.set("padpota", [-1, -1]);
    }
    // Case 2
    else if (Exists("beti") || Exists("poti") || Exists("padpoti")) {
        shares.set("baap", [1, 6]);
    } 
    // Default case
    else {
        shares.set("baap", [-1, -1]);
    }
}

// JavaScript equivalent of the C++ functions

function DadaShares() {
    // If "baap" exists, get "baap" shares
    if (Exists("baap")) {
        shares.set("dada", [0, 0]);
        BaapShares();
        return;
    }

    // Case 1
    if (Exists("beta") || Exists("pota") || Exists("padpota")) {
        shares.set("dada", [1, 6]);
        if (Exists("beta")) shares.set("beta", [-1, -1]);
        if (Exists("pota")) shares.set("pota", [-1, -1]);
        if (Exists("padpota")) shares.set("padpota", [-1, -1]);
    }
    // Case 2
    else if (Exists("beti") || Exists("poti") || Exists("padpoti")) {
        shares.set("dada", [1, 6]);
    }
    // Default case
    else {
        shares.set("dada", [-1, -1]);
    }
}

function ShoharShares() {
    // Case 1
    if (
        Exists("beta") ||
        Exists("pota") ||
        Exists("padpota") ||
        Exists("beti") ||
        Exists("poti") ||
        Exists("padpoti")
    ) {
        shares.set("shohar", [1, 4]);
    }
    // Default case
    else {
        shares.set("shohar", [1, 2]);
    }
}

// JavaScript equivalent of the C++ functions

function AkhyafiBhaiBehenShares() {
    // Case 1
    if (Exists("baap") || Exists("dada") || Exists("beta") || Exists("pota") || Exists("poti") || Exists("beti")) {
        if (Exists("akhyafibhai")) shares.set("akhyafibhai", [0, 0]);
        if (Exists("akhyafibehen")) shares.set("akhyafibehen", [0, 0]);
    }
    // Case 2
    else if (personCount.has("akhyafibhai") && personCount.get("akhyafibhai") === 1 && !personCount.has("akhyafibehen")) {
        shares.set("akhyafibhai", [1, 6]);
    } else if (personCount.has("akhyafibehen") && personCount.get("akhyafibehen") === 1 && !personCount.has("akhyafibhai")) {
        shares.set("akhyafibehen", [1, 6]);
    }
    // Case 3
    else {
        let temp = [];
        if (Exists("akhyafibhai")) temp.push("akhyafibhai");
        if (Exists("akhyafibehen")) temp.push("akhyafibehen");
        shares_collective.set(JSON.stringify(temp), [1, 3]);
    }
}

function BiwiShares() {
    // Case 1
    if (Exists("beta") || Exists("pota") || Exists("padpota") || Exists("beti") || Exists("poti") || Exists("padpoti")) {
        shares.set("biwi", [1, 8]);
    } else {
        shares.set("biwi", [1, 4]);
    }
}

function BetiShares() {

    // Case 1
    if (personCount.has("beti") && personCount.get("beti") === 1 && !personCount.has("beta")) {
        shares.set("beti", [1, 2]);
    }
    // Case 2
    else if (personCount.has("beti") && personCount.get("beti") > 1 && !personCount.has("beta")) {
        shares.set("beti", [2, 3]);
    }
    // Default case
    else {
        let temp = [];
        if (Exists("beti")) temp.push("beti");
        if (Exists("beta")) temp.push("beta");
        shares_collective.set(JSON.stringify(temp), [-1, -1]);
    }
}

function MaaShares() {
    // Case 1
    if (
        Exists("beta") ||
        Exists("pota") ||
        Exists("padpota") ||
        Exists("beti") ||
        Exists("poti") ||
        Exists("padpoti") ||
        ((personCount.has("haqeeqibhai") ? personCount.get("haqeeqibhai") : 0) +
            (personCount.has("allatibhai") ? personCount.get("allatibhai") : 0) +
            (personCount.has("akhyafibhai") ? personCount.get("akhyafibhai") : 0) +
            (personCount.has("haqeeqibehen") ? personCount.get("haqeeqibehen") : 0) +
            (personCount.has("allatibehen") ? personCount.get("allatibehen") : 0) +
            (personCount.has("akhyafibehen") ? personCount.get("akhyafibehen") : 0)) >= 2
    ) {
        shares.set("maa", [1, 6]);
    }
    // Case 2
    else if ((Exists("shohar") || Exists("biwi")) && Exists("baap")) {
        shares.set("maa", [1, 3]);
    } else {
        shares.set("maa", [1, 3]);
    }
}

function NaniDadiShares() {
    if (Exists("maa")) {
        if (Exists("nani")) shares.set("nani", [0, 0]);
        if (Exists("dadi")) shares.set("dadi", [0, 0]);
    } else if (Exists("baap")) {
        if (Exists("nani")) shares.set("nani", [1, 6]);
        if (Exists("dadi")) shares.set("dadi", [0, 0]);
    } else {
        let temp = [];
        if (Exists("nani")) temp.push("nani");
        if (Exists("dadi")) temp.push("dadi");
        shares_collective.set(JSON.stringify(temp), [1, 6]);
    }
}

function haqeeqiBehenShares() {
    // Case 1
    if (Exists("baap") || Exists("dada") || Exists("beta") || Exists("pota")) {
        shares.set("haqeeqibehen", [0, 0]);
    }
    // Case 2
    else if (Exists("haqeeqibhai")) {
        let temp = [];
        if (Exists("haqeeqibehen")) temp.push("haqeeqibehen");
        if (Exists("haqeeqibhai")) temp.push("haqeeqibhai");
        shares_collective.set(JSON.stringify(temp), [-1, -1]);
    }
    // Case 3
    else if (Exists("beti") || Exists("poti")) {
        shares.set("haqeeqibehen", [-1, -1]);
    } else {
        if (personCount.has("haqeeqibehen") && personCount.get("haqeeqibehen") === 1) {
            shares.set("haqeeqibehen", [1, 2]);
        } else {
            shares.set("haqeeqibehen", [2, 3]);
        }
    }
}

function PotiShares() {
    if (Exists("beta")) {
        shares.set("poti", [0, 0]);
    } else if (Exists("pota")) {
        let temp = [];
        if (Exists("poti")) temp.push("poti");
        if (Exists("pota")) temp.push("pota");
        shares_collective.set(JSON.stringify(temp), [-1, -1]);
    } else if (personCount.has("beti") && personCount.get("beti") >= 2) {
        shares.set("poti", [0, 0]);
    } else if (personCount.has("beti") && personCount.get("beti") === 1) {
        shares.set("poti", [1, 6]);
    } else {
        if (personCount.has("poti") && personCount.get("poti") === 1) {
            shares.set("poti", [1, 2]);
        } else {
            shares.set("poti", [2, 3]);
        }
    }
}

function AllatiBehenShares() {
    if (Exists("baap") || Exists("dada") || Exists("beta") || Exists("pota") || Exists("haqeeqibhai")) {
        shares.set("allatibehen", [0, 0]);
    } else if (
        Exists("haqeeqibehen") &&
        (Exists("beti") || Exists("poti")) && shares.has("haqeeqibehen") &&
        shares.get("haqeeqibehen")[0] === -1 &&
        shares.get("haqeeqibehen")[1] === -1
    ) {
        shares.set("allatibehen", [0, 0]);
    } else if (Exists("allatibhai")) {
        let temp = [];
        if (Exists("allatibehen")) temp.push("allatibehen");
        if (Exists("allatibhai")) temp.push("allatibhai");
        shares_collective.set(JSON.stringify(temp), [-1, -1]);
    } else if (Exists("beti") || Exists("poti")) {
        shares.set("allatibehen", [-1, -1]);
    } else if (personCount.has("haqeeqibehen") && personCount.get("haqeeqibehen") >= 2) {
        shares.set("allatibehen", [0, 0]);
    } else if (personCount.has("haqeeqibehen") && personCount.get("haqeeqibehen") === 1) {
        shares.set("allatibehen", [1, 6]);
    } else if (personCount.has("allatibehen") && personCount.get("allatibehen") === 1) {
        shares.set("allatibehen", [1, 2]);
    } else {
        shares.set("allatibehen", [2, 3]);
    }
}

function solve() {
    // Process each person
    for (let i = 0; i < person.length; i++) {
        const s = person[i];
        if (s === "baap") BaapShares();
        else if (s === "dada") DadaShares();
        else if (s === "shohar") ShoharShares();
        else if (s === "akhyafibhai" || s === "akhyafibehen") AkhyafiBhaiBehenShares();
        else if (s === "biwi") BiwiShares();
        else if (s === "beti") BetiShares();
        else if (s === "maa") MaaShares();
        else if (s === "nani" || s === "dadi") NaniDadiShares();
        else if (s === "haqeeqibehen") haqeeqiBehenShares();
        else if (s === "poti") PotiShares();
    }

    if (Exists("allatibehen")) {
        AllatiBehenShares();
    }

    // Calculate LCM of shares
    const arr = [];
    for (const [key, p] of shares.entries()) {
        if (p[0] === -1 && p[1] === -1) continue; // Skip if not applicable
        if (p[0] === 0 && p[1] === 0) continue; // Skip if no shares
        arr.push(p[1]);
    }
    for (const [key, p] of shares_collective.entries()) {
        if (p[0] === -1 && p[1] === -1) continue; // Skip if not applicable
        if (p[0] === 0 && p[1] === 0) continue; // Skip if no shares
        arr.push(p[1]);
    }


    let lcm_value = arr.length > 0 ? lcmMany(arr) : 1;
    remaining = lcm_value;


    // Calculate actual shares
    for (const [key, p] of shares.entries()) {
        if (p[0] === -1 && p[1] === -1) continue; // Skip if not applicable
        if (p[0] === 0 && p[1] === 0) {
            sharesActual.set(key, 0); // Skip if no shares
        } else {
            sharesActual.set(key, (p[0] * lcm_value) / p[1]);
            remaining -= sharesActual.get(key);
        }
    }

    if (
        (Exists("shohar") || Exists("biwi")) &&
        Exists("baap") &&
        Exists("maa") &&
        !(
            Exists("beta") ||
            Exists("pota") ||
            Exists("padpota") ||
            Exists("beti") ||
            Exists("poti") ||
            Exists("padpoti") ||
            ((personCount.has("haqeeqibhai") ? personCount.get("haqeeqibhai") : 0) +
            (personCount.has("allatibhai") ? personCount.get("allatibhai") : 0) +
            (personCount.has("akhyafibhai") ? personCount.get("akhyafibhai") : 0) +
            (personCount.has("haqeeqibehen") ? personCount.get("haqeeqibehen") : 0) +
            (personCount.has("allatibehen") ? personCount.get("allatibehen") : 0) +
            (personCount.has("akhyafibehen") ? personCount.get("akhyafibehen") : 0)) >= 2
        )
    ) {
        if (Exists("shohar")) {
            const val = sharesActual.get("shohar") / 3;
            sharesActual.set("maa", sharesActual.get("maa") - val);
            remaining += val;
        } else {
            const val = sharesActual.get("biwi") / 3;
            sharesActual.set("maa", sharesActual.get("maa") - val);
            remaining += val;
        }
    }

    for (const [key, p] of shares_collective.entries()) {
        if (p[0] === -1 && p[1] === -1) continue; // Skip if not applicable
        if (p[0] === 0 && p[1] === 0) {
            sharesActual_collective.set(key, 0); // Skip if no shares
        } else {
            sharesActual_collective.set(key, (p[0] * lcm_value) / p[1]);
            remaining -= sharesActual_collective.get(key);
        }
    }

    // Determine asaba present
    const asaba_present = [];
    for (const it of person) {
        if (!notasaba.includes(it)) {
            asaba_present.push(it);
        }
    }
    for (const [key, p] of shares.entries()) {
        if (p[0] === -1 && p[1] === -1 && !asaba_present.includes(key)) {
            asaba_present.push(key);
        }
    }

    if (
        Exists("baap") &&
        !Exists("beta") &&
        !Exists("pota") &&
        !Exists("padpota") &&
        (Exists("beti") || Exists("poti") || Exists("padpoti"))
    ) {
        asaba_present.push("baap");
    }
    if (
        Exists("dada") &&
        !Exists("baap") &&
        !Exists("beta") &&
        !Exists("pota") &&
        !Exists("padpota") &&
        (Exists("beti") || Exists("poti") || Exists("padpoti"))
    ) {
        asaba_present.push("dada");
    }

    let main_asaba = "";
    for (const it of asaba) {
        if (asaba_present.includes(it)) {
            main_asaba = it;
            break;
        }
    }

    if (remaining < 0) {
        const sum = lcm_value - remaining;
        lcm_value = sum;
        remaining = 0;
    }

    if (shares_collective.has(JSON.stringify(["beti", "beta"]))) {
        sharesActual_collective.set(JSON.stringify(["beti", "beta"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("beta"), 1);
    } else if (shares_collective.has(JSON.stringify(["poti", "pota"]))) {
        sharesActual_collective.set(JSON.stringify(["poti", "pota"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("pota"), 1);
    } else if (shares_collective.has(JSON.stringify(["haqeeqibehen", "haqeeqibhai"]))) {
        sharesActual_collective.set(JSON.stringify(["haqeeqibehen", "haqeeqibhai"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("haqeeqibhai"), 1);
    } else if (shares_collective.has(JSON.stringify(["allatibehen", "allatibhai"]))) {
        sharesActual_collective.set(JSON.stringify(["allatibehen", "allatibhai"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("allatibhai"), 1);
    } else if (shares.has("haqeeqibehen")) {
        if (shares.get("haqeeqibehen")[0] === -1 && shares.get("haqeeqibehen")[1] === -1) {
            asaba_present.push("haqeeqibehen");
            main_asaba = "haqeeqibehen";
        }
    } else if (shares.has("allatibehen")) {
        if (shares.get("allatibehen")[0] === -1 && shares.get("allatibehen")[1] === -1) {
            asaba_present.push("allatibehen");
            main_asaba = "allatibehen";
        }
    }

    for (const it of asaba_present) {
        if (it === main_asaba) {
            if (
                it === "baap" &&
                !Exists("beta") &&
                !Exists("pota") &&
                !Exists("padpota") &&
                (Exists("beti") || Exists("poti") || Exists("padpoti"))
            ) {
                sharesActual.set(it, sharesActual.get(it) + remaining);
                continue;
            }
            if (
                it === "dada" &&
                !Exists("baap") &&
                !Exists("beta") &&
                !Exists("pota") &&
                !Exists("padpota") &&
                (Exists("beti") || Exists("poti") || Exists("padpoti"))
            ) {
                sharesActual.set(it, sharesActual.get(it) + remaining);
                continue;
            }

            sharesActual.set(it, remaining); // Assign remaining shares to main asaba
            continue;
        }
        sharesActual.set(it, 0); // Set shares of other asaba to 0
    }

    Lcm = lcm_value;
}

function isRaddNeeded() {
    let isRadd = false;
    let totalShares = 0;

    for (const [key, value] of sharesActual.entries()) {
        totalShares += value;
    }
    for (const [key, value] of sharesActual_collective.entries()) {
        totalShares += value;
    }

    if (totalShares < Lcm) {
        isRadd = true;
    }

    return isRadd;
}

function isTasheehNeeded() {
    let isTasheeh = false;

    // Check individual shares
    for (const [key, value] of sharesActual.entries()) {
        
        const numerator = personCount.get(key);
        const denominator = value;
        if (denominator === 0) continue; // Skip if no shares
        if (denominator % numerator !== 0) {
            isTasheeh = true;
            break;
        }
    }

    // Check collective shares
    for (const [key, value] of sharesActual_collective.entries()) {

        
        let parsedKey = JSON.parse(key);
        let sum = 0;
        for (const j of parsedKey) {
            
            if ((key) === JSON.stringify(["beti", "beta"])) {
                sum += j === "beta" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["haqeeqibehen", "haqeeqibhai"])) {
                sum += j === "haqeeqibhai" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["poti", "pota"])) {
                sum += j === "pota" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["allatibehen", "allatibhai"])) {
                sum += j === "allatibhai" ? 2 * personCount.get(j) : personCount.get(j);
            } else {
                sum += personCount.get(j);
            }
        }
        const val = value;

        if (val === 0) continue; // Skip if no shares
        if (val % sum !== 0) {
            isTasheeh = true;
            break;
        }
    }

    return isTasheeh;
}

function Tasheeh() {
    const arr = [];
    

    // Process individual shares
    for (const [key, value] of sharesActual.entries()) {
        let numerator = personCount.get(key);
        let denominator = value;
        if (denominator === 0) continue; // Skip if no shares
        const g = gcd(numerator, denominator);
        numerator /= g;
        denominator /= g;
        arr.push(numerator);
    }

    // Process collective shares
    for (const [key, value] of sharesActual_collective.entries()) {
        
        let parsedKey = JSON.parse(key);
        let numerator = 0;
        for (const j of parsedKey) {

            if ((key) === JSON.stringify(["beti", "beta"])) {
                numerator += j === "beta" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["haqeeqibehen", "haqeeqibhai"])) {
                numerator += j === "haqeeqibhai" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["poti", "pota"])) {
                numerator += j === "pota" ? 2 * personCount.get(j) : personCount.get(j);
            } else if ((key) === JSON.stringify(["allatibehen", "allatibhai"])) {
                numerator += j === "allatibhai" ? 2 * personCount.get(j) : personCount.get(j);
            } else {
                numerator += personCount.get(j);
            }
        }
        let denominator = value;
        if (denominator === 0) continue; // Skip if no shares
        const g = gcd(numerator, denominator);
        numerator /= g;
        denominator /= g;
        arr.push(numerator);
    }

    let lcmValue = lcmMany(arr);
    Lcm *= lcmValue;

    // Update individual shares
    for (const [key, value] of sharesActual.entries()) {
        sharesActual.set(key, value * lcmValue);
    }

    // Update collective shares
    for (const [key, value] of sharesActual_collective.entries()) {
        sharesActual_collective.set(key, value * lcmValue);
    }
}

function getSingleShares() {
    for (const [key, value] of sharesActual.entries()) {
        const numerator = personCount.get(key);
        const denominator = value;
        console.log(`${key}: ${denominator / numerator} shares`);
    }
}

function getCollectiveShares() {
    for (const [key, value] of sharesActual_collective.entries()) {
        
        if ((key) === JSON.stringify(["akhyafibhai", "akhyafibehen"])) {
            const sum = personCount.get("akhyafibhai") + personCount.get("akhyafibehen");
            console.log(`akhyafibhai: ${value / sum} shares`);
            console.log(`akhyafibehen: ${value / sum} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["akhyafibhai"])) {
            console.log(`akhyafibhai: ${value / personCount.get("akhyafibhai")} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["akhyafibehen"])) {
            console.log(`akhyafibehen: ${value / personCount.get("akhyafibehen")} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["beti", "beta"])) {
            const sum = personCount.get("beti") + 2 * personCount.get("beta");
            const numBeta = 2 * value;
            const numBeti = value;
            console.log(`beti: ${numBeti / sum} shares`);
            console.log(`beta: ${numBeta / sum} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["nani", "dadi"])) {
            const sum = personCount.get("nani") + personCount.get("dadi");
            console.log(`nani: ${value / sum} shares`);
            console.log(`dadi: ${value / sum} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["nani"])) {
            console.log(`nani: ${value / personCount.get("nani")} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["dadi"])) {
            console.log(`dadi: ${value / personCount.get("dadi")} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["haqeeqibehen", "haqeeqibhai"])) {
            const sum = personCount.get("haqeeqibehen") + 2 * personCount.get("haqeeqibhai");
            const numBhai = 2 * value;
            const numBehen = value;
            console.log(`haqeeqibehen: ${numBehen / sum} shares`);
            console.log(`haqeeqibhai: ${numBhai / sum} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["allatibehen", "allatibhai"])) {
            const sum = personCount.get("allatibehen") + 2 * personCount.get("allatibhai");
            const numBhai = 2 * value;
            const numBehen = value;
            console.log(`allatibehen: ${numBehen / sum} shares`);
            console.log(`allatibhai: ${numBhai / sum} shares`);
            continue;
        }
        if ((key) === JSON.stringify(["poti", "pota"])) {
            const sum = personCount.get("poti") + 2 * personCount.get("pota");
            const numPota = 2 * value;
            const numPoti = value;
            console.log(`poti: ${numPoti / sum} shares`);
            console.log(`pota: ${numPota / sum} shares`);
            continue;
        }
    }
}

function printShares() {
    console.log("Shares distribution:");
    for (const [key, value] of sharesActual.entries()) {
        console.log(`${key}: ${value}`);
    }
    for (const [key, value] of sharesActual_collective.entries()) {
        const parsedKey = JSON.parse(key); // Convert stringified key back to an array
        console.log(`${parsedKey.join(" ")}: ${value}`);
    }
}

function isOneZawilFurooz() {
    person.sort(); // Sort the person array

    const v1 = ["dadi", "nani"];
    const v2 = ["akhyafibehen", "akhyafibhai"];
    const v3 = ["dadi"];
    const v4 = ["nani"];
    const v5 = ["akhyafibehen"];
    const v6 = ["akhyafibhai"];

    if (
        JSON.stringify(person) === JSON.stringify(v1) ||
        JSON.stringify(person) === JSON.stringify(v2) ||
        JSON.stringify(person) === JSON.stringify(v3) ||
        JSON.stringify(person) === JSON.stringify(v4) ||
        JSON.stringify(person) === JSON.stringify(v5) ||
        JSON.stringify(person) === JSON.stringify(v6)
    ) {
        return true;
    } else {
        let count = 0;
        for (const [key, value] of sharesActual.entries()) {
            if (key !== "biwi" && key !== "shohar" && value !== 0) {
                count++;
            }
        }
        for (const [key, value] of sharesActual_collective.entries()) {
            if (value !== 0) {
                count++;
            }
        }
        return count === 1;
    }
}

function Radd() {
    
    if (!Exists("shohar") && !Exists("biwi")) {
        if (isOneZawilFurooz()) {
            person.sort();
            const v1 = ["dadi", "nani"];
            const v2 = ["akhyafibehen", "akhyafibhai"];
            const v3 = ["dadi"];
            const v4 = ["nani"];
            const v5 = ["akhyafibehen"];
            const v6 = ["akhyafibhai"];

            if (JSON.stringify(person) === JSON.stringify(v1)) {
                sharesActual_collective.set(JSON.stringify(["nani", "dadi"]), personCount.get("dadi") + personCount.get("nani"));
                Lcm = personCount.get("dadi") + personCount.get("nani");
            } else if (JSON.stringify(person) === JSON.stringify(v2)) {
                sharesActual_collective.set(JSON.stringify(["akhyafibhai", "akhyafibehen"]), personCount.get("akhyafibehen") + personCount.get("akhyafibhai"));
                Lcm = personCount.get("akhyafibehen") + personCount.get("akhyafibhai");
            } else if (JSON.stringify(person) === JSON.stringify(v3)) {
                sharesActual_collective.set(JSON.stringify(["dadi"]), personCount.get("dadi"));
                Lcm = personCount.get("dadi");
            } else if (JSON.stringify(person) === JSON.stringify(v4)) {
                sharesActual_collective.set(JSON.stringify(["nani"]), personCount.get("nani"));
                Lcm = personCount.get("nani");
            } else if (JSON.stringify(person) === JSON.stringify(v5)) {
                if (personCount.has("akhyafibehen") && personCount.get("akhyafibehen") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibehen"]), personCount.get("akhyafibehen"));
                } else {
                    sharesActual.set("akhyafibehen", personCount.get("akhyafibehen"));
                }
                Lcm = personCount.get("akhyafibehen");
            } else if (JSON.stringify(person) === JSON.stringify(v6)) {
                if (personCount.has("akhyafibhai") && personCount.get("akhyafibhai") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibhai"]), personCount.get("akhyafibhai"));
                } else {
                    sharesActual.set("akhyafibhai", personCount.get("akhyafibhai"));
                }
                Lcm = personCount.get("akhyafibhai");
            } else {
                for (const [key, value] of sharesActual.entries()) {
                    if (value !== 0) {
                        sharesActual.set(key, personCount.get(key));
                        Lcm = personCount.get(key);
                        return;
                    }
                }
                for (const [key, value] of sharesActual_collective.entries()) {
                    if (value !== 0) {
                        let parsedKey = JSON.parse(key);
                        let sum = 0;
                        for (const j of parsedKey) {
                            sum += personCount.get(j);
                        }
                        Lcm = sum;
                        sharesActual_collective.set(key, sum);
                        return;
                    }
                }
            }
        } else {
            Lcm -= remaining;
        }
    } else if (Exists("shohar")) {
        person.splice(person.indexOf("shohar"), 1);
        person.sort();
        if (isOneZawilFurooz()) {
            const v1 = ["dadi", "nani"];
            const v2 = ["akhyafibehen", "akhyafibhai"];
            const v3 = ["dadi"];
            const v4 = ["nani"];
            const v5 = ["akhyafibehen"];
            const v6 = ["akhyafibhai"];

            const p = shares.get("shohar");
            Lcm = p[1];
            sharesActual.set("shohar", 1);

            if (JSON.stringify(person) === JSON.stringify(v1)) {
                sharesActual_collective.set(JSON.stringify(["nani", "dadi"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v2)) {
                sharesActual_collective.set(JSON.stringify(["akhyafibhai", "akhyafibehen"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v3)) {
                sharesActual_collective.set(JSON.stringify(["dadi"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v4)) {
                sharesActual_collective.set(JSON.stringify(["nani"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v5)) {
                if (personCount.has("akhyafibehen") && personCount.get("akhyafibehen") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibehen"]), Lcm - 1);
                } else {
                    sharesActual.set("akhyafibehen", Lcm - 1);
                }
            } else if (JSON.stringify(person) === JSON.stringify(v6)) {
                if (personCount.has("akhyafibhai") && personCount.get("akhyafibhai") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibhai"]), Lcm - 1);
                } else {
                    sharesActual.set("akhyafibhai", Lcm - 1);
                }
            } else {
                for (const [key, value] of sharesActual.entries()) {
                    if (value !== 0 && key !== "shohar") {
                        sharesActual.set("shohar", 1);
                        sharesActual.set(key, Lcm - 1);
                        return;
                    }
                }
                for (const [key, value] of sharesActual_collective.entries()) {
                    if (value !== 0) {
                        sharesActual.set("shohar", 1);
                        sharesActual_collective.set(key, Lcm - 1);
                        return;
                    }
                }
            }
        } else {
            const p = shares.get("shohar");
            const shoharCount = personCount.get("shohar");
            shares.clear();
            shares_collective.clear();
            sharesActual.clear();
            sharesActual_collective.clear();
            personCount.delete("shohar");
            solve();
            personCount.set("shohar", shoharCount);

            let sum = 0;
            for (const value of sharesActual.values()) {
                sum += value;
            }
            for (const value of sharesActual_collective.values()) {
                sum += value;
            }
            sec_Lcm = sum;
            Lcm = p[1];
            Lcm_leftOver = Lcm - 1;
            sharesActual.set("shohar", 1);

            if (Lcm_leftOver === sec_Lcm) return;

            sharesActual.set("shohar", sharesActual.get("shohar") * sec_Lcm);
            Lcm *= sec_Lcm;

            for (const [key, value] of sharesActual.entries()) {
                if (key !== "shohar") {
                    sharesActual.set(key, value * Lcm_leftOver);
                }
            }
            for (const [key, value] of sharesActual_collective.entries()) {
                sharesActual_collective.set(key, value * Lcm_leftOver);
            }
        }
    } else {
        person.splice(person.indexOf("biwi"), 1);
        person.sort();
        if (isOneZawilFurooz()) {
            
            const v1 = ["dadi", "nani"];
            const v2 = ["akhyafibehen", "akhyafibhai"];
            const v3 = ["dadi"];
            const v4 = ["nani"];
            const v5 = ["akhyafibehen"];
            const v6 = ["akhyafibhai"];

            const p = shares.get("biwi");
            Lcm = p[1];
            sharesActual.set("biwi", 1);

            if (JSON.stringify(person) === JSON.stringify(v1)) {
                sharesActual_collective.set(JSON.stringify(["nani", "dadi"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v2)) {
                sharesActual_collective.set(JSON.stringify(["akhyafibhai", "akhyafibehen"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v3)) {
                sharesActual_collective.set(JSON.stringify(["dadi"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v4)) {
                sharesActual_collective.set(JSON.stringify(["nani"]), Lcm - 1);
            } else if (JSON.stringify(person) === JSON.stringify(v5)) {
                if (personCount.has("akhyafibehen") && personCount.get("akhyafibehen") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibehen"]), Lcm - 1);
                } else {
                    sharesActual.set("akhyafibehen", Lcm - 1);
                }
            } else if (JSON.stringify(person) === JSON.stringify(v6)) {
                if (personCount.has("akhyafibhai") && personCount.get("akhyafibhai") > 1) {
                    sharesActual_collective.set(JSON.stringify(["akhyafibhai"]), Lcm - 1);
                } else {
                    sharesActual.set("akhyafibhai", Lcm - 1);
                }
            } else {
                
                for (const [key, value] of sharesActual.entries()) {
                    if (value !== 0 && key !== "biwi") {
                        sharesActual.set("biwi", 1);
                        sharesActual.set(key, Lcm - 1);
                        return;
                    }
                }
                for (const [key, value] of sharesActual_collective.entries()) {
                    if (value !== 0) {
                        sharesActual.set("biwi", 1);
                        sharesActual_collective.set(key, Lcm - 1);
                        return;
                    }
                }
                
            }
        } else {
            const p = shares.get("biwi");
            const biwiCount = personCount.get("biwi");
            shares.clear();
            shares_collective.clear();
            sharesActual.clear();
            sharesActual_collective.clear();
            personCount.delete("biwi");
            solve();
            personCount.set("biwi", biwiCount);

            let sum = 0;
            for (const value of sharesActual.values()) {
                sum += value;
            }
            for (const value of sharesActual_collective.values()) {
                sum += value;
            }
            sec_Lcm = sum;
            Lcm = p[1];
            Lcm_leftOver = Lcm - 1;
            sharesActual.set("biwi", 1);

            if (Lcm_leftOver === sec_Lcm) return;

            sharesActual.set("biwi", sharesActual.get("biwi") * sec_Lcm);
            Lcm *= sec_Lcm;

            for (const [key, value] of sharesActual.entries()) {
                if (key !== "biwi") {
                    sharesActual.set(key, value * Lcm_leftOver);
                }
            }
            for (const [key, value] of sharesActual_collective.entries()) {
                sharesActual_collective.set(key, value * Lcm_leftOver);
            }
        }
    }
}

function printFractions() {
  console.log("Shares distribution in fractions:");
  for (const [key, value] of shares.entries()) {
    let output = `${key}: `;
    if (value[0] === -1 && value[1] === -1) {
      output += "A";
    } else if (value[0] === 0 && value[1] === 0) {
      output += "M";
    } else {
      output += `${value[0]}/${value[1]}`;
    }
    console.log(output);
  }
  for (const [key, value] of shares_collective.entries()) {
    let parsedKey = JSON.parse(key);
    let output = `{ ${parsedKey.join(" ")} }: `;
    if (value[0] === -1 && value[1] === -1) {
      output += "A";
    } else if (value[0] === 0 && value[1] === 0) {
      output += "M";
    } else {
      output += `${value[0]}/${value[1]}`;
    }
    console.log(output);
  }
}

useEffect(() => {
    
    for (const [key, value] of Object.entries(params)) 
    {
      if(value !== "0" && key !== "totalAmount") 
      {
        person.push(key);
        personCount.set(key, Number(value));
      }
    }
    console.log('Person:', person);
    console.log('Person Count:', personCount);

    solve();

    printFractions();


    if(isRaddNeeded()) Radd();

    
    if(isTasheehNeeded()) Tasheeh();

    printShares();

    console.log("per person distribution:");

    getSingleShares();

    getCollectiveShares();

    console.log("lcm = ", Lcm);
    
  }, []);

  
  return (
    <SafeAreaView className='flex-1'>
      <LinearGradient 
              colors={['#0F172A', '#1E293B', '#334155']} 
              className="flex-1 justify-center items-center px-6"
            >
        <View>
          <Text>Get Shares Screen</Text>
          <Text>Total Amount: {params.totalAmount}</Text>
          <Text>Biwi: {params.biwi}</Text>
          <Text>Baap: {params.baap}</Text>
        </View>
      </LinearGradient>
      
        
    </SafeAreaView>
    
  );
}