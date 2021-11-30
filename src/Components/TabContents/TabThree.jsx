import React from 'react';
const TabThree = () => {
  const projectList = [
    {
      title: "GitHub",
      link: "https://github.com/atournikate",
      description: "My GitHub account, which is and will likely always be a work in progress."
    },
    { 
      title: "Vault Blog",
      link: "https://v-vault.vercel.app/",
      description: "This project was created following a tutorial by Traversy Media on how to build a blog project using Vue2 front-end and Firebase database back-end. Due to a pay wall issue, full execution of the authentication was not achievable; however, basic functionality and security seems to work. No credit can be taken for styling beyond photo selection and some minor color choices.",
    },
    {
      title: "Sketch Blog",
      link: "https://atournikate.tumblr.com/",
      gHub: "",
      description: "This is to provide an example of my artistic skills (which includes both cute and horror genre illustrations). Unfortunately, due to technical issues, this account is no longer active.",
    }

  ]


  return (
    <div className="Tab3">
      <h3>Projects</h3>

      <p>This list is subject to change as the portfolio expands. Links will open new tabs.</p>

      <div className="content-container">
        {projectList.map((entry) => (
          <div className="card">
            
            <a href={entry.link} target="_blank" className="entry">{entry.title}</a>
            <p>{entry.description}</p>
            
          </div>
        ))}
      </div>
      
      


    </div>
  );
};

export default TabThree;
