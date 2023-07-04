<template>
  <footer>
    <div class="footer-first">
      <p>find me in:</p>
      <p>
        <a
          href="https://www.linkedin.com/in/mohamed-elsayed72/"
          rel="noopener noreferrer"
          target="_blank"
          title="linkedin"
          ><i class="ri-linkedin-fill"></i
        ></a>
      </p>
      <p>
        <a
          href="https://www.facebook.com/profile.php?id=100008125182310"
          rel="noopener noreferrer"
          target="_blank"
          title="facebook"
          ><i class="ri-facebook-fill"></i
        ></a>
      </p>
    </div>
    <div class="footer-last">
      <p>
        <a
          href="https://twitter.com/Mohamed72Elsaid"
          rel="noopener noreferrer"
          target="_blank"
          title="twitter"
          ><i class="ri-twitter-fill"></i
        ></a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid var(--border-gray);
}
footer .footer-first,
footer .footer-last {
  display: flex;
  align-items: center;
}
footer p {
  border-right: 1px solid var(--border-gray);
  padding: var(--button-padding);
  color: var(--secondary-white);
}
footer .footer-last p {
  border-right: none;
  border-left: 1px solid var(--border-gray);
}
footer p a {
  color: var(--secondary-white);
}
</style>
