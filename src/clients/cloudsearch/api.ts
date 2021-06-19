import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudSearchClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public buildSuggesters(input: shapes.CloudSearchBuildSuggestersRequest): CloudSearchResponsesBuildSuggesters {
    return new CloudSearchResponsesBuildSuggesters(this, this.__resources, input);
  }

  public createDomain(input: shapes.CloudSearchCreateDomainRequest): CloudSearchResponsesCreateDomain {
    return new CloudSearchResponsesCreateDomain(this, this.__resources, input);
  }

  public defineAnalysisScheme(input: shapes.CloudSearchDefineAnalysisSchemeRequest): CloudSearchResponsesDefineAnalysisScheme {
    return new CloudSearchResponsesDefineAnalysisScheme(this, this.__resources, input);
  }

  public defineExpression(input: shapes.CloudSearchDefineExpressionRequest): CloudSearchResponsesDefineExpression {
    return new CloudSearchResponsesDefineExpression(this, this.__resources, input);
  }

  public defineIndexField(input: shapes.CloudSearchDefineIndexFieldRequest): CloudSearchResponsesDefineIndexField {
    return new CloudSearchResponsesDefineIndexField(this, this.__resources, input);
  }

  public defineSuggester(input: shapes.CloudSearchDefineSuggesterRequest): CloudSearchResponsesDefineSuggester {
    return new CloudSearchResponsesDefineSuggester(this, this.__resources, input);
  }

  public deleteAnalysisScheme(input: shapes.CloudSearchDeleteAnalysisSchemeRequest): CloudSearchResponsesDeleteAnalysisScheme {
    return new CloudSearchResponsesDeleteAnalysisScheme(this, this.__resources, input);
  }

  public deleteDomain(input: shapes.CloudSearchDeleteDomainRequest): CloudSearchResponsesDeleteDomain {
    return new CloudSearchResponsesDeleteDomain(this, this.__resources, input);
  }

  public deleteExpression(input: shapes.CloudSearchDeleteExpressionRequest): CloudSearchResponsesDeleteExpression {
    return new CloudSearchResponsesDeleteExpression(this, this.__resources, input);
  }

  public deleteIndexField(input: shapes.CloudSearchDeleteIndexFieldRequest): CloudSearchResponsesDeleteIndexField {
    return new CloudSearchResponsesDeleteIndexField(this, this.__resources, input);
  }

  public deleteSuggester(input: shapes.CloudSearchDeleteSuggesterRequest): CloudSearchResponsesDeleteSuggester {
    return new CloudSearchResponsesDeleteSuggester(this, this.__resources, input);
  }

  public describeAnalysisSchemes(input: shapes.CloudSearchDescribeAnalysisSchemesRequest): CloudSearchResponsesDescribeAnalysisSchemes {
    return new CloudSearchResponsesDescribeAnalysisSchemes(this, this.__resources, input);
  }

  public describeAvailabilityOptions(input: shapes.CloudSearchDescribeAvailabilityOptionsRequest): CloudSearchResponsesDescribeAvailabilityOptions {
    return new CloudSearchResponsesDescribeAvailabilityOptions(this, this.__resources, input);
  }

  public describeDomainEndpointOptions(input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest): CloudSearchResponsesDescribeDomainEndpointOptions {
    return new CloudSearchResponsesDescribeDomainEndpointOptions(this, this.__resources, input);
  }

  public describeDomains(input: shapes.CloudSearchDescribeDomainsRequest): CloudSearchResponsesDescribeDomains {
    return new CloudSearchResponsesDescribeDomains(this, this.__resources, input);
  }

  public describeExpressions(input: shapes.CloudSearchDescribeExpressionsRequest): CloudSearchResponsesDescribeExpressions {
    return new CloudSearchResponsesDescribeExpressions(this, this.__resources, input);
  }

  public describeIndexFields(input: shapes.CloudSearchDescribeIndexFieldsRequest): CloudSearchResponsesDescribeIndexFields {
    return new CloudSearchResponsesDescribeIndexFields(this, this.__resources, input);
  }

  public describeScalingParameters(input: shapes.CloudSearchDescribeScalingParametersRequest): CloudSearchResponsesDescribeScalingParameters {
    return new CloudSearchResponsesDescribeScalingParameters(this, this.__resources, input);
  }

  public describeServiceAccessPolicies(input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest): CloudSearchResponsesDescribeServiceAccessPolicies {
    return new CloudSearchResponsesDescribeServiceAccessPolicies(this, this.__resources, input);
  }

  public describeSuggesters(input: shapes.CloudSearchDescribeSuggestersRequest): CloudSearchResponsesDescribeSuggesters {
    return new CloudSearchResponsesDescribeSuggesters(this, this.__resources, input);
  }

  public indexDocuments(input: shapes.CloudSearchIndexDocumentsRequest): CloudSearchResponsesIndexDocuments {
    return new CloudSearchResponsesIndexDocuments(this, this.__resources, input);
  }

  public listDomainNames(): CloudSearchResponsesListDomainNames {
    return new CloudSearchResponsesListDomainNames(this, this.__resources);
  }

  public updateAvailabilityOptions(input: shapes.CloudSearchUpdateAvailabilityOptionsRequest): CloudSearchResponsesUpdateAvailabilityOptions {
    return new CloudSearchResponsesUpdateAvailabilityOptions(this, this.__resources, input);
  }

  public updateDomainEndpointOptions(input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest): CloudSearchResponsesUpdateDomainEndpointOptions {
    return new CloudSearchResponsesUpdateDomainEndpointOptions(this, this.__resources, input);
  }

  public updateScalingParameters(input: shapes.CloudSearchUpdateScalingParametersRequest): CloudSearchResponsesUpdateScalingParameters {
    return new CloudSearchResponsesUpdateScalingParameters(this, this.__resources, input);
  }

  public updateServiceAccessPolicies(input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest): CloudSearchResponsesUpdateServiceAccessPolicies {
    return new CloudSearchResponsesUpdateServiceAccessPolicies(this, this.__resources, input);
  }

}

