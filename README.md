--- Peer Feedback: ---

Natalie
Navbar missing on sandbox page. Layout seems good. Explain sandbox page w/header / text. Use CSS to integrate the alert for pin placement. Font too generic.

Rigo
Sandbox page needs method to return to rest of the website: example: link directly to landing page. Note that the page is AI. Social icons need to be bigger. Favicon usage.

Jay Singh
Layout is pretty nice – straightforward, and well organized. I will say as a forewarning to avoid sparseness (especially on the projects page). The qualifications and activities are still yet unimplemented, but they’re fairly straightforward so that shouldn’t have any future problems. One thing I would suggest for your sandbox idea is to have automatic location pinning based on client/browser Public IPs!


--- External Links ---

Index Links:
https://www.linkedin.com/in/asher-blevins/

https://github.com/asherblevins-hub

https://wdwddf.itch.io/

https://pvfa.tamu.edu/institutes/live-lab/

Portfolio Links:
https://wdwddf.itch.io/free-bozo

https://wdwddf.itch.io/love-is-blind

https://wdwddf.itch.io/dimensional-duel

https://aidaeily.itch.io/king-tut

Activity Links:
https://tagd.club

https://chillennium.com

https://yap.tamu.edu


--- AI PROMPT ---

1st Prompt: Generate a webpage using HTML, inline CSS, and javascript if required, that contains a navmenu at the top with 5 page links (to be edited), a three dimensional globe that can be spun with mouse movement in the center, and wherever the globe is clicked on in 3D space, a red pin appears and its location data is stored in a local file.

2nd: Generate the companion javascript file that makes this html function properly

3rd: now rewrite the html file with globe.js in mind

4th: for now, scratch everything but the 3d globe. Try generating a brand new HTML file that its only purpose is to display a 3d spinning globe.

5th: That worked perfectly. Now add html to that code that allows the user to place a red pin on the globe, where that red pin accurately follows the globes rotation in three dimensional space.

6th: Yes, now add the location of each pin to local storage, so that the pins don't dissapear on refresh.

7th: The pins don't seem to be persisting on refresh

(Pushed)

8th: Now edit the script to only allow one pin placement per site visit?

9th: Is it possible to save pin data to a file in the same directory at the html file, and use that to load saved pin data when refreshed?

10th: Add html and inline CSS for a navigatoin button near the top left, and a text box near the top center (with an outline) that says: "Place a pin on the globe where you are!"

11: Add javascript linking that button to a function that takes you the "index.html" page