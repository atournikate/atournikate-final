import React from 'react';

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
            skill: "Introspection",
            level: 5,
          },
          {
            skill: "Acuity",
            level: 5,
          },
          {
            skill: "Design",
            level: 4,
          },
          {
            skill: "Stress Management",
            level: 4,
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

  function Star(props) {
    const { fill = 'none' } = props;
    return (
        <svg className="star" fill={fill} stroke="#21304a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
    
    );
}

  function LevelIcon(props) {
    const {index, level} = props;
    const fill = level >= index ? "salmon" : "none";

    return (
        <div>
            <Star fill={fill}/>
        </div>
    )
}


  return (
    <div className="Tab2">

      <div className="content-container">
    

          {skills.filter(category => category.id === "Languages").map((lang) => (
            <div className="language">

              <h3>{lang.id}</h3>

              {lang.items.map((skills) => (
                <ul>
                  <li className="skillLevel">{skills.skill}
                
                    <ul>
                      <li className="starLine">
                      {[1,2,3,4,5].map((index) => {
                        
                        return (
                          <LevelIcon 
                          index={index}
                          level={skills.level}
                          />
                        )
                      })}
                      </li>
                    </ul>
                    </li>
                </ul>
              ))}
            
            </div>

          ))}

            {skills.filter(category => category.id === "IT Skills").map((it) => (
              <div className="itSkills">
                <h3>{it.id}</h3>

                {it.items.map((skills) => (
                  <ul>
                    <li className="skillLevel">
                      {skills.skill}
                      <ul>
                        <li className="starLine">
                        {[1,2,3,4,5].map((index) => {
                          return (
                            <LevelIcon 
                            index={index}
                            level={skills.level}
                            />
                          )
                        })}
                        </li>
                      </ul>
                    </li>
                  </ul>
                ))}
              </div>
            ))}


            {skills.filter(category => category.id === "Programming Languages").map((program) =>(
                          <div className="programming">
                            <h3>{program.id}</h3>

                            {program.items.map((skills) => (
                              <ul>
                                <li className="skillLevel">
                                  {skills.skill}
                                  <ul>
                                    <li className="starLine">
                                      {[1,2,3,4,5].map((index) => {
                                        return (
                                          <LevelIcon index={index} level={skills.level} />
                                        )
                                      })}
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            ))}
                          </div>
                  ))}


        

        
        {skills.filter(category => category.id === "Soft Skills").map((soft) =>(
          <div className="softSkills">
            <h3>{soft.id}</h3>

            {soft.items.map((skills) => (
              <ul>
                <li className="skillLevel">
                  {skills.skill}
                  <ul>
                    <li className="starLine">
                      {[1,2,3,4,5].map((index) => {
                        return (
                          <LevelIcon index={index} level={skills.level} />
                        )
                      })}
                    </li>
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        ))}
        </div>


      

      






    </div>
  );
};

export default TabTwo;