export class CloudSearchResponsesBuildSuggesters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchBuildSuggestersRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BuildSuggesters.FieldNames', props);
    return resource.getResponseField('FieldNames') as unknown as string[];
  }

}

export class CloudSearchResponsesCreateDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchCreateDomainRequest) {
  }

  public get domainStatus(): CloudSearchResponsesCreateDomainDomainStatus {
    return new CloudSearchResponsesCreateDomainDomainStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesCreateDomainDomainStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchCreateDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.DomainId', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.DomainName', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.ARN', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.Created', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.Deleted', props);
    return resource.getResponseField('DomainStatus.Deleted') as unknown as boolean;
  }

  public get docService(): CloudSearchResponsesCreateDomainDomainStatusDocService {
    return new CloudSearchResponsesCreateDomainDomainStatusDocService(this.__scope, this.__resources, this.__input);
  }

  public get searchService(): CloudSearchResponsesCreateDomainDomainStatusSearchService {
    return new CloudSearchResponsesCreateDomainDomainStatusSearchService(this.__scope, this.__resources, this.__input);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.RequiresIndexDocuments', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.Processing', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.SearchInstanceType', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.SearchPartitionCount', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.SearchInstanceCount', props);
    return resource.getResponseField('DomainStatus.SearchInstanceCount') as unknown as number;
  }

  public get limits(): CloudSearchResponsesCreateDomainDomainStatusLimits {
    return new CloudSearchResponsesCreateDomainDomainStatusLimits(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesCreateDomainDomainStatusDocService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchCreateDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.DocService.Endpoint', props);
    return resource.getResponseField('DomainStatus.DocService.Endpoint') as unknown as string;
  }

}

export class CloudSearchResponsesCreateDomainDomainStatusSearchService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchCreateDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.SearchService.Endpoint', props);
    return resource.getResponseField('DomainStatus.SearchService.Endpoint') as unknown as string;
  }

}

export class CloudSearchResponsesCreateDomainDomainStatusLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchCreateDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.Limits.MaximumReplicationCount', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDomain.DomainStatus.Limits.MaximumPartitionCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumPartitionCount') as unknown as number;
  }

}

export class CloudSearchResponsesDefineAnalysisScheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
  }

  public get analysisScheme(): CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme {
    return new CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineAnalysisSchemeAnalysisScheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
  }

  public get options(): CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions {
    return new CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus {
    return new CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeLanguage') as unknown as string;
  }

  public get analysisOptions(): CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {
    return new CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming') as unknown as string;
  }

}

export class CloudSearchResponsesDefineAnalysisSchemeAnalysisSchemeStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Status.State', props);
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
          DomainName: this.__input.domainName,
          AnalysisScheme: {
            AnalysisSchemeName: this.__input.analysisScheme.analysisSchemeName,
            AnalysisSchemeLanguage: this.__input.analysisScheme.analysisSchemeLanguage,
            AnalysisOptions: {
              Synonyms: this.__input.analysisScheme.analysisOptions?.synonyms,
              Stopwords: this.__input.analysisScheme.analysisOptions?.stopwords,
              StemmingDictionary: this.__input.analysisScheme.analysisOptions?.stemmingDictionary,
              JapaneseTokenizationDictionary: this.__input.analysisScheme.analysisOptions?.japaneseTokenizationDictionary,
              AlgorithmicStemming: this.__input.analysisScheme.analysisOptions?.algorithmicStemming,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineAnalysisScheme.AnalysisScheme.Status.PendingDeletion', props);
    return resource.getResponseField('AnalysisScheme.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineExpression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineExpressionRequest) {
  }

  public get expression(): CloudSearchResponsesDefineExpressionExpression {
    return new CloudSearchResponsesDefineExpressionExpression(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineExpressionExpression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineExpressionRequest) {
  }

  public get options(): CloudSearchResponsesDefineExpressionExpressionOptions {
    return new CloudSearchResponsesDefineExpressionExpressionOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDefineExpressionExpressionStatus {
    return new CloudSearchResponsesDefineExpressionExpressionStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineExpressionExpressionOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineExpressionRequest) {
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Options.ExpressionName', props);
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Options.ExpressionValue', props);
    return resource.getResponseField('Expression.Options.ExpressionValue') as unknown as string;
  }

}

export class CloudSearchResponsesDefineExpressionExpressionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineExpressionRequest) {
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Status.State', props);
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
          DomainName: this.__input.domainName,
          Expression: {
            ExpressionName: this.__input.expression.expressionName,
            ExpressionValue: this.__input.expression.expressionValue,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineExpression.Expression.Status.PendingDeletion', props);
    return resource.getResponseField('Expression.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexField {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
  }

  public get indexField(): CloudSearchResponsesDefineIndexFieldIndexField {
    return new CloudSearchResponsesDefineIndexFieldIndexField(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexField {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
  }

  public get options(): CloudSearchResponsesDefineIndexFieldIndexFieldOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDefineIndexFieldIndexFieldStatus {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IndexFieldName', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IndexFieldType', props);
    return resource.getResponseField('IndexField.Options.IndexFieldType') as unknown as string;
  }

  public get intOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions(this.__scope, this.__resources, this.__input);
  }

  public get doubleOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions(this.__scope, this.__resources, this.__input);
  }

  public get literalOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions(this.__scope, this.__resources, this.__input);
  }

  public get textOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions(this.__scope, this.__resources, this.__input);
  }

  public get dateOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions(this.__scope, this.__resources, this.__input);
  }

  public get latLonOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions(this.__scope, this.__resources, this.__input);
  }

  public get intArrayOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get doubleArrayOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get literalArrayOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get textArrayOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get dateArrayOptions(): CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions {
    return new CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.SortEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.HighlightEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLatLonOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LatLonOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsIntArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDoubleArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsLiteralArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsTextArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldOptionsDateArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineIndexFieldIndexFieldStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Status.State', props);
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
          DomainName: this.__input.domainName,
          IndexField: {
            IndexFieldName: this.__input.indexField.indexFieldName,
            IndexFieldType: this.__input.indexField.indexFieldType,
            IntOptions: {
              DefaultValue: this.__input.indexField.intOptions?.defaultValue,
              SourceField: this.__input.indexField.intOptions?.sourceField,
              FacetEnabled: this.__input.indexField.intOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.intOptions?.sortEnabled,
            },
            DoubleOptions: {
              DefaultValue: this.__input.indexField.doubleOptions?.defaultValue,
              SourceField: this.__input.indexField.doubleOptions?.sourceField,
              FacetEnabled: this.__input.indexField.doubleOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.doubleOptions?.sortEnabled,
            },
            LiteralOptions: {
              DefaultValue: this.__input.indexField.literalOptions?.defaultValue,
              SourceField: this.__input.indexField.literalOptions?.sourceField,
              FacetEnabled: this.__input.indexField.literalOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.literalOptions?.sortEnabled,
            },
            TextOptions: {
              DefaultValue: this.__input.indexField.textOptions?.defaultValue,
              SourceField: this.__input.indexField.textOptions?.sourceField,
              ReturnEnabled: this.__input.indexField.textOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.textOptions?.sortEnabled,
              HighlightEnabled: this.__input.indexField.textOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textOptions?.analysisScheme,
            },
            DateOptions: {
              DefaultValue: this.__input.indexField.dateOptions?.defaultValue,
              SourceField: this.__input.indexField.dateOptions?.sourceField,
              FacetEnabled: this.__input.indexField.dateOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.dateOptions?.sortEnabled,
            },
            LatLonOptions: {
              DefaultValue: this.__input.indexField.latLonOptions?.defaultValue,
              SourceField: this.__input.indexField.latLonOptions?.sourceField,
              FacetEnabled: this.__input.indexField.latLonOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.latLonOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.latLonOptions?.returnEnabled,
              SortEnabled: this.__input.indexField.latLonOptions?.sortEnabled,
            },
            IntArrayOptions: {
              DefaultValue: this.__input.indexField.intArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.intArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.intArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.intArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.intArrayOptions?.returnEnabled,
            },
            DoubleArrayOptions: {
              DefaultValue: this.__input.indexField.doubleArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.doubleArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.doubleArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.doubleArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.doubleArrayOptions?.returnEnabled,
            },
            LiteralArrayOptions: {
              DefaultValue: this.__input.indexField.literalArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.literalArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.literalArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.literalArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.literalArrayOptions?.returnEnabled,
            },
            TextArrayOptions: {
              DefaultValue: this.__input.indexField.textArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.textArrayOptions?.sourceFields,
              ReturnEnabled: this.__input.indexField.textArrayOptions?.returnEnabled,
              HighlightEnabled: this.__input.indexField.textArrayOptions?.highlightEnabled,
              AnalysisScheme: this.__input.indexField.textArrayOptions?.analysisScheme,
            },
            DateArrayOptions: {
              DefaultValue: this.__input.indexField.dateArrayOptions?.defaultValue,
              SourceFields: this.__input.indexField.dateArrayOptions?.sourceFields,
              FacetEnabled: this.__input.indexField.dateArrayOptions?.facetEnabled,
              SearchEnabled: this.__input.indexField.dateArrayOptions?.searchEnabled,
              ReturnEnabled: this.__input.indexField.dateArrayOptions?.returnEnabled,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineIndexField.IndexField.Status.PendingDeletion', props);
    return resource.getResponseField('IndexField.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDefineSuggester {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineSuggesterRequest) {
  }

  public get suggester(): CloudSearchResponsesDefineSuggesterSuggester {
    return new CloudSearchResponsesDefineSuggesterSuggester(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineSuggesterSuggester {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineSuggesterRequest) {
  }

  public get options(): CloudSearchResponsesDefineSuggesterSuggesterOptions {
    return new CloudSearchResponsesDefineSuggesterSuggesterOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDefineSuggesterSuggesterStatus {
    return new CloudSearchResponsesDefineSuggesterSuggesterStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineSuggesterSuggesterOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Options.SuggesterName', props);
    return resource.getResponseField('Suggester.Options.SuggesterName') as unknown as string;
  }

  public get documentSuggesterOptions(): CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions {
    return new CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDefineSuggesterSuggesterOptionsDocumentSuggesterOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SortExpression') as unknown as string;
  }

}

export class CloudSearchResponsesDefineSuggesterSuggesterStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDefineSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Status.State', props);
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
          DomainName: this.__input.domainName,
          Suggester: {
            SuggesterName: this.__input.suggester.suggesterName,
            DocumentSuggesterOptions: {
              SourceField: this.__input.suggester.documentSuggesterOptions.sourceField,
              FuzzyMatching: this.__input.suggester.documentSuggesterOptions.fuzzyMatching,
              SortExpression: this.__input.suggester.documentSuggesterOptions.sortExpression,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DefineSuggester.Suggester.Status.PendingDeletion', props);
    return resource.getResponseField('Suggester.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteAnalysisScheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
  }

  public get analysisScheme(): CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme {
    return new CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteAnalysisSchemeAnalysisScheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
  }

  public get options(): CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions {
    return new CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus {
    return new CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeName', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisSchemeLanguage', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisSchemeLanguage') as unknown as string;
  }

  public get analysisOptions(): CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {
    return new CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeOptionsAnalysisOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Synonyms', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.Stopwords', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.StemmingDictionary', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.JapaneseTokenizationDictionary', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming', props);
    return resource.getResponseField('AnalysisScheme.Options.AnalysisOptions.AlgorithmicStemming') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteAnalysisSchemeAnalysisSchemeStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteAnalysisSchemeRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Status.State', props);
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
          DomainName: this.__input.domainName,
          AnalysisSchemeName: this.__input.analysisSchemeName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysisScheme.AnalysisScheme.Status.PendingDeletion', props);
    return resource.getResponseField('AnalysisScheme.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteDomainRequest) {
  }

  public get domainStatus(): CloudSearchResponsesDeleteDomainDomainStatus {
    return new CloudSearchResponsesDeleteDomainDomainStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteDomainDomainStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.DomainId', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.DomainName', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.ARN', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.Created', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.Deleted', props);
    return resource.getResponseField('DomainStatus.Deleted') as unknown as boolean;
  }

  public get docService(): CloudSearchResponsesDeleteDomainDomainStatusDocService {
    return new CloudSearchResponsesDeleteDomainDomainStatusDocService(this.__scope, this.__resources, this.__input);
  }

  public get searchService(): CloudSearchResponsesDeleteDomainDomainStatusSearchService {
    return new CloudSearchResponsesDeleteDomainDomainStatusSearchService(this.__scope, this.__resources, this.__input);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.RequiresIndexDocuments', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.Processing', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.SearchInstanceType', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.SearchPartitionCount', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.SearchInstanceCount', props);
    return resource.getResponseField('DomainStatus.SearchInstanceCount') as unknown as number;
  }

  public get limits(): CloudSearchResponsesDeleteDomainDomainStatusLimits {
    return new CloudSearchResponsesDeleteDomainDomainStatusLimits(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteDomainDomainStatusDocService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.DocService.Endpoint', props);
    return resource.getResponseField('DomainStatus.DocService.Endpoint') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteDomainDomainStatusSearchService {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.SearchService.Endpoint', props);
    return resource.getResponseField('DomainStatus.SearchService.Endpoint') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteDomainDomainStatusLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteDomainRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.Limits.MaximumReplicationCount', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDomain.DomainStatus.Limits.MaximumPartitionCount', props);
    return resource.getResponseField('DomainStatus.Limits.MaximumPartitionCount') as unknown as number;
  }

}

export class CloudSearchResponsesDeleteExpression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteExpressionRequest) {
  }

  public get expression(): CloudSearchResponsesDeleteExpressionExpression {
    return new CloudSearchResponsesDeleteExpressionExpression(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteExpressionExpression {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteExpressionRequest) {
  }

  public get options(): CloudSearchResponsesDeleteExpressionExpressionOptions {
    return new CloudSearchResponsesDeleteExpressionExpressionOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDeleteExpressionExpressionStatus {
    return new CloudSearchResponsesDeleteExpressionExpressionStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteExpressionExpressionOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteExpressionRequest) {
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Options.ExpressionName', props);
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Options.ExpressionValue', props);
    return resource.getResponseField('Expression.Options.ExpressionValue') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteExpressionExpressionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteExpressionRequest) {
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Status.State', props);
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
          DomainName: this.__input.domainName,
          ExpressionName: this.__input.expressionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteExpression.Expression.Status.PendingDeletion', props);
    return resource.getResponseField('Expression.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexField {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
  }

  public get indexField(): CloudSearchResponsesDeleteIndexFieldIndexField {
    return new CloudSearchResponsesDeleteIndexFieldIndexField(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexField {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
  }

  public get options(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDeleteIndexFieldIndexFieldStatus {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IndexFieldName', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IndexFieldType', props);
    return resource.getResponseField('IndexField.Options.IndexFieldType') as unknown as string;
  }

  public get intOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions(this.__scope, this.__resources, this.__input);
  }

  public get doubleOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions(this.__scope, this.__resources, this.__input);
  }

  public get literalOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions(this.__scope, this.__resources, this.__input);
  }

  public get textOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions(this.__scope, this.__resources, this.__input);
  }

  public get dateOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions(this.__scope, this.__resources, this.__input);
  }

  public get latLonOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions(this.__scope, this.__resources, this.__input);
  }

  public get intArrayOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get doubleArrayOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get literalArrayOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get textArrayOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions(this.__scope, this.__resources, this.__input);
  }

  public get dateArrayOptions(): CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions {
    return new CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.IntOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.SortEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.HighlightEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.DateOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLatLonOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LatLonOptions.SortEnabled', props);
    return resource.getResponseField('IndexField.Options.LatLonOptions.SortEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsIntArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.IntArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.IntArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDoubleArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DoubleArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DoubleArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsLiteralArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.LiteralArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.LiteralArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsTextArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextArrayOptions.ReturnEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextArrayOptions.HighlightEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.TextArrayOptions.AnalysisScheme', props);
    return resource.getResponseField('IndexField.Options.TextArrayOptions.AnalysisScheme') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldOptionsDateArrayOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateArrayOptions.DefaultValue', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateArrayOptions.SourceFields', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateArrayOptions.FacetEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateArrayOptions.SearchEnabled', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Options.DateArrayOptions.ReturnEnabled', props);
    return resource.getResponseField('IndexField.Options.DateArrayOptions.ReturnEnabled') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteIndexFieldIndexFieldStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteIndexFieldRequest) {
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Status.State', props);
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
          DomainName: this.__input.domainName,
          IndexFieldName: this.__input.indexFieldName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIndexField.IndexField.Status.PendingDeletion', props);
    return resource.getResponseField('IndexField.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDeleteSuggester {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteSuggesterRequest) {
  }

  public get suggester(): CloudSearchResponsesDeleteSuggesterSuggester {
    return new CloudSearchResponsesDeleteSuggesterSuggester(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteSuggesterSuggester {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteSuggesterRequest) {
  }

  public get options(): CloudSearchResponsesDeleteSuggesterSuggesterOptions {
    return new CloudSearchResponsesDeleteSuggesterSuggesterOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDeleteSuggesterSuggesterStatus {
    return new CloudSearchResponsesDeleteSuggesterSuggesterStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteSuggesterSuggesterOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Options.SuggesterName', props);
    return resource.getResponseField('Suggester.Options.SuggesterName') as unknown as string;
  }

  public get documentSuggesterOptions(): CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions {
    return new CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDeleteSuggesterSuggesterOptionsDocumentSuggesterOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SourceField', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.FuzzyMatching', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Options.DocumentSuggesterOptions.SortExpression', props);
    return resource.getResponseField('Suggester.Options.DocumentSuggesterOptions.SortExpression') as unknown as string;
  }

}

export class CloudSearchResponsesDeleteSuggesterSuggesterStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDeleteSuggesterRequest) {
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Status.State', props);
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
          DomainName: this.__input.domainName,
          SuggesterName: this.__input.suggesterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSuggester.Suggester.Status.PendingDeletion', props);
    return resource.getResponseField('Suggester.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDescribeAnalysisSchemes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeAnalysisSchemesRequest) {
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
          DomainName: this.__input.domainName,
          AnalysisSchemeNames: this.__input.analysisSchemeNames,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisSchemes.AnalysisSchemes', props);
    return resource.getResponseField('AnalysisSchemes') as unknown as shapes.CloudSearchAnalysisSchemeStatus[];
  }

}

export class CloudSearchResponsesDescribeAvailabilityOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
  }

  public get availabilityOptions(): CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions {
    return new CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Options', props);
    return resource.getResponseField('AvailabilityOptions.Options') as unknown as boolean;
  }

  public get status(): CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus {
    return new CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeAvailabilityOptionsAvailabilityOptionsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeAvailabilityOptionsRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.State', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion', props);
    return resource.getResponseField('AvailabilityOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDescribeDomainEndpointOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
  }

  public get domainEndpointOptions(): CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions {
    return new CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
  }

  public get options(): CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions {
    return new CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus {
    return new CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
    return resource.getResponseField('DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as string;
  }

}

export class CloudSearchResponsesDescribeDomainEndpointOptionsDomainEndpointOptionsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeDomainEndpointOptionsRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.State', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDescribeDomains {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeDomainsRequest) {
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
          DomainNames: this.__input.domainNames,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDomains.DomainStatusList', props);
    return resource.getResponseField('DomainStatusList') as unknown as shapes.CloudSearchDomainStatus[];
  }

}

export class CloudSearchResponsesDescribeExpressions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeExpressionsRequest) {
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
          DomainName: this.__input.domainName,
          ExpressionNames: this.__input.expressionNames,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeExpressions.Expressions', props);
    return resource.getResponseField('Expressions') as unknown as shapes.CloudSearchExpressionStatus[];
  }

}

export class CloudSearchResponsesDescribeIndexFields {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeIndexFieldsRequest) {
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
          DomainName: this.__input.domainName,
          FieldNames: this.__input.fieldNames,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIndexFields.IndexFields', props);
    return resource.getResponseField('IndexFields') as unknown as shapes.CloudSearchIndexFieldStatus[];
  }

}

export class CloudSearchResponsesDescribeScalingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeScalingParametersRequest) {
  }

  public get scalingParameters(): CloudSearchResponsesDescribeScalingParametersScalingParameters {
    return new CloudSearchResponsesDescribeScalingParametersScalingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeScalingParametersScalingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeScalingParametersRequest) {
  }

  public get options(): CloudSearchResponsesDescribeScalingParametersScalingParametersOptions {
    return new CloudSearchResponsesDescribeScalingParametersScalingParametersOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesDescribeScalingParametersScalingParametersStatus {
    return new CloudSearchResponsesDescribeScalingParametersScalingParametersStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeScalingParametersScalingParametersOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeScalingParametersRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Options.DesiredInstanceType', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Options.DesiredReplicationCount', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Options.DesiredPartitionCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredPartitionCount') as unknown as number;
  }

}

export class CloudSearchResponsesDescribeScalingParametersScalingParametersStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeScalingParametersRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Status.State', props);
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeScalingParameters.ScalingParameters.Status.PendingDeletion', props);
    return resource.getResponseField('ScalingParameters.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDescribeServiceAccessPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
  }

  public get accessPolicies(): CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies {
    return new CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeServiceAccessPoliciesAccessPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Options', props);
    return resource.getResponseField('AccessPolicies.Options') as unknown as string;
  }

  public get status(): CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus {
    return new CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesDescribeServiceAccessPoliciesAccessPoliciesStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeServiceAccessPoliciesRequest) {
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Status.State', props);
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
          DomainName: this.__input.domainName,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceAccessPolicies.AccessPolicies.Status.PendingDeletion', props);
    return resource.getResponseField('AccessPolicies.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesDescribeSuggesters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchDescribeSuggestersRequest) {
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
          DomainName: this.__input.domainName,
          SuggesterNames: this.__input.suggesterNames,
          Deployed: this.__input.deployed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSuggesters.Suggesters', props);
    return resource.getResponseField('Suggesters') as unknown as shapes.CloudSearchSuggesterStatus[];
  }

}

export class CloudSearchResponsesIndexDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchIndexDocumentsRequest) {
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
          DomainName: this.__input.domainName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IndexDocuments.FieldNames', props);
    return resource.getResponseField('FieldNames') as unknown as string[];
  }

}

