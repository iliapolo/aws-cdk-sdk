import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudSearchClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public buildSuggesters(input: shapes.CloudSearchBuildSuggestersRequest): CloudSearchBuildSuggesters {
    return new CloudSearchBuildSuggesters(this, 'BuildSuggesters', this.__resources, input);
  }

  public createDomain(input: shapes.CloudSearchCreateDomainRequest): CloudSearchCreateDomain {
    return new CloudSearchCreateDomain(this, 'CreateDomain', this.__resources, input);
  }

  public defineAnalysisScheme(input: shapes.CloudSearchDefineAnalysisSchemeRequest): CloudSearchDefineAnalysisScheme {
    return new CloudSearchDefineAnalysisScheme(this, 'DefineAnalysisScheme', this.__resources, input);
  }

  public defineExpression(input: shapes.CloudSearchDefineExpressionRequest): CloudSearchDefineExpression {
    return new CloudSearchDefineExpression(this, 'DefineExpression', this.__resources, input);
  }

  public defineIndexField(input: shapes.CloudSearchDefineIndexFieldRequest): CloudSearchDefineIndexField {
    return new CloudSearchDefineIndexField(this, 'DefineIndexField', this.__resources, input);
  }

  public defineSuggester(input: shapes.CloudSearchDefineSuggesterRequest): CloudSearchDefineSuggester {
    return new CloudSearchDefineSuggester(this, 'DefineSuggester', this.__resources, input);
  }

  public deleteAnalysisScheme(input: shapes.CloudSearchDeleteAnalysisSchemeRequest): CloudSearchDeleteAnalysisScheme {
    return new CloudSearchDeleteAnalysisScheme(this, 'DeleteAnalysisScheme', this.__resources, input);
  }

  public deleteDomain(input: shapes.CloudSearchDeleteDomainRequest): CloudSearchDeleteDomain {
    return new CloudSearchDeleteDomain(this, 'DeleteDomain', this.__resources, input);
  }

  public deleteExpression(input: shapes.CloudSearchDeleteExpressionRequest): CloudSearchDeleteExpression {
    return new CloudSearchDeleteExpression(this, 'DeleteExpression', this.__resources, input);
  }

  public deleteIndexField(input: shapes.CloudSearchDeleteIndexFieldRequest): CloudSearchDeleteIndexField {
    return new CloudSearchDeleteIndexField(this, 'DeleteIndexField', this.__resources, input);
  }

  public deleteSuggester(input: shapes.CloudSearchDeleteSuggesterRequest): CloudSearchDeleteSuggester {
    return new CloudSearchDeleteSuggester(this, 'DeleteSuggester', this.__resources, input);
  }

  public describeAnalysisSchemes(input: shapes.CloudSearchDescribeAnalysisSchemesRequest): CloudSearchDescribeAnalysisSchemes {
    return new CloudSearchDescribeAnalysisSchemes(this, 'DescribeAnalysisSchemes', this.__resources, input);
  }

  public describeAvailabilityOptions(input: shapes.CloudSearchDescribeAvailabilityOptionsRequest): CloudSearchDescribeAvailabilityOptions {
    return new CloudSearchDescribeAvailabilityOptions(this, 'DescribeAvailabilityOptions', this.__resources, input);
  }

  public describeDomainEndpointOptions(input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest): CloudSearchDescribeDomainEndpointOptions {
    return new CloudSearchDescribeDomainEndpointOptions(this, 'DescribeDomainEndpointOptions', this.__resources, input);
  }

  public describeDomains(input: shapes.CloudSearchDescribeDomainsRequest): CloudSearchDescribeDomains {
    return new CloudSearchDescribeDomains(this, 'DescribeDomains', this.__resources, input);
  }

  public describeExpressions(input: shapes.CloudSearchDescribeExpressionsRequest): CloudSearchDescribeExpressions {
    return new CloudSearchDescribeExpressions(this, 'DescribeExpressions', this.__resources, input);
  }

  public describeIndexFields(input: shapes.CloudSearchDescribeIndexFieldsRequest): CloudSearchDescribeIndexFields {
    return new CloudSearchDescribeIndexFields(this, 'DescribeIndexFields', this.__resources, input);
  }

  public describeScalingParameters(input: shapes.CloudSearchDescribeScalingParametersRequest): CloudSearchDescribeScalingParameters {
    return new CloudSearchDescribeScalingParameters(this, 'DescribeScalingParameters', this.__resources, input);
  }

  public describeServiceAccessPolicies(input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest): CloudSearchDescribeServiceAccessPolicies {
    return new CloudSearchDescribeServiceAccessPolicies(this, 'DescribeServiceAccessPolicies', this.__resources, input);
  }

  public describeSuggesters(input: shapes.CloudSearchDescribeSuggestersRequest): CloudSearchDescribeSuggesters {
    return new CloudSearchDescribeSuggesters(this, 'DescribeSuggesters', this.__resources, input);
  }

  public indexDocuments(input: shapes.CloudSearchIndexDocumentsRequest): CloudSearchIndexDocuments {
    return new CloudSearchIndexDocuments(this, 'IndexDocuments', this.__resources, input);
  }

  public listDomainNames(): CloudSearchListDomainNames {
    return new CloudSearchListDomainNames(this, 'ListDomainNames', this.__resources);
  }

  public updateAvailabilityOptions(input: shapes.CloudSearchUpdateAvailabilityOptionsRequest): CloudSearchUpdateAvailabilityOptions {
    return new CloudSearchUpdateAvailabilityOptions(this, 'UpdateAvailabilityOptions', this.__resources, input);
  }

  public updateDomainEndpointOptions(input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest): CloudSearchUpdateDomainEndpointOptions {
    return new CloudSearchUpdateDomainEndpointOptions(this, 'UpdateDomainEndpointOptions', this.__resources, input);
  }

  public updateScalingParameters(input: shapes.CloudSearchUpdateScalingParametersRequest): CloudSearchUpdateScalingParameters {
    return new CloudSearchUpdateScalingParameters(this, 'UpdateScalingParameters', this.__resources, input);
  }

  public updateServiceAccessPolicies(input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest): CloudSearchUpdateServiceAccessPolicies {
    return new CloudSearchUpdateServiceAccessPolicies(this, 'UpdateServiceAccessPolicies', this.__resources, input);
  }

}

export class CloudSearchBuildSuggesters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchBuildSuggestersRequest) {
    super(scope, id);
  }

  public get fieldNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'buildSuggesters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.BuildSuggesters.FieldNames'),
        outputPath: 'FieldNames',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BuildSuggesters.FieldNames', props);
    return resource.getResponseField('FieldNames') as unknown as string[];
  }

}

export class CloudSearchCreateDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchCreateDomainRequest) {
    super(scope, id);
  }

  public get domainStatus(): CloudSearchCreateDomainDomainStatus {
    return new CloudSearchCreateDomainDomainStatus(this, 'DomainStatus', this.__resources, this.input);
  }

}

export class CloudSearchCreateDomainDomainStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchCreateDomainRequest) {
    super(scope, id);
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.DomainId'),
        outputPath: 'DomainStatus.DomainId',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.DomainId', props);
    return resource.getResponseField('DomainStatus.DomainId') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.DomainName'),
        outputPath: 'DomainStatus.DomainName',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.DomainName', props);
    return resource.getResponseField('DomainStatus.DomainName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.ARN'),
        outputPath: 'DomainStatus.ARN',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.ARN', props);
    return resource.getResponseField('DomainStatus.ARN') as unknown as string;
  }

  public get created(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.Created'),
        outputPath: 'DomainStatus.Created',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.Created', props);
    return resource.getResponseField('DomainStatus.Created') as unknown as boolean;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.Deleted'),
        outputPath: 'DomainStatus.Deleted',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.Deleted', props);
    return resource.getResponseField('DomainStatus.Deleted') as unknown as boolean;
  }

  public get docService(): CloudSearchCreateDomainDomainStatusDocService {
    return new CloudSearchCreateDomainDomainStatusDocService(this, 'DocService', this.__resources, this.input);
  }

  public get searchService(): CloudSearchCreateDomainDomainStatusSearchService {
    return new CloudSearchCreateDomainDomainStatusSearchService(this, 'SearchService', this.__resources, this.input);
  }

  public get requiresIndexDocuments(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.RequiresIndexDocuments'),
        outputPath: 'DomainStatus.RequiresIndexDocuments',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.RequiresIndexDocuments', props);
    return resource.getResponseField('DomainStatus.RequiresIndexDocuments') as unknown as boolean;
  }

  public get processing(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.Processing'),
        outputPath: 'DomainStatus.Processing',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.Processing', props);
    return resource.getResponseField('DomainStatus.Processing') as unknown as boolean;
  }

  public get searchInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.SearchInstanceType'),
        outputPath: 'DomainStatus.SearchInstanceType',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.SearchInstanceType', props);
    return resource.getResponseField('DomainStatus.SearchInstanceType') as unknown as string;
  }

  public get searchPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.SearchPartitionCount'),
        outputPath: 'DomainStatus.SearchPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.SearchPartitionCount', props);
    return resource.getResponseField('DomainStatus.SearchPartitionCount') as unknown as number;
  }

  public get searchInstanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.SearchInstanceCount'),
        outputPath: 'DomainStatus.SearchInstanceCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.SearchInstanceCount', props);
    return resource.getResponseField('DomainStatus.SearchInstanceCount') as unknown as number;
  }

  public get limits(): CloudSearchCreateDomainDomainStatusLimits {
    return new CloudSearchCreateDomainDomainStatusLimits(this, 'Limits', this.__resources, this.input);
  }

}

export class CloudSearchCreateDomainDomainStatusDocService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchCreateDomainRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.DocService.Endpoint'),
        outputPath: 'DomainStatus.DocService.Endpoint',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.DocService.Endpoint', props);
    return resource.getResponseField('DomainStatus.DocService.Endpoint') as unknown as string;
  }

}

export class CloudSearchCreateDomainDomainStatusSearchService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchCreateDomainRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.SearchService.Endpoint'),
        outputPath: 'DomainStatus.SearchService.Endpoint',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.SearchService.Endpoint', props);
    return resource.getResponseField('DomainStatus.SearchService.Endpoint') as unknown as string;
  }

}

export class CloudSearchCreateDomainDomainStatusLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchCreateDomainRequest) {
    super(scope, id);
  }

  public get maximumReplicationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.Limits.MaximumReplicationCount'),
        outputPath: 'DomainStatus.Limits.MaximumReplicationCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.Limits.MaximumReplicationCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumReplicationCount') as unknown as number;
  }

  public get maximumPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.CreateDomain.DomainStatus.Limits.MaximumPartitionCount'),
        outputPath: 'DomainStatus.Limits.MaximumPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDomain.DomainStatus.Limits.MaximumPartitionCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumPartitionCount') as unknown as number;
  }

}

export class CloudSearchDefineAnalysisScheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get analysisScheme(): CloudSearchDefineAnalysisSchemeAnalysisScheme {
    return new CloudSearchDefineAnalysisSchemeAnalysisScheme(this, 'AnalysisScheme', this.__resources, this.input);
  }

}

export class CloudSearchDefineAnalysisSchemeAnalysisScheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDefineAnalysisSchemeAnalysisSchemeOptions {
    return new CloudSearchDefineAnalysisSchemeAnalysisSchemeOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDefineAnalysisSchemeAnalysisSchemeStatus {
    return new CloudSearchDefineAnalysisSchemeAnalysisSchemeStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDefineAnalysisSchemeAnalysisSchemeOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get analysisSchemeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName'),
        outputPath: 'AnalysisScheme.Options.AnalysisSchemeName',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeName') as unknown as string;
  }

  public get analysisSchemeLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage'),
        outputPath: 'AnalysisScheme.Options.AnalysisSchemeLanguage',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeLanguage') as unknown as string;
  }

  public get analysisOptions(): CloudSearchDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {
    return new CloudSearchDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(this, 'AnalysisOptions', this.__resources, this.input);
  }

}

export class CloudSearchDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get synonyms(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.Synonyms',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.Synonyms') as unknown as string;
  }

  public get stopwords(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.Stopwords',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.Stopwords') as unknown as string;
  }

  public get stemmingDictionary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.StemmingDictionary',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.StemmingDictionary') as unknown as string;
  }

  public get japaneseTokenizationDictionary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary') as unknown as string;
  }

  public get algorithmicStemming(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming') as unknown as string;
  }

}

export class CloudSearchDefineAnalysisSchemeAnalysisSchemeStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Status.CreationDate'),
        outputPath: 'AnalysisScheme.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Status.CreationDate', props);
    return resource.getResponseField('AnalysisScheme.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Status.UpdateDate'),
        outputPath: 'AnalysisScheme.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Status.UpdateDate', props);
    return resource.getResponseField('AnalysisScheme.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Status.UpdateVersion'),
        outputPath: 'AnalysisScheme.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Status.UpdateVersion', props);
    return resource.getResponseField('AnalysisScheme.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Status.State'),
        outputPath: 'AnalysisScheme.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Status.State', props);
    return resource.getResponseField('AnalysisScheme.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineAnalysisScheme.AnalysisScheme.Status.PendingDeletion'),
        outputPath: 'AnalysisScheme.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineAnalysisScheme.AnalysisScheme.Status.PendingDeletion', props);
    return resource.getResponseField('AnalysisScheme.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDefineExpression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineExpressionRequest) {
    super(scope, id);
  }

  public get expression(): CloudSearchDefineExpressionExpression {
    return new CloudSearchDefineExpressionExpression(this, 'Expression', this.__resources, this.input);
  }

}

export class CloudSearchDefineExpressionExpression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineExpressionRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDefineExpressionExpressionOptions {
    return new CloudSearchDefineExpressionExpressionOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDefineExpressionExpressionStatus {
    return new CloudSearchDefineExpressionExpressionStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDefineExpressionExpressionOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineExpressionRequest) {
    super(scope, id);
  }

  public get expressionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Options.ExpressionName'),
        outputPath: 'Expression.Options.ExpressionName',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Options.ExpressionName', props);
    return resource.getResponseField('Expression.Options.ExpressionName') as unknown as string;
  }

  public get expressionValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Options.ExpressionValue'),
        outputPath: 'Expression.Options.ExpressionValue',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Options.ExpressionValue', props);
    return resource.getResponseField('Expression.Options.ExpressionValue') as unknown as string;
  }

}

export class CloudSearchDefineExpressionExpressionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineExpressionRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Status.CreationDate'),
        outputPath: 'Expression.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Status.CreationDate', props);
    return resource.getResponseField('Expression.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Status.UpdateDate'),
        outputPath: 'Expression.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Status.UpdateDate', props);
    return resource.getResponseField('Expression.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Status.UpdateVersion'),
        outputPath: 'Expression.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Status.UpdateVersion', props);
    return resource.getResponseField('Expression.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Status.State'),
        outputPath: 'Expression.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Status.State', props);
    return resource.getResponseField('Expression.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineExpression.Expression.Status.PendingDeletion'),
        outputPath: 'Expression.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          Expression: {
            ExpressionName: this.input.expression.expressionName,
            ExpressionValue: this.input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineExpression.Expression.Status.PendingDeletion', props);
    return resource.getResponseField('Expression.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexField extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get indexField(): CloudSearchDefineIndexFieldIndexField {
    return new CloudSearchDefineIndexFieldIndexField(this, 'IndexField', this.__resources, this.input);
  }

}

export class CloudSearchDefineIndexFieldIndexField extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDefineIndexFieldIndexFieldOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDefineIndexFieldIndexFieldStatus {
    return new CloudSearchDefineIndexFieldIndexFieldStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get indexFieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IndexFieldName'),
        outputPath: 'IndexField.Options.IndexFieldName',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IndexFieldName', props);
    return resource.getResponseField('IndexField.Options.IndexFieldName') as unknown as string;
  }

  public get indexFieldType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IndexFieldType'),
        outputPath: 'IndexField.Options.IndexFieldType',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IndexFieldType', props);
    return resource.getResponseField('IndexField.Options.IndexFieldType') as unknown as string;
  }

  public get intOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsIntOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsIntOptions(this, 'IntOptions', this.__resources, this.input);
  }

  public get doubleOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsDoubleOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsDoubleOptions(this, 'DoubleOptions', this.__resources, this.input);
  }

  public get literalOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsLiteralOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsLiteralOptions(this, 'LiteralOptions', this.__resources, this.input);
  }

  public get textOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsTextOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsTextOptions(this, 'TextOptions', this.__resources, this.input);
  }

  public get dateOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsDateOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsDateOptions(this, 'DateOptions', this.__resources, this.input);
  }

  public get latLonOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsLatLonOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsLatLonOptions(this, 'LatLonOptions', this.__resources, this.input);
  }

  public get intArrayOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsIntArrayOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsIntArrayOptions(this, 'IntArrayOptions', this.__resources, this.input);
  }

  public get doubleArrayOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsDoubleArrayOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsDoubleArrayOptions(this, 'DoubleArrayOptions', this.__resources, this.input);
  }

  public get literalArrayOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsLiteralArrayOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsLiteralArrayOptions(this, 'LiteralArrayOptions', this.__resources, this.input);
  }

  public get textArrayOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsTextArrayOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsTextArrayOptions(this, 'TextArrayOptions', this.__resources, this.input);
  }

  public get dateArrayOptions(): CloudSearchDefineIndexFieldIndexFieldOptionsDateArrayOptions {
    return new CloudSearchDefineIndexFieldIndexFieldOptionsDateArrayOptions(this, 'DateArrayOptions', this.__resources, this.input);
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsIntOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.DefaultValue'),
        outputPath: 'IndexField.Options.IntOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.IntOptions.DefaultValue') as unknown as number;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.SourceField'),
        outputPath: 'IndexField.Options.IntOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.IntOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.IntOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.IntOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntOptions.SortEnabled'),
        outputPath: 'IndexField.Options.IntOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsDoubleOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DoubleOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.DefaultValue') as unknown as number;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.SourceField'),
        outputPath: 'IndexField.Options.DoubleOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleOptions.SortEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsLiteralOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LiteralOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.SourceField'),
        outputPath: 'IndexField.Options.LiteralOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralOptions.SortEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsTextOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.DefaultValue'),
        outputPath: 'IndexField.Options.TextOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.TextOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.SourceField'),
        outputPath: 'IndexField.Options.TextOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.TextOptions.SourceField') as unknown as string;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.TextOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.SortEnabled'),
        outputPath: 'IndexField.Options.TextOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.SortEnabled') as unknown as boolean;
  }

  public get highlightEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.HighlightEnabled'),
        outputPath: 'IndexField.Options.TextOptions.HighlightEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.HighlightEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.HighlightEnabled') as unknown as boolean;
  }

  public get analysisScheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextOptions.AnalysisScheme'),
        outputPath: 'IndexField.Options.TextOptions.AnalysisScheme',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsDateOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DateOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DateOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.SourceField'),
        outputPath: 'IndexField.Options.DateOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DateOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DateOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DateOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateOptions.SortEnabled'),
        outputPath: 'IndexField.Options.DateOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsLatLonOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LatLonOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.SourceField'),
        outputPath: 'IndexField.Options.LatLonOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LatLonOptions.SortEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LatLonOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsIntArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.IntArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.DefaultValue') as unknown as number;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.IntArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsDoubleArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.DefaultValue') as unknown as number;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsLiteralArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsTextArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.TextArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.TextArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.SourceFields') as unknown as string;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.TextArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.ReturnEnabled') as unknown as boolean;
  }

  public get highlightEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled'),
        outputPath: 'IndexField.Options.TextArrayOptions.HighlightEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.HighlightEnabled') as unknown as boolean;
  }

  public get analysisScheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme'),
        outputPath: 'IndexField.Options.TextArrayOptions.AnalysisScheme',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldOptionsDateArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DateArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.DateArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDefineIndexFieldIndexFieldStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineIndexFieldRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Status.CreationDate'),
        outputPath: 'IndexField.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Status.CreationDate', props);
    return resource.getResponseField('IndexField.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Status.UpdateDate'),
        outputPath: 'IndexField.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Status.UpdateDate', props);
    return resource.getResponseField('IndexField.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Status.UpdateVersion'),
        outputPath: 'IndexField.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Status.UpdateVersion', props);
    return resource.getResponseField('IndexField.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Status.State'),
        outputPath: 'IndexField.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Status.State', props);
    return resource.getResponseField('IndexField.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineIndexField.IndexField.Status.PendingDeletion'),
        outputPath: 'IndexField.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          IndexField: {
            IndexFieldName: this.input.indexField.indexFieldName,
            IndexFieldType: this.input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.input.indexField.intOptions?.defaultValue,
              SourceField: this.input.indexField.intOptions?.sourceField,
              FacetEnabled: this.input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.input.indexField.doubleOptions?.defaultValue,
              SourceField: this.input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.input.indexField.literalOptions?.defaultValue,
              SourceField: this.input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.input.indexField.textOptions?.defaultValue,
              SourceField: this.input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.input.indexField.dateOptions?.defaultValue,
              SourceField: this.input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.input.indexField.latLonOptions?.defaultValue,
              SourceField: this.input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineIndexField.IndexField.Status.PendingDeletion', props);
    return resource.getResponseField('IndexField.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDefineSuggester extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineSuggesterRequest) {
    super(scope, id);
  }

  public get suggester(): CloudSearchDefineSuggesterSuggester {
    return new CloudSearchDefineSuggesterSuggester(this, 'Suggester', this.__resources, this.input);
  }

}

export class CloudSearchDefineSuggesterSuggester extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineSuggesterRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDefineSuggesterSuggesterOptions {
    return new CloudSearchDefineSuggesterSuggesterOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDefineSuggesterSuggesterStatus {
    return new CloudSearchDefineSuggesterSuggesterStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDefineSuggesterSuggesterOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineSuggesterRequest) {
    super(scope, id);
  }

