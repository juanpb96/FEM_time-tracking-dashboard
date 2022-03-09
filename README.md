# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects! 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Click here](https://solution-url.com)
- Live Site URL: [See live site here](https://juanbonilla.me/FEM_time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS / CSS custom properties
- Flexbox
- Mobile-first workflow
- [BEM](https://cssguidelin.es/#bem-like-naming) - CSS Methodology
- [React](https://reactjs.org/) - JS library
- [Enzyme](https://enzymejs.github.io/enzyme/) - Testing

### What I learned

This challenge was awesome to get started with React. I had to think about how to split components and establish a particular structure for them. I started by building the markup. By doing this I understood the parts that could be placed in separated components to reduce the code in each one. 

Then, I continued with style files. Each component has a separated .scss and works similar as a placeholder. Components import their specific .scss file, but those files can be imported into the styles.scss file to have everything in one place if needed. In addition, I liked the way I implemented the scss variables in the project, the ```_variables.scss``` file contains values for colors, fonts and icons, making it easy to replace values. In this challenge some icons were needed for each card, so I wrote a block of scss code that can handle different values for each card with a for loop, see below:
```scss
.card {
    @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
            background: linear-gradient(nth($card-border-colors, $i), 80%, $dark-blue);
            
            &::before {
                content: nth($card-icons, $i);
                position: absolute;
                top: nth($card-top-icons-mobile, $i);
                right: 17px;
                z-index: 0;
            }
        }
    }
}
```
On the other hand, I had the opportunity to implement basic logic in this project. One thing I can highlight is the use of the hook ```useMemo()```. This hook helped me avoid calling the ```getData()``` function every time I changed the timeframe, doing this implementation I learned how performance can be improved.
```js
const CardList = ({timeframe}) => {
    const data = useMemo(() => getData(), []);
    /*...More code*/
}
```
Finally, I decided to create unit tests to add additional value to this challenge. Thinking about how to test each feature and component is a bit difficult at first glance, but it is worth if we understand that implementing tests in our projects gives us a quality improvement.

### Continued development

I want to continue working with React and understand the use cases that each hook can solve. However, I think I can try another project with scss before StyledComponents. Also, I know that unit test can cover multiple scenarios and learning how to test them is something that will expand my general knowledge.

Additionally, I want to learn git because this project helped me with some issues that were solved easily with few git commands that I did not know about.

### Useful resources

- [How to revert or reset to a previous version using GitHub](https://tengel403.medium.com/how-to-revert-or-reset-to-a-previous-version-using-github-6dcee906d81e) - This article was really useful when I faced an issue with my git and github branches. I messed up my folder structure in both places and I did not know how to revert my changes locally and remotely until I found out this information.  
- [Deploy React App on GitHub pages](https://create-react-app.dev/docs/deployment/#building-for-relative-paths) - This is the official documentation created by React to know the different steps needed to deploy your app in various sites.
- [Filename too long in Git for Windows](https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows) - This forum post helped me when the error ```Filename too long``` appeared in my console when configuring my project to be deployed
- [Enzyme adapter for React 17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) - In case you are working with test and want to implement enzyme, this adapter will help you if you are using the version 17 in React.
- [Enzyme - get()](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/get.html) - I was looking for a way to get a particular element in my component once I rendered it, but I could not obtain that one until I found out the get() function.

## Author

- Website - [juanbonilla.me](https://juanbonilla.me)
- Frontend Mentor - [@juanpb96](https://www.frontendmentor.io/profile/juanpb96)
- LinkedIn - [Juan Bonilla](https://www.linkedin.com/in/juan-pablo-bonilla-6b8730115/)