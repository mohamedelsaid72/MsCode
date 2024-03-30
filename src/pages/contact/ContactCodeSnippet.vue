<template>
  <div class="code-snippet">
    <ol>
      <li>
        <span class="purple">const </span>
        <span class="blue">button </span>
        <span class="purple">= </span>
        <span class="blue">document.querySelector</span>
        <span>(</span>
        <span class="orange">'#sendBtn'</span>
        <span>);</span>
      </li>
      <li></li>
      <li>
        <span class="purple">const </span>
        <span class="blue">button </span>
        <span class="purple">= </span>
        <span>{</span>
      </li>
      <li>
        <p class="marginLeft">
          <span class="blue">name: </span>
          <span class="orange name">"{{ enteredName }}"</span>,
        </p>
      </li>
      <li>
        <p class="marginLeft">
          <span class="blue">email: </span>
          <span class="orange">"{{ enteredName }}"</span>,
        </p>
      </li>
      <li>
        <p class="marginLeft">
          <span class="blue">message: </span>
          <span class="orange">"{{ enteredName }}"</span>
        </p>
      </li>
      <li><span>}</span></li>
      <li></li>
      <li>
        <span class="blue">button.addEventListener</span>
        <span>(</span>
        <span class="orange">'click'</span>,
        <span> ()</span>
        <span class="purple"> => </span>
        <span>{</span>
      </li>
      <li>
        <span class="blue marginLeft">form.send</span>
        <span>(</span>
        <span class="blue">message</span>
        <span class="blue">)</span>;
      </li>
      <li>
        <span>});</span>
      </li>
    </ol>
  </div>
</template>
