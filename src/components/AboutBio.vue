<template>
  <pages-container>
    <template #left>
      <div class="about">
        <ol>
          <li>/**</li>
          <li>* <strong>About me</strong></li>
          <li>* Welcome to my profile!</li>
          <li>* I'm thrilled that you're interested in learning more</li>
          <li>* about, me, my skills and my experience.</li>
          <li>* Allow me to give you a glimpse into my journey.</li>

          <li>* <b>Education</b></li>
          <li>* I completed my undergraduate studies in Computer Science.</li>
          <li>* At Mansoura University in 2021.</li>

          <li>* <b>Vue.js Proficiency</b></li>
          <li>* With an extensive background in Vue.js development,</li>
          <li>* I have a deep understanding of its core concepts,</li>
          <li>* ecosystem, and best practices</li>
          <li>* I've built numerous web applications using Vue.js,</li>
          <li>* from small prototypes to large-scale enterprise solutions.</li>

          <li>* <b>HTML, CSS, and JavaScript Mastery</b></li>
          <li>* To complement my Vue.js expertise, I possess a strong</li>
          <li>* foundation in HTML, CSS, and JavaScript. This knowledge</li>
          <li>* enables me to craft clean and efficient code.</li>
          <li>**/</li>
        </ol>
      </div>
    </template>
    <template #right>
      <div class="experience">
        <h4>// Code snippet showcase:</h4>
        <div class="snippet">
          <p>// Small tip, Have a good day :)</p>
          <div class="tempalte-content">
            <p>&lt;<span class="pink">template</span>&gt;</p>
            <div class="div-container">
              <p>&lt;<span class="pink">div</span>&gt;</p>
              <div class="p-container">
                <span>&lt;<span class="pink">p</span>&gt;</span>
                <span>&#123;&#123; message &#125;&#125;</span>
                <span>&lt;/<span class="pink">p</span>&gt;</span>
              </div>
              <p>&lt;/<span class="pink">div</span>&gt;</p>
            </div>
            <p>&lt;/<span class="pink">template</span>&gt;</p>
          </div>
          <div class="script-content">
            <p>
              &lt;<span class="pink"
                >script <span class="blue">setup</span></span
              >&gt;
            </p>
            <p>
              <span class="purple">import</span
              ><span>
                <span class="green"> &#123;</span> <span class="gray">ref</span
                ><span class="green"> &#125;</span></span
              >
              <span class="purple"> from</span>
              <span class="orange"> "vue"</span>;
            </p>
            <p class="white">
              <span class="blue">const </span>
              <span class="gray">message </span>=
              <span class="orange">ref(</span> "In Vue's Composition API, you
              can define reactive state using the
              <span class="ref">'ref()'</span> function. It allows you to easily
              track and modify variables in your application. Combined with
              computed properties and methods, it provides a powerful way to
              manage your application's state and logic. Embrace the Composition
              API to write clean and organized code in Vue.js"
              <span class="orange"> );</span>
            </p>
            <p>&lt;/<span class="pink">script</span>&gt;</p>
          </div>
        </div>
      </div>
    </template>
  </pages-container>
</template>
