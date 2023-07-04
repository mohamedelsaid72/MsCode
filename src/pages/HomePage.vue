<template>
  <div class="home-page">
    <div class="container">
      <div class="container-text">
        <div class="pre-content">
          <p class="iam">Hi all. I am</p>
          <p class="headline-text">Mohamed Elsayed</p>
          <p class="subheadline-text">> Front-end developer</p>
        </div>
        <div class="quotes">
          <p class="code-snippet-text">
            // There is always one more bug to fix
          </p>
          <p class="code-snippet-text">
            // Make it work, make it right, make it fast
          </p>
        </div>
        <a
          href="https://github.com/mohamedelsaid72"
          rel="noopener noreferrer"
          target="_blank"
          title="github"
          class="githublink"
          ><span class="blue">const </span>
          <span class="green">githubLink</span> =
          <span class="orange">"<span>github.com/mohamedelsaid72</span>"</span>;
        </a>
      </div>
      <!-- <div class="container-image">
        <div class="background"></div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  background-color: var(--primary-bg);
  z-index: 0;
  padding: 2rem 0;
}
.home-page::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 25%;
  top: 25%;
  left: 50%;
  border-radius: 50% 22% 40% 80%;
  filter: blur(75px);
  background: radial-gradient(circle at 50% 50%, #1b615a, #1b615a);
}
.home-page::before {
  position: absolute;
  content: "";
  width: 25%;
  height: 25%;
  bottom: 15%;
  left: 60%;
  border-radius: 50% 22% 40% 80%;
  filter: blur(75px);
  background: radial-gradient(circle at 50% 50%, #1a2d5e, #1a2d5e);
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}
.container .pre-content {
  line-height: 1.2;
}
.container .subheadline-text {
  color: var(--secondary-blue);
}
.container .quotes {
  margin-top: 4rem;
  line-height: 2.2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.container .quotes .code-snippet-text {
  color: var(--secondary-gray);
}
.container .githublink {
  color: var(--secondary-white);
  line-height: 2;
}
.container .githublink .orange span {
  text-decoration: underline;
}
.home-page .container-image {
  position: relative;
  background-image: url(../assets/images/Background.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 450px;
  width: 450px;
  max-height: 450px;
  height: 450px;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
  padding: 2rem;
}
.home-page .container-image .background {
  background-color: var(--primary-bg-dark);
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media Queries */
@media (max-width: 1200px) {
  .home-page .container {
    justify-content: center;
  }
  .home-page .container-image {
    display: none;
  }
}
@media (max-width: 480px) {
  .container .quotes {
    margin-top: 3rem;
  }
}
</style>
