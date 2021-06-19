import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudSearchDomainClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public search(input: shapes.CloudSearchDomainSearchRequest): CloudSearchDomainResponsesSearch {
    return new CloudSearchDomainResponsesSearch(this, this.__resources, input);
  }

  public suggest(input: shapes.CloudSearchDomainSuggestRequest): CloudSearchDomainResponsesSuggest {
    return new CloudSearchDomainResponsesSuggest(this, this.__resources, input);
  }

  public uploadDocuments(input: shapes.CloudSearchDomainUploadDocumentsRequest): CloudSearchDomainResponsesUploadDocuments {
    return new CloudSearchDomainResponsesUploadDocuments(this, this.__resources, input);
  }

}

export class CloudSearchDomainResponsesSearch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSearchRequest) {
  }

  public get status(): CloudSearchDomainResponsesSearchStatus {
    return new CloudSearchDomainResponsesSearchStatus(this.__scope, this.__resources, this.__input);
  }

  public get hits(): CloudSearchDomainResponsesSearchHits {
    return new CloudSearchDomainResponsesSearchHits(this.__scope, this.__resources, this.__input);
  }

  public get facets(): Record<string, shapes.CloudSearchDomainBucketInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.facets'),
        outputPath: 'facets',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.facets', props);
    return resource.getResponseField('facets') as unknown as Record<string, shapes.CloudSearchDomainBucketInfo>;
  }

  public get stats(): Record<string, shapes.CloudSearchDomainFieldStats> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.stats'),
        outputPath: 'stats',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.stats', props);
    return resource.getResponseField('stats') as unknown as Record<string, shapes.CloudSearchDomainFieldStats>;
  }

}

export class CloudSearchDomainResponsesSearchStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSearchRequest) {
  }

  public get timems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.status.timems'),
        outputPath: 'status.timems',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.status.timems', props);
    return resource.getResponseField('status.timems') as unknown as number;
  }

  public get rid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.status.rid'),
        outputPath: 'status.rid',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.status.rid', props);
    return resource.getResponseField('status.rid') as unknown as string;
  }

}

export class CloudSearchDomainResponsesSearchHits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSearchRequest) {
  }

  public get found(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.hits.found'),
        outputPath: 'hits.found',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.hits.found', props);
    return resource.getResponseField('hits.found') as unknown as number;
  }

  public get start(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.hits.start'),
        outputPath: 'hits.start',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.hits.start', props);
    return resource.getResponseField('hits.start') as unknown as number;
  }

  public get cursor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.hits.cursor'),
        outputPath: 'hits.cursor',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.hits.cursor', props);
    return resource.getResponseField('hits.cursor') as unknown as string;
  }

  public get hit(): shapes.CloudSearchDomainHit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'search',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Search.hits.hit'),
        outputPath: 'hits.hit',
        parameters: {
          cursor: this.__input.cursor,
          expr: this.__input.expr,
          facet: this.__input.facet,
          filterQuery: this.__input.filterQuery,
          highlight: this.__input.highlight,
          partial: this.__input.partial,
          query: this.__input.query,
          queryOptions: this.__input.queryOptions,
          queryParser: this.__input.queryParser,
          return: this.__input.return,
          size: this.__input.size,
          sort: this.__input.sort,
          start: this.__input.start,
          stats: this.__input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Search.hits.hit', props);
    return resource.getResponseField('hits.hit') as unknown as shapes.CloudSearchDomainHit[];
  }

}

export class CloudSearchDomainResponsesSuggest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSuggestRequest) {
  }

  public get status(): CloudSearchDomainResponsesSuggestStatus {
    return new CloudSearchDomainResponsesSuggestStatus(this.__scope, this.__resources, this.__input);
  }

  public get suggest(): CloudSearchDomainResponsesSuggestSuggest {
    return new CloudSearchDomainResponsesSuggestSuggest(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchDomainResponsesSuggestStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSuggestRequest) {
  }

  public get timems(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suggest',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Suggest.status.timems'),
        outputPath: 'status.timems',
        parameters: {
          query: this.__input.query,
          suggester: this.__input.suggester,
          size: this.__input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Suggest.status.timems', props);
    return resource.getResponseField('status.timems') as unknown as number;
  }

  public get rid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suggest',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Suggest.status.rid'),
        outputPath: 'status.rid',
        parameters: {
          query: this.__input.query,
          suggester: this.__input.suggester,
          size: this.__input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Suggest.status.rid', props);
    return resource.getResponseField('status.rid') as unknown as string;
  }

}

export class CloudSearchDomainResponsesSuggestSuggest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainSuggestRequest) {
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suggest',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Suggest.suggest.query'),
        outputPath: 'suggest.query',
        parameters: {
          query: this.__input.query,
          suggester: this.__input.suggester,
          size: this.__input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Suggest.suggest.query', props);
    return resource.getResponseField('suggest.query') as unknown as string;
  }

  public get found(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suggest',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Suggest.suggest.found'),
        outputPath: 'suggest.found',
        parameters: {
          query: this.__input.query,
          suggester: this.__input.suggester,
          size: this.__input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Suggest.suggest.found', props);
    return resource.getResponseField('suggest.found') as unknown as number;
  }

  public get suggestions(): shapes.CloudSearchDomainSuggestionMatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'suggest',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.Suggest.suggest.suggestions'),
        outputPath: 'suggest.suggestions',
        parameters: {
          query: this.__input.query,
          suggester: this.__input.suggester,
          size: this.__input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Suggest.suggest.suggestions', props);
    return resource.getResponseField('suggest.suggestions') as unknown as shapes.CloudSearchDomainSuggestionMatch[];
  }

}

export class CloudSearchDomainResponsesUploadDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDomainUploadDocumentsRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadDocuments',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.UploadDocuments.status'),
        outputPath: 'status',
        parameters: {
          documents: {
          },
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadDocuments.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get adds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadDocuments',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.UploadDocuments.adds'),
        outputPath: 'adds',
        parameters: {
          documents: {
          },
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadDocuments.adds', props);
    return resource.getResponseField('adds') as unknown as number;
  }

  public get deletes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadDocuments',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.UploadDocuments.deletes'),
        outputPath: 'deletes',
        parameters: {
          documents: {
          },
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadDocuments.deletes', props);
    return resource.getResponseField('deletes') as unknown as number;
  }

  public get warnings(): shapes.CloudSearchDomainDocumentServiceWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadDocuments',
        service: 'CloudSearchDomain',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearchDomain.UploadDocuments.warnings'),
        outputPath: 'warnings',
        parameters: {
          documents: {
          },
          contentType: this.__input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadDocuments.warnings', props);
    return resource.getResponseField('warnings') as unknown as shapes.CloudSearchDomainDocumentServiceWarning[];
  }

}

