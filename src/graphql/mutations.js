// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUserRecord = `mutation CreateUserRecord(
  $backhand: Backhand
  $email: AWSEmail!
  $forehand: Forehand
  $tennisStyle: TennisStyle
) {
  createUserRecord(
    backhand: $backhand
    email: $email
    forehand: $forehand
    tennisStyle: $tennisStyle
  ) {
    backhand
    email
    forehand
    tennisStyle
  }
}
`;