  public get suggesterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Options.SuggesterName'),
        outputPath: 'Suggester.Options.SuggesterName',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Options.SuggesterName', props);
    return resource.getResponseField('Suggester.Options.SuggesterName') as unknown as string;
  }

  public get documentSuggesterOptions(): CloudSearchDefineSuggesterSuggesterOptionsDocumentSuggesterOptions {
    return new CloudSearchDefineSuggesterSuggesterOptionsDocumentSuggesterOptions(this, 'DocumentSuggesterOptions', this.__resources, this.input);
  }

}

export class CloudSearchDefineSuggesterSuggesterOptionsDocumentSuggesterOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineSuggesterRequest) {
    super(scope, id);
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SourceField') as unknown as string;
  }

  public get fuzzyMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.FuzzyMatching',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.FuzzyMatching') as unknown as string;
  }

  public get sortExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.SortExpression',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SortExpression') as unknown as string;
  }

}

export class CloudSearchDefineSuggesterSuggesterStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDefineSuggesterRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Status.CreationDate'),
        outputPath: 'Suggester.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Status.CreationDate', props);
    return resource.getResponseField('Suggester.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Status.UpdateDate'),
        outputPath: 'Suggester.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Status.UpdateDate', props);
    return resource.getResponseField('Suggester.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Status.UpdateVersion'),
        outputPath: 'Suggester.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Status.UpdateVersion', props);
    return resource.getResponseField('Suggester.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Status.State'),
        outputPath: 'Suggester.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Status.State', props);
    return resource.getResponseField('Suggester.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'defineSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DefineSuggester.Suggester.Status.PendingDeletion'),
        outputPath: 'Suggester.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          Suggester: {
            SuggesterName: this.input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DefineSuggester.Suggester.Status.PendingDeletion', props);
    return resource.getResponseField('Suggester.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDeleteAnalysisScheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get analysisScheme(): CloudSearchDeleteAnalysisSchemeAnalysisScheme {
    return new CloudSearchDeleteAnalysisSchemeAnalysisScheme(this, 'AnalysisScheme', this.__resources, this.input);
  }

}

export class CloudSearchDeleteAnalysisSchemeAnalysisScheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptions {
    return new CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDeleteAnalysisSchemeAnalysisSchemeStatus {
    return new CloudSearchDeleteAnalysisSchemeAnalysisSchemeStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get analysisSchemeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName'),
        outputPath: 'AnalysisScheme.Options.AnalysisSchemeName',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeName') as unknown as string;
  }

  public get analysisSchemeLanguage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage'),
        outputPath: 'AnalysisScheme.Options.AnalysisSchemeLanguage',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeLanguage') as unknown as string;
  }

  public get analysisOptions(): CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {
    return new CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(this, 'AnalysisOptions', this.__resources, this.input);
  }

}

export class CloudSearchDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get synonyms(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.Synonyms',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.Synonyms') as unknown as string;
  }

  public get stopwords(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.Stopwords',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.Stopwords') as unknown as string;
  }

  public get stemmingDictionary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.StemmingDictionary',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.StemmingDictionary') as unknown as string;
  }

  public get japaneseTokenizationDictionary(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary') as unknown as string;
  }

  public get algorithmicStemming(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming'),
        outputPath: 'AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming') as unknown as string;
  }

}

export class CloudSearchDeleteAnalysisSchemeAnalysisSchemeStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Status.CreationDate'),
        outputPath: 'AnalysisScheme.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Status.CreationDate', props);
    return resource.getResponseField('AnalysisScheme.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Status.UpdateDate'),
        outputPath: 'AnalysisScheme.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Status.UpdateDate', props);
    return resource.getResponseField('AnalysisScheme.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Status.UpdateVersion'),
        outputPath: 'AnalysisScheme.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Status.UpdateVersion', props);
    return resource.getResponseField('AnalysisScheme.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Status.State'),
        outputPath: 'AnalysisScheme.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Status.State', props);
    return resource.getResponseField('AnalysisScheme.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysisScheme',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteAnalysisScheme.AnalysisScheme.Status.PendingDeletion'),
        outputPath: 'AnalysisScheme.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeName: this.input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysisScheme.AnalysisScheme.Status.PendingDeletion', props);
    return resource.getResponseField('AnalysisScheme.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDeleteDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteDomainRequest) {
    super(scope, id);
  }

  public get domainStatus(): CloudSearchDeleteDomainDomainStatus {
    return new CloudSearchDeleteDomainDomainStatus(this, 'DomainStatus', this.__resources, this.input);
  }

}

export class CloudSearchDeleteDomainDomainStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteDomainRequest) {
    super(scope, id);
  }

  public get domainId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.DomainId'),
        outputPath: 'DomainStatus.DomainId',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.DomainId', props);
    return resource.getResponseField('DomainStatus.DomainId') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.DomainName'),
        outputPath: 'DomainStatus.DomainName',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.DomainName', props);
    return resource.getResponseField('DomainStatus.DomainName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.ARN'),
        outputPath: 'DomainStatus.ARN',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.ARN', props);
    return resource.getResponseField('DomainStatus.ARN') as unknown as string;
  }

  public get created(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.Created'),
        outputPath: 'DomainStatus.Created',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.Created', props);
    return resource.getResponseField('DomainStatus.Created') as unknown as boolean;
  }

  public get deleted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.Deleted'),
        outputPath: 'DomainStatus.Deleted',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.Deleted', props);
    return resource.getResponseField('DomainStatus.Deleted') as unknown as boolean;
  }

  public get docService(): CloudSearchDeleteDomainDomainStatusDocService {
    return new CloudSearchDeleteDomainDomainStatusDocService(this, 'DocService', this.__resources, this.input);
  }

  public get searchService(): CloudSearchDeleteDomainDomainStatusSearchService {
    return new CloudSearchDeleteDomainDomainStatusSearchService(this, 'SearchService', this.__resources, this.input);
  }

  public get requiresIndexDocuments(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.RequiresIndexDocuments'),
        outputPath: 'DomainStatus.RequiresIndexDocuments',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.RequiresIndexDocuments', props);
    return resource.getResponseField('DomainStatus.RequiresIndexDocuments') as unknown as boolean;
  }

  public get processing(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.Processing'),
        outputPath: 'DomainStatus.Processing',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.Processing', props);
    return resource.getResponseField('DomainStatus.Processing') as unknown as boolean;
  }

  public get searchInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.SearchInstanceType'),
        outputPath: 'DomainStatus.SearchInstanceType',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.SearchInstanceType', props);
    return resource.getResponseField('DomainStatus.SearchInstanceType') as unknown as string;
  }

  public get searchPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.SearchPartitionCount'),
        outputPath: 'DomainStatus.SearchPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.SearchPartitionCount', props);
    return resource.getResponseField('DomainStatus.SearchPartitionCount') as unknown as number;
  }

  public get searchInstanceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.SearchInstanceCount'),
        outputPath: 'DomainStatus.SearchInstanceCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.SearchInstanceCount', props);
    return resource.getResponseField('DomainStatus.SearchInstanceCount') as unknown as number;
  }

  public get limits(): CloudSearchDeleteDomainDomainStatusLimits {
    return new CloudSearchDeleteDomainDomainStatusLimits(this, 'Limits', this.__resources, this.input);
  }

}

export class CloudSearchDeleteDomainDomainStatusDocService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteDomainRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.DocService.Endpoint'),
        outputPath: 'DomainStatus.DocService.Endpoint',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.DocService.Endpoint', props);
    return resource.getResponseField('DomainStatus.DocService.Endpoint') as unknown as string;
  }

}

