#!/usr/bin/env node

const fetch = require("node-fetch");

if (!process.env.GANDI_TOKEN)
  throw new Error(`GANDI_TOKEN not found in environment`);
if (!process.env.GANDI_DOMAIN_UUID)
  throw new Error(`GANDI_DOMAIN_UUID not found in environment`);
const hash = process.argv[2];
if (!hash) throw new Error(`Usage: gandi-txt hash`);

const headers = {
  "X-Api-Key": process.env.GANDI_TOKEN,
  "Content-Type": "application/json"
};

const uuid = process.env.GANDI_DOMAIN_UUID;

(async function() {
  await await fetch(
    `https://dns.api.gandi.net/api/v5/zones/${uuid}/records/@/TXT`,
    {
      headers,
      method: "DELETE"
    }
  );
  const res = await (await fetch(
    `https://dns.api.gandi.net/api/v5/zones/${uuid}/records`,
    {
      headers,
      method: "POST",
      body: JSON.stringify({
        rrset_name: "@",
        rrset_type: "TXT",
        rrset_ttl: 300,
        rrset_values: [`dnslink=/ipfs/${hash}`]
      })
    }
  )).json();
  console.log(res);
})();
