import { Component, OnInit } from '@angular/core';
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createRequestBuilder } from '@commercetools/api-request-builder'

var config = {
  host: '',
  projectKey: '',
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

var host = {
  host: '',
  }

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent {

  productName = 'Pizza';
  productPrice = 14;
}
