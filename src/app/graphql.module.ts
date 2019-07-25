import { NgModule } from '@angular/core';
import { ApolloLink } from 'apollo-link';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { HttpHeaders } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'http://localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const http_link = httpLink.create({ uri });
  const set_csrfToken = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: new HttpHeaders().set('CSRF-Token', sessionStorage.getItem('csrf') || null)
    });
    forward(operation);
  });
  return {
    link: set_csrfToken.concat(http_link),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