export class CloudSearchResponsesListDomainNames {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDomainNames.DomainNames', props);
    return resource.getResponseField('DomainNames') as unknown as Record<string, string>;
  }

}

export class CloudSearchResponsesUpdateAvailabilityOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
  }

  public get availabilityOptions(): CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions {
    return new CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Options', props);
    return resource.getResponseField('AvailabilityOptions.Options') as unknown as boolean;
  }

  public get status(): CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus {
    return new CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateAvailabilityOptionsAvailabilityOptionsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateAvailabilityOptionsRequest) {
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.State', props);
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
          DomainName: this.__input.domainName,
          MultiAZ: this.__input.multiAz,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAvailabilityOptions.AvailabilityOptions.Status.PendingDeletion', props);
    return resource.getResponseField('AvailabilityOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesUpdateDomainEndpointOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
  }

  public get domainEndpointOptions(): CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions {
    return new CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
  }

  public get options(): CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions {
    return new CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus {
    return new CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Options.EnforceHTTPS', props);
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Options.TLSSecurityPolicy', props);
    return resource.getResponseField('DomainEndpointOptions.Options.TLSSecurityPolicy') as unknown as string;
  }

}

export class CloudSearchResponsesUpdateDomainEndpointOptionsDomainEndpointOptionsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateDomainEndpointOptionsRequest) {
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.State', props);
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
          DomainName: this.__input.domainName,
          DomainEndpointOptions: {
            EnforceHTTPS: this.__input.domainEndpointOptions.enforceHttps,
            TLSSecurityPolicy: this.__input.domainEndpointOptions.tlsSecurityPolicy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDomainEndpointOptions.DomainEndpointOptions.Status.PendingDeletion', props);
    return resource.getResponseField('DomainEndpointOptions.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesUpdateScalingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateScalingParametersRequest) {
  }

  public get scalingParameters(): CloudSearchResponsesUpdateScalingParametersScalingParameters {
    return new CloudSearchResponsesUpdateScalingParametersScalingParameters(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateScalingParametersScalingParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateScalingParametersRequest) {
  }

  public get options(): CloudSearchResponsesUpdateScalingParametersScalingParametersOptions {
    return new CloudSearchResponsesUpdateScalingParametersScalingParametersOptions(this.__scope, this.__resources, this.__input);
  }

  public get status(): CloudSearchResponsesUpdateScalingParametersScalingParametersStatus {
    return new CloudSearchResponsesUpdateScalingParametersScalingParametersStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateScalingParametersScalingParametersOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateScalingParametersRequest) {
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Options.DesiredInstanceType', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Options.DesiredReplicationCount', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Options.DesiredPartitionCount', props);
    return resource.getResponseField('ScalingParameters.Options.DesiredPartitionCount') as unknown as number;
  }

}

export class CloudSearchResponsesUpdateScalingParametersScalingParametersStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateScalingParametersRequest) {
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Status.State', props);
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
          DomainName: this.__input.domainName,
          ScalingParameters: {
            DesiredInstanceType: this.__input.scalingParameters.desiredInstanceType,
            DesiredReplicationCount: this.__input.scalingParameters.desiredReplicationCount,
            DesiredPartitionCount: this.__input.scalingParameters.desiredPartitionCount,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateScalingParameters.ScalingParameters.Status.PendingDeletion', props);
    return resource.getResponseField('ScalingParameters.Status.PendingDeletion') as unknown as boolean;
  }

}

export class CloudSearchResponsesUpdateServiceAccessPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
  }

  public get accessPolicies(): CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies {
    return new CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateServiceAccessPoliciesAccessPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Options', props);
    return resource.getResponseField('AccessPolicies.Options') as unknown as string;
  }

  public get status(): CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus {
    return new CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CloudSearchResponsesUpdateServiceAccessPoliciesAccessPoliciesStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudSearchUpdateServiceAccessPoliciesRequest) {
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Status.CreationDate', props);
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateDate', props);
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Status.UpdateVersion', props);
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Status.State', props);
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
          DomainName: this.__input.domainName,
          AccessPolicies: this.__input.accessPolicies,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServiceAccessPolicies.AccessPolicies.Status.PendingDeletion', props);
    return resource.getResponseField('AccessPolicies.Status.PendingDeletion') as unknown as boolean;
  }

}