export class CloudSearchDeleteDomainDomainStatusSearchService extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteDomainRequest) {
    super(scope, id);
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.SearchService.Endpoint'),
        outputPath: 'DomainStatus.SearchService.Endpoint',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.SearchService.Endpoint', props);
    return resource.getResponseField('DomainStatus.SearchService.Endpoint') as unknown as string;
  }

}

export class CloudSearchDeleteDomainDomainStatusLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteDomainRequest) {
    super(scope, id);
  }

  public get maximumReplicationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.Limits.MaximumReplicationCount'),
        outputPath: 'DomainStatus.Limits.MaximumReplicationCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.Limits.MaximumReplicationCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumReplicationCount') as unknown as number;
  }

  public get maximumPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDomain',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteDomain.DomainStatus.Limits.MaximumPartitionCount'),
        outputPath: 'DomainStatus.Limits.MaximumPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDomain.DomainStatus.Limits.MaximumPartitionCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumPartitionCount') as unknown as number;
  }

}

export class CloudSearchDeleteExpression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteExpressionRequest) {
    super(scope, id);
  }

  public get expression(): CloudSearchDeleteExpressionExpression {
    return new CloudSearchDeleteExpressionExpression(this, 'Expression', this.__resources, this.input);
  }

}

export class CloudSearchDeleteExpressionExpression extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteExpressionRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDeleteExpressionExpressionOptions {
    return new CloudSearchDeleteExpressionExpressionOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDeleteExpressionExpressionStatus {
    return new CloudSearchDeleteExpressionExpressionStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDeleteExpressionExpressionOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteExpressionRequest) {
    super(scope, id);
  }

  public get expressionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Options.ExpressionName'),
        outputPath: 'Expression.Options.ExpressionName',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Options.ExpressionName', props);
    return resource.getResponseField('Expression.Options.ExpressionName') as unknown as string;
  }

  public get expressionValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Options.ExpressionValue'),
        outputPath: 'Expression.Options.ExpressionValue',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Options.ExpressionValue', props);
    return resource.getResponseField('Expression.Options.ExpressionValue') as unknown as string;
  }

}

export class CloudSearchDeleteExpressionExpressionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteExpressionRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Status.CreationDate'),
        outputPath: 'Expression.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Status.CreationDate', props);
    return resource.getResponseField('Expression.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Status.UpdateDate'),
        outputPath: 'Expression.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Status.UpdateDate', props);
    return resource.getResponseField('Expression.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Status.UpdateVersion'),
        outputPath: 'Expression.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Status.UpdateVersion', props);
    return resource.getResponseField('Expression.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Status.State'),
        outputPath: 'Expression.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Status.State', props);
    return resource.getResponseField('Expression.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteExpression',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteExpression.Expression.Status.PendingDeletion'),
        outputPath: 'Expression.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionName: this.input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteExpression.Expression.Status.PendingDeletion', props);
    return resource.getResponseField('Expression.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexField extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get indexField(): CloudSearchDeleteIndexFieldIndexField {
    return new CloudSearchDeleteIndexFieldIndexField(this, 'IndexField', this.__resources, this.input);
  }

}

export class CloudSearchDeleteIndexFieldIndexField extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDeleteIndexFieldIndexFieldOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDeleteIndexFieldIndexFieldStatus {
    return new CloudSearchDeleteIndexFieldIndexFieldStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get indexFieldName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IndexFieldName'),
        outputPath: 'IndexField.Options.IndexFieldName',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IndexFieldName', props);
    return resource.getResponseField('IndexField.Options.IndexFieldName') as unknown as string;
  }

  public get indexFieldType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IndexFieldType'),
        outputPath: 'IndexField.Options.IndexFieldType',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IndexFieldType', props);
    return resource.getResponseField('IndexField.Options.IndexFieldType') as unknown as string;
  }

  public get intOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsIntOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsIntOptions(this, 'IntOptions', this.__resources, this.input);
  }

  public get doubleOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleOptions(this, 'DoubleOptions', this.__resources, this.input);
  }

  public get literalOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralOptions(this, 'LiteralOptions', this.__resources, this.input);
  }

  public get textOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsTextOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsTextOptions(this, 'TextOptions', this.__resources, this.input);
  }

  public get dateOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsDateOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsDateOptions(this, 'DateOptions', this.__resources, this.input);
  }

  public get latLonOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsLatLonOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsLatLonOptions(this, 'LatLonOptions', this.__resources, this.input);
  }

  public get intArrayOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsIntArrayOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsIntArrayOptions(this, 'IntArrayOptions', this.__resources, this.input);
  }

  public get doubleArrayOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions(this, 'DoubleArrayOptions', this.__resources, this.input);
  }

  public get literalArrayOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions(this, 'LiteralArrayOptions', this.__resources, this.input);
  }

  public get textArrayOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsTextArrayOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsTextArrayOptions(this, 'TextArrayOptions', this.__resources, this.input);
  }

  public get dateArrayOptions(): CloudSearchDeleteIndexFieldIndexFieldOptionsDateArrayOptions {
    return new CloudSearchDeleteIndexFieldIndexFieldOptionsDateArrayOptions(this, 'DateArrayOptions', this.__resources, this.input);
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsIntOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.DefaultValue'),
        outputPath: 'IndexField.Options.IntOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.IntOptions.DefaultValue') as unknown as number;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.SourceField'),
        outputPath: 'IndexField.Options.IntOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.IntOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.IntOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.IntOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntOptions.SortEnabled'),
        outputPath: 'IndexField.Options.IntOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DoubleOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.DefaultValue') as unknown as number;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.SourceField'),
        outputPath: 'IndexField.Options.DoubleOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleOptions.SortEnabled'),
        outputPath: 'IndexField.Options.DoubleOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LiteralOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.SourceField'),
        outputPath: 'IndexField.Options.LiteralOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralOptions.SortEnabled'),
        outputPath: 'IndexField.Options.LiteralOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsTextOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.DefaultValue'),
        outputPath: 'IndexField.Options.TextOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.TextOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.SourceField'),
        outputPath: 'IndexField.Options.TextOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.TextOptions.SourceField') as unknown as string;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.TextOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.SortEnabled'),
        outputPath: 'IndexField.Options.TextOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.SortEnabled') as unknown as boolean;
  }

  public get highlightEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.HighlightEnabled'),
        outputPath: 'IndexField.Options.TextOptions.HighlightEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.HighlightEnabled', props);
    return resource.getResponseField('IndexField.Options.TextOptions.HighlightEnabled') as unknown as boolean;
  }

  public get analysisScheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextOptions.AnalysisScheme'),
        outputPath: 'IndexField.Options.TextOptions.AnalysisScheme',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsDateOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DateOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DateOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.SourceField'),
        outputPath: 'IndexField.Options.DateOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DateOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DateOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DateOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateOptions.SortEnabled'),
        outputPath: 'IndexField.Options.DateOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsLatLonOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LatLonOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.DefaultValue') as unknown as string;
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.SourceField'),
        outputPath: 'IndexField.Options.LatLonOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.SourceField', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SourceField') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.ReturnEnabled') as unknown as boolean;
  }

  public get sortEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LatLonOptions.SortEnabled'),
        outputPath: 'IndexField.Options.LatLonOptions.SortEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LatLonOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsIntArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.IntArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.DefaultValue') as unknown as number;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.IntArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.IntArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.DefaultValue') as unknown as number;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DoubleArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.LiteralArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsTextArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.TextArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.TextArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.SourceFields') as unknown as string;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.TextArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.ReturnEnabled') as unknown as boolean;
  }

  public get highlightEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled'),
        outputPath: 'IndexField.Options.TextArrayOptions.HighlightEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.HighlightEnabled') as unknown as boolean;
  }

  public get analysisScheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme'),
        outputPath: 'IndexField.Options.TextArrayOptions.AnalysisScheme',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldOptionsDateArrayOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateArrayOptions.DefaultValue'),
        outputPath: 'IndexField.Options.DateArrayOptions.DefaultValue',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateArrayOptions.DefaultValue', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.DefaultValue') as unknown as string;
  }

  public get sourceFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateArrayOptions.SourceFields'),
        outputPath: 'IndexField.Options.DateArrayOptions.SourceFields',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateArrayOptions.SourceFields', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.SourceFields') as unknown as string;
  }

  public get facetEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateArrayOptions.FacetEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.FacetEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateArrayOptions.FacetEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.FacetEnabled') as unknown as boolean;
  }

  public get searchEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateArrayOptions.SearchEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.SearchEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateArrayOptions.SearchEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.SearchEnabled') as unknown as boolean;
  }

  public get returnEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled'),
        outputPath: 'IndexField.Options.DateArrayOptions.ReturnEnabled',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchDeleteIndexFieldIndexFieldStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteIndexFieldRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Status.CreationDate'),
        outputPath: 'IndexField.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Status.CreationDate', props);
    return resource.getResponseField('IndexField.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Status.UpdateDate'),
        outputPath: 'IndexField.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Status.UpdateDate', props);
    return resource.getResponseField('IndexField.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Status.UpdateVersion'),
        outputPath: 'IndexField.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Status.UpdateVersion', props);
    return resource.getResponseField('IndexField.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Status.State'),
        outputPath: 'IndexField.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Status.State', props);
    return resource.getResponseField('IndexField.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIndexField',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteIndexField.IndexField.Status.PendingDeletion'),
        outputPath: 'IndexField.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          IndexFieldName: this.input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIndexField.IndexField.Status.PendingDeletion', props);
    return resource.getResponseField('IndexField.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDeleteSuggester extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteSuggesterRequest) {
    super(scope, id);
  }

  public get suggester(): CloudSearchDeleteSuggesterSuggester {
    return new CloudSearchDeleteSuggesterSuggester(this, 'Suggester', this.__resources, this.input);
  }

}

