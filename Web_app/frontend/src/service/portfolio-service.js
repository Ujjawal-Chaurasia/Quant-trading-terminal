import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  getDoc,
  doc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase.js";

import { fetchStocsQuotes } from "./stocks-service";

// pending

// update firestore rules of writing data
// protected routes

export const fetchPortfolioStocks = async () => {
  const uid = localStorage.getItem("uid");

  if(!uid) return []

  // fetch symbol string from firestore
  try {
    const docSnap = await getDoc(doc(db, "stocks", uid));

    if (docSnap.exists()) {
      const data = docSnap.data();

      // call fetch chart data rapid api or yahoo finance api
      const res = await fetchStocsQuotes(data.symbols.join(","));
      console.log("stocks", res)
      return res;
    } else {
      return [];
    }

  } catch (e) {
    console.log(e);
  }
};

export const addStockToPortfolio = async (symbol) => {
  const uid = localStorage.getItem("uid");

  // Get Previous symbol string
  try {
    const docSnap = await getDoc(doc(db, "stocks", uid));

    if (docSnap.exists()) {
      const data = docSnap.data();
      await setDoc(doc(db, "stocks", uid), {
        symbols: data.symbols.includes(symbol)
          ? data.symbols
          : [...data.symbols, symbol],
        timestamp: serverTimestamp(),
      });
    } else {
      await setDoc(doc(db, "stocks", uid), {
        symbols: [symbol],
        timestamp: serverTimestamp(),
      });
    }
  } catch (e) {
    console.log(e);
  }
};
