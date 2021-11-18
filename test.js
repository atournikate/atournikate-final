const jobFactory = (id, years, title, company, location) => {
  return {
    id,
    years,
    title,
    company,
    location,
    description: {},
  };
};

const Opportunity = jobFactory(
  "OPZ",
  "04/2021 – 12/2021",
  "Junior Web Developer",
  "Training Program, Opportunity",
  "Zürich"
);
Opportunity.description = {
  department() {
    return "";
  },
  task() {
    return "Eight month training program covering HTML, CSS/Sass, JavaScript, PHP, Laravel, MySQL, WordPress, and more";
  },
};

// console.log(Opportunity.description.task());

const Schweiz = jobFactory("ZuriMove", "10/2019 – 03/2021", "", "", "");
Schweiz.description = {
  deparment() {
    return "";
  },
  task() {
    return "Acclimatization in Switzerland and language acquisition";
  },
};

const AESI2 = jobFactory(
  "AESI2",
  "07/2015 – 09/2019",
  "Geological & Environmental Technician",
  "Associated Earth Sciences, Inc.",
  "USA"
);
AESI2.description = {
  department() {
    return ["Environmental Services", "Geotechnical Services"];
  },
  task() {
    return [
      [
        "Phase I Environmental Site Assessments",
        "Soil and Groundwater Quality field work and reports",
        "Erosion and Sediment Control Monitoring",
        "Environmental soil vapour monitoring",
      ],
      ["Construction monitoring", "Groundwater monitoring"],
    ];
  },
};

//console.log(AESI2.description.department()[0]);
//console.log(AESI2.description.task()[0][0]);

const USA = jobFactory("USAMove", "04/2015 – 06/2015", "", "", "");
USA.description = {
  department() {
    return "";
  },
  task() {
    return "Return to the USA";
  },
};

const EXP = jobFactory(
  "EXP",
  "07/2008 – 03/2015",
  "Geological & Environmental Technician",
  "exp Services Inc",
  "Canada"
);
EXP.description = {
  department() {
    return ["Environmental Services", "Geotechnical Services"];
  },
  task() {
    return [
      [
        "Phase I Environmental Site Assessments",
        "Detailed Site Investigations",
        "Soil and Groundwater Quality field work and reports",
        "Drafting Services",
        "Erosion and Sediment Control plans and monitoring program development",
        "Environmental soil vapour monitoring",
      ],
      [
        "Construction monitoring",
        "Drafting Services",
        "QA/QC for the Rockfall Hazard Rating Assessment for British Columbia, from Parallel 49 to Quesnel",
      ],
    ];
  },
};

const Canada = jobFactory("CAMove", "2008", "", "", "");
Canada.description = {
  department() {
    return "";
  },
  task() {
    return "Moved to Canada";
  },
};

const AESI1 = jobFactory(
  "AESI1",
  "05/2005 – 06/2008",
  "Geological Technician",
  "Associated Earth Sciences, Inc",
  "USA"
);
AESI1.description = {
  department() {
    return "Geotechnical Services";
  },
  task() {
    return "Construction monitoring";
  },
};

const Japan = jobFactory("Japan", "2004 – 2005", "", "", "Japan");
Japan.description = {
  department() {
    return "";
  },
  task() {
    return "Study Abroad in Kyoto";
  },
};

let career = [];

career.push(Opportunity, Schweiz, AESI2, USA, EXP, Canada, AESI1, Japan);

console.log(career);

// let jobYears = career.forEach;

// console.log(jobYears.years);

// const jobDescription = [];

// career.map(function (x) {
//   jobDescription.push(...x.description);
// });

// for (let i = 0; i < career.length; i++) {
//   //   //   // const jobYear = career[i].year;
//   //   //   // const jobTitle = career[i].title;
//   //   //   // const jobCompany = career[i].company;
//   //   //   // const jobLocation = career[i].location;
//   //   //   // const jobDescription = career[i].description;

// }

// console.log(Object.values(career));
