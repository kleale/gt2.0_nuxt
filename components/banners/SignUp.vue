<template>
  <div class="signupBlock flex flex-col gap-6 p-5 md:flex-row md:gap-32 md:p-10">
    <div class="flex flex-col gap-6">
      <h2>Sign up and get the opportunity to make money on your tips.<br/> Check your knowledge in eSports!</h2>
      <p>Dota 2, released in 2011, quickly became a worthy successor to DotA AllStars, WarCraft III custom map, not just in its player base, but in terms of esports. It’s one of the most popular esports titles, with millions of fans and teams. Esports dota 2 is an International series of events known worldwide. It was the first esports event with a million dollars in prize money. Nowadays, watching dota 2 esports live is a breathtaking activity full of tension and vivid emotions.</p>
    </div>
    <div class="flex md:flex-row md:px-16 items-center">
      <button class="btn btn-lg rounded-full text-primary btn-outline hover:bg-primary hover:border-primary signupbutton">Sign&nbsp;up</button>
    </div>
  </div>
</template>

<style scoped>
.signupBlock {
  border-radius: 5px;
  background: linear-gradient(0deg, rgba(12, 17, 22, 0.8) 0%, rgba(12, 17, 22, 0.8) 100%), url("~/assets/img/bg_signup.png") 50% 80% no-repeat, lightgray -109.251px -22.361px / 290.789% 109.114% no-repeat;

  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  h2 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    line-height: normal;
  }
  .signupbutton {
    color: #91cdd7;
    font-size: 24px;
    padding: 5px 40px;
  }
}
</style>
