import axios from "axios";
import { headers } from "next/headers";

export function getDomain() {
  let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost") ? DOMAIN : referrer;
  return domainName.replace("www.", "");
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1_DOMAINS + `&domain=${domain}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getScript(url) {
  try {
    const res = await fetch(url);
    return res.data;
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}

export async function getTopsites() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1_TOPSITES + `&domain=${domain}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getLatestContributions() {
  const apiKey = process.env.CONTRIB_API1_KEY;
  const apiUrl = process.env.CONTRIB_API1_MEMBERS;
  const domain = getDomain();

  try {
    const res = await fetch(apiUrl + "/getlatestcontributions?domain="+domain+"&key=" + apiKey, { next: { revalidate: 3600 } });

    return res.data;
  } catch (error) {
    console.log("Error: ",error)
  }
}

export async function getLatestContributors() {
  const apiKey = process.env.CONTRIB_API1_KEY;
  const apiUrl = process.env.CONTRIB_API1_MEMBERS;
  const domain = getDomain();

  try {
    const res = await axios.get(apiUrl + "/getlatestcontributors?domain="+domain+"&key=" + apiKey, { next: { revalidate: 3600 } });
    return res.data;
  } catch (error) {
    console.log("Error: ",error)
  }
}

export async function checkContribEmails(email) {
  let apiUrl = process.env.CONTRIB_URL;
  try {
    const res = await axios.post(apiUrl + "/signup/checkexist", {
      field: "EmailAddress",
      value: email,
    });

    console.log("checkContribEmails: ", res);
    return res.status;
  } catch (e) {
    console.log("Error: ", e);
  }
}

export async function getBlogs() {
  const domain = getDomain();
  const url = process.env.GET_BLOGS+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });
 
  
  if (!res.ok){
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
  }

  return res.json();
}