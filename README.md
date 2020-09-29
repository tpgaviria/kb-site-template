## Instructions for dev
- In terminal, navigate to desired parent directory
- Run `git clone https://github.com/tpgaviria/kb-site-template.git`
- `cd kb-site-template`
- `npm i`
- `gatsby develop`

## Landing Page
- In browser, navigate to `localhost:8000`

## Article Page
- No redirecting is implemented for `localhost:8000/docs` yet (ideally `docs/introduction`)
- In browser, navigate to `localhost:8000/docs/postmortems` for a working article page

## Notes:
- All docs live in `/src/docs` folder with no parent directories
- Sidebar ordering and links are configured in `/src/config/sidebar.yml`
- All mdx files in /docs will render and can be navigated to in the browser. Pages can exist without being added to the sidebar.
- If a file is not proper mdx (for example, readme syntax), it will not be created as a page.
- Files that are currently rendering were manually updated to place readme syntax with proper markdown
-  Only a handleful of articles in the sidebar are real links atm