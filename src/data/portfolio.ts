import { updatedPortfolioSections } from './portfolioContent'

export interface PortfolioSection {
  id: string
  title: string
  url: string
  content: string
}

export const GOOGLE_HOME_HTML = `
<div class="google-home">
  <div class="google-logo-area">
    <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
  </div>
  <form class="google-search-form" onsubmit="return false;">
    <input class="google-search-input" id="googleSearchInput" type="text" autocomplete="off" placeholder="Search the web" aria-label="Google search" />
    <div class="google-btns">
      <button type="button" class="google-btn" id="googleSearchBtn">Google Search</button>
      <button type="button" class="google-btn" id="googleLuckyBtn">I'm Feeling Lucky</button>
    </div>
  </form>
  <div class="google-footer">
    <span>Real Google results open in a new tab. Aaron's portfolio stays open here.</span>
  </div>
</div>
`

const extraPortfolioSections: PortfolioSection[] = [
  {
    id: 'hobbies',
    title: 'Hobbies',
    url: 'http://www.sharpxp.com/hobbies',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Hobbies &amp; Interests</h1><p class="subtitle">Life outside the lab</p></div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#9917;</div>
          <div class="hobby-content">
            <h2>Soccer</h2>
            <p>I've played soccer since I was 5 years old, growing up as a member of <strong>Memphis Football Club (MFC)</strong>, playing a year up on the club team that made it all the way to the <strong>National Championship</strong>.</p>
            <p>During my time at Ole Miss, I was one of <strong>three practice players for the Ole Miss NCAA Women's Soccer Team</strong> and was also a member of the <strong>Men's Club Team</strong>.</p>
            <div class="hobby-funfact">
              <span class="funfact-badge">Fun Fact</span>
              I've torn my ACL <strong>4 times</strong>. And yes, I'm still playing.
            </div>
            <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
              <img src="/images/ACL%20Picture.JPG" alt="ACL surgery photo" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Soccer-Picture.JPG" alt="Playing soccer" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#128424;&#65039;</div>
          <div class="hobby-content">
            <h2>3D Printing &amp; Modeling</h2>
            <p>3D printing is a core part of both my research and personal projects. I design in SolidWorks and Fusion 360, and print with both FDM and resin printers. I've printed everything from research enclosures and PCB mounts to custom assistive devices and personal creative projects.</p>
            <p>Some of my favorite prints include a <strong>3D version of Carcassonne</strong> (the board game), a <strong>3D-printed electric guitar</strong> (see Guitar section below), a <strong>TPU pickleball</strong>, a <strong>3D-printed blue horn bouquet from How I Met Your Mother</strong>, and a <strong>topographic map of Zelda: Breath of the Wild</strong>.</p>
            <p>One of my proudest builds was a custom <strong>How I Met Your Mother diorama</strong> I made for my girlfriend for Christmas - it's our favorite show. I custom-designed the circuit for the lighting, and custom-modeled many of the parts in the scene from scratch in SolidWorks.</p>
            <div class="media-placeholders" style="display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;">
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20light.JPG" alt="HIMYM diorama (lights on)" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20dark.JPG" alt="HIMYM diorama (lights off/dark)" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20parts.JPG" alt="HIMYM diorama - all parts laid out" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/3d-printed-pickleball.JPG" alt="3D-printed TPU pickleball" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Blue-Horn-Bouquet.JPG" alt="HIMYM blue horn bouquet" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/3d-map-legend-of-zelda-botw.PNG" alt="3D map of Zelda: Breath of the Wild" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127928;</div>
          <div class="hobby-content">
            <h2>Guitar</h2>
            <p>Beyond building them, I also play guitar. Whether it's unwinding after a long day in the lab or jamming with friends, playing guitar is one of my favorite creative outlets.</p>
            <p>I'm currently building a <strong>fully 3D-printed electric guitar</strong> from scratch. It's still a work in progress - I still need to paint it, add the neck, and wire up the electronics - but it's coming along nicely.</p>
            <div class="hobby-photo-placeholder">
              <div class="hobby-photo-frame" style="overflow:hidden;">
                <img src="/images/3d-printed%20guitar%20base.PNG" alt="3D Printed Electric Guitar (WIP)" style="display:block;width:100%;margin-top:-25%;margin-bottom:-25%;" onerror="this.parentElement.innerHTML='<div class=\\'hobby-photo-fallback\\'>&#127928;<br/><span>Guitar Photo</span></div>'" />
              </div>
              <p class="hobby-photo-caption">The 3D-printed electric guitar - work in progress!</p>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127925;</div>
          <div class="hobby-content">
            <h2>Music &amp; Concerts</h2>
            <p>I love music and going to live shows - I've probably been to over <strong>20 concerts</strong> in the past 3 years. There's nothing quite like hearing your favorite band live.</p>
            <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
              <img src="/images/Hippo-Campus%20Concert%201.png" alt="Hippo Campus concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Hippo-Campus%20Concert%203.JPEG" alt="Hippo Campus concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/flipturn%20concert.JPG" alt="flipturn concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127955;</div>
          <div class="hobby-content">
            <h2>Pickleball &amp; Staying Active</h2>
            <p>I love staying active, whether it's hitting the pickleball courts, spending time in the gym, or finding new ways to move. Pickleball has become a go-to for competitive fun without the full-contact toll on my much-repaired knees.</p>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127859;</div>
          <div class="hobby-content">
            <h2>Cooking</h2>
            <p>I enjoy cooking and trying new recipes. Some of my favorites to make include orange olive oil cake, shakshuka, homemade bagels, chicken pasta, and street tacos.</p>
            <div class="media-placeholders" style="display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;">
              <img src="/images/Orange%20Olive%20Oil%20Cake.PNG" alt="Orange olive oil cake" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Shakshuka.JPG" alt="Shakshuka" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Bagel.JPG" alt="Homemade bagel" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/chicken%20with%20pasta.JPG" alt="Chicken with pasta" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Street-Tacos.JPG" alt="Street tacos" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127918;</div>
          <div class="hobby-content">
            <h2>Rocket League</h2>
            <p>When I need some screen time that isn't code, I play <strong>Rocket League</strong>. I'm currently ranked <strong>Champion</strong>, the <strong>top 3.4 percentile</strong> of all players globally. It's basically soccer with rocket-powered cars, so it checks two boxes at once.</p>
            <div class="media-placeholders" style="margin:12px 0;">
              <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/rocket%20league%20clip.mp4" type="video/mp4">Hitting a clip in Rocket League</video>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127916;</div>
          <div class="hobby-content">
            <h2>Top 10 Movies</h2>
            <p>These titles can be found in the <strong>Video Player</strong> app on the desktop! Click any movie to open it.</p>
            <div class="media-list" style="display:flex;flex-direction:column;gap:10px;margin:12px 0;">
              <div data-open-video="/videos/Scott-Pilgrim-VS-The-World.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">1.</span><span style="flex:1;">Scott Pilgrim vs. the World</span><img src="/videos/Scott-Pilgrim-VS-The-World.png" alt="Scott Pilgrim vs. the World poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>scott-pilgrim.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Spider-Man-Across-The-Spider-Verse.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">2.</span><span style="flex:1;">Spider-Man: Across the Spider-Verse</span><img src="/videos/Spider-Man-Across-The-Spider-Verse.png" alt="Spider-Man: Across the Spider-Verse poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>spider-verse.jpg</em></div>'" /></div>
              <div data-open-video="/videos/The-Imitation-Game.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">3.</span><span style="flex:1;">The Imitation Game</span><img src="/videos/The-Imitation-Game.png" alt="The Imitation Game poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>imitation-game.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Moneyball.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">4.</span><span style="flex:1;">Moneyball</span><img src="/videos/Moneyball.png" alt="Moneyball poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>moneyball.jpg</em></div>'" /></div>
              <div data-open-video="/videos/My-Neighbor-Totoro.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">5.</span><span style="flex:1;">My Neighbor Totoro</span><img src="/videos/My-Neighbor-Totoro.png" alt="My Neighbor Totoro poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>totoro.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Labyrinth.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">6.</span><span style="flex:1;">Labyrinth</span><img src="/videos/Labyrinth.png" alt="Labyrinth poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>labyrinth.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Good-Will-Hunting.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">7.</span><span style="flex:1;">Good Will Hunting</span><img src="/videos/Good-Will-Hunting.png" alt="Good Will Hunting poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>good-will-hunting.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Star-Wars-Episode-III-Revenge-Of-The-Sith.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">8.</span><span style="flex:1;">Star Wars: Revenge of the Sith</span><img src="/videos/Star-Wars-Episode-III-Revenge-Of-The-Sith.png" alt="Revenge of the Sith poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>revenge-of-the-sith.jpg</em></div>'" /></div>
              <div data-open-video="/videos/High-Fidelity.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">9.</span><span style="flex:1;">High Fidelity</span><img src="/videos/High-Fidelity.png" alt="High Fidelity poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>high-fidelity.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Baby-Driver.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">10.</span><span style="flex:1;">Baby Driver</span><img src="/videos/Baby-Driver.png" alt="Baby Driver poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>baby-driver.jpg</em></div>'" /></div>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127925;</div>
          <div class="hobby-content">
            <h2>Top 25 Songs</h2>
            <p>These tracks can be found in the <strong>Music Player</strong> app on the desktop!</p>
            <div class="media-list" style="display:flex;flex-direction:column;gap:8px;margin:12px 0;">
              <div data-open-music="/music/Swim-Between-Trees_Burnout-Days_flipturn.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">1.</span><span style="flex:1;">Swim Between Trees - flipturn</span><img src="/music/Swim-Between-Trees_Burnout-Days_flipturn.png" alt="Swim Between Trees album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Tokyo-Drifting_Dreamland_Glass-Animals.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">2.</span><span style="flex:1;">Tokyo Drifting - Glass Animals</span><img src="/music/Tokyo-Drifting_Dreamland_Glass-Animals.png" alt="Tokyo Drifting album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Purgatory-Silverstar_The-Crux-Deluxe_Djo.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">3.</span><span style="flex:1;">Purgatory Silverstar - Djo</span><img src="/music/Purgatory-Silverstar_The-Crux-Deluxe_Djo.png" alt="Purgatory Silverstar album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Mind-Over-Matter_Mind-Over-Matter_Young-the-Giant.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">4.</span><span style="flex:1;">Mind Over Matter - Young the Giant</span><img src="/music/Mind-Over-Matter_Mind-Over-Matter_Young-the-Giant.png" alt="Mind Over Matter album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/1980s-Horror-Film_Spring-EP_Wallows.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">5.</span><span style="flex:1;">1980s Horror Film - Wallows</span><img src="/music/1980s-Horror-Film_Spring-EP_Wallows.png" alt="1980s Horror Film album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Strange-Love_Golden-Age_Houndmouth.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">6.</span><span style="flex:1;">Strange Love - Houndmouth</span><img src="/music/Strange-Love_Golden-Age_Houndmouth.png" alt="Strange Love album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Comin'-To-You_Comin'-To-You_Kishi-Bashi.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">7.</span><span style="flex:1;">Comin' To You - Kishi Bashi</span><img src="/music/Comin'-To-You_Comin'-To-You_Kishi-Bashi.png" alt="Comin To You album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Roll-My-Stone_Roll-My-Stone_Arcy-Drive.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">8.</span><span style="flex:1;">Roll My Stone - Arcy Drive</span><img src="/music/Roll-My-Stone_Roll-My-Stone_Arcy-Drive.png" alt="Roll My Stone album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Stayaway_Saves-The-World_MUNA.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">9.</span><span style="flex:1;">Stayaway - MUNA</span><img src="/music/Stayaway_Saves-The-World_MUNA.png" alt="Stayaway album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Once-In-A-Lifetime_Reamin-in-Light_Talking-Heads.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">10.</span><span style="flex:1;">Once in a Lifetime - Talking Heads</span><img src="/music/Once-In-A-Lifetime_Reamin-in-Light_Talking-Heads.png" alt="Once in a Lifetime album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/She-Wants-To-Go-Dancing_She-Wants-To-Go-Dancing_Mt.-Joy.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">11.</span><span style="flex:1;">She Wants To Go Dancing - Mt. Joy</span><img src="/music/She-Wants-To-Go-Dancing_She-Wants-To-Go-Dancing_Mt.-Joy.png" alt="She Wants To Go Dancing album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Common-People_Different-Class_Pulp.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">12.</span><span style="flex:1;">Common People - Pulp</span><img src="/music/Common-People_Different-Class_Pulp.png" alt="Common People album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Yoshimi-Battles-the-Pink-Robots_Yoshimi-Battles-the-Pink-Robots_The-Flaming-Lips.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">13.</span><span style="flex:1;">Yoshimi Battles the Pink Robots - The Flaming Lips</span><img src="/music/Yoshimi-Battles-the-Pink-Robots_Yoshimi-Battles-the-Pink-Robots_The-Flaming-Lips.png" alt="Yoshimi Battles the Pink Robots album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Greek-Tragedy_Glitterbug_The-Wombats.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">14.</span><span style="flex:1;">Greek Tragedy - The Wombats</span><img src="/music/Greek-Tragedy_Glitterbug_The-Wombats.png" alt="Greek Tragedy album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Down-The-Road_Tetra_C2C.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">15.</span><span style="flex:1;">Down The Road - C2C</span><img src="/music/Down-The-Road_Tetra_C2C.png" alt="Down The Road album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Colors_BADLANDS_Halsey.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">16.</span><span style="flex:1;">Colors - Halsey</span><img src="/music/Colors_BADLANDS_Halsey.png" alt="Colors album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Basket-Case_Dookie_Green-Day.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">17.</span><span style="flex:1;">Basket Case - Green Day</span><img src="/music/Basket-Case_Dookie_Green-Day.png" alt="Basket Case album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Do-I-Wanna-Know_AM_Arctic-Monkeys.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">18.</span><span style="flex:1;">Do I Wanna Know? - Arctic Monkeys</span><img src="/music/Do-I-Wanna-Know_AM_Arctic-Monkeys.png" alt="Do I Wanna Know album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/The-Promise_When-In-Rome_When-In-Rome.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">19.</span><span style="flex:1;">The Promise - When In Rome</span><img src="/music/The-Promise_When-In-Rome_When-In-Rome.png" alt="The Promise album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Take-Me-Out_Franz-Ferdinand_Franz-Ferdinand.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">20.</span><span style="flex:1;">Take Me Out - Franz Ferdinand</span><img src="/music/Take-Me-Out_Franz-Ferdinand_Franz-Ferdinand.png" alt="Take Me Out album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Flagpole-Sitta_Where-Have-All-The-Merrymakers-Gone_Harvey-Danger.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">21.</span><span style="flex:1;">Flagpole Sitta - Harvey Danger</span><img src="/music/Flagpole-Sitta_Where-Have-All-The-Merrymakers-Gone_Harvey-Danger.png" alt="Flagpole Sitta album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/My-Old-Ways_Deadbeat_Tame-Impala.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">22.</span><span style="flex:1;">My Old Ways - Tame Impala</span><img src="/music/My-Old-Ways_Deadbeat_Tame-Impala.png" alt="My Old Ways album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/right_Burnout-Days_flipturn.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">23.</span><span style="flex:1;">right? - flipturn</span><img src="/music/right_Burnout-Days_flipturn.png" alt="right? album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Major-Tom-(Coming-Home)_The-Different-Story-(World-Of-Lust-And-Crime)_Peter-Schilling.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">24.</span><span style="flex:1;">Major Tom (Coming Home) - Peter Schilling</span><img src="/music/Major-Tom-(Coming-Home)_The-Different-Story-(World-Of-Lust-And-Crime)_Peter-Schilling.png" alt="Major Tom album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/You-Are-What-You-Do_You-Are-What-You-Do_Aviram.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">25.</span><span style="flex:1;">You Are What You Do</span><img src="/music/You-Are-What-You-Do_You-Are-What-You-Do_Aviram.png" alt="You Are What You Do album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
            </div>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'github',
    title: 'Aaron Sharp (asharpie) \u00b7 GitHub',
    url: 'https://github.com/asharpie',
    content: `
      <div class="gh-profile">
        <div class="gh-header">
          <div class="gh-topbar">
            <img src="/icons/github.svg" alt="GitHub" class="gh-logo" />
            <div class="gh-topbar-nav">
              <input class="gh-search" placeholder="Search or jump to..." readonly />
              <span class="gh-nav-item">Pull requests</span>
              <span class="gh-nav-item">Issues</span>
              <span class="gh-nav-item">Marketplace</span>
              <span class="gh-nav-item">Explore</span>
            </div>
          </div>
        </div>
        <div class="gh-body">
          <div class="gh-sidebar">
            <div class="gh-avatar"><img src="/githubpfp.jpg" alt="Aaron Sharp" class="gh-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="gh-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:72px;font-weight:700;color:#fff;">AS</span></div>
            <h1 class="gh-name">Aaron Sharp</h1>
            <p class="gh-username">asharpie</p>
            <p class="gh-bio">Robotics researcher &middot; Embedded systems engineer &middot; Co-Founder of Motion+ &middot; CS @ Alabama</p>
            <button class="gh-follow-btn">Follow</button>
            <div class="gh-meta">
              <span>&#128205; Tuscaloosa, AL</span>
              <span>&#127979; University of Alabama</span>
              <span>&#128188; Adtran &middot; Motion+ &middot; TOM UA</span>
              <span>&#128279; <a href="https://motionplusllc.com" class="gh-link" target="_blank" rel="noopener noreferrer">motionplusllc.com</a></span>
            </div>
            <div class="gh-stats-row">
              <span><strong>Selected work:</strong> robotics, research instrumentation, and product engineering</span>
            </div>
            <div class="gh-orgs">
              <h3 class="gh-sidebar-title">Organizations</h3>
              <div class="gh-org-row">
                <span class="gh-org-badge" title="TOM UA">T</span>
                <span class="gh-org-badge" title="UA Astrobotics">A</span>
              </div>
            </div>
          </div>
          <div class="gh-main">
            <div class="gh-profile-tabs">
              <span class="gh-tab active">&#128209; Overview</span>
              <span class="gh-tab">&#128193; Repositories</span>
              <span class="gh-tab">&#11088; Projects</span>
            </div>
            <div class="gh-curated-note">Portfolio view of selected work. Use the link below for Aaron's actual public repositories.</div>
            <h2 class="gh-section-title">Pinned</h2>
            <div class="gh-repo-grid">
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">SharpXP</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Windows XP-themed interactive portfolio website built with React + TypeScript + Vite</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot ts"></span> TypeScript
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">hybrid-rover-controller</a></h3>
                  <span class="gh-repo-visibility">Research</span>
                </div>
                <p>Hybrid LQR + PPO controller for autonomous path following on granular deformable terrain (NSF/JPL)</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">moga-ground-test</a></h3>
                  <span class="gh-repo-visibility">Research</span>
                </div>
                <p>Motor control, safety interlocks, experiment sequencing, and telemetry for Georgia Tech's MOGA ground-test platform</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python + C++
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">project-adam</a></h3>
                  <span class="gh-repo-visibility">Embedded</span>
                </div>
                <p>Dual-sensor thermal and flow test platform with an embedded web interface and CSV logging</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot other"></span> Embedded C
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">u-clamp</a></h3>
                  <span class="gh-repo-visibility">Product</span>
                </div>
                <p>Universal wheelchair-to-scooter coupling adapter developed through Motion+ and TOM UA</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot other"></span> STEP/STL
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">cocacousin</a></h3>
                  <span class="gh-repo-visibility">Hackathon</span>
                </div>
                <p>AI-powered brand protection platform and first-place Social Innovation winner</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gh-visit-real">
          <a href="https://github.com/asharpie" target="_blank" rel="noopener noreferrer">Visit real profile on GitHub &#8599;</a>
        </div>
      </div>`,
  },
  {
    id: 'linkedin',
    title: 'Aaron Sharp · LinkedIn',
    url: 'https://www.linkedin.com/in/AaronSharp05',
    content: `
      <div class="li-profile">
        <div class="li-header">
          <div class="li-topbar">
            <img src="/icons/linkedin.svg" alt="LinkedIn" class="li-logo" />
            <div class="li-topbar-nav">
              <input class="li-search" placeholder="Search" readonly />
              <span class="li-nav-icon" title="Home">&#127968;</span>
              <span class="li-nav-icon" title="Network">&#128101;</span>
              <span class="li-nav-icon" title="Jobs">&#128188;</span>
              <span class="li-nav-icon" title="Messaging">&#128172;</span>
              <span class="li-nav-icon" title="Notifications">&#128276;</span>
            </div>
          </div>
          <div class="li-banner"></div>
          <div class="li-avatar"><img src="/linkedinpfp.jpg" alt="Aaron Sharp" class="li-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="li-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:42px;font-weight:700;color:#fff;">AS</span></div>
        </div>
        <div class="li-body">
          <div class="li-intro">
            <div class="li-open-badge">&#128994; Robotics, research, and assistive technology</div>
            <h1>Aaron Sharp</h1>
            <p class="li-headline">Computer Science @ University of Alabama &middot; Robotics Researcher &middot; Co-op Software Engineer @ Adtran &middot; Co-Founder &amp; COO @ Motion+ &middot; President @ TOM UA</p>
            <p class="li-location">Tuscaloosa, Alabama, United States</p>
            <div class="li-buttons">
              <span class="li-btn li-btn-primary">Connect</span>
              <span class="li-btn li-btn-secondary">Message</span>
              <span class="li-btn li-btn-secondary">More</span>
            </div>
          </div>

          <div class="li-section">
            <h2>About</h2>
            <p>I build systems that have to work outside a clean demo: autonomous rovers on deformable terrain, microgravity research hardware, and affordable mobility products developed with the people who use them.</p>
            <p>My current work spans an NSF-funded robotics project with NASA JPL, embedded test infrastructure at Adtran, and operations and product development for Motion+ LLC.</p>
            <p>I am the first transfer student nominated for the Goldwater Scholarship in UA history.</p>
          </div>

          <div class="li-section">
            <h2>Experience</h2>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128188;</div>
              <div>
                <h3>Co-op Software Engineer</h3>
                <p class="li-exp-company">Adtran Inc.</p>
                <p class="li-exp-date">Jan 2025 - Present &middot; Huntsville, AL</p>
                <p class="li-exp-desc">Developing production test infrastructure across embedded firmware, Python and C++ automation, custom PCB hardware, and thermal and flow validation.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128300;</div>
              <div>
                <h3>Student Research Assistant</h3>
                <p class="li-exp-company">Autonomous Robotics Lab &middot; University of Alabama</p>
                <p class="li-exp-date">Oct 2024 - Present</p>
                <p class="li-exp-desc">NSF RII Track-4 project with NASA JPL. Developing and evaluating hybrid LQR+PPO control for autonomous rover navigation on granular terrain.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128300;</div>
              <div>
                <h3>NSF REU Research Intern</h3>
                <p class="li-exp-company">Low Gravity Science and Technology Lab &middot; Georgia Tech</p>
                <p class="li-exp-date">May - Aug 2026</p>
                <p class="li-exp-desc">Designed and built the control, electrical, telemetry, and safety systems for the MOGA ground-test platform.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127758;</div>
              <div>
                <h3>Software Engineer Intern</h3>
                <p class="li-exp-company">IoT Factory Pty Ltd. &middot; Australia (Remote)</p>
                <p class="li-exp-date">May - Aug 2024</p>
                <p class="li-exp-desc">IoT-enabled modular devices for precision agriculture and environmental monitoring.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>Teaching Assistant - CS I/II</h3>
                <p class="li-exp-company">University of Mississippi</p>
                <p class="li-exp-date">Aug - Dec 2024</p>
              </div>
            </div>
          </div>

          <div class="li-section">
            <h2>Education</h2>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>University of Alabama</h3>
                <p class="li-exp-company">B.S. Computer Science &middot; Minors: Robotics, Mathematics</p>
                <p class="li-exp-date">2024 - May 2028 &middot; GPA: 3.62 &middot; Major GPA: 3.82</p>
                <p class="li-exp-desc">Activities: TOM UA President and Fellow, UA Astrobotics, Goldwater Nominee</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>University of Mississippi</h3>
                <p class="li-exp-company">Computer Science</p>
                <p class="li-exp-date">2023 - 2024 &middot; GPA: 3.43</p>
                <p class="li-exp-desc">Activities: IEEE &amp; Robotics Club (Co-President), Women's Soccer Practice Player, Men's Club Soccer</p>
              </div>
            </div>
          </div>

          <div class="li-section">
            <h2>Honors &amp; Awards</h2>
            <div class="li-awards-list">
              <div class="li-award"><strong>2nd Place ($10,000)</strong> &middot; Innovate Alabama Student Innovation Competition &middot; June 2026</div>
              <div class="li-award"><strong>1st Place Alabama Power Innovation ($5,000)</strong> &middot; Aldag Pitch Competition &middot; 2026</div>
              <div class="li-award"><strong>Four placements ($11,500 total)</strong> &middot; UA Big Ideas Competition &middot; 2026</div>
              <div class="li-award"><strong>Goldwater Nominee</strong> &middot; University of Alabama &middot; Dec 2025</div>
              <div class="li-award"><strong>Grand Prize ($2,500)</strong> &middot; TOM Global Innovation Challenge &middot; May 2025</div>
              <div class="li-award"><strong>1st &amp; 2nd Place ($1,250)</strong> &middot; UA River Pitch &middot; Nov 2025</div>
              <div class="li-award"><strong>NASA Lunabotics</strong> &middot; 1st PM, 2nd Autonomy, 3rd Berm &middot; May 2025</div>
              <div class="li-award"><strong>3rd Place</strong> &middot; Adtran Corporate Hackathon &middot; April 2025</div>
            </div>
          </div>

          <div class="li-section">
            <h2>Skills</h2>
            <div class="li-skills-list">
              <span class="li-skill">Python</span><span class="li-skill">C++</span><span class="li-skill">TypeScript</span>
              <span class="li-skill">React</span><span class="li-skill">TensorFlow</span><span class="li-skill">PyTorch</span>
              <span class="li-skill">SLAM</span><span class="li-skill">Embedded Systems</span>
              <span class="li-skill">SolidWorks</span><span class="li-skill">MATLAB</span><span class="li-skill">Git</span>
              <span class="li-skill">3D Printing</span><span class="li-skill">PCB Design</span><span class="li-skill">Arduino</span>
              <span class="li-skill">Raspberry Pi</span><span class="li-skill">OpenAI Gym</span><span class="li-skill">PyBullet</span>
            </div>
          </div>
        </div>
        <div class="li-visit-real">
          <a href="https://www.linkedin.com/in/AaronSharp05" target="_blank" rel="noopener noreferrer">Visit real profile on LinkedIn &#8599;</a>
        </div>
      </div>`,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/aaronsharp_2/',
    content: `
      <div class="ig-profile">
        <div class="ig-topbar">
          <img src="/icons/instagram.svg" alt="Instagram" class="ig-logo" />
          <span class="ig-topbar-text">Instagram</span>
          <div class="ig-topbar-right">
            <span class="ig-nav-icon">&#10133;</span>
            <span class="ig-nav-icon">&#9829;</span>
            <span class="ig-nav-icon">&#128172;</span>
          </div>
        </div>
        <div class="ig-body">
          <div class="ig-header">
            <div class="ig-avatar-ring">
              <div class="ig-avatar"><img src="/instapfp.jpg" alt="Aaron Sharp" class="ig-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="ig-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:36px;font-weight:700;">AS</span></div>
            </div>
            <div class="ig-info">
              <div class="ig-username-row">
                <h1>asharpie</h1>
                <span class="ig-btn">Follow</span>
                <span class="ig-btn ig-btn-secondary">Message</span>
                <span class="ig-btn ig-btn-secondary">&#9660;</span>
              </div>
              <div class="ig-stats">
                <span><strong>Research</strong></span>
                <span><strong>Prototypes</strong></span>
                <span><strong>Life outside the lab</strong></span>
              </div>
              <div class="ig-bio">
                <strong>Aaron Sharp</strong><br/>
                &#129302; CS &amp; Robotics @ University of Alabama<br/>
                &#128296; Builder of robots, assistive tech &amp; 3D-printed guitars<br/>
                &#128640; NSF researcher &middot; Georgia Tech SURE alum<br/>
                &#9855; Co-Founder of Motion+ &middot; TOM UA President<br/>
                &#9917; 4x ACL club &middot; Still playing<br/>
                &#127918; Rocket League Champ (top 3.4%)<br/>
                &#128205; Tuscaloosa, AL
              </div>
            </div>
          </div>
          <div class="ig-highlights">
            <div class="ig-highlight"><div class="ig-hl-circle">&#129302;</div><span>Robotics</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127942;</div><span>Awards</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127891;</div><span>UA</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#128187;</div><span>Code</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#9917;</div><span>Soccer</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127928;</div><span>Guitar</span></div>
          </div>
          <div class="ig-tabs">
            <span class="ig-tab active">&#9638; POSTS</span>
            <span class="ig-tab">&#128254; REELS</span>
            <span class="ig-tab">&#127991;&#65039; TAGGED</span>
          </div>
          <div class="ig-grid">
            <div class="ig-post" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">
              <img src="/insta1.jpg" alt="Post 1" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#129302;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#0f3460,#533483);">
              <img src="/insta2.jpg" alt="Post 2" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127942;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#e94560,#0f3460);">
              <img src="/insta3.jpg" alt="Post 3" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#129468;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#2d6a4f,#40916c);">
              <img src="/insta4.jpg" alt="Post 4" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128640;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#ff6b35,#f7c59f);">
              <img src="/insta5.jpg" alt="Post 5" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127928;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#3a0ca3,#7209b7);">
              <img src="/insta6.jpg" alt="Post 6" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128295;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#023e8a,#0077b6);">
              <img src="/insta7.jpg" alt="Post 7" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#9917;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#9d4edd,#c77dff);">
              <img src="/insta8.jpg" alt="Post 8" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128300;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#2b2d42,#8d99ae);">
              <img src="/insta9.jpg" alt="Post 9" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127918;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#264653,#2a9d8f);">
              <img src="/insta10.jpg" alt="Post 10" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128200;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#6a040f,#d00000);">
              <img src="/insta11.jpg" alt="Post 11" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127344;</div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#495057,#adb5bd);">
              <img src="/insta12.jpg" alt="Post 12" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128424;</div>
            </div>
          </div>
        </div>
        <div class="ig-visit-real">
          <a href="https://www.instagram.com/aaronsharp_2/" target="_blank" rel="noopener noreferrer">Visit real Instagram &#8599;</a>
        </div>
      </div>`,
  },
]

export const portfolioSections: PortfolioSection[] = [
  ...updatedPortfolioSections,
  ...extraPortfolioSections,
]
