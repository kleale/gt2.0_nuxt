<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <div class="grid grid-cols-7 gap-3 pt-3">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="About">
            <article class="prose p-5 max-w-none text-base-content">
              <h1>About</h1>
              <p>GT (game-tournaments.com) – eSports project about the most popular PC games. At this point of time Dota 2 and CS:GO are the main verticals presented on the site. Other games should be coming soon.</p>
              <hr />
              <p>GT helps you to be always in the last cyber sport trends: get info about tournaments being held or planned, about matches being broadcasted today or in the coming days. Here at GT we have one of the biggest esport video archive.</p>
              <hr />
              <p>Here you can get the most detailed information about the esport teams: squads, matches, rating, team history and even the whole team revenue. We also offer you the fulfilled information about the players: tournaments activity, actual team, statistics of all games and characters. You can find the video of the games in which the player was involved.</p>
              <hr />
              <p>Don’t know the best way to bet? Go straight to our predictions section for the upcoming matches. All tips are being made by other people therefore you can choose the best handicappers for you. Or you can make your own predictions: share right on the site. Try it right now!</p>
            </article>
          </CommonBlocklayout>
        </div>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="Menu">
            <ul class="menu bg-base-100 rounded">
              <li>
                <h2 class="menu-title">Some Title</h2>
                <a class="active">About GT</a>
                <ul>
                  <li><a>Child Item 1</a></li>
                  <li><a>Child Item 2</a></li>
                </ul>
              </li>
              <li><a>Terms of Use</a></li>
              <li><a>Advertising</a></li>
              <li><a>Partners</a></li>
              <li><a>Contact</a></li>
            </ul>
          </CommonBlocklayout>

          <CommonTextblocksmall>
            <template v-slot:header-extra>Some text </template>
            <p>All Dota 2 tournaments. List of all future and past tournaments, schedule of events and matches.</p>
          </CommonTextblocksmall>
          <BannersB330 />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 pt-5">
      <BannersB1190 />
    </div>
  </div>
</template>
