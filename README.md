# MySDK - Software Development Kit

- MySDK is a collection of tools libraries, and components that simplifies the process of integrating specific functionalities or features into applications. MySDK include reuseable react components, utilities, custom hooks, theme. etc.

### Instruction

##### 1.Software installation

    - Visual Studio Code (Recommend)
    - [NodeJS] [v16.x and above]
    - [Yarn] [v1.22.1 and above]

#### 2. Setting up development environment

    * Dependencies:
    - Install development dependencies: In terminal, cd to this folder and run: `npm install`

##### 3. Run the project in development mode

- Start dev mode (storybook).

```bash
npm run storybook
# or
yarn storybook
```

##### 4. Build package in local.

- Build package.

```bash
# build bundle
npm run build

# After `npm pack` we will see file my-sdk-0.0.x.tgz in your project folder.
npm pack

cd ./<Project you want to install SDK>
npm install ./<your SDK folder path>/my-sdk-0.0.x.tgz

```

##### 4. Build & publish SDK via npm.

```bash
# make sure your code up to date
$ git pull

# Make sure your libs is installed
$ npm install

# Build your package
$ npm run build

# Update version
$ npm version patch

$ npm publish

# or

$ npm publish --tag beta

```

##### 4. Testing

# Folder Structure

    /                             : Git root
    ├── public                    : Files which are used to store assets
    |   ├── locales               : Translation, i18n configuration.
    ├── storybook                 : Storybook configs.
    ├── types                     : Typescript exports, setup for build production mode.
    ├── src
        ├── assets                : Static file such as image, icon etc.
        ├── components            : Create components that you can reuse and export it.
        |   ├── Atom              : Smallest level React components.
        |   ├── Molecule          : Combinations of atoms.
        |   ├── Organism          : Combinations of atoms & Molecule.
        ├── hooks                 : Custom hooks, build your own hooks.
        ├── styles                : i18n configuration.
        |   ├── Fonts             : Custom font, Font import global.
        |   ├── Themes            : Theme, Dark & light theme.
        ├── utility               : Common app codes (utils, shared modules...)

### CONVENTIONS & BEST PRACTICES

- ##### Component
  - Only include one React component per file. However, multiple Stateless or Pure Components are allowed per file.
  - Use PascalCase for filenames
  - Use PascalCase for React components and camelCase for their instances
  - Use the filename as the component name
  - Use I as a prefix for interface names.
  - Use PascalCase for enum values.
  - Use camelCase for function names.
  - Use camelCase for property names and local variables.
  - Keep components small and function-specific
  - Avoid too much nested component. Ex: CaseProcessing/index.js => PolicyInformation => AddressAndInvoicing => InvoiceAddress
- ##### Import sorting
  1. React, libraries
  2. Global files
  3. Internal files
- ##### Props
  - Use ReactJS defaultProps and ReactJS propTypes.
  - Use camelCase for prop names.
  - Avoid using an array index as key prop, prefer a stable ID
  - Filter out unnecessary props when possible.
- ##### CSS

  - Never use ID and tag name as root selectors!
  - Define variables to increase reuse and make styles more consistent.
  - Camel case instead of dash-case for class names
  - BEM-like Naming is encouraged
