/** PhD admissions guide + free resources — sourced from Notion learning database. */

export const phdAdmissionsGuide = {
  title: 'STEM Ph.D. Admissions Guide',
  headline: 'Everything you need to craft a strong Ph.D. application.',
  purchaseUrl: 'https://buy.stripe.com/28og0Q35Y2dbbtK3cy',
  screenshot: '/phd-admissions/guide-cover.png',
  screenshotAlt:
    'Cover of STEM Ph.D. Admissions in the United States guide by Ekaterina Ivshina',
  whoFor:
    'Built for STEM applicants to U.S. doctoral programs — especially if you are first-generation, changing fields, or navigating admissions without a built-in network. If the process feels opaque and you want a clear map from program research to submit button, this is for you.',
  whyBuy:
    'I wrote this guide after getting into Harvard and winning an NSF Graduate Research Fellowship, with a Princeton B.A. in mathematics behind me. It is the end-to-end playbook I wish I had: what committees actually weigh, how to find funded programs and reach out to advisors, and how to polish every piece of your file. Practical, specific, and grounded in what worked.',
  topics: [
    { title: 'What committees look for', detail: 'How admissions decisions are really made — and what separates strong files from forgettable ones.' },
    { title: 'Program research', detail: 'Where to apply, how funding works, and how to contact potential Ph.D. advisors.' },
    { title: 'Application timeline', detail: 'A month-by-month plan so nothing slips through the cracks.' },
    { title: 'Statement of purpose', detail: 'How to write a statement that tells a coherent research story.' },
    { title: 'Recommendation letters', detail: 'Who to ask, when to ask, and how to make it easy for your recommenders.' },
    { title: 'CV', detail: 'Structure and emphasis for a research-focused academic CV.' },
    { title: 'GPA & test scores', detail: 'What numbers matter, when they do not, and how to contextualize yours.' },
  ],
  ctaLabel: 'Get the guide',
};

export const myApplicationMaterials = [
  {
    title: 'My CV',
    description: 'Curriculum vitae from my PhD applications (Harvard applied math).',
    href: '/phd-admissions/resume_ekaterina_ivshina.pdf',
    fileType: 'PDF',
  },
  {
    title: 'My statement of purpose',
    description: 'The statement of purpose that helped me get into Harvard.',
    href: '/phd-admissions/katyas_sop.pdf',
    fileType: 'PDF',
  },
  {
    title: 'My research proposal',
    description: 'NSF Graduate Research Fellowship research proposal.',
    href: 'https://drive.google.com/file/d/1r0fVRmPc0b18WSqKUKse2-4_eAYpsUzM/view',
    fileType: 'PDF',
  },
];

export const applicationChecklist = {
  intro: 'Most PhD applications require the following documents:',
  required: [
    'Academic transcript(s)',
    'Statement of purpose',
    'CV',
    'Letters of recommendation (usually 3)',
    'Application form (mostly biographical information; each program has its own website — it is not like Common App)',
  ],
  optional: [
    { label: 'Research proposal', note: 'Many programs do not require it, but fellowships do.' },
    { label: 'Standardized test scores', note: 'Optional for most programs.' },
    { label: 'Diversity statement', note: 'Most programs do not require it.' },
  ],
};

export const advisorEmailTemplate = {
  note: 'To use the template, insert relevant info instead of the X\'s.',
  body: `Dear Professor X,

My name is X and I'm a senior majoring in X at X university. I've done research in X with Prof. X. I will be applying to X's PhD program in X this fall, and I am very interested in joining your group.

I recently read your papers on X topic, and I found interesting X. Would you be available for a call to talk more about your work? I look forward to hearing from you soon. I have also attached my CV below.

Best,
X`,
};

export const recommendationLetterTemplates = [
  {
    title: 'Template 1 — if you conducted research with the professor',
    intro: 'If you are not able to meet with your potential recommender in person, you can use the following template to request a letter via email.',
    body: `Dear Professor [Last Name],

I hope you're well! I am reaching out to ask if you would be willing to write a recommendation letter to support my PhD applications.

I really enjoyed working with you on X over the past two years, and your guidance has been incredibly valuable to me, helping me find my own path in academia.

The deadline for submitting the recommendation is [Deadline Date].

If you need any additional information or materials, such as my resume or a draft of my statement of purpose, please let me know. I would be more than happy to provide anything that might assist you in writing the letter.

Thank you very much for considering my request!

Best,
X`,
  },
  {
    title: 'Template 2 — if you took a class with the professor',
    body: `Dear Professor X,

My name is X, and I took your class X during the X semester/year. While taking your class, I discovered my passion for [research interest] and have decided to pursue this topic further in my PhD.

I am currently applying for PhD programs in [field]. Would you be willing to write a recommendation letter to support my PhD applications?

I have attached my undergraduate and master's transcripts, as well as a copy of my CV for your consideration.

Thank you very much for considering my request! I look forward to hearing from you.

Best,
X`,
  },
];

export const phdStudentEmailTemplate = {
  note: 'To use the template, insert relevant info instead of the X\'s and the brackets.',
  body: `Dear X,

I hope your week is going well! My name is [Your Name], and I am currently researching potential labs for my PhD studies. I came across the [Lab Name] and am very interested in your research, particularly in [specific area of research or project].

I would love to learn more about your experience in the lab. Would you be available for a quick Zoom call?

Thank you for your time, and I look forward to hearing from you!

Best,
X`,
};

export const additionalExamples = {
  title: 'More examples of statements of purpose and research statements',
  description:
    'A curated database of NSF Graduate Research Fellowship statements of purpose and research statements from successful applicants.',
  href: 'https://docs.google.com/spreadsheets/d/1xoezGhbtcpg3BvNdag2F5dTQM-Xl2EELUgAfG1eUg0s/edit?gid=0#gid=0',
};

export const nsfFeedbackLink = {
  title: 'Feedback on my NSF application',
  href: 'https://drive.google.com/file/d/1SDwv9NpNkRcuPo3tuy7pCnTAnBKGSJPA/view',
};
