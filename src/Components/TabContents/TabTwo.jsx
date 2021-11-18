import Star from "../Star"

const TabTwo = () => {
  const skills = [
    {
      id: "Languages", 
      items: [
        {
          skill: "English",
          level: 5,
        },
        {
          skill: "German",
          level: 3,
        },
        {
          skill: "Japanese",
          level: 2,
        }
      ]}, 
    {
      id: "IT Skills", 
      items: [
        {
          skill: "Microsoft Office Suite",
          level: 5,
        },
        {
          skill: "AutoCAD Civil 3D",
          level: 3,
        },
        {
          skill: "Adobe Photoshop",
          level: 4,
        },
        {
          skill: "Adobe Illustrator",
          level: 3,
        },
      ]},
      {
        id: "Soft Skills",
        items: [
          {
            skill: "Self-Motivation",
            level: 5,
          },
          {
            skill: "Self-management",
            level: 5,
          },
          {
            skill: "Decision Making",
            level: 5,
          },
          {
            skill: "Critical Thinking",
            level: 5,
          },
          {
            skill: "Active Listening",
            level: 5,
          },
          {
            skill: "Conflict Management",
            level: 5,
          },
          {
            skill: "Teamwork",
            level: 5,
          },
          {
            skill: "Empathy",
            level: 5,
          },
          {
            skill: "Analysis",
            level: 5,
          },
          {
            skill: "Planning",
            level: 5,
          },
          {
            skill: "Ititiative",
            level: 5,
          },
          {
            skill: "Brainstorming",
            level: 5,
          },
          {
            skill: "Imagination",
            level: 5,
          },
          {
            skill: "Design",
            level: 4,
          },
          {
            skill: "Dependability",
            level: 5,
          },
          {
            skill: "Work Ethic",
            level: 5,
          },
          {
            skill: "Time Management",
            level: 5,
          },
          {
            skill: "Humor",
            level: 5,
          },
          {
            skill: "Diplomacy",
            level: 5,
          },
          {
            skill: "Sensitivity",
            level: 5,
          },
          {
            skill: "Patience",
            level: 5,
          },
          {
            skill: "Mentoring",
            level: 5,
          },
          {
            skill: "Positive Reinforcement",
            level: 5,
          },
          {
            skill: "Stress Management",
            level: 4,
          },
          {
            skill: "Introspection",
            level: 5,
          },
          {
            skill: "Acuity",
            level: 5,
          },
        ]},
      {
        id: "Programming Languages",
        items: [
          {
            skill: "HTML",
            level: 5,
          },
          {
            skill: "CSS/Sass",
            level: 4,
          },
          {
            skill: "JavaScript",
            level: 4,
          },
          {
            skill: "PHP",
            level: 3,
          },
          {
            skill: "React",
            level: 3,
          },
          {
            skill: "Vue Js",
            level: 3,
          },
          {
            skill: "Laravel",
            level: 3,
          },
          {
            skill: "SQL",
            level: 4,
          },
        ]},
  ];

  const filledStars = (level) => {
    return (
      <div className="starline">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      
    )
  }


  return (
    <div className="Tab2">
      {filledStars(() => {
        return filledStars;
      })}

      {skills.filter(category => category.id === "Languages").map((lang) => (

        <div className="language">
          <h3>{lang.id}</h3>

          {lang.items.map((skills) => (
            <ul>
              <li className="starline">{skills.skill}</li>
            </ul>
          ))}

          
         
        </div>
        

        
      ))}

      



      








      
{/*       
      {skillz.map((entries) => (
        <div className="content-container">

            {entries.filter((entry) => entry.category === "Language"(
              
              <div className="lang">
              </div>
            ))}
        
        </div>

      ))}

 */}


      
    </div>
  );
};

export default TabTwo;
