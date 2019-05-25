# Gandi IPFS

Another tool necessary to make IPFS work. This updates a TXT record for
[DNSLink](http://dnslink.io/). This way, you can use a domain to get to a
resource on IPFS.

But in order to maintain changing content, like a blog, you need to keep updating
that TXT record. That's what this script does, for Gandi.

### Usage

1. Set up `GANDI_TOKEN` with your Gandi API token
2. Set up `GANDI_DOMAIN_UUID` with the UUID of the target domain

Then run `gandi-ipfs hash` to update the link to the ipfs hash.

Note that this is very rough software that fills a personal need. It doesn't support
IPNS, or multiple TXT records, or any provider other than Gandi.
