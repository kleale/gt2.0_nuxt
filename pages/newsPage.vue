<template>
  <div class="p-4 xl:p-0 xl:pt-4">
    <CommonBreadcrumbs />
    <div class="grid grid-cols-7 gap-3 pt-3">
      <div class="col-span-12 md:col-span-5">
        <div class="flex flex-col gap-3">
          <CommonBlocklayout header="News">
            <article class="prose p-5 max-w-none text-white">
              <h1>Pure~ reveals his is "not in CIS" amidst rumors of him joining Tundra</h1>
              <p>GT (game-tournaments.com) – eSports project about the most popular PC games. At this point of time Dota 2 and CS:GO are the main verticals presented on the site. Other games should be coming soon.</p>
              <div class="badge badge-lg badge-neutral">January 09, 16:31</div>

              <p><a href="/en/dota-2/team/betboom">BetBoom Team</a> inactive carry <a href="/en/dota-2/player/pure-ru">Ivan "Pure~" Moskalenko</a> mentioned he would play for a non-EEU Dota 2 team next season. On a recent stream, he said he "is not in CIS, of course." It sounded like a deliberate mistake to hype up his transfer, but could be a slip of the tongue as well.</p>
              <blockquote class="blockquote">
                <p>Who are the strongest CIS players? Guys, name me the strongest players in the CIS aside from <a href="/en/dota-2/team/spirit">Spirit</a>. <a href="/en/dota-2/player/dyrachyo">Dyrachyo</a> is the first one, he's right on the spot. Then me, of course. Well, I'm no longer in the CIS, of course... Oh, shit... Then Gleb [<a href="/en/dota-2/player/depressed-kid">Kiyotaka</a>], Romanych [<a href="/en/dota-2/player/ramzes">RAMZES</a>], Vetal [<a href="/en/dota-2/player/save">Save-</a>], everyone is there. And everyone is ranked 500, and I'm ranked 100. And now, I'll turn off the stream so that there is no VOD left.</p>
                <footer class="blockquote-footer">Ivan "Pure~" Moskalenko</footer>
              </blockquote>
              <p>Rumor has it Pure~ might end up in <a href="/en/dota-2/team/tundra">Tundra Esports</a>, initially reported by the editor of Metaratings.ru. On January 8, Tundra revealed <a href="/en/dota-2/player/mind-control">MinD_ContRoL</a>'s addition. If the information about the Russian turns out true, he will play in his original carry role.</p>
              <p>Pure~ spent most of last year in offlane, as they swapped positions with <a href="/en/dota-2/player/epileptick1d">Nightfall</a> after <a href="/en/dota-2/dpc-2023-major-2">Berlin Major.</a> He went inactive on December 24. The official reason was to take care of his health and have a break from professional Dota. BetBoom Team hasn't revealed his replacement yet.</p>
            </article>

            <div class="tags px-5">
              <i class="gti gti-hand-o-up"></i>
              <sapn>Source:</sapn>
              <a href="https://escorenews.com/en/dota-2/news/54683-pure-reveals-his-is-not-in-cis-amidst-rumors-of-him-joining-tundra?utm_source=www&amp;utm_medium=news&amp;utm_campaign=2&amp;utm_content=n54683" target="_blank">https://escorenews.com/</a>
            </div>

            <div class="tags px-5 pb-5">
              <IconTags filled class="inline-flex w-5" />
              <a class="badge badge-neutral inline-flex m-1 hover:badge-primary" href="/">The Berlin Major 2023</a>
              <a class="badge badge-neutral inline-flex m-1 hover:badge-primary" href="/">Tundra</a>
              <a class="badge badge-neutral inline-flex m-1 hover:badge-primary" href="/">BB</a>
              <a class="badge badge-neutral inline-flex m-1 hover:badge-primary" href="/">Pure~</a>
            </div>
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
          <BannersB330 />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 pt-5">
      <BannersB1190 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconTags } from "@/assets/img/icons/";
</script>
