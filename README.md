# DataTable in Plain React

--- This project is a test ---

MainTable is a React component that displays a table of comments from an API. It uses the `GET` function from `utils/api` to fetch data from the API, and stores it in the `comments` state. The table is sorted by postId, and duplicate entries are filtered out. The user can click the "Get more data" button to load more comments, up to a maximum of 6 blocks of 5 rows each.

The style is handled by `scss/sass`.
