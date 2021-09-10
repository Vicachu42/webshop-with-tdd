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