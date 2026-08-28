# Nishanth Mahesh — 60-Day Roadmap
**Role:** Technical / eCommerce & Dev Lead
**Span:** 60 days · 224 tasks

## Weekly arc
| Week | Theme | Goal |
|---|---|---|
| 1 | Foundation | Stand up the agency's full tech stack, accounts and team norms so building can start on solid rails. |
| 2 | Brand + Web Foundation | Turn the brand kit into design tokens and ship the homepage and service-page framework to staging. |
| 3 | Website + Offer | Launch the production website with complete service pages, INR pricing, payments and technical SEO. |
| 4 | Content + Proof | Build sample work and publish the first case studies, blog and SEO deliverable templates. |
| 5 | Lead Generation | Ship the inbound + outbound lead engine: lead magnet, analytics dashboard, capture and outreach systems. |
| 6 | Outreach + Sales | Run structured prospecting, send the first proposals and convert the first discovery calls. |
| 7 | Delivery Systems | Build onboarding, project management and reusable delivery assets, then deliver for the first client. |
| 8 | Scale + Optimize | Launch the first client, collect proof, refine offers and automate reporting and ops. |
| 9 | Launch Push + Review | Publicly launch the agency, optimize post-launch and set the next-quarter technical roadmap. |

## Day-by-day

### Day 1 — Workspace & tooling setup
- **Build the agency Notion command center** _(setup · ~90m)_ — Create a Notion workspace with linked databases: Projects, Tasks, Clients, Content Calendar and SOP Library, so the whole team plans in one place. Deliverable: a working Notion hub shared with Rohini and Afeeda. [Notion](https://www.notion.so)
- **Set up shared Google Drive structure** _(setup · ~45m)_ — Create top-level folders (Brand, Website, Clients, Sales, SOPs, Finance) with a naming-convention doc. Deliverable: an organized Drive everyone can navigate. [Google Workspace](https://workspace.google.com)
- **Co-author the team charter & tech-ownership RACI** _(admin · ~60m)_ — Document that Nishanth owns tech, build and delivery; agree working hours, standup cadence and comms channels. Deliverable: a one-page charter in Notion.
- **Run a personal skills-gap audit vs the 60-day mission** _(learn · ~45m)_ — List required skills (Next.js, GA4, automation, SEO tooling) against current level and pick 3 to sharpen. Deliverable: a short gap list with learning links.

### Day 2 — Tech stack decisions
- **Write the agency tech-stack decision doc** _(build · ~90m)_ — Decide the site stack (Next.js + Tailwind on Vercel), CMS/forms, analytics, automation and payments. Deliverable: stack-decisions.md committed to the repo. [Next.js Docs](https://nextjs.org/docs)
- **Create the GitHub organization + conventions** _(setup · ~60m)_ — Set up the org, main website repo, README, branch protection and issue templates. Deliverable: an initialized GitHub org with contribution rules. [GitHub](https://github.com)
- **Stand up a shared credentials vault** _(setup · ~45m)_ — Create a Bitwarden organization, add all shared accounts and invite the team. Deliverable: a single source of truth for logins. [Bitwarden](https://bitwarden.com)
- **Teardown 3 Indian agency websites** _(learn · ~45m)_ — Analyze the stacks, offers and INR pricing of 3 competitor agencies and note patterns to beat. Deliverable: a short competitor notes page.

### Day 3 — Domain, hosting & analytics
- **Register the domain + configure DNS** _(setup · ~60m)_ — Buy the Infinity & Beyond domain, set nameservers/Cloudflare and enable SSL. Deliverable: a live domain resolving with HTTPS. [Hostinger India](https://www.hostinger.in)
- **Provision Vercel and connect GitHub** _(setup · ~60m)_ — Create the Vercel project linked to the repo with preview deploys and the custom domain wired. Deliverable: an automated deploy pipeline. [Vercel](https://vercel.com)
- **Create GA4, Search Console and Tag Manager** _(setup · ~75m)_ — Set up the GA4 property, verify the domain in Search Console and install a GTM container. Deliverable: analytics + verification live. [Google Analytics](https://analytics.google.com)
- **Set up professional agency email** _(admin · ~45m)_ — Configure hello@ and nishanth@ aliases with SPF/DKIM for deliverability. Deliverable: working branded email. [Zoho Mail](https://www.zoho.com/mail/)

### Day 4 — Positioning & niche research
- **Facilitate a positioning workshop with the team** _(marketing · ~90m)_ — Define the target niche (D2C Shopify brands + local service SMBs in India), the ICP and a one-line positioning statement. Deliverable: a positioning doc in Notion.
- **Build a competitor + pricing research sheet** _(learn · ~75m)_ — Compile 10 Indian agencies with services, INR pricing and USPs into a Google Sheet. Deliverable: a comparison sheet informing our pricing.
- **Draft the service-line hypothesis list** _(build · ~60m)_ — List candidate productized services (Shopify builds, web dev, SEO, automation) with rough INR price bands. Deliverable: a first offer menu.
- **Set up the team channel + standup template** _(admin · ~30m)_ — Create the team comms channel (Slack/WhatsApp) and a daily async standup template. Deliverable: a working comms routine.

### Day 5 — Brand & repo scaffolding
- **Scaffold and deploy the website repo** _(build · ~90m · ★ milestone)_ — Initialize the Next.js + Tailwind app, commit the boilerplate and deploy a live preview to Vercel. Deliverable: the agency site's first public preview URL. [Next.js Docs](https://nextjs.org/docs)
- **Set up the design-tokens file** _(build · ~60m)_ — Create tailwind.config with placeholder brand colors and typography to be finalized after the brand kit. Deliverable: a token scaffold. [Tailwind CSS](https://tailwindcss.com/docs)
- **Create the tooling-accounts register** _(admin · ~45m)_ — Document every account, its owner, where the login lives (Bitwarden) and the renewal date. Deliverable: an accounts register.
- **Refresh Next.js App Router fundamentals** _(learn · ~45m)_ — Work through the App Router routing and layouts guide to build cleanly this week. Deliverable: notes on routing patterns for the site. [Next.js Docs](https://nextjs.org/docs)

### Day 6 — Automation & CRM foundation
- **Set up the HubSpot free CRM** _(setup · ~75m)_ — Create the CRM with pipeline stages and deal properties for agency sales and invite the team. Deliverable: a working sales pipeline. [HubSpot Free CRM](https://www.hubspot.com/products/crm)
- **Connect the automation platform with a test flow** _(build · ~75m)_ — Create a Make/n8n account and build a test workflow (form to Sheet to email) to validate the stack. Deliverable: one working automation. [Make](https://www.make.com)
- **Set up the discovery-call booking link** _(setup · ~45m)_ — Configure a Cal.com booking page with intake questions for discovery calls. Deliverable: a shareable booking link. [Cal.com](https://cal.com)
- **Create the analytics dashboard shell** _(build · ~45m)_ — Start a Looker Studio dashboard connected to GA4 to be filled out as data arrives. Deliverable: a dashboard skeleton. [Looker Studio](https://lookerstudio.google.com)

### Day 7 — Week 1 review & backlog
- **Run the Week-1 retro and plan Week-2** _(admin · ~75m)_ — Review foundation deliverables, log blockers and set Week-2 goals in Notion. Deliverable: a retro note + Week-2 plan.
- **Verify all accounts and team access** _(setup · ~60m)_ — Confirm domain, Vercel, GA4, GSC, GitHub, CRM and vault are provisioned with correct access; fix gaps. Deliverable: a green access checklist.
- **Write the website 'definition of done'** _(build · ~60m)_ — Create a page checklist (performance, SEO, responsive, analytics, accessibility) to guide the build. Deliverable: a DoD checklist.
- **Learn Core Web Vitals fundamentals** _(learn · ~45m)_ — Study LCP, INP and CLS so the build targets green vitals from day one. Deliverable: a vitals cheat sheet. [web.dev Core Web Vitals](https://web.dev/vitals/)

### Day 8 — Brand kit intake & site IA
- **Wire the brand kit into design tokens** _(build · ~90m)_ — Encode Rohini's colors, fonts and logo into tailwind.config + CSS variables and deploy a token preview page. Deliverable: brand tokens live in code. [Tailwind CSS](https://tailwindcss.com/docs)
- **Define the website information architecture** _(build · ~75m)_ — Map the sitemap (Home, Services, Work, About, Blog, Contact), URL structure and navigation. Deliverable: an IA/sitemap doc.
- **Scaffold the reusable component library** _(build · ~60m)_ — Build Button, Section, Card, Nav and Footer components using brand tokens. Deliverable: a starter component set. [Next.js Docs](https://nextjs.org/docs)
- **Install fonts with next/font** _(build · ~30m)_ — Set up self-hosted brand fonts via next/font for performance. Deliverable: fonts loading with no layout shift. [Next.js Docs](https://nextjs.org/docs)

### Day 9 — Homepage build - part 1
- **Build the homepage hero, nav and footer** _(build · ~120m)_ — Code a responsive hero (headline, subhead, CTA), a sticky nav and a footer with contact details; deploy the preview. Deliverable: homepage shell live.
- **Build the services overview section** _(build · ~75m)_ — Create a grid of the productized services with icons and short placeholder copy. Deliverable: a services teaser section.
- **Run a responsive + accessibility pass** _(build · ~45m)_ — Add mobile breakpoints, semantic HTML, alt text and focus states. Deliverable: an accessible, responsive homepage top.

### Day 10 — Homepage build - part 2
- **Build the social proof and process sections** _(build · ~90m)_ — Add a logos/testimonials placeholder and a 4-step 'how we work' section. Deliverable: trust + process sections.
- **Build the lead-capture contact section + form** _(build · ~90m)_ — Code a contact form with validation and a thank-you state. Deliverable: a working homepage contact form. [Tally Forms](https://tally.so)
- **Add SEO metadata and Open Graph scaffolding** _(build · ~45m)_ — Use the Next.js Metadata API for title/description templates and an Open Graph image. Deliverable: baseline SEO tags. [Next.js Docs](https://nextjs.org/docs)
- **Wire form submissions to the CRM/Sheet** _(build · ~30m)_ — Connect the contact form to HubSpot and a backup Sheet via the automation platform. Deliverable: leads flowing into the CRM. [Make](https://www.make.com)

### Day 11 — Service page framework
- **Build the reusable Service page template** _(build · ~120m)_ — Create a dynamic route/template with hero, problem, deliverables, process, pricing, FAQ and CTA sections. Deliverable: one template powering all services. [Next.js Docs](https://nextjs.org/docs)
- **Populate the Shopify service page with Rohini** _(build · ~60m)_ — Fill the template for the Shopify store build/optimization service with INR pricing tiers. Deliverable: a complete Shopify service page.
- **Add an accessible FAQ accordion + schema** _(build · ~60m)_ — Build a keyboard-accessible accordion and add FAQPage JSON-LD. Deliverable: a reusable FAQ block with schema. [Schema.org](https://schema.org)

### Day 12 — Web dev & SEO service pages
- **Build the Web Development service page** _(build · ~90m)_ — Populate the template for landing pages, business sites and custom builds with INR packages. Deliverable: a live web-dev service page.
- **Build the SEO service page** _(build · ~90m)_ — Create the on-page/technical/local SEO offer with deliverables and INR retainer tiers. Deliverable: a live SEO service page.
- **Polish cross-linking and internal navigation** _(build · ~45m)_ — Add CTAs between service pages, breadcrumbs and related-service links. Deliverable: interlinked service pages.
- **Learn Service schema markup** _(learn · ~30m)_ — Study Service and Offer schema to mark up the pages correctly. Deliverable: notes + a JSON-LD snippet. [Schema.org](https://schema.org)

### Day 13 — Automation service page + forms
- **Build the Automation/Systems service page** _(build · ~90m)_ — Productize workflow automation (CRM, lead routing, dashboards) with INR pricing on the template. Deliverable: a live automation service page.
- **Harden all forms with spam protection** _(build · ~60m)_ — Add a honeypot, rate-limiting and server validation with clear success/error UX across every form. Deliverable: spam-resistant forms.
- **Set up transactional email for form notifications** _(build · ~60m)_ — Configure a Brevo sending domain and templates for lead alerts plus an autoresponder. Deliverable: instant lead notifications. [Brevo](https://www.brevo.com)
- **Test all form-to-CRM flows end to end** _(delivery · ~30m)_ — Submit every form and confirm the lead reaches CRM, Sheet and email. Deliverable: a verified capture pipeline.

### Day 14 — Site staging milestone
- **Deploy the full site to staging + QA pass** _(build · ~105m · ★ milestone)_ — Put all pages on a staging URL and run the QA checklist (links, responsive, forms). Deliverable: a complete staging site ready for review. [Vercel](https://vercel.com)
- **Run a Lighthouse/PageSpeed audit + quick wins** _(build · ~75m)_ — Optimize images, add lazy loading and tune fonts to target 90+ desktop. Deliverable: a performance report + fixes. [PageSpeed Insights](https://pagespeed.web.dev)
- **Learn next/image optimization best practices** _(learn · ~30m)_ — Study responsive images, sizes and formats to keep LCP low. Deliverable: an image-optimization checklist. [Next.js Docs](https://nextjs.org/docs)
- **Run the Week-2 retro and plan Week-3** _(admin · ~30m)_ — Review progress, log the backlog and set launch goals. Deliverable: a retro + Week-3 plan.

### Day 15 — Portfolio scaffolding
- **Build the Work page + case-study template** _(build · ~120m)_ — Create a portfolio grid and a dynamic case-study template (challenge, approach, results, tech). Deliverable: a portfolio framework.
- **Set up MDX/CMS for case studies and blog** _(build · ~90m)_ — Add a content pipeline (MDX or headless CMS) so the team can publish without code. Deliverable: a working content pipeline. [Next.js Docs](https://nextjs.org/docs)
- **Create the case-study intake template** _(delivery · ~45m)_ — Build a Notion template to capture project data that converts into a case study. Deliverable: a reusable intake form. [Notion](https://www.notion.so)

### Day 16 — About & trust pages
- **Build the About page** _(build · ~90m)_ — Code team bios, the agency story and values using Rohini's copy and photos. Deliverable: a live About page.
- **Build the Contact page + booking embed** _(build · ~60m)_ — Add contact details, a form, a map, the Cal.com embed and a WhatsApp click-to-chat. Deliverable: a full contact page. [Cal.com](https://cal.com)
- **Publish the legal pages** _(build · ~45m)_ — Draft and publish Privacy Policy, Terms and a Refund Policy for the India context. Deliverable: compliant legal pages.
- **Add trust signals across the site** _(build · ~45m)_ — Place certifications, tech badges and guarantees to build credibility. Deliverable: trust elements on key pages.

### Day 17 — Pricing & packaging
- **Build the pricing/packages page** _(build · ~105m)_ — Create productized tiers across all services with INR pricing, a comparison table and CTAs. Deliverable: a live pricing page.
- **Finalize the pricing model with the team** _(sales · ~75m)_ — Set INR price bands, retainers vs one-off, and payment terms (advance %). Deliverable: a locked pricing model.
- **Set up Razorpay payment and UPI links** _(setup · ~60m)_ — Create payment links and invoicing for advances and test a Rs 1 transaction. Deliverable: working India payments. [Razorpay](https://razorpay.com)

### Day 18 — SEO foundation - technical
- **Implement the technical SEO baseline** _(build · ~90m)_ — Add robots.txt, sitemap.xml, canonical tags and Organization + LocalBusiness JSON-LD. Deliverable: a technically sound site. [Schema.org](https://schema.org)
- **Submit the site to Search Console and Bing** _(setup · ~45m)_ — Verify ownership, submit the sitemap and request indexing on Google and Bing. Deliverable: the site queued for indexing. [Search Console](https://search.google.com/search-console)
- **Set up analytics events and conversions** _(build · ~75m)_ — Track form submits, CTA clicks and bookings via GTM and mark them as GA4 conversions. Deliverable: measured conversions. [Tag Manager](https://tagmanager.google.com)
- **Validate schema with the Rich Results Test** _(learn · ~30m)_ — Test every structured-data block and fix errors/warnings. Deliverable: valid, eligible rich results. [Rich Results Test](https://search.google.com/test/rich-results)

### Day 19 — Performance & accessibility
- **Run a full performance optimization pass** _(build · ~105m)_ — Fix the LCP image, code-split, add caching headers and defer non-critical JS to hit 90+ mobile. Deliverable: green Core Web Vitals. [PageSpeed Insights](https://pagespeed.web.dev)
- **Run an accessibility audit and fix issues** _(build · ~75m)_ — Check contrast, ARIA, and keyboard navigation with axe and resolve findings. Deliverable: a WCAG-improved site. [axe DevTools](https://www.deque.com/axe/devtools/)
- **Run cross-browser and device QA** _(delivery · ~60m)_ — Test Chrome, Safari and Firefox plus real Android/iOS and log and fix issues. Deliverable: a QA pass report.

### Day 20 — Content population & polish
- **Populate final copy across all pages** _(build · ~90m)_ — Integrate Rohini's finalized copy and fix hierarchy, CTAs and microcopy. Deliverable: production-ready content.
- **Add and optimize real imagery** _(build · ~75m)_ — Source and optimize images (Unsplash/Canva) with alt text and consistent art direction. Deliverable: polished visuals sitewide. [Unsplash](https://unsplash.com)
- **Build 404, loading and error states** _(build · ~45m)_ — Create a custom 404, loading skeletons and clear form error UX. Deliverable: graceful edge-case states.
- **Learn on-page SEO for service pages** _(learn · ~30m)_ — Study title/heading/internal-link patterns for commercial pages. Deliverable: an on-page checklist.

### Day 21 — Website launch
- **Launch the website to the production domain** _(build · ~90m · ★ milestone)_ — Point the domain, run final QA and go live, then announce internally. Deliverable: the Infinity & Beyond site live to the world. [Vercel](https://vercel.com)
- **Set up post-launch monitoring** _(build · ~60m)_ — Add an uptime monitor, confirm GA4 realtime, check GSC coverage and enable error logging. Deliverable: live monitoring.
- **Write the website maintenance SOP** _(delivery · ~45m)_ — Document the update, backup and deploy process so maintenance is repeatable. Deliverable: a maintenance SOP.
- **Run the Week-3 retro and plan Week-4** _(admin · ~45m)_ — Review the launch, log the backlog and set content/proof goals. Deliverable: a retro + Week-4 plan.

### Day 22 — Sample work: Shopify demo
- **Build a Shopify demo store** _(build · ~120m)_ — Spin up a Shopify dev store, install a theme, add products and showcase optimization work as portfolio proof. Deliverable: a live demo store. [Shopify](https://www.shopify.com)
- **Document the Shopify optimization checklist** _(delivery · ~60m)_ — Write a reusable SOP covering speed, PDP, apps and conversion for client delivery. Deliverable: a Shopify delivery SOP.
- **Capture demo-store screenshots for a case study** _(marketing · ~45m)_ — Take before/after and feature screenshots for use in proof assets. Deliverable: a screenshot set.
- **Learn Shopify Partners and dev-store setup** _(learn · ~30m)_ — Study the Partners program and dev-store workflow for client builds. Deliverable: notes on the client build flow. [Shopify Partners](https://www.shopify.com/partners)

### Day 23 — Sample work: landing page
- **Build a reusable high-converting landing page template** _(build · ~120m)_ — Create a productized landing page (hero, benefits, proof, form, CTA) deployable per client and A/B ready. Deliverable: an LP template.
- **Wire landing-page analytics and lead routing** _(build · ~60m)_ — Add GA4 events, form-to-CRM routing and thank-you tracking. Deliverable: a measurable LP. [Google Analytics](https://analytics.google.com)
- **Package a 'Landing Page in 48h' offer** _(sales · ~45m)_ — Define the scope, INR price and timeline as a productized service. Deliverable: a sellable offer sheet.
- **Write a mini case study for the landing page** _(marketing · ~30m)_ — Screenshot and document the LP build as a portfolio proof point. Deliverable: an LP case snippet.

### Day 24 — Sample work: automation demo
- **Build a lead-management automation demo** _(build · ~120m)_ — Create an automation: web form to CRM to WhatsApp/email alert to a Sheet dashboard. Deliverable: a working demo automation. [Make](https://www.make.com)
- **Record a Loom walkthrough of the automation** _(marketing · ~45m)_ — Screen-record the workflow end to end as sales collateral. Deliverable: a demo video. [Loom](https://www.loom.com)
- **Document the automation as a productized offer** _(sales · ~45m)_ — Define scope, INR pricing and outcomes for the automation service. Deliverable: an offer sheet.
- **Learn advanced Make/n8n modules** _(learn · ~30m)_ — Study routers, iterators and error handling to build robust client automations. Deliverable: notes on reusable patterns. [n8n](https://n8n.io)

### Day 25 — SEO tooling & audit product
- **Build an SEO audit deliverable template** _(build · ~90m)_ — Standardize an audit report (technical, on-page, speed, schema) as a reusable template. Deliverable: an audit template.
- **Set up the SEO tooling stack** _(setup · ~75m)_ — Configure Screaming Frog, GSC, PageSpeed and a keyword tool and document the workflow. Deliverable: a documented SEO toolkit. [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- **Run a sample SEO audit on a demo site** _(delivery · ~75m)_ — Produce a real, filled-in audit as portfolio proof. Deliverable: one completed sample audit.

### Day 26 — First case studies
- **Write 2 case studies from the sample work** _(marketing · ~105m)_ — Turn the Shopify and landing-page demos into full case studies (problem, approach, result, tech). Deliverable: 2 written case studies.
- **Build and publish the case-study pages** _(build · ~75m · ★ milestone)_ — Populate the case-study template, add images and publish to /work. Deliverable: 2 case studies live on the site.
- **Add case-study schema and internal links** _(build · ~60m)_ — Add Article/CreativeWork JSON-LD and link case studies from services and home. Deliverable: interlinked, structured case studies. [Schema.org](https://schema.org)

### Day 27 — Blog & content engine
- **Set up the blog and publish the first pillar post** _(build · ~90m)_ — Publish an SEO post (e.g. 'Shopify store checklist for Indian D2C brands') via the content pipeline. Deliverable: the first blog post live.
- **Build the content SEO template** _(build · ~60m)_ — Create a reusable post layout with Article schema, table of contents, meta and internal linking. Deliverable: a content template. [Schema.org](https://schema.org)
- **Do keyword research for the content plan** _(marketing · ~60m)_ — Find 10 India-intent target keywords and turn them into a content calendar. Deliverable: a keyword-backed calendar. [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- **Learn content SEO and GEO/AI Overview basics** _(learn · ~30m)_ — Study how to structure content for Google AI Overviews and answer engines. Deliverable: a GEO checklist.

### Day 28 — Proof assets & review
- **Build a downloadable lead magnet asset** _(build · ~75m)_ — Create a 'Shopify Speed Checklist' PDF/interactive with the gate scaffolding ready for Week 5. Deliverable: a lead-magnet asset. [Canva](https://www.canva.com)
- **Create a portfolio one-pager / capabilities deck** _(marketing · ~75m)_ — Design a sales-ready deck with case studies and INR pricing. Deliverable: a capabilities deck. [Canva](https://www.canva.com)
- **QA all published proof pages** _(delivery · ~45m)_ — Verify case studies, blog and demos render, link and load correctly. Deliverable: a clean proof section.
- **Run the Week-4 retro and plan Week-5** _(admin · ~45m)_ — Review proof deliverables and set lead-gen goals. Deliverable: a retro + Week-5 plan.

### Day 29 — Lead magnet & capture
- **Build the gated lead magnet + capture flow** _(build · ~105m · ★ milestone)_ — Ship a landing page and form that emails the asset with double opt-in. Deliverable: the live lead-gen engine's first funnel.
- **Set up email delivery and the nurture list** _(build · ~75m)_ — Create the list, automate asset delivery and tag subscribers by interest. Deliverable: an automated nurture list. [Brevo](https://www.brevo.com)
- **Track lead-magnet conversions in GA4** _(build · ~45m)_ — Add events and a conversion goal for downloads. Deliverable: measured magnet conversions. [Google Analytics](https://analytics.google.com)
- **A/B test two headlines on the magnet page** _(build · ~30m)_ — Set up a simple headline split test to lift conversion. Deliverable: a running A/B test.

### Day 30 — Analytics dashboard
- **Build the agency KPI dashboard** _(build · ~120m)_ — Create a Looker Studio dashboard for traffic, leads, conversion and source, connecting GA4 + Sheets. Deliverable: a live KPI dashboard. [Looker Studio](https://lookerstudio.google.com)
- **Set up lead-source tracking and UTMs** _(build · ~60m)_ — Write a UTM convention doc and generate tracked links for every channel. Deliverable: consistent source attribution.
- **Create a weekly analytics report template** _(delivery · ~45m)_ — Build a repeatable weekly report layout for internal review. Deliverable: a report template.
- **Learn Looker Studio calculated fields** _(learn · ~30m)_ — Study calculated fields and blends to enrich the dashboard. Deliverable: notes + one new metric. [Looker Studio](https://lookerstudio.google.com)

### Day 31 — Inbound SEO engine
- **Publish 2 buyer-intent SEO pages** _(build · ~105m)_ — Create bottom-funnel pages like 'Shopify developer in India' and 'affordable SEO for small business'. Deliverable: 2 commercial pages live.
- **Optimize existing pages for target keywords** _(build · ~75m)_ — Tune titles, headers, internal links and schema on current pages. Deliverable: an on-page optimization pass.
- **Set up rank tracking** _(setup · ~45m)_ — Track target keywords via GSC and a free rank tool. Deliverable: a rank-tracking sheet. [Search Console](https://search.google.com/search-console)
- **Submit new pages for indexing** _(delivery · ~30m)_ — Request indexing for the new pages in Search Console. Deliverable: pages queued for crawl. [Search Console](https://search.google.com/search-console)

### Day 32 — Outbound systems - build
- **Build the prospect database + enrichment sheet** _(build · ~90m)_ — Create a structured Sheet (company, contact, niche, pain, source) and seed 50 Indian SMB/D2C prospects. Deliverable: a 50-lead prospect list.
- **Set up cold-email tooling and domain warmup** _(setup · ~90m)_ — Configure a sending domain, warmup and sequences with SPF/DKIM/DMARC. Deliverable: a deliverability-ready outreach setup. [Brevo](https://www.brevo.com)
- **Build the LinkedIn outreach tracker** _(build · ~45m)_ — Create a tracker for connection requests, DMs and follow-ups. Deliverable: an outreach tracker. [LinkedIn](https://www.linkedin.com)
- **Learn cold-email deliverability** _(learn · ~30m)_ — Study warmup, spam triggers and sending limits to protect the domain. Deliverable: a deliverability checklist.

### Day 33 — Outreach automation
- **Automate the prospect-to-CRM-to-sequence flow** _(build · ~105m)_ — Build an automation that pushes new prospects into the CRM and triggers the outreach sequence, logging replies. Deliverable: an automated outreach pipeline. [Make](https://www.make.com)
- **Draft cold email + DM templates with the team** _(sales · ~75m)_ — Write a 3-step email sequence and LinkedIn DM scripts with personalization tokens. Deliverable: an outreach message kit.
- **Set up reply detection and lead scoring** _(build · ~60m)_ — Route replies and score leads by engagement in the CRM. Deliverable: prioritized inbound replies. [HubSpot Free CRM](https://www.hubspot.com/products/crm)

### Day 34 — Campaign landing pages
- **Build 2 niche campaign landing pages** _(build · ~120m)_ — Deploy vertical-specific LPs (D2C Shopify, local service SEO) from the template. Deliverable: 2 live campaign pages.
- **Set up conversion tracking and heatmaps** _(build · ~60m)_ — Add Microsoft Clarity heatmaps and GA4 goals on the campaign LPs. Deliverable: behavior + conversion data. [Microsoft Clarity](https://clarity.microsoft.com)
- **QA and speed-optimize the campaign pages** _(delivery · ~60m)_ — Run QA and tune performance so the pages load fast under ad traffic. Deliverable: fast, verified LPs. [PageSpeed Insights](https://pagespeed.web.dev)

### Day 35 — Lead-gen review
- **Audit the full lead-gen funnel end to end** _(delivery · ~90m)_ — Test every path (organic, magnet, outbound) from click to CRM and fix leaks. Deliverable: a verified funnel.
- **Build the leads dashboard view + alerts** _(build · ~75m)_ — Add a real-time leads view and a Slack/WhatsApp alert on each new lead. Deliverable: instant lead visibility. [Looker Studio](https://lookerstudio.google.com)
- **Learn conversion rate optimization basics** _(learn · ~30m)_ — Study CRO fundamentals to guide funnel improvements. Deliverable: a CRO idea backlog.
- **Run the Week-5 retro and plan Week-6** _(admin · ~45m)_ — Review lead-gen results and set outreach/sales goals. Deliverable: a retro + Week-6 plan.

### Day 36 — Prospecting sprint
- **Expand the prospect list to 100+ qualified leads** _(sales · ~90m)_ — Research and enrich Indian SMB/D2C prospects into the CRM with pain notes. Deliverable: 100+ qualified leads. [HubSpot Free CRM](https://www.hubspot.com/products/crm)
- **Launch the first cold-outreach batch** _(sales · ~75m)_ — Send the sequence to the first 30 prospects and log activity in the CRM. Deliverable: batch 1 outreach sent.
- **Build the outreach performance tracker** _(build · ~45m)_ — Track sent, open, reply and meeting rates in a dashboard. Deliverable: outreach metrics visible.
- **Learn consultative selling basics** _(learn · ~30m)_ — Study SPIN/consultative questioning for discovery calls. Deliverable: a discovery question bank.

### Day 37 — Proposal system
- **Build a reusable proposal template** _(build · ~105m)_ — Create a branded proposal (scope, deliverables, timeline, INR pricing, terms) that is fast to customize. Deliverable: a proposal template.
- **Build a pricing calculator tool** _(build · ~75m)_ — Create an internal calculator (Sheet or mini web app) to scope and price projects quickly. Deliverable: a pricing calculator.
- **Create the SOW and contract template** _(admin · ~60m)_ — Draft a statement of work and a simple service agreement for India with advance-% terms. Deliverable: SOW + contract templates.

### Day 38 — Sales enablement
- **Build the discovery-call script + qualification checklist** _(sales · ~75m)_ — Write a BANT-style qualification flow and needs-discovery questions. Deliverable: a call script + checklist.
- **Automate booking-to-CRM-to-reminder flow** _(build · ~90m)_ — When a call is booked, auto-create the deal and send prep/reminder emails. Deliverable: a booking automation. [Make](https://www.make.com)
- **Prepare the demo environment for sales calls** _(delivery · ~45m)_ — Ready the demo store, LP, automation and dashboard to show live on calls. Deliverable: a call-ready demo set.
- **Record a Loom sales demo reel** _(marketing · ~30m)_ — Record a tight walkthrough of the agency's work for cold prospects. Deliverable: a demo reel. [Loom](https://www.loom.com)

### Day 39 — Outreach batch 2 + follow-up
- **Send outreach batch 2 and follow-ups** _(sales · ~90m)_ — Send the sequence to the next 40 prospects and follow up with batch-1 non-repliers. Deliverable: batch 2 + follow-ups sent.
- **Personalize 5 high-value prospect pitches** _(sales · ~60m)_ — Create custom Loom or audit-teaser pitches for target accounts. Deliverable: 5 personalized pitches. [Loom](https://www.loom.com)
- **Run a free mini-audit lead hook** _(delivery · ~60m)_ — Offer and deliver 2-3 free 15-minute site/SEO audits as a conversation starter. Deliverable: audits delivered to warm prospects.
- **Learn objection handling** _(learn · ~30m)_ — Study common agency sales objections and prepared responses. Deliverable: an objection-handling script.

### Day 40 — First sales calls
- **Run the first discovery calls** _(sales · ~90m)_ — Conduct the booked discovery calls using the script and capture needs in the CRM. Deliverable: qualified needs documented.
- **Send the first proposals** _(sales · ~75m · ★ milestone)_ — Turn call notes into tailored proposals and send them via the template. Deliverable: the agency's first proposals out the door.
- **Log deals and set a follow-up cadence** _(sales · ~45m)_ — Update the pipeline and schedule structured follow-ups. Deliverable: a managed pipeline. [HubSpot Free CRM](https://www.hubspot.com/products/crm)
- **Debrief the calls and refine the pitch** _(learn · ~30m)_ — Note what landed and update the script and deck. Deliverable: an improved pitch.

### Day 41 — Conversion & negotiation
- **Follow up and negotiate open proposals** _(sales · ~90m)_ — Handle questions, adjust scope/price and move deals toward close. Deliverable: advanced deals.
- **Prepare onboarding and payment for the first close** _(build · ~60m)_ — Set up the Razorpay advance link and the onboarding form so a yes converts instantly. Deliverable: a ready close-to-cash flow. [Razorpay](https://razorpay.com)
- **A/B test outreach copy based on data** _(marketing · ~45m)_ — Iterate subject lines and CTAs using open/reply rates. Deliverable: an improved outreach variant.
- **Build a deal-pipeline dashboard** _(build · ~45m)_ — Visualize stages, value and conversion in the CRM/Looker. Deliverable: a pipeline dashboard. [Looker Studio](https://lookerstudio.google.com)

### Day 42 — Sales review
- **Analyze outreach and pipeline metrics** _(delivery · ~90m)_ — Review the funnel (sent to reply to call to proposal to close) and find the best channel and segment. Deliverable: a sales-metrics readout.
- **Refine the ICP and messaging from real data** _(marketing · ~60m)_ — Update the positioning and ICP docs based on real responses. Deliverable: a sharpened ICP.
- **Prep the delivery-systems backlog for Week 7** _(delivery · ~45m)_ — List the onboarding, PM and asset builds needed for first delivery. Deliverable: a delivery backlog.
- **Run the Week-6 retro and plan Week-7** _(admin · ~45m)_ — Review sales results and set delivery-systems goals. Deliverable: a retro + Week-7 plan.

### Day 43 — Client onboarding system
- **Build the client onboarding workflow** _(build · ~105m)_ — Create an onboarding form and a Notion client-portal template (kickoff, assets, access, timeline). Deliverable: an onboarding system. [Notion](https://www.notion.so)
- **Automate onboarding on deal close** _(build · ~75m)_ — Auto-provision the client folder, CRM record and welcome email when a deal is signed. Deliverable: hands-off onboarding. [Make](https://www.make.com)
- **Write the onboarding SOP** _(delivery · ~60m)_ — Document the step-by-step onboarding so anyone can run it. Deliverable: an onboarding SOP.

### Day 44 — Project management system
- **Build the project management system** _(build · ~105m)_ — Set up a Notion/ClickUp project template with a task board, milestones and a client-facing view. Deliverable: a reusable PM system. [ClickUp](https://clickup.com)
- **Create delivery SOPs for each service** _(delivery · ~90m)_ — Write step-by-step SOPs with checklists for Shopify, web dev, SEO and automation. Deliverable: a delivery SOP set.
- **Set up time and effort tracking** _(build · ~45m)_ — Add lightweight time tracking to compare actuals against estimates. Deliverable: a tracking setup.

### Day 45 — Reusable delivery assets
- **Build a reusable client starter kit** _(build · ~120m)_ — Create a boilerplate repo/theme, component library and config so new builds start half done. Deliverable: a starter kit. [GitHub](https://github.com)
- **Create QA and handoff checklists** _(delivery · ~75m)_ — Write pre-launch QA, client handoff and training-doc templates. Deliverable: delivery checklists.
- **Build a client reporting dashboard template** _(build · ~45m)_ — Create a Looker Studio template to report client results monthly. Deliverable: a client report template. [Looker Studio](https://lookerstudio.google.com)

### Day 46 — First client kickoff
- **Onboard the first paying client** _(delivery · ~90m · ★ milestone)_ — Run the kickoff, collect access and assets via the portal and set milestones. Deliverable: the first client fully onboarded.
- **Set up the client project workspace** _(delivery · ~60m)_ — Provision the repo, PM board, comms channel and tracker for the project. Deliverable: a ready project workspace.
- **Scope and plan the delivery sprint** _(delivery · ~60m)_ — Break the work into weekly milestones with dates. Deliverable: a delivery plan.
- **Learn client communication best practices** _(learn · ~30m)_ — Study cadence, status updates and expectation-setting for smooth delivery. Deliverable: a comms playbook note.

### Day 47 — Client delivery - build
- **Execute the first client build sprint** _(delivery · ~150m)_ — Do the core build work (site/store/landing) per scope and push a preview deploy. Deliverable: a working preview for the client.
- **Send the client a progress update + preview** _(delivery · ~45m)_ — Share the preview link with a short Loom update. Deliverable: a client progress update. [Loom](https://www.loom.com)
- **Log delivery time vs estimate** _(admin · ~45m)_ — Track actual hours against the estimate to refine future pricing. Deliverable: time-tracking data.

### Day 48 — Client delivery - polish
- **Finish the client build and run QA** _(delivery · ~150m)_ — Complete the build, run the QA checklist and fix issues. Deliverable: a QA-passed build.
- **Set up client analytics and tracking** _(build · ~60m)_ — Configure GA4, Search Console and conversion tracking for the client. Deliverable: client measurement live. [Google Analytics](https://analytics.google.com)
- **Prepare client training and handoff material** _(delivery · ~45m)_ — Create a short training doc/video for the client to manage their site. Deliverable: handoff materials. [Loom](https://www.loom.com)

### Day 49 — Delivery review
- **Run the client review and revision round** _(delivery · ~90m)_ — Walk the client through the build, collect feedback and implement priority revisions. Deliverable: an approved-with-edits build.
- **Refine SOPs from first-delivery learnings** _(delivery · ~60m)_ — Update SOPs and checklists with the real gaps found during delivery. Deliverable: improved SOPs.
- **Document delivery time benchmarks** _(admin · ~45m)_ — Record how long each service actually took to sharpen pricing. Deliverable: a benchmarks note.
- **Run the Week-7 retro and plan Week-8** _(admin · ~45m)_ — Review delivery and set scale/optimize goals. Deliverable: a retro + Week-8 plan.

### Day 50 — Client launch & testimonial
- **Launch the first client project to production** _(delivery · ~105m · ★ milestone)_ — Go live, run final QA and confirm success metrics. Deliverable: the first client project delivered and live.
- **Request a testimonial and case-study data** _(marketing · ~45m)_ — Collect a quote, real metrics and permission to publish. Deliverable: testimonial + proof data.
- **Set up the post-launch support SOP** _(delivery · ~45m)_ — Define the support/retainer process, SLA and simple ticketing. Deliverable: a support SOP.
- **Set up the client success check-in cadence** _(delivery · ~45m)_ — Schedule recurring check-ins to drive retention and upsell. Deliverable: a check-in calendar.

### Day 51 — Case study & referrals
- **Publish the first real client case study** _(marketing · ~90m)_ — Write and publish a full case study with real results on /work and add schema. Deliverable: a live client case study. [Schema.org](https://schema.org)
- **Build a referral system** _(build · ~75m)_ — Create a referral offer with tracking (unique links/codes) and automation. Deliverable: a working referral engine.
- **Ask the first client and network for referrals** _(sales · ~45m)_ — Send referral requests to the client and warm network. Deliverable: referral requests sent.
- **Learn how to build a referral engine** _(learn · ~30m)_ — Study referral incentives and mechanics for agencies. Deliverable: a referral playbook note.

### Day 52 — Offer optimization
- **Refine productized offers from real data** _(sales · ~90m)_ — Adjust scope and INR pricing using delivery cost and demand, then update the site. Deliverable: sharpened offers live.
- **Add an upsell/retainer offer** _(build · ~60m)_ — Productize a monthly care/growth retainer on the pricing page. Deliverable: a retainer offer live.
- **Update the proposal and pricing calculator** _(build · ~45m)_ — Sync the proposal template and calculator with the new pricing. Deliverable: updated sales tools.
- **A/B test the pricing page layout** _(build · ~45m)_ — Test a layout/copy variant to lift pricing-page conversion. Deliverable: a running pricing test.

### Day 53 — Automation & efficiency
- **Automate reporting and client updates** _(build · ~105m)_ — Auto-generate and send monthly client reports from Looker Studio/GA4. Deliverable: automated client reporting. [Make](https://www.make.com)
- **Automate internal ops (invoicing, follow-ups)** _(build · ~75m)_ — Set up recurring invoice links, payment reminders and deal-stage automations. Deliverable: automated ops. [Razorpay](https://razorpay.com)
- **Audit and optimize existing automations** _(delivery · ~60m)_ — Review all workflows for errors and efficiency and fix them. Deliverable: a hardened automation stack.

### Day 54 — SEO & content scale
- **Publish 2 new SEO content pieces** _(build · ~90m)_ — Write buyer-intent posts from the keyword plan and internal-link them to services. Deliverable: 2 posts live.
- **Re-audit the agency site's technical SEO** _(delivery · ~75m)_ — Crawl with Screaming Frog, fix new issues and update the sitemap. Deliverable: a clean technical crawl. [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- **Review GSC performance and iterate** _(marketing · ~45m)_ — Analyze impressions/clicks and optimize underperforming pages. Deliverable: an optimization pass. [Search Console](https://search.google.com/search-console)
- **Learn programmatic SEO concepts** _(learn · ~30m)_ — Study templated page generation for scaling service/location pages. Deliverable: a programmatic SEO idea list.

### Day 55 — Analytics & growth review
- **Build a full-funnel analytics review** _(delivery · ~90m)_ — Combine marketing, sales and delivery metrics into one dashboard and find bottlenecks. Deliverable: a full-funnel view. [Looker Studio](https://lookerstudio.google.com)
- **Set up a client cohort/retention view** _(build · ~60m)_ — Track client retention and value over time. Deliverable: a retention view.
- **Optimize top landing pages from data** _(build · ~45m)_ — Improve the highest-traffic pages based on behavior data. Deliverable: optimized top pages. [Microsoft Clarity](https://clarity.microsoft.com)
- **Document the growth-experiments backlog** _(marketing · ~45m)_ — Prioritize next-quarter growth experiments. Deliverable: a ranked experiment backlog.

### Day 56 — Scale-readiness review
- **Package the full delivery playbook** _(delivery · ~90m)_ — Consolidate all SOPs, templates and assets into one 'Delivery OS' in Notion. Deliverable: a single delivery playbook. [Notion](https://www.notion.so)
- **Create a hiring/outsourcing brief** _(admin · ~60m)_ — Define what to delegate to a junior/freelancer with checklists so Afeeda or contractors can execute. Deliverable: a delegation brief.
- **Run a systems health check** _(delivery · ~45m)_ — Verify backups, access, security and renewals across all tools. Deliverable: a systems health report.
- **Run the Week-8 retro and plan the launch push** _(admin · ~45m)_ — Review scaling work and set launch-week goals. Deliverable: a retro + launch plan.

### Day 57 — Public launch prep
- **Run the final pre-launch site + systems QA** _(delivery · ~90m)_ — Full QA of the site, forms, analytics, automations and payments before public launch. Deliverable: a go/no-go QA sign-off.
- **Prepare launch assets and tracking** _(build · ~75m)_ — Build the launch announcement page, UTM links and conversion tracking. Deliverable: launch assets ready.
- **Set up the launch-day monitoring dashboard** _(build · ~45m)_ — Create a realtime dashboard for traffic, leads and performance. Deliverable: a launch monitor. [Looker Studio](https://lookerstudio.google.com)
- **Coordinate the launch checklist with the team** _(admin · ~30m)_ — Align on roles, timing and channels for launch day. Deliverable: a shared launch checklist.

### Day 58 — Public launch day
- **Execute the public launch** _(marketing · ~90m · ★ milestone)_ — Go live across channels: site announcement, portfolio and offers public. Deliverable: Infinity & Beyond publicly launched.
- **Monitor traffic, forms and performance live** _(delivery · ~75m)_ — Watch GA4 realtime, uptime and the form flow and hotfix any issues. Deliverable: a stable launch. [Google Analytics](https://analytics.google.com)
- **Capture and respond to inbound leads fast** _(sales · ~45m)_ — Route and reply to launch-day leads via the CRM. Deliverable: launch leads handled.
- **Log launch-day metrics** _(admin · ~30m)_ — Record traffic, leads and conversions for the retro. Deliverable: a launch metrics snapshot.

### Day 59 — Post-launch optimization
- **Analyze launch performance and fix drop-offs** _(delivery · ~90m)_ — Review funnel data and optimize the highest-impact leaks. Deliverable: post-launch fixes shipped.
- **Follow up on launch leads and book calls** _(sales · ~60m)_ — Nurture launch leads and schedule discovery calls. Deliverable: booked calls from the launch.
- **Publish a 'how we built it' post** _(marketing · ~60m)_ — Write a behind-the-scenes post as thought leadership and SEO. Deliverable: a published launch post.
- **Learn post-launch growth loops** _(learn · ~30m)_ — Study retention and referral loops to sustain momentum. Deliverable: a growth-loop plan note.

### Day 60 — Retro & next-quarter plan
- **Run the 60-day retrospective with the team** _(admin · ~75m)_ — Review all deliverables against goals and document wins, misses and learnings. Deliverable: a 60-day retro doc.
- **Build the next-quarter technical roadmap** _(build · ~90m · ★ milestone)_ — Prioritize product/service scaling, automation, tech debt and hiring. Deliverable: the Q2 technical roadmap.
- **Archive and document all systems + credentials** _(admin · ~45m)_ — Ensure everything is documented, backed up and handoff-ready. Deliverable: a complete systems archive. [Bitwarden](https://bitwarden.com)
- **Set personal skill-growth goals for Q2** _(learn · ~30m)_ — Pick technical skills to level up next quarter. Deliverable: a personal growth plan.
