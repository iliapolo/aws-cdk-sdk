import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudSearchDomainClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public search(input: shapes.CloudSearchDomainSearchRequest): CloudSearchDomainSearch {
    return new CloudSearchDomainSearch(this, 'Search', this.__resources, input);
  }

  public suggest(input: shapes.CloudSearchDomainSuggestRequest): CloudSearchDomainSuggest {
    return new CloudSearchDomainSuggest(this, 'Suggest', this.__resources, input);
  }

  public uploadDocuments(input: shapes.CloudSearchDomainUploadDocumentsRequest): CloudSearchDomainUploadDocuments {
    return new CloudSearchDomainUploadDocuments(this, 'UploadDocuments', this.__resources, input);
  }

}

export class CloudSearchDomainSearch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSearchRequest) {
    super(scope, id);
  }

  public get status(): CloudSearchDomainSearchStatus {
    return new CloudSearchDomainSearchStatus(this, 'Status', this.__resources, this.input);
  }

  public get hits(): CloudSearchDomainSearchHits {
    return new CloudSearchDomainSearchHits(this, 'Hits', this.__resources, this.input);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.facets', props);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.stats', props);
    return resource.getResponseField('stats') as unknown as Record<string, shapes.CloudSearchDomainFieldStats>;
  }

}

export class CloudSearchDomainSearchStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSearchRequest) {
    super(scope, id);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.status.timems', props);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.status.rid', props);
    return resource.getResponseField('status.rid') as unknown as string;
  }

}

export class CloudSearchDomainSearchHits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSearchRequest) {
    super(scope, id);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.hits.found', props);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.hits.start', props);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.hits.cursor', props);
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
          cursor: this.input.cursor,
          expr: this.input.expr,
          facet: this.input.facet,
          filterQuery: this.input.filterQuery,
          highlight: this.input.highlight,
          partial: this.input.partial,
          query: this.input.query,
          queryOptions: this.input.queryOptions,
          queryParser: this.input.queryParser,
          return: this.input.return,
          size: this.input.size,
          sort: this.input.sort,
          start: this.input.start,
          stats: this.input.stats,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Search.hits.hit', props);
    return resource.getResponseField('hits.hit') as unknown as shapes.CloudSearchDomainHit[];
  }

}

export class CloudSearchDomainSuggest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSuggestRequest) {
    super(scope, id);
  }

  public get status(): CloudSearchDomainSuggestStatus {
    return new CloudSearchDomainSuggestStatus(this, 'Status', this.__resources, this.input);
  }

  public get suggest(): CloudSearchDomainSuggestSuggest {
    return new CloudSearchDomainSuggestSuggest(this, 'Suggest', this.__resources, this.input);
  }

}

export class CloudSearchDomainSuggestStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSuggestRequest) {
    super(scope, id);
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
          query: this.input.query,
          suggester: this.input.suggester,
          size: this.input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Suggest.status.timems', props);
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
          query: this.input.query,
          suggester: this.input.suggester,
          size: this.input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Suggest.status.rid', props);
    return resource.getResponseField('status.rid') as unknown as string;
  }

}

export class CloudSearchDomainSuggestSuggest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainSuggestRequest) {
    super(scope, id);
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
          query: this.input.query,
          suggester: this.input.suggester,
          size: this.input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Suggest.suggest.query', props);
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
          query: this.input.query,
          suggester: this.input.suggester,
          size: this.input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Suggest.suggest.found', props);
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
          query: this.input.query,
          suggester: this.input.suggester,
          size: this.input.size,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Suggest.suggest.suggestions', props);
    return resource.getResponseField('suggest.suggestions') as unknown as shapes.CloudSearchDomainSuggestionMatch[];
  }

}

export class CloudSearchDomainUploadDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDomainUploadDocumentsRequest) {
    super(scope, id);
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
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadDocuments.status', props);
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
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadDocuments.adds', props);
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
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadDocuments.deletes', props);
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
          contentType: this.input.contentType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadDocuments.warnings', props);
    return resource.getResponseField('warnings') as unknown as shapes.CloudSearchDomainDocumentServiceWarning[];
  }

}