export class CloudSearchDeleteSuggesterSuggester extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteSuggesterRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDeleteSuggesterSuggesterOptions {
    return new CloudSearchDeleteSuggesterSuggesterOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDeleteSuggesterSuggesterStatus {
    return new CloudSearchDeleteSuggesterSuggesterStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDeleteSuggesterSuggesterOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteSuggesterRequest) {
    super(scope, id);
  }

  public get suggesterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Options.SuggesterName'),
        outputPath: 'Suggester.Options.SuggesterName',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Options.SuggesterName', props);
    return resource.getResponseField('Suggester.Options.SuggesterName') as unknown as string;
  }

  public get documentSuggesterOptions(): CloudSearchDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions {
    return new CloudSearchDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions(this, 'DocumentSuggesterOptions', this.__resources, this.input);
  }

}

export class CloudSearchDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteSuggesterRequest) {
    super(scope, id);
  }

  public get sourceField(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.SourceField',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SourceField') as unknown as string;
  }

  public get fuzzyMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.FuzzyMatching',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.FuzzyMatching') as unknown as string;
  }

  public get sortExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression'),
        outputPath: 'Suggester.Options.DocumentSuggesterOptions.SortExpression',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SortExpression') as unknown as string;
  }

}

export class CloudSearchDeleteSuggesterSuggesterStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDeleteSuggesterRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Status.CreationDate'),
        outputPath: 'Suggester.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Status.CreationDate', props);
    return resource.getResponseField('Suggester.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Status.UpdateDate'),
        outputPath: 'Suggester.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Status.UpdateDate', props);
    return resource.getResponseField('Suggester.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Status.UpdateVersion'),
        outputPath: 'Suggester.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Status.UpdateVersion', props);
    return resource.getResponseField('Suggester.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Status.State'),
        outputPath: 'Suggester.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Status.State', props);
    return resource.getResponseField('Suggester.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSuggester',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DeleteSuggester.Suggester.Status.PendingDeletion'),
        outputPath: 'Suggester.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterName: this.input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSuggester.Suggester.Status.PendingDeletion', props);
    return resource.getResponseField('Suggester.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDescribeAnalysisSchemes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeAnalysisSchemesRequest) {
    super(scope, id);
  }

  public get analysisSchemes(): shapes.CloudSearchAnalysisSchemeStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisSchemes',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAnalysisSchemes.AnalysisSchemes'),
        outputPath: 'AnalysisSchemes',
        parameters: {
          DomainName: this.input.domainName,
          AnalysisSchemeNames: this.input.analysisSchemeNames,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisSchemes.AnalysisSchemes', props);
    return resource.getResponseField('AnalysisSchemes') as unknown as shapes.CloudSearchAnalysisSchemeStatus[];
  }

}

export class CloudSearchDescribeAvailabilityOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get availabilityOptions(): CloudSearchDescribeAvailabilityOptionsAvailabilityOptions {
    return new CloudSearchDescribeAvailabilityOptionsAvailabilityOptions(this, 'AvailabilityOptions', this.__resources, this.input);
  }

}

export class CloudSearchDescribeAvailabilityOptionsAvailabilityOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get options(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Options'),
        outputPath: 'AvailabilityOptions.Options',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Options', props);
    return resource.getResponseField('AvailabilityOptions.Options') as unknown as boolean;
  }

  public get status(): CloudSearchDescribeAvailabilityOptionsAvailabilityOptionsStatus {
    return new CloudSearchDescribeAvailabilityOptionsAvailabilityOptionsStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDescribeAvailabilityOptionsAvailabilityOptionsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Status.CreationDate'),
        outputPath: 'AvailabilityOptions.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.CreationDate', props);
    return resource.getResponseField('AvailabilityOptions.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateDate'),
        outputPath: 'AvailabilityOptions.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateDate', props);
    return resource.getResponseField('AvailabilityOptions.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion'),
        outputPath: 'AvailabilityOptions.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion', props);
    return resource.getResponseField('AvailabilityOptions.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Status.State'),
        outputPath: 'AvailabilityOptions.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.State', props);
    return resource.getResponseField('AvailabilityOptions.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion'),
        outputPath: 'AvailabilityOptions.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion', props);
    return resource.getResponseField('AvailabilityOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDescribeDomainEndpointOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get domainEndpointOptions(): CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptions {
    return new CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptions(this, 'DomainEndpointOptions', this.__resources, this.input);
  }

}

