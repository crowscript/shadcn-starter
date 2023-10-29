# nextjs shadcn starter

---

This is a very basic starter kit for the project with Next.js, Shadcn UI and Tailwind.

## To Do Next

- responisve FloatingComponents
- page components
- hover link component

## Table of Contents

---

- [nextjs shadcn starter](#nextjs-shadcn-starter)
- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Built With](#built-with)
  - [Requirements](#requirements)
    - [How install Requirements](#how-install-requirements)
  - [Dependencies](#dependencies)
    - [How install Dependencies](#how-install-dependencies)
- [How to Use](#how-to-use)
  - [.gitignore](#gitignore)
  - [Git commands](#git-commands)
    - [Push changes to a Git repository](#push-changes-to-a-git-repository)
  - [PostCSS](#postcss)
  - [editorconfig](#editorconfig)

## About the Project

---

This project is powered by [Next.js](https://nextjs.org/), [Shadecn UI](https://ui.shadcn.com/), and [Tailwind](https://tailwindcss.com/).
Features styling inspired by the Next UI library.
You can check out [shadcn-nextui-starter](https://github.com/crowscript/shadcn-nextui-starter) - your feedback and contributions are welcome!

## Directory Structure

---

```
┌── public
│   ├── images
│   │   └── img.jpg
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   │── ui
│   │   │   └── all shadecn components
│   │   ├── MaxWidthWrapper.tsx
│   │   ├── TailwindIndicator.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeSwitch.tsx
│   └── lib
│       ├── fonts.ts
│       └── utils.ts
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── components.json
├── LICENSE
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```

## Getting Started

---

This section provide instructions for other developers how to use this starter.
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/`.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- Clone this repo with `git clone https://github.com/crowscript/shadcn-nextui-starter` or download the zip. For this step, use npm terminal.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter.
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, `npm run dev` for server start or/and enter `npm run build` for production.
- If Browser is not opened automaticly, please open in your browser this link `http://localhost:3000`.!
- Edit your code inside of the `src` folder.
- When you want to stop the webpack server, hit `ctrl + C`.

## Built With

---

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Shadecn UI](https://ui.shadcn.com/)
- [Tailwind](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/icons)
- [React Icons](https://react-icons.github.io/react-icons)
- [Next UI](https://nextui.org/)
- [react-ripples](https://www.npmjs.com/package/react-ripples)

### Requirements

What things you need to install the software and how to install them:

- Node/NPM

#### How install Requirements

How to install the requirements.

`npm install`

**tl;dr**: [Download shadcn-nextui-starter](https://github.com/crowscript/shadcn-nextui-starter) and run `npm install` in that directory to get started.

To take advantage of Crowstart W4-B4 Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

### Dependencies

Dependencies that need to be installed for building/using your project

```
      "dependencies": {
    "@hookform/resolvers": "^3.3.2",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tailwindcss/typography": "github:tailwindcss/typography",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.288.0",
    "next": "13.5.6",
    "next-themes": "^0.2.1",
    "nstall": "^0.2.0",
    "prettier": "^3.0.3",
    "pretty-quick": "^3.1.3",
    "react": "^18",
    "react-day-picker": "^8.9.1",
    "react-dom": "^18",
    "react-hook-form": "^7.47.0",
    "react-icons": "^4.11.0",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "20.8.7",
    "@types/react": "18.2.31",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "13.5.6",
    "eslint-config-prettier": "^8.10.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-tailwindcss": "^3.12.0",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "5.2.2"
  }
```

#### How install Dependencies

All dependencies are will be installed with:
`npm install`

## How to Use

---

Open in your favorite code editor folder **shadcn-nextui-starter** and start editing files in `src` folder.

### .gitignore

`.gitignore` should primarily be used to avoid certain project-level files and directories from
being kept under source control. Different development-environments will benefit from different collections of ignores.

For example, add the following to your `~/.gitconfig`, where the `.gitignore`
in your HOME directory contains the files and directories you'd like to
globally ignore:

```gitignore
[core]
    excludesfile = ~/.gitignore
```

- More on global ignores: https://help.github.com/articles/ignoring-files/
- Comprehensive set of ignores on GitHub: https://github.com/github/gitignore

### Git commands

#### Push changes to a Git repository

- Create your new files or edit existing files in `src` project directory.
- From the command line, enter `git status` so that you can check changes.
- Enter `git add .` at the command line to add the files or changes to the repository.

- Enter `git commit -m 'commit_message'` at the command line to commit new files/changes to the local repository. For the `commit_message` , you can enter anything that describes the changes you are committing.
- Enter `git push` at the command line to copy your files from your local repository to remote repository (Github, Bitbucket etc).
- If prompted for authentication, enter your password.

### PostCSS

A searchable catalog of PostCSS plugins:

- [PostCSS](https://www.postcss.parts/)

### editorconfig

[editorconfig](https://editorconfig.org/)

## Changelog

**v1.0** - Just the basic version

## Authors

---

- **Stanislav Vranic** - _Web Developer_ - [@crowscript](https://github.com/crowscript)

## License

---

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
[Choose the License](https://choosealicense.com/)

**[Back to top](#table-of-contents)**
