<template>
  <div>
    <h1>Матч NP vs MarsBet на BBD 2024 Winter</h1>
    <h3>Dota 2 • Open Qualifier 1 • Final • 4 января, 16:00 EEST • Best of 3</h3>

    <div v-for="(match, index) in matches">
      <MatchesRow :match="match" />
    </div>

    <div class="stage" id="stages">
      <a class="stat" href="/ru/dota-2/player?event=betboom-dacha-2024-winter-8623"><span>Статистика</span></a>
      <button class="tol" style="display: none"></button>
      <nav>
        <div>
          <a class="s-pass" href="/ru/dota-2/betboom-dacha-2024-winter"><span>Турнир</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/america"><!--<img src="/img/dummy/flag2.png" alt="">--><span>America</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/western-europe" class="active"><!--<img src="/img/dummy/flag2.png" alt="">--><span>Western Europe</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/eastern-europe"><!--<img src="/img/dummy/flag2.png" alt="">--><span>Eastern Europe</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/china-and-sea"><!--<img src="/img/dummy/flag2.png" alt="">--><span>China &amp; SEA</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/mena"><!--<img src="/img/dummy/flag2.png" alt="">--><span>MENA</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/group-stage"><!--<img src="/img/dummy/flag2.png" alt="">--><span>Group Stage</span></a>
          <a href="/ru/dota-2/betboom-dacha-2024-winter/playoff"><!--<img src="/img/dummy/flag2.png" alt="">--><span>Playoff</span></a>
        </div>
      </nav>
      <button class="tor" style="display: none"></button>
    </div>
    <MatchesMatchPicksNBans />
  </div>
</template>

<script lang="ts">
import { Dota2, CS2, Hs, Lol, Ow, Pubg, Fortnite } from "@/assets/img/icons/";
const matches = [{ id: 0, t1: "Astralis", t1Icon: "/img/none/teamNoLogo.svg", t2: "The Mongolz", t2Icon: "https://escorenews.com/media/logo/_60/t5270.webp", game: Dota2, gameId: "1", score: "1:0", date: "Oct 14", time: "11:34", isLive: true, map: 1, event_id: 1, eventName: "ESEA Open Season 47", eIcon: "/img/none/tourNoLogo.svg", type: "BO3" }];
</script>
