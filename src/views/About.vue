<template>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div class="cadre">
        <p>
      This is a  hybride mobile application built with the Vue.js framework.
It offers a list Rearrangement.
The user can create his own lists ,name them and fill them with the tasks he needed to be done .
Few more options are availabe such as modifying the todos and lists ,deleting and updating them
The user must create an account  and sign in securely with a password          <br />
        
        </p>
        <ul align='left'> <h3 >The tasks achieved:</h3>  
            
            <li>
              Creation of account 
            </li>
                 <li>
                    Authentification in API 
                </li>
                <li>
                  Consult, Create and delete of todoList
                  </li>
                  <li>
                    Consult, Create, modify and delete of ToDo
                    </li>
          </ul>
            <ul align='left'> <h3 >Resources used:</h3>  
            
            <li>
              FONT AWESOME ICON https://www.npmjs.com/package/@fortawesome/vue-fontawesomes 
            </li>
            <li>
               Router folder https://router.vuejs.org/api/#mode
              </li>
                 <li>
                   NavBar https://codepen.io/mutedblues/pen/MmPNPG
                </li>
                <li>
                    SideBar https://www.codingnepalweb.com/2020/04/side-navigation-menu-bar-in-html-css.html
                  </li>

          </ul>
      </div>
  <br>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="../assets/Hamza.png" alt="Hamza" style="width: 100%" />
            <div class="container">
              <p class="title">ABOUHAMMADI HAMZA</p>
              <p class="email">22009791@etu.unicaen.fr</p>
              <a
                href="https://www.linkedin.com/in/hamza-abouhammadi"
                target="_blank"
              >
                <input class="boutton-lien" type="button" value="Contact" />
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="../assets/Kamel.png" alt="Kamel" style="width: 100%" />
            <div class="container">
              <p class="title">ABBAD KAMEL</p>
              <p class="email">21911536@etu.unicaen.fr</p>
              <a href="https://www.linkedin.com/in/abbad-kamel" target="_blank">
                <input class="boutton-lien" type="button" value="Contact" />
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="../assets/Imene.png" alt="Imene" style="width: 100%" />
            <div class="container">
              <p class="title">BESSAA IMENE</p>
              <p class="email">22014452@etu.unicaen.fr</p>
              <a
                href="https://www.linkedin.com/in/imene-bessaa-320601204/"
                target="_blank"
              >
                <input class="boutton-lien" type="button" value="Contact" />
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="../assets/Lahcene.png"
              alt="Lahcene"
              style="width: 100%"
            />
            <div class="container">
              <p class="title">BOUSADIA LAHCENE</p>
              <p class="email">21911132@etu.unicaen.fr</p>
              <a
                href="https://www.linkedin.com/in/lahcene-bousadia/"
                target="_blank"
              >
                <input class="boutton-lien" type="button" value="Contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
@import "../components/app.css";
</style>