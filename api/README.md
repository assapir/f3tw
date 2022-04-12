# Feature Flags For The Win Backend

## API

`GET /features` -> `Array<Feature>` - Get all features.
`GET /features/:name` -> `Feature` - Get a feature by name.
`POST /features` -> `Feature` - Create a new feature.
`DELETE /features/:name` -> `void` - Delete a feature by name.

`POST /features/:name/:user_id -> `Feature` - Enable the feature user with `user_id`.

`GET /users/:user_id` -> `User` - Get a user.
`GET /users/:user_id/features` -> `Array<UserFeature>` - Get a list of features enable for user with user_id.
`POST /users` -> `User` - Create a new user.
