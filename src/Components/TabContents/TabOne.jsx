const TabOne = () => {
  const career = [
    {
      id: "Opportunity",
      year: "04/2021 – 12/2021",
      title: "Junior Web Developer,",
      company: "Training Program, Opportunity,",
      location: "Zürich",
      description: [
        {
          department: "",
          tasks: "",
        },
      ],
    },
    {
      id: "Zuri",
      year: "10/2019 – 03/2021",
      title: "",
      company: "",
      location: "",
      description: [
        {
          department: "",
          tasks: "Acclimatization in Switzerland and language acquisition",
        },
      ],
    },
    {
      id: "AESI2",
      year: "07/2015 – 09/2019",
      title: "Geological & Environmental Technician,",
      company: "Associated Earth Sciences, Inc.,",
      location: "USA",
      description: [
        {
          department: "Environmental Services",
          tasks: [
            "Phase I Environmental Site Assessments",
            "Soil and Groundwater Quality field work and reports",
            "Erosion and Sediment Control Monitoring",
            "Environmental soil vapour monitoring",
          ],
        },
        {
          department: "Geotechnical Services",
          tasks: ["Construction monitoring", "Groundwater monitoring"],
        },
      ],
    },
    {
      id: "USA",
      year: "04/2015 – 06/2015",
      title: "",
      company: "",
      location: "",
      description: [
        {
          department: "",
          tasks: "Return to the USA",
        },
      ],
    },
    {
      id: "EXP",
      year: "07/2008 – 03/2015",
      title: "Geological & Environmental Technician,",
      company: "exp Services Inc,",
      location: "Canada",
      description: [
        {
          department: "Environmental Services",
          tasks: [
            "Phase I Environmental Site Assessments",
            "Detailed Site Investigations",
            "Soil and Groundwater Quality field work and reports",
            "Department AutoCAD drafter",
            "Erosion and Sediment Control plans and monitoring program development",
            "Environmental soil vapour monitoring",
          ],
        },
        {
          department: "Geotechnical Services",
          tasks: [
            "Construction monitoring",
            "QA/QC for the Rockfall Hazard Rating Assessment for British Columbia, from Parallel 49 to Quesnel",
          ],
        },
      ],
    },
    {
      id: "Canada",
      year: "2008",
      title: "",
      company: "",
      location: "",
      description: {
        department: "",
        tasks: "Moved to Canada",
      },
    },
    {
      id: "AESI1",
      year: "05/2005 – 06/2008",
      title: "Geological Technician,",
      company: "Associated Earth Sciences, Inc,",
      location: "",
      description: [
        {
          department: "Geotechnical Services",
          tasks: "Construction monitoring",
        },
      ],
    },
    {
      id: "Japan",
      year: "2004 – 2005",
      title: "",
      company: "",
      location: "",
      description: {
        department: "",
        tasks: "Study Abroad in Kyoto, Japan",
      },
    },
];

  return (
    <div className="Tab1">
        {career.map((entry) => (
          <div className="content-container">

          <p  className="career">{ entry.year }</p>

          <ul className="job">
            <li>
              <span>{ entry.title }</span> {entry.company} {entry.location}
            </li>
            
          </ul>
          
          </div>


        ))}

          
         
        


      


      











    </div> 
  );
};

export default TabOne;
