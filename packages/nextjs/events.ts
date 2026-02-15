export type ISODate = `${number}-${number}-${number}`;

export type Event = {
  title: string;
  location: string;
  description: string;
  // dateStart is required for events to be displayed
  dateStart: ISODate;
  // can be null if it's same as dateStart
  dateEnd?: ISODate;
};

export const events: Event[] = [
  {
    title: "University of California, Berkeley",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-07-12",
  },
  {
    title: "University of Southern California",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-07-18",
  },
  {
    title: "University of Illinois",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-07-22",
  },
  {
    title: "University of Texas at Austin",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-07-29",
  },
  {
    title: "University of Colorado",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-01",
  },
  {
    title: "University of Oxford",
    location: "United Kingdom",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-05",
  },
  {
    title: "UNAM",
    location: "Mexico",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-09",
  },
  {
    title: "Xavierian Pontifical University",
    location: "Colombia",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-12",
  },
  {
    title: "EPFL",
    location: "Switzerland",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-16",
  },
  {
    title: "Bocconi University",
    location: "Italy",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-20",
  },
  {
    title: "University of Turin",
    location: "Italy",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-24",
  },
  {
    title: "FIT BUT Brno",
    location: "Czech Republic",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-28",
  },
  {
    title: "DeKUT",
    location: "Kenya",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-08-30",
  },
  {
    title: "CTU Prague",
    location: "Czech Republic",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-01",
  },
  {
    title: "PSITE Mindanao",
    location: "Philippines",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-03",
  },
  {
    title: "IIT Delhi",
    location: "India",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-04",
  },
  {
    title: "University of Waterloo",
    location: "Canada",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-05",
  },
  {
    title: "IIT Dhanbhad",
    location: "India",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-07",
  },
  {
    title: "University of Dalhousie",
    location: "Canada",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-08",
  },
  {
    title: "University of Nigeria Nsukka (UNN)",
    location: "Nigeria",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-10",
  },
  {
    title: "University of Nigeria Enugu Campus (UNEC)",
    location: "Nigeria",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-12",
  },
  {
    title: "Enugu State University of Science & Technical",
    location: "Nigeria",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-14",
  },
  {
    title: "GA Tech",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-18",
  },
  {
    title: "KAIST",
    location: "South Korea",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-19",
  },
  {
    title: "MEF Üniversitesi",
    location: "Türkiye",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-25",
  },
  {
    title: "University of Minnesota",
    location: "USA",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-25",
  },
  {
    title: "University of Málaga",
    location: "Spain",
    description: "We'll learn how to start developing on Ethereum and how to navigate its ecosystem.",
    dateStart: "2025-09-25",
  },
  {
    title: "BITs Pilani",
    location: "India",
    description: "We'll show off SpeedRun Ethereum and dive into vibe coding onchain apps and the art of one-shotting.",
    dateStart: "2025-09-26",
  },
];
