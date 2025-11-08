const projects = [
  { name: "Portfolio Website", desc: "My professional portfolio made with react and tailwind", image: "js/components/images/Portafolio.png", GHLink: "#", SiteLink: "https://barujharo.github.io/Portafolio-FernandoHaro/" },
  { name: "Weather App", desc: "Shows weather by location made with Javascript, HTML and CSS", image: "js/components/images/Weather.png", GHLink: "https://github.com/BarujHaro/Weather-app", SiteLink: "https://barujharo.github.io/Weather-app/"  },
  { name: "Battleship Game", desc: "Battleship game made with Javascript", image: "js/components/images/BS.png", GHLink: "https://github.com/BarujHaro/battleship_game", SiteLink: "https://barujharo.github.io/battleship_game/"  },
  { name: "Tik-tak-toe", desc: "Tiktaktoe game made with Javascript", image: "js/components/images/ttt.png", GHLink: "https://github.com/BarujHaro/tiktaktoe", SiteLink: "https://barujharo.github.io/tiktaktoe/"  },
  { name: "To-Do list", desc: "Todo list made with Javascript", image: "js/components/images/todo.png", GHLink: "https://github.com/BarujHaro/todolist", SiteLink: "https://barujharo.github.io/todolist/"  },
  { name: "Brain-stroke prediction", desc: "Web service used to detect brain stroke probabilities made with Python and FastAPI ", image: "js/components/images/Stroke.png", GHLink: "https://github.com/BarujHaro/Brain-stroke-prediction", SiteLink: "https://brain-stroke-prediction-xfqx.onrender.com/"  },
];

const worksDiv = document.getElementById("works");

projects.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="Project-img" 
           style="background-image:url(${p.image});
              background-size:cover;
              background-position:center;
              background-repeat:no-repeat;">
    </div>
    <div class="Project-title">
      <h3>${p.name}</h3>
      <div class="Project-icons">
        <a href="${p.GHLink}" >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="icons"/>
        </a>
        <a href="${p.SiteLink}" >
          <img src="js/components/images/external-link.png"  class="icons"/>
        </a>
      </div>

    </div>
    
    <p>${p.desc}</p>

  `;
  worksDiv.appendChild(card);
});