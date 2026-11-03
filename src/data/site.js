// Sitewide facts. Every value is from the owner's brief (Mel Phillips, "Updated Version 3", pasted by Isaac
// 2026-11-03) unless the comment says otherwise. The brief's placeholders (the direct phone, the FL and WV licence
// numbers) stay placeholders here until Isaac supplies the values; nothing is filled in by guesswork.
export const site = {
  url: 'https://prmpeco.com',
  name: 'PRMPECO',
  owner: 'Product Recovery Management, Inc.',
  // the brief's sub-headline, first sentence
  division: 'PRMPECO is the specialized electrical service and controls division of Product Recovery Management, Inc.',
  location: 'Butner, NC', // the brief gives the town and the facility, no street address
  contact: {
    name: 'Christian Compton',
    role: 'Project Manager', // the brief: "Divisional Lead / Project Manager"
    email: 'ccompton@prmpeco.com',
    phone: 'XXXXXXX', // the brief's placeholder, verbatim
  },
  licenses: [
    { label: 'North Carolina Unlimited Electrical License', number: '#23483-U' },
    { label: 'Florida Unlimited Electrical License', number: '[License #]' }, // placeholder in the brief
    { label: 'West Virginia Unlimited Electrical License', number: '[License #]' }, // placeholder in the brief
  ],
  // the brief's "Important Service Notice", verbatim; shown in the footer and (later) on the contact form
  serviceNotice: 'PRMPECO specializes strictly in commercial, industrial, hazardous location, and environmental electrical systems. We do not provide residential wiring or home services.',
  parent: { label: 'prmfiltration.com', href: 'https://www.prmfiltration.com/' },
  // the share image for pages without one of their own (the logo until there is a photo)
  ogImage: '/images/logo.png',
};
