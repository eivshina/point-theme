/** Personal journey notes — translated from Katya's reflection lists. Tone: grounding, not boastful. */

export const journeyIntro =
  'This is mostly a note to myself. I have come a long way, and sometimes I forget how much I accomplished when the next challenge arrives. I already carry enough skills, knowledge, talent, and anything else needed to achieve everything I want';

export type JourneyMilestoneGroup = {
  label: string;
  items: string[];
};

export const journeyMilestones = {
  label: 'Some things I am proud of.',
  groups: [
    {
      label: 'Education & independence',
      items: [
        'Decided on my own to aim for a top US university, and got into Princeton without private tutoring, college consulting, family support, etc',
        'Moved to the US alone at seventeen for Princeton.',
        'Learned English from scratch.',
        'Won the green card lottery and navigated the entire process alone.',
        'Got into Harvard for a PhD. A woman in science, still here.',
      ],
    },
    {
      label: 'Research & science',
      items: [
        'Pursued astronomy in high school when no one understood why (it was too abstract and out of this world for people who surrounded me).',
        'Presented a research project to the Prime Minister of India at sixteen.',
        'Co-discovered an exoplanet and published a paper at nineteen.',
        'Wrote a senior thesis in pure mathematics at Princeton.',
        'Took courses with some of the best professors in math and physics.',
        'Kept doing research despite discouraging comments from professors.',
        'Presented at an international astrophysics conference in Las Vegas and met Konstantin Batygin in person.',
        'Won the Manfred Pyka Memorial Prize in Physics at Princeton for excellence in coursework and research promise.',
        'Won a prestigious NSF Graduate Research Fellowship.',
        'Apple ML internship: the first undergraduate intern in my group, not a PhD student. Presented my work to the VP of Camera & Photos and received a return offer.',
        'Self-taught machine learning starting at 17 yo.',
        'Worked with professors at Princeton, Harvard, and MIT.',
      ],
    },
    {
      label: 'Ukraine & service',
      items: [
        'After the war began: co-founded a Princeton student organization, served as president for a year, and led fundraising for Ukrainian refugees.',
        'Gave speeches at large campus concerts for refugee fundraising.',
        'Founded and directed a mentorship program pairing fifty Ukrainian students with mentors from Princeton, Harvard, and MIT.',
        'Donated to help Ukrainian refugees.',
      ],
    },
    {
      label: 'Creative & public work',
      items: [
        'Taught seminars at Yale Young Global Scholars.',
        'Started a blog and kept going when YouTube showed no results for a long time.',
      ],
    },
    {
      label: 'Personal growth',
      items: [
        'Graduated from six years of music school, play domra, and won twenty-plus regional and national music competitions.',
        'Learning to dance (1-3 dance classes every week)',
        'Staying in touch with mentors who shaped me, starting from middle school.',
      ],
    },
  ] satisfies JourneyMilestoneGroup[],
};

export const journeyQualities = {
  label: 'Who I became along the way',
  intro: 'Not résumé lines. Things I want to remember on hard days.',
  items: [
    'Goal-driven. I know how to dream.',
    'I walk my own path instead of copying what everyone around me is doing.',
    'Stubborn in a good way: I can keep working when the first attempt fails.',
    'Generous, sometimes to my own detriment.',
    'A sense of style I am quietly proud of.',
    'A musical ear from years of practice.',
    'Fun, or so my friends claim.',
    'I can reach out and ask for help.',
    'I listen more than I talk, and I try to listen well.',
    'Polite, tolerant, and able to make room for people who show up differently.',
    'I can usually find one trait in a person that genuinely inspires me.',
    'I have moved across fields: astronomy, physics, pure math, machine learning.',
    'I love learning and putting knowledge into real projects.',
    'I can cheer up friends when they are low.',
    'Humble enough to know this list is also incomplete.',
  ],
};

export const journeySkills = {
  label: 'What I bring to the work',
  intro: 'Skills and strengths that show up for students, collaborators, and audiences.',
  items: [
    'Organizing events, including a 150-person anniversary program for Ukraine.',
    'Writing email newsletters and keeping communities informed.',
    'Building student organizations from zero.',
    'Reaching out to people and inviting them to speak or collaborate.',
    'Working with university administrators to secure funding for campus programs.',
    'Running projects with students across different universities.',
    'Public speaking on stage, even when it scares me.',
    'Organized, disciplined, and able to work under stress.',
    'Flexible when plans change mid-flight.',
    'Research: asking questions, reading papers, pushing through ambiguity.',
    'Taking on hard projects without waiting for permission.',
    'Creating space for others to share their perspective.',
    'Breaking down concepts that look impossible at first glance.',
    'Patient enough to know good results usually take time.',
    'Leading teams and keeping people aligned.',
    'Learning quickly and focusing deeply.',
    'Creative problem-solving when the obvious path does not exist.',
    'Inclusive across backgrounds and experience levels.',
    'Grounded math, physics, and machine learning knowledge.',
    'Analytical thinking paired with a down-to-earth, relatable voice.',
    'Presenting technical work clearly to mixed audiences.',
    'Pursuing ideas others do not see yet, and staying with them.',
    'Admitting mistakes, apologizing, and giving people another chance.',
  ],
};
