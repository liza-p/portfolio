
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {
      portfolios: [
        {
          name: "node-express-handlebars", 
          github: "https://github.com/liza-p/node-express-handlebars",
          app_url: "https://travel-bucketlist.herokuapp.com/",
          img: "/img/travel.png"
        },
        {
          name: "mysql-node-express",
          github: "https://github.com/liza-p/mySQL-employee-tracker",
          img: "/img/employees.png"
        },
        {
          name: "express-note-taker",
          github: "https://github.com/liza-p/express-note-taker",
          app_url: "https://lizas-note-taker.herokuapp.com/",
          img: "/img/notetaker.png"
        },
        {
          name: "server-side-apis",
          github: "https://github.com/liza-p/Server-Side-APIs-Weather-Dashboard",
          app_url: "https://liza-p.github.io/Server-Side-APIs-Weather-Dashboard/",
          img: "/img/weather.png"
        },
        {
          name: "readme-generator",
          github: "https://github.com/liza-p/README-generator",
          img: "/img/readme.png"
        },
        {
          name: "node-inquirer",
          github: "https://github.com/liza-p/template-engine",
          img: "/img/team.png"
        },
        {
          name: "Playlist Generator",
          github: "https://github.com/liza-p/project-1",
          app_url: "https://liza-p.github.io/project-1/",
          img: "/img/playlist.png"
        },
        {
          name: "Happy Paw",
          github: "https://github.com/liza-p/project-2",
          app_url: "https://happypaw.herokuapp.com/",
          img: "/img/dog.png"
        },
        {
          name: "day-work-scheduler",
          github: " https://github.com/liza-p/day-work-scheduler",
          app_url: "https://liza-p.github.io/day-work-scheduler/",
          img: "/img/calendar.png"
        },
        {
          name: "password-generator",
          github: "https://github.com/liza-p/password-generator",
          app_url: "https://liza-p.github.io/password-generator/",
          img: "/img/password.png"
        }
      ]
    });
  });
};