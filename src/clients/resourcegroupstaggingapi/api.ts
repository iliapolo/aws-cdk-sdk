import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ResourceGroupsTaggingApiClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeReportCreation(): ResourceGroupsTaggingAPIDescribeReportCreation {
    return new ResourceGroupsTaggingAPIDescribeReportCreation(this, 'DescribeReportCreation', this.__resources);
  }

  public fetchComplianceSummary(input: shapes.ResourceGroupsTaggingApiGetComplianceSummaryInput): ResourceGroupsTaggingAPIFetchComplianceSummary {
    return new ResourceGroupsTaggingAPIFetchComplianceSummary(this, 'FetchComplianceSummary', this.__resources, input);
  }

  public fetchResources(input: shapes.ResourceGroupsTaggingApiGetResourcesInput): ResourceGroupsTaggingAPIFetchResources {
    return new ResourceGroupsTaggingAPIFetchResources(this, 'FetchResources', this.__resources, input);
  }

  public fetchTagKeys(input: shapes.ResourceGroupsTaggingApiGetTagKeysInput): ResourceGroupsTaggingAPIFetchTagKeys {
    return new ResourceGroupsTaggingAPIFetchTagKeys(this, 'FetchTagKeys', this.__resources, input);
  }

  public fetchTagValues(input: shapes.ResourceGroupsTaggingApiGetTagValuesInput): ResourceGroupsTaggingAPIFetchTagValues {
    return new ResourceGroupsTaggingAPIFetchTagValues(this, 'FetchTagValues', this.__resources, input);
  }

  public startReportCreation(input: shapes.ResourceGroupsTaggingApiStartReportCreationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.StartReportCreation'),
        parameters: {
          S3Bucket: input.s3Bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartReportCreation', props);
  }

  public tagResources(input: shapes.ResourceGroupsTaggingApiTagResourcesInput): ResourceGroupsTaggingAPITagResources {
    return new ResourceGroupsTaggingAPITagResources(this, 'TagResources', this.__resources, input);
  }

  public untagResources(input: shapes.ResourceGroupsTaggingApiUntagResourcesInput): ResourceGroupsTaggingAPIUntagResources {
    return new ResourceGroupsTaggingAPIUntagResources(this, 'UntagResources', this.__resources, input);
  }

}

export class ResourceGroupsTaggingAPIDescribeReportCreation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.Status'),
        outputPath: 'Status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReportCreation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get s3Location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.S3Location'),
        outputPath: 'S3Location',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReportCreation.S3Location', props);
    return resource.getResponseField('S3Location') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReportCreation.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

}

export class ResourceGroupsTaggingAPIFetchComplianceSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiGetComplianceSummaryInput) {
    super(scope, id);
  }

  public get summaryList(): shapes.ResourceGroupsTaggingApiSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceSummary',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetComplianceSummary.SummaryList'),
        outputPath: 'SummaryList',
        parameters: {
          TargetIdFilters: this.input.targetIdFilters,
          RegionFilters: this.input.regionFilters,
          ResourceTypeFilters: this.input.resourceTypeFilters,
          TagKeyFilters: this.input.tagKeyFilters,
          GroupBy: this.input.groupBy,
          MaxResults: this.input.maxResults,
          PaginationToken: this.input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceSummary.SummaryList', props);
    return resource.getResponseField('SummaryList') as unknown as shapes.ResourceGroupsTaggingApiSummary[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceSummary',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetComplianceSummary.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          TargetIdFilters: this.input.targetIdFilters,
          RegionFilters: this.input.regionFilters,
          ResourceTypeFilters: this.input.resourceTypeFilters,
          TagKeyFilters: this.input.tagKeyFilters,
          GroupBy: this.input.groupBy,
          MaxResults: this.input.maxResults,
          PaginationToken: this.input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetComplianceSummary.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

}

export class ResourceGroupsTaggingAPIFetchResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiGetResourcesInput) {
    super(scope, id);
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetResources.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.input.paginationToken,
          TagFilters: this.input.tagFilters,
          ResourcesPerPage: this.input.resourcesPerPage,
          TagsPerPage: this.input.tagsPerPage,
          ResourceTypeFilters: this.input.resourceTypeFilters,
          IncludeComplianceDetails: this.input.includeComplianceDetails,
          ExcludeCompliantResources: this.input.excludeCompliantResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get resourceTagMappingList(): shapes.ResourceGroupsTaggingApiResourceTagMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetResources.ResourceTagMappingList'),
        outputPath: 'ResourceTagMappingList',
        parameters: {
          PaginationToken: this.input.paginationToken,
          TagFilters: this.input.tagFilters,
          ResourcesPerPage: this.input.resourcesPerPage,
          TagsPerPage: this.input.tagsPerPage,
          ResourceTypeFilters: this.input.resourceTypeFilters,
          IncludeComplianceDetails: this.input.includeComplianceDetails,
          ExcludeCompliantResources: this.input.excludeCompliantResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetResources.ResourceTagMappingList', props);
    return resource.getResponseField('ResourceTagMappingList') as unknown as shapes.ResourceGroupsTaggingApiResourceTagMapping[];
  }

}

export class ResourceGroupsTaggingAPIFetchTagKeys extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiGetTagKeysInput) {
    super(scope, id);
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagKeys',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagKeys.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTagKeys.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get tagKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagKeys',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagKeys.TagKeys'),
        outputPath: 'TagKeys',
        parameters: {
          PaginationToken: this.input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTagKeys.TagKeys', props);
    return resource.getResponseField('TagKeys') as unknown as string[];
  }

}

export class ResourceGroupsTaggingAPIFetchTagValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiGetTagValuesInput) {
    super(scope, id);
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagValues',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagValues.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.input.paginationToken,
          Key: this.input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTagValues.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get tagValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagValues',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagValues.TagValues'),
        outputPath: 'TagValues',
        parameters: {
          PaginationToken: this.input.paginationToken,
          Key: this.input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTagValues.TagValues', props);
    return resource.getResponseField('TagValues') as unknown as string[];
  }

}

export class ResourceGroupsTaggingAPITagResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiTagResourcesInput) {
    super(scope, id);
  }

  public get failedResourcesMap(): Record<string, shapes.ResourceGroupsTaggingApiFailureInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.TagResources.FailedResourcesMap'),
        outputPath: 'FailedResourcesMap',
        parameters: {
          ResourceARNList: this.input.resourceArnList,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResources.FailedResourcesMap', props);
    return resource.getResponseField('FailedResourcesMap') as unknown as Record<string, shapes.ResourceGroupsTaggingApiFailureInfo>;
  }

}

export class ResourceGroupsTaggingAPIUntagResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTaggingApiUntagResourcesInput) {
    super(scope, id);
  }

  public get failedResourcesMap(): Record<string, shapes.ResourceGroupsTaggingApiFailureInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.UntagResources.FailedResourcesMap'),
        outputPath: 'FailedResourcesMap',
        parameters: {
          ResourceARNList: this.input.resourceArnList,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UntagResources.FailedResourcesMap', props);
    return resource.getResponseField('FailedResourcesMap') as unknown as Record<string, shapes.ResourceGroupsTaggingApiFailureInfo>;
  }

}

