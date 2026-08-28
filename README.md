# ROSHINI A. --- Personal Portfolio

A responsive personal portfolio website for **Roshini A.**, a Computer
Science Engineering student and Full Stack Developer / AI Engineer.

The portfolio presents professional information, technical skills,
internship experience, projects, education, certifications, achievements
beyond academics, and contact details in a modern dark-themed interface.
The project is built with plain HTML, CSS, and JavaScript.
fileciteturn0file0L5-L13

## ✨ Features

-   **Responsive single-page portfolio** with section-based navigation.
-   **Fixed navigation bar** with Home, About, Skills, Experience,
    Projects, Education, and Contact sections.
-   **Mobile hamburger menu** for smaller screens.
-   **Smooth scrolling** between portfolio sections.
-   **Active navigation highlighting** that updates while scrolling.
-   **Hero section** with profile image, role, introduction, and calls
    to action.
-   **About section** describing the developer profile and technical
    focus.
-   **Technology Stack section** covering:
    -   Java
    -   Python
    -   JavaScript
    -   SQL
    -   React.js
    -   HTML5
    -   CSS3
    -   Spring Boot
    -   REST APIs
    -   MySQL
    -   MongoDB
    -   Git
    -   GitHub
    -   VS Code
-   **Animated skill bars** that reveal when the skills section enters
    the viewport.
-   **Internship experience timeline**.
-   **Featured project cards** for software development, web application
    development, and AI/data-focused development.
-   **Education and certifications** section.
-   **Beyond Academics** section highlighting internships, software
    development, certifications, and problem solving.
-   **Contact section** with email, location, LinkedIn, GitHub,
    LeetCode, HackerRank, and a contact form.
-   **Client-side form validation** for name, email, phone number, and
    message.
-   **Loading, success, and error states** for contact form submission.
-   **Google Apps Script integration** for sending contact-form data.
-   **Scroll-reveal animations** using `IntersectionObserver`.
-   **Reduced-motion support** through `prefers-reduced-motion`.
-   **Accessibility features** including a skip-to-content link, visible
    keyboard focus states, ARIA labels, and live form status messaging.
-   **Responsive layouts** for laptop, tablet, and mobile screen sizes.
    fileciteturn0file1L91-L148 fileciteturn0file1L148-L234

## 🛠️ Technologies Used

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  HTML5                               Page structure, semantic sections,
                                      forms, navigation, and content

  CSS3                                Layout, responsive design,
                                      gradients, animations, cards,
                                      timeline, and visual styling

  Vanilla JavaScript                  Navigation behavior, animations,
                                      validation, and form submission

  Google Fonts                        Inter and JetBrains Mono typography

  Google Apps Script                  Contact-form submission endpoint
  -----------------------------------------------------------------------

The stylesheet defines the visual system, including the dark background,
typography, accent colors, card styles, buttons, responsive breakpoints,
and animations. fileciteturn0file2L6-L41

## 📁 Project Structure

``` text
portfolio/
│
├── index.html
├── style.css
├── script.js
├── profile.png
└── README.md
```

### File Description

-   **`index.html`** --- Main portfolio page containing all sections and
    content.
-   **`style.css`** --- Complete visual design, layout, animations,
    accessibility states, and responsive styles.
-   **`script.js`** --- Interactive behavior, navigation, scroll
    animations, skill animations, and contact-form logic.
-   **`profile.png`** --- Profile image displayed in the hero section.
-   **`README.md`** --- Project documentation and setup instructions.

> **Important:** The uploaded source files use the names
> `index(4).html`, `style(3).css`, and `script(4).js`, but the HTML
> references `style.css` and `script.js`. For a clean GitHub project,
> rename the files to `index.html`, `style.css`, and `script.js`, or
> update the references in `index.html` accordingly. The HTML also
> expects `profile.png` in the same project directory.
> fileciteturn0file0L10-L14 fileciteturn0file0L97-L100

## ⚙️ Setup and Installation

This is a front-end project and does not require Node.js, npm, React, or
a database.