export class CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsOptions {
    return new CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsStatus {
    return new CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get enforceHttps(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS'),
        outputPath: 'DomainEndpointOptions.Options.EnforceHTTPS',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS', props);
    return resource.getResponseField('DomainEndpointOptions.Options.EnforceHTTPS') as unknown as boolean;
  }

  public get tlsSecurityPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy'),
        outputPath: 'DomainEndpointOptions.Options.TLSSecurityPolicy',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
    return resource.getResponseField('DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as string;
  }

}

export class CloudSearchDescribeDomainEndpointOptionsDomainEndpointOptionsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate'),
        outputPath: 'DomainEndpointOptions.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate', props);
    return resource.getResponseField('DomainEndpointOptions.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate'),
        outputPath: 'DomainEndpointOptions.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate', props);
    return resource.getResponseField('DomainEndpointOptions.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion'),
        outputPath: 'DomainEndpointOptions.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Status.State'),
        outputPath: 'DomainEndpointOptions.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.State', props);
    return resource.getResponseField('DomainEndpointOptions.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion'),
        outputPath: 'DomainEndpointOptions.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDescribeDomains extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeDomainsRequest) {
    super(scope, id);
  }

  public get domainStatusList(): shapes.CloudSearchDomainStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDomains',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeDomains.DomainStatusList'),
        outputPath: 'DomainStatusList',
        parameters: {
          DomainNames: this.input.domainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDomains.DomainStatusList', props);
    return resource.getResponseField('DomainStatusList') as unknown as shapes.CloudSearchDomainStatus[];
  }

}

export class CloudSearchDescribeExpressions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeExpressionsRequest) {
    super(scope, id);
  }

  public get expressions(): shapes.CloudSearchExpressionStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeExpressions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeExpressions.Expressions'),
        outputPath: 'Expressions',
        parameters: {
          DomainName: this.input.domainName,
          ExpressionNames: this.input.expressionNames,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeExpressions.Expressions', props);
    return resource.getResponseField('Expressions') as unknown as shapes.CloudSearchExpressionStatus[];
  }

}

export class CloudSearchDescribeIndexFields extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeIndexFieldsRequest) {
    super(scope, id);
  }

  public get indexFields(): shapes.CloudSearchIndexFieldStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIndexFields',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeIndexFields.IndexFields'),
        outputPath: 'IndexFields',
        parameters: {
          DomainName: this.input.domainName,
          FieldNames: this.input.fieldNames,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIndexFields.IndexFields', props);
    return resource.getResponseField('IndexFields') as unknown as shapes.CloudSearchIndexFieldStatus[];
  }

}

export class CloudSearchDescribeScalingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeScalingParametersRequest) {
    super(scope, id);
  }

  public get scalingParameters(): CloudSearchDescribeScalingParametersScalingParameters {
    return new CloudSearchDescribeScalingParametersScalingParameters(this, 'ScalingParameters', this.__resources, this.input);
  }

}

export class CloudSearchDescribeScalingParametersScalingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeScalingParametersRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchDescribeScalingParametersScalingParametersOptions {
    return new CloudSearchDescribeScalingParametersScalingParametersOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchDescribeScalingParametersScalingParametersStatus {
    return new CloudSearchDescribeScalingParametersScalingParametersStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDescribeScalingParametersScalingParametersOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeScalingParametersRequest) {
    super(scope, id);
  }

  public get desiredInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Options.DesiredInstanceType'),
        outputPath: 'ScalingParameters.Options.DesiredInstanceType',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Options.DesiredInstanceType', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredInstanceType') as unknown as string;
  }

  public get desiredReplicationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Options.DesiredReplicationCount'),
        outputPath: 'ScalingParameters.Options.DesiredReplicationCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Options.DesiredReplicationCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredReplicationCount') as unknown as number;
  }

  public get desiredPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Options.DesiredPartitionCount'),
        outputPath: 'ScalingParameters.Options.DesiredPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Options.DesiredPartitionCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredPartitionCount') as unknown as number;
  }

}

export class CloudSearchDescribeScalingParametersScalingParametersStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeScalingParametersRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Status.CreationDate'),
        outputPath: 'ScalingParameters.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Status.CreationDate', props);
    return resource.getResponseField('ScalingParameters.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Status.UpdateDate'),
        outputPath: 'ScalingParameters.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Status.UpdateDate', props);
    return resource.getResponseField('ScalingParameters.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Status.UpdateVersion'),
        outputPath: 'ScalingParameters.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Status.UpdateVersion', props);
    return resource.getResponseField('ScalingParameters.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Status.State'),
        outputPath: 'ScalingParameters.Status.State',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Status.State', props);
    return resource.getResponseField('ScalingParameters.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeScalingParameters.ScalingParameters.Status.PendingDeletion'),
        outputPath: 'ScalingParameters.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeScalingParameters.ScalingParameters.Status.PendingDeletion', props);
    return resource.getResponseField('ScalingParameters.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDescribeServiceAccessPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get accessPolicies(): CloudSearchDescribeServiceAccessPoliciesAccessPolicies {
    return new CloudSearchDescribeServiceAccessPoliciesAccessPolicies(this, 'AccessPolicies', this.__resources, this.input);
  }

}

export class CloudSearchDescribeServiceAccessPoliciesAccessPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get options(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Options'),
        outputPath: 'AccessPolicies.Options',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Options', props);
    return resource.getResponseField('AccessPolicies.Options') as unknown as string;
  }

  public get status(): CloudSearchDescribeServiceAccessPoliciesAccessPoliciesStatus {
    return new CloudSearchDescribeServiceAccessPoliciesAccessPoliciesStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchDescribeServiceAccessPoliciesAccessPoliciesStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Status.CreationDate'),
        outputPath: 'AccessPolicies.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Status.CreationDate', props);
    return resource.getResponseField('AccessPolicies.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateDate'),
        outputPath: 'AccessPolicies.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateDate', props);
    return resource.getResponseField('AccessPolicies.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateVersion'),
        outputPath: 'AccessPolicies.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateVersion', props);
    return resource.getResponseField('AccessPolicies.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Status.State'),
        outputPath: 'AccessPolicies.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Status.State', props);
    return resource.getResponseField('AccessPolicies.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeServiceAccessPolicies.AccessPolicies.Status.PendingDeletion'),
        outputPath: 'AccessPolicies.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceAccessPolicies.AccessPolicies.Status.PendingDeletion', props);
    return resource.getResponseField('AccessPolicies.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchDescribeSuggesters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchDescribeSuggestersRequest) {
    super(scope, id);
  }

  public get suggesters(): shapes.CloudSearchSuggesterStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSuggesters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.DescribeSuggesters.Suggesters'),
        outputPath: 'Suggesters',
        parameters: {
          DomainName: this.input.domainName,
          SuggesterNames: this.input.suggesterNames,
          Deployed: this.input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSuggesters.Suggesters', props);
    return resource.getResponseField('Suggesters') as unknown as shapes.CloudSearchSuggesterStatus[];
  }

}

export class CloudSearchIndexDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchIndexDocumentsRequest) {
    super(scope, id);
  }

  public get fieldNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'indexDocuments',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.IndexDocuments.FieldNames'),
        outputPath: 'FieldNames',
        parameters: {
          DomainName: this.input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IndexDocuments.FieldNames', props);
    return resource.getResponseField('FieldNames') as unknown as string[];
  }

}

export class CloudSearchListDomainNames extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get domainNames(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDomainNames',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.ListDomainNames.DomainNames'),
        outputPath: 'DomainNames',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDomainNames.DomainNames', props);
    return resource.getResponseField('DomainNames') as unknown as Record<string, string>;
  }

}

export class CloudSearchUpdateAvailabilityOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get availabilityOptions(): CloudSearchUpdateAvailabilityOptionsAvailabilityOptions {
    return new CloudSearchUpdateAvailabilityOptionsAvailabilityOptions(this, 'AvailabilityOptions', this.__resources, this.input);
  }

}

