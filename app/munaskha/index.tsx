import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';


export default function munaskha() {

    const { t } = useTranslation();



let batanShares = new Map();
 let shares = new Map(); // Map<string, [number, number]>
  let shares_collective = new Map(); // Map<Array<string>, [number, number]>
  let personCount = new Map(); // Map<string, number>
  let sharesActual = new Map(); // Map<string, number>
  let sharesActual_collective = new Map(); // Map<Array<string>, number>
  let person = []; // Array<string>
  let notasaba = ["baap", "dada", "shohar", "akhyafibhai", "akhyafibehen", "allatibehen", "poti", "dadi", "nani", "haqeeqibehen", "maa", "beti", "biwi"];
  let asaba = ["beta", "pota", "padpota", "baap", "dada", "paddada", "haqeeqibhai", "allatibhai", "haqeeqibhateeja", "allatibhateeja", "chacha"];
  let Lcm, remaining, sec_Lcm, Lcm_leftOver;
  const people = ['baap',
                'dada',
                'akhyafibhai',
                'akhyafibehen',
                'allatibehen',
                'poti',
                'dadi',
                'nani',
                'haqeeqibehen',
                'maa',
                'beti',
                'biwi',
                'beta',
                'pota',
                'padpota',
                'haqeeqibhai',
                'allatibhai',
                'haqeeqibhateeja',
                'allatibhateeja',
                'chacha',
                'shohar',
                'other',];

  const [finalList, setFinalList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalLcm, setFinalLcm] = useState(0);
  const [firstLcm, setFirstLcm] = useState(0);
  const [Aul, setAul] = useState(0);
  const [RaddValue ,setRadd] = useState(0);
  const [TasheehValue, setTasheeh] = useState(0);
  const [loading, setLoading] = useState(true);
  const [num_batans, setNumBatans] = useState("");
  const [currentBatanIndex, setCurrentBatanIndex] = useState(-1);
  const [batan, setBatan] = useState([]);
  const [dead, setDead] = useState(new Map());
  const [batans, setBatans] = useState([]);
  const [topLcm, setTopLcm] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [prevLevel, setPrevLevel] = useState(0);
  const [level, setLevel] = useState("");
  const [index, setIndex] = useState("");
  const [askForDead, setAskForDead] = useState(false);
  const [showPrevBatans, setShowPrevBatans] = useState(false);
  const [lastBatan, setLastBatan] = useState(false);
  const [pressed, setPressed] = useState(false);

  

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

function solve(calledByRadd = false) {
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
    if(!calledByRadd) setFirstLcm(lcm_value);


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
        setAul(lcm_value);
    }

    if (shares_collective.has(JSON.stringify(["beti", "beta"]))) {
        sharesActual_collective.set(JSON.stringify(["beti", "beta"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("beta"), 1);
        if(shares.has("beta")) shares.delete("beta");
    } else if (shares_collective.has(JSON.stringify(["poti", "pota"]))) {
        sharesActual_collective.set(JSON.stringify(["poti", "pota"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("pota"), 1);
        if(shares.has("pota")) shares.delete("pota");
    } else if (shares_collective.has(JSON.stringify(["haqeeqibehen", "haqeeqibhai"]))) {
        sharesActual_collective.set(JSON.stringify(["haqeeqibehen", "haqeeqibhai"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("haqeeqibhai"), 1);
        if(shares.has("haqeeqibhai")) shares.delete("haqeeqibhai");
    } else if (shares_collective.has(JSON.stringify(["allatibehen", "allatibhai"]))) {
        sharesActual_collective.set(JSON.stringify(["allatibehen", "allatibhai"]), remaining);
        main_asaba = "";
        asaba_present.splice(asaba_present.indexOf("allatibhai"), 1);
        if(shares.has("allatibhai")) shares.delete("allatibhai");
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
        shares.set(it, [-1, -1]); // Initialize shares for asaba present
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
            solve(true);
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
            solve(true);
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

function getFractions() {
  
  for (const [key, value] of shares.entries()) {
    if (value[0] === -1 && value[1] === -1) {
      setFinalList(prevList => [...prevList, { name: key, Fraction: "Asaba"}]);
    } else if (value[0] === 0 && value[1] === 0) {
      setFinalList(prevList => [...prevList, { name: key, Fraction: "Mahroom" }]);
    } else {
        setFinalList(prevList => [...prevList, { name: key, Fraction: `${value[0]}/${value[1]}` }]);
    }
    
  }
  for (const [key, value] of shares_collective.entries()) {
    let parsedKey = JSON.parse(key);
    
    if (value[0] === -1 && value[1] === -1) {
        setFinalList(prevList => [...prevList, { name: parsedKey[0], Fraction: "Asaba" }]);
        if(parsedKey.length === 2) setFinalList(prevList => [...prevList, { name: parsedKey[1], Fraction: "Asaba" }]);
    } else if (value[0] === 0 && value[1] === 0) {
        setFinalList(prevList => [...prevList, { name: parsedKey[0], Fraction: "Mahroom" }]);
        if(parsedKey.length === 2) setFinalList(prevList => [...prevList, { name: parsedKey[1], Fraction: "Marhoom" }]);
    } else {
        setFinalList(prevList => [...prevList, { name: parsedKey[0], Fraction: `${value[0]}/${value[1]}` }]);
        if(parsedKey.length === 2) setFinalList(prevList => [...prevList, { name: parsedKey[1], Fraction: `${value[0]}/${value[1]}` }]);
    }
    
  }

    if (
        Exists("baap") &&
        !Exists("beta") &&
        !Exists("pota") &&
        !Exists("padpota") &&
        (Exists("beti") || Exists("poti") || Exists("padpoti"))
    ) {
    setFinalList(prevList =>
        prevList.map(item =>
        item.name === "baap"
            ? { ...item, Fraction: "1/6 + Asaba" } // Update the fraction for "baap"
            : item // Keep other items unchanged
        )
    );
    }
    
    if (
        Exists("dada") &&
        !Exists("baap") &&
        !Exists("beta") &&
        !Exists("pota") &&
        !Exists("padpota") &&
        (Exists("beti") || Exists("poti") || Exists("padpoti"))
    ) {
    setFinalList(prevList =>
        prevList.map(item =>
        item.name === "dada"
            ? { ...item, Fraction: "1/6 + Asaba" } // Update the fraction for "baap"
            : item // Keep other items unchanged
        )
    );
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
    )
    {
        setFinalList(prevList =>
            prevList.map(item =>
            item.name === "maa"
                ? { ...item, Fraction: "Sulus Maa Baqiyah" } // Update the fraction for "baap"
                : item // Keep other items unchanged
            )
        );
    }

}

function Final()
{
    
    setFinalList(prevList => {
        return prevList.map(item => {
            if (sharesActual.has(item.name)) {
                const numerator = personCount.get(item.name);
                const denominator = sharesActual.get(item.name);
                return {
                    ...item,
                    share: denominator / numerator, // Add calculated share
                };
            }
            return item; // Keep the item unchanged if no share is found
        });
    });

}

function FinalCollective() {
    
    setFinalList(prevList => {
        return prevList.map(item => {
            for (const [key, value] of sharesActual_collective.entries()) {
                const parsedKey = JSON.parse(key); // Parse the collective key
                if (parsedKey.includes(item.name)) {
                    const sum = parsedKey.reduce((acc, name) => {
                        return acc + (name === "beta" || name === "haqeeqibhai" || name === "allatibhai" || name === "pota"
                            ? 2 * personCount.get(name)
                            : personCount.get(name));
                    }, 0);
                    const shareValue = item.name === "beta" || item.name === "haqeeqibhai" || item.name === "allatibhai" || item.name === "pota"
                        ? 2 * value / sum
                        : value / sum;
                    return {
                        ...item,
                        share: shareValue, // Add calculated share
                    };
                }
            }
            return item; // Keep the item unchanged if no share is found
        });
    });
}

function getSingleShares() {
    for (const [key, value] of sharesActual.entries()) {
        const numerator = personCount.get(key);
        const denominator = value;
        // console.log(`${key}: ${denominator / numerator} shares`);
        batanShares.set(key, denominator / numerator);
    }
}

function getCollectiveShares() {
    for (const [key, value] of sharesActual_collective.entries()) {
        
        if ((key) === JSON.stringify(["akhyafibhai", "akhyafibehen"])) {
            const sum = personCount.get("akhyafibhai") + personCount.get("akhyafibehen");
            console.log(`akhyafibhai: ${value / sum} shares`);
            console.log(`akhyafibehen: ${value / sum} shares`);
            batanShares.set("akhyafibhai", value / sum);
            batanShares.set("akhyafibehen", value / sum);
            continue;
        }
        if ((key) === JSON.stringify(["akhyafibhai"])) {
            console.log(`akhyafibhai: ${value / personCount.get("akhyafibhai")} shares`);
            batanShares.set("akhyafibhai", value / personCount.get("akhyafibhai"));
            continue;
        }
        if ((key) === JSON.stringify(["akhyafibehen"])) {
            console.log(`akhyafibehen: ${value / personCount.get("akhyafibehen")} shares`);
            batanShares.set("akhyafibehen", value / personCount.get("akhyafibehen"));
            continue;
        }
        if ((key) === JSON.stringify(["beti", "beta"])) {
            const sum = personCount.get("beti") + 2 * personCount.get("beta");
            const numBeta = 2 * value;
            const numBeti = value;
            console.log(`beti: ${numBeti / sum} shares`);
            console.log(`beta: ${numBeta / sum} shares`);
            batanShares.set("beti", numBeti / sum);
            batanShares.set("beta", numBeta / sum);
            continue;
        }
        if ((key) === JSON.stringify(["nani", "dadi"])) {
            const sum = personCount.get("nani") + personCount.get("dadi");
            console.log(`nani: ${value / sum} shares`);
            console.log(`dadi: ${value / sum} shares`);
            batanShares.set("nani", value / sum);
            batanShares.set("dadi", value / sum);
            continue;
        }
        if ((key) === JSON.stringify(["nani"])) {
            console.log(`nani: ${value / personCount.get("nani")} shares`);
            batanShares.set("nani", value / personCount.get("nani"));
            continue;
        }
        if ((key) === JSON.stringify(["dadi"])) {
            console.log(`dadi: ${value / personCount.get("dadi")} shares`);
            batanShares.set("dadi", value / personCount.get("dadi"));
            continue;
        }
        if ((key) === JSON.stringify(["haqeeqibehen", "haqeeqibhai"])) {
            const sum = personCount.get("haqeeqibehen") + 2 * personCount.get("haqeeqibhai");
            const numBhai = 2 * value;
            const numBehen = value;
            console.log(`haqeeqibehen: ${numBehen / sum} shares`);
            console.log(`haqeeqibhai: ${numBhai / sum} shares`);
            batanShares.set("haqeeqibehen", numBehen / sum);
            batanShares.set("haqeeqibhai", numBhai / sum);
            continue;
        }
        if ((key) === JSON.stringify(["allatibehen", "allatibhai"])) {
            const sum = personCount.get("allatibehen") + 2 * personCount.get("allatibhai");
            const numBhai = 2 * value;
            const numBehen = value;
            console.log(`allatibehen: ${numBehen / sum} shares`);
            console.log(`allatibhai: ${numBhai / sum} shares`);
            batanShares.set("allatibehen", numBehen / sum);
            batanShares.set("allatibhai", numBhai / sum);
            continue;
        }
        if ((key) === JSON.stringify(["poti", "pota"])) {
            const sum = personCount.get("poti") + 2 * personCount.get("pota");
            const numPota = 2 * value;
            const numPoti = value;
            console.log(`poti: ${numPoti / sum} shares`);
            console.log(`pota: ${numPota / sum} shares`);
            batanShares.set("poti", numPoti / sum);
            batanShares.set("pota", numPota / sum);
            continue;
        }
    }
}

// useEffect(() => {

    
//     for (const [key, value] of Object.entries(params)) 
//     {
//       if(value !== "0" && key !== "totalAmount") 
//       {
//         person.push(key);
//         personCount.set(key, Number(value));
//       }
//     }
 
//     solve();

//     getFractions();


//     if(isRaddNeeded()) 
//     {
//         Radd();
//         setRadd(Lcm);
//     }

    
//     if(isTasheehNeeded()) 
//     {
//         Tasheeh();
//         setTasheeh(Lcm);
//     }

//     Final();

//     FinalCollective();

//     setFinalLcm(Lcm);

    
//   }, []);

function solveBatan()
{
    solve();
    if(isRaddNeeded()) Radd();
    if(isTasheehNeeded()) Tasheeh();
    // Final();
    // FinalCollective();
    getSingleShares();
    getCollectiveShares();
    setFinalLcm(Lcm);
}


function getMaff(index, level) {
    let maff = 0;
    for (let i = level; i < batans.length; ++i) {
        const n = batans[i].length;
        if (index < n) {
            maff += batans[i][index].value;
        }
    }
    return maff;
}

function handleFinalizeBatan() 
{
    if(batan.length === 0)
    {
        Toast.show({
            type: 'error',
            text1: 'Please add at least one person to the batan',
            position: 'top',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 40,
        });
        return;
    }
    if(currentBatanIndex > 0 && batan.length < batans[currentBatanIndex - 1].length)
    {
        Toast.show({
            type: 'error',
            text1: 'Please ensure the number of people in the batan matches the previous batans',
            position: 'top',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 40,
        });
        return;
    }
    setPressed(true);
    let m = new Map(); // Create a new Map to store counts

    batan.forEach((it) => {
        person.push(it.name); // Push the name into the person array
        m.set(it.name, (m.get(it.name) || 0) + 1); // Increment the count for the name
    });

    m.forEach((value, key) => {
        personCount.set(key, value); // Set the count in personCount Map
    });

    solveBatan();

    batan.forEach((person) => {
        person.value = batanShares.get(person.name); // Update the value from batanShares Map
    });

    // batans.push([...batan]);
    setBatans((prevBatans) => [...prevBatans, [...batan]]); // Add the finalized batan to batans array

    batanShares.clear(); // Clear the batanShares Map for the next batan
    shares.clear(); // Clear the shares Map for the next batan
    shares_collective.clear(); // Clear the collective shares Map for the next batan
    sharesActual.clear(); // Clear the actual shares Map for the next batan
    sharesActual_collective.clear(); // Clear the actual collective shares Map for the next batan
    person = [];
    personCount.clear(); // Clear the personCount Map for the next batan
    setBatan([]); // Clear the batan for the next input

    if(currentBatanIndex < Number(num_batans) - 1) 
    {
        setAskForDead(true); // Ask for the deceased batan number and position if there are more batans to add
        setShowPrevBatans(true); // Show previous batans
    }
    else
    {
        setLastBatan(true); // Set lastBatan to true if this is the last batan
        setShowPrevBatans(false); // Hide previous batans
        setAskForDead(false); // Stop asking for deceased batan number and position 
    }

}

if(lastBatan)
{
    setCurrentBatanIndex((prevIndex) => prevIndex + 1); // Move to the next batan index
        if(currentBatanIndex === 0)
        {
            setTopLcm(finalLcm);
        }
        if(currentBatanIndex > 0)
        {

            let maff = getMaff(prevIndex, prevLevel);
            let g = gcd(maff, finalLcm);
            let l = finalLcm;
            maff /= g;
            l /= g;
            batans[currentBatanIndex].forEach((person) => {
                person.value *= maff; // Multiply the value of each person in batans[i] by maff
                });

                for (let j = 0; j < currentBatanIndex; ++j) {
                batans[j].forEach((person) => {
                    person.value *= l; // Multiply the value of each person in batans[j] by Lcm
                });
                }
            setTopLcm((prev) => prev * l); // Update the top LCM
        }
        
        setLastBatan(false); // Reset lastBatan state
}


  return (
  <LinearGradient 
    colors={['#1f4037', '#99f2c8']}
    className="flex-1"
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-6"  >

      <View className="mt-4 mb-8">
          <Text className="text-white text-3xl font-bold mb-2 text-center">
            {t('islamic_inheritance_shares')}
          </Text>
          <Text className="text-slate-300 text-center mb-16">
            {t('islamic_inheritance_shares_description')}
          </Text>

          {/* Input for Number of Batans */}
        {currentBatanIndex === -1 && (
        <>
            <Text className="text-white text-lg font-medium mb-3">{t('numBatans')}:</Text>
            <TextInput
            className="bg-slate-700/80 border rounded-lg px-4 py-3 text-white"
            style={{ 
                borderColor: '#173C4C'
              }}
            placeholder="0"
            placeholderTextColor="#94a3b8"
            value={num_batans.toString()} // Ensure the value is a string for TextInput
            onChangeText={(text) => setNumBatans(text)} // Convert input to a number
            keyboardType="numeric"
            />
            <TouchableOpacity
            className="rounded-xl px-6 py-4 mt-6 shadow-xl"
            style={{ 
                backgroundColor: '#07142B'
              }}
            onPress={() => {
                    if(num_batans.includes('.') || num_batans.includes('-') || num_batans.includes(' ') || num_batans.includes(',')) {
                        Toast.show({
                        type: 'error',
                        text1: 'Please enter a valid number of batans',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                        });
                        return;
                    }
                    else if (Number(num_batans) > 0) {
                        setCurrentBatanIndex(0);
                    } else {
                        setCurrentBatanIndex(-1);
                        Toast.show({
                        type: 'error',
                        text1: 'Please enter a valid number of batans',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                        });
                    }
                    }}
            >
            <Text className="text-white text-center font-semibold text-lg"> {t('addingBatans')} </Text>
            </TouchableOpacity>
        </>
        )}

        {/* Input for Current Batan */}
        {currentBatanIndex >= 0 && currentBatanIndex < Number(num_batans) && (
            <View className="mb-8 rounded-2xl p-5 shadow-lg" style={{
                backgroundColor: '#07142B',
            }}>
                <Text className="text-white text-lg font-medium mb-6 text-center">
                {t('enterInBatan')} {currentBatanIndex + 1}:
                </Text>

                <View className="flex-row flex-wrap items-center justify-center mb-4 gap-3">
                {people.map((p, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`rounded-full px-4 py-2 mr-2 mb-2 shadow-md`} 
                        style = {{
                            backgroundColor: pressed ? '#6B7280' : '#568F7C',
                        }}
                        onPress={() => setBatan((prev) => [...prev, { name: p, value: 0 }])}
                        disabled={pressed} // Disable the button when pressed is true
                        >
                        <Text
                            className={`font-medium ${
                            pressed ? 'text-gray-300' : 'text-white' // Change text color when disabled
                            }`}
                        >
                            {t(p)}
                        </Text>
                        </TouchableOpacity>
                ))}
                </View>

                {showPrevBatans && (
                    <>
                        <View className="flex-col gap-4">
                            {batans.map((level, i) => (
                            <ScrollView 
                                horizontal 
                                key={`batan-${i}`}
                                className="mt-6" 
                                contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
                                >
                                <View className="bg-slate-800/50 rounded-xl p-4 shadow-lg">
                                <Text className="text-white text-lg font-bold mb-3 text-left">
                                    {t('batan')} {i + 1}
                                </Text>
                                <View className="flex-row items-center gap-4">
                                    {level.map((person, j) => (
                                    <View
                                        key={j}
                                        className=" border rounded-lg px-4 py-3 shadow-md flex-col justify-center items-center" style={{
                                                borderColor: '#173C4C',
                                                backgroundColor: (dead.has(Number(i)) && dead.get(Number(i)).includes(j))  ? '#EF4444' : '#374151',
                                            }}
                                    >
                                        <Text className="text-white text-lg font-medium">{t(person.name)}</Text>
                                        <Text className="text-white text-lg font-medium">{j + 1}</Text>
                                    </View>
                                    ))}
                                </View>
                                </View>
                            </ScrollView>
                            ))}
                        </View>
                    </>
                )}

                <ScrollView horizontal>
                    <View className="flex-row  items-center justify-start gap-4 mt-6">
                        {batan.map((person, index) => (
                            <View
                            key={index}
                            className="bg-slate-700/80 border rounded-lg px-4 py-3 shadow-md flex-col justify-center items-center" style={{
                                borderColor: '#173C4C',
                            }}
                            >
                            <Text className="text-white text-lg font-medium">{t(person.name)}</Text>
                             <Text className="text-white text-lg font-medium">{index + 1}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <TouchableOpacity
                    className={`rounded-xl px-6 py-4 mt-10 shadow-lg ${
                        pressed ? 'bg-gray-500' : 'bg-red-700 hover:bg-red-800 active:bg-red-900'
                    }`}
                    onPress={() => {
                        if (batan.length > 0) {
                        setBatan((prev) => prev.slice(0, -1)); // Remove the last element from the array
                        }
                    }}
                    disabled={pressed} // Disable the button when pressed is true
                    >
                    <Text
                        className={`text-center font-semibold text-lg ${
                        pressed ? 'text-gray-300' : 'text-white'
                        }`}
                    >
                        {t('remove')}
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    className={`rounded-xl px-6 py-4 mt-10 shadow-lg`}
                    style = {{
                        backgroundColor: pressed ? '#6B7280' : '#326D6C',
                    }}
                    onPress={() => {
                        handleFinalizeBatan();
                    }}
                    disabled={pressed} // Disable the button when pressed is true
                    >
                    <Text
                        className={`text-center font-semibold text-lg ${
                        pressed ? 'text-gray-300' : 'text-white'
                        }`}
                    >
                        {t('finalizeBatan')} {currentBatanIndex + 1}
                    </Text>
                    </TouchableOpacity>
                 {askForDead && (
                    <View className="mt-8">
                        <Text className="text-white text-lg font-medium mb-6">{t('deceasedno')}:</Text>
                        <TextInput
                        className="bg-slate-700/80 border  rounded-lg px-4 py-3 text-white mb-7"
                        placeholder= {t('deceasedno')}
                        placeholderTextColor="#94a3b8"
                        value={level.toString()} // Ensure the value is a string for TextInput
                        onChangeText={(text) => setLevel(text)} // Convert input to a number
                        keyboardType="numeric"
                        style={{ 
                            borderColor: '#173C4C'
                        }}
                        />
                        <Text className="text-white text-lg font-medium mb-6">{t('deceasedpos')}:</Text>
                        <TextInput
                        className="bg-slate-700/80 border  rounded-lg px-4 py-3 text-white"
                        placeholder= {t('deceasedpos')}
                        placeholderTextColor="#94a3b8"
                        value={index.toString()} // Ensure the value is a string for TextInput
                        onChangeText={(text) => setIndex(text)} // Convert input to a number
                        keyboardType="numeric"
                        style={{ 
                            borderColor: '#173C4C'
                        }}
                        />
                        <TouchableOpacity
                        className=" hover:bg-green-700 active:bg-green-800 rounded-xl px-6 py-4 mt-6 shadow-lg"
                        style = {{
                            backgroundColor: '#326D6C'
                        }}
                        onPress={() => {
                            if (level === "" || index === "") {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Please enter both level and index',
                                    position: 'top',
                                    visibilityTime: 2000,
                                    autoHide: true,
                                    topOffset: 40,
                                });
                                return;
                            }
                            if(level.includes('.') || level.includes('-') || level.includes(' ') || level.includes(',') || index.includes('.') || index.includes('-') || index.includes(' ') || index.includes(',')) {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Please enter valid level and index',
                                    position: 'top',
                                    visibilityTime: 2000,
                                    autoHide: true,
                                    topOffset: 40,
                                });
                                return;
                            }
                            if (Number(level) < 1 || Number(index) < 1 || Number(index) > batans[currentBatanIndex].length) {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Invalid level or index',
                                    position: 'top',
                                    visibilityTime: 2000,
                                    autoHide: true,
                                    topOffset: 40,
                                });
                                return;
                            }
                            if (Number(level) > batans.length) {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Level exceeds the number of batans',
                                    position: 'top',
                                    visibilityTime: 2000,
                                    autoHide: true,
                                    topOffset: 40,
                                });
                                return;
                            }
                            if(dead.has(Number(level) - 1) && dead.get(Number(level) - 1).includes(Number(index) - 1)) {
                                Toast.show({
                                    type: 'error',
                                    text1: 'This person is already marked as deceased',
                                    position: 'top',
                                    visibilityTime: 2000,
                                    autoHide: true,
                                    topOffset: 40,
                                });
                                return;
                            }
                            setCurrentBatanIndex((prevIndex) =>  prevIndex + 1);
                            setAskForDead(false);
                            setDead((prevDead) => {
                                const updatedDead = new Map(prevDead); // Create a copy of the current Map
                                const levelArray = updatedDead.get(Number(level) - 1) || []; // Get the array for the level or initialize it
                                levelArray.push(Number(index) - 1); // Add the new index to the array
                                updatedDead.set(Number(level) - 1, levelArray); // Update the Map with the modified array
                                return updatedDead; // Return the updated Map
                                });
                            if(currentBatanIndex === 0)
                            {
                             
                                setTopLcm(finalLcm);
                                setPrevIndex(Number(index) - 1);
                                setPrevLevel(Number(level) - 1);
                            }
                            if(currentBatanIndex > 0)
                            {

                                let maff = getMaff(prevIndex, prevLevel);
                                let g = gcd(maff, finalLcm);
                                let l = finalLcm;
                                maff /= g;
                                l /= g;
                                batans[currentBatanIndex].forEach((person) => {
                                    person.value *= maff; // Multiply the value of each person in batans[i] by maff
                                    });

                                    for (let j = 0; j < currentBatanIndex; ++j) {
                                    batans[j].forEach((person) => {
                                        person.value *= l; // Multiply the value of each person in batans[j] by Lcm
                                    });
                                    }
                                setTopLcm((prev) => prev * l); // Update the top LCM
                                setPrevIndex(Number(index) - 1);
                                setPrevLevel(Number(level) - 1);
                            }
                            
                            setIndex("");
                            setLevel("");
                            setPressed(false);
                        }} 
                        >
                        <Text className="text-white text-center font-semibold text-lg">
                            {t('enter')}
                        </Text>
                </TouchableOpacity>

                    </View>
                    )}
            </View>
            )}

        {currentBatanIndex >= Number(num_batans) && (
            <>
                <View className="flex-1 w-full mb-6  rounded-xl shadow-xl p-6 border border-gray-700 backdrop-blur-sm" style={{
                    backgroundColor: '#173C4C', // Set the background color to #07142B
                }}>
                    <Text className='text-white text-lg font-bold text-left mb-2 mt-4'>Al-Mablagh = {topLcm}</Text>
                </View>
                {batans.map((level, i) => (
                <View key={i} className="mb-6">
                    <Text className="text-white text-2xl font-bold text-center mb-4">
                    {t('batan')} {i + 1}:
                    </Text>
                    {level.map((person, j) => {
                    const len = i !== 0 ? batans[i - 1].length : 0;
                    if (j >= (i === 0 ? 0 : len)) {
                        let sum = 0;
                        for (let k = i; k < num_batans; ++k) {
                        sum += batans[k][j].value; // Calculate the sum of shares
                        }

                     
                        if ((dead.has(i) && dead.get(i).includes(j)) || (person.name === "other")) {
                            return null; // Skip rendering if the element is in the dead map
                            }
                            return (
                                
                                <View
                                    key={j}
                                    className="p-5 m-2 rounded-2xl shadow-xl w-full"
                                    style={{
                                    backgroundColor: '#07142B', // Match the background color of GetShares page
                                    elevation: 8, // Adds elevation for Android shadow
                                    shadowColor: '#173C4C', // Shadow color from the palette
                                    shadowOffset: { width: 0, height: 4 }, // Adjust shadow offset
                                    shadowOpacity: 0.3, // Adjust shadow opacity
                                    shadowRadius: 6, // Adjust shadow radius
                                    }}
                                >
                                    <View className="mb-3">
                                        <Text className="text-white text-2xl font-black text-center tracking-tight mt-2">
                                            {t(person.name)}
                                        </Text>
                                        <View className="h-0.5 bg-blue-300/50 rounded-full mx-6 my-1" />
                                    </View>
                                    <View className="bg-white/10 rounded-lg p-3">
                                        <Text className="text-blue-200 text-base text-center mt-1">
                                            {t('share')}: <Text className="text-white font-medium">{sum}</Text>
                                        </Text>
                                    </View>
                                </View>
                                );
                        }
                        return null;
                    })}
                </View>
                ))}
            </>
            )}


            

        </View>


      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}