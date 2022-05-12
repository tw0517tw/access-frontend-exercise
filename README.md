# Access Frontend Exercise

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Usage

### Run Development Server on Local Machine

1. Clone this repository to your machine.
2. `cd access-frontend-exercise`
3. `yarn`
4. `yarn dev`
5. Open <http://localhost:3000/> in your browser.

### Deployed Production Environment

Open <https://access-frontend-exercise.vercel.app/> in your browser.

## Extra assumptions I made to Exercise Document

### GitHub API document location change

GitHub API documentation links is present in exercise document as below, but the actual document page has been moved to another location.
> • List - <https://developer.github.com/v3/users/#get-all-users>  
> • Pagination - <https://developer.github.com/v3/#link-header>  
> • Detail <https://developer.github.com/v3/users/#get-a-single-user>  

I use these document page as GitHub API reference instead.
> List - <https://docs.github.com/en/rest/users/users#list-users>  
> Pagination - <https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header>  
> Detail - <https://docs.github.com/en/rest/users/users#get-a-user>  

### About README.txt

For layout convenience, I use markdown format so this is a `README.md` instead of a `.txt` file.

### About `site_admin` property

I'm not sure what does `site_admin` property in GitHub API response means. I just make that showing a 🌟 for users with `site_admin: true` and a ⭐ for those who are not `site_admin` in the List page.

### About Redux

I'm using `react-query` as API state manager, so using `redux` is not necessary in this project.

## Time Spent

- Read exercise document and related API documents for initial design ideas: about 2 hours
- Implement basic dummy List frontend page without API calls: about 4 hours
- Setup react-query and add API calls to retrieve real data: about 2 hours
- Add UserPage to show single User profile: about 1 hour
- Minor UI/UX tweak: about 1 hour
- Update README: about 30 minutes