### 1. Download or Clone the Repository

If the project is hosted on GitHub:

``` bash
git clone <your-repository-url>
cd portfolio
```

Or download the repository as a ZIP file and extract it.

### 2. Check the Project Files

Make sure the project contains:

``` text
index.html
style.css
script.js
profile.png
```

### 3. Verify File References

Inside `index.html`, confirm that the stylesheet and JavaScript files
are referenced as:

``` html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

The profile image should be available as:

``` html
<img src="profile.png" ...>
```

### 4. Run the Website

You can run the portfolio directly by opening:

``` text
index.html
```

in a modern web browser.

For a better local development experience, use **VS Code + Live
Server**:

1.  Open the project folder in Visual Studio Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  The portfolio will open in your browser.

## ▶️ How the Website Works

### Navigation

The website uses anchor-based section navigation:

``` text
Home
About
Skills
Experience
Projects
Education
Contact
```

JavaScript adds smooth scrolling and automatically updates the active
navigation item based on the section currently visible on the screen.
fileciteturn0file1L53-L91 fileciteturn0file1L91-L148

### Mobile Navigation

On tablet and mobile screens, the desktop navigation is replaced with a
hamburger menu. Clicking the menu button opens or closes the mobile
navigation, and the menu closes when a navigation link is selected or
the `Escape` key is pressed. fileciteturn0file1L10-L51

### Scroll Animations

Portfolio cards and sections receive reveal animations when they enter
the viewport. The implementation uses the browser's
`IntersectionObserver` API and includes a fallback for browsers that do
not support it. fileciteturn0file1L148-L234

### Skill Bar Animation

The skill bars initially start at zero width. When they become visible,
JavaScript restores their target widths to create an animated progress
effect. fileciteturn0file1L160-L177

### Contact Form

The contact form collects:

-   Name
-   Email
-   Phone
-   Message

Before submission, JavaScript validates all required fields. Email
addresses are checked with an email pattern, while phone numbers are
validated after removing common separators such as spaces, parentheses,
periods, and hyphens. fileciteturn0file1L234-L382

After successful validation, the form sends the submitted values to a
configured Google Apps Script Web App endpoint and displays a success or
error status. fileciteturn0file1L385-L505

## 📩 Contact Form Configuration

The JavaScript currently contains a Google Apps Script Web App URL:

``` javascript
const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
```

For your own deployment, replace the existing endpoint with your own
Google Apps Script Web App URL.

The frontend sends these parameters:

``` text
name
email
phone
message
```

### Important Security / Deployment Note

The current frontend uses a Google Apps Script Web App URL directly from
client-side JavaScript and submits the form with a `GET` request using
`no-cors`. The current code therefore assumes that the Google Apps
Script endpoint is already deployed and configured to receive these
values. fileciteturn0file1L4-L8 fileciteturn0file1L452-L500

If you publish the project publicly, review your Google Apps Script
deployment permissions and avoid placing sensitive credentials or
secrets in frontend code.

## 🎨 Design and Responsive Behavior

The portfolio uses a dark modern interface with:

-   Dark gradient background
-   Blue, purple, and cyan accent colors
-   Glass-style cards
-   Gradient buttons
-   Floating hero elements
-   Animated skill bars
-   Scroll-reveal effects
-   Responsive grids
-   Mobile navigation

The CSS includes dedicated breakpoints for laptop screens up to
`1180px`, tablets up to `1024px`, and mobile devices up to `640px`.
fileciteturn0file2L522-L578 fileciteturn0file2L578-L927

## ♿ Accessibility

The project includes several accessibility-oriented features:

-   Skip-to-content link
-   Semantic HTML structure
-   `aria-label` attributes for navigation and controls
-   `aria-expanded` for the mobile menu
-   `aria-controls` for the hamburger button
-   Keyboard `Escape` support for closing the mobile menu
-   Visible `:focus-visible` states
-   `role="alert"` for field validation messages
-   `role="status"` and `aria-live="polite"` for contact-form status
-   Reduced-motion support for users who prefer less animation.
    fileciteturn0file0L17-L50 fileciteturn0file2L61-L83

## 🌐 External Resources

The project loads the following Google Fonts:

-   **Inter**
-   **JetBrains Mono**

These are included through Google Fonts in the HTML `<head>`.
fileciteturn0file0L10-L13

The portfolio otherwise uses native HTML, CSS, and JavaScript for its
interface and interactions.

## 🧪 Browser Compatibility

The portfolio is intended for modern browsers such as:

-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox
-   Safari

The JavaScript includes a fallback for browsers without
`IntersectionObserver` support. fileciteturn0file1L178-L234

## 🚀 Deployment

Because this is a static front-end website, it can be deployed using
services that host HTML/CSS/JavaScript files.

Typical deployment options include:

-   GitHub Pages
-   Vercel
-   Netlify
-   Any static web hosting service

Before deployment, make sure:

1.  `index.html`, `style.css`, `script.js`, and `profile.png` are
    included.
2.  File names match the references in `index.html`.
3.  The Google Apps Script contact endpoint is correctly configured if
    the contact form is required.
4.  All external links and contact information are up to date.

## 🔧 Customization

To customize the portfolio:

### Personal Information

Edit the text in `index.html` for:

-   Name
-   Professional title
-   About description
-   Skills
-   Internship experience
-   Projects
-   Education
-   Certifications
-   Contact information

### Profile Photo

Replace:

``` text
profile.png
```

with your preferred profile image while keeping the same filename, or
update the `<img>` source in `index.html`.

### Colors and Theme

The main theme colors are defined as CSS variables near the beginning of
`style.css`, making it easy to customize the visual identity.
fileciteturn0file2L6-L41

### Animations

Animation behavior can be adjusted in `style.css` and `script.js`,
including floating elements, scroll reveal, skill-bar transitions, and
loading indicators.

## 📌 Current Portfolio Sections

  -----------------------------------------------------------------------
  Section                             Purpose
  ----------------------------------- -----------------------------------
  Home                                Introduction, professional role,
                                      profile image, and calls to action

  About                               Developer profile and technology
                                      focus

  Skills                              Languages, AI/ML, web development,
                                      database, and tools

  Experience                          Internship timeline

  Projects                            Featured development and AI/data
                                      work

  Education                           Academic history

  Certifications                      Professional learning and
                                      certifications

  Beyond Academics                    Additional professional-development
                                      highlights

  Contact                             Contact details and contact form

  Footer                              Branding, role, quote, and
                                      copyright
  -----------------------------------------------------------------------

The HTML source defines these sections and the footer as part of the
single-page portfolio structure. fileciteturn0file0L130-L143
fileciteturn0file0L146-L220 fileciteturn0file0L222-L297
fileciteturn0file0L300-L327

## 🔮 Future Enhancements

Possible future improvements include:

-   Add dedicated project detail pages.
-   Add live project/demo links.
-   Add downloadable PDF resume.
-   Add a blog or technical articles section.
-   Add a dark/light theme switcher.
-   Add project filtering by technology.
-   Add stronger backend-side contact-form validation.
-   Add analytics and SEO improvements.
-   Add automated deployment through GitHub Actions.

## 👩‍💻 Author

**Roshini A.**

Computer Science Engineering Student\
Full Stack Developer \| AI Engineer

### Connect

-   LinkedIn: `linkedin.com/in/roshini-a-156324338`
-   GitHub: `github.com/Roshini147`
-   LeetCode: `leetcode.com/u/WqnEbyLC83/`
-   HackerRank: `hackerrank.com/profile/roshini120075`

The contact information and profile links are defined in the portfolio's
Contact section. fileciteturn0file0L400-L490

## 📄 License

No explicit license is defined in the current project files. If this
repository is intended for public reuse, add a license file such as
`MIT License` after deciding the desired usage terms.

------------------------------------------------------------------------

**Learning. Building. Growing.**
