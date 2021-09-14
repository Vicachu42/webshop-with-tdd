# webshop-with-tdd

## Project details
Assignment from the third semester studying Frontend Development. The task is to build a webshop in Vue using Test-driven Development (TDD). 

[Figma sketches](https://www.figma.com/file/1kOgUaWugjZF6SvEFDwv87/webshop-tdd-sketch?node-id=3%3A22)

**To start backend:**
Open terminal in the sumo-api folder and run "node app.js"

**To start frontend:**
Open terminal in project folder and run "npm run serve"

## Log

### September 8th

**Tasks completed today:**
- Project board created. Made a Kanban board of tasks and requirement specifications. More will be added as I go along.
- Sketched project. Made a map of the different views and components I will use in Figma. 
- Project created. Made a GitHub repo, cloned it, installed dependencies, created views and components.
- Version handling. Created a dev branch.

**To do:**
- Create API. I've taken a database from an earlier project ([shopping-assignment](https://github.com/Vicachu42/shopping-assignment)), now I need to get more info how to make it into an API that works for this project
- Finish sketch how the page is supposed to look. Will model after [sumo.or.jp](https://www.sumo.or.jp/En/).
- Start testing simpler components that aren't dependant on API.

*Late notes:* I managed to create a database that listens to a port. Next step is to see if I can loop through the product list.

### September 9th
**Tasks completed today:**
- Sketch in Figma. That card is now moved to done.
- Design. Added a Header component, which I put my ShoppingCart component in. Added Footer component. Started working on the design of the ProductView.
- Completed the database. It is listening to port and I can successfully get the data.

**To do:**
- Figure out how to render the data from the API. The data is there, but isn't rendering properly.

I also made som progress when it comes to rendering the API. I will used lifecycle hooks to render the data when site loads. This will require a different method of testing, more on that found [here](https://medium.com/@sebastiencorreia/testing-vue-js-lifecycle-hook-43c1227815bd).

### September 10th
After some help and some extensive problem shooting, the API finally renders as intended. I made a commit with some of the code that didn't work for documentation before I cleaned up the component. I had the problem that it wasn't looping through the data properly, and the solution is in hindsight almost laughable.

I did run into another problem when it came to rendering the pictures. While the code knows it's a picture, all it's rendering is a placeholder and not the actual image. I tried a couple of different fixes, most of them regarding relative paths, but nothing worked. The pictures themselves are fine, there is just something in the communication that I can't crack for the moment being.

This afternoon's commit is a safety backup.

### September 13th
Tried one more fix for the image rendering. I tried fetching the data through a method instead to see if it acted any different, but the problem still persists. I don't have time to get stuck on this any more, so I'll work with a placeholder for the time being to further develope the design for the page.

One of the design elements I worked on was the information about the different wrestlers. While I'm satisfied with the look of the individual cards I had problem placing them within the product block. The inspector shows the flex dirextion as row, but for some reason they are still stacked as a column. I tried working with flex wrap and hard coded containers to solve the problem, but it still doesn't behave as intended.

I have also finally started with some more serious testing. While testing out if the components are gets imported into the view was fairly straight forward, I struggled a bit more with testing visibility. The plan is to use to same view and toggle visibility between product listing and the shopping cart. At first I tried figuring out how to test the child components without much success, but by nesting the components into html I could target the spans rather than the components. That worked a lot better.

For tomorrow the plan is to write a test for the button that toggles the visibility and to spend some time working on post and delete in backend.

### September 14th
Today I started working on a test that should test whether you can toggle between the views on Home.vue. At the moment, it can't find the element I'm supposed to test, and I don't know if it has something to do with the element being nested into a grand child (even though the event has been emitted to the parent).

To better structure my work I made a todo list on paper and ranked the tasks after importance. The tasks where among others setting up tests, event handling, and complete design with placeholders. I've completed a fair few of them, and am backing them up now in the end of the work day.

The deadline for the project is tomorrow, and to finish the project properly I will focus first and foremost on these tasks:
- Finish at least one fetch test
- Make sure current tests are solid
- Update and complete technical requirement list