import { Auth } from '@apollosproject/data-connector-rock';

const authResolver = Auth.resolver;

authResolver.Mutation.registerPersonWithFullName = (
  root,
  args,
  { dataSources }
) => dataSources.Auth.registerPersonWithFullName(args);

authResolver.Query.currentUser = (
  root,
  args,
  { dataSources },
  { cacheControl }
) => {
  cacheControl.setCacheHint({ maxAge: 0 });
  return dataSources.Auth.getCurrentPerson();
};

authResolver.Query.passwordResetUrl = () => "https://rock.christfellowshipconference.com/page/56"

export default authResolver;
