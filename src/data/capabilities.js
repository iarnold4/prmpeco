// The brief's "Page 3: Service Capabilities" text (Mel Phillips, Updated Version 3), verbatim and in one place for the
// home page, the certification badges and the Capabilities page. Not a word here is Claude's.

export const specialization = {
  eyebrow: 'Primary Specialization',
  title: 'Environmental & Hazardous Location Electrical Systems',
  text: 'We specialize in Class I, Division 1 & 2 (and Zone-rated) hazardous location wiring, control integration, and field deployment for complex environmental treatment systems, including soil vapor extraction, pump-and-treat, air sparging, and custom filtration skids.',
};

export const manufacturing = {
  title: 'Certified Control Panel Design & System Manufacturing',
  items: [
    { label: 'UL 508A Certified', text: 'Custom industrial control panels built to strict safety and quality standards.' },
    { label: 'UL 698A Certified', text: 'Explosion-proof and intrinsically safe control panels for hazardous environments.' },
    { label: 'Third-Party System Certification', text: 'Certified manufacturing of fully integrated pollution treatment skids and systems.' },
    { label: 'In-House Fabrication', text: 'Custom stainless and alloy enclosures, skids, and structures via our Triangle Stainless Division.' },
  ],
};

export const services = {
  title: 'Commercial & Industrial Electrical Services',
  text: 'Our dedicated service department handles commercial call-outs, industrial power distribution, system diagnostics, control panel integration, and facility maintenance.',
  items: [
    'Industrial Control Panels & Automation',
    'Hazardous Location (Class I, Div 1/2) Wiring & Conduit Systems',
    'Heavy Power Distribution & Motor Controls',
    'Environmental Remediation Wiring & Field Hookups',
    'Commercial Electrical Service Calls & System Diagnostics',
  ],
};

// The three certifications the brief asks to badge "across the capabilities and homepage sections".
export const certifications = manufacturing.items.slice(0, 3);