export class CloudSearchUpdateAvailabilityOptionsAvailabilityOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get options(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Options'),
        outputPath: 'AvailabilityOptions.Options',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Options', props);
    return resource.getResponseField('AvailabilityOptions.Options') as unknown as boolean;
  }

  public get status(): CloudSearchUpdateAvailabilityOptionsAvailabilityOptionsStatus {
    return new CloudSearchUpdateAvailabilityOptionsAvailabilityOptionsStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchUpdateAvailabilityOptionsAvailabilityOptionsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Status.CreationDate'),
        outputPath: 'AvailabilityOptions.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.CreationDate', props);
    return resource.getResponseField('AvailabilityOptions.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateDate'),
        outputPath: 'AvailabilityOptions.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateDate', props);
    return resource.getResponseField('AvailabilityOptions.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion'),
        outputPath: 'AvailabilityOptions.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion', props);
    return resource.getResponseField('AvailabilityOptions.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Status.State'),
        outputPath: 'AvailabilityOptions.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.State', props);
    return resource.getResponseField('AvailabilityOptions.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAvailabilityOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion'),
        outputPath: 'AvailabilityOptions.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          MultiAZ: this.input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion', props);
    return resource.getResponseField('AvailabilityOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchUpdateDomainEndpointOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get domainEndpointOptions(): CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptions {
    return new CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptions(this, 'DomainEndpointOptions', this.__resources, this.input);
  }

}

export class CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsOptions {
    return new CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsStatus {
    return new CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get enforceHttps(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS'),
        outputPath: 'DomainEndpointOptions.Options.EnforceHTTPS',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS', props);
    return resource.getResponseField('DomainEndpointOptions.Options.EnforceHTTPS') as unknown as boolean;
  }

  public get tlsSecurityPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy'),
        outputPath: 'DomainEndpointOptions.Options.TLSSecurityPolicy',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
    return resource.getResponseField('DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as string;
  }

}

export class CloudSearchUpdateDomainEndpointOptionsDomainEndpointOptionsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate'),
        outputPath: 'DomainEndpointOptions.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate', props);
    return resource.getResponseField('DomainEndpointOptions.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate'),
        outputPath: 'DomainEndpointOptions.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate', props);
    return resource.getResponseField('DomainEndpointOptions.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion'),
        outputPath: 'DomainEndpointOptions.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Status.State'),
        outputPath: 'DomainEndpointOptions.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.State', props);
    return resource.getResponseField('DomainEndpointOptions.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDomainEndpointOptions',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion'),
        outputPath: 'DomainEndpointOptions.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchUpdateScalingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateScalingParametersRequest) {
    super(scope, id);
  }

  public get scalingParameters(): CloudSearchUpdateScalingParametersScalingParameters {
    return new CloudSearchUpdateScalingParametersScalingParameters(this, 'ScalingParameters', this.__resources, this.input);
  }

}

export class CloudSearchUpdateScalingParametersScalingParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateScalingParametersRequest) {
    super(scope, id);
  }

  public get options(): CloudSearchUpdateScalingParametersScalingParametersOptions {
    return new CloudSearchUpdateScalingParametersScalingParametersOptions(this, 'Options', this.__resources, this.input);
  }

  public get status(): CloudSearchUpdateScalingParametersScalingParametersStatus {
    return new CloudSearchUpdateScalingParametersScalingParametersStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchUpdateScalingParametersScalingParametersOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateScalingParametersRequest) {
    super(scope, id);
  }

  public get desiredInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Options.DesiredInstanceType'),
        outputPath: 'ScalingParameters.Options.DesiredInstanceType',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Options.DesiredInstanceType', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredInstanceType') as unknown as string;
  }

  public get desiredReplicationCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Options.DesiredReplicationCount'),
        outputPath: 'ScalingParameters.Options.DesiredReplicationCount',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Options.DesiredReplicationCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredReplicationCount') as unknown as number;
  }

  public get desiredPartitionCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Options.DesiredPartitionCount'),
        outputPath: 'ScalingParameters.Options.DesiredPartitionCount',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Options.DesiredPartitionCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredPartitionCount') as unknown as number;
  }

}

export class CloudSearchUpdateScalingParametersScalingParametersStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateScalingParametersRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Status.CreationDate'),
        outputPath: 'ScalingParameters.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Status.CreationDate', props);
    return resource.getResponseField('ScalingParameters.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Status.UpdateDate'),
        outputPath: 'ScalingParameters.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Status.UpdateDate', props);
    return resource.getResponseField('ScalingParameters.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Status.UpdateVersion'),
        outputPath: 'ScalingParameters.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Status.UpdateVersion', props);
    return resource.getResponseField('ScalingParameters.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Status.State'),
        outputPath: 'ScalingParameters.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Status.State', props);
    return resource.getResponseField('ScalingParameters.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateScalingParameters',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateScalingParameters.ScalingParameters.Status.PendingDeletion'),
        outputPath: 'ScalingParameters.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateScalingParameters.ScalingParameters.Status.PendingDeletion', props);
    return resource.getResponseField('ScalingParameters.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchUpdateServiceAccessPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get accessPolicies(): CloudSearchUpdateServiceAccessPoliciesAccessPolicies {
    return new CloudSearchUpdateServiceAccessPoliciesAccessPolicies(this, 'AccessPolicies', this.__resources, this.input);
  }

}

export class CloudSearchUpdateServiceAccessPoliciesAccessPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get options(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Options'),
        outputPath: 'AccessPolicies.Options',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Options', props);
    return resource.getResponseField('AccessPolicies.Options') as unknown as string;
  }

  public get status(): CloudSearchUpdateServiceAccessPoliciesAccessPoliciesStatus {
    return new CloudSearchUpdateServiceAccessPoliciesAccessPoliciesStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CloudSearchUpdateServiceAccessPoliciesAccessPoliciesStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
    super(scope, id);
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Status.CreationDate'),
        outputPath: 'AccessPolicies.Status.CreationDate',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Status.CreationDate', props);
    return resource.getResponseField('AccessPolicies.Status.CreationDate') as unknown as string;
  }

  public get updateDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateDate'),
        outputPath: 'AccessPolicies.Status.UpdateDate',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateDate', props);
    return resource.getResponseField('AccessPolicies.Status.UpdateDate') as unknown as string;
  }

  public get updateVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateVersion'),
        outputPath: 'AccessPolicies.Status.UpdateVersion',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateVersion', props);
    return resource.getResponseField('AccessPolicies.Status.UpdateVersion') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Status.State'),
        outputPath: 'AccessPolicies.Status.State',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Status.State', props);
    return resource.getResponseField('AccessPolicies.Status.State') as unknown as string;
  }

  public get pendingDeletion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceAccessPolicies',
        service: 'CloudSearch',
        physicalResourceId: cr.PhysicalResourceId.of('CloudSearch.UpdateServiceAccessPolicies.AccessPolicies.Status.PendingDeletion'),
        outputPath: 'AccessPolicies.Status.PendingDeletion',
        parameters: {
          DomainName: this.input.domainName,
          AccessPolicies: this.input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServiceAccessPolicies.AccessPolicies.Status.PendingDeletion', props);
    return resource.getResponseField('AccessPolicies.Status.PendingDeletion') as unknown as boolean;
  }

}

